---
title: Audit Phone Input
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Pass. Options name the country and the code. The select and the tel field opt out of the legacy field metrics and sit side by side.

## Findings
- Fixed. `callingCodes` is `+1`, `+34`, `+44`, `+52`, `+81` only. The select `aria-label` is "Calling code" and the visible option text is the code.
- Fixed. Both elements match `input:not(.default)` or `select:not(.default)`, which force width 100% and a 52px height. The component also sets its own `border-gray-7` and `px-1`. The two style sources fight. The global 17px floor does apply, which is correct.
- Pass. The tel field has `htmlFor`, `type="tel"`, `autoComplete="tel-national"`, and the demo placeholder `555 0100`. Focus ring is `ring-accent-8`.

## Context
- Related: [[Recent-Components-Audit]] [[Input-Controls]]
- Implementation Path: `packages/registry/registry/default/components/ui/PhoneInput.tsx`
- Docs page: `apps/www/content/docs/components/phone-input.mdx`
