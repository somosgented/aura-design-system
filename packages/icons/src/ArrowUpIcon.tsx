import * as React from "react";
import type { IconProps } from "./types";

export const ArrowUpIcon = React.forwardRef<SVGSVGElement, IconProps>(
  function ArrowUpIcon({ color = "currentColor", ...props }, forwardedRef) {
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
        <path d="M 11.6 1.7 L 5 8.3 A 0.5 0.5 0 0 0 5.707 9.007 L 11.5 3.214 L 11.5 22.2 A 0.5 0.5 0 0 0 12.5 22.2 L 12.5 3.214 L 18.293 9.007 A 0.5 0.5 0 0 0 19 8.3 L 12.4 1.7 Q 12 1.3 11.6 1.7 Z" fill={color} />
      </svg>
    );
  },
);

export default ArrowUpIcon;
