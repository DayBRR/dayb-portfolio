import type { LocalizedText } from '../data/portfolio';

export type Lang = 'es' | 'en';

export const supportedLangs: readonly Lang[] = ['es', 'en'];

export const normalizeLang = (value?: string | null): Lang => (value === 'en' ? 'en' : 'es');

export const getLang = (Astro?: { url?: URL; cookies?: { get: (name: string) => { value?: string } | undefined } }): Lang => {
  const param = Astro?.url?.searchParams?.get('lang');
  if (param) return normalizeLang(param);
  const cookie = Astro?.cookies?.get('lang')?.value;
  return normalizeLang(cookie);
};

export const t = (text: LocalizedText, lang: Lang): string => (lang === 'en' ? text.en : text.es);
