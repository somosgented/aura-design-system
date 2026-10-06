"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";

const initial = [
  {
    id: "saved",
    tone: "Success",
    title: "Saved",
    description: "The care plan is up to date.",
  },
  {
    id: "error",
    tone: "Error",
    title: "Could not save",
    description: "Check the connection and try again.",
  },
];

export function ToastDemo() {
  const [items, setItems] = React.useState(initial);

  return (
    <div className="grid w-full max-w-xl gap-1">
      {items.length === 0 ? (
        <Button type="button" variant="pill" size="sm" className="w-fit" onClick={() => setItems(initial)}>
          Show toasts
        </Button>
      ) : null}
      {items.map((item) => (
        <div
          key={item.id}
          role="status"
          className="flex items-start justify-between gap-1 rounded-sm border border-gray-6 bg-gray-1 p-1"
        >
          <div>
            <p className="m-0 text-sm text-gray-11">{item.tone}</p>
            <p className="m-0 text-gray-12">{item.title}</p>
            <p className="m-0 text-gray-11">{item.description}</p>
          </div>
          <Button
            type="button"
            variant="pill"
            size="sm"
            onClick={() => setItems((current) => current.filter((entry) => entry.id !== item.id))}
          >
            Dismiss
          </Button>
        </div>
      ))}
    </div>
  );
}
