import { RelativeTimeCard } from "../registry/default/components/ui/RelativeTimeCard";

export const Default = () => <RelativeTimeCard date={new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)} />;
