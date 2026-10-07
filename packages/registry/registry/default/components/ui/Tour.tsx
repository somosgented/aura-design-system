"use client";

import * as React from "react";
import { cn } from "@/utils/class-names";
import { Button } from "@/components/ui/Button";

type TourStep = {
  id: string;
  title: string;
  body: string;
};

type TourContextValue = {
  activeId?: string;
  register: (id: string, node: HTMLDivElement | null) => void;
};

const TourContext = React.createContext<TourContextValue>({
  register: () => {},
});

function Tour({
  className,
  steps,
  defaultOpen = false,
  children,
  label = "Tour",
}: {
  className?: string;
  steps: TourStep[];
  defaultOpen?: boolean;
  children?: React.ReactNode;
  label?: string;
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  const [index, setIndex] = React.useState(0);
  const rootRef = React.useRef<HTMLDivElement>(null);
  const dialogRef = React.useRef<HTMLDivElement>(null);
  const nodes = React.useRef(new Map<string, HTMLDivElement>());
  const titleId = React.useId();
  const step = steps[index];
  const [anchor, setAnchor] = React.useState<{ top: number; left: number; caret: number } | null>(null);

  const register = React.useCallback((id: string, node: HTMLDivElement | null) => {
    if (node) nodes.current.set(id, node);
    else nodes.current.delete(id);
  }, []);

  React.useLayoutEffect(() => {
    if (!open || !step) {
      setAnchor(null);
      return;
    }
    const root = rootRef.current;
    const target = nodes.current.get(step.id);
    if (!root || !target) return;
    const rootBox = root.getBoundingClientRect();
    const targetBox = target.getBoundingClientRect();
    const dialogWidth = 20 * 13;
    const rawLeft = targetBox.left - rootBox.left;
    const left = Math.min(Math.max(0, rawLeft), Math.max(0, rootBox.width - dialogWidth));
    setAnchor({
      top: targetBox.bottom - rootBox.top + 13,
      left,
      caret: Math.max(13, rawLeft - left + targetBox.width / 2 - 6.5),
    });
  }, [open, index, step]);

  React.useEffect(() => {
    if (!open) return;
    dialogRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      const root = rootRef.current;
      if (!root?.contains(event.target as Node)) return;
      const target = event.target as HTMLElement;
      if (target.closest("input, textarea, select, [contenteditable='true']")) return;
      if (event.key === "Escape") setOpen(false);
      if (event.key === "ArrowRight") setIndex((current) => Math.min(steps.length - 1, current + 1));
      if (event.key === "ArrowLeft") setIndex((current) => Math.max(0, current - 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, steps.length, index]);

  return (
    <TourContext.Provider value={{ activeId: open ? step?.id : undefined, register }}>
      <div ref={rootRef} data-slot="tour" className={cn("relative flex flex-col gap-1", open && "pb-12", className)}>
        {children}
        {open && step && anchor ? (
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="false"
            aria-label={label}
            aria-labelledby={titleId}
            tabIndex={-1}
            className="absolute z-10 flex w-20 flex-col gap-0.5 rounded-sm border border-gray-6 bg-gray-1 p-1 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-8"
            style={{ top: anchor.top, left: anchor.left }}
          >
            <span
              aria-hidden
              className="absolute size-1 rotate-45 border-s border-t border-gray-6 bg-gray-1"
              style={{ top: "calc(var(--spacing) * -0.5)", left: anchor.caret }}
            />
            <p id={titleId} className="m-0 font-medium">
              {step.title}
            </p>
            <p className="m-0 text-gray-11">{step.body}</p>
            <div className="flex items-center gap-0.5">
              <Button
                type="button"
                variant="pill"
                size="sm"
                disabled={index === 0}
                onClick={() => setIndex((current) => Math.max(0, current - 1))}
              >
                Back
              </Button>
              {index < steps.length - 1 ? (
                <Button
                  type="button"
                  size="sm"
                  onClick={() => setIndex((current) => Math.min(steps.length - 1, current + 1))}
                >
                  Next
                </Button>
              ) : (
                <Button type="button" size="sm" onClick={() => setOpen(false)}>
                  Done
                </Button>
              )}
              <span className="whitespace-nowrap text-gray-11">
                {index + 1} / {steps.length}
              </span>
            </div>
          </div>
        ) : null}
        {!open ? (
          <Button
            type="button"
            variant="pill"
            size="sm"
            className="w-fit"
            onClick={() => {
              setIndex(0);
              setOpen(true);
            }}
          >
            Start tour
          </Button>
        ) : null}
      </div>
    </TourContext.Provider>
  );
}

function TourTarget({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const { activeId, register } = React.useContext(TourContext);
  const active = activeId === id;
  return (
    <div
      id={id}
      ref={(node) => register(id, node)}
      data-slot="tour-target"
      className={cn(
        "rounded-sm border border-gray-6 p-1",
        active && "ring-2 ring-accent-8",
        className,
      )}
    >
      {children}
    </div>
  );
}

export { Tour, TourTarget };
export type { TourStep };
