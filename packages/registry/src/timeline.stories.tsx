import { Timeline, TimelineItem } from "../registry/default/components/ui/Timeline";

export const Default = () => (
  <Timeline>
    <TimelineItem title="Seed" time="09:00">
      Pick a single color.
    </TimelineItem>
    <TimelineItem title="Scale" time="09:10">
      Build the twelve steps.
    </TimelineItem>
    <TimelineItem title="Ship" time="09:30">
      Components read the same tokens.
    </TimelineItem>
  </Timeline>
);
