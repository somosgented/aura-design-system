import * as React from "react";
import type { IconProps } from "./types";

export const ArrowBottomRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
  function ArrowBottomRightIcon({ color = "currentColor", ...props }, forwardedRef) {
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
        <path d="M 5.354 4.646 L 18.5 17.792 L 18.5 8 A 0.5 0.5 0 0 1 19.5 8 L 19.5 19.5 L 8 19.5 A 0.5 0.5 0 0 1 8 18.5 L 17.792 18.5 L 4.646 5.354 A 0.5 0.5 0 0 1 5.354 4.646 Z" fill={color} />
      </svg>
    );
  },
);

export default ArrowBottomRightIcon;
