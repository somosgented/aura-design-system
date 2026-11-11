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
        <path d="M 2.293 12 L 9.646 4.646 A 0.5 0.5 0 0 1 10.354 5.354 L 4.207 11.5 L 21 11.5 A 0.5 0.5 0 0 1 21 12.5 L 4.207 12.5 L 10.354 18.646 A 0.5 0.5 0 0 1 9.646 19.354 Z" fill={color} />
      </svg>
    );
  },
);

export default ArrowLeftIcon;
