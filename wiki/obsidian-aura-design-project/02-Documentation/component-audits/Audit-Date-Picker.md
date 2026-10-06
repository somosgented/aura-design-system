---
title: Audit Date Picker
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Pass. Calendar day and weekday labels use `text-xs`. The `text-[0.8rem]` paste is gone from the page and the registry source.

## Findings
- Pass. `DatePicker.tsx` uses `Button` `variant="pill"`, visible placeholder "Pick a date", `CalendarIcon` with `className="icon"`, and `aria-label`. `sideOffset={13}` matches the grid. `className` on the button is width and justification.
- Fixed. `date-picker.mdx` lines 256 and 265 paste `text-[0.8rem]` for calendar day and weekday cells. `0.8rem` is about 13.6px at the 17px root. `shadcn/no-arbitrary-values` and the type scale both reject it.

## Context
- Related: [[Recent-Components-Audit]] [[Shadcn-gaps]]
- Implementation Path: `packages/registry/registry/default/components/ui/DatePicker.tsx`
- Docs page: `apps/www/content/docs/components/date-picker.mdx`
