"use client";

import * as React from "react";
import { cn } from "@/utils/class-names";

function NavigationBar({
  className,
  label = "Primary",
  ...props
}: React.ComponentProps<"nav"> & { label?: string }) {
  return (
    <nav
      aria-label={label}
      data-slot="navigation-bar"
      className={cn(
        "flex items-stretch justify-around border-t border-gray-6 bg-gray-1",
        className,
      )}
      {...props}
    />
  );
}

function NavigationBarItem({
  className,
  active,
  children,
  ...props
}: React.ComponentProps<"button"> & { active?: boolean }) {
  return (
    <button
      type="button"
      data-slot="navigation-bar-item"
      aria-current={active ? "page" : undefined}
      className={cn(
        "inline-flex min-w-0 flex-1 flex-col items-center gap-0.5 px-0.5 py-0.5 text-gray-11 hover:bg-gray-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-8 aria-[current=page]:text-accent-11",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export { NavigationBar, NavigationBarItem };
