# Typography

Scale tables and the clamp formula live in `DESIGN.md` §3.

## Contents

- Fluid primary copy
- Utility text
- 17px control floor

---

## Fluid primary copy

**Incorrect:**

```tsx
<h1 className="text-4xl font-bold">Title</h1>
<p className="text-lg">Paragraph</p>
```

**Correct:**

```tsx
<h1 className="h1">Title</h1>
<p className="p">Paragraph</p>
```

Size primary type with `clamp(var(--min), var(--val), var(--max))` through `h1`–`h6`, `.h1`–`.h6`, `p`, and `.p`. `--min` and `--max` are `rem`. Large headings use line-height about 1.1–1.3. `blockquote` shares the `h4` scale.

---

## Utility text

`text-sm` and `text-xs` are for fixed utility or meta text only.

**Incorrect:**

```tsx
<input className="text-sm" />
<textarea className="text-xs" />
```

**Correct:**

```tsx
<input />
<span className="text-sm">Updated 2m ago</span>
```

---

## 17px control floor

Editable `input`, `textarea`, and `select` stay **≥ 17px** (`max(1rem, 17px)` or the 17px root). Enforce that in global CSS (`styles/main.css` or unlayered globals), not only on one component.

Keep `html { font-size: 17px; }` so `1rem` already meets the floor.
