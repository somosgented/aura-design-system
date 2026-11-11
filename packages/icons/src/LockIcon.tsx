import * as React from "react";
import type { IconProps } from "./types";

export const LockIcon = React.forwardRef<SVGSVGElement, IconProps>(
  function LockIcon({ color = "currentColor", ...props }, forwardedRef) {
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
        <path d="M 6 10 L 18 10 C 19.105 10 20 10.895 20 12 L 20 20 C 20 21.105 19.105 22 18 22 L 6 22 C 4.895 22 4 21.105 4 20 L 4 12 C 4 10.895 4.895 10 6 10 Z M 6 10.85 C 5.365 10.85 4.85 11.365 4.85 12 L 4.85 20 C 4.85 20.635 5.365 21.15 6 21.15 L 18 21.15 C 18.635 21.15 19.15 20.635 19.15 20 L 19.15 12 C 19.15 11.365 18.635 10.85 18 10.85 Z" fill={color} />
        <path d="M 7 10 L 7 7 C 7 4.239 9.239 2 12 2 C 14.761 2 17 4.239 17 7 L 17 10 L 16.15 10 L 16.15 7 C 16.15 4.708 14.292 2.85 12 2.85 C 9.708 2.85 7.85 4.708 7.85 7 L 7.85 10 Z" fill={color} />
        <path d="M 12 13.7 C 12.718 13.7 13.3 14.282 13.3 15 C 13.3 15.52 12.995 15.968 12.425 16.18 L 12.425 18.1 C 12.425 18.335 12.235 18.525 12 18.525 C 11.765 18.525 11.575 18.335 11.575 18.1 L 11.575 16.18 C 11.005 15.968 10.7 15.52 10.7 15 C 10.7 14.282 11.282 13.7 12 13.7 Z" fill={color} />
      </svg>
    );
  },
);

export default LockIcon;
