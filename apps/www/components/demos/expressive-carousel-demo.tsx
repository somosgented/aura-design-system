import {
  ExpressiveCarousel,
  ExpressiveCarouselItem,
} from "@/components/ui/ExpressiveCarousel";

const tones = ["bg-accent-4", "bg-accent-5", "bg-accent-6", "bg-accent-7", "bg-accent-8"];


export const ExpressiveCarouselDemo = () => {
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