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
  {
    name: 'Java',
    note: { es: 'Desarrollo backend empresarial', en: 'Enterprise backend development' },
    active: true
  },
  {
    name: 'Spring',
    note: { es: 'APIs REST y arquitectura backend', en: 'REST APIs and backend architecture' },
    active: true
  },
  {
    name: 'Node.js',
    note: { es: 'Microservicios y APIs REST', en: 'Microservices and REST APIs' },
    active: false
  },
  {
    name: 'NestJS',
    note: { es: 'Arquitectura modular y limpia', en: 'Modular, clean architecture' },
    active: false
  },
  {
    name: 'PostgreSQL',
    note: { es: 'Modelado de datos y performance', en: 'Data modeling and performance' },
    active: true
  },
  {
    name: 'Oracle',
    note: { es: 'Bases de datos empresariales', en: 'Enterprise database systems' },
    active: true
  },
  {
    name: 'MySQL',
    note: { es: 'Bases de datos relacionales', en: 'Relational database management' },
    active: false
  },
  {
    name: 'Angular',
    note: { es: 'Frontends SPA empresariales', en: 'Enterprise SPA frontends' },
    active: true
  },
  {
    name: 'Docker',
    note: { es: 'Entornos reproducibles y despliegue', en: 'Reproducible environments and delivery' },
    active: false
  },
  {
    name: 'Redis',
    note: { es: 'Caching y colas de tareas', en: 'Caching and task queues' },
    active: false
  },
  {
    name: 'AWS',
    note: { es: 'Infraestructura cloud escalable', en: 'Scalable cloud infrastructure' },
    active: false
  }
] as const;
export type FeaturedTechItem = (typeof featuredTech)[number];

export const skills = [
  {
    title: { es: 'Backend Core', en: 'Backend Core' },
    items: ['TypeScript', 'Node.js', 'Java (Spring)']
  },
  {
    title: { es: 'Data', en: 'Data' },
    items: ['Oracle', 'MySQL', 'PostgreSQL']
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
    date: { es: '2019 - Actualidad', en: '2019 - Present' },
    title: { es: 'Backend Developer', en: 'Backend Developer' },
    organization: 'Grupo Oesía',
    detail: {
      es: 'Desarrollo y mantenimiento de aplicaciones críticas de administración electrónica. Liderazgo técnico en módulos backend Java, integración con servicios públicos, gestión de incidencias, análisis funcional y formación de compañeros.',
      en: 'Development and maintenance of critical e-government applications. Technical leadership in Java backend modules, public service integrations, incident management, functional analysis, and team mentoring.'
    }
  },
  {
    type: 'experience',
    date: { es: '2020 - 2021', en: '2020 - 2021' },
    title: { es: 'Backend Developer – Sistemas Sociales', en: 'Backend Developer – Social Systems' },
    organization: 'Grupo Oesía',
    detail: {
      es: 'Desarrollo backend del Sistema de Información de Menores de Aragón utilizando Java, JSF y Oracle, gestionando datos sensibles y procesos administrativos.',
      en: 'Backend development of Aragón’s Child Information System using Java, JSF and Oracle, managing sensitive data and administrative workflows.'
    }
  },
  {
    type: 'experience',
    date: { es: '2019 - 2020', en: '2019 - 2020' },
    title: { es: 'Fullstack Developer – Sistemas de Cita Previa', en: 'Fullstack Developer – Appointment Systems' },
    organization: 'Grupo Oesía',
    detail: {
      es: 'Desarrollo frontend Angular y backend Java en sistemas de cita previa para Gobierno de Aragón, Justicia y Universidad de Jaén.',
      en: 'Angular frontend and Java backend development for appointment systems used by Aragón Government, Justice Department and University of Jaén.'
    }
  },
  {
    type: 'experience',
    date: { es: '2019 - Actualidad', en: '2019 - Present' },
    title: { es: 'Backend Developer – Administración Electrónica', en: 'Backend Developer – E-Government Systems' },
    organization: 'Grupo Oesía',
    detail: {
      es: 'Desarrollo de sistemas de expedientes electrónicos, vivienda pública y subastas. Integraciones con servicios públicos (@Firma, padrón, portafirmas, gestor documental, AWS).',
      en: 'Development of electronic records, public housing and procurement systems. Integration with government services (@Firma, registries, document systems, AWS).'
    }
  },
  {
    type: 'experience',
    date: { es: '2019 - Actualidad', en: '2019 - Present' },
    title: { es: 'Backend Developer – Sistemas de Datos y Facturación', en: 'Backend Developer – Data & Billing Systems' },
    organization: 'Grupo Oesía',
    detail: {
      es: 'Procesamiento de datos, parseo XML y gestión de facturación utilizando Java, PostgreSQL y arquitecturas backend robustas.',
      en: 'Data processing, XML parsing and billing management using Java, PostgreSQL and robust backend architectures.'
    }
  },
  {
    type: 'education',
    date: { es: '2017 - 2018', en: '2017 - 2018' },
    title: { es: 'Desarrollo de Aplicaciones Web', en: 'Web Application Development' },
    organization: 'CPIFP Los Enlaces',
    detail: {
      es: 'Especialización en desarrollo web, programación, diseño de aplicaciones y tecnologías de Internet.',
      en: 'Specialized training in web development, programming, application design and Internet technologies.'
    }
  },
  {
    type: 'education',
    date: { es: '2015 - 2017', en: '2015 - 2017' },
    title: { es: 'Desarrollo de Aplicaciones Multiplataforma', en: 'Multiplatform Application Development' },
    organization: 'CPIFP Los Enlaces',
    detail: {
      es: 'Formación en desarrollo de software multiplataforma, bases de datos y programación orientada a sistemas empresariales.',
      en: 'Training in multiplatform software development, databases and enterprise programming.'
    }
  },
  {
    type: 'education',
    date: { es: 'Formación Complementaria', en: 'Additional Training' },
    title: { es: 'Certificaciones Técnicas', en: 'Technical Certifications' },
    organization: 'Formación Profesional',
    detail: {
      es: 'Cursos en Angular, desarrollo con motores gráficos (Unreal Engine y Unity) y programación orientada a entornos 3D.',
      en: 'Courses in Angular, game engines (Unreal Engine & Unity) and 3D programming environments.'
    }
  }
] as const;
export type TimelineItem = (typeof timeline)[number];
