---
feature: Docs site
status: shipped
area: www
routes: [/docs, /llms.txt, /llms-full.txt, /api/search, /r]
components: [apps/www/app/, apps/www/content/docs/, apps/www/components/]
pr: https://github.com/somosgented/aura-design-system/pull/163
updated: 2026-10-25
---
The public docs and marketing site at auradesignsystem.com: Next.js and Fumadocs, MDX under `apps/www/content/docs/`. It also hosts the built registry under `/r` and LLM text exports for agents. The header Theme control is an icon-only button named Theme. It opens a side sheet that edits accent and gray; the canvas is derived from the gray seed. The sidebar keeps a separate light and dark toggle.
