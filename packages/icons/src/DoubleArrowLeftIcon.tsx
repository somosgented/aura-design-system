import * as React from "react";
import type { IconProps } from "./types";

export const DoubleArrowLeftIcon = React.forwardRef<SVGSVGElement, IconProps>(
  function DoubleArrowLeftIcon({ color = "currentColor", ...props }, forwardedRef) {
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
        <path d="M 11.146 4.646 L 3.793 12 L 11.146 19.354 A 0.5 0.5 0 0 0 11.854 18.646 L 5.207 12 L 11.854 5.354 A 0.5 0.5 0 0 0 11.146 4.646 Z" fill={color} />
        <path d="M 19.146 4.646 L 11.793 12 L 19.146 19.354 A 0.5 0.5 0 0 0 19.854 18.646 L 13.207 12 L 19.854 5.354 A 0.5 0.5 0 0 0 19.146 4.646 Z" fill={color} />
      </svg>
    );
  },
);

export default DoubleArrowLeftIcon;
