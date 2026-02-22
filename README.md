# Portfolio Backend (Astro + Tailwind)

Portfolio con estética inspirada en IntelliJ IDEA / JetBrains para exponer perfil backend, proyectos y experiencia.

**Preview**
![Preview](public/avatar-dayb.png)
Reemplaza la imagen por un screenshot real del home, por ejemplo en `public/preview.png`.

**Features**
- [x] UI estilo IDE con panel lateral y layout tipo editor.
- [x] ES/EN real con `?lang=en`, cookie + `localStorage` y switch visible.
- [x] Skills destacadas, stack por dominios y timeline profesional.
- [x] Modal de proyectos con estado, stack y links (repo/demo).
- [x] Tema claro/oscuro persistente.
- [x] Metadatos SEO base y canonical/OG/Twitter.

**Cómo ejecutar**
```bash
npm install
npm run dev
```

**Build de producción**
```bash
npm run build
npm run preview
```

**Deploy**
1. Configura `site` en `astro.config.mjs` con tu dominio real.
2. Ejecuta `npm run build`.
3. Despliega la carpeta `dist/` en Netlify, Vercel o Cloudflare Pages.
4. Opcional: instala `@astrojs/sitemap` para generar `sitemap.xml`.

**Personalización rápida**
Edita el contenido en:
- `src/data/portfolio.ts`
- `src/data/projectStatus.ts`

Ahí puedes actualizar:
- `profile`
- `featuredTech`
- `skills`
- `projects`
- `timeline`
- `stackTecnology`

**Stack**
- Astro
- Tailwind CSS
- CSS variables para tema light/dark
- Modal nativo con `<dialog>` + script inline
- Datos tipados en TypeScript

**Notas**
- Si `repo` o `demo` están vacíos, los botones del modal quedan ocultos.
- Los estados de proyecto se definen en `src/data/projectStatus.ts` y aceptan: `Concept`, `Design`, `Development`, `Testing`, `Production`, `Maintenance`.
