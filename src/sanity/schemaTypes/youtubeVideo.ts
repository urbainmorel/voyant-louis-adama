import { defineType, defineField } from 'sanity';

export const youtubeVideoType = defineType({
  name: 'youtubeVideo',
  title: 'Vidéos des Rituels YouTube',
  type: 'document',
  fields: [
    defineField({
      name: 'order',
      title: 'Ordre d’affichage',
      description: 'Position numérique de la vidéo dans la galerie (1, 2, 3...).',
      type: 'number',
      initialValue: 1,
    }),
    defineField({
      name: 'videoId',
      title: 'Identifiant de la vidéo YouTube (ID)',
      description: 'Code identifiant de la vidéo YouTube (ex: sU27vKKbg2Y).',
      type: 'string',
      validation: (rule) => rule.required().error('L’identifiant YouTube est obligatoire'),
    }),
    defineField({
      name: 'title',
      title: 'Titre de la vidéo',
      description: 'Titre explicatif du rituel ou de la cérémonie filmée.',
      type: 'string',
      validation: (rule) => rule.required().error('Le titre de la vidéo est obligatoire'),
    }),
    defineField({
      name: 'description',
      title: 'Description du rituel',
      description: 'Court texte descriptif accompagnant la vidéo.',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'badge',
      title: 'Badge / Pastille thématique',
      description: 'Exemple : Haute Prospérité, Amour & Harmonie, Purification, Haute Protection.',
      type: 'string',
      initialValue: 'Haute Prospérité',
    }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      description: 'Pôle spirituel (ex: Richesse, Amour, Purification, Protection).',
      type: 'string',
      initialValue: 'Richesse',
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
      subtitle: 'badge',
    },
  },
});
