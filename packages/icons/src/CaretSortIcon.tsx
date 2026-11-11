import * as React from "react";
import type { IconProps } from "./types";

export const CaretSortIcon = React.forwardRef<SVGSVGElement, IconProps>(
  function CaretSortIcon({ color = "currentColor", ...props }, forwardedRef) {
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
        <path d="M 12 3.3 L 17.5 8.8 A 0.495 0.495 0 0 1 16.8 9.5 L 12 4.7 L 7.2 9.5 A 0.495 0.495 0 0 1 6.5 8.8 Z" fill={color} />
        <path d="M 12 20.7 L 6.5 15.2 A 0.495 0.495 0 0 1 7.2 14.5 L 12 19.3 L 16.8 14.5 A 0.495 0.495 0 0 1 17.5 15.2 Z" fill={color} />
      </svg>
    );
  },
);

export default CaretSortIcon;
