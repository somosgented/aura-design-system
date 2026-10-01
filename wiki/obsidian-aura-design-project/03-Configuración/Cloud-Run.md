---
title: Cloud Run production deploys
date: 2026-10-01
tags: [dev-log, architecture]
---
## Summary
Pushing `deploy/production` builds three images and deploys unauthenticated Cloud Run services in `us-central1`, using the same flow as next-sgd. `canary` does not deploy. Custom domains stay on Vercel until a later cutover.

## Context
- Related: [[Site and docs app]] [[Registry]] [[Design md]]
- Implementation Path: `.github/workflows/cloud-run-prod.yml`

## Why this shape
Static apps use nginx so `/dark` and the `DESIGN.md` content type match `packages/design-md/vercel.json` without a Node process. The docs app keeps the Next.js standalone image. `turbo prune` drops two registry stylesheets that `apps/www/app/globals.css` imports by path, so `apps/www/Dockerfile` copies them in before `next build`. One matrix workflow deploys all three on `deploy/production`, matching next-sgd's auth, Buildx, and `gcloud run deploy` steps.

## Services

| Image | Dockerfile | Cloud Run service | Vercel project (unchanged) |
| --- | --- | --- | --- |
| www | `apps/www/Dockerfile` | `aura-www` | aura-design-system-www |
| stories | `packages/registry/Dockerfile` | `aura-stories` | aura-design-system-stories |
| design-md | `packages/design-md/Dockerfile` | `aura-design-md` | aura-design-system-design-md |

Images are tagged with the commit SHA in Artifact Registry repository `aura-design-system` (`us-central1-docker.pkg.dev`). Each container listens on port 3000. `aura-www` requests 1Gi; the static services use 512Mi.

## Secrets
GitHub Actions secrets: `CLOUD_RUN_CREDENTIALS` (service account JSON key) and `CLOUD_RUN_PROJECT_ID` (expected value `sgd-marketing-bellatrix`). No credentials live in the repo. `canary` does not deploy.

## Verify
Production deploy is a push (or merge) to `deploy/production`. After that run, `gcloud run services list --project sgd-marketing-bellatrix --region us-central1` should show `aura-www`, `aura-stories`, and `aura-design-md`. Local image checks use the repo root as context: `docker build -f apps/www/Dockerfile .`, `docker build -f packages/registry/Dockerfile .`, and `docker build -f packages/design-md/Dockerfile .`.
