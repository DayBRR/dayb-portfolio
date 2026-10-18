# DayB Portfolio
![Deploy](https://github.com/DayBRR/dayb-portfolio/actions/workflows/deploy.yml/badge.svg)
![Release](https://github.com/DayBRR/dayb-portfolio/actions/workflows/release-please.yml/badge.svg)
![Astro](https://img.shields.io/badge/Astro-7.4.0-ff5d01?logo=astro)
![Tailwind](https://img.shields.io/badge/TailwindCSS-4.3.3-38bdf8?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?logo=typescript)
![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-FE5196?logo=conventionalcommits)

Portfolio personal con una UI inspirada en JetBrains / IntelliJ, construido con Astro y Tailwind CSS.

El sitio es completamente estático (SSG), bilingüe y orientado a backend, optimizado para rendimiento, simplicidad operativa y despliegue automatizado.

🌐 **Live site:** https://davidruiz.es  
📦 **Repository:** https://github.com/DayBRR/dayb-portfolio

## Características

- UI tipo IDE con header, explorer lateral y área principal estilo editor.
- ES/EN real con `?lang=en`, cookie, `localStorage` y switch visible.
- Tema claro/oscuro persistente.
- Contenido tipado en TypeScript desde `src/data/portfolio.ts`.
- Modal de proyectos con `<dialog>` nativo y datos por proyecto.
- Metadatos SEO base, canonical y Open Graph desde `MainLayout.astro`.
- Diagrama de arquitectura configurable en `src/data/diagrams/dayb-portfolio-architecture.json`.
- Build estático con Astro, releases automatizadas con release-please y despliegue continuo con GitHub Actions + Docker.

## Stack

### Frontend

- Astro 7.4.0
- Tailwind CSS 4.3.3 mediante `@tailwindcss/vite`
- TypeScript

### Infrastructure

- Docker
- Nginx
- GitHub Actions
- release-please

## Desarrollo local

### Requisitos

- Node.js >=22.22.0
- npm >=9.6.5

```bash
npm ci
npm run dev
```

Servidor local por defecto: `http://localhost:4321`

## Build y preview

```bash
npm run build
npm run preview
```

La salida estática se genera en `dist/`.

## Architecture

El portfolio sigue una arquitectura estática optimizada para simplicidad y rendimiento.

Browser → Nginx → Static Files (Astro build)

Principios principales:

- Static Site Generation con Astro
- JavaScript mínimo en cliente
- Deploy dockerizado
- Runner self-hosted para GitHub Actions
- Releases automatizadas con release-please

El siguiente diagrama resume el flujo de build, deploy y runtime del portfolio.

```mermaid
flowchart TD

subgraph Client
Browser[User Browser]
end

subgraph Server
Nginx[Nginx Web Server]
end

subgraph Build
Astro[Astro Static Build]
end

subgraph CI/CD
GitHubActions[GitHub Actions]
DockerBuild[Docker Image Build]
end

subgraph VPS
Docker[Docker Container]
end

Browser --> Nginx
Nginx --> Astro
Astro --> Docker
GitHubActions --> DockerBuild
DockerBuild --> Docker
```

## Releases y deploy

El flujo de integración y despliegue continuo es el siguiente:

1. Push a `main`.
2. GitHub Actions ejecuta `.github/workflows/release-please.yml` para preparar o actualizar la release con `release-please`.
3. GitHub Actions ejecuta `.github/workflows/deploy.yml` en un runner self-hosted.
4. El workflow construye la imagen Docker del portfolio.
5. En el VPS, `docker compose up -d` actualiza el contenedor.
6. Nginx sirve el contenido generado por Astro desde `dist/`.

El `Dockerfile` usa una build multi-stage:

- Stage 1: `node:22.22.0-alpine` para ejecutar `npm ci` y `npm run build`.
- Stage 2: `nginx:alpine` para servir `dist/` en producción.

El archivo `.dockerignore` excluye `node_modules`, `dist/`, `.astro/` y `.git/` del contexto de build para evitar copiar dependencias y artefactos locales sobre la instalación de la imagen.

Para comprobar la compilación local sin desplegar:

```bash
docker build -t astro-portfolio:latest .
```

El workflow construye `astro-portfolio:latest`. El archivo Compose se mantiene exclusivamente en el VPS, en `/home/dayb/apps/astro-portfolio`; debe referenciar esa misma imagen.

## 📝 Commit Convention

This project follows **Conventional Commits** to maintain a clear and structured commit history and to enable automated releases.

Commit messages follow this format:

`<type>(optional scope): description`

Examples:

```text
feat(portfolio): add project filtering
fix(ui): improve card spacing on mobile
docs(readme): update project documentation
refactor(components): simplify project card logic
chore(ci): update GitHub Actions workflow
```

### Common Commit Types

| Type     | Description                                |
| -------- | ------------------------------------------ |
| feat     | Introduces a new feature                   |
| fix      | Fixes a bug                                |
| docs     | Documentation changes                      |
| refactor | Code refactoring without changing behavior |
| chore    | Maintenance tasks                          |
| ci       | Continuous integration changes             |

Releases and changelogs are automatically generated using **release-please** based on these commit messages.

## Notas

- Si `repo` o `demo` están vacíos, los botones del modal se ocultan.
- Los estados de proyecto se definen en `src/data/projectStatus.ts`.
- `astro.config.mjs` intenta cargar `@astrojs/sitemap` solo si la dependencia está instalada.
- Tailwind 4 se integra mediante el plugin Vite `@tailwindcss/vite`. La configuración personalizada se conserva en `tailwind.config.mjs`, cargada mediante `@config` desde `src/styles/global.css`.
- `src/styles/legacy-base.css` conserva los estilos base de Tailwind 3 y `src/styles/legacy-utilities.css` mantiene los espaciados, radios y gradientes anteriores. Ambos se importan desde `global.css`; no se importa el Preflight de Tailwind 4 para evitar cambios de diseño.
- Pendiente para otra rama: revisar el uso de `Astro.request.headers` en la detección de idioma de páginas estáticas. El build ya emitía este aviso antes de la migración; esta actualización no cambia el sistema de idiomas.

## Contributions

Las contribuciones no son necesarias para este proyecto, pero cualquier sugerencia o mejora es bienvenida mediante issues o pull requests.

## License

MIT

---
Built by **David Ruiz**

Backend Engineer focused on reliable systems, automation and clean architecture.
