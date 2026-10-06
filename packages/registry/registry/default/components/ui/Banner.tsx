"use client";

import * as React from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import { cn } from "@/utils/class-names";

function Banner({
  className,
  children,
  action,
  onDismiss,
}: {
  className?: string;
  children: React.ReactNode;
  action?: React.ReactNode;
  onDismiss?: () => void;
}) {
  return (
    <div
      role="status"
      data-slot="banner"
      className={cn(
        "flex items-center gap-1 border-b border-accent-7 bg-accent-3 px-1.5 py-1 text-gray-12",
        className,
      )}
    >
      <p className="m-0 flex-1">{children}</p>
      {action}
      {onDismiss ? (
        <button
          type="button"
          aria-label="Dismiss banner"
          className="inline-flex size-3 items-center justify-center rounded-sm hover:bg-accent-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-8"
          onClick={onDismiss}
        >
          <Cross2Icon className="icon" />
        </button>
      ) : null}
    </div>
  );
}

export { Banner };
