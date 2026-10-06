"use client";

import * as React from "react";
import { cn } from "@/utils/class-names";

function Hitbox({ children }: { children: React.ReactElement<{ className?: string }> }) {
  return React.cloneElement(children, {
    className: cn(
      children.props.className,
      "relative before:absolute before:-inset-1 before:content-['']",
    ),
  });
}

export { Hitbox };
