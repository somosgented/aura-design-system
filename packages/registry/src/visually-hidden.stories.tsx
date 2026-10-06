import { VisuallyHidden } from "../registry/default/components/ui/VisuallyHidden";

export const Default = () => (
  <button type="button" className="rounded-sm border border-gray-7 px-1 py-0.5">
    Save
    <VisuallyHidden> the current theme</VisuallyHidden>
  </button>
);
