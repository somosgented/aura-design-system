import * as React from "react";
import type { IconProps } from "./types";

export const ArrowDownIcon = React.forwardRef<SVGSVGElement, IconProps>(
  function ArrowDownIcon({ color = "currentColor", ...props }, forwardedRef) {
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
        <path d="M 11.6 2.2 L 11.6 20.57 L 5.766 14.734 A 0.4 0.4 0 0 0 5.2 15.3 L 12 22.1 L 18.8 15.3 A 0.4 0.4 0 0 0 18.234 14.734 L 12.4 20.57 L 12.4 2.2 A 0.4 0.4 0 0 0 11.6 2.2 Z" fill={color} />
      </svg>
    );
  },
);

export default ArrowDownIcon;
