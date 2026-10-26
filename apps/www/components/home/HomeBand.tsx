import { cn } from "@/utils/class-names";

type HomeBandProps = {
  children: React.ReactNode;
  graph?: boolean;
  hero?: boolean;
  stage?: boolean;
  padded?: boolean;
  className?: string;
  columnClassName?: string;
};

export function HomeBand({
  children,
  graph = false,
  hero = false,
  stage = false,
  padded = true,
  className,
  columnClassName,
}: HomeBandProps) {
  return (
    <section
      className={cn(
        "home-band",
        graph && "home-graph",
        hero && "home-hero",
        stage && "home-stage",
        className
      )}
    >
      <div
        className={cn(
          "home-column",
          padded && "p-2 md:p-3",
          columnClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
