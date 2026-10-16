import { defineType, defineField } from 'sanity';

export const serviceType = defineType({
  name: 'service',
  title: 'Rituels & Services',
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
      title: 'Nom du Service / Rituel',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Identifiant URL (Slug)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Sous-titre / Domaine (ex: Abondance & Richesse)',
      type: 'string',
      initialValue: 'Abondance & Richesse',
    }),
    defineField({
      name: 'badge',
      title: 'Badge sur la photo (ex: Haute Prospérité)',
      type: 'string',
      initialValue: 'Haute Prospérité',
    }),
    defineField({
      name: 'description',
      title: 'Description courte (Carte)',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'fullDescription',
      title: 'Description complète détaillée',
      type: 'text',
      rows: 5,
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
      name: 'beds',
      title: 'Point fort gauche (ex: Ouverture des Voies)',
      type: 'string',
    }),
    defineField({
      name: 'baths',
      title: 'Point fort secondaire (ex: Zéro Choc)',
      type: 'string',
    }),
    defineField({
      name: 'area',
      title: 'Point fort droite (ex: Résultats Rapides)',
      type: 'string',
    }),
    defineField({
      name: 'featured',
      title: 'Mettre en avant (Carte en surbrillance)',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'ctaText',
      title: 'Texte du bouton',
      type: 'string',
      initialValue: 'Nous Contacter',
    }),
    defineField({
      name: 'whatsappMessage',
      title: 'Message pré-rempli WhatsApp',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'benefits',
      title: 'Liste des bienfaits',
      type: 'array',
      of: [{ type: 'string' }],
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
      subtitle: 'badge',
    },
  },
});
