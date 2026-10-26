---
feature: Docs site
status: shipped
area: www
routes: [/, /docs, /llms.txt, /llms-full.txt, /api/search, /r]
components: [apps/www/app/, apps/www/content/docs/, apps/www/components/AuraAesthetic.tsx, apps/www/components/brand/BrandLockup.tsx, apps/www/components/theme/ThemeBootScript.tsx, apps/www/components/theme/AuraThemeProvider.tsx, apps/www/lib/aura-theme-boot.ts]
pr: https://github.com/somosgented/aura-design-system/pull/173
updated: 2026-10-26
---
The public docs and marketing site at auradesignsystem.com: Next.js and Fumadocs, MDX under `apps/www/content/docs/`, plus the built registry under `/r` and LLM text exports. The header Theme button opens a side sheet for accent and gray; a head script paints the saved appearance before the first frame, a light/dark or preset change eases the color tokens, and the Aura mark repaints its tile, ring, and orb from those tokens. On the homepage palette panel, Reset and Download CSS stack full width below the small breakpoint and sit in a row from `sm` up, and the Accent and Gray scales share one gray-a6 hairline on every step. The component preview shows Aura reinterpreting Radix UI in the live palette, including a Sign up form at `/#sign-up` built from Aura Card, Field, Input, Button, and FieldSeparator.
