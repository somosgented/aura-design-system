---
feature: Docs site
status: shipped
area: www
routes: [/docs, /llms.txt, /llms-full.txt, /api/search, /r]
components: [apps/www/app/, apps/www/content/docs/, apps/www/components/]
pr: https://github.com/somosgented/aura-design-system/pull/166
updated: 2026-10-25
---
The public docs and marketing site at auradesignsystem.com: Next.js and Fumadocs, MDX under `apps/www/content/docs/`. It also hosts the built registry under `/r` and LLM text exports for agents. On the homepage palette panel, Reset and Download CSS stack full width with a gap below the small breakpoint, each with its own rounded corners; from `sm` up they stay a row beside the color fields. The header Theme control is an icon-only button named Theme that opens a side sheet for accent and gray.
