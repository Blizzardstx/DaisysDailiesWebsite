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
  // Astro's HTML compression drops the space between a word at the end of one
  // source line and a link at the start of the next ("see ourPrivacy Policy").
  // The legal pages are full of that pattern, so compression stays off.
  compressHTML: false,
  // /download is a noindex redirect page, so it stays out of the sitemap.
  integrations: [sitemap({ filter: (page) => !/\/download\/?$/.test(page) })],
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
