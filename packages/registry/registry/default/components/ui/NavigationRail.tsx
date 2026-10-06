"use client";

import * as React from "react";
import { cn } from "@/utils/class-names";

function NavigationRail({
  className,
  expanded = false,
  label = "Primary",
  ...props
}: React.ComponentProps<"nav"> & { expanded?: boolean; label?: string }) {
  return (
    <nav
      aria-label={label}
      data-slot="navigation-rail"
      data-expanded={expanded ? "true" : "false"}
      className={cn(
        "group flex h-full flex-col gap-0.5 border-e border-gray-6 bg-gray-1 p-0.5",
        expanded ? "w-16" : "w-5",
        className,
      )}
      {...props}
    />
  );
}

function NavigationRailItem({
  className,
  active,
  children,
  ...props
}: React.ComponentProps<"button"> & { active?: boolean }) {
  return (
    <button
      type="button"
      data-slot="navigation-rail-item"
      aria-current={active ? "page" : undefined}
      className={cn(
        "inline-flex items-center gap-0.5 rounded-sm px-1 py-0.5 text-gray-11 hover:bg-gray-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-8 aria-[current=page]:bg-accent-3 aria-[current=page]:text-accent-11",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

function NavigationRailLabel({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="navigation-rail-label"
      className={cn("group-data-[expanded=false]:sr-only", className)}
      {...props}
    />
  );
}

export { NavigationRail, NavigationRailItem, NavigationRailLabel };
