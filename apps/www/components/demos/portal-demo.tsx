import { useState } from "react";
import { Portal } from "@/components/ui/Portal";

export const PortalDemo = () => {
  const [target, setTarget] = useState<HTMLDivElement | null>(null);
  return (
    <div className="flex flex-col gap-0.5">
      <p className="m-0 text-gray-11">The line below is rendered through a portal.</p>
      <div ref={setTarget} className="min-h-6 rounded-sm border border-dashed border-gray-7 p-1" />
      <Portal container={target}>
        <span>Portaled into the frame</span>
      </Portal>
    </div>
  );
};