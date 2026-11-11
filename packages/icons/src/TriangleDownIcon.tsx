import * as React from "react";
import type { IconProps } from "./types";

export const TriangleDownIcon = React.forwardRef<SVGSVGElement, IconProps>(
  function TriangleDownIcon({ color = "currentColor", ...props }, forwardedRef) {
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
        <path d="M 12.425 18.6639 Q 12 19.4 11.575 18.6639 L 6.0164 9.0361 Q 5.5914 8.3 6.4414 8.3 L 17.5586 8.3 Q 18.4086 8.3 17.9836 9.0361 Z" fill={color} />
      </svg>
    );
  },
);

export default TriangleDownIcon;
