# Sources and content decisions

Inspected on October 2, 2026.

## Design reference

https://www.reidhslaughter.com/#work

Reimplemented the visual layout in Nuxt and Tailwind: 25vw desktop sidebar with a
280px minimum, 30px sidebar horizontal padding, Inter typography, warm neutral
surfaces, 14px work grid spacing, 16:9.6 project cards, blurred image backdrops,
caption overlays, gentle image rotation, and a 900px stacked-layout breakpoint.
Reid’s identity, imagery, text, metrics, and contact details are not included.

## Profile and project sources

- Profile: https://www.upwork.com/freelancers/~01e4ba09ea64b47de5
- Healthcare SaaS: https://www.upwork.com/freelancers/~01e4ba09ea64b47de5?p=2063995163748773888
- Provider platform: https://www.upwork.com/freelancers/~01e4ba09ea64b47de5?p=1958359103121174528
- Figma designs: https://www.upwork.com/freelancers/~01e4ba09ea64b47de5?p=2059409978865201152
- Amyntor Cloud: https://www.upwork.com/freelancers/~01e4ba09ea64b47de5?p=1935024049678000128
- Windsor Education: https://www.upwork.com/freelancers/~01e4ba09ea64b47de5?p=1622877509182799872
- Bookstore: https://www.upwork.com/freelancers/~01e4ba09ea64b47de5?p=1622883035002159104

All 38 project images come from the corresponding Upwork portfolio galleries.
They are stored locally as WebP images, at up to 2400px wide, with their original
aspect ratios preserved. Original asset URLs and dimensions are recorded in
`app/data/images.json`. Temporary authenticated download URLs are not committed.

## Editorial choices

- Project titles are lightly edited for readability. "Figma" is described as
  healthcare interface work based on its screenshots; no outcome or client
  engagement beyond the published project is asserted.
- Dates are Upwork publication dates, not inferred completion dates.
- The profile reports more than eight years of experience. The public profile
  showed 100% Job Success, 4.9 rating, and 23 jobs. These are dated snapshots and
  are not automatically refreshed.
- Descriptions are paraphrased from the published project descriptions. No
  invented revenue, conversion, or performance metrics are included.
- Client Words contains short verbatim excerpts of the visible Upwork reviews;
  full feedback is linked on Upwork. Reviewer names are not invented.
- Contact opens the Upwork profile. No email, GitHub, LinkedIn, or availability
  status is guessed.
- "Client Words" replaces the reference’s "Writing" section, since the source
  profile supplies reviews and no authored articles.
