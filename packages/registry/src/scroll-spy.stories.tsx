import { ScrollSpy } from "../registry/default/components/ui/ScrollSpy";

export const Default = () => (
  <div className="flex items-start gap-1">
    <ScrollSpy
      items={[
        { id: "spy-overview", label: "Overview" },
        { id: "spy-color", label: "Color" },
        { id: "spy-type", label: "Type" },
      ]}
    />
    <div className="flex min-w-0 flex-1 flex-col gap-1">
      <section id="spy-overview" className="h-16 rounded-sm bg-gray-3 p-1">
        Overview
      </section>
      <section id="spy-color" className="h-16 rounded-sm bg-accent-3 p-1">
        Color
      </section>
      <section id="spy-type" className="h-16 rounded-sm bg-gray-3 p-1">
        Type
      </section>
    </div>
  </div>
);
