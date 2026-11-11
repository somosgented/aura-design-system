import * as React from "react";
import type { IconProps } from "./types";

export const DoubleArrowUpIcon = React.forwardRef<SVGSVGElement, IconProps>(
  function DoubleArrowUpIcon({ color = "currentColor", ...props }, forwardedRef) {
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
        <path d="M 12 4.793 L 19.354 12.146 A 0.5 0.5 0 0 1 18.646 12.854 L 12 6.207 L 5.354 12.854 A 0.5 0.5 0 0 1 4.646 12.146 Z" fill={color} />
        <path d="M 12 10.793 L 19.354 18.146 A 0.5 0.5 0 0 1 18.646 18.854 L 12 12.207 L 5.354 18.854 A 0.5 0.5 0 0 1 4.646 18.146 Z" fill={color} />
      </svg>
    );
  },
);

export default DoubleArrowUpIcon;
