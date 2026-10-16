import { defineType, defineField } from 'sanity';

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Témoignages Clients',
  type: 'document',
  fields: [
    defineField({
      name: 'order',
      title: "Ordre d'affichage",
      type: 'number',
      initialValue: 1,
    }),
    defineField({
      name: 'author',
      title: 'Nom du Client (ex: Jean-Paul N.)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Ville & Pays (ex: Douala, Cameroun)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'service',
      title: 'Service sollicité (ex: Commerce & Richesse)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'quote',
      title: 'Témoignage',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'stars',
      title: 'Nombre d’étoiles (1 à 5)',
      type: 'number',
      initialValue: 5,
      validation: (rule) => rule.min(1).max(5),
    }),
    defineField({
      name: 'avatar',
      title: 'Chemin de l’avatar',
      type: 'string',
      initialValue: '/images/avatars/IMG_4708.webp',
    }),
    defineField({
      name: 'featured',
      title: 'Témoignage mis en avant',
      type: 'boolean',
      initialValue: false,
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
      title: 'author',
      subtitle: 'location',
    },
  },
});
