---
title: Shared theme store
date: 2026-10-10
tags: [dev-log, architecture]
---
## Summary
Accent, gray, background, and light/dark share one store for the docs site. `AuraThemeProvider` mounts once in the root layout, next-themes owns light/dark, and a boot script applies cached CSS variables before paint. Theme Settings and the home palette both read that store, including presets.

## Context
- Related: [[Theme-Colors-Crash-Fix]], [[Custom-Colors-Showcase]], [[Internal-Progress]]
- Implementation Path: `apps/www/hooks/use-aura-theme-colors.ts`, `apps/www/components/theme/AuraThemeProvider.tsx`, `apps/www/lib/aura-theme-boot.ts`, `apps/www/components/theme/presets.ts`
- Registry copy: `packages/registry/registry/default/hooks/use-aura-theme-colors.ts`
