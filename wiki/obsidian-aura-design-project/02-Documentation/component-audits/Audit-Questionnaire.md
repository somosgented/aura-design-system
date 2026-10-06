---
title: Audit Questionnaire
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Pass. The question title keeps `h2` and uses the `.h6` scale. Computed size on the docs page is 21.25px.

## Findings
- Fixed. `Question` in `Questionnaire.tsx` renders `<h2 id={titleId}>`. The type scale sets h2 from about 1.59rem to 2.44rem. A step title is not the page title.
- Pass. Progress is `text-sm text-gray-11` ("Question N of M"), which is utility text. Actions are `Button` and `Button` `variant="pill"`. Stepper gap on the root is `gap-2` (26px), which is on the grid. The demo inputs have `aria-label`.

## Context
- Related: [[Recent-Components-Audit]] [[Shadcn-gaps]]
- Implementation Path: `packages/registry/registry/default/components/ui/Questionnaire.tsx`
- Docs page: `apps/www/content/docs/components/questionnaire.mdx`
