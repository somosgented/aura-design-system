import { SideSheet, SideSheetMain, SideSheetPanel } from "@/components/ui/SideSheet";

export const SideSheetDemo = () => {
  return (
    <div className="h-24 overflow-hidden rounded-sm border border-gray-6">
      <SideSheet>
        <SideSheetMain>
          <div className="bg-gray-2 p-1.5">
            <p className="m-0">Page content stays beside the panel.</p>
          </div>
        </SideSheetMain>
        <SideSheetPanel label="Details">
          <p className="m-0 font-medium">Details</p>
          <p className="m-0">No overlay. The panel sits next to the content.</p>
        </SideSheetPanel>
      </SideSheet>
    </div>
  );
};