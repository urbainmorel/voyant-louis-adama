import { defineType, defineField } from 'sanity';

export const postType = defineType({
  name: 'post',
  title: 'Articles du Blog Spirituel',
  type: 'document',
  fields: [
    defineField({
      name: 'order',
      title: 'Numéro / Ordre de l’article',
      type: 'number',
      initialValue: 1,
    }),
    defineField({
      name: 'title',
      title: 'Titre de l’article (H1)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug URL',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Catégorie affichée (Badge)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'cluster',
      title: 'Pôle / Silo Sémantique (Filtre du blog)',
      type: 'string',
      options: {
        list: [
          { title: 'Richesse & Prospérité (P1)', value: 'richesse' },
          { title: 'Retour Affectif & Couple (P2)', value: 'amour' },
          { title: 'Protection & Autorité', value: 'protection-autorite' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date affichée (ex: 12 Octobre 2026)',
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
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Méta Description SEO (Google)',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
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
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'content',
      title: 'Paragraphes du corps de l’article',
      type: 'array',
      of: [{ type: 'text', rows: 5 }],
      validation: (rule) => rule.required(),
    }),
  ],
  orderings: [
    {
      title: 'Ordre',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
    },
  },
});
