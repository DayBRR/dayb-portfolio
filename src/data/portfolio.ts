import type { ProjectStatus } from './projectStatus';

export type LocalizedText = {
  es: string;
  en: string;
};

export const profile = {
  title_path: 'David Ruiz Requejo',
  name: 'David Ruiz Requejo',
  role: {
    es: 'Backend Engineer | Architecture before Code',
    en: 'Backend Engineer | Architecture before Code'
  },
  location: {
    es: 'Remoto - Zaragoza | España',
    en: 'Remote - Zaragoza | Spain'
  },
  experience: {
    es: '+9 años de experiencia',
    en: '+9 years experience'
  },
  links: {
    contact: {
      es: 'Contactar',
      en: 'Contact',
      href: 'mailto:davidrr.22.12@gmail.com'
    },
    linkedin: {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/daybrr'
    },
    github: {
      label: 'GitHub',
      href: 'https://github.com/DayBRR'
    }
  },
  summary: {
    es: 'Construyo servicios robustos y escalables, con foco en observabilidad, rendimiento y calidad de arquitectura.',
    en: 'I build robust, scalable services with a focus on observability, performance, and architecture quality.'
  }
};
export type Profile = typeof profile;

export const focusHighlights = [
  {
    title: { es: 'Mi enfoque profesional', en: 'My professional focus' },
    items: [
      { es: 'Arquitectura antes que código', en: 'Architecture before code' },
      { es: 'Sistemas mantenibles', en: 'Maintainable systems' },
      { es: 'Diseño orientado a dominio', en: 'Domain-driven design' },
      { es: 'Observabilidad desde el inicio', en: 'Observability from day one' }
    ]
  },
  {
    title: { es: 'Lo que me diferencia', en: 'What sets me apart' },
    items: [
      { es: 'Experiencia en sistemas críticos', en: 'Experience in critical systems' },
      { es: 'Integraciones complejas', en: 'Complex integrations' },
      { es: 'Perfil técnico + funcional', en: 'Technical + functional profile' },
      { es: 'Liderazgo técnico', en: 'Technical leadership' }
    ]
  }
] as const;
export type FocusHighlight = (typeof focusHighlights)[number];

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

export const stackTecnology = [
  {
    title: { es: 'Arquitectura Backend', en: 'Backend Architecture' },
    topic: 'backend',
    items: ['Java', 'Spring Boot', 'Spring Security', 'JPA / Hibernate']
  },
  {
    title: { es: 'Cliente / Frontend', en: 'Client / Frontend' },
    topic: 'frontend',
    items: ['TypeScript', 'Angular', 'Astro', 'Tailwind CSS']
  },
  {
    title: { es: 'Datos', en: 'Data' },
    topic: 'data',
    items: ['Oracle', 'PostgreSQL', 'MySQL']
  },
  {
    title: { es: 'DevOps', en: 'DevOps' },
    topic: 'devops',
    items: ['Docker', 'AWS']
  },
  {
    title: { es: 'Calidad & APIs', en: 'Quality & API Design' },
    topic: 'quality',
    items: ['Testing', 'OpenAPI', 'OAuth2/JWT']
  }
] as const;
export type StackTecnologyGroup = (typeof stackTecnology)[number];

