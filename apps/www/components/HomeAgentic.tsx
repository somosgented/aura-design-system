import Link from "next/link";
import {
  Component1Icon,
  FileTextIcon,
  PersonIcon,
} from "@radix-ui/react-icons";

import { HomeBand } from "@/components/home/HomeBand";
import HomeProductStage from "@/components/home/HomeProductStage";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/Item";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  ResponsiveTableCard,
} from "@/components/ui/Table";
import { cn } from "@/utils/class-names";

const readers = [
  {
    title: "People",
    icon: PersonIcon,
    body: "Browse this site. Foundations record the decision behind a token. Component pages are the controls you install. The scales further down are the live accent and gray ramps.",
  },
  {
    title: "Agents",
    icon: FileTextIcon,
    body: "Start from a file. In this repository, open AGENTS.md, then DESIGN.md. In an app, open DESIGN.md, .cursor/rules, and the skill for the job. The CLI installs those files.",
  },
  {
    title: "One kit",
    icon: Component1Icon,
    body: "A registry button uses the same accent step, 13px spacing unit, and icon rule the docs describe. Guidance, tokens, and components stay on one path.",
  },
] as const;

const routes = [
  {
    job: "Install or retheme",
    open: "CLI",
    href: "/docs/cli",
  },
  {
    job: "Choose a color, size, or type step",
    open: "DESIGN.md and Foundations",
    href: "/docs/foundations",
  },
  {
    job: "Stay inside the guardrails",
    open: "Rules",
    href: "/docs/rules",
  },
  {
    job: "Pick a playbook, skill, or audit",
    open: "The agent harness",
    href: "/docs#agent-harness",
  },
  {
    job: "Use a control",
    open: "The registry component",
    href: "/docs/components",
  },
] as const;

const harness = [
  {
    title: "Aura files",
    body: "AGENTS.md in this repo, DESIGN.md, and .cursor/rules.",
    href: "/docs#own-files",
  },
  {
    title: "Aura skills",
    body: "Forms, visual lint, porting, the feature map, and Gemini brand images.",
    href: "/docs#consumer-skills",
  },
  {
    title: "Poteto mode",
    body: "Lauren Tan’s pstack playbooks. Marketplace plugin. /setup-pstack and /poteto-mode are not in this repo.",
    href: "/docs#poteto-mode",
  },
  {
    title: "gdp-ts",
    body: "Proof-carrying authz. Blueprint installs @gdp-ts/core and the Rauch skill.",
    href: "/docs#gdp-ts",
  },
  {
    title: "Feature map",
    body: "The only project note. Update it in the PR that changes the feature.",
    href: "/docs#feature-map",
  },
  {
    title: "Audits",
    body: "Emil’s design and motion reviews, and Vercel’s React performance review. Install for the audit. Leave them uncommitted.",
    href: "/docs#audits-you-install",
  },
] as const;

const routeHeaders = [
  { id: "job", header: "Job" },
  { id: "open", header: "Open" },
];

export default function HomeAgentic() {
  return (
    <>
      <HomeBand padded={false}>
        <div className="grid md:grid-cols-3">
          {readers.map((reader, index) => {
            const ReaderIcon = reader.icon;

            return (
              <div
                key={reader.title}
                className={cn(
                  "flex flex-col gap-1 p-2",
                  index > 0 && "border-t border-gray-6 md:border-t-0 md:border-l"
                )}
              >
                <div className="flex items-center gap-0.5">
                  <ReaderIcon className="icon h5 text-gray-11" aria-hidden />
                  <h3 className="h5 text-gray-12">{reader.title}</h3>
                </div>
                <p className="p text-gray-11">{reader.body}</p>
              </div>
            );
          })}
        </div>
      </HomeBand>

      <HomeBand stage padded={false} columnClassName="px-1.5 pb-0 pt-2">
        <HomeProductStage />
      </HomeBand>

      <HomeBand>
        <div className="flex flex-col gap-2">
          <div className="flex max-w-3xl flex-col gap-1">
            <h2 className="h2 text-gray-12">One kit, two readers</h2>
            <p className="p text-gray-11">
              Aura is an agentic design system for product UI. The decisions
              are written once. A person can read them here. A coding agent can
              follow them in the repo: the narrative spec, short rules, a skill
              when the job has steps, and React components that already use the
              tokens.
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="h4 text-gray-12">What to open</h3>
            <div className="border-y border-gray-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Job</TableHead>
                    <TableHead>Open</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {routes.map((route) => (
                    <TableRow key={route.job}>
                      <TableCell>{route.job}</TableCell>
                      <TableCell>
                        <Link
                          href={route.href}
                          className="text-accent-11 underline underline-offset-2"
                        >
                          {route.open}
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <ResponsiveTableCard
                headers={routeHeaders}
                rows={routes.map((route) => ({
                  id: route.job,
                  cells: [
                    { id: `${route.job}-job`, content: route.job },
                    {
                      id: `${route.job}-open`,
                      content: (
                        <Link
                          href={route.href}
                          className="text-accent-11 underline underline-offset-2"
                        >
                          {route.open}
                        </Link>
                      ),
                    },
                  ],
                }))}
              />
            </div>
          </div>
        </div>
      </HomeBand>

      <HomeBand graph>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <h2 className="h2 text-accent-11">Agent harness</h2>
            <p className="p max-w-3xl text-gray-11">
              Aura is a registry you install and own. The harness is public:
              files, skills, playbooks, and audits.
            </p>
          </div>
          <div className="grid gap-1 md:grid-cols-2 lg:grid-cols-3">
            {harness.map((layer, index) => (
              <div key={layer.title} className={index === 1 ? "home-hl" : undefined}>
                <Item variant="outline" asChild>
                  <Link href={layer.href}>
                    <ItemContent>
                      <ItemTitle>{layer.title}</ItemTitle>
                      <ItemDescription>{layer.body}</ItemDescription>
                    </ItemContent>
                  </Link>
                </Item>
              </div>
            ))}
          </div>
        </div>
      </HomeBand>
    </>
  );
}
