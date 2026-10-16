import { defineType, defineField } from 'sanity';

export const galleryPhotoType = defineType({
  name: 'galleryPhoto',
  title: 'Photos du Sanctuaire & Rituels',
  type: 'document',
  fields: [
    defineField({
      name: 'order',
      title: 'Ordre d’affichage',
      description: 'Position numérique dans le carrousel visuel 3D (1, 2, 3...).',
      type: 'number',
      initialValue: 1,
    }),
    defineField({
      name: 'title',
      title: 'Titre / Légende de la photo',
      description: 'Description de la prise de vue au sanctuaire ou du rituel photographié.',
      type: 'string',
      validation: (rule) => rule.required().error('Le titre de la photo est obligatoire'),
    }),
    defineField({
      name: 'category',
      title: 'Catégorie thématique',
      description: 'Exemple : Richesse, Amour, Sanctuaire, Protection, Purification.',
      type: 'string',
      initialValue: 'Richesse',
    }),
    defineField({
      name: 'image',
      title: 'Chemin de l’image locale',
      description: 'Chemin de fichier statique par défaut (ex: /images/cards/...).',
      type: 'string',
    }),
    defineField({
      name: 'imageAsset',
      title: 'Photo téléversée sur Sanity',
      description: 'Téléversez une photo haute résolution (remplace l’image locale si présente).',
      type: 'image',
      options: { hotspot: true },
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
