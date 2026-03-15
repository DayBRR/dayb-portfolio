export type LocalizedText = {
  es: string;
  en: string;
};

export type DiagramTone = 'neutral' | 'accent' | 'info' | 'success' | 'warn' | 'danger' | 'purple' | 'cyan';

export type DiagramIconName =
  | 'browser'
  | 'delivery'
  | 'astro'
  | 'layoutGrid'
  | 'folder'
  | 'gitBranch'
  | 'server'
  | 'globe';

export type DiagramIconConfig = {
  name: DiagramIconName;
  size?: number;
  strokeWidth?: number;
};

export type DiagramIconInput = DiagramIconName | DiagramIconConfig;

export type DiagramLineAppearance = {
  length?: string;
  thickness?: string;
  from?: string;
  to?: string;
  color?: string;
  radius?: string;
};

export type DiagramPillAppearance = {
  borderColor?: string;
  background?: string;
  textColor?: string;
  letterSpacing?: string;
  padding?: string;
};

export type DiagramNodeGlowAppearance = {
  from?: string;
  to?: string;
  blur?: string;
  opacity?: string;
  direction?: string;
  inset?: string;
};

export type DiagramGlowInput =
  | boolean
  | {
      fromTone?: DiagramTone;
      toTone?: DiagramTone;
      blur?: string;
      opacity?: string;
      direction?: string;
      inset?: string;
    };

export type DiagramNodeAppearance = {
  width?: string;
  padding?: string;
  radius?: string;
  borderColor?: string;
  background?: string;
  hoverBorderColor?: string;
  hoverBackground?: string;
  titleColor?: string;
  subtitleColor?: string;
  iconColor?: string;
  iconBorderColor?: string;
  iconBackground?: string;
  iconBoxSize?: string;
  iconRadius?: string;
  iconMarginBottom?: string;
  textAlign?: 'left' | 'center' | 'right';
  strong?: boolean;
  hoverable?: boolean;
  glow?: DiagramNodeGlowAppearance;
};

export type DiagramBranchColumns = {
  width?: string;
  gap?: string;
  count?: number;
  junctionColor?: string;
  junctionInsetStart?: string;
  junctionInsetEnd?: string;
  junctionTop?: string;
  mobileHeight?: string;
};

export type DiagramSubgroupLayout = {
  count?: number;
  gap?: string;
  marginTop?: string;
  paddingTop?: string;
  connectorColor?: string;
  connectorLength?: string;
  junctionInsetStart?: string;
  junctionInsetEnd?: string;
  junctionTop?: string;
  mobileHeight?: string;
};

export type DiagramGroupItem = {
  label: LocalizedText;
  dotColor?: string;
};

export type DiagramGroupAppearance = {
  borderColor?: string;
  hoverBorderColor?: string;
  background?: string;
  titleColor?: string;
  iconColor?: string;
  itemBorderColor?: string;
  itemBackground?: string;
  itemTextColor?: string;
  padding?: string;
  radius?: string;
};

export type DiagramSubgroup = {
  id: string;
  title?: LocalizedText;
  icon?: DiagramIconConfig;
  appearance?: DiagramGroupAppearance;
  items: DiagramGroupItem[];
};

export type DiagramGroup = {
  id: string;
  title: LocalizedText;
  icon: DiagramIconConfig;
  appearance?: DiagramGroupAppearance;
  items: DiagramGroupItem[];
  subgroupAppearance?: DiagramGroupAppearance;
  subgroupLayout?: DiagramSubgroupLayout;
  subgroups?: DiagramSubgroup[];
};

export type DiagramHeader = {
  eyebrow?: LocalizedText;
  title?: LocalizedText;
  subtitle?: LocalizedText;
  accentColor?: string;
};

export type DiagramNodeSection = {
  type: 'node';
  id: string;
  title: LocalizedText;
  subtitle?: LocalizedText;
  icon: DiagramIconConfig;
  appearance?: DiagramNodeAppearance;
};

export type DiagramConnectorSection = {
  type: 'connector';
  id: string;
  direction?: 'vertical' | 'horizontal';
  beforeLine?: DiagramLineAppearance;
  afterLine?: DiagramLineAppearance;
  pill?: {
    label: LocalizedText;
    appearance?: DiagramPillAppearance;
  };
};

