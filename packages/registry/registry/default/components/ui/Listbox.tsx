"use client";

import * as React from "react";
import { cn } from "@/utils/class-names";

type ListboxItem = {
  value: string;
  label: string;
  disabled?: boolean;
};

function Listbox({
  className,
  items,
  value,
  defaultValue,
  onValueChange,
  label = "Options",
}: {
  className?: string;
  items: ListboxItem[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  label?: string;
}) {
  const [uncontrolled, setUncontrolled] = React.useState(defaultValue ?? items[0]?.value);
  const current = value ?? uncontrolled;
  const enabled = items.filter((item) => !item.disabled);

  const select = (next: string) => {
    if (value === undefined) setUncontrolled(next);
    onValueChange?.(next);
  };

  return (
    <div
      role="listbox"
      aria-label={label}
      tabIndex={0}
      data-slot="listbox"
      className={cn(
        "flex w-full max-w-xl flex-col rounded-sm border border-gray-6 bg-gray-1 p-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-8",
        className,
      )}
      onKeyDown={(event) => {
        const index = enabled.findIndex((item) => item.value === current);
        if (event.key === "ArrowDown") {
          event.preventDefault();
          const next = enabled[(index + 1) % enabled.length];
          if (next) select(next.value);
        } else if (event.key === "ArrowUp") {
          event.preventDefault();
          const next = enabled[(index - 1 + enabled.length) % enabled.length];
          if (next) select(next.value);
        }
      }}
    >
      {items.map((item) => {
        const selected = item.value === current;
        return (
          <button
            key={item.value}
            type="button"
            role="option"
            aria-selected={selected}
            disabled={item.disabled}
            className="rounded-sm px-1 py-0.5 text-start text-gray-12 hover:bg-gray-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-8 disabled:opacity-50 aria-selected:bg-accent-3"
            onClick={() => select(item.value)}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

export { Listbox };
export type { ListboxItem };
