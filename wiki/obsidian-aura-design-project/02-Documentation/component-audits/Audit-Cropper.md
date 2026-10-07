---
title: Audit Cropper
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Pass. The frame shows an image, a crop window, a corner resize handle, and a visible drag caption. Shift and the arrow keys resize.

## Findings
- Fixed. `Cropper.tsx` draws `bg-gray-3` plus a half-width `bg-accent-4` block. The crop region is a `role="slider"` box with `border-2 border-gray-12`. Only x/y move. Width and height stay at the initial 0.46 by 0.5.
- Fixed. `cursor-grab` is the only hint. Keyboard arrows move the box, which is good, but nothing on the page says that.
- Pass. Focus ring is `focus-visible:ring-2 focus-visible:ring-accent-8`. `aria-valuetext` reports across and down. Tokens stay on the accent and gray scales.

## Context
- Related: [[Recent-Components-Audit]] [[Media-Utilities]]
- Implementation Path: `packages/registry/registry/default/components/ui/Cropper.tsx`
- Docs page: `apps/www/content/docs/components/cropper.mdx`
