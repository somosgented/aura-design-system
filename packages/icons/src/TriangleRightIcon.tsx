import * as React from "react";
import type { IconProps } from "./types";

export const TriangleRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
  function TriangleRightIcon({ color = "currentColor", ...props }, forwardedRef) {
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
        <path d="M 7 5.3 Q 7 4 8.1 4.8 L 16.9 11.2 Q 18 12 16.9 12.8 L 8.1 19.2 Q 7 20 7 18.7 Z M 7.8 18.43 L 16.64 12 L 7.8 5.57 Z" fill={color} />
      </svg>
    );
  },
);

export default TriangleRightIcon;
