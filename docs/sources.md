# Sources and content decisions

Inspected on October 2, 2026.

## Design reference

https://www.reidhslaughter.com/#work

Reimplemented the visual layout in Nuxt and Tailwind: 25vw desktop sidebar with a
280px minimum, 30px sidebar horizontal padding, Inter typography,
14px work grid spacing, 16:9.6 project cards,
caption overlays, gentle image rotation, and a 900px stacked-layout breakpoint.
Reid’s identity, imagery, text, metrics, and contact details are not included.

On October 6, the user requested full-card images with top-aligned cropping,
image-backed case-study headers, and screenshots mixed into the text. Card
padding and blurred backdrops were removed. All 38 original project images are
assigned to the technical sections they illustrate and retain the image viewer.
The user also requested white surfaces. The latest refinement uses a subtle
off-white sidebar (`#f7f7f5`) against the white main content. Navigation and the
contact action use their original dark colors; statistics and review ratings
retain purple. Navigation hover uses an underline without changing color.
The visible slideshow pause control was removed at the user’s request; preview
rotation still respects reduced motion and stops on hover or keyboard focus.

## Profile and project sources

- Profile: https://www.upwork.com/freelancers/~01e4ba09ea64b47de5
- Healthcare SaaS: https://www.upwork.com/freelancers/~01e4ba09ea64b47de5?p=2063995163748773888
- Provider platform: https://www.upwork.com/freelancers/~01e4ba09ea64b47de5?p=1958359103121174528
- Complete Orthopedics (originally listed as Figma designs): https://www.upwork.com/freelancers/~01e4ba09ea64b47de5?p=2059409978865201152
- Amyntor Cloud: https://www.upwork.com/freelancers/~01e4ba09ea64b47de5?p=1935024049678000128
- Windsor Education: https://www.upwork.com/freelancers/~01e4ba09ea64b47de5?p=1622877509182799872
- Bookstore: https://www.upwork.com/freelancers/~01e4ba09ea64b47de5?p=1622883035002159104

All 38 project images come from the corresponding Upwork portfolio galleries.
They are stored locally as WebP images, at up to 2400px wide, with their original
aspect ratios preserved. Original asset URLs and dimensions are recorded in
`app/data/images.json`. Temporary authenticated download URLs are not committed.

## Editorial choices

- React, Next.js, and Go were added to the About page’s skill list at the user’s
  explicit request on October 6, 2026. The sidebar’s italic stack sentence was
  removed at the same time.
- Project titles describe the product rather than the design tool. The original
  "Figma" entry is named Complete Orthopedics based on its screenshots; its
  existing `figma-studies` route is preserved for incoming links.
- Project dates retained in the source data are Upwork publication dates, not
  inferred completion dates. At the user’s request, project, review, and
  experience dates are no longer displayed. The footer retains its copyright year.
- The profile reports more than eight years of experience. The public profile
  showed 100% Job Success, 4.9 rating, and 23 jobs. These are dated snapshots and
  are not automatically refreshed.
- On October 6, 2026, the user directed a change from design-first positioning
  to full-stack development across all projects. Role labels, profile copy, and
  case-study introductions reflect that correction.
- Technical sections expand the published descriptions and visible workflows
  with engineering explanations. The provider platform documents Vue/Nuxt,
  Node.js, PostgreSQL/PostGIS, APIs, geospatial search, fuzzy matching, filtering,
  and ranking. The bookstore documents development and Paystack integration.
- Specific frameworks, databases, infrastructure, and third-party backend
  integrations remain unconfirmed for the other four projects. Their breakdowns
  discuss component structure, state relationships, navigation, form handling,
  and service boundaries without attributing an unverified stack. Form and
  messaging service requirements are architectural explanations, not claims of
  a verified production implementation. No invented revenue, conversion,
  performance metrics, or compliance certifications are included.
- Client Words contains short verbatim excerpts of the visible Upwork reviews;
  full feedback is linked on Upwork. Reviewer names are not invented.
- Contact opens the Upwork profile. No email, GitHub, LinkedIn, or availability
  status is guessed.
- "Client Words" replaces the reference’s "Writing" section, since the source
  profile supplies reviews and no authored articles.
