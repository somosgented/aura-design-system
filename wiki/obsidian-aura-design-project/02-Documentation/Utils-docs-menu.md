---
title: Utils docs menu
date: 2026-10-06
tags: [dev-log, architecture, logic]
---
## Summary
Utility primitives (`client-only`, `direction`, `hitbox`, `pending`, `portal`, `presence`, `visually-hidden`, `visually-hidden-input`) are tagged `group: utils` in registry metadata and documented under `/docs/utils`, not mixed into the Components sidebar. `packages/registry/scripts/generate-docs.ts` writes those MDX files to `apps/www/content/docs/utils/`.

## Context
- Related: [[Media-Utilities]]
- Implementation Path: `apps/www/content/docs/meta.json`