export const skills = [
  {
    title: { es: 'Backend Architecture', en: 'Backend Architecture' },
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

export type ProjectDiagram = {
  key: string;
  caption?: LocalizedText;
};

export type ProjectLink = {
  kind: 'repository' | 'production';
  label: LocalizedText;
  href: string;
};

export type ProjectTechnologyGroup = {
  label: LocalizedText;
  items: readonly string[];
};

export type ProjectItem = {
  id: string;
  title: string;
  status: ProjectStatus;
  type?: LocalizedText;
  stack: readonly ProjectTechnologyGroup[];
  /** Exact names from stack, used only to select technologies for the card. */
  featuredTechnologies?: readonly string[];
  summary: LocalizedText;
  description: LocalizedText;
  features?: readonly LocalizedText[];
  links: readonly ProjectLink[];
  diagram?: ProjectDiagram;
};

export const projects: readonly ProjectItem[] = [
  {
    id: 'grind-protocol',
    featuredTechnologies: ['Java 17', 'Spring Boot 3.5.x', 'PostgreSQL 16', 'Angular 17', 'TypeScript', 'Spring Security 6'],
    title: 'Grind Protocol',
    status: 'Development',
    type: { es: 'Aplicación web full-stack · Productividad gamificada', en: 'Full-stack web application · Gamified productivity' },
    summary: {
      es: 'Tareas, hábitos y objetivos convertidos en progresión RPG con XP, niveles y recompensas.',
      en: 'Tasks, habits and goals turned into RPG progression with XP, levels and rewards.'
    },
    description: {
      es: 'Una misma aplicación con dos repositorios independientes: Angular presenta el dashboard, las tareas y el progreso personal; la API REST en Spring Boot gestiona autenticación, usuarios, perfiles, plantillas, tareas completadas, XP, niveles, Core Points, recompensas, rachas y estadísticas. PostgreSQL conserva los datos y Flyway gestiona las migraciones.',
      en: 'One application with two independent repositories: Angular provides the dashboard, tasks and personal progress; the Spring Boot REST API manages authentication, users, profiles, templates, completed tasks, XP, levels, Core Points, rewards, streaks and statistics. PostgreSQL stores the data and Flyway manages migrations.'
    },
    stack: [
      { label: { es: 'Backend', en: 'Backend' }, items: ['Java 17', 'Spring Boot 3.5.x', 'Spring Security 6', 'PostgreSQL 16', 'Flyway', 'Maven', 'JUnit', 'Mockito', 'Testcontainers', 'REST API'] },
      { label: { es: 'Frontend', en: 'Frontend' }, items: ['Angular 17', 'TypeScript', 'SCSS'] }
    ],
    features: [
      { es: 'Gamificación RPG con experiencia (XP), niveles, Core Points y recompensas.', en: 'RPG gamification with experience (XP), levels, Core Points and rewards.' },
      { es: 'Gestión de tareas diarias y repetibles, plantillas y registro de actividades completadas.', en: 'Daily and repeatable tasks, templates and completed activity tracking.' },
      { es: 'Rachas de actividad y seguimiento del progreso diario.', en: 'Activity streaks and daily progress tracking.' },
      { es: 'Dashboard con estadísticas por categorías y gráficas de experiencia semanal.', en: 'Dashboard with category statistics and weekly experience charts.' },
      { es: 'Autenticación y gestión de usuarios y perfiles con Spring Security.', en: 'Authentication and user and profile management with Spring Security.' },
      { es: 'Comunicación frontend/backend mediante API REST, persistencia y migraciones.', en: 'Frontend/backend communication through a REST API, persistence and migrations.' }
    ],
    links: [
      { kind: 'repository', label: { es: 'Backend', en: 'Backend' }, href: 'https://github.com/DayBRR/grind-protocol' },
      { kind: 'repository', label: { es: 'Frontend', en: 'Frontend' }, href: 'https://github.com/DayBRR/grind-protocol-frontend' }
    ],
    diagram: {
      key: 'grind-protocol-architecture',
      caption: { es: 'Una aplicación, dos repositorios: Angular → API REST Spring Boot → PostgreSQL.', en: 'One application, two repositories: Angular → Spring Boot REST API → PostgreSQL.' }
    }
  },
  {
    id: 'code-diary',
    featuredTechnologies: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'JWT'],
    title: 'Code Diary',
    status: 'Development',
    stack: [
      {
        label: { es: 'Backend', en: 'Backend' },
        items: [
          'Java',
          'Spring Boot',
          'Spring Security',
          'JPA',
          'JWT',
          'Swagger',
          'H2',
          'PostgreSQL'
        ]
      },
      {
        label: { es: 'Frontend', en: 'Frontend' },
        items: [
          'Angular',
          'TypeScript',
          'REST API',
          'JWT'
        ]
      }
    ],
    summary: {
      es: 'Plataforma full-stack para gestionar y documentar proyectos de software, tecnologías y conocimientos técnicos.',
      en: 'Full-stack platform for managing and documenting software projects, technologies and technical knowledge.'
    },
    description: {
      es: 'Aplicación full-stack orientada a centralizar proyectos de desarrollo, tecnologías utilizadas y notas técnicas. El backend, desarrollado con Spring Boot, proporciona una API REST con autenticación JWT, gestión de datos y documentación OpenAPI. El frontend, planteado con Angular, permitirá explorar y administrar la información mediante una interfaz web conectada a la API.',
      en: 'Full-stack application designed to centralize development projects, technologies and technical notes. The Spring Boot backend provides a REST API with JWT authentication, data management and OpenAPI documentation. The planned Angular frontend will enable users to explore and manage information through a web interface connected to the API.'
    },
    links: [
      { kind: 'repository', label: { es: 'Backend', en: 'Backend' }, href: 'https://github.com/DayBRR/code-diary' }
    ]
  },
  {
    id: 'security-core',
    featuredTechnologies: ['Java 17', 'Spring Security', 'JWT', 'Maven'],
    title: 'Security Core',
    status: 'Development',
    stack: [
      {
        label: { es: 'Backend y seguridad', en: 'Backend & Security' },
        items: [
          'Java 17',
          'Spring Boot 3',
          'Spring Security',
          'Spring Data JPA',
          'JWT',
          'Maven',
          'JUnit 5'
        ]
      }
    ],
    summary: {
      es: 'Librería modular y reutilizable de seguridad para aplicaciones Spring Boot, con autenticación JWT y gestión avanzada de sesiones.',
      en: 'Modular, reusable security library for Spring Boot applications, featuring JWT authentication and advanced session management.'
    },
    description: {
      es: 'Módulo de seguridad desacoplado desarrollado con Java y Spring Security para integrar autenticación y gestión de sesiones en aplicaciones Spring Boot. Implementa access y refresh tokens JWT, rotación de tokens, detección de reutilización, sesiones por dispositivo, identificación mediante IP y User-Agent y cierre de sesiones individual o global. Diseñado bajo principios de modularidad, reutilización y seguridad por defecto.',
      en: 'Decoupled security module built with Java and Spring Security to integrate authentication and session management into Spring Boot applications. Implements JWT access and refresh tokens, token rotation, reuse detection, per-device sessions, IP and User-Agent fingerprinting, and individual or global session revocation. Designed around modularity, reusability and secure-by-default principles.'
    },
    links: [
        { kind: 'repository', label: { es: 'Ver repositorio', en: 'View repository' }, href: 'https://github.com/DayBRR/security-core' }
    ]
  },
  {
    id: 'vruizart',
    featuredTechnologies: ['Java 17', 'Spring Boot 3.5.x', 'PostgreSQL', 'Angular 17', 'TypeScript'],
    title: 'VRuizArt',
    status: 'Production',
    type: { es: 'Portfolio artístico y catálogo de obras', en: 'Artist portfolio and artwork catalog' },
    summary: {
      es: 'Plataforma artística en producción para explorar colecciones y descubrir obras con una experiencia centrada en las imágenes.',
      en: 'An artist platform in production for exploring collections and discovering artwork through an image-focused experience.'
    },
    description: {
      es: 'Web pública desarrollada para presentar y organizar la obra de una artista. El frontend consume una API REST que estructura el catálogo y permite consultar obras, colecciones y técnicas mediante filtros y paginación.',
      en: 'A public website built to showcase and organize an artist’s work. The frontend consumes a REST API that structures the catalog and provides artwork, collection and technique queries with filtering and pagination.'
    },
    stack: [
      { label: { es: 'Backend', en: 'Backend' }, items: ['Java 17', 'Spring Boot 3.5.x', 'PostgreSQL', 'Flyway', 'REST API'] },
      { label: { es: 'Frontend', en: 'Frontend' }, items: ['Angular 17', 'TypeScript'] }
    ],
    features: [
      { es: 'Presentación de colecciones, galería y obras destacadas.', en: 'Collection presentation, artwork gallery and featured works.' },
      { es: 'Catálogo con paginación y filtros por colección y técnica artística.', en: 'Paginated catalog with collection and artistic technique filters.' },
      { es: 'Visualizador de obras y consulta de sus detalles.', en: 'Artwork viewer and detailed artwork information.' },
      { es: 'Integración frontend/backend y API REST para obras y técnicas.', en: 'Frontend/backend integration and a REST API for artwork and techniques.' },
      { es: 'Gestión estructurada del catálogo artístico.', en: 'Structured management of the artwork catalog.' }
    ],
    links: [
      { kind: 'repository', label: { es: 'Ver repositorio', en: 'View repository' }, href: 'https://github.com/DayBRR/vruizart-portfolio-frontend' },
      { kind: 'production', label: { es: 'Visitar web pública', en: 'Visit public website' }, href: 'https://www.vruizart.com/' }
    ],
    diagram: {
      key: 'vruizart-architecture',
      caption: { es: 'Frontend web → API REST → Catálogo de obras, con filtros y paginación.', en: 'Web frontend → REST API → Artwork catalog, with filtering and pagination.' }
    }
  },
  {
    id: 'dayb-portfolio',
    featuredTechnologies: ['Astro', 'Tailwind CSS', 'TypeScript'],
    title: 'DayB Portfolio',
    status: 'Production',
    stack: [{ label: { es: 'Tecnologías', en: 'Technologies' }, items: ['Astro', 'Tailwind CSS', 'TypeScript'] }],
    summary: {
      es: 'Portfolio personal estilo IDE orientado a backend.',
      en: 'Personal IDE-style portfolio focused on backend.'
    },
    description: {
      es: 'Portfolio bilingüe inspirado en IntelliJ con navegación lateral, modo claro/oscuro y proyectos destacados.',
      en: 'Bilingual IntelliJ-inspired portfolio with sidebar navigation, theme toggle and featured projects.'
    },
    diagram: {
      key: 'dayb-portfolio-architecture',
      caption: {
        es: 'Flujo de entrega estática con Astro y assets locales.',
        en: 'Static delivery flow with Astro and local assets.'
      }
    },
    links: [
      { kind: 'repository', label: { es: 'Ver repositorio', en: 'View repository' }, href: 'https://github.com/DayBRR/dayb-portfolio' },
      { kind: 'production', label: { es: 'Ver web', en: 'Visit website' }, href: 'https://davidruiz.es/' }
    ]
  }
] as const;

export type TimelineItem = {
  type: 'experience' | 'education';
  current?: boolean;
  date: LocalizedText;
  title: LocalizedText;
  organization: string;
  detail: LocalizedText;
};

export const timeline: readonly TimelineItem[] = [
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
      es: 'Desarrollo backend de un sistema de información social para administraciones públicas usando Java, JSF y Oracle, gestionando datos sensibles y procesos administrativos.',
      en: 'Backend development of a social information system for public administrations using Java, JSF and Oracle, managing sensitive data and administrative workflows.'
    }
  },
  {
    type: 'experience',
    date: { es: '2019 - 2020', en: '2019 - 2020' },
    title: { es: 'Fullstack Developer – Sistemas de Cita Previa', en: 'Fullstack Developer – Appointment Systems' },
    organization: 'Grupo Oesía',
    detail: {
      es: 'Desarrollo frontend Angular y backend Java en sistemas de cita previa para entidades públicas y entornos académicos.',
      en: 'Angular frontend and Java backend development for appointment systems used by public entities and academic environments.'
    }
  },
  {
    type: 'experience',
    date: { es: '2019 - Actualidad', en: '2019 - Present' },
    title: { es: 'Backend Developer – Administración Electrónica', en: 'Backend Developer – E-Government Systems' },
    organization: 'Grupo Oesía',
    detail: {
      es: 'Desarrollo de sistemas de expedientes electrónicos, vivienda pública y subastas. Integraciones con servicios públicos de firma digital, registros y gestión documental, además de infraestructura cloud.',
      en: 'Development of electronic records, public housing and procurement systems. Integrations with public services for digital signature, registries and document management, plus cloud infrastructure.'
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
