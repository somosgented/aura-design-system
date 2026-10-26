import Link from "next/link";
import {
  BookmarkIcon,
  Component1Icon,
  MixerHorizontalIcon,
} from "@radix-ui/react-icons";

import AuraAesthetic from "@/components/AuraAesthetic";
import { HomeBand } from "@/components/home/HomeBand";
import HeroSection from "@/components/HeroSection";
import HomeAgentic from "@/components/HomeAgentic";
import HomeDocSection from "@/components/HomeDocSection";
import { Button } from "@/components/ui/Button";
import { Kbd } from "@/components/ui/Kbd";
import {
  Stat,
  StatDescription,
  StatLabel,
  StatValue,
} from "@/components/ui/Stat";
import { cn } from "@/utils/class-names";

const features = [
  {
    title: "Get started",
    description:
      "Install Aura with the CLI, then see which file an agent should open before it writes UI.",
    href: "/docs",
    icon: <BookmarkIcon className="icon h4" />,
  },
  {
    title: "Rules",
    description:
      "Always-on process rules, plus the Aura skill for color, type, spacing, and composition.",
    href: "/docs/rules",
    icon: <MixerHorizontalIcon className="icon h4" />,
  },
  {
    title: "Components",
    description:
      "React you install and own. Radix behavior, Aura tokens, and variants instead of one-off restyles.",
    href: "/docs/components",
    icon: <Component1Icon className="icon h4" />,
  },
] as const;

const faqs = [
  {
    q: "Which file should an agent open first?",
    a: "In this repository, AGENTS.md, then DESIGN.md. In an app, DESIGN.md, .agents/rules, and the skill for the job. The CLI installs those files.",
  },
  {
    q: "Does Aura replace shadcn?",
    a: "No. Aura is a shadcn-mode registry. You copy source into the app and pull updates with the CLI. Aura Keep still wins on icons, forms, spacing, and typography.",
  },
  {
    q: "Where do the colors come from?",
    a: "Twelve accent steps and twelve gray steps. Primary maps to accent-9. Body copy is gray-12. Muted metadata is gray-11. The playground below is the live ramp.",
  },
  {
    q: "What does the 13px grid mean?",
    a: "Tailwind spacing uses --spacing: 13px. p-4 is 52px. Controls stay at least 17px so iOS Safari does not zoom on focus.",
  },
] as const;

export default function HomePage() {
  return (
    <main>
      <HomeBand>
        <p className="p px-1.5 py-1 text-center text-gray-12">
          <span className="text-accent-11">News:</span> Tokens, rules, and
          registry components stay on one path.{" "}
          <Link
            href="/docs"
            className="text-accent-11 underline underline-offset-2"
          >
            Read the docs
          </Link>
        </p>
      </HomeBand>

      <HomeBand hero padded={false}>
        <HeroSection />
      </HomeBand>

      <HomeAgentic />

      <HomeBand padded={false}>
        <div className="flex flex-col gap-1 border-b border-gray-6 p-2 md:flex-row md:items-end md:justify-between">
          <div className="flex max-w-3xl flex-col gap-0.5">
            <h2 className="h2 text-gray-12">Aura Just Ships</h2>
            <p className="p text-gray-11">
              Powerful out of the box. Install the registry, then let an agent
              read the same files you browse here.
            </p>
          </div>
          <Button variant="pill" asChild>
            <Link href="/docs">View docs</Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-3">
          {features.map((feature, index) => (
            <HomeDocSection
              key={feature.title}
              title={feature.title}
              description={feature.description}
              href={feature.href}
              icon={feature.icon}
              className={cn(
                index > 0 && "border-t border-gray-6 md:border-t-0 md:border-l"
              )}
            />
          ))}
        </div>
      </HomeBand>

      <HomeBand graph>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col items-center gap-1 text-center">
            <h2 className="h2 text-accent-11">Twelve by twelve</h2>
            <p className="p max-w-3xl text-gray-11">
              Accent and gray ramps, a 13px spacing unit, and a 17px control
              floor. The numbers are the system.
            </p>
          </div>
          <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-4">
            <Stat>
              <StatLabel>Accent</StatLabel>
              <StatValue>12</StatValue>
              <StatDescription>Steps from canvas to text</StatDescription>
            </Stat>
            <Stat>
              <StatLabel>Gray</StatLabel>
              <StatValue>12</StatValue>
              <StatDescription>The same roles, neutral</StatDescription>
            </Stat>
            <Stat>
              <StatLabel>Spacing</StatLabel>
              <StatValue>13px</StatValue>
              <StatDescription>One unit. p-4 is 52px</StatDescription>
            </Stat>
            <Stat>
              <StatLabel>Controls</StatLabel>
              <StatValue>17px</StatValue>
              <StatDescription>Floor on every input</StatDescription>
            </Stat>
          </div>
        </div>
      </HomeBand>

      <HomeBand>
        <AuraAesthetic />
      </HomeBand>

      <HomeBand>
        <div className="flex flex-col gap-2">
          <h2 className="h2 text-center text-gray-12">
            Frequently asked questions
          </h2>
          <div className="mx-auto flex w-full max-w-3xl flex-col gap-2">
            {faqs.map((faq) => (
              <div key={faq.q} className="flex flex-col gap-0.5">
                <h3 className="h4 text-gray-12">{faq.q}</h3>
                <p className="p text-gray-11">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </HomeBand>

      <HomeBand hero>
        <div className="flex flex-col items-center gap-1.5 py-4 text-center">
          <h2 className="h2 text-accent-11">Daily UI with Aura</h2>
          <p className="p text-gray-11">Build at the speed of reading.</p>
          <div className="flex flex-col items-center gap-1 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/docs">
                Get started
                <Kbd>G</Kbd>
              </Link>
            </Button>
            <Button variant="pill" size="lg" asChild>
              <Link href="/docs/rules">
                Rules
                <Kbd>R</Kbd>
              </Link>
            </Button>
          </div>
          <p className="text-sm text-gray-11">
            Registry-first. You own the source.
          </p>
        </div>
      </HomeBand>
    </main>
  );
}
