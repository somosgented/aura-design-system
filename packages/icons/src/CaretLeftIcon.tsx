import * as React from "react";
import type { IconProps } from "./types";

export const CaretLeftIcon = React.forwardRef<SVGSVGElement, IconProps>(
  function CaretLeftIcon({ color = "currentColor", ...props }, forwardedRef) {
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
        <path d="M 8.2562 12.35 Q 7.65 12 8.2562 11.65 L 13.5688 8.5828 Q 14.175 8.2328 14.175 8.9328 L 14.175 15.0672 Q 14.175 15.7672 13.5688 15.4172 Z" fill={color} />
      </svg>
    );
  },
);

export default CaretLeftIcon;
