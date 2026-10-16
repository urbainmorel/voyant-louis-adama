const fs = require('fs');
const path = require('path');
const { createClient } = require('@sanity/client');

const token = process.env.SANITY_API_TOKEN || 'skK3NkDysG93roKFBC3gLoTyhbYWVvgaaKp3KqJ74OCM8SiwWba1lwdlR1NyKRKgzSPLp5BEYpTOsjnwNfh929r0wonvUh9N4TMSNbBdzvn8MFygzS7aEGjCIktkNaoUoPDqFZDuOCiBb8oUdGrPRKjrgKywvW7J5leRmvBkLn66NRrOhMiv';

const client = createClient({
  projectId: '53eovdkv',
  dataset: 'production',
  apiVersion: '2025-02-19',
  useCdn: false,
  token,
});

const assetCache = new Map();

async function getOrUploadAsset(relativeUrl) {
  if (!relativeUrl) return null;
  const decodedPath = decodeURIComponent(relativeUrl.replace(/^\//, ''));
  const absolutePath = path.join(process.cwd(), 'public', decodedPath);

  if (!fs.existsSync(absolutePath)) {
    console.warn(`[WARN] File not found on disk: ${absolutePath}`);
    return null;
  }

  if (assetCache.has(absolutePath)) {
    return assetCache.get(absolutePath);
  }

  try {
    const filename = path.basename(absolutePath);
    console.log(`[UPLOAD] Téléversement vers Sanity Cloud: ${filename}...`);
    const stream = fs.createReadStream(absolutePath);
    const asset = await client.assets.upload('image', stream, {
      filename,
    });
    console.log(`[OK] Téléversé: ${filename} -> Asset ID: ${asset._id}`);
    assetCache.set(absolutePath, asset._id);
    return asset._id;
  } catch (err) {
    console.error(`[ERROR] Échec upload pour ${absolutePath}:`, err.message);
    return null;
  }
}

async function run() {
  console.log('--- Démarrage de la synchronisation des médias vers Sanity Cloud ---');

  // 1. Services
  console.log('\n1. Synchronisation des Rituels & Services...');
  const services = await client.fetch('*[_type == "service"]{ _id, title, image, imageAsset }');
  for (const s of services) {
    if (s.image) {
      const assetId = await getOrUploadAsset(s.image);
      if (assetId) {
        await client.patch(s._id).set({
          imageAsset: {
            _type: 'image',
            asset: { _type: 'reference', _ref: assetId },
          },
        }).commit();
        console.log(`  -> Service "${s.title}" lié à l'asset.`);
      }
    }
  }

  // 2. Blog Posts
  console.log('\n2. Synchronisation des Articles de Blog...');
  const posts = await client.fetch('*[_type == "post"]{ _id, title, image, imageAsset }');
  for (const p of posts) {
    if (p.image) {
      const assetId = await getOrUploadAsset(p.image);
      if (assetId) {
        await client.patch(p._id).set({
          imageAsset: {
            _type: 'image',
            asset: { _type: 'reference', _ref: assetId },
          },
        }).commit();
        console.log(`  -> Article "${p.title.slice(0, 40)}..." lié à l'asset.`);
      }
    }
  }

  // 3. Galerie Photos Sanctuaire
  console.log('\n3. Synchronisation de la Galerie Photos Sanctuaire...');
  const gallery = await client.fetch('*[_type == "galleryPhoto"]{ _id, title, image, imageAsset }');
  for (const g of gallery) {
    if (g.image) {
      const assetId = await getOrUploadAsset(g.image);
      if (assetId) {
        await client.patch(g._id).set({
          imageAsset: {
            _type: 'image',
            asset: { _type: 'reference', _ref: assetId },
          },
        }).commit();
        console.log(`  -> Photo "${g.title}" liée à l'asset.`);
      }
    }
  }

  // 4. Paramètres Globaux (Hero & Couvent)
  console.log('\n4. Synchronisation des Images Globales (Hero & Sanctuaire)...');
  const settings = await client.fetch('*[_id == "siteSettings"][0]{ _id, heroImage, valuesImage }');
  if (settings) {
    const patches = {};
    if (settings.heroImage) {
      const heroAssetId = await getOrUploadAsset(settings.heroImage);
      if (heroAssetId) {
        patches.heroImageAsset = {
          _type: 'image',
          asset: { _type: 'reference', _ref: heroAssetId },
        };
      }
    }
    if (settings.valuesImage) {
      const valuesAssetId = await getOrUploadAsset(settings.valuesImage);
      if (valuesAssetId) {
        patches.valuesImageAsset = {
          _type: 'image',
          asset: { _type: 'reference', _ref: valuesAssetId },
        };
      }
    }
    if (Object.keys(patches).length > 0) {
      await client.patch('siteSettings').set(patches).commit();
      console.log('  -> Images globales Hero & Voûte Sacrée liées aux assets.');
    }
  }

  console.log('\n=== Synchronisation des Médias Terminée avec Succès ! ===');
  console.log(`Total d'assets téléversés dans le Cloud Sanity: ${assetCache.size}`);
}

run().catch((err) => {
  console.error('Erreur critique pendant la synchronisation:', err);
  process.exit(1);
});
