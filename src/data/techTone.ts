export type TechTone = 'accent' | 'success' | 'warn';

export const techToneOverrides: Record<string, TechTone> = {
  // Example overrides:
  // 'docker': 'accent',
  // 'postgres': 'accent'
};

const accentKeywords = ['node', 'nest', 'type', 'javascript', 'fastify', 'express', 'angular'];
const successKeywords = ['postgres', 'mongo', 'redis', 'kafka', 'rabbit', 'sql', 'oracle'];

export const toneForTech = (tech: string): TechTone => {
  const normalized = tech.toLowerCase();
  const override = techToneOverrides[normalized];

  if (override) {
    return override;
  }

  if (accentKeywords.some((keyword) => normalized.includes(keyword))) {
    return 'accent';
  }

  if (successKeywords.some((keyword) => normalized.includes(keyword))) {
    return 'success';
  }

  return 'warn';
};

export const toneStyle = (tone: TechTone) => {
  const toneMap: Record<TechTone, string> = {
    accent: 'var(--ide-accent)',
    success: 'var(--ide-success)',
    warn: 'var(--ide-warn)'
  };

  const base = toneMap[tone];
  const useAccentBase = tone === 'accent';

  return {
    border: useAccentBase ? base : `color-mix(in oklab, ${base}, transparent 35%)`,
    bg: useAccentBase ? 'var(--ide-accent-soft)' : `color-mix(in oklab, ${base}, transparent 84%)`,
    text: base,
    glow: `0 0 0 1px color-mix(in oklab, ${base}, transparent 82%)`
  };
};
