import * as React from "react";
import type { IconProps } from "./types";

export const CheckIcon = React.forwardRef<SVGSVGElement, IconProps>(
  function CheckIcon({ color = "currentColor", ...props }, forwardedRef) {
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
        <path d="M 2.6464 12.8536 L 9 19.2071 L 21.3536 6.8536 A 0.5 0.5 0 0 0 20.6464 6.1464 L 9 17.7929 L 3.3536 12.1464 A 0.5 0.5 0 0 0 2.6464 12.8536 Z" fill={color} />
      </svg>
    );
  },
);

export default CheckIcon;
