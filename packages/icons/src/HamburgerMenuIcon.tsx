import * as React from "react";
import type { IconProps } from "./types";

export const HamburgerMenuIcon = React.forwardRef<SVGSVGElement, IconProps>(
  function HamburgerMenuIcon({ color = "currentColor", ...props }, forwardedRef) {
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
        <path d="M 0.785 6.457 L 23.216 6.457 L 23.216 5.457 L 0.785 5.457 Z" fill={color} />
        <path d="M 0.785 12.458 L 23.216 12.458 L 23.216 11.458 L 0.785 11.458 Z" fill={color} />
        <path d="M 0.785 18.542 L 23.216 18.542 L 23.216 17.542 L 0.785 17.542 Z" fill={color} />
      </svg>
    );
  },
);

export default HamburgerMenuIcon;
