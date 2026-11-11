import * as React from "react";
import type { IconProps } from "./types";

export const GroupIcon = React.forwardRef<SVGSVGElement, IconProps>(
  function GroupIcon({ color = "currentColor", ...props }, forwardedRef) {
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
        <path d="M 12 5 A 3.6 3.6 0 1 1 12 12.2 A 3.6 3.6 0 1 1 12 5 Z M 12 5.75 A 2.85 2.85 0 1 0 12 11.45 A 2.85 2.85 0 1 0 12 5.75 Z" fill={color} />
        <path d="M 6.2 21.8 L 17.8 21.8 L 17.8 17.2 A 3.4 3.4 0 0 0 14.4 13.8 L 9.6 13.8 A 3.4 3.4 0 0 0 6.2 17.2 Z M 6.95 21.05 L 6.95 17.2 A 2.65 2.65 0 0 1 9.6 14.55 L 14.4 14.55 A 2.65 2.65 0 0 1 17.05 17.2 L 17.05 21.05 Z" fill={color} />
        <path d="M 5 2.8 A 2.8 2.8 0 1 1 5 8.4 A 2.8 2.8 0 1 1 5 2.8 Z M 5 3.55 A 2.05 2.05 0 1 0 5 7.65 A 2.05 2.05 0 1 0 5 3.55 Z" fill={color} />
        <path d="M 19 2.8 A 2.8 2.8 0 1 1 19 8.4 A 2.8 2.8 0 1 1 19 2.8 Z M 19 3.55 A 2.05 2.05 0 1 0 19 7.65 A 2.05 2.05 0 1 0 19 3.55 Z" fill={color} />
        <path d="M 6.3 9.625 L 4.6 9.625 A 2.975 2.975 0 0 0 1.625 12.6 L 1.625 16.8 A 0.375 0.375 0 0 0 2.375 16.8 L 2.375 12.6 A 2.225 2.225 0 0 1 4.6 10.375 L 6.3 10.375 A 0.375 0.375 0 0 0 6.3 9.625 Z" fill={color} />
        <path d="M 17.7 9.625 L 19.4 9.625 A 2.975 2.975 0 0 1 22.375 12.6 L 22.375 16.8 A 0.375 0.375 0 0 1 21.625 16.8 L 21.625 12.6 A 2.225 2.225 0 0 0 19.4 10.375 L 17.7 10.375 A 0.375 0.375 0 0 1 17.7 9.625 Z" fill={color} />
      </svg>
    );
  },
);

export default GroupIcon;
