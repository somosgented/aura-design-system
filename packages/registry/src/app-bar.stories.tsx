import * as React from "react";
import { BellIcon } from "@radix-ui/react-icons";
import { AppBar } from "../registry/default/components/ui/AppBar";

export const Default = () => {
  return (
    <div className="overflow-hidden rounded-sm border border-gray-6">
      <AppBar size="small" title="Inbox">
        <button
          type="button"
          aria-label="Notifications"
          className="inline-flex size-3 items-center justify-center rounded-sm hover:bg-gray-3"
        >
          <BellIcon className="icon" />
        </button>
      </AppBar>
    </div>
  );
};

export const Medium = () => {
  return (
    <div className="overflow-hidden rounded-sm border border-gray-6">
      <AppBar size="medium" title="Inbox" />
    </div>
  );
};

export const Large = () => {
  const [elevated, setElevated] = React.useState(true);
  return (
    <div
      className="h-24 overflow-auto rounded-sm border border-gray-6"
      onScroll={(event) => setElevated(event.currentTarget.scrollTop > 0)}
    >
      <AppBar size="large" elevated={elevated} title="Inbox" />
      <div className="space-y-1 p-1.5">
        <p className="m-0">Scroll this panel. The bar picks up a shadow once content moves underneath it.</p>
        <p className="m-0">A second line keeps the preview tall enough to scroll.</p>
        <p className="m-0">A third line finishes the sample.</p>
      </div>
    </div>
  );
};
