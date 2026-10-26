# Color

Step tables live in `DESIGN.md` §2. Use the steps; do not paste the tables here.

## Contents

- Accent and gray steps
- Role by step
- Contrast
- No raw palette

---

## Accent and gray steps

**Incorrect:**

```tsx
<button className="bg-pink-500 text-white">Save</button>
<div style={{ background: "#6d28d9", color: "#111" }}>Panel</div>
```

**Correct:**

```tsx
<button className="bg-accent-9 text-accent-contrast">Save</button>
<div className="bg-gray-2 text-gray-12">Panel</div>
```

Use `--accent-{1–12}`, `--gray-{1–12}`, and alpha `--accent-a*` / `--gray-a*`. Prefer semantic tokens (`--primary`, `--accent-surface`, `--accent-contrast`) when the theme already maps them.

---

## Role by step

| Steps | Role |
| --- | --- |
| 1–2 | Backgrounds |
| 3–5 | Interactive fills |
| 6–8 | Borders and focus |
| 9–10 | Solid brand |
| 11–12 | Text |

**Incorrect:**

```tsx
<p className="text-accent-9">Body on a gray page</p>
<div className="border-accent-12">Card</div>
```

**Correct:**

```tsx
<p className="text-gray-12">Body on a gray page</p>
<div className="bg-gray-2 border border-gray-6 text-gray-12">Card</div>
```

Map `--primary` to `--accent-9`. On a transparent control, hover may use step 3.

---

## Contrast

Steps 11 and 12 must meet APCA Lc 60 and Lc 90 on step 2 backgrounds. Do not lighten text or darken the canvas to make a marketing sample fit.

---

## No raw palette

One-off hex and Tailwind palette utilities (`bg-pink-500`, `text-emerald-600`) are not the production source of truth. Status color goes through a semantic token or a component variant.
