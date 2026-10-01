---
title: Internal progress
date: 2026-10-01
tags: [dev-log, logic]
---
## Summary
Canary now has a Cloud Run preview workflow for `aura-www`, `aura-stories`, and `aura-design-md` in `us-central1`. Images are tagged with the commit SHA. Custom domains stay on Vercel until cutover.

## Context
- Related: [[Cloud Run]] [[Site and docs app]] [[Design md]] [[Registry]]
- Implementation Path: `.github/workflows/cloud-run.yml`
- Next: add GitHub secrets `CLOUD_RUN_CREDENTIALS` and `CLOUD_RUN_PROJECT_ID`, then confirm services with `gcloud run services list --project sgd-marketing-bellatrix --region us-central1`.
