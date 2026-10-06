import { RelativeTimeCard } from "@/components/ui/RelativeTimeCard";

export const RelativeTimeCardDemo = () => <RelativeTimeCard date={new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)} />;