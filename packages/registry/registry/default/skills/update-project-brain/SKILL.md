---
name: update-project-brain
description: >-
  Persist Project Brain notes in wiki/obsidian-*, sync Bruno API parity, and
  update Internal-Progress.md after architectural decisions, complex fixes,
  API changes, or session advances. Use when documentation must be written or
  Internal Progress needs a session entry.
---

# Update Project Brain

Guardrails (when / where / note shape) live in `.cursor/rules/self-documenting-system.mdc`. This skill is the write loop.

## Paths

Resolve the vault from the blueprint wiki:

* Vault: `wiki/obsidian-*/` (this monorepo: `wiki/obsidian-aura-design-project/`)
* Bruno: `wiki/bruno-*/` (this monorepo: `wiki/bruno-aura-design-project/`)
* Progress: `<vault>/00-General/Internal-Progress.md`
* Layout authority: `Bootstrap.md` and `Welcome.md`

Consumer apps derive `{suffix}` from `package.json` `name` (first segment stripped) → `wiki/obsidian-{suffix}/`.

## When to run

Run immediately after any of these.

1. Architectural decision or non-obvious logic.
2. Bug fix that took more than two iterations.
3. Change under `app/api/**` (or route contract change).
4. End of a work unit or session (always touch Internal Progress).

## Create or update an Obsidian note

1. Pick the folder: `00-General`, `01-Identity`, `02-Documentation`, or `03-Configuración`.
2. Prefer updating an existing note over a new file when the topic already exists. Search the vault first.
3. New notes use this frontmatter and body shape:

```yaml
---
title: [Short Descriptive Title]
date: YYYY-MM-DD
tags: [dev-log, logic, architecture]
---
## Summary
[3–4 sentences max. Why + what changed.]

## Context
- Related: [[OtherNote]]
- Implementation Path: `path/to/file`
```

4. Use `[[wikilinks]]`. Cite code with paths like `` `app/api/...` ``. Env **names** only. No secrets.
5. For API work, open the matching Bruno request under `wiki/bruno-*/`, align method/URL/examples with `APP_URL`, and leave auth as comments per `AI-PROMPT.md`.

## Update Internal Progress (session end — always)

1. In `00-General/Internal-Progress.md`, add ONE entry at the top of `## Sessions` (closed shape: Summary, Active, Sessions, Context):

       ### 2026-10-10 · Short title of the advance
       - What changed and why (≤5 bullets, ≤120 words). Link the topic note: [[Aura Agent Surface]].

2. Edit `## Active` only if open work changed: add `- [ ] … (since YYYY-MM-DD)`,
   or tick `- [x]` what you finished. Never write open work inside a session entry.
3. Rewrite `## Summary` only if the project's current state changed (≤4 sentences).
4. If the project has `pnpm brain:progress`, run it. It trims and archives for you. Do not delete sessions by hand.
5. If it prints `PROMOTE`, the evicted entry had no [[wikilink]]; move its durable fact into a
   topic note (or Summary), then re-run. Archive already holds the verbatim text.

## Done when

* [ ] The advance has a note (new or updated) under the vault.
* [ ] API changes have Bruno parity when `app/api/**` moved.
* [ ] `Internal-Progress.md` has one new Sessions entry. `pnpm brain:progress` exits 0 when present.
* [ ] No secrets landed in markdown.
