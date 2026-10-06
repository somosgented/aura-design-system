import { VisuallyHidden } from "@/components/ui/VisuallyHidden";

export const VisuallyHiddenDemo = () => (
  <button type="button" className="rounded-sm border border-gray-7 px-1 py-0.5">
    Save
    <VisuallyHidden> the current theme</VisuallyHidden>
  </button>
)