import Link from "next/link";
import {
  Component1Icon,
  FileTextIcon,
  PlayIcon,
} from "@radix-ui/react-icons";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Bubble, BubbleContent } from "@/components/ui/Bubble";
import {
  CodeBlock,
  CodeBlockContent,
  CodeBlockHeader,
  CodeBlockLine,
  CodeBlockTitle,
} from "@/components/ui/CodeBlock";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemTitle,
} from "@/components/ui/Item";
import { Kbd } from "@/components/ui/Kbd";
import {
  Message,
  MessageContent,
  MessageGroup,
  MessageHeader,
} from "@/components/ui/Message";
import { ScrollArea } from "@/components/ui/ScrollArea";
import { Separator } from "@/components/ui/Separator";

const files = [
  {
    title: "Button.tsx",
    description: "registry · accent-9",
    active: true,
  },
  {
    title: "DESIGN.md",
    description: "tokens · 12 + 12",
    active: false,
  },
  {
    title: "AGENTS.md",
    description: "rules · always on",
    active: false,
  },
  {
    title: "spacing.md",
    description: "grid · 13px",
    active: false,
  },
] as const;

export default function HomeProductStage() {
  return (
    <div className="relative flex flex-col gap-2 pt-5">
      <div className="absolute top-0 left-1/2 z-10 -translate-x-1/2">
        <Button variant="pill" size="sm" asChild>
          <Link href="/docs/components">
            <PlayIcon className="icon" />
            Watch components
            <Kbd>C</Kbd>
          </Link>
        </Button>
      </div>

      <div className="home-ide home-shadow h-32 overflow-hidden rounded-md border border-gray-6 bg-gray-2">
        <div className="home-ide-side hidden border-r border-gray-6 md:flex md:flex-col">
          <div className="flex items-center gap-1 border-b border-gray-6 bg-gray-3 px-1 py-0.5">
            <span className="size-0.5 rounded-full bg-danger" aria-hidden />
            <span className="size-0.5 rounded-full bg-warning" aria-hidden />
            <span className="size-0.5 rounded-full bg-success" aria-hidden />
            <span className="text-xs text-gray-11">Search files</span>
          </div>
          <div className="p-0.5">
          <ItemGroup>
            {files.map((file) => (
              <Item
                key={file.title}
                size="sm"
                variant={file.active ? "muted" : "default"}
              >
                {file.title.endsWith(".md") ? (
                  <FileTextIcon className="icon text-gray-11" />
                ) : (
                  <Component1Icon className="icon text-gray-11" />
                )}
                <ItemContent>
                  <ItemTitle>{file.title}</ItemTitle>
                  <ItemDescription>{file.description}</ItemDescription>
                </ItemContent>
              </Item>
            ))}
          </ItemGroup>
          </div>
        </div>

        <div className="flex min-h-0 min-w-0 flex-col border-r border-gray-6 bg-gray-2">
          <div className="flex items-center gap-1 border-b border-gray-6 px-1 py-0.5">
            <span className="text-sm text-gray-12">aura</span>
            <span className="text-xs text-gray-11">main</span>
            <Separator orientation="vertical" className="h-1" />
            <Badge variant="secondary">agent</Badge>
          </div>
          <ScrollArea className="min-h-0 flex-1">
            <div className="p-1">
              <MessageGroup>
              <Message>
                <MessageContent>
                  <MessageHeader>Reviewer</MessageHeader>
                  <Bubble variant="outline">
                    <BubbleContent>
                      Before you write UI, open DESIGN.md. Map the fill to
                      accent-9 and keep body copy on gray-12.
                    </BubbleContent>
                  </Bubble>
                </MessageContent>
              </Message>
              <p className="text-xs text-gray-11">Read DESIGN.md</p>
              <p className="text-xs text-gray-11">Read .agents/skills/aura</p>
              <Message>
                <MessageContent>
                  <MessageHeader>Aura</MessageHeader>
                  <Bubble variant="muted">
                    <BubbleContent>
                      Primary is accent-9. Spacing is 13px. Controls stay at
                      17px. The button already owns icon gap.
                    </BubbleContent>
                  </Bubble>
                </MessageContent>
              </Message>
              </MessageGroup>
            </div>
          </ScrollArea>
        </div>

        <div className="home-ide-code hidden min-h-0 min-w-0 flex-col lg:flex">
          <div className="border-b border-gray-6 px-1 py-0.5 text-sm text-gray-11">
            components / Button.tsx
          </div>
          <CodeBlock className="min-h-0 flex-1">
            <CodeBlockHeader>
              <CodeBlockTitle>registry/default/components</CodeBlockTitle>
            </CodeBlockHeader>
            <CodeBlockContent>
              <CodeBlockLine>
                <span className="text-accent-11">export function</span> Save() {"{"}
              </CodeBlockLine>
              <CodeBlockLine>
                {"  "}
                <span className="text-accent-11">return</span> (
              </CodeBlockLine>
              <CodeBlockLine variant="highlighted">
                {"    "}
                &lt;Button&gt;
              </CodeBlockLine>
              <CodeBlockLine variant="highlighted">
                {"      "}Save
              </CodeBlockLine>
              <CodeBlockLine variant="highlighted">
                {"    "}
                &lt;/Button&gt;
              </CodeBlockLine>
              <CodeBlockLine>
                {"  "})
              </CodeBlockLine>
              <CodeBlockLine>{"}"}</CodeBlockLine>
            </CodeBlockContent>
          </CodeBlock>
        </div>
      </div>
    </div>
  );
}
