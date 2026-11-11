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
        <path d="M 8.79 11.46 L 14.61 6.14 Q 15.2 5.6 15.2 6.4 L 15.2 17.6 Q 15.2 18.4 14.61 17.86 L 8.79 12.54 Q 8.2 12 8.79 11.46 Z" fill={color} />
      </svg>
    );
  },
);

export default CaretLeftIcon;
