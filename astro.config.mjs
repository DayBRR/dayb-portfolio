import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

let sitemapIntegration = null;
try {
  const mod = await import('@astrojs/sitemap');
  sitemapIntegration = mod.default;
} catch (error) {
  sitemapIntegration = null;
}

export default defineConfig({
  site: 'https://davidruiz.es',
  output: 'static',
  compressHTML: true,
  vite: {
    plugins: [tailwind()],
  },
  integrations: [
    sitemapIntegration && sitemapIntegration()
  ].filter(Boolean),
});
