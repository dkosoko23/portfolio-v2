# Adebowale’s portfolio

A Nuxt 4 + Vue 3 + TypeScript + Tailwind CSS 4 portfolio. Recreates the sidebar,
spacing, typography, colors, image treatment, and responsive breakpoint of the
requested Reid Slaughter reference using Adebowale’s Upwork portfolio content.

## Run

```sh
bun install
bun run dev
```

Local preview: http://127.0.0.1:3000

## Validate and build

```sh
bun run typecheck
bun run generate
```

Static output is in `.output/public`. `bun run build` also supports a normal
Nuxt server deployment. This project has not been published or connected to a
hosting provider.

## Edit

- `app/data/portfolio.ts`: profile, project descriptions, technical sections, ordering, slides, and feedback.
- `app/data/images.json`: image metadata and original Upwork asset URLs.
- `app/assets/css/main.css`: shared layout, visual styling, and responsive rules.
- `app/components/ProjectCard.vue`: visible-only rotating previews, pause, and reduced motion.
- `app/pages/projects/[slug].vue`: case studies and native dialog image viewer.
- `public/images`: optimized WebP portfolio images and profile portrait.

The work index contains six projects. Each has a developer-focused case study,
technical breakdown, and image gallery. The profile and About page lead with
full-stack development. About and Client Words replace the personal content from
the reference. Contact links go to the verified Upwork profile because no direct
email address was supplied.

See `docs/sources.md` for source provenance and content decisions. Downloaded
originals are retained locally under ignored `.data/source-images/`; the website
uses only the optimized assets in `public/images/`.
