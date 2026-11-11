import * as React from "react";
import type { IconProps } from "./types";

export const CloudIcon = React.forwardRef<SVGSVGElement, IconProps>(
  function CloudIcon({ color = "currentColor", ...props }, forwardedRef) {
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
        <path d="M 6 18.9 A 4.4 4.4 0 1 1 6.112 10.101 A 5.9 5.9 0 0 1 17.733 9.108 A 4.9 4.9 0 1 1 18 18.9 L 6 18.9 Z M 6 18.1 L 18 18.1 A 4.1 4.1 0 1 0 17.077 10.006 A 5.1 5.1 0 0 0 6.926 11.021 A 3.6 3.6 0 1 0 6 18.1 Z" fill={color} />
      </svg>
    );
  },
);

export default CloudIcon;
