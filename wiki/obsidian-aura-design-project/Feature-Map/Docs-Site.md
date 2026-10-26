---
feature: Docs site
status: shipped
area: www
routes: [/, /docs, /docs/installation, /llms.txt, /llms-full.txt, /api/search, /r]
components: [apps/www/app/(home)/page.tsx, apps/www/components/HeroSection.tsx, apps/www/components/HomeAgentic.tsx, apps/www/components/AuraAesthetic.tsx, apps/www/components/brand/BrandLockup.tsx, apps/www/content/docs/index.mdx, apps/www/content/docs/installation.mdx, apps/www/utils/site.ts]
pr: https://github.com/somosgented/aura-design-system/pull/172
updated: 2026-10-26
---
The public site presents Aura as an agentic design system: one source of truth for people and coding agents. The homepage states that, routes each job, and lists the agent harness. Get started at `/docs` teaches the install, how an agent should start, the harness (Aura files and skills, Poteto mode, gdp-ts, the feature map, Gemini brand images, and optional Emil and Vercel audits), and the spacing, color, type, icon, motion, and registry rules. The palette scales share one gray-a6 hairline, the preview shows Aura reinterpreting Radix UI (including the Sign up form at `/#sign-up`), and `/docs/installation` stays the install reference.
