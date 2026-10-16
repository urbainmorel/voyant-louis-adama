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
  await client.delete({ query: '*[_type in ["service", "post", "testimonial", "faq", "valueItem"]]' });

  console.log('1/6 - Création du singleton siteSettings...');
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
    valuesTitle: "Médium Voyant Louis Adama : La Force Spirituelle d'un Grand Maître Africain",
    valuesDescription:
      "Héritier d'une prestigieuse lignée de voyants et d'initiés, le Médium Voyant Louis Adama incarne la tradition spirituelle africaine la plus rigoureuse. Recommandé par des milliers de personnes au Cameroun, en Côte d'Ivoire, au Gabon, au Sénégal, en RDC et dans toute la diaspora, il intervient avec précision pour débloquer votre destinée financière et sécuriser votre bonheur affectif.",
    countries: SITE_CONFIG.countries,
  });

  console.log(`2/6 - Importation des ${SERVICES.length} Rituels & Services...`);
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

  console.log(`3/6 - Importation des ${BLOG_POSTS.length} Articles de Blog...`);
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
      content: p.content,
    });
  }

  console.log(`4/6 - Importation des ${TESTIMONIALS_DATA.length} Témoignages...`);
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

  console.log(`5/6 - Importation des ${FAQ_DATA.length} Questions Fréquentes (FAQ)...`);
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

  console.log(`6/6 - Importation des ${VALUES_DATA.length} Valeurs & Autorité...`);
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
