import type { Metadata } from "next";
import Link from "next/link";

import { IconsGallery } from "@/components/icons/IconsGallery";
import { HomeBand } from "@/components/home/HomeBand";

export const metadata: Metadata = {
  title: "Icons",
  description:
    "Aura’s own 15×15 icon set. Browse the seed icons, copy the React import, and use className=\"icon\".",
};

export default function IconsPage() {
  return (
    <main>
      <HomeBand>
        <div className="flex flex-col gap-1">
          <h1 className="h1 text-gray-12">Icons</h1>
          <p className="p max-w-3xl text-gray-11">
            Aura’s icon package lives in{" "}
            <code className="text-gray-12">packages/icons</code> as{" "}
            <code className="text-gray-12">@aura-design/react-icons</code>. These
            glyphs come from the Aura sprite set (24×24). Add SVGs under{" "}
            <code className="text-gray-12">icons/</code>, run{" "}
            <code className="text-gray-12">pnpm generate-src</code>, then browse
            them here. Product UI still defaults to Radix until this set replaces
            it in{" "}
            <Link
              href="/docs/foundations/icons"
              className="text-accent-11 underline underline-offset-2"
            >
              Foundations → Icons
            </Link>
            .
          </p>
        </div>
      </HomeBand>

      <HomeBand>
        <IconsGallery />
      </HomeBand>
    </main>
  );
}
