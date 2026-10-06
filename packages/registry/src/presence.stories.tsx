import { Presence } from "../registry/default/components/ui/Presence";

export const Default = () => (
  <Presence present>
    <div className="rounded-sm bg-accent-3 p-1">Visible while present</div>
  </Presence>
);
