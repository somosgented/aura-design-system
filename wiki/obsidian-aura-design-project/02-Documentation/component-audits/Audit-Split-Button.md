---
title: Audit Split Button
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Pass. The menu half uses the `splitMenu` variant. Padding and the square width live on `.button-split-menu`, not on a call-site restyle.

## Findings
- Fixed. `SplitButtonMenu` in `SplitButton.tsx` sets `className="w-4 rounded-none border-l border-accent-a7 px-0"` on `Button`. `SplitButtonAction` sets `rounded-r-none`.
- Pass. The menu trigger has `aria-label` defaulting to "More actions". The chevron is Radix with `className="icon"` and no icon margin. The group is `role="group"`.

## Context
- Related: [[Recent-Components-Audit]]
- Implementation Path: `packages/registry/registry/default/components/ui/SplitButton.tsx`
- Docs page: `apps/www/content/docs/components/split-button.mdx`
