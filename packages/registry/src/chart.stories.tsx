import { AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartArea,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "../registry/default/components/ui/Chart";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export const Default = () => (
  <ChartContainer config={chartConfig} label="Desktop visitors" className="w-full">
    <AreaChart accessibilityLayer data={chartData} margin={{ top: 13, right: 13, left: 13, bottom: 0 }}>
      <CartesianGrid vertical={false} stroke="var(--gray-6)" strokeDasharray="0" />
      <XAxis
        dataKey="month"
        tickLine={false}
        axisLine={false}
        tickMargin={13}
        tick={{ fontSize: 13, fill: "var(--gray-11)" }}
        tickFormatter={(value: string) => value.slice(0, 3)}
      />
      <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
      <ChartArea
        dataKey="desktop"
        type="natural"
        fill="var(--color-desktop)"
        fillOpacity={0.4}
        stroke="var(--color-desktop)"
        strokeWidth={2}
      />
    </AreaChart>
  </ChartContainer>
);
