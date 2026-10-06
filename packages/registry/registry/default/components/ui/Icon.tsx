"use client";

import * as React from "react";
import { cn } from "@/utils/class-names";

function Icon({
  className,
  label,
  size = "default",
  children,
  ...props
}: React.ComponentProps<"span"> & { label?: string; size?: "default" | "lg" }) {
  return (
    <span
      data-slot="icon"
      data-size={size}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={cn(
        "icon inline-flex items-center justify-center",
        size === "lg" && "h4",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export { Icon };
