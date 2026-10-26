# Portafolio de Jorge Suárez

Portafolio multipágina construido con React, Vite y Tailwind CSS. El proyecto contiene cinco formas visuales de presentar el mismo perfil profesional.

## Versiones

- `/` — versión original
- `/v2/` — dirección editorial
- `/v3/` — consola técnica
- `/v4/` — estudio creativo modular
- `/v5/` — diseño suizo/brutalista

Las versiones 2–5 comparten los datos de `src/data/portfolio.js`, por lo que proyectos, experiencia, conocimientos y enlaces se actualizan desde un único archivo.

Todas las páginas incluyen un menú de versiones en su navegación y una galería comparativa antes del contacto o pie de página.

## Desarrollo

```bash
npm install
npm run dev
```

## Validación y producción

```bash
npm run lint
npm run build
npm run preview
```

Vite genera un documento HTML independiente por versión dentro de `dist/`, de modo que cada página puede abrirse directamente desde su propia ruta en un hosting estático.
