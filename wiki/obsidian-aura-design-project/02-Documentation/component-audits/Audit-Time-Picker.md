---
title: Audit Time Picker
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Pass. The dial is focusable, marks sit apart on a larger ring, the text field keeps its width, and AM/PM exposes `aria-pressed`.

## Findings
- Fixed. `TimePicker.tsx` puts `onKeyDown` on `role="group"` with no `tabIndex`. Hour and minute buttons do not handle arrows themselves.
- Fixed. Marks are `size-3` (39px) on a `size-16` (208px) dial at 38% radius. Center spacing is about 41px, so the hit areas nearly touch. Minute labels are two digits.
- Fixed. The text field is `w-12` and still matches `input:not(.default)`, which forces width 100% and 26px padding. AM/PM is a button whose state is the label text, not `aria-pressed`.
- Pass. The field label is visible. Dial buttons expose `aria-pressed` and `aria-label`. Focus rings use `ring-accent-8`. Colors stay on gray and accent steps.

## Context
- Related: [[Recent-Components-Audit]]
- Implementation Path: `packages/registry/registry/default/components/ui/TimePicker.tsx`
- Docs page: `apps/www/content/docs/components/time-picker.mdx`
