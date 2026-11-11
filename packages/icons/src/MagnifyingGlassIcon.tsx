import * as React from "react";
import type { IconProps } from "./types";

export const MagnifyingGlassIcon = React.forwardRef<SVGSVGElement, IconProps>(
  function MagnifyingGlassIcon({ color = "currentColor", ...props }, forwardedRef) {
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
        <path d="M 16.7512 17.2849 C 14.9222 18.9779 12.3932 19.9319 9.6382 19.6589 C 5.4482 19.2419 2.0142 15.8689 1.5172 11.6879 C 0.8602 6.1619 5.1752 1.4549 10.5712 1.4549 C 15.6112 1.4549 19.7012 5.5449 19.7012 10.5749 C 19.7012 12.9649 18.7812 15.1349 17.2812 16.7549 C 17.1112 16.9449 16.9412 17.1149 16.7512 17.2849 M 17.8112 17.2849 C 19.4512 15.5249 20.4512 13.1549 20.4512 10.5749 C 20.4512 5.0419 15.8682 0.5539 10.2912 0.7089 C 5.1412 0.8519 0.8482 5.1449 0.7052 10.2949 C 0.5502 15.8719 5.0382 20.4549 10.5712 20.4549 C 13.1612 20.4549 15.5212 19.4549 17.2812 17.8149 L 22.6712 23.2049 C 22.8572 23.3509 23.1162 23.3109 23.2342 23.1489 C 23.3292 23.0159 23.3202 22.8179 23.2012 22.6749 C 21.4042 20.8779 19.6082 19.0819 17.8112 17.2849" fill={color} />
      </svg>
    );
  },
);

export default MagnifyingGlassIcon;
