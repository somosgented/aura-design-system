# Customization

`DESIGN.md` is the narrative spec. Change tokens there and in the theme CSS the CLI writes. Do not add a parallel palette in a component.

## Map shadcn semantics onto Aura

| shadcn example | Aura |
| --- | --- |
| `bg-background` | `bg-gray-1` or `bg-gray-2` |
| `bg-primary` | `bg-accent-9` (`--primary` maps to `--accent-9`) |
| `text-primary-foreground` | `text-accent-contrast` |
| `text-muted-foreground` | `text-gray-11` |
| `border-border` | `border-gray-6` |

## Add a color

Ask for an accent or gray seed and run `aura colors`, or extend the existing 12-step scales in the theme file. A one-off hex on a component is not a theme.

## Add a component variant

Appearance changes belong on the component (`variant`, `size`), then a story. Call sites keep layout and width.
