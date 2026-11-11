import * as React from "react";
import type { IconProps } from "./types";

export const TriangleLeftIcon = React.forwardRef<SVGSVGElement, IconProps>(
  function TriangleLeftIcon({ color = "currentColor", ...props }, forwardedRef) {
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
        <path d="M 4.6 11.2 L 18 3.3 Q 19.5 2.5 19.5 4.1 L 19.5 19.9 Q 19.5 21.5 18 20.7 L 4.6 12.8 Q 3.2 12 4.6 11.2 Z M 18.6 4.9 Q 18.6 4.1 17.9 4.6 L 6.1 11.5 Q 5.3 12 6.1 12.5 L 17.9 19.4 Q 18.6 19.9 18.6 19.1 Z" fill={color} />
      </svg>
    );
  },
);

export default TriangleLeftIcon;
