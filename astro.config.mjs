// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://daisysdailies.com',
  // Firebase Hosting serves this project with cleanUrls + trailingSlash: false,
  // so canonical URLs and sitemap entries must be extensionless and slash-free.
  trailingSlash: 'never',
  integrations: [sitemap()],
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Plus Jakarta Sans',
      cssVariable: '--font-jakarta',
      weights: [400, 500, 600, 700, 800],
      styles: ['normal'],
      subsets: ['latin'],
    },
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
