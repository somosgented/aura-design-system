---
title: SGD co-brand header
date: 2026-09-25
tags: [dev-log, logic, architecture]
---
## Summary
Docs and marketing headers use an Aura mark, a vertical divider, then “Made by” on the left of the full Somos Gente Digital logo (faces and wordmark). Aura home and somosgentedigital.com stay as separate links.

## Context
- Related: [[Site and docs app]] [[Foundations]] [[Vision]]
- Implementation Path: `apps/www/components/brand/BrandLockup.tsx`
- Logo: light mode uses `apps/www/public/brand/aura-mark-light.svg`, the white-tile icon (stroke `#E4DCFF`, dark-to-violet ring, white gap, violet disc). Dark mode uses `aura-mark-dark.svg`, the `#2B214D` tile (lavender ring, `#100B21` gap). Both files are the uploaded SVGs, not a recolor of `aura-mark.png`. `BrandLockup` paints both in one fixed box and shows the light file unless `html` has the `.dark` class from next-themes. The Somos Gente wordmark stays an inline trace of `apps/www/public/brand/sgd-logo-on-light.svg` with `currentColor`, so that half of the lockup inherits `gray-12` in light and dark. The faces-only mark stays in `public/brand/` for other uses. `public/favicon.ico`, `public/favicon.svg`, and `public/apple-touch-icon.png` are the dark tile (`aura-mark-dark.svg`, the same artwork as `aura-mark.png`) so the browser tab matches the header mark. Stories (`packages/registry/public`) and the design-md preview ship the same files.
- The wordmark lives inside the logo, so the header no longer swaps “SGD” and “Somos Gente Digital” as HTML text. The docs sidebar passes `compact` only to shorten that same logo so “Made by” stays on one line.
