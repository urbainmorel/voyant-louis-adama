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
  type YouTubeVideoItem,
  type GalleryPhotoItem,
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
  // Hero
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  heroStat1Number: string;
  heroStat1Label: string;
  heroStat2Number: string;
  heroStat2Label: string;
  heroStat3Number: string;
  heroStat3Label: string;
  heroImage: string;
  // Sections
  valuesTitle: string;
  valuesDescription: string;
  valuesImage: string;
  servicesBadge: string;
  servicesTitle: string;
  servicesSubtitle: string;
  videoGalleryBadge: string;
  videoGalleryTitle: string;
  videoGallerySubtitle: string;
  photoGalleryBadge: string;
  photoGalleryTitle: string;
  blogHeaderBadge: string;
  blogHeaderTitle: string;
  blogHeaderSubtitle: string;
  // Action Banner
  actionBannerTitle: string;
  actionBannerSubtitle: string;
  actionBannerBadge1: string;
  actionBannerBadge2: string;
  actionBannerBadge3: string;
  // Footer
  footerBio: string;
  footerReassurance: string;
}

const DEFAULT_SETTINGS: SiteSettingsData = {
  ...SITE_CONFIG,
  heroBadge: 'Grand Maître Spirituel et Voyant Africain',
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
};

const DEFAULT_YOUTUBE_VIDEOS: YouTubeVideoItem[] = [
  {
    id: 'sU27vKKbg2Y',
    videoId: 'sU27vKKbg2Y',
    title: 'Cérémonie & Rituels Sacrés de Haute Prospérité',
    desc: 'Découvrez les invocations et travaux de délivrance financière conduits au sanctuaire par le Médium Louis Adama.',
    badge: 'Haute Prospérité',
    category: 'Richesse',
  },
  {
    id: 'Io0TnBO6s_k',
    videoId: 'Io0TnBO6s_k',
    title: "Retour Affectif Rapide & Cadenas d'Amour",
    desc: "Témoignage rituel sur la reconquête amoureuse, le retour de l'être aimé et la pacification du couple.",
    badge: 'Amour & Harmonie',
    category: 'Amour',
  },
  {
    id: 'y1aIDutgAfE',
    videoId: 'y1aIDutgAfE',
    title: 'Bains de Purification & Savons Sacrés de Chance',
    desc: 'Préparation des écorces et eaux saintes pour dissoudre les ondes négatives et attirer la chance.',
    badge: 'Purification',
    category: 'Purification',
  },
  {
    id: '54P3UgNaPe4',
    videoId: '54P3UgNaPe4',
    title: 'Blindage Spirituel & Protection du Foyer',
    desc: 'Rituel de protection contre la sorcellerie, le mauvais œil et les attaques de la jalousie.',
    badge: 'Haute Protection',
    category: 'Protection',
  },
];

const DEFAULT_GALLERY_PHOTOS: GalleryPhotoItem[] = [
  { title: 'Rituel de Richesse & Prospérité 8', category: 'Richesse', image: '/images/cards/rituel%20richesse%20prosperite%20(8).webp' },
  { title: 'Rituel de Richesse & Prospérité 1', category: 'Richesse', image: '/images/cards/rituel%20richesse%20prosperite%20(1).webp' },
  { title: 'Rituel de Richesse & Prospérité 2', category: 'Richesse', image: '/images/cards/rituel%20richesse%20prosperite%20(2).webp' },
  { title: 'Rituel de Richesse & Prospérité 3', category: 'Richesse', image: '/images/cards/rituel%20richesse%20prosperite%20(3).webp' },
  { title: 'Rituel de Richesse & Prospérité 4', category: 'Richesse', image: '/images/cards/rituel%20richesse%20prosperite%20(4).webp' },
  { title: 'Rituel de Richesse & Prospérité 5', category: 'Richesse', image: '/images/cards/rituel%20richesse%20prosperite%20(5).webp' },
  { title: 'Rituel de Richesse & Prospérité 6', category: 'Richesse', image: '/images/cards/rituel%20richesse%20prosperite%20(6).webp' },
  { title: 'Rituel de Richesse & Prospérité 7', category: 'Richesse', image: '/images/cards/rituel%20richesse%20prosperite%20(7).webp' },
  { title: 'Rituel de Richesse & Prospérité 9', category: 'Richesse', image: '/images/cards/rituel%20richesse%20prosperite%20(9).webp' },
  { title: 'Rituel de Richesse & Prospérité 10', category: 'Richesse', image: '/images/cards/rituel%20richesse%20prosperite%20(10).webp' },
  { title: 'Rituel de Richesse & Prospérité 11', category: 'Richesse', image: '/images/cards/rituel%20richesse%20prosperite%20(11).webp' },
  { title: 'Rituel de Richesse & Prospérité 12', category: 'Richesse', image: '/images/cards/rituel%20richesse%20prosperite%20(12).webp' },
  { title: 'Rituel de Richesse & Prospérité 13', category: 'Richesse', image: '/images/cards/rituel%20richesse%20prosperite%20(13).webp' },
];

