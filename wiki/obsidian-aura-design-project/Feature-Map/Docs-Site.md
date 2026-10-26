---
feature: Docs site
status: shipped
area: www
routes: [/, /docs, /docs/installation, /llms.txt, /llms-full.txt, /api/search, /r]
components: [apps/www/app/(home)/page.tsx, apps/www/components/HeroSection.tsx, apps/www/components/HomeAgentic.tsx, apps/www/components/AuraAesthetic.tsx, apps/www/components/brand/BrandLockup.tsx, apps/www/components/theme/ThemeBootScript.tsx, apps/www/components/theme/AuraThemeProvider.tsx, apps/www/lib/aura-theme-boot.ts, apps/www/content/docs/index.mdx, apps/www/content/docs/installation.mdx, apps/www/utils/site.ts]
pr: https://github.com/somosgented/aura-design-system/pull/180
updated: 2026-10-26
---
The public site presents Aura as an agentic design system: one source of truth for people and coding agents. The homepage keeps “With Aura, The Soul is Yours” on the muted title line, routes each job, and lists the agent harness. Get started at `/docs` teaches the install, how an agent should start, and the harness: `DESIGN.md`, the Aura skill at `.agents/skills/aura/`, always-on process rules in `.agents/rules/`, procedure skills, Poteto mode, gdp-ts, the feature map, Gemini brand images, and optional Emil and Vercel audits. Former foundation rule URLs redirect to `/docs/rules/aura-skill`. The palette scales share one gray-a6 hairline, a head script paints the saved theme before the first frame, and the Component preview in `AuraAesthetic` places search, submit, the update alert, the layer list, and the sign-up form at `/#sign-up` on the page, while `/docs/installation` stays the install reference.
