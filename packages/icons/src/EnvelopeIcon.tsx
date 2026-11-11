import * as React from "react";
import type { IconProps } from "./types";

export const EnvelopeIcon = React.forwardRef<SVGSVGElement, IconProps>(
  function EnvelopeIcon({ color = "currentColor", ...props }, forwardedRef) {
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
        <path d="M 0 22.037 L 24 22.037 L 24 1.962 L 0 1.962 Z M 0 1.963 M 0.868 2.83 L 23.133 2.83 L 23.133 21.17 L 0.868 21.17 Z" fill={color} />
        <path d="M 12.4407 13.2009 L 0.7137 4.6659 L 0.2027 5.3669 L 12.4617 14.2889 L 23.8577 5.3399 L 23.3227 4.6569 Z" fill={color} />
      </svg>
    );
  },
);

export default EnvelopeIcon;
