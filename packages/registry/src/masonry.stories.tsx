import { Masonry, MasonryItem } from "../registry/default/components/ui/Masonry";

export const Default = () => (
  <Masonry>
    <MasonryItem>
      <div className="h-8">Color</div>
    </MasonryItem>
    <MasonryItem>
      <div className="h-12">Typography runs taller</div>
    </MasonryItem>
    <MasonryItem>
      <div className="h-6">Space</div>
    </MasonryItem>
    <MasonryItem>
      <div className="h-10">Motion</div>
    </MasonryItem>
  </Masonry>
);
