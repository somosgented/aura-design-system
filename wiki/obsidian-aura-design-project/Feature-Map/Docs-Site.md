---
feature: Docs site
status: shipped
area: www
routes: [/, /docs, /docs/installation, /llms.txt, /llms-full.txt, /api/search, /r]
components: [apps/www/app/(home)/page.tsx, apps/www/components/HeroSection.tsx, apps/www/components/HomeAgentic.tsx, apps/www/components/AuraAesthetic.tsx, apps/www/content/docs/index.mdx, apps/www/content/docs/installation.mdx, apps/www/utils/site.ts]
pr: https://github.com/somosgented/aura-design-system/pull/172
updated: 2026-10-25
---
The public site presents Aura as an agentic design system: one source of truth for people and coding agents. The homepage states that, then routes each job to the CLI, foundations, rules, a skill, or a registry component. Get started at `/docs` teaches the install, how an agent should start (`AGENTS.md`, `DESIGN.md`, rules, skills, CLI), and the spacing, color, type, icon, motion, and registry rules. `/docs/installation` stays the install reference.
