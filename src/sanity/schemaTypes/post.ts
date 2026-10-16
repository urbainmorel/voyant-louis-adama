import { defineType, defineField } from 'sanity';

export const postType = defineType({
  name: 'post',
  title: 'Articles du Blog Spirituel',
  type: 'document',
  fields: [
    defineField({
      name: 'order',
      title: 'Numéro / Ordre de l’article',
      description: 'Position d’ordonnancement dans la liste et le maillage (1 à 20).',
      type: 'number',
      initialValue: 1,
    }),
    defineField({
      name: 'title',
      title: 'Titre de l’article (H1)',
      description: 'Titre principal captivant et riche en mots-clés de recherche.',
      type: 'string',
      validation: (rule) => rule.required().error('Le titre de l’article est obligatoire'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug URL',
      description: 'Identifiant URL unique (ex: secret-rituel-richesse-africaine).',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required().error('Le slug URL est obligatoire'),
    }),
    defineField({
      name: 'category',
      title: 'Catégorie affichée (Badge)',
      description: 'Libellé de la pastille (ex: Haute Prospérité, Amour & Harmonie).',
      type: 'string',
      validation: (rule) => rule.required().error('La catégorie est obligatoire'),
    }),
    defineField({
      name: 'cluster',
      title: 'Pôle / Silo Sémantique (Filtre du blog)',
      description: 'Classification thématique du cocon sémantique.',
      type: 'string',
      options: {
        list: [
          { title: 'Richesse & Prospérité (P1)', value: 'richesse' },
          { title: 'Retour Affectif & Couple (P2)', value: 'amour' },
          { title: 'Protection & Autorité', value: 'protection-autorite' },
        ],
      },
      validation: (rule) => rule.required().error('Le pôle sémantique est obligatoire'),
    }),
    defineField({
      name: 'date',
      title: 'Date affichée (ex: 15 Octobre 2026)',
      type: 'string',
      initialValue: '15 Octobre 2026',
    }),
    defineField({
      name: 'readTime',
      title: 'Temps de lecture (ex: 6 min)',
      type: 'string',
      initialValue: '6 min',
    }),
    defineField({
      name: 'image',
      title: 'Chemin de l’image locale (ex: /images/cards/...)',
      type: 'string',
    }),
    defineField({
      name: 'imageAsset',
      title: 'Image téléversée sur Sanity (Optionnel, remplace l’image locale)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'excerpt',
      title: 'Extrait / Résumé affiché sur les cartes',
      description: 'Accroche courte pour les cartes du blog et les aperçus.',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required().error('L’extrait est obligatoire'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Méta Description SEO (Google)',
      description: 'Description pour les moteurs de recherche (150-160 caractères recommandés).',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required().error('La méta description SEO est obligatoire'),
    }),
    defineField({
      name: 'featured',
      title: 'Afficher en aperçu sur la page d’accueil',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'keyTakeaways',
      title: 'Points Clés Retenus Par la Tradition (Encadré résumé)',
      description: 'Liste de 3 à 4 points majeurs mis en avant dans l’encart AEO.',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'content',
      title: 'Corps de l’article (Texte riche & Paragraphes)',
      description:
        'Rédigez votre article avec confort : paragraphes, intertitres H2/H3, listes, citations traditionnelles et images d’illustration.',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal (Paragraphe)', value: 'normal' },
            { title: 'Titre H2', value: 'h2' },
            { title: 'Titre H3', value: 'h3' },
            { title: 'Citation', value: 'blockquote' },
          ],
          lists: [
            { title: 'Puces', value: 'bullet' },
            { title: 'Numérotée', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Gras', value: 'strong' },
              { title: 'Italique', value: 'em' },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Texte alternatif (SEO & Accessibilité)',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Légende sous la photo',
            },
          ],
        },
      ],
      validation: (rule) => rule.required().error('Le contenu de l’article est obligatoire'),
    }),
    defineField({
      name: 'adviceQuote',
      title: 'Le Conseil du Maître (Encadré encart personnalisé)',
      description: 'Citation mise en exergue au milieu de l’article dans un encadré distinctif.',
      type: 'text',
      rows: 3,
      initialValue:
        'Ne laissez jamais un blocage financier ou une déchirure amoureuse s\'enraciner avec le temps. Plus l\'intervention spirituelle est rapide, plus la délivrance est nette et lumineuse.',
    }),
    defineField({
      name: 'ctaBannerTitle',
      title: 'Titre de la bannière WhatsApp de fin',
      description: 'Titre d’incitation au contact situé en bas de l’article.',
      type: 'string',
      initialValue: 'Besoin d\'un Rituel Sur-Mesure ?',
    }),
    defineField({
      name: 'ctaBannerSubtitle',
      title: 'Sous-titre de la bannière WhatsApp',
      description: 'Sous-titre rassurant expliquant les modalités d’échange direct avec le Maître.',
      type: 'text',
      rows: 2,
      initialValue:
        'Échangez directement avec le Maître Louis Adama sur WhatsApp pour un diagnostic précis de votre situation.',
    }),
  ],
  orderings: [
    {
      title: 'Ordre croissant',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'imageAsset',
    },
  },
});
