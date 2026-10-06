"use client";

import * as React from "react";
import { cn } from "@/utils/class-names";

function KeyValue({ className, label = "Details", ...props }: React.ComponentProps<"dl"> & { label?: string }) {
  return (
    <dl
      aria-label={label}
      data-slot="key-value"
      className={cn("flex w-full max-w-xl flex-col", className)}
      {...props}
    />
  );
}

function KeyValueItem({
  className,
  label,
  children,
}: {
  className?: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div
      data-slot="key-value-item"
      className={cn("flex items-baseline justify-between gap-1 border-b border-gray-6 py-0.5", className)}
    >
      <dt className="text-gray-11">{label}</dt>
      <dd className="m-0 text-gray-12">{children}</dd>
    </div>
  );
}

export { KeyValue, KeyValueItem };
