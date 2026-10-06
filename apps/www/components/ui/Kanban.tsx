"use client";

import * as React from "react";
import { cn } from "@/utils/class-names";

type KanbanCard = { id: string; title: string };
type KanbanColumn = { id: string; title: string; cards: KanbanCard[] };

function Kanban({
  className,
  columns,
  onMove,
  label = "Board",
}: {
  className?: string;
  columns: KanbanColumn[];
  onMove?: (cardId: string, columnId: string) => void;
  label?: string;
}) {
  return (
    <div role="group" aria-label={label} data-slot="kanban" className={cn("flex gap-1", className)}>
      {columns.map((column, columnIndex) => (
        <section key={column.id} aria-label={column.title} className="flex w-16 flex-col gap-0.5 rounded-sm bg-gray-2 p-0.5">
          <p className="m-0 px-0.5 font-medium text-gray-12">{column.title}</p>
          {column.cards.map((card) => {
            const previous = columns[columnIndex - 1];
            const next = columns[columnIndex + 1];
            return (
              <article key={card.id} className="rounded-sm border border-gray-6 bg-gray-1 p-0.5">
                <p className="m-0">{card.title}</p>
                <div className="mt-0.5 flex flex-wrap gap-0.5">
                  {previous ? (
                    <button
                      type="button"
                      className="inline-flex min-h-2 items-center whitespace-nowrap rounded-sm px-0.5 hover:bg-gray-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-8"
                      aria-label={`Move ${card.title} to ${previous.title}`}
                      onClick={() => onMove?.(card.id, previous.id)}
                    >
                      {`To ${previous.title}`}
                    </button>
                  ) : null}
                  {next ? (
                    <button
                      type="button"
                      className="inline-flex min-h-2 items-center whitespace-nowrap rounded-sm px-0.5 hover:bg-gray-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-8"
                      aria-label={`Move ${card.title} to ${next.title}`}
                      onClick={() => onMove?.(card.id, next.id)}
                    >
                      {`To ${next.title}`}
                    </button>
                  ) : null}
                </div>
              </article>
            );
          })}
        </section>
      ))}
    </div>
  );
}

export { Kanban };
export type { KanbanCard, KanbanColumn };
