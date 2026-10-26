import Link from "next/link";
import {
  Component1Icon,
  FileTextIcon,
  PersonIcon,
} from "@radix-ui/react-icons";

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
    job: "Run a procedure",
    open: "The matching skill",
    href: "/docs#skills",
  },
  {
    job: "Use a control",
    open: "The registry component",
    href: "/docs/components",
  },
] as const;

export default function HomeAgentic() {
  return (
    <section className="pad border-t border-gray-6 px-2 md:px-3">
      <div className="smush flex flex-col gap-2">
        <div className="flex max-w-3xl flex-col gap-1">
          <h2 className="h2 font-bold text-gray-12">One kit, two readers</h2>
          <p className="p text-gray-11">
            Aura is an agentic design system for product UI. The decisions are
            written once. A person can read them here. A coding agent can
            follow them in the repo: the narrative spec, short rules, a skill
            when the job has steps, and React components that already use the
            tokens.
          </p>
        </div>

        <div className="grid gap-1.5 md:grid-cols-3">
          {readers.map((reader) => {
            const ReaderIcon = reader.icon;

            return (
              <div
                key={reader.title}
                className="flex flex-col gap-1 rounded-md border border-gray-6 bg-gray-2 p-1.5"
              >
                <div className="flex items-center gap-1">
                  <ReaderIcon className="icon h5 text-gray-11" aria-hidden />
                  <h3 className="h5 font-bold text-gray-12">{reader.title}</h3>
                </div>
                <p className="p text-gray-11">{reader.body}</p>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="h4 font-bold text-gray-12">What to open</h3>
          <div className="overflow-x-auto rounded-md border border-gray-6">
            <table className="w-full text-left">
              <caption className="sr-only">
                Which Aura document to open for each job
              </caption>
              <thead className="bg-gray-2">
                <tr>
                  <th scope="col" className="p-1 text-sm font-semibold text-gray-12">
                    Job
                  </th>
                  <th scope="col" className="p-1 text-sm font-semibold text-gray-12">
                    Open
                  </th>
                </tr>
              </thead>
              <tbody>
                {routes.map((route) => (
                  <tr key={route.job} className="border-t border-gray-6">
                    <th scope="row" className="p-1 text-sm font-medium text-gray-12">
                      {route.job}
                    </th>
                    <td className="p-1 text-sm">
                      <Link
                        href={route.href}
                        className="text-accent-11 underline underline-offset-2"
                      >
                        {route.open}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="p text-gray-11">
            <Link
              href="/docs"
              className="text-accent-11 underline underline-offset-2"
            >
              Get started
            </Link>{" "}
            has the install commands and the rule list on one page.
          </p>
        </div>
      </div>
    </section>
  );
}
