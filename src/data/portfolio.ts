export const profile = {
  name: 'David Backend Developer',
  role: 'Backend Engineer | API, Cloud & Data Workflows',
  location: 'Remoto - Zaragoza | España',
  summary:
    'Construyo servicios robustos y escalables, con foco en observabilidad, rendimiento y calidad de arquitectura.'
};
export type Profile = typeof profile;

export const featuredTech = [
  { name: 'Node.js', note: 'Microservicios y APIs REST', tone: 'info' },
  { name: 'NestJS', note: 'Arquitectura modular y limpia', tone: 'success' },
  { name: 'PostgreSQL', note: 'Modelado de datos y performance', tone: 'warn' },
  { name: 'Docker', note: 'Entornos reproducibles y despliegue', tone: 'accent' },
  { name: 'Redis', note: 'Caching y colas de tareas', tone: 'success' },
  { name: 'AWS', note: 'Infraestructura cloud escalable', tone: 'warn' }
] as const;
export type FeaturedTechItem = (typeof featuredTech)[number];

export const skills = [
  {
    title: 'Backend Core',
    items: ['TypeScript', 'Node.js', 'NestJS', 'Express', 'Fastify', 'Java (Spring)']
  },
  {
    title: 'Data & Messaging',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Kafka', 'RabbitMQ']
  },
  {
    title: 'Cloud & DevOps',
    items: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Terraform', 'Linux']
  },
  {
    title: 'Quality & Security',
    items: ['Testing', 'TDD', 'OpenAPI', 'OAuth2/JWT', 'Observabilidad', 'Clean Architecture']
  }
] as const;
export type SkillGroup = (typeof skills)[number];

export const projects = [
  {
    id: 'payment-gateway',
    title: 'Payment Gateway Service',
    stack: ['NestJS', 'PostgreSQL', 'Redis', 'Docker'],
    summary: 'Motor de pagos con idempotencia, webhook signing y conciliacion automatizada.',
    description:
      'Servicio backend para orquestar pagos multicanal. Incluye retries con backoff, antifraude basico, trazabilidad de eventos y dashboard de metricas para operacion.',
    repo: 'https://github.com/example/payment-gateway-service',
    demo: 'https://demo.example.com/payment-gateway'
  },
  {
    id: 'logistics-api',
    title: 'Logistics Tracking API',
    stack: ['Node.js', 'Fastify', 'MongoDB', 'Kafka'],
    summary: 'Seguimiento en tiempo real de rutas, estados y alertas de transporte.',
    description:
      'API de eventos para logistica con procesamiento asincrono. Implementa ingestion de tracking, geocercas y notificaciones por SLA.',
    repo: 'https://github.com/example/logistics-tracking-api',
    demo: 'https://demo.example.com/logistics-api'
  },
  {
    id: 'auth-platform',
    title: 'Identity & Auth Platform',
    stack: ['NestJS', 'PostgreSQL', 'JWT', 'Kubernetes'],
    summary: 'Plataforma de autenticacion centralizada para productos internos y externos.',
    description:
      'Solucion de identity con RBAC, refresh rotation y auditoria completa. Disenada para multitenancy y federacion con proveedores externos.',
    repo: 'https://github.com/example/identity-auth-platform',
    demo: 'https://demo.example.com/auth-platform'
  },
  {
    id: 'reporting-engine',
    title: 'Async Reporting Engine',
    stack: ['TypeScript', 'RabbitMQ', 'S3', 'Terraform'],
    summary: 'Generacion de reportes pesados en background con entrega por lotes.',
    description:
      'Pipeline asincrono para reportes financieros y operativos. Incluye scheduler, jobs distribuidos y almacenamiento de artefactos en cloud.',
    repo: 'https://github.com/example/async-reporting-engine',
    demo: 'https://demo.example.com/reporting-engine'
  }
] as const;
export type ProjectItem = (typeof projects)[number];

export const timeline = [
  {
    type: 'experience',
    current: true,
    date: '2024 - Actualidad',
    title: 'Senior Backend Engineer',
    organization: 'ScaleCloud Labs',
    detail: 'Liderazgo tecnico en APIs criticas, reduccion de latencia en 38% y mejoras de resiliencia.'
  },
  {
    type: 'experience',
    date: '2022 - 2024',
    title: 'Backend Developer',
    organization: 'FinFlow Systems',
    detail: 'Diseno de microservicios de pagos y reconciliacion para plataforma fintech regional.'
  },
  {
    type: 'experience',
    date: '2020 - 2022',
    title: 'Software Engineer',
    organization: 'DataRail Tech',
    detail: 'Integraciones empresariales y arquitectura orientada a eventos con enfoque DevOps.'
  },
  {
    type: 'education',
    date: '2016 - 2020',
    title: 'Ingenieria Informatica',
    organization: 'Universidad Tecnologica',
    detail: 'Base solida en estructuras de datos, sistemas distribuidos y bases de datos.'
  },
  {
    type: 'education',
    date: '2019',
    title: 'Especializacion en Cloud Architecture',
    organization: 'Programa Profesional AWS',
    detail: 'Diseno de plataformas tolerantes a fallos y estrategias de observabilidad.'
  }
] as const;
export type TimelineItem = (typeof timeline)[number];
