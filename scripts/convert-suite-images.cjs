const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const srcDir = 'c:/Users/DELL/Downloads/Suite Louis Adama';
const outBase = path.join(__dirname, '../public/images');

const mappings = [
  // Envoi de colis
  { src: 'Envoi de colis/envoie de colis DHL.jpg', dest: 'colis/bordereau-dhl-france-merdrignac.webp', maxW: 960 },
  { src: 'Envoi de colis/DHL_(1).jpg', dest: 'colis/bordereau-dhl-congo-brazzaville.webp', maxW: 600 },
  { src: 'Envoi de colis/DHL_.jpg', dest: 'colis/recu-officiel-dhl-adama-louis.webp', maxW: 800 },
  { src: 'Envoi de colis/DHL.jpg', dest: 'colis/colis-dhl-reception-billets-fcfa.webp', maxW: 800 },
  { src: 'Envoi de colis/envoie colis par DHL.jpg', dest: 'colis/boite-dhl-sacoche-sacree-bougies.webp', maxW: 800 },
  { src: 'Envoi de colis/envoie colis DHL.jpg', dest: 'colis/suivi-en-ligne-tracking-dhl.webp', maxW: 700 },
  { src: 'Envoi de colis/envoie colis par bus STM.jpg', dest: 'colis/ticket-bus-stm-cotonou-ouagadougou-1.webp', maxW: 780 },
  { src: 'Envoi de colis/envoie colis par bus.jpg', dest: 'colis/ticket-bus-stm-cotonou-ouagadougou-2.webp', maxW: 780 },
  
  // Témoignages WhatsApp
  { src: 'Témoignages WhatsApp/Nombreux Témoignages_.jpg', dest: 'preuves_whatsapp/liste-discussions-whatsapp-business.webp', maxW: 600 },
  { src: 'Témoignages WhatsApp/TÉMOIGNAGES_(1).jpg', dest: 'preuves_whatsapp/temoignage-whatsapp-belgique.webp', maxW: 600 },
  { src: 'Témoignages WhatsApp/TÉMOIGNAGES_(2).jpg', dest: 'preuves_whatsapp/temoignage-whatsapp-senegal-liasse-amour.webp', maxW: 600 },
  { src: 'Témoignages WhatsApp/TÉMOIGNAGES_(3).jpg', dest: 'preuves_whatsapp/temoignage-whatsapp-france-5000-euros.webp', maxW: 600 },
  { src: 'Témoignages WhatsApp/TÉMOIGNAGES_.jpg', dest: 'preuves_whatsapp/temoignage-whatsapp-diaspora-remerciement.webp', maxW: 600 },

  // Bains de purification & savons
  { src: 'bain de purification_ (1).jpg', dest: 'purification/bain-purification-deblocage-ingredients.webp', maxW: 700 },
  { src: 'bain de purification_ (2).jpg', dest: 'purification/rituel-bain-purification-domicile.webp', maxW: 800 },
  { src: 'bain de purification_ (3).jpg', dest: 'purification/bain-purification-eau-saint-michel-citron.webp', maxW: 800 },
  { src: 'savon de chance.jpg', dest: 'purification/savons-noirs-traditionnels-chance-miroir.webp', maxW: 852 },

  // Rituels & Cérémonies
  { src: 'IMG-20261016-WA0028.jpg', dest: 'rituels/ceremonie-couvent-louis-adama-initiations.webp', maxW: 853 },
  { src: 'rituel retour affectfif (1).jpg', dest: 'rituels/rituel-retour-affectif-autel-fruits.webp', maxW: 736 },
  { src: 'rituel retour affectfif (2).jpg', dest: 'rituels/rituel-retour-affectif-pomme-ruban-rouge.webp', maxW: 736 },
  { src: 'rituel retour affectfif (3).jpg', dest: 'rituels/grand-autel-ceremoniel-feuilles-sacrees.webp', maxW: 720 },
  { src: 'rituel retour affectfif (4).jpg', dest: 'rituels/rituel-eau-sacree-offrande-fleurs.webp', maxW: 736 },
  { src: 'rituel richessse (1).jpg', dest: 'rituels/autel-richesse-attestation-merite-benin.webp', maxW: 960 },
  { src: 'rituel richessse (2).jpg', dest: 'rituels/autel-richesse-statuettes-ancestrales.webp', maxW: 960 }
];

async function convertAll() {
  const summary = [];
  for (const item of mappings) {
    const inputPath = path.join(srcDir, item.src);
    const outputPath = path.join(outBase, item.dest);
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const img = sharp(inputPath);
    const meta = await img.metadata();
    
    // Resize proportionally without altering aspect ratio (strictly preserving vertical ratio!)
    let pipeline = img;
    if (meta.width > item.maxW) {
      pipeline = pipeline.resize({ width: item.maxW, withoutEnlargement: true });
    }
    
    // Choose appropriate quality to stay under 100KB
    let q = 80;
    if (item.dest.startsWith('rituels/')) {
      q = 76;
    }
    if (item.dest === 'purification/savons-noirs-traditionnels-chance-miroir.webp') {
      q = 78;
    }
    
    await pipeline.webp({ quality: q, effort: 6 }).toFile(outputPath);
    
    // If still > 98KB, recompress with slightly lower quality
    let outStat = fs.statSync(outputPath);
    if (outStat.size > 98 * 1024) {
      await pipeline.webp({ quality: q - 8, effort: 6 }).toFile(outputPath);
      outStat = fs.statSync(outputPath);
    }
    if (outStat.size > 98 * 1024) {
      await pipeline.webp({ quality: q - 14, effort: 6 }).toFile(outputPath);
      outStat = fs.statSync(outputPath);
    }
    
    const outMeta = await sharp(outputPath).metadata();
    const info = {
      dest: item.dest,
      width: outMeta.width,
      height: outMeta.height,
      ratio: (outMeta.width / outMeta.height).toFixed(3),
      sizeKB: (outStat.size / 1024).toFixed(1)
    };
    summary.push(info);
    console.log(`Converted: ${info.dest} | ${info.width}x${info.height} (ratio: ${info.ratio}) | ${info.sizeKB} KB`);
  }

  // Also write an image manifest JSON for Astro to use if needed
  fs.writeFileSync(
    path.join(__dirname, '../src/data/suiteImagesManifest.json'),
    JSON.stringify(summary, null, 2)
  );
  console.log('Manifest written successfully!');
}

convertAll().catch(err => {
  console.error('Error during conversion:', err);
  process.exit(1);
});
