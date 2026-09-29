---
title: Internal progress
date: 2026-09-28
tags: [dev-log, logic]
---
## Summary
Homepage (`/`) sections now use a wider horizontal inset (`px-2` / `md:px-3`), and the palette controls plus component preview panel use more internal padding so content is not tight against the docs sidebar.

## Context
- Related: [[Custom-Colors-Showcase]] [[Site and docs app]]
- Implementation Path: `apps/www/components/HeroSection.tsx`, `apps/www/components/HomeDocSection.tsx`, `apps/www/components/AuraAesthetic.tsx`
- Next: confirm the inset still feels right beside the docs sidebar on `/`.
