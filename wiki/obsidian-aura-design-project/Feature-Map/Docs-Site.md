---
feature: Docs site
status: shipped
area: www
routes: [/, /docs, /docs/foundations, /docs/installation, /llms.txt, /llms-full.txt, /api/search, /r]
components: [apps/www/app/(home)/page.tsx, apps/www/components/HeroSection.tsx, apps/www/components/HomeAgentic.tsx, apps/www/components/AuraAesthetic.tsx, apps/www/components/brand/BrandLockup.tsx, apps/www/components/theme/ThemeBootScript.tsx, apps/www/components/theme/AuraThemeProvider.tsx, apps/www/lib/aura-theme-boot.ts, apps/www/content/docs/index.mdx, apps/www/content/docs/foundations/index.mdx, apps/www/content/docs/installation.mdx, apps/www/content/docs/meta.json, apps/www/next.config.ts, apps/www/utils/site.ts]
pr: https://github.com/somosgented/aura-design-system/pull/182
updated: 2026-10-26
---
The public site presents Aura as an agentic design system: one source of truth for people and coding agents. The homepage keeps “With Aura, The Soul is Yours” on the muted title line, routes each job, lists the agent harness, and ends the palette on the live scales and a Component preview whose Box layer tree sits in its own card. Get started at `/docs` teaches the install and the harness: `DESIGN.md`, the Aura skill at `.agents/skills/aura/`, always-on process rules in `.agents/rules/`, procedure skills, Poteto mode, gdp-ts, the feature map, Gemini brand images, and optional Emil and Vercel audits. Foundations at `/docs/foundations` lists the specified pages. Former foundation rule URLs redirect to `/docs/rules/aura-skill`, and `/docs/foundations/figma`, `/docs/foundations/international`, and `/docs/foundations/voice` redirect to `/docs/foundations`.
