---
title: Internal progress
date: 2026-09-28
tags: [dev-log, agents]
---
## Summary
Docs search no longer lists each component twice. The `/docs/components` catalog headings that copy component titles and descriptions are left out of the index, and `SearchDialog` renders `<mark>` highlights instead of showing the tags as text.

## Context
- Related: [[Docs search]] · [[API routes]]
- Implementation Path: `apps/www/utils/search-index.ts`
- Next: Review the draft PR against `canary`.
