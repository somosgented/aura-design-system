/**
 * Sensitive data function. It demands proofs about its exact arguments, so a
 * route, a Server Action, or a job can call it and none of them can skip the
 * check. Compare a signature that takes a raw `ProjectId`, which anyone can
 * call after checking anything or nothing.
 *
 * `actor` is the user who will be recorded. The session proof and the role
 * proof have to be about that same user, and the role and plan proofs have to
 * be about this project.
 */
import type { Named } from "@gdp-ts/core";
import { markProjectDeleted } from "@/lib/authz-store";
import type { ProjectId, UserId } from "@/lib/ids";
import type { PlanIncludesEntitlement } from "@/proofs/plan-includes-entitlement";
import type { SessionIsValid } from "@/proofs/session-is-valid";
import type { UserHasProjectRole } from "@/proofs/user-has-project-role";

export async function deleteProject<S, U, P>(
  project: Named<P, ProjectId>,
  _actor: Named<U, UserId>,
  _proofs: {
    session: SessionIsValid<S, U>;
    role: UserHasProjectRole<U, P>;
    plan: PlanIncludesEntitlement<P>;
  },
): Promise<void> {
  // Proofs are ghosts: present for the typechecker, unused at runtime.
  void _actor;
  void _proofs;
  await markProjectDeleted(project.value);
}
