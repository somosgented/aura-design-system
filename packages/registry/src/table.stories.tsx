import {
  ResponsiveTableCard,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../registry/default/components/ui/Table"

const headers = [
  { id: "component", header: "Component" },
  { id: "status", header: "Status" },
  { id: "checks", header: "Checks" },
]

const rows = [
  {
    id: "badge",
    cells: [
      { id: "badge-component", content: "Badge" },
      { id: "badge-status", content: "Ready" },
      { id: "badge-checks", content: "12" },
    ],
  },
  {
    id: "input",
    cells: [
      { id: "input-component", content: "Input" },
      { id: "input-status", content: "In review" },
      { id: "input-checks", content: "8" },
    ],
  },
  {
    id: "textarea",
    cells: [
      { id: "textarea-component", content: "Textarea" },
      { id: "textarea-status", content: "Ready" },
      { id: "textarea-checks", content: "10" },
    ],
  },
]

export function Default() {
  return (
    <div className="w-full">
      <ResponsiveTableCard headers={headers} rows={rows} />
      <Table>
        <TableCaption>Recent Aura component reviews.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Component</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Checks</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Badge</TableCell>
            <TableCell>Ready</TableCell>
            <TableCell className="text-right">12</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Input</TableCell>
            <TableCell>In review</TableCell>
            <TableCell className="text-right">8</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Textarea</TableCell>
            <TableCell>Ready</TableCell>
            <TableCell className="text-right">10</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
