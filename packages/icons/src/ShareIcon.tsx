import * as React from "react";
import type { IconProps } from "./types";

export const ShareIcon = React.forwardRef<SVGSVGElement, IconProps>(
  function ShareIcon({ color = "currentColor", ...props }, forwardedRef) {
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
        <path d="M 21.5 4.5 A 3 3 0 1 0 15.5 4.5 A 3 3 0 1 0 21.5 4.5 Z M 20.7 4.5 A 2.2 2.2 0 1 1 16.3 4.5 A 2.2 2.2 0 1 1 20.7 4.5 Z" fill={color} />
        <path d="M 8.5 12 A 3 3 0 1 0 2.5 12 A 3 3 0 1 0 8.5 12 Z M 7.7 12 A 2.2 2.2 0 1 1 3.3 12 A 2.2 2.2 0 1 1 7.7 12 Z" fill={color} />
        <path d="M 21.5 19.5 A 3 3 0 1 0 15.5 19.5 A 3 3 0 1 0 21.5 19.5 Z M 20.7 19.5 A 2.2 2.2 0 1 1 16.3 19.5 A 2.2 2.2 0 1 1 20.7 19.5 Z" fill={color} />
        <path d="M 7.552 10.354 L 16.048 5.454 L 16.448 6.146 L 7.952 11.046 Z" fill={color} />
        <path d="M 7.952 12.954 L 16.448 17.854 L 16.048 18.546 L 7.552 13.646 Z" fill={color} />
      </svg>
    );
  },
);

export default ShareIcon;
