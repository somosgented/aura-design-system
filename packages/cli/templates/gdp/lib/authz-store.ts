/**
 * Stand-in for the database the trusted proof modules read.
 * Replace these lookups with your session, membership, and billing queries.
 * Request handlers must not write here to grant themselves a role or a plan.
 *
 * The demo rows let `handleDeleteProject` succeed for sess_demo / user_demo /
 * prj_demo. Hobby plan `prj_hobby` is present so the entitlement check can fail.
 */
export type OrgRole = "owner" | "member";
export type ProjectRole = "owner" | "member" | "viewer";
export type Plan = "hobby" | "pro" | "enterprise";

const sessions = new Map<string, string>([["sess_demo", "user_demo"]]);

const orgRoles = new Map<string, OrgRole>([["user_demo:org_demo", "owner"]]);

const projectRoles = new Map<string, ProjectRole>([
  ["user_demo:prj_demo", "owner"],
  ["user_demo:prj_hobby", "owner"],
]);

const projectPlans = new Map<string, Plan>([
  ["prj_demo", "pro"],
  ["prj_hobby", "hobby"],
]);

const deletedProjects = new Set<string>();

export async function userIdForSession(sessionId: string): Promise<string | null> {
  return sessions.get(sessionId) ?? null;
}

export async function orgRoleFor(
  userId: string,
  orgId: string,
): Promise<OrgRole | null> {
  return orgRoles.get(`${userId}:${orgId}`) ?? null;
}

export async function projectRoleFor(
  userId: string,
  projectId: string,
): Promise<ProjectRole | null> {
  if (deletedProjects.has(projectId)) return null;
  return projectRoles.get(`${userId}:${projectId}`) ?? null;
}

export async function planForProject(projectId: string): Promise<Plan | null> {
  if (deletedProjects.has(projectId)) return null;
  return projectPlans.get(projectId) ?? null;
}

export async function markProjectDeleted(projectId: string): Promise<void> {
  deletedProjects.add(projectId);
}
