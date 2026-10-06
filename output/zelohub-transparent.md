# Zelohub transparent export

`zelohub-transparent.png` was produced with the built-in image generation tool
from the user’s attached portfolio screenshot. It has an RGBA alpha channel.
The original website images are preserved: this is a separate downloadable
export, not a replacement for an image in `public/images`.

The generated export changes some fine interface lettering and leaves a halo
around the floating title/date. It should not be treated as a pixel-identical
foreground extraction.

## Final prompt

Perform a precise background-extraction edit of the supplied image. Make an alpha-only cutout: preserve the original foreground RGB pixels and original framing as closely as possible, with no relighting, redrawing, text correction, or restyling. Keep the complete black tablet bezel and EVERYTHING inside that bezel opaque and unchanged, including the original gray lighting at the top, pale blue interface backgrounds, all UI text, illustrations, avatars, panels, and icons. Also preserve the separate white title at top left, the white date at top right, and the two existing dark buttons at bottom left and bottom right. Remove the gray/white mat and blurred background outside these foreground elements to actual transparency. Cut out the title and date around their letter shapes; DO NOT add any background pills, boxes, banners, or outlines behind either the title or date. Preserve the existing buttons exactly. Do not crop any foreground object. Clean smooth antialiased edges. No other modifications.
