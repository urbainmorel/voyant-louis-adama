import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { media } from 'sanity-plugin-media';
import { schemaTypes } from './src/sanity/schemaTypes';

export default defineConfig({
  name: 'voyant-louis-adama-studio',
  title: 'Médium Louis Adama - Studio',
  projectId: '53eovdkv',
  dataset: 'production',
  basePath: '/studio',
  plugins: [
    media(),
    structureTool({
      structure: (S) =>
        S.list()
          .title('Gestion du Contenu')
          .items([
            S.listItem()
              .title('Paramètres & Textes Globaux')
              .id('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
                  .title('Paramètres & Textes Globaux')
              ),
            S.divider(),
            S.documentTypeListItem('post').title('Articles du Blog Spirituel'),
            S.documentTypeListItem('service').title('Rituels & Services'),
            S.divider(),
            S.documentTypeListItem('youtubeVideo').title('Galerie Vidéos YouTube'),
            S.documentTypeListItem('galleryPhoto').title('Galerie Photos Sanctuaire'),
            S.divider(),
            S.documentTypeListItem('testimonial').title('Témoignages Clients'),
            S.documentTypeListItem('faq').title('Questions Fréquentes (FAQ)'),
            S.documentTypeListItem('valueItem').title('Valeurs & Autorité'),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
