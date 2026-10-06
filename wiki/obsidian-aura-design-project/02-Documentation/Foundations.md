---
title: Foundations docs
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
The docs site has a Foundations section written from Aura tokens and rules in `DESIGN.md`, registry CSS, Stylus, and the Cursor rules. Data visualization records the area-chart series tokens. Figma, international design, and voice and tone are stubs because the repo does not define them. Depth and elevation is its own page because Aura specifies it in `DESIGN.md` §6.

## Context
- Related: [[Design md]] [[Site and docs app]] [[Styled system]] [[Internal progress]]
- Implementation Path: `apps/www/content/docs/foundations/`, `apps/www/content/docs/meta.json`

## Why this shape
Navigation matches handbook pages: explicit slugs under a `---Foundations---` separator in the root docs `meta.json`, not a second nav system. Content stays in Aura’s voice and cites source files. Missing categories are short “not defined yet” pages so the gaps stay visible in the docs.
