# P6 MONUMENT RUN — four architecture-integrated experimental stage parts

Date: 2026-10-15. GitHub baseline: `main` `915fb440d5db5eaac0ead0f607d9bab8e591c4c8`.

## Purpose

Make many diverse, memorable and visually ambitious DOPAGAKI SLOPE stage parts with **roads physically built into the volumes of the giant structures**. This batch adds four original, unrelated architectural families and four real Track Director /1 JSON candidates. The actual stage assets are delivered separately in an offline ZIP and **not published in this Public PR**.

## Authored parts

| ID | Structure | Driving signature | Geometry / fixtures | New fixed blockers |
|---|---|---|---:|---:|
| SL-001 | SLUICE LEVIATHAN: four huge hydraulic lock gates, heavy retaining walls and braces | Alternating broad reservoirs and narrow lock throats, staggered barriers | 31 / 120 | 6 |
| VA-001 | VERTEX ARBORETUM: giant hanging bifurcating roots and upper veils | Banked open-run-to-root-throat rhythm and displaced obstacle lanes | 31 / 129 | 4 |
| CL-001 | CLOCKWORK LATTICE: three ring gears with 24 independent rim sectors and overhead mechanical rack | Fast straight sections, paired blockers and lane navigation through monumental apertures | 32 / 166 | 6 |
| DK-001 | NEBULA DRYDOCK: four colossal open hanging docking cradles and 3 heavy crossbones | Narrow utility spine and broad entry bays with an uphill-to-downhill launch-shaped road | 32 / 134 | 4 |

All include original architecture as native display surfaces, exactly one continuous drivable surface, native B3.8-recognized fixed fixture kinds and explicitly authored navigation routes. No moving obstacle was invented. DK-001 has a measured **+0.254 maximum rising control-row grade and -0.486 falling grade**. This is a ramp geometry candidate, **NOT evidence of an airborne ball or successful landing**.

## Honest quality gate

- Standalone structural/format verification **4/4 PASS** (native-format-matching rules: surfaces <=32, fixtures <=256, permitted kinds, finite grids, triangle budget).
- Standalone road seam, width, near-degenerate-cell checks **4/4 PASS**.
- Exact source-to-JSON regeneration **4/4 PASS**, including independently extracting and regenerating the offline ZIP.
- Minimum planar AABB distance from authored guide route to fixed challenge footprints by stage: **4.90 / 5.82 / 5.58 / 6.33m**.
- Conservative bilinear near-road architecture sampling did not flag intersections; it is **not** a complete triangle/mesh intersection proof.
- Actual B3.8 runtime, swept collisions, 28–96m/s autopilot and human playtests: **NOT RUN**. Earlier P4 24/24 claims do not transfer.
- B3.8 `generatedRoute` interpretation, live game v7 compatibility and DK natural takeoff/landing are **UNVERIFIED**.

This is an experimental creative batch, not an approved release. Human assessment, physical validation and game integration remain separate gates.

## Stored artifacts (offline ZIP only)

Four `generated/*.json` courses, standalone `source/` deterministic generator code, `qa/P6_REPORT.json`, a 4-view diagnostic PNG for each real exported mesh and a 4-family comparison image. Previous P5-A2 stage archive remains untouched.

## Publication / operational safety

This PR adds **documentation and metadata only**. Never publish private game/editor physics, deployment settings, user-authored course examples, proprietary art, personal data, unreviewed third-party assets or the stage ZIP without explicit review. No game v7 source or deployment changed; `main` unchanged. Track all candidates as `EXPERIMENTAL_NOT_APPROVED` until separately reviewed. The index is [`experiments/P6_INDEX.json`](../experiments/P6_INDEX.json).

## Next production work

Continue making or meaningfully refining architecture-integrated parts, not endless editor/QA infrastructure. Prioritize actual road visibility inside the CL/VA structures and the DK launch/landing question when native B3.8 access becomes straightforward, with no complex Windows setup demanded of the user.
