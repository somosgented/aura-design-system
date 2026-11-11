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
        <path d="M 11.65 5.1062 Q 12 4.5 12.35 5.1062 L 15.4172 10.4188 Q 15.7672 11.025 15.0672 11.025 L 8.9328 11.025 Q 8.2328 11.025 8.5828 10.4188 Z" fill={color} />
        <path d="M 12.35 18.8938 Q 12 19.5 11.65 18.8938 L 8.5828 13.5812 Q 8.2328 12.975 8.9328 12.975 L 15.0672 12.975 Q 15.7672 12.975 15.4172 13.5812 Z" fill={color} />
      </svg>
    );
  },
);

export default CaretSortIcon;