export type DiagramLineSection = {
  type: 'line';
  id: string;
  direction?: 'vertical' | 'horizontal';
  appearance?: DiagramLineAppearance;
};

export type DiagramBranchSection = {
  type: 'branch';
  id: string;
  topLine?: DiagramLineAppearance;
  bottomLine?: DiagramLineAppearance;
  columns?: DiagramBranchColumns;
  groups: DiagramGroup[];
};

export type DiagramSection = DiagramNodeSection | DiagramConnectorSection | DiagramLineSection | DiagramBranchSection;

export type DiagramDefaults = {
  node?: DiagramNodeAppearance;
  line?: DiagramLineAppearance;
  pill?: DiagramPillAppearance;
  group?: DiagramGroupAppearance;
  subgroup?: DiagramGroupAppearance;
  branchColumns?: DiagramBranchColumns;
  subgroupLayout?: DiagramSubgroupLayout;
};

export type DiagramConfig = {
  key: string;
  header?: DiagramHeader;
  defaults?: DiagramDefaults;
  sections: DiagramSection[];
};

export type DiagramInputGroupItem = {
  label: LocalizedText;
  tone?: DiagramTone;
  dotColor?: string;
};

export type DiagramInputGroup = {
  id: string;
  title: LocalizedText;
  icon: DiagramIconInput;
  tone?: DiagramTone;
  appearance?: DiagramGroupAppearance;
  items: DiagramInputGroupItem[];
  subgroupAppearance?: DiagramGroupAppearance;
  subgroupLayout?: DiagramSubgroupLayout;
  subgroups?: DiagramInputSubgroup[];
};

export type DiagramInputSubgroup = {
  id: string;
  title?: LocalizedText;
  icon?: DiagramIconInput;
  tone?: DiagramTone;
  appearance?: DiagramGroupAppearance;
  items: DiagramInputGroupItem[];
};

export type DiagramInputNodeSection = {
  type: 'node';
  id: string;
  title: LocalizedText;
  subtitle?: LocalizedText;
  icon: DiagramIconInput;
  tone?: DiagramTone;
  iconTone?: DiagramTone;
  hoverTone?: DiagramTone;
  strong?: boolean;
  hoverable?: boolean;
  glow?: DiagramGlowInput;
  appearance?: DiagramNodeAppearance;
};

export type DiagramInputConnectorSection = {
  type: 'connector';
  id: string;
  label?: LocalizedText;
  tone?: DiagramTone;
  direction?: 'vertical' | 'horizontal';
  beforeLine?: boolean | DiagramLineAppearance;
  afterLine?: boolean | DiagramLineAppearance;
  line?: DiagramLineAppearance;
  pill?: DiagramPillAppearance;
};

export type DiagramInputLineSection = {
  type: 'line';
  id: string;
  tone?: DiagramTone;
  direction?: 'vertical' | 'horizontal';
  appearance?: DiagramLineAppearance;
};

export type DiagramInputBranchSection = {
  type: 'branch';
  id: string;
  tone?: DiagramTone;
  topLine?: boolean | DiagramLineAppearance;
  bottomLine?: boolean | DiagramLineAppearance;
  columns?: DiagramBranchColumns;
  groups: DiagramInputGroup[];
};

export type DiagramInputSection =
  | DiagramInputNodeSection
  | DiagramInputConnectorSection
  | DiagramInputLineSection
  | DiagramInputBranchSection;

export type DiagramInputDefaults = {
  headerTone?: DiagramTone;
  nodeTone?: DiagramTone;
  connectorTone?: DiagramTone;
  groupTone?: DiagramTone;
  branchTone?: DiagramTone;
  glow?: Exclude<DiagramGlowInput, boolean>;
  node?: DiagramNodeAppearance;
  line?: DiagramLineAppearance;
  pill?: DiagramPillAppearance;
  group?: DiagramGroupAppearance;
  subgroup?: DiagramGroupAppearance;
  branchColumns?: DiagramBranchColumns;
  subgroupLayout?: DiagramSubgroupLayout;
};

export type DiagramInputHeader = {
  eyebrow?: LocalizedText;
  title?: LocalizedText;
  subtitle?: LocalizedText;
  tone?: DiagramTone;
  accentColor?: string;
};

export type DiagramInputConfig = {
  $schema?: string;
  key: string;
  header?: DiagramInputHeader;
  defaults?: DiagramInputDefaults;
  sections: DiagramInputSection[];
};

