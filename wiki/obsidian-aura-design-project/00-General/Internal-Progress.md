---
title: Internal progress
date: 2026-10-06
tags: [dev-log, logic]
---
## Summary
`aura blueprint` (and therefore `init` / `setup`) now installs gdp-ts: package, ESLint preset, Cursor skill, and starter proofs for a session, an org role, a project role, and a plan entitlement. `deleteProject` requires the session, project-role, and plan proofs. Public practice page is `/docs/gdp-ts`, audited from the agent blueprint as section F.

## Context
- Related: [[gdp-ts proofs]] [[CLI]] [[MCP and skills]] [[Cloud Run]]
- Implementation Path: `packages/cli/commands/gdp.ts`, `apps/www/content/docs/gdp-ts.mdx`
- Next: confirm a consumer `aura blueprint` on a real Next app, then keep strict mode off until that app no longer needs unrelated `as` casts.
