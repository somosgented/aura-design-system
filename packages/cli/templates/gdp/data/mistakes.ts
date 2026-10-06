/**
 * Compile-time regression checks. This file is typechecked and never called.
 * Each `@ts-expect-error` line must stay an error. Do not silence it with
 * `as` — the gdp-ts lint preset rejects proof assertions outside `proofs/`.
 */
import { deleteProject } from "@/data/delete-project";
import { handleDeleteProject } from "@/data/delete-project-handler";
import { ProjectId, UserId } from "@/lib/ids";

export async function mistakes(): Promise<void> {
  await handleDeleteProject({
    sessionId: "sess_demo",
    userId: "user_demo",
    projectId: "prj_demo",
  });

  // @ts-expect-error a raw ProjectId is not a named project, and the proofs are missing
  await deleteProject(ProjectId("prj_demo"), UserId("user_demo"));
}
