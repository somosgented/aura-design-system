"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/class-names";

const fabVariants = cva(
  "inline-flex items-center justify-center gap-0.5 rounded-full bg-accent-9 text-accent-contrast shadow-md transition hover:bg-accent-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-8 motion-reduce:transition-none",
  {
    variants: {
      size: {
        default: "size-4",
        sm: "size-3",
        lg: "h-5 min-w-5 px-1.5",
      },
      position: {
        fixed: "fixed end-2 bottom-2 z-40",
        absolute: "absolute end-2 bottom-2 z-10",
        inline: "relative",
      },
    },
    defaultVariants: {
      size: "default",
      position: "fixed",
    },
  },
);

function Fab({
  className,
  size,
  position,
  label,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof fabVariants> & { label?: string }) {
  const extended = Boolean(label);
  return (
    <button
      type="button"
      data-slot="fab"
      data-extended={extended ? "" : undefined}
      className={cn(
        fabVariants({
          size: extended ? "lg" : size,
          position,
        }),
        className,
      )}
      {...props}
    >
      {children}
      {label ? <span>{label}</span> : null}
    </button>
  );
}

export { Fab, fabVariants };
