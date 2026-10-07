---
title: Cloud Run production deploys
date: 2026-10-07
tags: [dev-log, architecture]
---
## Summary
Pushing `deploy/production` builds three images and deploys unauthenticated Cloud Run services in `us-central1` on GCP project `sgd-aura`. `canary` does not deploy. Custom domains stay on Vercel until a later cutover.

## Context
- Related: [[Site and docs app]] [[Registry]] [[Design md]]
- Implementation Path: `.github/workflows/cloud-run-prod.yml`

## Why this shape
Static apps use nginx so `/dark` and the `DESIGN.md` content type match `packages/design-md/vercel.json` without a Node process. The docs app keeps the Next.js standalone image. `turbo prune` drops registry stylesheets that `apps/www/app/globals.css` imports by path (`responsive-dropdown-menu`, `selection-toolbar`, `chart`), so `apps/www/Dockerfile` copies them in before `next build`. Matrix jobs tolerate Artifact Registry create races.

## Services

| Image | Dockerfile | Cloud Run service | Vercel project (unchanged) |
| --- | --- | --- | --- |
| www | `apps/www/Dockerfile` | `aura-www` | aura-design-system-www |
| stories | `packages/registry/Dockerfile` | `aura-stories` | aura-design-system-stories |
| design-md | `packages/design-md/Dockerfile` | `aura-design-md` | aura-design-system-design-md |

Images are tagged with the commit SHA in Artifact Registry repository `aura-design-system` (`us-central1-docker.pkg.dev`). Each container listens on port 3000. `aura-www` requests 1Gi; the static services use 512Mi.

## Secrets & IAM
GitHub Actions secret: `CLOUD_RUN_CREDENTIALS` (JSON key for `github-cloud-run@sgd-aura.iam.gserviceaccount.com`). Workflow hardcodes project ID `sgd-aura` (must be the ID, not display name “SGD Aura”). SA needs `run.admin`, `artifactregistry.admin`, `iam.serviceAccountUser`, and `iam.serviceAccountTokenCreator` (for `token_format: access_token`).

## Verify
Production deploy is a push (or merge) to `deploy/production`. After that run, `gcloud run services list --project sgd-aura --region us-central1` should show `aura-www`, `aura-stories`, and `aura-design-md`.
