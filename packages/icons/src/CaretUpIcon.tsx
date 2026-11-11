import * as React from "react";
import type { IconProps } from "./types";

export const CaretUpIcon = React.forwardRef<SVGSVGElement, IconProps>(
  function CaretUpIcon({ color = "currentColor", ...props }, forwardedRef) {
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
        <path d="M 11.65 8.2562 Q 12 7.65 12.35 8.2562 L 15.4172 13.5688 Q 15.7672 14.175 15.0672 14.175 L 8.9328 14.175 Q 8.2328 14.175 8.5828 13.5688 Z" fill={color} />
      </svg>
    );
  },
);

export default CaretUpIcon;
