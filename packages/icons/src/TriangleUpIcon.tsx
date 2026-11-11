import * as React from "react";
import type { IconProps } from "./types";

export const TriangleUpIcon = React.forwardRef<SVGSVGElement, IconProps>(
  function TriangleUpIcon({ color = "currentColor", ...props }, forwardedRef) {
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
        <path d="M 11.575 5.3361 Q 12 4.6 12.425 5.3361 L 17.9836 14.9639 Q 18.4086 15.7 17.5586 15.7 L 6.4414 15.7 Q 5.5914 15.7 6.0164 14.9639 Z" fill={color} />
      </svg>
    );
  },
);

export default TriangleUpIcon;
