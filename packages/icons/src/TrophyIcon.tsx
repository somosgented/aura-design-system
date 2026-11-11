import * as React from "react";
import type { IconProps } from "./types";

export const TrophyIcon = React.forwardRef<SVGSVGElement, IconProps>(
  function TrophyIcon({ color = "currentColor", ...props }, forwardedRef) {
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
        <path d="M 6 2 L 18 2 L 18 7 C 18 10.3 15.3 13 12 13 C 8.7 13 6 10.3 6 7 Z M 6.8 2.8 L 17.2 2.8 L 17.2 7 C 17.2 9.87 14.87 12.2 12 12.2 C 9.13 12.2 6.8 9.87 6.8 7 Z" fill={color} />
        <path d="M 6.2 3.2 L 4.6 3.2 C 3.3 3.2 2.2 4.3 2.2 5.6 C 2.2 7.7 3.9 9.6 6.6 9.9 L 6.9 9.1 C 4.6 8.9 3 7.4 3 5.6 C 3 4.7 3.7 4 4.6 4 L 6.2 4 Z" fill={color} />
        <path d="M 17.8 3.2 L 19.4 3.2 C 20.7 3.2 21.8 4.3 21.8 5.6 C 21.8 7.7 20.1 9.6 17.4 9.9 L 17.1 9.1 C 19.4 8.9 21 7.4 21 5.6 C 21 4.7 20.3 4 19.4 4 L 17.8 4 Z" fill={color} />
        <path d="M 11.6 12.9 L 12.4 12.9 L 12.4 17.2 L 11.6 17.2 Z" fill={color} />
        <path d="M 8.5 17 L 15.5 17 Q 16.5 17 16.5 18 L 16.5 20.8 L 7.5 20.8 L 7.5 18 Q 7.5 17 8.5 17 Z M 8.5 17.8 L 15.5 17.8 Q 15.7 17.8 15.7 18 L 15.7 20.6 L 8.3 20.6 L 8.3 18 Q 8.3 17.8 8.5 17.8 Z" fill={color} />
        <path d="M 5.9 20.6 L 18.1 20.6 A 0.4 0.4 0 0 1 18.1 21.4 L 5.9 21.4 A 0.4 0.4 0 0 1 5.9 20.6 Z" fill={color} />
      </svg>
    );
  },
);

export default TrophyIcon;
