---
title: Foundations docs
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
The docs site has a Foundations section modeled on the thirteen categories at designsystems.surf’s Apple entry. Each page quotes Aura tokens and rules from `DESIGN.md`, registry CSS, Stylus, and the Cursor rules. Data visualization, Figma, international design, and voice and tone are stubs because the repo does not define them. Depth and elevation is an extra page: the reference folds it into layout, and Aura specifies it in `DESIGN.md` §6.

## Context
- Related: [[Design md]] [[Site and docs app]] [[Styled system]] [[Internal progress]]
- Implementation Path: `apps/www/content/docs/foundations/`, `apps/www/content/docs/meta.json`

## Why this shape
Navigation matches handbook pages: explicit slugs under a `---Foundations---` separator in the root docs `meta.json`, not a second nav system. Content stays in Aura’s voice and cites source files. Missing categories are short “not defined yet” pages so the index still mirrors the reference and the gaps stay visible in the docs.
