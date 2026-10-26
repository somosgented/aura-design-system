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
