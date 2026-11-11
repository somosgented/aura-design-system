import * as React from "react";
import type { IconProps } from "./types";

export const CaretDownIcon = React.forwardRef<SVGSVGElement, IconProps>(
  function CaretDownIcon({ color = "currentColor", ...props }, forwardedRef) {
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
        <path d="M 12.35 15.7438 Q 12 16.35 11.65 15.7438 L 8.5828 10.4312 Q 8.2328 9.825 8.9328 9.825 L 15.0672 9.825 Q 15.7672 9.825 15.4172 10.4312 Z" fill={color} />
      </svg>
    );
  },
);

export default CaretDownIcon;
