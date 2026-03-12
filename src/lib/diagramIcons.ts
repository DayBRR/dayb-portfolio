import type { DiagramIconConfig, DiagramIconName } from './diagramConfig';

const iconPaths: Record<DiagramIconName, string> = {
  browser:
    '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',
  delivery:
    '<path d="M17.5 19l4.5-4.5L17.5 10"></path><path d="M6.5 5l-4.5 4.5L6.5 14"></path><path d="M12 2v20"></path>',
  astro:
    '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.5-1 1-4c2 0 3 .5 3 .5l2-2s.5.5 1 2c0 2-1 3.5-1 3.5z"></path><path d="M15 11l2 2"></path>',
  layoutGrid:
    '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',
  folder:
    '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>',
  gitBranch:
    '<circle cx="12" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><circle cx="18" cy="6" r="3"></circle><path d="M18 9v2c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V9"></path><path d="M12 13V21"></path>',
  server:
    '<rect x="3" y="4" width="18" height="6" rx="2"></rect><rect x="3" y="14" width="18" height="6" rx="2"></rect><line x1="7" y1="7" x2="7.01" y2="7"></line><line x1="7" y1="17" x2="7.01" y2="17"></line>',
  globe:
    '<circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>'
};

export const renderDiagramIcon = (icon: DiagramIconConfig) => {
  const size = icon.size ?? 20;
  const strokeWidth = icon.strokeWidth ?? 2;
  const paths = iconPaths[icon.name] ?? iconPaths.server;

  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;
};
