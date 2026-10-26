# Ownership

`DESIGN.md` is the narrative spec. This skill is the design guardrail agents load for UI work. Process policy stays always-on so it is present even when this skill is not.

| Layer | Owns | Does not own |
| --- | --- | --- |
| `DESIGN.md` | Narrative design (tokens, theme, product voice) | Step-by-step procedures |
| `.agents/skills/aura/` | Design guardrails and Incorrect/Correct pairs | Feature-map writes, comment policy, install recipes |
| `.agents/rules/*` | Always-on process rules: `feature-map`, `no-comments`, `design-md`, monorepo `agents-md` | Color, type, spacing, icons, motion, forms, lint |
| Other skills | Procedures (`aura-forms`, `verify-aura-ui`, `port-component-to-aura`, `update-feature-map`, `generate-brand-images`, upstream `shadcn`) | A second design policy |

Cursor loads `.agents/rules/*.mdc` through the `.cursor/rules` → `../.agents/rules` symlink. The `rules/*.md` files in this skill are references linked from `SKILL.md`, same as the shadcn skill. They are not a second copy of the always-on rules.

## Keep

Do not weaken these when editing the skill or a component.

- 12-step chromatic scale (`--accent-*`, `--gray-*`) with APCA contrast roles for steps 11–12 on step 2.
- Fluid typography via `clamp()` and a global **≥ 17px** floor on editable form controls.
- Strict **13px** spacing base (`unit * 13px`).
- Icons use `className="icon"` only. No horizontal icon margins inside gap-owning controls.
- The only project documentation is the feature map in `wiki/obsidian-{suffix}/Feature-Map/`, updated inside the PR that changes a feature. See `.agents/rules/feature-map.mdc`.
- No code comments except external constraints (with the reason), directives, licenses, and generated code. See `.agents/rules/no-comments.mdc`.

## Upstream shadcn skill

Installed with `pnpm dlx skills add shadcn/ui` into `.agents/skills/shadcn`. Use it for the shadcn CLI, registry search, composition discovery, and presets.

When that skill conflicts with Aura Keep, **Aura wins**:

| Topic | Prefer Aura | Use the shadcn skill for |
| --- | --- | --- |
| Icons | `@radix-ui/react-icons` + `className="icon"`; no `ml-*` / `mr-*` on icons in `Button` / `Badge` | Component discovery. Ignore `data-icon` and Lucide defaults unless the installed component API requires them |
| Forms | `useFormDynamic` + `Form` / `FormField` + `validateFormData` (skill `aura-forms`), submitted to a server action that re-validates with the same shared schema. ajv via `validateFormData` / JSON Schema. Do not add zod, yup, or valibot | `FieldGroup` / `Field` only when the Aura form stack is absent |
| Spacing | 13px scale (`gap-0.5` = 6.5px, `gap-2` = 26px) | `gap-*` over `space-y-*` |
| Color | `--accent-*` / `--gray-*` and semantic tokens | No raw palette. Map shadcn semantics onto Aura tokens |
| Typography | Fluid `.h1`–`.p`. No `text-xl` on primary copy. Inputs ≥ 17px | Layout and `cn()` that do not fight the floor |
| Restyle | Variants and sizes. `@shadcn/lint` `no-restyle` | `className` for layout and width only |

**Incorrect:** a shadcn snippet copied with `data-icon`, `size-4`, and `bg-primary` left as a raw Tailwind semantic that was never mapped.

**Correct:** the same composition with `className="icon"`, Aura gap, and `bg-accent-9` or the semantic token `DESIGN.md` already maps.

Do not vendor the shadcn skill into `packages/registry` or `sync-skills.ts`. Blueprint installs shadcn and gdp-ts with `skills add`. Third-party UI, motion, and performance audits are not part of Aura. See `/docs/audits`.

## Routing

- Code comments and workarounds → `.agents/rules/no-comments.mdc`
- UI tokens → `DESIGN.md`, then this skill
- shadcn CLI, registries, presets → skill `shadcn`
- After UI edits → skill `verify-aura-ui`
- Opening or updating a PR → skill `update-feature-map`
- Porting external UI → skill `port-component-to-aura`
- Aura forms and server actions → skill `aura-forms` and [forms.md](./forms.md)
- Monorepo design-system edits → skills `aura-constraints` / `aura-verification` and root `AGENTS.md`
- Third-party audits → `/docs/audits`
