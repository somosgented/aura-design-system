import * as React from "react";
import type { IconProps } from "./types";

export const EyeOpenIcon = React.forwardRef<SVGSVGElement, IconProps>(
  function EyeOpenIcon({ color = "currentColor", ...props }, forwardedRef) {
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
        <path d="M 16.0807 12.2375 C 16.0807 14.4915 14.2537 16.3185 11.9997 16.3185 C 9.7467 16.3185 7.9197 14.4915 7.9197 12.2375 C 7.9197 9.9835 9.7467 8.1565 11.9997 8.1565 C 14.2537 8.1565 16.0807 9.9835 16.0807 12.2375 Z" fill="none" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 0.1243 12.8258 C 0.8243 12.0798 5.0803 7.6928 11.9753 7.6818 C 18.8983 7.6708 23.1783 12.0828 23.8753 12.8258" fill="none" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  },
);

export default EyeOpenIcon;
