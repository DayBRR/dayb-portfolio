# Portfolio Backend (Astro + Tailwind)

Portfolio con estetica inspirada en IntelliJ IDEA / JetBrains para exponer:

- Skills y tecnologias destacadas
- Proyectos con modal (descripcion, repo Git y demo)
- Timeline de experiencia y formacion
- Tema oscuro y claro
- Layout tipo editor de codigo

## Ejecutar

```bash
npm install
npm run dev
```

Build de produccion:

```bash
npm run build
npm run preview
```

## Personalizacion rapida

Edita el contenido en:

- `src/data/portfolio.ts`

Ahi puedes actualizar:

- `profile`
- `featuredTech`
- `skills`
- `projects`
- `timeline`

## Stack

- Astro
- Tailwind CSS
- CSS variables para tema light/dark
- Modal nativo con `<dialog>` + script inline
