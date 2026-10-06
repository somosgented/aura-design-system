"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { CheckIcon, Cross2Icon } from "@radix-ui/react-icons";
import { cn } from "@/utils/class-names";

const chipVariants = cva(
  "inline-flex items-center gap-0.5 rounded-full border px-1.5 py-0.5 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-8 motion-reduce:transition-none",
  {
    variants: {
      variant: {
        assist:
          "border-gray-6 bg-gray-1 text-gray-12 hover:bg-gray-3",
        filter:
          "border-gray-6 bg-gray-2 text-gray-12 hover:bg-gray-3 data-[selected=true]:border-transparent data-[selected=true]:bg-gray-12 data-[selected=true]:text-gray-1",
        input: "border-gray-6 bg-gray-3 text-gray-12",
      },
    },
    defaultVariants: {
      variant: "assist",
    },
  },
);

type ChipProps = React.ComponentProps<"button"> &
  VariantProps<typeof chipVariants> & {
    selected?: boolean;
    onRemove?: () => void;
    removeLabel?: string;
  };

function Chip({
  className,
  variant = "assist",
  selected,
  onRemove,
  removeLabel = "Remove",
  children,
  ...props
}: ChipProps) {
  if (variant === "input") {
    return (
      <span
        data-slot="chip"
        data-variant="input"
        className={cn(chipVariants({ variant }), className)}
      >
        <span>{children}</span>
        <button
          type="button"
          aria-label={removeLabel}
          className="inline-flex size-2 items-center justify-center rounded-full hover:bg-gray-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-8"
          onClick={onRemove}
        >
          <Cross2Icon className="icon" />
        </button>
      </span>
    );
  }

  return (
    <button
      type="button"
      data-slot="chip"
      data-variant={variant}
      data-selected={selected ? "true" : "false"}
      aria-pressed={variant === "filter" ? Boolean(selected) : undefined}
      className={cn(chipVariants({ variant }), className)}
      {...props}
    >
      {variant === "filter" && selected ? <CheckIcon className="icon" /> : null}
      {children}
    </button>
  );
}

export { Chip, chipVariants };