const toneMap: Record<DiagramTone, string> = {
  neutral: 'var(--ide-muted)',
  accent: 'var(--ide-accent)',
  info: 'var(--ide-info)',
  success: 'var(--ide-success)',
  warn: 'var(--ide-warn)',
  danger: 'var(--ide-danger)',
  purple: 'var(--ide-purple)',
  cyan: 'var(--ide-cyan)'
};

const colorForTone = (tone?: DiagramTone) => (tone ? toneMap[tone] : undefined);
const transparentTone = (tone: DiagramTone, amount: number) => `color-mix(in oklab, ${toneMap[tone]}, transparent ${amount}%)`;
const borderMix = (tone: DiagramTone, amount = 35) => `color-mix(in oklab, var(--ide-border), ${toneMap[tone]} ${amount}%)`;

const normalizeIcon = (icon: DiagramIconInput): DiagramIconConfig =>
  typeof icon === 'string' ? { name: icon } : icon;

const nodeToneAppearance = (tone?: DiagramTone): DiagramNodeAppearance => {
  if (!tone || tone === 'neutral') return {};

  return {
    borderColor: transparentTone(tone, 60),
    background: transparentTone(tone, 95),
    iconColor: colorForTone(tone),
    iconBorderColor: transparentTone(tone, 70),
    iconBackground: transparentTone(tone, 88)
  };
};

const iconToneAppearance = (tone?: DiagramTone): DiagramNodeAppearance => {
  if (!tone || tone === 'neutral') return {};

  return {
    iconColor: colorForTone(tone),
    iconBorderColor: transparentTone(tone, 70),
    iconBackground: transparentTone(tone, 88)
  };
};

const hoverToneAppearance = (tone?: DiagramTone): DiagramNodeAppearance => {
  if (!tone || tone === 'neutral') return {};

  return {
    hoverBorderColor: borderMix(tone, 40),
    hoverBackground: transparentTone(tone, 92)
  };
};

const groupToneAppearance = (tone?: DiagramTone): DiagramGroupAppearance => {
  if (!tone || tone === 'neutral') return {};

  return {
    iconColor: colorForTone(tone),
    hoverBorderColor: transparentTone(tone, 60)
  };
};

const connectorToneAppearance = (tone?: DiagramTone): DiagramPillAppearance => {
  if (!tone || tone === 'neutral') return {};

  return {
    borderColor: transparentTone(tone, 70),
    background: transparentTone(tone, 90),
    textColor: colorForTone(tone)
  };
};

const lineToneAppearance = (tone?: DiagramTone): DiagramLineAppearance => {
  if (!tone || tone === 'neutral') return {};

  return {
    from: borderMix(tone, 35),
    to: borderMix(tone, 20)
  };
};

const resolveGlow = (glow?: DiagramGlowInput, fallback?: Exclude<DiagramGlowInput, boolean>): DiagramNodeGlowAppearance | undefined => {
  if (glow === undefined || glow === false) return undefined;

  const source = glow === true ? fallback ?? true : glow;
  if (source === true) {
    return {
      from: transparentTone('accent', 80),
      to: transparentTone('purple', 80),
      blur: '12px',
      opacity: '1',
      direction: 'right',
      inset: '-2px'
    };
  }

  const fromTone = source.fromTone ?? 'accent';
  const toTone = source.toTone ?? 'purple';

  return {
    from: transparentTone(fromTone, 80),
    to: transparentTone(toTone, 80),
    blur: source.blur ?? '12px',
    opacity: source.opacity ?? '1',
    direction: source.direction ?? 'right',
    inset: source.inset ?? '-2px'
  };
};

const resolveToggleLine = (
  value: boolean | DiagramLineAppearance | undefined,
  tone: DiagramTone | undefined,
  sharedAppearance?: DiagramLineAppearance,
  defaultEnabled = true
): DiagramLineAppearance | undefined => {
  if (value === false) return undefined;
  if (value === undefined && !defaultEnabled) return undefined;

  return {
    ...lineToneAppearance(tone),
    ...sharedAppearance,
    ...(typeof value === 'object' ? value : {})
  };
};

