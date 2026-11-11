import * as React from "react";
import type { IconProps } from "./types";

export const ArrowLeftIcon = React.forwardRef<SVGSVGElement, IconProps>(
  function ArrowLeftIcon({ color = "currentColor", ...props }, forwardedRef) {
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
        <path d="M 23.6333 12 L 0.3663 12" fill="none" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 4.9897 16.623 L 0.3667 12 L 4.9897 7.377" fill="none" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  },
);

export default ArrowLeftIcon;
