import { CompareSlider } from "../registry/default/components/ui/CompareSlider";

export const Default = () => (
  <CompareSlider
    before={
      <div className="flex h-full items-center justify-center bg-accent-9 text-accent-contrast">Before</div>
    }
    after={<div className="flex h-full items-center justify-center bg-gray-4">After</div>}
  />
);
