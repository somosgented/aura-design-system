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
        <path d="M 5.3361 12.425 Q 4.6 12 5.3361 11.575 L 14.9639 6.0164 Q 15.7 5.5914 15.7 6.4414 L 15.7 17.5586 Q 15.7 18.4086 14.9639 17.9836 Z" fill={color} />
      </svg>
    );
  },
);

export default TriangleLeftIcon;
