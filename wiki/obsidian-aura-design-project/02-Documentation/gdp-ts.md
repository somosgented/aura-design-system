---
title: gdp-ts proofs
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Aura bootstraps [gdp-ts](https://github.com/rauchg/gdp-ts) from `aura blueprint`, which `init` and `setup` already call. The CLI installs `@gdp-ts/core`, spreads `@gdp-ts/core/lint/eslint`, runs `npx skills add rauchg/gdp-ts` for Cursor, and writes starter proofs. Sensitive calls such as `deleteProject` require a session proof, a project-role proof, and a plan-entitlement proof. Proofs are never cast. CI is typecheck plus lint.

## Context
- Related: [[CLI]] [[MCP and skills]] [[Internal progress]]
- Implementation Path: `packages/cli/commands/gdp.ts`, `packages/cli/templates/gdp/`, `apps/www/content/docs/gdp-ts.mdx`

## Why this shape
There is no separate starter package. Blueprint is the starter, and init delegates to it, same as the image skill. The skill is not copied into the registry; the skills CLI installs it to `.agents/skills/gdp-ts/`. `name()` accepts at most three values, so the sample handler names session, user, and project. The org-role module is the same pattern for an org-scoped call.

## Upstream vs the short brief
The npm package is `@gdp-ts/core` (0.1.0). Proofs are minted only by a private `defineProof().prove()`, not by annotating a phantom the caller constructs. The linter blocks `as` to `Named`, `Proof`, or any type imported from `proofs/`, plus exporting a prover and calling `defineProof` outside `proofs/`. Strict mode, which also bans every `as` and `any`, stays off so existing Next apps keep compiling. Oxlint is supported upstream; Aura wires ESLint because that is what `create-next-app` generates.
