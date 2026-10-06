/**
 * Branded ids. Not part of gdp-ts: a SessionId cannot be passed where a
 * ProjectId is expected. `name()` from `@gdp-ts/core` goes one step further
 * and distinguishes *this* project id from *that* one.
 *
 * This file is the one place outside `proofs/` that may use `as`. In strict
 * mode the lint preset still allows assertions in lib/ids.ts.
 */
declare const brand: unique symbol;
type Brand<T, B extends string> = T & { readonly [brand]: B };

export type UserId = Brand<string, "UserId">;
export type SessionId = Brand<string, "SessionId">;
export type OrgId = Brand<string, "OrgId">;
export type ProjectId = Brand<string, "ProjectId">;

export const UserId = (id: string) => id as UserId;
export const SessionId = (id: string) => id as SessionId;
export const OrgId = (id: string) => id as OrgId;
export const ProjectId = (id: string) => id as ProjectId;
