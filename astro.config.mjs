import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

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
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemapIntegration && sitemapIntegration()
  ].filter(Boolean),
});