"use client";

import * as React from "react";
import { cn } from "@/utils/class-names";

function Presence({
  className,
  present,
  children,
}: {
  className?: string;
  present: boolean;
  children?: React.ReactNode;
}) {
  const [shown, setShown] = React.useState(present);

  React.useEffect(() => {
    if (present) {
      setShown(true);
      return;
    }
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) setShown(false);
  }, [present]);

  if (!shown) return null;

  return (
    <div
      data-slot="presence"
      data-present={present ? "" : undefined}
      className={cn(
        "transition duration-300 motion-reduce:transition-none",
        present ? "scale-100 opacity-100" : "scale-95 opacity-0",
        className,
      )}
      onTransitionEnd={() => {
        if (!present) setShown(false);
      }}
    >
      {children}
    </div>
  );
}

export { Presence };
