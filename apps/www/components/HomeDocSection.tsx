import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/Button";
import { cn } from "@/utils/class-names";

type HomeDocSectionProps = {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  className?: string;
};

export default function HomeDocSection({
  title,
  description,
  href,
  icon,
  className,
}: HomeDocSectionProps) {
  return (
    <div className={cn("flex flex-col gap-1 p-2", className)}>
      <div className="flex items-start gap-1">
        <span className="shrink-0 text-gray-11" aria-hidden>
          {icon}
        </span>
        <div className="flex flex-col gap-0.5">
          <h3 className="h5 text-gray-12">{title}</h3>
          <p className="p text-gray-11">{description}</p>
        </div>
      </div>
      <Button variant="pill" asChild>
        <Link href={href}>
          View
          <ArrowRightIcon className="icon" />
        </Link>
      </Button>
    </div>
  );
}
