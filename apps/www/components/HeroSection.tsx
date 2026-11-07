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

const INIT_COMMAND = "pnpm dlx @aura-design/cli@latest init";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center gap-2 px-2 py-5 text-center md:px-3 md:py-8">
      <div className="flex max-w-3xl flex-col items-center gap-1">
        <h1 className="h1 tracking-tight text-accent-11">
          An agentic design system.
          <br className="hidden md:block" /> With Aura, the soul is yours.
        </h1>
        <p className="p text-gray-11">
          Aura is a shared source of truth for people and coding agents. You
          browse the components. An agent reads the tokens, the rules, and the
          real component source, then builds product UI from those files.
        </p>
      </div>

      <div className="flex w-full flex-col gap-1 sm:w-auto sm:flex-row">
        <Button size="lg" className="w-full sm:w-auto" asChild>
          <Link href="/docs">Get started</Link>
        </Button>
        <Button variant="pill" size="lg" className="w-full sm:w-auto" asChild>
          <Link href="/docs/rules">Rules</Link>
        </Button>
      </div>

      <CodeBlock className="w-full max-w-2xl min-w-0 text-left">
        <CodeBlockHeader>
          <CodeBlockTitle>Install</CodeBlockTitle>
          <CodeBlockActions>
            <CodeBlockCopyButton value={INIT_COMMAND} />
          </CodeBlockActions>
        </CodeBlockHeader>
        <CodeBlockContent wrap>{INIT_COMMAND}</CodeBlockContent>
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
