"use client";

import * as React from "react";
import { cn } from "@/utils/class-names";
import { ShapeMorph } from "@/components/ui/Shape";

function LoadingIndicator({
  className,
  label = "Loading",
  ...props
}: React.ComponentProps<"div"> & { label?: string }) {
  return (
    <div
      role="status"
      data-slot="loading-indicator"
      className={cn("inline-flex items-center gap-0.5", className)}
      {...props}
    >
      <ShapeMorph />
      <span className="sr-only">{label}</span>
    </div>
  );
}

export { LoadingIndicator };
