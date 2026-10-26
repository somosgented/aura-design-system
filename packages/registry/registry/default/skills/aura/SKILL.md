---
name: aura
description: Applies the Aura Design System when building or editing UI, tokens, theme, forms, icons, motion, spacing, or Tailwind classes. Use for the 12-step accent and gray scales, the 13px spacing grid, fluid clamp typography, the 17px form-control floor, Radix icons with className="icon", @shadcn/lint, and Aura component composition. Triggers on Aura, DESIGN.md, aura init, aura setup, aura blueprint, @aura registry items, and any task that styles product UI with Aura tokens. Aura Keep invariants win over the upstream shadcn skill.
user-invocable: true
---

# Aura

A registry-first design system. Components are copied into the app and updated with the Aura CLI and the `@aura` shadcn registry. Narrative tokens live in root `DESIGN.md`. Monorepo policy lives in root `AGENTS.md`. This skill is the design guardrail agents load when the task is UI.

Always-on process rules stay outside this skill, in `.agents/rules/` (`feature-map`, `no-comments`, `design-md`, and in this monorepo `agents-md`). Cursor loads those through the `.cursor/rules` symlink. Do not fold them into this folder.

## Principles

1. **Tokens before one-off values.** Accent and gray steps, semantic roles, and the 13px grid. Detail in `DESIGN.md`.
2. **Compose Aura components.** Use variants and sizes. `className` is for layout and width.
3. **Keep type fluid and controls readable.** Primary copy uses the clamp scale. Editable controls stay at least 17px.
4. **Leave the user in control.** Accessible, consistent, reversible, and familiar. See [principles.md](./rules/principles.md).
5. **Aura wins over shadcn defaults.** When this skill conflicts with `.agents/skills/shadcn`, follow the table in [surface.md](./rules/surface.md).

## Critical Rules

These rules are **always enforced** for Aura UI. Each file has Incorrect/Correct pairs.

### Color → [colors.md](./rules/colors.md)

- **12-step `--accent-*` and `--gray-*`.** Plus alpha `--accent-a*` / `--gray-a*`. Prefer semantic tokens when they exist.
- **Roles by step.** 1–2 backgrounds, 3–5 interactive fills, 6–8 borders and focus, 9–10 solid brand, 11–12 text.
- **Steps 11–12 stay APCA Lc 60 / Lc 90** on step 2 backgrounds.
- **No raw palette or one-off hex** as the production source of truth.

### Typography → [typography.md](./rules/typography.md)

- **Primary copy uses the fluid scale.** `h1`–`h6`, `.h1`–`.h6`, `p`, `.p` — `clamp(var(--min), var(--val), var(--max))`.
- **No `text-xl` / `text-2xl` / `text-4xl` on primary copy.**
- **`text-sm` / `text-xs` are utility and meta only.** Never on `input`, `textarea`, or `select`.
- **Editable controls stay ≥ 17px.**

### Spacing → [spacing.md](./rules/spacing.md)

- **`--spacing` is 13px.** `p-4` is 52px. Only 0.5-unit increments.
- **About 20px is `1.5` (19.5px).** Not `2` (26px).
- **No arbitrary pixel spacing** (`p-[16px]`) unless the human explicitly asks.

### Icons → [icons.md](./rules/icons.md)

- **`@radix-ui/react-icons` and `className="icon"`.** No `size`, `width`, or `height` props.
- **Gap owns the space.** No horizontal margin on an icon. `Button` and `Badge` already own gap.

### Motion → [motion.md](./rules/motion.md)

- **`transform` and `opacity` only.** Honor `prefers-reduced-motion`.
- **CSS theme tokens.** No decorative autoplay.

### Forms → [forms.md](./rules/forms.md)

- **`useFormDynamic` + `Form` + `validateFormData` (ajv).** Do not add zod, yup, or valibot.
- **One shared JSON Schema.** The server action checks authz, then re-validates with that schema.
- **Procedure:** skill `aura-forms`.

### Lint → [lint.md](./rules/lint.md)

- **After UI edits, run `pnpm lint`.** Clear `@shadcn/lint` findings you introduced.
- **Fix loop:** skill `verify-aura-ui`.

### Ownership → [surface.md](./rules/surface.md)

- **`DESIGN.md` is the narrative spec.** This skill is the design guardrail. `.agents/rules/*` is process policy.
- **Do not vendor** the shadcn or gdp-ts skills into the Aura registry.

## Key Patterns

```tsx
<section className="flex flex-col gap-2 bg-gray-2 text-gray-12">
  <h2 className="h2">Section</h2>
  <p className="p">Body copy uses the fluid scale.</p>
  <Button>
    <MagnifyingGlassIcon className="icon" />
    Search
  </Button>
</section>

<div className="p-[16px] text-pink-500">Panel</div>
<Button className="bg-accent-9 px-4">
  <MagnifyingGlassIcon className="mr-2 size-4" />
  Search
</Button>
```

The first block is the pattern: gray step 2 surface, fluid heading, `gap-2` (26px), icon class `icon` inside `Button`. The last two blocks fail: arbitrary spacing, raw color, restyled button, icon margin.

## Workflow

1. **Read `DESIGN.md`** when the task touches tokens, theme, type, spacing, or motion. Do not copy its tables into this skill.
2. **Check installed Aura components** before writing new UI. Add from the registry with the project package runner. See [cli.md](./cli.md).
3. **Apply the Critical Rules** while editing. Map shadcn examples onto Aura tokens ([customization.md](./customization.md)).
4. **Verify.** Run skill `verify-aura-ui` (`pnpm lint`) and clear findings on files you touched.
5. **Monorepo only.** Follow root `AGENTS.md`. At PR time, run skill `update-feature-map`. Do not write progress logs.

## Where to go next

| Task | Open |
| --- | --- |
| Token narrative | `DESIGN.md` |
| Monorepo scope, public APIs, stories | `AGENTS.md` |
| CLI commands | [cli.md](./cli.md) |
| Theming without new hex values | [customization.md](./customization.md) |
| shadcn CLI, registries, presets | skill `shadcn` — Aura Keep still wins |
| Forms end to end | skill `aura-forms` |
| Port a component | skill `port-component-to-aura` |
| Feature-map note | skill `update-feature-map` |
