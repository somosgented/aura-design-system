"use client";

import * as React from "react";
import { cn } from "@/utils/class-names";

function Pending({
  className,
  pending = false,
  children,
  label = "Loading",
}: {
  className?: string;
  pending?: boolean;
  children?: React.ReactNode;
  label?: string;
}) {
  return (
    <span
      aria-busy={pending || undefined}
      data-slot="pending"
      data-pending={pending ? "" : undefined}
      className={cn("inline-flex items-center gap-0.5", className)}
    >
      {pending ? (
        <span
          aria-hidden
          className="size-1 animate-spin rounded-full border-2 border-gray-6 border-t-accent-9 motion-reduce:animate-none"
        />
      ) : null}
      <span className={pending ? "text-gray-11" : undefined}>{children}</span>
      {pending ? <span className="sr-only">{label}</span> : null}
    </span>
  );
}

export { Pending };
