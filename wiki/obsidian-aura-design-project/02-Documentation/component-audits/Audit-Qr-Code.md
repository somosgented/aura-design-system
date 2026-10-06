---
title: Audit Qr Code
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Pass. Modules are gray-12 on gray-1 at `size-16` (208px), with an accessible name. Overflow past 17 bytes is a sentence, not a broken image.

## Findings
- Pass. `QrCode.tsx` uses `role="img"`, `aria-label`, `fill-gray-1`, and `fill-gray-12`. The SVG is the code itself.
- Pass. The failure state is `text-gray-11`: "This code holds {MAX_BYTES} bytes." Quiet zone is 4 modules in the viewBox, not an arbitrary CSS length.

## Context
- Related: [[Recent-Components-Audit]] [[Collection-Display]]
- Implementation Path: `packages/registry/registry/default/components/ui/QrCode.tsx`
- Docs page: `apps/www/content/docs/components/qr-code.mdx`
