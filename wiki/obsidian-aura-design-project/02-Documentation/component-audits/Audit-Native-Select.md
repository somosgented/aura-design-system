---
title: Audit Native Select
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Pass on the docs site. Chrome comes from `select:not(.default)` in `apps/www/styles/main.css`: 52px height, 26px horizontal padding, appearance none, and a 1px border. The chevron is a Radix icon.

## Findings
- Pass. `NativeSelect.tsx` adds `pe-4` so text clears the icon at `end-1`. Icon is `className="icon"` and `aria-hidden`. The demo sets `aria-label="Meal"`. Font size stays on the 17px floor because `select` is included in that rule.
- Note. The component file itself does not repeat border, height, or background. A paste that drops `styles/main.css` loses the field chrome the page promises. The chevron would still render.

## Context
- Related: [[Recent-Components-Audit]] [[Shadcn-gaps]]
- Implementation Path: `packages/registry/registry/default/components/ui/NativeSelect.tsx`
- Docs page: `apps/www/content/docs/components/native-select.mdx`
