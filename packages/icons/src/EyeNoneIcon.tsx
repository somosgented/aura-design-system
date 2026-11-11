import * as React from "react";
import type { IconProps } from "./types";

export const EyeNoneIcon = React.forwardRef<SVGSVGElement, IconProps>(
  function EyeNoneIcon({ color = "currentColor", ...props }, forwardedRef) {
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
        <path d="M 16.1195 12.6635 C 16.1195 14.9385 14.2755 16.7825 11.9995 16.7825 C 9.7245 16.7825 7.8805 14.9385 7.8805 12.6635 C 7.8805 10.3885 9.7245 8.5435 11.9995 8.5435 C 14.2755 8.5435 16.1195 10.3885 16.1195 12.6635 Z" fill="none" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 0.0112 13.2574 C 0.7172 12.5044 5.0152 8.0754 11.9742 8.0644 C 18.9642 8.0534 23.2852 12.5074 23.9892 13.2574" fill="none" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 4.6804 19.5479 L 19.7764 4.4519" fill="none" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  },
);

export default EyeNoneIcon;
