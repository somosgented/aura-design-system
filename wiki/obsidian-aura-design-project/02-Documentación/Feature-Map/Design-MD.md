---
feature: DESIGN.md
status: shipped
area: design-md
routes: [/, /DESIGN.md, /designs/<slug>/, /designs/<slug>/DESIGN.md, /designs/<slug>/theme.css, /result.html]
components: [DESIGN.md, packages/design-md/DESIGN.md, packages/design-md/index.html, packages/design-md/detail.html, packages/design-md/result.html, packages/design-md/designs/, packages/design-md/scripts/generate-designs.ts, packages/registry/scripts/sync-design-md.ts, .agents/rules/design-md.mdc, .agents/skills/generate-design-md/, apps/www/content/docs/rules/design-md-flavors.mdx]
pr: https://github.com/somosgented/aura-design-system/pull/152
updated: 2026-11-07
---
The narrative design spec that agents and people follow for tokens, type, spacing, motion, and product voice. The registry distributes it to consumer repos.

`packages/design-md` publishes it with a gallery of design flavors. Each flavor is a DESIGN.md that adapts Aura to a new look (color seeds, type, radius, voice) and ships a generated `theme.css`. The gallery shows each flavor as an Aura app preview in light and dark, with a Copy link button. Each flavor has a full-screen detail page with a nav bar and side sheets (Apply, DESIGN.md, Tokens) over its own result page, which keeps the same sections but uses that flavor's composition and signature elements (an Aura app built from the registry `main.css` plus the flavor's `theme.css`), the rendered DESIGN.md and its token scales. It ships as a Cloud Run container (nginx). In an Aura project, the agent gets the link, saves the flavor as `DESIGN.theme.md`, appends `theme.css` to `globals.css`, and restyles with Aura components. Sharpmint is the first flavor. The old static light and dark previews are gone.

The `generate-design-md` skill creates new flavors from a pasted DESIGN.md, a site, a screenshot or a brief. In this repo it adds the flavor to the gallery with its `theme.css` and showcase; in a consumer app it writes `DESIGN.theme.md` and the generated theme blocks. It ships as `@aura/skill-generate-design-md` and in `@aura/skills`, is linked from the Aura skill, and is documented on the DESIGN.md flavors docs page.
