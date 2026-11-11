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
        <path d="M 18.6639 11.575 Q 19.4 12 18.6639 12.425 L 9.0361 17.9836 Q 8.3 18.4086 8.3 17.5586 L 8.3 6.4414 Q 8.3 5.5914 9.0361 6.0164 Z" fill={color} />
      </svg>
    );
  },
);

export default TriangleRightIcon;
