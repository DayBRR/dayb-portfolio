import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';

let sitemapIntegration = null;
try {
  const mod = await import('@astrojs/sitemap');
  sitemapIntegration = mod.default;
} catch (error) {
  sitemapIntegration = null;
}

export default defineConfig({
  site: 'https://your-domain.com',
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [tailwind({ applyBaseStyles: false }), sitemapIntegration && sitemapIntegration()].filter(Boolean)
});
