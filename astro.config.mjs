import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.voyant-louis-adama.com',
  integrations: [
    tailwind(),
    sitemap(),
    react(),
    sanity({
      projectId: '53eovdkv',
      dataset: 'production',
      studioBasePath: '/studio',
      useCdn: false,
    }),
  ],
});
