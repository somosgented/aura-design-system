---
title: Docs search
date: 2026-09-28
tags: [dev-log, logic, architecture]
---
## Summary
Docs search is Fumadocs advanced search (`zbsearch`) at `GET /api/search`. The components catalog (`/docs/components`) repeats every component title and description, so those headings are omitted from the index and dropped again when reading results. Real pages such as `/docs/components/button` stay. Match highlights arrive as `<mark>` in `content`; [[Site and docs app]] `SearchDialog` renders them as highlighted text.

## Context
- Related: [[API routes]] · [[Site and docs app]]
- Implementation Path: `apps/www/app/api/search/route.ts`, `apps/www/utils/search-index.ts`, `apps/www/components/SearchDialog.tsx`
