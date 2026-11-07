import { defineProof, type Named, type Proof } from "@gdp-ts/core";
import { projectRoleFor } from "@/lib/authz-store";
import type { ProjectId, UserId } from "@/lib/ids";

const UserHasProjectRole = defineProof("UserHasProjectRole");

// eslint-disable-next-line @typescript-eslint/no-empty-object-type -- gdp-ts recipe: a distinct interface per proof kind
export interface UserHasProjectRole<U, P>
  extends Proof<"UserHasProjectRole", [U, P]> {}

export async function userHasProjectRole<U, P>(
  user: Named<U, UserId>,
  project: Named<P, ProjectId>,
): Promise<UserHasProjectRole<U, P> | null> {
  const role = await projectRoleFor(user.value, project.value);
  return role === "owner" || role === "member"
    ? UserHasProjectRole.prove(user, project)
    : null;
}
