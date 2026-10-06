---
title: Audit Spinner
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Pass. A Radix symbol with `className="icon"`, `animate-spin`, and `motion-reduce:animate-none`. The demo passes `label="Loading"`, which becomes sr-only and `role="status"`.

## Findings
- Pass. `Spinner.tsx` hides the glyph with `aria-hidden` and puts the name in `<span className="sr-only">`.
- Note. Calling `Spinner` without `label` leaves no accessible name. The docs demo does pass one.

## Context
- Related: [[Recent-Components-Audit]] [[Shadcn-gaps]]
- Implementation Path: `packages/registry/registry/default/components/ui/Spinner.tsx`
- Docs page: `apps/www/content/docs/components/spinner.mdx`
