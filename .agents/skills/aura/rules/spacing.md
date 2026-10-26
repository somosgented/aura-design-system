# Spacing

`--spacing` is **13px**. Before any `m` / `p` / `gap` / `h` / `w` / `size` utility, compute `unit * 13px`. `p-4` is 52px. Detail in `DESIGN.md`.

## Contents

- Half-unit scale
- Pixel requests
- Containers

---

## Half-unit scale

Use 0.5-unit increments only (`1`, `1.5`, `2`, …).

**Incorrect:**

```tsx
<div className="gap-1.2 p-[16px]">
  <div className="mt-0.2" />
</div>
```

**Correct:**

```tsx
<div className="flex flex-col gap-1.5 p-1.5">
  <div className="mt-0.5" />
</div>
```

`gap-*` over `space-y-*`. For a vertical stack: `flex flex-col gap-*`.

---

## Pixel requests

Convert “about 20px” to `1.5` (19.5px), not `2` (26px).

**Incorrect:**

```tsx
<section className="p-[20px] gap-[24px]" />
```

**Correct:**

```tsx
<section className="flex flex-col gap-2 p-1.5" />
```

Skip arbitrary pixel spacing unless the human explicitly asks for that pixel value.

---

## Containers

Sections use a defined container (padding, margin, max-width). Prefer five container types or fewer per project.
