# @aura-design/cli

Aura Design System CLI (`aura`). Bootstraps Next.js apps with Aura registries and tokens, regenerates theme CSS, migrates Tailwind spacing to the 13px scale, and scaffolds the Obsidian feature map, image, and Sonar tooling, the Aura forms rule, skill, and components, plus gdp-ts proof-carrying authz.

## Usage

```bash
pnpm dlx @aura-design/cli@latest init
pnpm dlx @aura-design/cli@latest setup
pnpm dlx @aura-design/cli@latest link
pnpm dlx @aura-design/cli@latest blueprint
pnpm dlx @aura-design/cli@latest colors --accent "#f84657" --gray "#8c7375"
pnpm dlx @aura-design/cli@latest typography generate
pnpm dlx @aura-design/cli@latest spacing
```

## colors

`--accent` and `--gray` are the seeds. `--background` is an optional light canvas. The dark canvas is derived from the gray seed.

When `--accent` or `--gray` is omitted, the command prompts for the missing seed. It does not prompt for a background.

The command prints a WCAG report. When the report contains a `fail` line, the command exits 1 and does not write `globals.css`. When the report contains a `warn` line and no `fail` line, the command still writes the file.

`:root:not(.light)` inside `@media (prefers-color-scheme: dark)` and `.dark` set the same custom properties.

```bash
pnpm dlx @aura-design/cli@latest colors --accent "#f84657" --gray "#8c7375"
pnpm dlx @aura-design/cli@latest colors --accent "#4015ca" --gray "#7254cb"
```

## Third-party audits

Emil Kowalski’s skills, Vercel’s `vercel-react-best-practices`, and WorkOS’s `workos` skill are not part of Aura. Install them from upstream when you want an audit. Blueprint removes the Emil and Vercel folders older versions copied into `.cursor/skills/` and `.agents/skills/`. See [auradesignsystem.com/docs/audits](https://auradesignsystem.com/docs/audits).

## Documentation

- Public docs: [auradesignsystem.com/docs/cli](https://auradesignsystem.com/docs/cli)
- Source: `packages/cli` in [aura-design-system](https://github.com/somosgented/aura-design-system)

## Develop

```bash
pnpm --filter @aura-design/cli build
```

`build` compiles TypeScript and copies `templates/` into `dist/templates/`.
