import type { ProjectItem, ProjectTechnologyGroup } from './portfolio';

/** Select card technologies without changing the full stack or its group order. */
export function getFeaturedStack(project: ProjectItem): ProjectTechnologyGroup[] {
  const available = new Set(project.stack.flatMap((group) => group.items));
  const selected = project.featuredTechnologies ?? [...available].slice(0, 6);

  for (const technology of selected) {
    if (!available.has(technology)) {
      throw new Error(`Unknown featured technology "${technology}" in ${project.id}`);
    }
  }
  if (selected.length > 6) {
    throw new Error(`Project ${project.id} must feature at most 6 technologies`);
  }

  const remaining = new Set(selected);
  return project.stack
    .map((group) => ({
      ...group,
      items: group.items.filter((technology) => remaining.delete(technology))
    }))
    .filter((group) => group.items.length > 0);
}
