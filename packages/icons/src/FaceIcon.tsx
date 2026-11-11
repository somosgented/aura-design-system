import * as React from "react";
import type { IconProps } from "./types";

export const FaceIcon = React.forwardRef<SVGSVGElement, IconProps>(
  function FaceIcon({ color = "currentColor", ...props }, forwardedRef) {
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
        <path d="M 12 1.375 C 17.868 1.375 22.625 6.132 22.625 12 C 22.625 17.868 17.868 22.625 12 22.625 C 6.132 22.625 1.375 17.868 1.375 12 C 1.375 6.132 6.132 1.375 12 1.375 M 12 2.125 C 6.546 2.125 2.125 6.546 2.125 12 C 2.125 17.454 6.546 21.875 12 21.875 C 17.454 21.875 21.875 17.454 21.875 12 C 21.875 6.546 17.454 2.125 12 2.125 Z" fill={color} />
        <path d="M 8.75 8.45 C 9.297 8.45 9.7 8.853 9.7 9.4 L 9.7 10.1 C 9.7 10.647 9.297 11.05 8.75 11.05 C 8.203 11.05 7.8 10.647 7.8 10.1 L 7.8 9.4 C 7.8 8.853 8.203 8.45 8.75 8.45 Z" fill={color} />
        <path d="M 15.25 8.45 C 15.797 8.45 16.2 8.853 16.2 9.4 L 16.2 10.1 C 16.2 10.647 15.797 11.05 15.25 11.05 C 14.703 11.05 14.3 10.647 14.3 10.1 L 14.3 9.4 C 14.3 8.853 14.703 8.45 15.25 8.45 Z" fill={color} />
        <path d="M 7.597 14.583 A 5.375 5.375 0 0 0 16.403 14.583 A 0.375 0.375 0 0 0 15.789 14.153 A 4.625 4.625 0 0 1 8.211 14.153 A 0.375 0.375 0 0 0 7.597 14.583 Z" fill={color} />
      </svg>
    );
  },
);

export default FaceIcon;
