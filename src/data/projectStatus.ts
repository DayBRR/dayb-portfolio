export type ProjectStatus = 'Concept' | 'Design' | 'Development' | 'Testing' | 'Production' | 'Maintenance';

export type StatusMeta = {
  label: { es: string; en: string };
  color: string;
  bg: string;
  icon: string;
};

export const USE_SEMANTIC_STATUS_ICONS = true;

const dotIcon = `<svg viewBox="0 0 12 12" width="100%" height="100%" aria-hidden="true" focusable="false">
  <circle cx="6" cy="6" r="5" fill="currentColor" />
</svg>`;

const gearIcon = `<svg viewBox="0 0 24 24" width="100%" height="100%" aria-hidden="true" focusable="false">
  <g fill="currentColor">
    <rect x="11" y="1.5" width="2" height="4" rx="1" />
    <rect x="11" y="18.5" width="2" height="4" rx="1" />
    <rect x="1.5" y="11" width="4" height="2" rx="1" />
    <rect x="18.5" y="11" width="4" height="2" rx="1" />
    <rect x="4.2" y="4.2" width="2" height="4" rx="1" transform="rotate(-45 5.2 6.2)" />
    <rect x="17.8" y="15.8" width="2" height="4" rx="1" transform="rotate(-45 18.8 17.8)" />
    <rect x="15.8" y="4.2" width="2" height="4" rx="1" transform="rotate(45 16.8 6.2)" />
    <rect x="4.2" y="15.8" width="2" height="4" rx="1" transform="rotate(45 5.2 17.8)" />
    <circle cx="12" cy="12" r="6.5" fill="none" stroke="currentColor" stroke-width="1.5" />
    <circle cx="12" cy="12" r="2.5" fill="none" stroke="currentColor" stroke-width="1.5" />
  </g>
</svg>`;

const lightbulbIcon = `<svg viewBox="0 0 24 24" width="100%" height="100%" aria-hidden="true" focusable="false">
  <g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M12 2a7 7 0 0 0-4 12c.7.6 1.1 1.4 1.2 2.3h5.6c.1-.9.5-1.7 1.2-2.3A7 7 0 0 0 12 2z" />
  </g>
</svg>`;

const penIcon = `<svg viewBox="0 0 24 24" width="100%" height="100%" aria-hidden="true" focusable="false">
  <g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 20l4.5-1 9-9-3.5-3.5-9 9z" />
    <path d="M13.5 6.5l3 3" />
  </g>
</svg>`;

const codeIcon = `<svg viewBox="0 0 24 24" width="100%" height="100%" aria-hidden="true" focusable="false">
  <g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8 8l-4 4 4 4" />
    <path d="M16 8l4 4-4 4" />
  </g>
</svg>`;

const flaskIcon = `<svg viewBox="0 0 24 24" width="100%" height="100%" aria-hidden="true" focusable="false">
  <g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 2h6" />
    <path d="M10 2v5l-5 9a4 4 0 0 0 3.5 6h7a4 4 0 0 0 3.5-6l-5-9V2" />
    <path d="M8 14h8" />
  </g>
</svg>`;

const rocketIcon = `<svg viewBox="0 0 24 24" width="100%" height="100%" aria-hidden="true" focusable="false">
  <g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M5 19l4-1 9-9-3-3-9 9z" />
    <path d="M14 5c2-2 5-2 7-1-1 2-1 5-3 7" />
    <path d="M9 16l-1 4 4-1" />
  </g>
</svg>`;

const minimalIcons = {
  Concept: dotIcon,
  Design: dotIcon,
  Development: dotIcon,
  Testing: dotIcon,
  Production: dotIcon,
  Maintenance: dotIcon
};

const semanticIcons = {
  Concept: lightbulbIcon,
  Design: penIcon,
  Development: codeIcon,
  Testing: flaskIcon,
  Production: rocketIcon,
  Maintenance: gearIcon
};

const pickIcon = (status: ProjectStatus) => (USE_SEMANTIC_STATUS_ICONS ? semanticIcons[status] : minimalIcons[status]);

export const statusMeta: Record<ProjectStatus, StatusMeta> = {
  Concept: {
    label: { es: 'Concepto', en: 'Concept' },
    color: '#60a5fa',
    bg: 'rgba(96, 165, 250, 0.12)',
    icon: pickIcon('Concept')
  },
  Design: {
    label: { es: 'Diseño', en: 'Design' },
    color: '#f472b6',
    bg: 'rgba(244, 114, 182, 0.12)',
    icon: pickIcon('Design')
  },
  Development: {
    label: { es: 'Desarrollo', en: 'Development' },
    color: '#34d399',
    bg: 'rgba(52, 211, 153, 0.12)',
    icon: pickIcon('Development')
  },
  Testing: {
    label: { es: 'Testing', en: 'Testing' },
    color: '#facc15',
    bg: 'rgba(250, 204, 21, 0.12)',
    icon: pickIcon('Testing')
  },
  Production: {
    label: { es: 'Producción', en: 'Production' },
    color: '#a78bfa',
    bg: 'rgba(167, 139, 250, 0.12)',
    icon: pickIcon('Production')
  },
  Maintenance: {
    label: { es: 'Mantenimiento', en: 'Maintenance' },
    color: '#fb923c',
    bg: 'rgba(251, 146, 60, 0.12)',
    icon: pickIcon('Maintenance')
  }
};

export const getStatusMeta = (status?: string) => {
  if (status && status in statusMeta) return statusMeta[status as ProjectStatus];
  return {
    label: { es: status ?? '', en: status ?? '' },
    color: '#94a3b8',
    bg: 'rgba(148, 163, 184, 0.12)',
    icon: dotIcon
  };
};
