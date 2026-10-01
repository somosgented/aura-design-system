---
title: Internal progress
date: 2026-10-01
tags: [dev-log, logic]
---
## Summary
Cloud Run production deploys follow next-sgd: push to `deploy/production` only, via `.github/workflows/cloud-run-prod.yml`. Services are `aura-www`, `aura-stories`, and `aura-design-md`. Custom domains stay on Vercel until cutover.

## Context
- Related: [[Cloud Run]] [[Site and docs app]] [[Design md]] [[Registry]]
- Implementation Path: `.github/workflows/cloud-run-prod.yml`
- Next: add GitHub secrets `CLOUD_RUN_CREDENTIALS` and `CLOUD_RUN_PROJECT_ID`, merge to `deploy/production`, then confirm with `gcloud run services list --project sgd-marketing-bellatrix --region us-central1`.
