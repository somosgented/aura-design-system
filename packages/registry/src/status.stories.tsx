import { Status } from "../registry/default/components/ui/Status";

export const Default = () => (
  <div className="flex flex-col gap-0.5">
    <Status tone="online">Online</Status>
    <Status tone="away">Away</Status>
    <Status tone="busy">Busy</Status>
    <Status tone="offline">Offline</Status>
  </div>
);
