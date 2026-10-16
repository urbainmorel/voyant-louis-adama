import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/sanity/schemaTypes';

export default defineConfig({
  name: 'voyant-louis-adama-studio',
  title: 'Médium Louis Adama - Studio',
  projectId: '53eovdkv',
  dataset: 'production',
  basePath: '/studio',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Gestion du Contenu')
          .items([
            S.listItem()
              .title('Paramètres & Page d’Accueil')
              .id('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
                  .title('Paramètres & Page d’Accueil')
              ),
            S.divider(),
            S.documentTypeListItem('post').title('Articles du Blog Spirituel (20)'),
            S.documentTypeListItem('service').title('Rituels & Services (6)'),
            S.divider(),
            S.documentTypeListItem('testimonial').title('Témoignages Clients (12)'),
            S.documentTypeListItem('faq').title('Questions Fréquentes (FAQ)'),
            S.documentTypeListItem('valueItem').title('Valeurs & Autorité'),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
