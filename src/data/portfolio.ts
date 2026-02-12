export type LocalizedText = {
  es: string;
  en: string;
};

export const profile = {
  name: 'David Backend Developer',
  role: {
    es: 'Backend Engineer | API, Cloud & Data Workflows',
    en: 'Backend Engineer | API, Cloud & Data Workflows'
  },
  location: {
    es: 'Remoto - Zaragoza | España',
    en: 'Remote - Zaragoza | Spain'
  },
  summary: {
    es: 'Construyo servicios robustos y escalables, con foco en observabilidad, rendimiento y calidad de arquitectura.',
    en: 'I build robust, scalable services with a focus on observability, performance, and architecture quality.'
  }
};
export type Profile = typeof profile;

export const featuredTech = [
  { name: 'Node.js', note: { es: 'Microservicios y APIs REST', en: 'Microservices and REST APIs' }, tone: 'info' },
  { name: 'NestJS', note: { es: 'Arquitectura modular y limpia', en: 'Modular, clean architecture' }, tone: 'success' },
  { name: 'PostgreSQL', note: { es: 'Modelado de datos y performance', en: 'Data modeling and performance' }, tone: 'warn' },
  { name: 'Docker', note: { es: 'Entornos reproducibles y despliegue', en: 'Reproducible environments and delivery' }, tone: 'accent' },
  { name: 'Redis', note: { es: 'Caching y colas de tareas', en: 'Caching and task queues' }, tone: 'success' },
  { name: 'AWS', note: { es: 'Infraestructura cloud escalable', en: 'Scalable cloud infrastructure' }, tone: 'warn' }
] as const;
export type FeaturedTechItem = (typeof featuredTech)[number];

export const skills = [
  {
    title: { es: 'Backend Core', en: 'Backend Core' },
    items: ['TypeScript', 'Node.js', 'NestJS', 'Express', 'Fastify', 'Java (Spring)']
  },
  {
    title: { es: 'Data & Messaging', en: 'Data & Messaging' },
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Kafka', 'RabbitMQ']
  },
  {
    title: { es: 'Cloud & DevOps', en: 'Cloud & DevOps' },
    items: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Terraform', 'Linux']
  },
  {
    title: { es: 'Quality & Security', en: 'Quality & Security' },
    items: ['Testing', 'TDD', 'OpenAPI', 'OAuth2/JWT', 'Observabilidad', 'Clean Architecture']
  }
] as const;
export type SkillGroup = (typeof skills)[number];

