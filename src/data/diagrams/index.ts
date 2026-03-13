import portfolioArchitectureConfig from './dayb-portfolio-architecture.json';
import { normalizeDiagramConfig, type DiagramConfig, type DiagramInputConfig } from '../../lib/diagramConfig';

const inputConfigs = [portfolioArchitectureConfig] as const;

export const diagramConfigs: readonly DiagramConfig[] = inputConfigs.map((config) =>
  normalizeDiagramConfig(config as DiagramInputConfig)
);

export const diagramConfigByKey = Object.fromEntries(diagramConfigs.map((config) => [config.key, config])) as Record<string, DiagramConfig>;
