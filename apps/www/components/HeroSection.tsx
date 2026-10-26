import Link from "next/link";
import { AccessibilityIcon, TokensIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/Button";
import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockHeader,
  CodeBlockTitle,
} from "@/components/ui/CodeBlock";
import { Kbd } from "@/components/ui/Kbd";

const INIT_COMMAND = "pnpm dlx @aura-design/cli@latest init";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center gap-2 px-1.5 py-6 text-center md:py-8">
      <div className="flex max-w-3xl flex-col items-center gap-1">
        <h1 className="h1 tracking-tight text-accent-11">
          An agentic design system.
          <br className="hidden md:block" /> With Aura, The Soul is Yours
        </h1>
        <p className="p text-gray-11">
          Aura is a shared source of truth for people and coding agents. You
          browse the components. An agent reads the tokens, the rules, and the
          real component source, then builds product UI from those files.
        </p>
      </div>

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

      <CodeBlock>
        <CodeBlockHeader>
          <CodeBlockTitle>Install</CodeBlockTitle>
          <CodeBlockActions>
            <CodeBlockCopyButton value={INIT_COMMAND} />
          </CodeBlockActions>
        </CodeBlockHeader>
        <CodeBlockContent>{INIT_COMMAND}</CodeBlockContent>
      </CodeBlock>

      <div className="flex flex-col items-center gap-1 text-sm text-gray-11 md:flex-row">
        <div className="flex items-center gap-0.5">
          <AccessibilityIcon className="icon" />
          <span>Accessible Radix components</span>
        </div>
        <div className="hidden h-1 w-px bg-gray-6 md:block" />
        <div className="flex items-center gap-0.5">
          <TokensIcon className="icon" />
          <span>Tokens and rules agents follow</span>
        </div>
      </div>
    </div>
  );
}
