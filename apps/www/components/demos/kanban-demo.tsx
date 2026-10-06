import { useState } from "react";
import { Kanban, type KanbanColumn } from "@/components/ui/Kanban";

const initial: KanbanColumn[] = [
  { id: "ready", title: "Ready", cards: [{ id: "seed", title: "Seed color" }] },
  { id: "doing", title: "Doing", cards: [{ id: "type", title: "Type scale" }] },
  { id: "done", title: "Done", cards: [{ id: "space", title: "Spacing" }] },
];


export const KanbanDemo = () => {
  const [columns, setColumns] = useState(initial);
  return (
    <Kanban
      columns={columns}
      onMove={(cardId, columnId) => {
        setColumns((current) => {
          const card = current.flatMap((column) => column.cards).find((item) => item.id === cardId);
          if (!card) return current;
          return current.map((column) => ({
            ...column,
            cards:
              column.id === columnId
                ? [...column.cards.filter((item) => item.id !== cardId), card]
                : column.cards.filter((item) => item.id !== cardId),
          }));
        });
      }}
    />
  );
};