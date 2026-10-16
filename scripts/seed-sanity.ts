import { createClient } from '@sanity/client';
import {
  SITE_CONFIG,
  SERVICES,
  VALUES_DATA,
  TESTIMONIALS_DATA,
  FAQ_DATA,
  BLOG_POSTS,
} from '../src/data/siteData.ts';

const token = process.env.SANITY_API_TOKEN;
if (!token) {
  throw new Error('Missing SANITY_API_TOKEN environment variable');
}

const client = createClient({
  projectId: '53eovdkv',
  dataset: 'production',
  apiVersion: '2025-02-19',
  token,
  useCdn: false,
});

async function seedSanity() {
  console.log('Nettoyage des anciens documents (hors singleton)...');
  await client.delete({
    query: '*[_type in ["service", "post", "testimonial", "faq", "valueItem", "youtubeVideo", "galleryPhoto"]]',
  });

  console.log('1/8 - Création du singleton siteSettings...');
  await client.createOrReplace({
    _id: 'siteSettings',
    _type: 'siteSettings',
    name: SITE_CONFIG.name,
    titleSuffix: SITE_CONFIG.titleSuffix,
    phoneDisplay: SITE_CONFIG.phoneDisplay,
    phoneRaw: SITE_CONFIG.phoneRaw,
    phoneApi: SITE_CONFIG.phoneApi,
    locationDisplay: SITE_CONFIG.locationDisplay,
    siteUrl: SITE_CONFIG.siteUrl,
    heroBadge: 'Grand Maître Spirituel et Voyant Africain – Consultations 7j/7',
    heroTitle: 'Richesse, Prospérité Financière, Chance et Retour Affectif',
    heroSubtitle:
      "Finances bloquées, commerce en difficulté ou souffrance amoureuse causée par une rivale ? Le grand Médium Voyant Louis Adama met la puissance des rituels traditionnels africains au service de votre réussite financière, de votre chance et de l'harmonie de votre couple.",
    heroStat1Number: '15K+',
    heroStat1Label: 'Rituels Réalisés',
    heroStat2Number: '98%',
    heroStat2Label: 'Avis Favorables',
    heroStat3Number: '25+',
    heroStat3Label: "Années d'Expérience",
    heroImage: '/images/hero_arch/maitre-voyant-adama-hero.webp',
    valuesTitle: "Médium Voyant Louis Adama : La Force Spirituelle d'un Grand Maître Africain",
    valuesDescription:
      "Héritier d'une prestigieuse lignée de voyants et d'initiés, le Médium Voyant Louis Adama incarne la tradition spirituelle africaine la plus rigoureuse. Recommandé par des milliers de personnes au Cameroun, en Côte d'Ivoire, au Gabon, au Sénégal, en RDC et dans toute la diaspora, il intervient avec précision pour débloquer votre destinée financière et sécuriser votre bonheur affectif.",
    valuesImage: '/images/hero_arch/couvent%20marabout%20(4).webp',
    countries: SITE_CONFIG.countries,
    servicesBadge: 'Prestations Majeures',
    servicesTitle: 'Nos Services Spirituels Majeurs',
    servicesSubtitle: "Découvrez nos pôles d'action spirituelle dédiés à votre élévation matérielle et sentimentale :",
    videoGalleryBadge: 'Immersion Spirituelle en Vidéo',
    videoGalleryTitle: 'Vidéos des Rituels & Cérémonies Sacrées',
    videoGallerySubtitle: 'Visionnez directement les cérémonies menées au sanctuaire du Grand Médium Voyant Africain Louis Adama.',
    photoGalleryBadge: 'Galerie',
    photoGalleryTitle: 'Immersion au Sanctuaire',
    blogHeaderBadge: 'Cocon Sémantique Initiatique',
    blogHeaderTitle: "Guides et Enseignements Spirituels d'Afrique",
    blogHeaderSubtitle:
      "Découvrez 20 dossiers complets rédigés selon la pure tradition ésotérique africaine pour vous éclairer sur les rituels de richesse, la réussite en affaires, la reconquête sentimentale et la protection mystique.",
    actionBannerTitle: "Débloquez Votre Avenir Dès Aujourd'hui",
    actionBannerSubtitle:
      'Prenez contact en toute confidentialité pour recevoir une réponse rapide et un diagnostic clair sur votre situation financière ou sentimentale.',
    actionBannerBadge1: 'Secret absolu',
    actionBannerBadge2: 'Zéro choc en retour',
    actionBannerBadge3: 'Réponse 7j/7',
    footerBio:
      'Grand Maître Spirituel et Voyant Africain. Rituels traditionnels de prospérité, retour affectif, chance et protection spirituelle.',
    footerReassurance: 'Confidentialité absolue & Secret professionnel garanti',
  });

  console.log(`2/8 - Importation des ${SERVICES.length} Rituels & Services...`);
  for (const s of SERVICES) {
    await client.create({
      _type: 'service',
      order: s.id,
      title: s.title,
      slug: { _type: 'slug', current: s.slug },
      price: s.price,
      badge: s.badge,
      description: s.description,
      fullDescription: s.fullDescription,
      image: s.image,
      beds: s.beds,
      baths: s.baths,
      area: s.area,
      featured: s.featured,
      ctaText: s.ctaText,
      whatsappMessage: s.whatsappMessage,
      benefits: s.benefits,
    });
  }

  console.log(`3/8 - Importation des ${BLOG_POSTS.length} Articles de Blog...`);
  const featuredIndices = new Set([0, 10, 15]);
  for (let i = 0; i < BLOG_POSTS.length; i++) {
    const p = BLOG_POSTS[i];
    await client.create({
      _type: 'post',
      order: p.id,
      title: p.title,
      slug: { _type: 'slug', current: p.slug },
      category: p.category,
      cluster: p.cluster,
      date: p.date,
      readTime: p.readTime,
      image: p.image,
      excerpt: p.excerpt,
      metaDescription: p.metaDescription,
      featured: Boolean(p.featured || featuredIndices.has(i)),
      keyTakeaways: p.keyTakeaways,
      content: Array.isArray(p.content)
        ? p.content.map((paragraph: string, pIdx: number) => ({
            _type: 'block',
            _key: `block_${i}_${pIdx}`,
            style: 'normal',
            markDefs: [],
            children: [
              {
                _type: 'span',
                _key: `span_${i}_${pIdx}`,
                text: paragraph,
                marks: [],
              },
            ],
          }))
        : p.content,
      adviceQuote:
        p.adviceQuote ||
        'Ne laissez jamais un blocage financier ou une déchirure amoureuse s\'enraciner avec le temps. Plus l\'intervention spirituelle est rapide, plus la délivrance est nette et lumineuse.',
      ctaBannerTitle: p.ctaBannerTitle || "Besoin d'un Rituel Sur-Mesure ?",
      ctaBannerSubtitle:
        p.ctaBannerSubtitle ||
        'Échangez directement avec le Maître Louis Adama sur WhatsApp pour un diagnostic précis de votre situation.',
    });
  }

  console.log('4/8 - Importation des Vidéos YouTube...');
  const YOUTUBE_VIDEOS = [
    {
      order: 1,
      videoId: 'sU27vKKbg2Y',
      title: 'Cérémonie & Rituels Sacrés de Haute Prospérité',
      description: 'Découvrez les invocations et travaux de délivrance financière conduits au sanctuaire par le Médium Louis Adama.',
      badge: 'Haute Prospérité',
      category: 'Richesse',
    },
    {
      order: 2,
      videoId: 'Io0TnBO6s_k',
      title: "Retour Affectif Rapide & Cadenas d'Amour",
      description: "Témoignage rituel sur la reconquête amoureuse, le retour de l'être aimé et la pacification du couple.",
      badge: 'Amour & Harmonie',
      category: 'Amour',
    },
    {
      order: 3,
      videoId: 'y1aIDutgAfE',
      title: 'Bains de Purification & Savons Sacrés de Chance',
      description: 'Préparation des écorces et eaux saintes pour dissoudre les ondes négatives et attirer la chance.',
      badge: 'Purification',
      category: 'Purification',
    },
    {
      order: 4,
      videoId: '54P3UgNaPe4',
      title: 'Blindage Spirituel & Protection du Foyer',
      description: 'Rituel de protection contre la sorcellerie, le mauvais œil et les attaques de la jalousie.',
      badge: 'Haute Protection',
      category: 'Protection',
    },
  ];
  for (const v of YOUTUBE_VIDEOS) {
    await client.create({
      _type: 'youtubeVideo',
      order: v.order,
      videoId: v.videoId,
      title: v.title,
      description: v.description,
      badge: v.badge,
      category: v.category,
    });
  }

  console.log('5/8 - Importation des Photos du Sanctuaire...');
  const GALLERY_PHOTOS = [
    { order: 1, title: 'Rituel de Richesse & Prospérité 8', category: 'Richesse', image: '/images/cards/rituel%20richesse%20prosperite%20(8).webp' },
    { order: 2, title: 'Rituel de Richesse & Prospérité 1', category: 'Richesse', image: '/images/cards/rituel%20richesse%20prosperite%20(1).webp' },
    { order: 3, title: 'Rituel de Richesse & Prospérité 2', category: 'Richesse', image: '/images/cards/rituel%20richesse%20prosperite%20(2).webp' },
    { order: 4, title: 'Rituel de Richesse & Prospérité 3', category: 'Richesse', image: '/images/cards/rituel%20richesse%20prosperite%20(3).webp' },
    { order: 5, title: 'Rituel de Richesse & Prospérité 4', category: 'Richesse', image: '/images/cards/rituel%20richesse%20prosperite%20(4).webp' },
    { order: 6, title: 'Rituel de Richesse & Prospérité 5', category: 'Richesse', image: '/images/cards/rituel%20richesse%20prosperite%20(5).webp' },
    { order: 7, title: 'Rituel de Richesse & Prospérité 6', category: 'Richesse', image: '/images/cards/rituel%20richesse%20prosperite%20(6).webp' },
    { order: 8, title: 'Rituel de Richesse & Prospérité 7', category: 'Richesse', image: '/images/cards/rituel%20richesse%20prosperite%20(7).webp' },
    { order: 9, title: 'Rituel de Richesse & Prospérité 9', category: 'Richesse', image: '/images/cards/rituel%20richesse%20prosperite%20(9).webp' },
    { order: 10, title: 'Rituel de Richesse & Prospérité 10', category: 'Richesse', image: '/images/cards/rituel%20richesse%20prosperite%20(10).webp' },
    { order: 11, title: 'Rituel de Richesse & Prospérité 11', category: 'Richesse', image: '/images/cards/rituel%20richesse%20prosperite%20(11).webp' },
    { order: 12, title: 'Rituel de Richesse & Prospérité 12', category: 'Richesse', image: '/images/cards/rituel%20richesse%20prosperite%20(12).webp' },
    { order: 13, title: 'Rituel de Richesse & Prospérité 13', category: 'Richesse', image: '/images/cards/rituel%20richesse%20prosperite%20(13).webp' },
  ];
  for (const gp of GALLERY_PHOTOS) {
    await client.create({
      _type: 'galleryPhoto',
      order: gp.order,
      title: gp.title,
      category: gp.category,
      image: gp.image,
    });
  }

  console.log(`6/8 - Importation des ${TESTIMONIALS_DATA.length} Témoignages...`);
  for (const t of TESTIMONIALS_DATA) {
    await client.create({
      _type: 'testimonial',
      order: t.id,
      author: t.author,
      location: t.location,
      service: t.service,
      quote: t.quote,
      stars: t.stars,
      avatar: t.avatar,
      featured: Boolean(t.featured),
    });
  }

  console.log(`7/8 - Importation des ${FAQ_DATA.length} Questions Fréquentes (FAQ)...`);
  for (let i = 0; i < FAQ_DATA.length; i++) {
    const f = FAQ_DATA[i];
    await client.create({
      _type: 'faq',
      order: i + 1,
      question: f.question,
      answer: f.answer,
      activeByDefault: Boolean(f.activeByDefault),
    });
  }

  console.log(`8/8 - Importation des ${VALUES_DATA.length} Valeurs & Autorité...`);
  for (const v of VALUES_DATA) {
    await client.create({
      _type: 'valueItem',
      order: v.id,
      title: v.title,
      icon: v.icon,
      description: v.description,
      activeByDefault: Boolean(v.activeByDefault),
    });
  }

  console.log('✅ Synchronisation complète vers Sanity Cloud terminée avec succès !');
}

seedSanity().catch((err) => {
  console.error('Erreur lors de la synchronisation Sanity :', err);
  process.exit(1);
});
