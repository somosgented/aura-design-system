import * as React from "react";
import type { IconProps } from "./types";

export const CrossIcon = React.forwardRef<SVGSVGElement, IconProps>(
  function CrossIcon({ color = "currentColor", ...props }, forwardedRef) {
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
        <path d="M 11.9997 11.3001 L 1.2407 0.5401 L 0.5397 1.2401 L 11.2997 12.0001 L 0.5397 22.7601 L 1.2407 23.4601 L 11.9997 12.7001 L 22.7597 23.4601 L 23.4607 22.7601 L 12.6997 12.0001 L 23.4607 1.2401 L 22.7597 0.5401 Z" fill={color} />
      </svg>
    );
  },
);

export default CrossIcon;
