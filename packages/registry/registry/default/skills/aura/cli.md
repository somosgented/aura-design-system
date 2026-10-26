# Aura CLI

Run commands with the project package runner. This repo uses pnpm.

```bash
pnpm dlx @aura-design/cli@latest init
pnpm dlx @aura-design/cli@latest setup
pnpm dlx @aura-design/cli@latest blueprint
```

`init` scaffolds a Next.js app, Aura tokens, and the blueprint. `setup` applies Aura to an existing Next.js app. `blueprint` writes the feature map, the always-on process rules, and the forms stack under `.agents/`.

Registry items:

```bash
pnpm dlx shadcn@latest add @aura/skill-aura
pnpm dlx shadcn@latest add @aura/rules @aura/skills @aura/rule-design-md
```

`@aura/skill-aura` installs this directory to `.agents/skills/aura/`. `@aura/rules` installs the always-on process rules to `.agents/rules/`. `@aura/skills` installs procedure skills to `.agents/skills/`.

Consumers can also install this skill, once the repo is the source the skills CLI reads, with:

```bash
pnpm dlx skills add somosgented/aura-design-system --skill aura
```

Token commands (`colors`, `spacing`, `typography`) write theme output. Read `DESIGN.md` before changing a scale by hand. Do not invent flags that are not in the command `--help`.
