import * as React from "react";
import type { IconProps } from "./types";

export const ArrowRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
  function ArrowRightIcon({ color = "currentColor", ...props }, forwardedRef) {
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
        <path d="M 0.3667 12 L 23.6337 12" fill="none" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 19.0103 7.377 L 23.6333 12 L 19.0103 16.623" fill="none" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  },
);

export default ArrowRightIcon;
