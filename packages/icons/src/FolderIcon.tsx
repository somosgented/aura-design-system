import * as React from "react";
import type { IconProps } from "./types";

export const FolderIcon = React.forwardRef<SVGSVGElement, IconProps>(
  function FolderIcon({ color = "currentColor", ...props }, forwardedRef) {
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
        <path d="M 3 3.5 L 9.2 3.5 C 9.5 3.5 9.8 3.65 10 3.9 L 11.4 5.5 L 21 5.5 C 21.83 5.5 22.5 6.17 22.5 7 L 22.5 19 C 22.5 19.83 21.83 20.5 21 20.5 L 3 20.5 C 2.17 20.5 1.5 19.83 1.5 19 L 1.5 5 C 1.5 4.17 2.17 3.5 3 3.5 Z M 3 4.3 L 9.1 4.3 C 9.2 4.3 9.3 4.35 9.38 4.43 L 11.05 6.3 L 21 6.3 C 21.39 6.3 21.7 6.61 21.7 7 L 21.7 19 C 21.7 19.39 21.39 19.7 21 19.7 L 3 19.7 C 2.61 19.7 2.3 19.39 2.3 19 L 2.3 5 C 2.3 4.61 2.61 4.3 3 4.3 Z" fill={color} />
        <path d="M 2.3 8.6 L 21.7 8.6 L 21.7 9.4 L 2.3 9.4 Z" fill={color} />
      </svg>
    );
  },
);

export default FolderIcon;
