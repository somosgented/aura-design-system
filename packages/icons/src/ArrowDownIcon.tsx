import * as React from "react";
import type { IconProps } from "./types";

export const ArrowDownIcon = React.forwardRef<SVGSVGElement, IconProps>(
  function ArrowDownIcon({ color = "currentColor", ...props }, forwardedRef) {
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
        <path d="M 12 0.3667 L 12 23.6337" fill="none" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 16.623 19.0103 L 12 23.6333 L 7.377 19.0103" fill="none" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  },
);

export default ArrowDownIcon;
