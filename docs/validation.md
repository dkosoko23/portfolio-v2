# Validation

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
