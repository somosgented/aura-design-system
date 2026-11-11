import * as React from "react";
import type { IconProps } from "./types";

export const TrashIcon = React.forwardRef<SVGSVGElement, IconProps>(
  function TrashIcon({ color = "currentColor", ...props }, forwardedRef) {
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
        <path d="M 3.318 7.1523 L 5.631 23.5193 L 18.291 23.5193 L 20.604 7.1523" fill="none" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 1.5366 4.6156 L 23.1166 4.6156" fill="none" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 16.2521 4.7675 C 15.7391 2.8205 13.9751 1.4605 11.9611 1.4605 C 9.9471 1.4605 8.1821 2.8205 7.6691 4.7675 L 6.7211 4.5175 C 7.3481 2.1405 9.5031 0.4805 11.9611 0.4805 C 14.4191 0.4805 16.5741 2.1405 17.2001 4.5175 Z" fill={color} />
      </svg>
    );
  },
);

export default TrashIcon;
