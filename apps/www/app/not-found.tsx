import type { Metadata } from "next";
import NotFound from "@/components/NotFound";

export const metadata: Metadata = {
  title: "404",
};

export default function RootNotFound() {
  return (
    <main className="flex-1">
      <NotFound />
    </main>
  );
}
