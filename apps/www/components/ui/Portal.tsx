"use client";

import * as React from "react";
import { createPortal } from "react-dom";

function Portal({
  children,
  container,
}: {
  children: React.ReactNode;
  container?: HTMLElement | null;
}) {
  const [target, setTarget] = React.useState<HTMLElement | null>(container ?? null);

  React.useEffect(() => {
    setTarget(container === undefined ? document.body : container);
  }, [container]);

  if (!target) return null;
  return createPortal(children, target);
}

export { Portal };
