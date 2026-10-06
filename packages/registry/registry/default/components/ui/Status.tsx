"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/class-names";

const statusVariants = cva("inline-flex items-center gap-0.5", {
  variants: {
    tone: {
      online: "text-gray-12",
      away: "text-gray-12",
      busy: "text-gray-12",
      offline: "text-gray-11",
    },
  },
  defaultVariants: { tone: "online" },
});

const dot = {
  online: "bg-accent-9",
  away: "bg-gray-9",
  busy: "bg-gray-12",
  offline: "bg-gray-7",
} as const;

function Status({
  className,
  tone = "online",
  children,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof statusVariants>) {
  const current = tone ?? "online";
  return (
    <span
      data-slot="status"
      data-tone={current}
      className={cn(statusVariants({ tone: current }), className)}
      {...props}
    >
      <span aria-hidden className={cn("size-1 rounded-full", dot[current])} />
      {children}
    </span>
  );
}

export { Status };
