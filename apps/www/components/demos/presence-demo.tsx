import { Presence } from "@/components/ui/Presence";

export const PresenceDemo = () => (
  <Presence present>
    <div className="rounded-sm bg-accent-3 p-1">Visible while present</div>
  </Presence>
)