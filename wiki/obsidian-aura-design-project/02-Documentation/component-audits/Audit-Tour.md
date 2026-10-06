---
title: Audit Tour
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Pass. The card anchors under the active target with a caret. Arrow keys move the tour only while focus is inside it and not in a field.

## Findings
- Fixed. `Tour.tsx` highlights `TourTarget` with `ring-2 ring-accent-8` but the dialog is the next sibling in normal flow. `defaultOpen` on the demo shows the card below both targets.
- Fixed. The effect adds a window `keydown` listener for ArrowLeft, ArrowRight, and Escape. There is no focus guard. Escape does close, which is correct.
- Pass. Dialog has `role="dialog"`, a labelled title, Back/Next/Done buttons, and `text-gray-11` for the step count. Surfaces use `border-gray-6` and `bg-gray-1`.

## Context
- Related: [[Recent-Components-Audit]] [[Media-Utilities]]
- Implementation Path: `packages/registry/registry/default/components/ui/Tour.tsx`
- Docs page: `apps/www/content/docs/components/tour.mdx`
