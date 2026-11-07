---
feature: CLI
status: shipped
area: cli
routes: []
components: [packages/cli/index.ts, packages/cli/commands/, packages/cli/utils/color-theme.ts, packages/cli/templates/, packages/cli/utils/stack.ts]
pr: https://github.com/somosgented/aura-design-system/pull/192
updated: 2026-11-07
---
`@aura-design/cli` (binary `aura`) runs `init`, `setup`, `link`, `blueprint`, `colors`, `spacing`, and `typography`. `init` and `setup` bootstrap Next.js apps with Aura registries and tokens, then run the blueprint. `aura blueprint` runs in any repo, detects the stack (Next, Node, Python, Go, JVM, .NET, PHP, Ruby, Rust, or generic), and always writes the agent rules and the feature map. It adds Sonar where SonarQube can scan the language, a Bruno collection on backends, brand images on frontends, and the Node and React tooling only for JavaScript projects. `--stack`, `--with`, and `--without` override the detection. `aura colors` takes an accent and a gray seed, writes `globals.css` with both `prefers-color-scheme` and `.dark`, and exits 1 without writing when a WCAG pair fails.
