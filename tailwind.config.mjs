/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Menlo', 'Monaco', 'monospace']
      },
      colors: {
        ide: {
          bg: 'var(--ide-bg)',
          panel: 'var(--ide-panel)',
          panelSoft: 'var(--ide-panel-soft)',
          border: 'var(--ide-border)',
          text: 'var(--ide-text)',
          textMuted: 'var(--ide-muted)',
          accent: 'var(--ide-accent)',
          accentSoft: 'var(--ide-accent-soft)',
          success: 'var(--ide-success)',
          warn: 'var(--ide-warn)'
        }
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(78, 148, 206, 0.25), 0 0 22px rgba(78, 148, 206, 0.2)',
        panel: '0 18px 30px rgba(0, 0, 0, 0.28)'
      },
      keyframes: {
        caret: {
          '0%, 45%': { opacity: '1' },
          '55%, 100%': { opacity: '0' }
        },
        slideIn: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        caret: 'caret 1.2s steps(1) infinite',
        slideIn: 'slideIn 0.45s ease both'
      }
    }
  },
  plugins: []
};
