---
title: Media Utilities
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Tour, swap, cropper, compare slider, media player, and the frames-per-second meter sit beside hitbox, pending, presence, portal, client-only, and visually hidden in `packages/registry/registry/default/components/ui`. `composeEventHandlers` in `packages/registry/registry/default/utils/compose-refs.tsx` runs a second handler unless the first already prevented the default. The docs copy of that util is `apps/www/utils/compose-refs.tsx`.

## Context
- Related: [[Bootstrap]]
- Implementation Path: `packages/registry/registry/default/utils/compose-refs.tsx`
