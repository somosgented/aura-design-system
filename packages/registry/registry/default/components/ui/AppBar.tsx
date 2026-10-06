"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/class-names";

const appBarVariants = cva(
  "sticky top-0 z-30 flex items-center gap-1 bg-gray-1 px-1.5",
  {
    variants: {
      size: {
        small: "h-4",
        medium: "h-6",
        large: "h-8 items-end pb-1",
      },
    },
    defaultVariants: {
      size: "small",
    },
  },
);

function AppBar({
  className,
  size,
  elevated = false,
  title,
  children,
  ...props
}: React.ComponentProps<"header"> &
  VariantProps<typeof appBarVariants> & {
    elevated?: boolean;
    title: string;
  }) {
  return (
    <header
      data-slot="app-bar"
      data-size={size ?? "small"}
      data-elevated={elevated ? "true" : "false"}
      className={cn(appBarVariants({ size }), elevated && "shadow-md", className)}
      {...props}
    >
      <p className={cn("m-0 font-medium", size === "large" ? "h5" : "h6")}>{title}</p>
      <div className="ml-auto flex items-center gap-0.5">{children}</div>
    </header>
  );
}

export { AppBar, appBarVariants };
