import * as React from "react";
import type { IconProps } from "./types";

export const DoubleArrowRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
  function DoubleArrowRightIcon({ color = "currentColor", ...props }, forwardedRef) {
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
        <path d="M 4.854 4.146 L 12.707 12 L 4.854 19.854 A 0.5 0.5 0 0 1 4.146 19.146 L 11.293 12 L 4.146 4.854 A 0.5 0.5 0 0 1 4.854 4.146 Z" fill={color} />
        <path d="M 11.854 4.146 L 19.707 12 L 11.854 19.854 A 0.5 0.5 0 0 1 11.146 19.146 L 18.293 12 L 11.146 4.854 A 0.5 0.5 0 0 1 11.854 4.146 Z" fill={color} />
      </svg>
    );
  },
);

export default DoubleArrowRightIcon;
