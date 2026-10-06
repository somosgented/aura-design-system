import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../registry/default/components/ui/Resizable";

export const Default = () => {
  return (
    <div className="h-16 w-full overflow-hidden rounded-md border border-gray-6">
    <ResizablePanelGroup direction="horizontal" className="h-full">
      <ResizablePanel defaultSize={50} minSize={20}>
        <div className="flex h-full items-center justify-center p-1 text-sm text-gray-12">
          One
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50} minSize={20}>
        <div className="flex h-full items-center justify-center p-1 text-sm text-gray-12">
          Two
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
    </div>
  );
};

export const Vertical = () => {
  return (
    <div className="h-16 w-full overflow-hidden rounded-md border border-gray-6">
    <ResizablePanelGroup direction="vertical" className="h-full">
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-1 text-sm">
          Top
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-1 text-sm">
          Bottom
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
    </div>
  );
};
