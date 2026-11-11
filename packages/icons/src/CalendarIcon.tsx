import * as React from "react";
import type { IconProps } from "./types";

export const CalendarIcon = React.forwardRef<SVGSVGElement, IconProps>(
  function CalendarIcon({ color = "currentColor", ...props }, forwardedRef) {
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
        <path d="M 4.2 3.6 L 19.8 3.6 A 2.6 2.6 0 0 1 22.4 6.2 L 22.4 19.8 A 2.6 2.6 0 0 1 19.8 22.4 L 4.2 22.4 A 2.6 2.6 0 0 1 1.6 19.8 L 1.6 6.2 A 2.6 2.6 0 0 1 4.2 3.6 Z M 4.2 4.4 A 1.8 1.8 0 0 0 2.4 6.2 L 2.4 19.8 A 1.8 1.8 0 0 0 4.2 21.6 L 19.8 21.6 A 1.8 1.8 0 0 0 21.6 19.8 L 21.6 6.2 A 1.8 1.8 0 0 0 19.8 4.4 Z" fill={color} />
        <path d="M 2.2 8.6 L 21.8 8.6 L 21.8 9.4 L 2.2 9.4 Z" fill={color} />
        <path d="M 6.6 1.6 A 0.4 0.4 0 0 1 7.4 1.6 L 7.4 6 A 0.4 0.4 0 0 1 6.6 6 Z" fill={color} />
        <path d="M 16.6 1.6 A 0.4 0.4 0 0 1 17.4 1.6 L 17.4 6 A 0.4 0.4 0 0 1 16.6 6 Z" fill={color} />
        <path d="M 6.6 12.2 L 7.4 12.2 A 0.4 0.4 0 0 1 7.8 12.6 L 7.8 13.4 A 0.4 0.4 0 0 1 7.4 13.8 L 6.6 13.8 A 0.4 0.4 0 0 1 6.2 13.4 L 6.2 12.6 A 0.4 0.4 0 0 1 6.6 12.2 Z" fill={color} />
        <path d="M 11.6 12.2 L 12.4 12.2 A 0.4 0.4 0 0 1 12.8 12.6 L 12.8 13.4 A 0.4 0.4 0 0 1 12.4 13.8 L 11.6 13.8 A 0.4 0.4 0 0 1 11.2 13.4 L 11.2 12.6 A 0.4 0.4 0 0 1 11.6 12.2 Z" fill={color} />
        <path d="M 16.6 12.2 L 17.4 12.2 A 0.4 0.4 0 0 1 17.8 12.6 L 17.8 13.4 A 0.4 0.4 0 0 1 17.4 13.8 L 16.6 13.8 A 0.4 0.4 0 0 1 16.2 13.4 L 16.2 12.6 A 0.4 0.4 0 0 1 16.6 12.2 Z" fill={color} />
        <path d="M 6.6 16.7 L 7.4 16.7 A 0.4 0.4 0 0 1 7.8 17.1 L 7.8 17.9 A 0.4 0.4 0 0 1 7.4 18.3 L 6.6 18.3 A 0.4 0.4 0 0 1 6.2 17.9 L 6.2 17.1 A 0.4 0.4 0 0 1 6.6 16.7 Z" fill={color} />
        <path d="M 11.6 16.7 L 12.4 16.7 A 0.4 0.4 0 0 1 12.8 17.1 L 12.8 17.9 A 0.4 0.4 0 0 1 12.4 18.3 L 11.6 18.3 A 0.4 0.4 0 0 1 11.2 17.9 L 11.2 17.1 A 0.4 0.4 0 0 1 11.6 16.7 Z" fill={color} />
        <path d="M 16.6 16.7 L 17.4 16.7 A 0.4 0.4 0 0 1 17.8 17.1 L 17.8 17.9 A 0.4 0.4 0 0 1 17.4 18.3 L 16.6 18.3 A 0.4 0.4 0 0 1 16.2 17.9 L 16.2 17.1 A 0.4 0.4 0 0 1 16.6 16.7 Z" fill={color} />
      </svg>
    );
  },
);

export default CalendarIcon;
