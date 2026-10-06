---
title: Audit Color Picker
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Pass. The color input is 52px and the hex field is 156px. Legacy width and padding no longer cover them. The color input has a focus ring.

## Findings
- Fixed. `ColorPicker.tsx` sets the color input to `size-4` and the hex field to `w-12 px-1 py-0.5`. Unlayered `input:not(.default)` in `apps/www/styles/main.css` sets width 100%, height 52px, and padding 26px. Experience First: the picker and the field stop matching the classes in the snippet.
- Pass. Preset hex values are swatch data, painted with `style={{ backgroundColor }}` on `ColorSwatch`, not as Tailwind palette classes. The group is `aria-label="Preset colors"`. Focus ring on the text field is `ring-accent-8`.
- Note. The color input has no `focus-visible` ring of its own.

## Context
- Related: [[Recent-Components-Audit]] [[Input-Controls]]
- Implementation Path: `packages/registry/registry/default/components/ui/ColorPicker.tsx`
- Docs page: `apps/www/content/docs/components/color-picker.mdx`
