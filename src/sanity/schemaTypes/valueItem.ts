import { defineType, defineField } from 'sanity';

export const valueItemType = defineType({
  name: 'valueItem',
  title: 'Valeurs & Autorité (Accordéons)',
  type: 'document',
  fields: [
    defineField({
      name: 'order',
      title: "Ordre d'affichage",
      type: 'number',
      initialValue: 1,
    }),
    defineField({
      name: 'title',
      title: 'Titre de la valeur',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icône FontAwesome (ex: fa-eye, fa-shield-halved, fa-user-lock, fa-comments)',
      type: 'string',
      initialValue: 'fa-shield-halved',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'activeByDefault',
      title: 'Ouvert par défaut',
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
      title: 'title',
    },
  },
});