export async function getSiteSettings(): Promise<SiteSettingsData> {
  try {
    const data = await sanityClient.fetch(
      `*[_type == "siteSettings" && _id == "siteSettings"][0] {
        ...,
        "heroImageResolved": coalesce(heroImageAsset.asset->url, heroImage),
        "valuesImageResolved": coalesce(valuesImageAsset.asset->url, valuesImage)
      }`
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
      // Hero
      heroBadge: data.heroBadge || DEFAULT_SETTINGS.heroBadge,
      heroTitle: data.heroTitle || DEFAULT_SETTINGS.heroTitle,
      heroSubtitle: data.heroSubtitle || DEFAULT_SETTINGS.heroSubtitle,
      heroStat1Number: data.heroStat1Number || DEFAULT_SETTINGS.heroStat1Number,
      heroStat1Label: data.heroStat1Label || DEFAULT_SETTINGS.heroStat1Label,
      heroStat2Number: data.heroStat2Number || DEFAULT_SETTINGS.heroStat2Number,
      heroStat2Label: data.heroStat2Label || DEFAULT_SETTINGS.heroStat2Label,
      heroStat3Number: data.heroStat3Number || DEFAULT_SETTINGS.heroStat3Number,
      heroStat3Label: data.heroStat3Label || DEFAULT_SETTINGS.heroStat3Label,
      heroImage: data.heroImageResolved || DEFAULT_SETTINGS.heroImage,
      // Sections
      valuesTitle: data.valuesTitle || DEFAULT_SETTINGS.valuesTitle,
      valuesDescription: data.valuesDescription || DEFAULT_SETTINGS.valuesDescription,
      valuesImage: data.valuesImageResolved || DEFAULT_SETTINGS.valuesImage,
      servicesBadge: data.servicesBadge || DEFAULT_SETTINGS.servicesBadge,
      servicesTitle: data.servicesTitle || DEFAULT_SETTINGS.servicesTitle,
      servicesSubtitle: data.servicesSubtitle || DEFAULT_SETTINGS.servicesSubtitle,
      videoGalleryBadge: data.videoGalleryBadge || DEFAULT_SETTINGS.videoGalleryBadge,
      videoGalleryTitle: data.videoGalleryTitle || DEFAULT_SETTINGS.videoGalleryTitle,
      videoGallerySubtitle: data.videoGallerySubtitle || DEFAULT_SETTINGS.videoGallerySubtitle,
      photoGalleryBadge: data.photoGalleryBadge || DEFAULT_SETTINGS.photoGalleryBadge,
      photoGalleryTitle: data.photoGalleryTitle || DEFAULT_SETTINGS.photoGalleryTitle,
      blogHeaderBadge: data.blogHeaderBadge || DEFAULT_SETTINGS.blogHeaderBadge,
      blogHeaderTitle: data.blogHeaderTitle || DEFAULT_SETTINGS.blogHeaderTitle,
      blogHeaderSubtitle: data.blogHeaderSubtitle || DEFAULT_SETTINGS.blogHeaderSubtitle,
      // Action Banner
      actionBannerTitle: data.actionBannerTitle || DEFAULT_SETTINGS.actionBannerTitle,
      actionBannerSubtitle: data.actionBannerSubtitle || DEFAULT_SETTINGS.actionBannerSubtitle,
      actionBannerBadge1: data.actionBannerBadge1 || DEFAULT_SETTINGS.actionBannerBadge1,
      actionBannerBadge2: data.actionBannerBadge2 || DEFAULT_SETTINGS.actionBannerBadge2,
      actionBannerBadge3: data.actionBannerBadge3 || DEFAULT_SETTINGS.actionBannerBadge3,
      // Footer
      footerBio: data.footerBio || DEFAULT_SETTINGS.footerBio,
      footerReassurance: data.footerReassurance || DEFAULT_SETTINGS.footerReassurance,
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
      beds: s.beds || 'Ouverture des Voies',
      baths: s.baths || 'Zéro Choc',
      area: s.area || 'Résultats Rapides',
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
        content,
        adviceQuote,
        ctaBannerTitle,
        ctaBannerSubtitle
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
        ? p.content.map((item: any) => {
            if (typeof item === 'string') return item;
            if (item && item._type === 'block' && Array.isArray(item.children)) {
              return item.children.map((child: any) => child.text || '').join('');
            }
            if (item && typeof item.text === 'string') return item.text;
            return typeof item === 'object' ? JSON.stringify(item) : String(item);
          })
        : typeof p.content === 'string'
        ? p.content.split('\n\n').filter(Boolean)
        : [],
      adviceQuote:
        p.adviceQuote ||
        'Ne laissez jamais un blocage financier ou une déchirure amoureuse s\'enraciner avec le temps. Plus l\'intervention spirituelle est rapide, plus la délivrance est nette et lumineuse.',
      ctaBannerTitle: p.ctaBannerTitle || "Besoin d'un Rituel Sur-Mesure ?",
      ctaBannerSubtitle:
        p.ctaBannerSubtitle ||
        'Échangez directement avec le Maître Louis Adama sur WhatsApp pour un diagnostic précis de votre situation.',
    }));
  } catch (err) {
    console.warn('Fallback getBlogPosts:', err);
    return BLOG_POSTS;
  }
}

