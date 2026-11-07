---
feature: Docs site
status: shipped
area: www
routes: [/, /docs, /docs/foundations, /docs/installation, /llms.txt, /llms-full.txt, /api/search, /r]
components: [apps/www/app/(home)/page.tsx, apps/www/components/HeroSection.tsx, apps/www/components/HomeAgentic.tsx, apps/www/components/home/HomeProductStage.tsx, apps/www/styles/home.css, apps/www/components/AuraAesthetic.tsx, apps/www/components/brand/BrandLockup.tsx, apps/www/components/theme/ThemeBootScript.tsx, apps/www/components/theme/AuraThemeProvider.tsx, apps/www/lib/aura-theme-boot.ts, apps/www/content/docs/index.mdx, apps/www/content/docs/foundations/index.mdx, apps/www/content/docs/installation.mdx, apps/www/content/docs/meta.json, apps/www/next.config.ts, apps/www/utils/site.ts]
pr: https://github.com/somosgented/aura-design-system/pull/190
updated: 2026-11-07
---
The public site presents Aura as an agentic design system: one source of truth for people and coding agents. The homepage headline reads “With Aura, the soul is yours.”, routes each job, and lists the agent harness. Home buttons carry no keyboard hints, CTAs stack full width on phones, and band gutters follow `p-2` / `md:p-3`. On a small screen the header includes the theme switcher, and footer Source links use an icon component. Get started at `/docs` teaches the install and the harness: `DESIGN.md`, the Aura skill, and process rules in `.agents/rules/`, which Cursor reads directly. Foundations at `/docs/foundations` lists the specified pages. Former foundation rule URLs redirect to `/docs/rules/aura-skill`, and `/docs/foundations/figma`, `/docs/foundations/international`, and `/docs/foundations/voice` redirect to `/docs/foundations`.
