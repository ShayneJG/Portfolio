import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://shaynejg.github.io',
  base: '/Portfolio',
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap()],
});
