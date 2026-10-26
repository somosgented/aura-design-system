# Lint

`@shadcn/lint` is the machine-checkable layer for Aura Tailwind policy. `DESIGN.md` and this skill say what to do. Lint says how to fix the file. Install, ESLint merge, and the post-UI fix loop live in skill `verify-aura-ui`.

## Contents

- After UI edits
- What the rules catch
- Call-site className

---

## After UI edits

Run the project `lint` script (`pnpm lint`) and clear `@shadcn/lint` findings you introduced. Prefer zero new `shadcn/no-restyle` and `shadcn/no-arbitrary-values` on touched files.

| Rule | Catches |
| --- | --- |
| `shadcn/no-arbitrary-values` | Values off the 13px scale |
| `shadcn/no-raw-colors` | Raw palette instead of tokens |
| `shadcn/no-restyle` | Restyling design-system components via `className` |
| `aura/no-icon-margin` | Horizontal margin on icons inside gap-owning controls |

---

## Call-site className

**Incorrect:**

```tsx
<Button className="bg-pink-500 px-[16px] text-sm">
  <MagnifyingGlassIcon className="icon mr-2" />
  Save
</Button>
<Input className="px-3 text-xs" />
```

**Correct:**

```tsx
<Button>
  <MagnifyingGlassIcon className="icon" />
  Save
</Button>
<Input className="w-full" />
```

Prefer theme tokens (`accent-*`, `gray-*`, semantic) and the 13px scale. Do not restyle a design-system component with padding, color, or typography via `className`. Use variants and sizes, or layout and width only.

`Input`, `Textarea`, `SelectTrigger`, `MaskInput`, and `SegmentedInput` own their padding. Never put `text-sm` or `text-xs` on an editable control. Never add horizontal margin to an icon inside `Button` or `Badge`.
