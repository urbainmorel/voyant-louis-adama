import { createClient } from '@sanity/client';
import {
  SITE_CONFIG,
  SERVICES,
  VALUES_DATA,
  TESTIMONIALS_DATA,
  FAQ_DATA,
  BLOG_POSTS,
  type ServiceItem,
  type ValueItem,
  type TestimonialItem,
  type FaqItem,
  type BlogPost,
} from '../data/siteData';

export const sanityClient = createClient({
  projectId: '53eovdkv',
  dataset: 'production',
  apiVersion: '2025-02-19',
  useCdn: false,
});

export interface SiteSettingsData {
  name: string;
  titleSuffix: string;
  phoneDisplay: string;
  phoneRaw: string;
  phoneApi: string;
  locationDisplay: string;
  siteUrl: string;
  ogImage: string;
  countries: string[];
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  valuesTitle: string;
  valuesDescription: string;
}

const DEFAULT_SETTINGS: SiteSettingsData = {
  ...SITE_CONFIG,
  heroBadge: 'Grand Maître Spirituel et Voyant Africain – Consultations 7j/7',
  heroTitle: 'Richesse, Prospérité Financière, Chance et Retour Affectif',
  heroSubtitle:
    "Finances bloquées, commerce en difficulté ou souffrance amoureuse causée par une rivale ? Le grand Médium Voyant Louis Adama met la puissance des rituels traditionnels africains au service de votre réussite financière, de votre chance et de l'harmonie de votre couple.",
  valuesTitle: "Médium Voyant Louis Adama : La Force Spirituelle d'un Grand Maître Africain",
  valuesDescription:
    "Héritier d'une prestigieuse lignée de voyants et d'initiés, le Médium Voyant Louis Adama incarne la tradition spirituelle africaine la plus rigoureuse. Recommandé par des milliers de personnes au Cameroun, en Côte d'Ivoire, au Gabon, au Sénégal, en RDC et dans toute la diaspora, il intervient avec précision pour débloquer votre destinée financière et sécuriser votre bonheur affectif.",
};

export async function getSiteSettings(): Promise<SiteSettingsData> {
  try {
    const data = await sanityClient.fetch(
      `*[_type == "siteSettings" && _id == "siteSettings"][0]`
    );
    if (!data) return DEFAULT_SETTINGS;
    return {
      name: data.name || DEFAULT_SETTINGS.name,
      titleSuffix: data.titleSuffix || DEFAULT_SETTINGS.titleSuffix,
      phoneDisplay: data.phoneDisplay || DEFAULT_SETTINGS.phoneDisplay,
      phoneRaw: data.phoneRaw || DEFAULT_SETTINGS.phoneRaw,
      phoneApi: data.phoneApi || DEFAULT_SETTINGS.phoneApi,
      locationDisplay: data.locationDisplay || DEFAULT_SETTINGS.locationDisplay,
      siteUrl: data.siteUrl || DEFAULT_SETTINGS.siteUrl,
      ogImage: DEFAULT_SETTINGS.ogImage,
      countries: Array.isArray(data.countries) && data.countries.length > 0 ? data.countries : DEFAULT_SETTINGS.countries,
      heroBadge: data.heroBadge || DEFAULT_SETTINGS.heroBadge,
      heroTitle: data.heroTitle || DEFAULT_SETTINGS.heroTitle,
      heroSubtitle: data.heroSubtitle || DEFAULT_SETTINGS.heroSubtitle,
      valuesTitle: data.valuesTitle || DEFAULT_SETTINGS.valuesTitle,
      valuesDescription: data.valuesDescription || DEFAULT_SETTINGS.valuesDescription,
    };
  } catch (err) {
    console.warn('Fallback getSiteSettings:', err);
    return DEFAULT_SETTINGS;
  }
}

