# Adebowale’s portfolio

A Nuxt 4 + Vue 3 + TypeScript + Tailwind CSS 4 portfolio. Uses the sidebar,
spacing, typography, and responsive layout of the requested Reid Slaughter
reference with Adebowale’s Upwork portfolio content, white surfaces, and purple
accents. Preview images fill their cards with top-aligned cropping.

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

- `app/data/portfolio.ts`: profile, project descriptions, technical sections and their image indices, ordering, slides, and feedback.
- `app/data/images.json`: image metadata and original Upwork asset URLs.
- `app/assets/css/main.css`: shared layout, visual styling, and responsive rules.
- `app/components/ProjectCard.vue`: visible-only rotating previews, pause, and reduced motion.
- `app/pages/projects/[slug].vue`: case studies and native dialog image viewer.
- `public/images`: optimized WebP portfolio images and profile portrait.

The work index contains six projects. Each has an image-backed hero and a
developer-focused case study with screenshots interleaved into the relevant
technical sections. Section `imageIndices` use zero-based positions in the
project’s image array. The first preview image supplies the hero background;
the original full image is also available in the case study’s image viewer.
The profile and About page lead with
full-stack development. About and Client Words replace the personal content from
the reference. Contact links go to the verified Upwork profile because no direct
email address was supplied.

See `docs/sources.md` for source provenance and content decisions. Downloaded
originals are retained locally under ignored `.data/source-images/`; the website
uses only the optimized assets in `public/images/`.
