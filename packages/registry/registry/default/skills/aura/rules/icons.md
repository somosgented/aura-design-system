# Icons

Default library is `@radix-ui/react-icons`. Prefer one library. If a second is required, Radix plus that one.

## Contents

- className="icon"
- Gap, not margin
- Button and Badge

---

## className="icon"

**Incorrect:**

```tsx
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

<MagnifyingGlassIcon width={16} height={16} />
<MagnifyingGlassIcon className="size-4" />
```

**Correct:**

```tsx
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

<MagnifyingGlassIcon className="icon" />
<MagnifyingGlassIcon className="icon h4" />
```

Never pass `size`, `width`, or `height`. Size through typography: `icon`, `icon h4`, `icon h1`.

Ignore shadcn `data-icon` and Lucide defaults unless the installed component API requires them.

---

## Gap, not margin

Space an icon from its label with the container `gap`. A row that only holds the icon and label uses `gap-0.5`.

**Incorrect:**

```tsx
<div className="flex">
  <MagnifyingGlassIcon className="icon mr-2" />
  Search
</div>
```

**Correct:**

```tsx
<div className="flex items-center gap-0.5">
  <MagnifyingGlassIcon className="icon" />
  Search
</div>
```

`aura/no-icon-margin` forbids `ml-*`, `mr-*`, `mx-*`, `ms-*`, and `me-*` on the icon. `ml-auto` and `mr-auto` are allowed only to push layout.

---

## Button and Badge

Those controls already own gap. Do not add an icon gap class inside them.

**Incorrect:**

```tsx
<Button className="gap-2">
  <MagnifyingGlassIcon className="icon mr-2" />
  Search
</Button>
```

**Correct:**

```tsx
<Button>
  <MagnifyingGlassIcon className="icon" />
  Search
</Button>
```
