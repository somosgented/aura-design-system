"use client";

import * as React from "react";
import { cn } from "@/utils/class-names";

function ColorSwatch({
  className,
  color,
  label,
  selected,
  ...props
}: React.ComponentProps<"button"> & {
  color: string;
  label: string;
  selected?: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={selected}
      data-slot="color-swatch"
      className={cn(
        "inline-flex size-3 items-center justify-center rounded-full border border-gray-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-8 aria-pressed:ring-2 aria-pressed:ring-accent-9",
        className,
      )}
      style={{ backgroundColor: color }}
      {...props}
    />
  );
}

export { ColorSwatch };
