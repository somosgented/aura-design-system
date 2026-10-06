import { Marquee } from "../registry/default/components/ui/Marquee";

export const Default = () => (
  <Marquee>
    <span className="rounded-sm bg-accent-3 px-1 py-0.5">Color</span>
    <span className="rounded-sm bg-gray-3 px-1 py-0.5">Type</span>
    <span className="rounded-sm bg-accent-3 px-1 py-0.5">Space</span>
    <span className="rounded-sm bg-gray-3 px-1 py-0.5">Motion</span>
  </Marquee>
);