export const projects = [
  {
    id: 'payment-gateway',
    title: 'Payment Gateway Service',
    stack: ['NestJS', 'PostgreSQL', 'Redis', 'Docker'],
    summary: {
      es: 'Motor de pagos con idempotencia, webhook signing y conciliacion automatizada.',
      en: 'Payment engine with idempotency, webhook signing, and automated reconciliation.'
    },
    description: {
      es: 'Servicio backend para orquestar pagos multicanal. Incluye retries con backoff, antifraude basico, trazabilidad de eventos y dashboard de metricas para operacion.',
      en: 'Backend service orchestrating multi-channel payments. Includes retries with backoff, basic antifraud, event traceability, and an ops metrics dashboard.'
    },
    repo: 'https://github.com/example/payment-gateway-service',
    demo: 'https://demo.example.com/payment-gateway'
  },
  {
    id: 'logistics-api',
    title: 'Logistics Tracking API',
    stack: ['Node.js', 'Fastify', 'MongoDB', 'Kafka'],
    summary: {
      es: 'Seguimiento en tiempo real de rutas, estados y alertas de transporte.',
      en: 'Real-time tracking of routes, statuses, and transport alerts.'
    },
    description: {
      es: 'API de eventos para logistica con procesamiento asincrono. Implementa ingestion de tracking, geocercas y notificaciones por SLA.',
      en: 'Event-driven logistics API with async processing. Implements tracking ingestion, geofences, and SLA notifications.'
    },
    repo: 'https://github.com/example/logistics-tracking-api',
    demo: 'https://demo.example.com/logistics-api'
  },
  {
    id: 'auth-platform',
    title: 'Identity & Auth Platform',
    stack: ['NestJS', 'PostgreSQL', 'JWT', 'Kubernetes'],
    summary: {
      es: 'Plataforma de autenticacion centralizada para productos internos y externos.',
      en: 'Centralized authentication platform for internal and external products.'
    },
    description: {
      es: 'Solucion de identity con RBAC, refresh rotation y auditoria completa. Disenada para multitenancy y federacion con proveedores externos.',
      en: 'Identity solution with RBAC, refresh rotation, and full auditing. Designed for multitenancy and federation with external providers.'
    },
    repo: 'https://github.com/example/identity-auth-platform',
    demo: 'https://demo.example.com/auth-platform'
  },
  {
    id: 'reporting-engine',
    title: 'Async Reporting Engine',
    stack: ['TypeScript', 'RabbitMQ', 'S3', 'Terraform'],
    summary: {
      es: 'Generacion de reportes pesados en background con entrega por lotes.',
      en: 'Heavy report generation in the background with batch delivery.'
    },
    description: {
      es: 'Pipeline asincrono para reportes financieros y operativos. Incluye scheduler, jobs distribuidos y almacenamiento de artefactos en cloud.',
      en: 'Async pipeline for financial and operational reports. Includes scheduler, distributed jobs, and cloud artifact storage.'
    },
    repo: 'https://github.com/example/async-reporting-engine',
    demo: 'https://demo.example.com/reporting-engine'
  }
] as const;
export type ProjectItem = (typeof projects)[number];

export const timeline = [
  {
    type: 'experience',
    current: true,
    date: { es: '2024 - Actualidad', en: '2024 - Present' },
    title: { es: 'Senior Backend Engineer', en: 'Senior Backend Engineer' },
    organization: 'ScaleCloud Labs',
    detail: {
      es: 'Liderazgo tecnico en APIs criticas, reduccion de latencia en 38% y mejoras de resiliencia.',
      en: 'Technical leadership on critical APIs, 38% latency reduction, and resilience improvements.'
    }
  },
  {
    type: 'experience',
    date: { es: '2022 - 2024', en: '2022 - 2024' },
    title: { es: 'Backend Developer', en: 'Backend Developer' },
    organization: 'FinFlow Systems',
    detail: {
      es: 'Diseno de microservicios de pagos y reconciliacion para plataforma fintech regional.',
      en: 'Design of payment and reconciliation microservices for a regional fintech platform.'
    }
  },
  {
    type: 'experience',
    date: { es: '2020 - 2022', en: '2020 - 2022' },
    title: { es: 'Software Engineer', en: 'Software Engineer' },
    organization: 'DataRail Tech',
    detail: {
      es: 'Integraciones empresariales y arquitectura orientada a eventos con enfoque DevOps.',
      en: 'Enterprise integrations and event-driven architecture with a DevOps focus.'
    }
  },
  {
    type: 'education',
    date: { es: '2016 - 2020', en: '2016 - 2020' },
    title: { es: 'Ingenieria Informatica', en: 'Computer Engineering' },
    organization: 'Universidad Tecnologica',
    detail: {
      es: 'Base solida en estructuras de datos, sistemas distribuidos y bases de datos.',
      en: 'Solid foundation in data structures, distributed systems, and databases.'
    }
  },
  {
    type: 'education',
    date: { es: '2019', en: '2019' },
    title: { es: 'Especializacion en Cloud Architecture', en: 'Cloud Architecture Specialization' },
    organization: 'Programa Profesional AWS',
    detail: {
      es: 'Diseno de plataformas tolerantes a fallos y estrategias de observabilidad.',
      en: 'Design of fault-tolerant platforms and observability strategies.'
    }
  }
] as const;
export type TimelineItem = (typeof timeline)[number];
