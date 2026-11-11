import * as React from "react";
import type { IconProps } from "./types";

export const ArrowTopLeftIcon = React.forwardRef<SVGSVGElement, IconProps>(
  function ArrowTopLeftIcon({ color = "currentColor", ...props }, forwardedRef) {
    return (
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
        <path d="M 3.5 3.5 L 14 3.5 A 0.5 0.5 0 0 1 14 4.5 L 5.207 4.5 L 20.354 19.646 A 0.5 0.5 0 0 1 19.646 20.354 L 4.5 5.207 L 4.5 14 A 0.5 0.5 0 0 1 3.5 14 Z" fill={color} />
      </svg>
    );
  },
);

export default ArrowTopLeftIcon;
