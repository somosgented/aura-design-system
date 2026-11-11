import * as React from "react";
import type { IconProps } from "./types";

export const StarIcon = React.forwardRef<SVGSVGElement, IconProps>(
  function StarIcon({ color = "currentColor", ...props }, forwardedRef) {
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
        <path d="M 11.791 2.362 Q 12 1.8 12.209 2.362 L 14.704 9.079 L 21.863 9.376 Q 22.462 9.401 21.993 9.774 L 16.375 14.221 L 18.304 21.121 Q 18.466 21.699 17.966 21.367 L 12 17.4 L 6.034 21.367 Q 5.534 21.699 5.696 21.121 L 7.625 14.221 L 2.007 9.774 Q 1.538 9.401 2.137 9.376 L 9.296 9.079 Z M 12 4.095 L 9.86 9.855 L 3.721 10.11 L 8.538 13.925 L 6.883 19.842 L 12 16.44 L 17.117 19.842 L 15.462 13.925 L 20.279 10.11 L 14.14 9.855 Z" fill={color} />
      </svg>
    );
  },
);

export default StarIcon;
