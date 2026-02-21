# Portfolio Backend (Astro + Tailwind)

Portfolio con estetica inspirada en IntelliJ IDEA / JetBrains para exponer:

- Perfil backend en ES/EN con switch de idioma
- Skills y tecnologias destacadas
- Stack tecnologico por dominios con colores por tipologia
- Proyectos con modal (descripcion, repo Git y demo)
- Estados de proyecto con iconos y color
- Timeline de experiencia y formacion
- Tema oscuro y claro
- Layout tipo editor de codigo con efectos de typing

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
- `src/data/projectStatus.ts`

Ahí puedes actualizar:

- `profile`
- `featuredTech`
- `skills`
- `projects`
- `timeline`
- `stackTecnology`

## Stack

- Astro
- Tailwind CSS
- CSS variables para tema light/dark
- Modal nativo con `<dialog>` + script inline
- Datos tipados en TypeScript

## Notas

- Si `repo` o `demo` estan vacios, los botones del modal quedan deshabilitados.
- Los estados de proyecto se definen en `src/data/projectStatus.ts` y aceptan: `Concept`, `Design`, `Development`, `Testing`, `Production`, `Maintenance`.
