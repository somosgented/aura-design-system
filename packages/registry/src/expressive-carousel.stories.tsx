import {
  ExpressiveCarousel,
  ExpressiveCarouselItem,
} from "../registry/default/components/ui/ExpressiveCarousel";

const tones = ["bg-accent-3", "bg-accent-4", "bg-accent-5", "bg-gray-3", "bg-gray-4"];

export const Default = () => {
  return (
    <ExpressiveCarousel label="Featured">
      {tones.map((tone, index) => (
        <ExpressiveCarouselItem key={tone}>
          <div className={`flex h-16 items-end rounded-sm p-1 ${tone}`}>
            <span>Item {index + 1}</span>
          </div>
        </ExpressiveCarouselItem>
      ))}
    </ExpressiveCarousel>
  );
};
