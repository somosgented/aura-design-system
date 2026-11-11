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
        <path d="M 11.6100 3.7000 Q 12.0000 3.0000 12.3900 3.7000 L 21.1100 19.3000 Q 21.5000 20.0000 20.7000 20.0000 L 3.3000 20.0000 Q 2.5000 20.0000 2.8900 19.3000 Z M 12.0000 4.8450 L 4.0340 19.1000 L 19.9660 19.1000 Z" fill={color} />
      </svg>
    );
  },
);

export default TriangleUpIcon;
