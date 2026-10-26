import {
  BookmarkIcon,
  Component1Icon,
  MixerHorizontalIcon,
} from "@radix-ui/react-icons";

import AuraAesthetic from "@/components/AuraAesthetic";
import HeroSection from "@/components/HeroSection";
import HomeAgentic from "@/components/HomeAgentic";
import HomeDocSection from "@/components/HomeDocSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <HomeAgentic />
      <HomeDocSection
        title="Get started"
        description="Install Aura with the CLI, then see which file an agent should open before it writes UI."
        href="/docs"
        icon={<BookmarkIcon className="icon h4" />}
      />
      <HomeDocSection
        title="Rules"
        description="Always-on process rules, plus the Aura skill for color, type, spacing, and composition."
        href="/docs/rules"
        icon={<MixerHorizontalIcon className="icon h4" />}
      />
      <HomeDocSection
        title="Components"
        description="React you install and own. Radix behavior, Aura tokens, and variants instead of one-off restyles."
        href="/docs/components"
        icon={<Component1Icon className="icon h4" />}
      />
      <AuraAesthetic />
    </main>
  );
}
