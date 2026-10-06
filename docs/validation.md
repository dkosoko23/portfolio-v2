# Validation

## Neutral overlays, natural titles, and soft shadow — October 6, 2026

- `bun run typecheck`, `bun run generate`, and `git diff --check`: passed.
- Hero and card gradients now use only black with varying opacity. Browser
  inspection confirms the hero gradient has zero red, green, and blue channels.
- Hero titles use normal wrapping. At 1280×720, “Healthcare Provider Discovery”
  occupies the first line and “Platform” occupies the second.
- Replaced `shadow-xl` with a centered 16px blur at 10% black plus a light
  2px-offset shadow. Visually checked it over the white case-study body.
- The image preview uses a transparent dialog over a 40% black backdrop with
  12px blur. Images keep their intrinsic aspect ratio so their clickable bounds
  match the visible image instead of covering the empty space beside it.
- At desktop 1280×720 and mobile 390×844, clicking the overlay closes the
  preview and restores page scrolling. Desktop checks also confirm clicking
  the image keeps it open and dismissal returns focus to the opening button.
- Mobile image bounds stay inside the viewport with no horizontal overflow.
  No captured browser warnings or errors; the viewport override was reset.
- Screenshots under ignored `.data/verification/`: `neutral-hero-natural-wrap.png`,
  `soft-back-shadow.png`, and `black-blurred-image-preview.png`.
- No deployment was performed.

## Back pill and header spacing — October 6, 2026

- `bun run typecheck`, `bun run generate`, and `git diff --check`: passed.
- At 1280×720, the case-study header and back link have a 38.4px side gutter,
  increased from 25.6px. At 390×844, the gutter is 24px. Neither viewport has
  horizontal document overflow.
- The back pill has a 0px border. A real pointer hover changes its background
  to `#110c1c` and text to white, with no underline. Its default white
  background, dark text, and `shadow-xl` remain.
- No captured browser warnings or errors. The viewport override was reset.
- Hover screenshot: ignored `.data/verification/back-pill-hover.png`.
- No deployment was performed.

## Shared divider and floating case-study navigation — October 6, 2026

- `bun run typecheck`, `bun run generate`, and `git diff --check`: passed.
- Browser checks are available again. At 1280×720, the homepage sidebar has
  a 1px divider aligned with the main column, and all six cards render.
- The provider case-study heading spans approximately 894px versus 830px for
  body text at that viewport. Its side gutters are approximately 26px.
- The white, rounded “All work” link uses Tailwind `shadow-xl`. After scrolling
  720px, the hero bottom is above the viewport and the pill remains at 24px,
  with the link still receiving pointer input. Clicking it returns to `/#work`.
- At 390×844, the divider becomes a horizontal line below the sidebar. After
  scrolling past the hero, the pill remains at 16px and receives pointer input.
  Neither tested viewport has horizontal document overflow.
- No captured browser warnings or errors. The temporary mobile viewport was
  reset and the desktop preview returned to the top of the case study.
- Screenshots are saved under ignored `.data/verification/`:
  `wide-hero-desktop.png`, `floating-back-scrolled.png`,
  `home-sidebar-divider.png`, and `floating-back-mobile.png`.
- Reapplied the previously requested “Areas” line removal, which was missing
  from the current `main` checkout. No deployment was performed.

## Sidebar, dates, and skills refinement — October 6, 2026

- `bun run typecheck`, `bun run generate`, and `git diff --check`: passed.
- Parsed all nine generated content pages: project/review/experience dates,
  slideshow controls, and the removed italic sidebar sentence are absent.
  All four statistic values remain present on every page.
- The generated homepage retains six linked project cards with no pause
  buttons. The About page includes React, Next.js, and Go in its skills list.
- Source checks confirm an off-white sidebar (`#f7f7f5`), white main content,
  dark navigation/contact styling, and purple statistic values.
- The local About route returned HTTP 200 with the new skills and without the
  removed sidebar sentence.
- Browser connection retry still failed on the missing cached service module;
  no fresh visual, responsive, or animation interaction checks are claimed.
- No deployment was performed.

## Image-led case studies and white theme — October 6, 2026

- `bun run typecheck` and `bun run generate`: passed. The same unused-import
  warning from Nuxt’s internal `h3.mjs` dependency remains.
- All nine generated pages have titles, descriptions, valid local links, and
  existing image files.
- All six case studies render an image-backed hero and 19 total technical
  sections, each with text followed by its assigned images. All 38 original
  screenshots occur exactly once in the section galleries. Their enlarge
  buttons and the native dialog remain in the rendered markup.
- The local provider-platform route returned HTTP 200 with its hero and four
  interleaved sections.
- Source checks confirm `object-fit: cover` and `object-position: center top`
  for card and hero images, white page surfaces, and no hover color overrides.
- `output/zelohub-transparent.png` has an RGBA channel with transparent and
  opaque pixels. The generated image is a separate export with known text and
  edge-fidelity limitations documented alongside it.
- Fresh browser geometry, responsive behavior, and interaction checks remain
  unavailable because the browser connection fails on a missing cached service
  module. Static checks do not establish visual or interaction correctness.
- No deployment was performed.

## Full-stack case studies — October 6, 2026

- `bun run typecheck`: passed.
- `bun run generate`: passed; all nine content pages generated. Nuxt emitted
  an unused-import warning from its internal `h3.mjs` dependency.
- Parsed all nine generated HTML pages: titles and descriptions are present,
  local links and image files resolve, fragment targets exist, and IDs are unique.
- All six project pages contain the updated developer role, technical focus,
  and at least three technical sections (19 sections total).
- The local provider-platform route returned HTTP 200 and the updated title
  and four technical sections.
- Fresh browser visual and interaction checks were unavailable: the browser
  connection failed while loading a missing cached plugin service module,
  including after a session reset. The earlier browser checks below were not
  repeated for this content update.
- No deployment was performed.

## Original portfolio build

Verified locally on October 2, 2026.

- `bun run typecheck`: passed.
- `bun run generate`: passed. Nine content pages plus payloads and fallback
  documents generated in `.output/public`.
- Checked all nine generated pages for titles, descriptions, local link targets,
  and image files: passed.
- Desktop browser: reference proportions reproduced at 1280px; first images
  load, six project links render, and no captured console warnings or errors.
- Mobile browser emulation: 390px work cards and a 320px case study have no
  horizontal document overflow. Card captions also remain within their boxes.
- Project-card navigation opens the matching case study.
- Next-project navigation updates both the URL and project content.
- Gallery image opens in a native modal dialog. Escape dismisses it, restores
  page scrolling, and returns focus to the activating image button.
- Slideshow pause updates its accessible label and pressed state.
- With reduced motion enabled, active project images remain unchanged beyond
  the normal slideshow interval. Browser emulation settings were restored.
- About, Work, and Client Words navigation checked in the browser.

Preview and screenshots are local. No deployment, real-device test, external
site availability guarantee, or automated accessibility audit is claimed.
