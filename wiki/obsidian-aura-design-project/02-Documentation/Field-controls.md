---
title: Field controls and questionnaire
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
`@aura/native-select` uses field-control variants for a 48px primary control and accent step 8 focus. `@aura/questionnaire` takes footer and progress labels as props and focuses the first field on each step.

## Context
- Related: [[Internal progress]]
- Implementation Path: `packages/registry/registry/default/utils/field-control-variants.ts`, `packages/registry/registry/default/components/ui/Questionnaire.tsx`