export const normalizeDiagramConfig = (input: DiagramInputConfig): DiagramConfig => {
  const defaults = input.defaults;

  return {
    key: input.key,
    header: input.header
      ? {
          eyebrow: input.header.eyebrow,
          title: input.header.title,
          subtitle: input.header.subtitle,
          accentColor:
            input.header.accentColor ?? colorForTone(input.header.tone ?? defaults?.headerTone ?? 'accent') ?? 'var(--ide-accent)'
        }
      : undefined,
    defaults: {
      node: defaults?.node,
      line: defaults?.line,
      pill: defaults?.pill,
      group: defaults?.group,
      subgroup: defaults?.subgroup,
      branchColumns: defaults?.branchColumns,
      subgroupLayout: defaults?.subgroupLayout
    },
    sections: input.sections.map((section): DiagramSection => {
      if (section.type === 'node') {
        const tone = section.tone ?? defaults?.nodeTone;
        const iconTone = section.iconTone ?? tone;
        const hoverTone = section.hoverTone ?? tone;

        return {
          type: 'node',
          id: section.id,
          title: section.title,
          subtitle: section.subtitle,
          icon: normalizeIcon(section.icon),
          appearance: {
            ...nodeToneAppearance(tone),
            ...iconToneAppearance(iconTone),
            ...hoverToneAppearance(hoverTone),
            strong: section.strong,
            hoverable: section.hoverable,
            glow: resolveGlow(section.glow, defaults?.glow),
            ...section.appearance
          }
        };
      }

      if (section.type === 'connector') {
        const tone = section.tone ?? defaults?.connectorTone;

        return {
          type: 'connector',
          id: section.id,
          direction: section.direction ?? 'vertical',
          beforeLine: resolveToggleLine(section.beforeLine, tone, section.line, true),
          afterLine: resolveToggleLine(section.afterLine, tone, section.line, true),
          pill: section.label
            ? {
                label: section.label,
                appearance: {
                  ...connectorToneAppearance(tone),
                  ...section.pill
                }
              }
            : undefined
        };
      }

      if (section.type === 'line') {
        return {
          type: 'line',
          id: section.id,
          direction: section.direction ?? 'vertical',
          appearance: {
            ...lineToneAppearance(section.tone ?? defaults?.connectorTone),
            ...section.appearance
          }
        };
      }

      const tone = section.tone ?? defaults?.branchTone ?? defaults?.connectorTone;
      const branchLineTone = {
        ...lineToneAppearance(tone),
        color: undefined
      };
      const columns = {
        ...section.columns,
        junctionColor: section.columns?.junctionColor ?? branchLineTone.from
      };

      return {
        type: 'branch',
        id: section.id,
        topLine: resolveToggleLine(section.topLine, tone, undefined, true),
        bottomLine: resolveToggleLine(section.bottomLine, tone, undefined, true),
        columns,
        groups: section.groups.map((group) => ({
          id: group.id,
          title: group.title,
          icon: normalizeIcon(group.icon),
          appearance: {
            ...groupToneAppearance(group.tone ?? defaults?.groupTone),
            ...group.appearance
          },
          items: group.items.map((item) => ({
            label: item.label,
            dotColor: item.dotColor ?? colorForTone(item.tone)
          })),
          subgroupAppearance: group.subgroupAppearance,
          subgroupLayout: {
            ...defaults?.subgroupLayout,
            ...group.subgroupLayout
          },
          subgroups: group.subgroups?.map((subgroup) => ({
            id: subgroup.id,
            title: subgroup.title,
            icon: subgroup.icon ? normalizeIcon(subgroup.icon) : undefined,
            appearance: {
              ...groupToneAppearance(subgroup.tone ?? group.tone ?? defaults?.groupTone),
              ...defaults?.subgroup,
              ...group.subgroupAppearance,
              ...subgroup.appearance
            },
            items: subgroup.items.map((item) => ({
              label: item.label,
              dotColor: item.dotColor ?? colorForTone(item.tone)
            }))
          }))
        }))
      };
    })
  };
};

export const i18nAttrs = (text?: LocalizedText) => ({
  'data-i18n-es': text?.es ?? '',
  'data-i18n-en': text?.en ?? ''
});

export const styleVars = (vars: Record<string, string | number | undefined | null>) =>
  Object.entries(vars)
    .filter(([, value]) => value !== undefined && value !== null && value !== '')
    .map(([key, value]) => `${key}:${value}`)
    .join(';');