export async function getYoutubeVideos(): Promise<YouTubeVideoItem[]> {
  try {
    const items = await sanityClient.fetch(
      `*[_type == "youtubeVideo"] | order(order asc) {
        "id": coalesce(videoId, _id),
        videoId,
        title,
        "desc": coalesce(description, ""),
        badge,
        category
      }`
    );
    if (!Array.isArray(items) || items.length === 0) return DEFAULT_YOUTUBE_VIDEOS;
    return items.map((v: any, idx: number) => ({
      id: v.videoId || v.id || `video-${idx + 1}`,
      videoId: v.videoId || v.id || '',
      title: v.title || '',
      desc: v.desc || '',
      badge: v.badge || 'Haute Prospérité',
      category: v.category || 'Richesse',
    }));
  } catch (err) {
    console.warn('Fallback getYoutubeVideos:', err);
    return DEFAULT_YOUTUBE_VIDEOS;
  }
}

export async function getGalleryPhotos(): Promise<GalleryPhotoItem[]> {
  try {
    const items = await sanityClient.fetch(
      `*[_type == "galleryPhoto"] | order(order asc) {
        title,
        category,
        "image": coalesce(imageAsset.asset->url, image)
      }`
    );
    if (!Array.isArray(items) || items.length === 0) return DEFAULT_GALLERY_PHOTOS;
    return items.map((photo: any, idx: number) => ({
      title: photo.title || `Photo ${idx + 1}`,
      category: photo.category || 'Richesse',
      image: photo.image || '/images/cards/rituel%20richesse%20prosperite%20(1).webp',
    }));
  } catch (err) {
    console.warn('Fallback getGalleryPhotos:', err);
    return DEFAULT_GALLERY_PHOTOS;
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
