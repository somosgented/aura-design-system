import * as React from "react";
import { cn } from "@/utils/class-names";

type CreateIconOptions = {
  viewBox?: string;
};

function createIcon(
  displayName: string,
  path: React.ReactNode,
  options: CreateIconOptions = {},
) {
  const Icon = React.forwardRef<SVGSVGElement, React.ComponentProps<"svg">>(
    ({ className, ...props }, ref) => (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={options.viewBox ?? "0 0 15 15"}
        fill="currentColor"
        aria-hidden={props["aria-label"] ? undefined : true}
        focusable="false"
        className={cn("icon", className)}
        {...props}
      >
        {path}
      </svg>
    ),
  );
  Icon.displayName = displayName;
  return Icon;
}

export { createIcon };
