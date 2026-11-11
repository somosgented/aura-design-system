import * as React from "react";
import type { IconProps } from "./types";

export const PencilIcon = React.forwardRef<SVGSVGElement, IconProps>(
  function PencilIcon({ color = "currentColor", ...props }, forwardedRef) {
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
        <path d="M 2.2617 17.8096 L 17.8097 2.2616 C 18.0977 1.9736 18.5637 1.9736 18.8517 2.2616 L 21.7387 5.1486 C 22.0257 5.4366 22.0257 5.9026 21.7387 6.1906 L 6.1907 21.7386 C 6.0527 21.8766 5.8647 21.9546 5.6697 21.9546 L 2.7827 21.9546 C 2.3757 21.9546 2.0457 21.6246 2.0457 21.2176 L 2.0457 18.3306 C 2.0457 18.1356 2.1237 17.9476 2.2617 17.8096" fill={color} />
        <path d="M 2.2617 17.8096 L 17.8097 2.2616 C 18.0977 1.9736 18.5637 1.9736 18.8517 2.2616 L 21.7387 5.1486 C 22.0257 5.4366 22.0257 5.9026 21.7387 6.1906 L 6.1907 21.7386 C 6.0527 21.8766 5.8647 21.9546 5.6697 21.9546 L 2.7827 21.9546 C 2.3757 21.9546 2.0457 21.6246 2.0457 21.2176 L 2.0457 18.3306 C 2.0457 18.1356 2.1237 17.9476 2.2617 17.8096 Z" fill="none" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  },
);

export default PencilIcon;
