import * as React from "react";
import type { IconProps } from "./types";

export const FilterIcon = React.forwardRef<SVGSVGElement, IconProps>(
  function FilterIcon({ color = "currentColor", ...props }, forwardedRef) {
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
        <path d="M 2.4 2.6 L 21.6 2.6 C 22.3 2.6 22.65 3.2 22.2 3.75 L 14.4 12.2 L 14.4 18.7 C 14.4 18.95 14.3 19.1 14.1 19.2 L 10.2 21.55 C 9.9 21.75 9.6 21.6 9.6 21.25 L 9.6 12.2 L 1.8 3.75 C 1.35 3.2 1.7 2.6 2.4 2.6 Z M 3.31 3.4 L 10.4 11.91 L 10.4 20.41 L 13.6 18.54 L 13.6 11.91 L 20.69 3.4 Z" fill={color} />
      </svg>
    );
  },
);

export default FilterIcon;
