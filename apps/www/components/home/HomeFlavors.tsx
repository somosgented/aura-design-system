import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, ArrowTopRightIcon, PlusIcon } from "@radix-ui/react-icons";

import { HomeBand } from "@/components/home/HomeBand";
import { Button } from "@/components/ui/Button";

const GALLERY_URL = "https://design-md.auradesignsystem.com";

const flavors = [
  { slug: "sharpmint", name: "Sharpmint", mood: "Ice-blue fields, square split-cell actions, an open ledger" },
  { slug: "stillfield", name: "Stillfield", mood: "Warm paper, drifting tiles, one light headline" },
  { slug: "narc", name: "Narc", mood: "Grainy blue bands, scalloped edges, candy windows" },
  { slug: "bauhaus", name: "Bauhaus", mood: "Muted primaries, ink rules, six geometric shapes" },
  { slug: "merchantry", name: "Merchantry", mood: "Night stages, electric lime, huge tight type" },
  { slug: "slipstream", name: "Slipstream", mood: "A flowing gradient, navy ink, layered cards" },
  { slug: "blocksmith", name: "Blocksmith", mood: "Heavy type, dotted canvas, pages built from blocks" },
] as const;

export function HomeFlavors() {
  return (
    <HomeBand padded={false}>
      <div className="flex flex-col gap-1 border-b border-gray-6 p-2 md:flex-row md:items-end md:justify-between md:p-3">
        <div className="flex max-w-3xl flex-col gap-0.5">
          <h2 className="h2 text-gray-12">DESIGN.md flavors</h2>
          <p className="p text-gray-11">
            Themes over Aura. Each flavor changes color, type, radius and voice
            while the grid, components and accessibility stay Aura. Copy a link,
            tell your agent{" "}
            <code className="font-mono text-sm text-gray-12">
              Apply this design: &lt;link&gt;
            </code>
            , and it restyles your app.
          </p>
        </div>
        <div className="flex flex-wrap gap-1 md:shrink-0">
          <Button variant="fill" asChild>
            <a href={GALLERY_URL}>
              Open the gallery
              <ArrowTopRightIcon className="icon" />
            </a>
          </Button>
          <Button variant="pill" asChild>
            <Link href="/docs/rules/design-md-flavors">How it works</Link>
          </Button>
        </div>
      </div>
      <ul className="grid gap-2 p-2 sm:grid-cols-2 md:p-3 lg:grid-cols-4">
        {flavors.map((flavor) => (
          <li key={flavor.slug}>
            <a
              href={`${GALLERY_URL}/designs/${flavor.slug}/`}
              className="group flex h-full flex-col gap-1 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-8"
            >
              <span className="relative block aspect-video overflow-hidden rounded-md border border-gray-6 bg-gray-3">
                <Image
                  src={`/design-md/${flavor.slug}.webp`}
                  alt={`${flavor.name} flavor applied to an Aura page`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-300 ease-out motion-safe:group-hover:scale-[1.02]"
                />
              </span>
              <span className="flex items-center justify-between gap-1">
                <span className="h6 text-gray-12">{flavor.name}</span>
                <ArrowRightIcon
                  className="icon text-gray-11 transition-transform duration-200 motion-safe:group-hover:translate-x-0.5"
                  aria-hidden
                />
              </span>
              <span className="text-sm text-gray-11">{flavor.mood}</span>
            </a>
          </li>
        ))}
        <li>
          <Link
            href="/docs/rules/design-md-flavors#generate-a-flavor"
            className="group flex h-full min-h-full flex-col justify-between gap-1 rounded-md border border-dashed border-gray-7 bg-gray-2 p-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-8 hover:bg-gray-3"
          >
            <span className="flex size-3 items-center justify-center rounded-md bg-accent-3 text-accent-11">
              <PlusIcon className="icon" aria-hidden />
            </span>
            <span className="flex flex-col gap-0.5">
              <span className="h6 text-gray-12">Make your own</span>
              <span className="text-sm text-gray-11">
                Paste a DESIGN.md, a site or a brief. The generate-design-md
                skill adapts it to Aura.
              </span>
            </span>
          </Link>
        </li>
      </ul>
    </HomeBand>
  );
}
