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

## blueprint on any stack

`blueprint` runs in any repo, with or without a `package.json`. It always writes the agent rules and the Obsidian feature map. By detected stack it adds Sonar where SonarQube can scan the language (`scripts/sonar.sh` outside Node), a Bruno collection for backends, image generation for frontends, and the Node and React tooling for JavaScript projects. Override detection with `--stack`, `--with`, and `--without`.

```bash
npx @aura-design/cli@latest blueprint . --stack python --without bruno
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

## Agent files

`blueprint` writes skills and rules under `.agents/`, the one home for every agent, and a managed block in the root `AGENTS.md` (plus a `CLAUDE.md` that imports it) that points agents there. A legacy `.cursor/rules` or `.cursor/skills` symlink is removed. Real `.cursor/rules` and `.cursor/skills` directories are moved into `.agents/`. An identical duplicate is dropped, and a differing one is kept with a warning.

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
