## Agent files

Rules and skills for every coding agent live in `.agents/`. No tool-specific folder such as `.cursor/rules` or `.cursor/skills` holds them.

* **MUST**: Apply every rule in `.agents/rules/*.mdc` on every task. They are always on.
* **MUST**: Load `.agents/skills/<name>/SKILL.md` when the task matches that skill's `description`, and follow its steps.
* **MUST**: Write new or changed rules to `.agents/rules/` and skills to `.agents/skills/<name>/`. Never create them under `.cursor/`, `.claude/`, or another tool folder.
* **SHOULD**: Install upstream skills with `npx skills add <repo> --skill <name> -a cursor -y --copy`, which writes to `.agents/skills/`.
