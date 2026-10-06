"use client";

import * as React from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { cn } from "@/utils/class-names";
import { Button, type ButtonProps } from "@/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";

function SplitButton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      role="group"
      data-slot="split-button"
      className={cn(
        "inline-flex items-stretch overflow-hidden rounded-sm",
        className,
      )}
      {...props}
    />
  );
}

function SplitButtonAction({ className, ...props }: ButtonProps) {
  return (
    <Button
      data-slot="split-button-action"
      className={cn("rounded-r-none", className)}
      {...props}
    />
  );
}

function SplitButtonMenu({
  className,
  label = "More actions",
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuContent> & { label?: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          data-slot="split-button-menu"
          aria-label={label}
          className="w-4 rounded-none border-l border-accent-a7 px-0"
        >
          <ChevronDownIcon className="icon" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className={className} {...props}>
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export { SplitButton, SplitButtonAction, SplitButtonMenu };
