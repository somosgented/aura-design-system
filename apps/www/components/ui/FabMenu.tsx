"use client";

import * as React from "react";
import { Cross2Icon, PlusIcon } from "@radix-ui/react-icons";
import { cn } from "@/utils/class-names";
import { Fab } from "@/components/ui/Fab";

type FabMenuContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const FabMenuContext = React.createContext<FabMenuContextValue | null>(null);

function useFabMenu() {
  const context = React.useContext(FabMenuContext);
  if (!context) {
    throw new Error("FabMenu parts must be used within FabMenu.");
  }
  return context;
}

function FabMenu({
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  children,
}: {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}) {
  const [uncontrolled, setUncontrolled] = React.useState(defaultOpen);
  const open = openProp ?? uncontrolled;
  const setOpen = React.useCallback(
    (next: boolean) => {
      if (openProp === undefined) setUncontrolled(next);
      onOpenChange?.(next);
    },
    [onOpenChange, openProp],
  );

  return (
    <FabMenuContext.Provider value={{ open, setOpen }}>
      <div data-slot="fab-menu" className="contents">
        {children}
      </div>
    </FabMenuContext.Provider>
  );
}

function FabMenuList({
  className,
  position = "fixed",
  ...props
}: React.ComponentProps<"div"> & { position?: "fixed" | "absolute" }) {
  const { open } = useFabMenu();
  if (!open) return null;
  return (
    <div
      data-slot="fab-menu-list"
      className={cn(
        "z-40 flex flex-col items-end gap-1",
        position === "fixed" ? "fixed end-2 bottom-7" : "absolute end-2 bottom-7",
        className,
      )}
      {...props}
    />
  );
}

function FabMenuItem({
  className,
  label,
  children,
  onClick,
  ...props
}: React.ComponentProps<"button"> & { label: string }) {
  const { setOpen } = useFabMenu();
  return (
    <button
      type="button"
      data-slot="fab-menu-item"
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full bg-gray-2 px-1.5 py-0.5 text-gray-12 shadow-md hover:bg-gray-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-8",
        className,
      )}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) setOpen(false);
      }}
      {...props}
    >
      {children}
      <span>{label}</span>
    </button>
  );
}

function FabMenuTrigger({
  className,
  label = "Open actions",
  closeLabel = "Close actions",
  position = "fixed",
  onClick,
  ...props
}: React.ComponentProps<typeof Fab> & {
  label?: string;
  closeLabel?: string;
}) {
  const { open, setOpen } = useFabMenu();
  return (
    <Fab
      data-slot="fab-menu-trigger"
      position={position}
      aria-expanded={open}
      aria-label={open ? closeLabel : label}
      className={cn(
        "motion-safe:transition-transform motion-reduce:transition-none",
        className,
      )}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) setOpen(!open);
      }}
      {...props}
    >
      {open ? (
        <Cross2Icon className="icon" />
      ) : (
        props.children ?? <PlusIcon className="icon" />
      )}
    </Fab>
  );
}

export { FabMenu, FabMenuList, FabMenuItem, FabMenuTrigger };
