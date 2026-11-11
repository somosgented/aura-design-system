import * as React from "react";
import type { IconProps } from "./types";

export const ArrowTopRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
  function ArrowTopRightIcon({ color = "currentColor", ...props }, forwardedRef) {
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
        <path d="M 8 3.5 L 20.1 3.5 C 20.3209 3.5 20.5 3.6791 20.5 3.9 L 20.5 16 A 0.5 0.5 0 0 1 19.5 16 L 19.5 5.208 L 4.354 20.354 A 0.5 0.5 0 0 1 3.646 19.646 L 18.792 4.5 L 8 4.5 A 0.5 0.5 0 0 1 8 3.5 Z" fill={color} />
      </svg>
    );
  },
);

export default ArrowTopRightIcon;
