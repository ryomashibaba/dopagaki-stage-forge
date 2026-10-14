# Public repository safety and acceptance policy

This repository is PUBLIC. Every commit, review, artifact, and Actions log may be visible to others.

## NEVER copy into this repository without a separate explicit review
- DOPAGAKI SLOPE game's original `src/`, `dist/`, physics, rendering, SF assets, site credentials or deployment configuration
- private repositories, their Git histories, build outputs or unreviewed third-party code
- user-authored stage JSONs (including UNTITLED / CONSTRUCTION) without explicit permission to publish that exact asset
- passwords, tokens, personal data, local file system paths, screenshots containing private information

## Stage asset lifecycle
`experiments` -> `candidates` -> `approved` (or `archived`).
Only explicit human review moves assets to `approved`. A CI pass never substitutes for a human playtest.
An existing stage file must never be overwritten silently; version snapshots are immutable.

## Verification levels
- FORMAT: standalone schema and bounds validation (implemented in P1).
- GEOMETRY: mesh degeneration, seams, thickness and decoration overlap checks (planned; not implemented yet).
- RUN: course-local autopilot checks at multiple speeds (planned; not implemented yet).
- VISUAL: multiple camera views and closeup evaluation (planned; not implemented yet).
- HUMAN: manual Windows/B3.8 gameplay test (cannot be inferred from CI).
- GAME: public game engine compatibility (requires separate authorized integration).

## CI boundaries
Workflows use standard hosted runners, read-only contents permission, no secrets, no `pull_request_target`,
no direct deployment, and no auto-merge. Public workflow scripts must not pull private assets.

## Publishing stages
Do not interpret the user's consent to creating a public project as blanket permission to publish every uploaded
file or every privately developed stage. Sanitize each staged asset first.