export async function getServices(): Promise<ServiceItem[]> {
  try {
    const items = await sanityClient.fetch(
      `*[_type == "service"] | order(order asc) {
        "id": coalesce(order, 1),
        "slug": slug.current,
        price,
        badge,
        title,
        description,
        "image": coalesce(imageAsset.asset->url, image),
        beds,
        baths,
        area,
        featured,
        ctaText,
        whatsappMessage,
        fullDescription,
        benefits
      }`
    );
    if (!Array.isArray(items) || items.length === 0) return SERVICES;
    return items.map((s: any, idx: number) => ({
      id: s.id ?? idx + 1,
      slug: s.slug || `service-${idx + 1}`,
      price: s.price || 'Abondance & Richesse',
      badge: s.badge || 'Haute Prospérité',
      title: s.title || '',
      description: s.description || '',
      image: s.image || '/images/cards/rituel%20richesse%20prosperite%20(9).webp',
      beds: s.beds || 'Action Rapide',
      baths: s.baths || 'Zéro Choc',
      area: s.area || 'Résultats Garantis',
      featured: Boolean(s.featured),
      ctaText: s.ctaText || 'Nous Contacter',
      whatsappMessage: s.whatsappMessage || `Bonjour Maître Louis Adama, je souhaite solliciter le service : ${s.title}`,
      fullDescription: s.fullDescription || s.description || '',
      benefits: Array.isArray(s.benefits) ? s.benefits : [],
    }));
  } catch (err) {
    console.warn('Fallback getServices:', err);
    return SERVICES;
  }
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const posts = await sanityClient.fetch(
      `*[_type == "post" && defined(slug.current)] | order(order asc) {
        "id": coalesce(order, 1),
        "slug": slug.current,
        title,
        category,
        cluster,
        date,
        readTime,
        "image": coalesce(imageAsset.asset->url, image),
        excerpt,
        metaDescription,
        featured,
        keyTakeaways,
        content
      }`
    );
    if (!Array.isArray(posts) || posts.length === 0) return BLOG_POSTS;
    return posts.map((p: any, idx: number) => ({
      id: p.id ?? idx + 1,
      slug: p.slug,
      title: p.title || '',
      category: p.category || 'Spiritualité Africaine',
      cluster: p.cluster || 'richesse',
      date: p.date || '15 Octobre 2026',
      readTime: p.readTime || '6 min',
      image: p.image || '/images/cards/rituel%20richesse%20prosperite%20(9).webp',
      excerpt: p.excerpt || '',
      metaDescription: p.metaDescription || p.excerpt || '',
      featured: Boolean(p.featured),
      keyTakeaways: Array.isArray(p.keyTakeaways) ? p.keyTakeaways : [],
      content: Array.isArray(p.content)
        ? p.content
        : typeof p.content === 'string'
        ? p.content.split('\n\n').filter(Boolean)
        : [],
    }));
  } catch (err) {
    console.warn('Fallback getBlogPosts:', err);
    return BLOG_POSTS;
  }
}

export async function getTestimonials(): Promise<TestimonialItem[]> {
  try {
    const items = await sanityClient.fetch(
      `*[_type == "testimonial"] | order(order asc) {
        "id": coalesce(order, 1),
        quote,
        author,
        location,
        stars,
        service,
        avatar,
        featured
      }`
    );
    if (!Array.isArray(items) || items.length === 0) return TESTIMONIALS_DATA;
    return items.map((t: any, idx: number) => ({
      id: t.id ?? idx + 1,
      quote: t.quote || '',
      author: t.author || 'Client Satisfait',
      location: t.location || 'Afrique',
      stars: Number(t.stars) || 5,
      service: t.service || 'Consultation Spirituelle',
      avatar: t.avatar || '/images/avatars/IMG_4708.webp',
      featured: Boolean(t.featured),
    }));
  } catch (err) {
    console.warn('Fallback getTestimonials:', err);
    return TESTIMONIALS_DATA;
  }
}

export async function getFaqs(): Promise<FaqItem[]> {
  try {
    const items = await sanityClient.fetch(
      `*[_type == "faq"] | order(order asc) {
        question,
        answer,
        activeByDefault
      }`
    );
    if (!Array.isArray(items) || items.length === 0) return FAQ_DATA;
    return items.map((f: any) => ({
      question: f.question || '',
      answer: f.answer || '',
      activeByDefault: Boolean(f.activeByDefault),
    }));
  } catch (err) {
    console.warn('Fallback getFaqs:', err);
    return FAQ_DATA;
  }
}

export async function getValues(): Promise<ValueItem[]> {
  try {
    const items = await sanityClient.fetch(
      `*[_type == "valueItem"] | order(order asc) {
        "id": coalesce(order, 1),
        title,
        icon,
        description,
        activeByDefault
      }`
    );
    if (!Array.isArray(items) || items.length === 0) return VALUES_DATA;
    return items.map((v: any, idx: number) => ({
      id: v.id ?? idx + 1,
      title: v.title || '',
      icon: v.icon || 'fa-shield-halved',
      description: v.description || '',
      activeByDefault: Boolean(v.activeByDefault),
    }));
  } catch (err) {
    console.warn('Fallback getValues:', err);
    return VALUES_DATA;
  }
}
