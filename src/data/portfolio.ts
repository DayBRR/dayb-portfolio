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

export const projects: {
  id: string;
  title: string;
  status: ProjectStatus;
  stack: string[];
  summary: LocalizedText;
  description: LocalizedText;
  repo: string;
  demo: string;
}[] = [
  {
    id: 'code-diary-api',
    title: 'Code Diary API',
    status: 'Development',
    stack: ['Java', 'Spring Boot', 'Spring Security', 'JPA', 'JWT', 'Swagger', 'H2', 'PostgreSQL'],
    summary: {
      es: 'API REST para gestionar y documentar proyectos software con autenticación JWT.',
      en: 'REST API to manage and document software projects with JWT authentication.'
    },
    description: {
      es: 'Backend en Spring Boot que centraliza metadatos, tecnologías y notas técnicas. Incluye endpoints públicos, seguridad JWT y documentación OpenAPI.',
      en: 'Spring Boot backend centralizing project metadata, technologies and technical notes. Includes public endpoints, JWT security and OpenAPI docs.'
    },
      repo: '',
      demo: ''
  },
  {
    id: 'code-diary-web',
    title: 'Code Diary Web',
    status: 'Concept',
    stack: ['Angular', 'TypeScript', 'REST API', 'JWT'],
    summary: {
      es: 'Interfaz web para explorar y gestionar proyectos del diario técnico.',
      en: 'Web interface to explore and manage technical journal projects.'
    },
    description: {
      es: 'Frontend SPA que consume la API de Code Diary para visualizar proyectos, tecnologías y notas personales con autenticación segura.',
      en: 'SPA frontend consuming the Code Diary API to display projects, technologies and personal notes with secure authentication.'
    },
    repo: '',
    demo: ''
  },
  {
    id: 'dayb-portfolio',
    title: 'DayB Portfolio',
    status: 'Production',
    stack: ['Astro', 'Tailwind CSS', 'TypeScript'],
    summary: {
      es: 'Portfolio personal estilo IDE orientado a backend.',
      en: 'Personal IDE-style portfolio focused on backend.'
    },
    description: {
      es: 'Portfolio bilingüe inspirado en IntelliJ con navegación lateral, modo claro/oscuro y proyectos destacados.',
      en: 'Bilingual IntelliJ-inspired portfolio with sidebar navigation, theme toggle and featured projects.'
    },
    repo: 'https://github.com/DayBRR/dayb-portfolio',
    demo: ''
  }
] as const;
export type ProjectItem = (typeof projects)[number];

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
