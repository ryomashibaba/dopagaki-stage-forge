# P15 HERO REFINEMENT — from twenty-family comparison to four real roadplay updates

Date: 2026-10-15. Main baseline: `915fb440d5db5eaac0ead0f607d9bab8e591c4c8`. **Experimental, not approved.**

## Actual work completed offline

Compared the **20 distinct stage family JSONs that were available** in P4 (4), P6 (4), P8 (4), P13 (4), and P14 (4). Compared geometry-based route length, control-row road width range, elevation range, fixture counts and architecture family signatures. P13 represents the later version of the four P9 families; the set is not an exhaustive history of all earlier P2/P3/P5 experiments.

Rather than labeling a winner by an invented score, selected a *provisional four-way contrast*:

| Stage | Original | Production changes in a real regenerated course JSON | Surfaces / fixtures |
|---|---|---|---|
| AW-001 AXIOM WELL | P8 | Real helical-shaft road width and opposing bank changes; re-phased four fixed pylons, widened the central hazard approach where a static guide-to-obstacle clearance was initially insufficient. Source spiral and roughly 102m vertical descent remain. | 32 / 120 |
| PX-001 PARALLAX EXCHANGE | P13 | Real road width/camber changes at early and late two-sided choice phases, six fixed blockers relocated; keeps the original 35m upper/lower crossing and central open express section. | 32 / 114 |
| CC-001 CYCLOPS CRESCENT | P14 | Re-balanced bank across the long ring arc, added broad central corridor release, and grouped four fixed pylons into two opposite-side phases; all citadel architecture retained. | 32 / 119 |
| FA-001 FOLDED AEGIS | P14 | Strengthened three alternating narrow armor throats and recovery courts, two central fixed divider blocks on the single continuous road, five actual fixed wall placements adjusted. | 32 / 106 |

The exported **rideable road control points and actual challenge-fixture positions changed in all four stages**, as did the advisory `route`. Original 31 non-colliding architectural surfaces and non-challenge fixtures in each course remain JSON-equivalent to source. The P8/P13/P14 original JSON files are included in the offline ZIP with independently re-runnable generator source, checksum and geometry-backed previews. No game/editor/physics private source was needed or modified.

## Static measurements

| Candidate | Min sampled width | Peak sampled bank | Closest guide-to-fixed-challenge 3D AABB proxy |
|---|---:|---:|---:|
| AW-001 | 16.92m | 13.1° | 3.21m |
| PX-001 | 25.12m | 21.4° | 3.25m |
| CC-001 | 20.30m | 24.7° | 7.41m |
| FA-001 | 15.71m | 22.3° | 3.33m |

Standalone authoring-format, original architecture/background immutability, static road/seam and near-degenerate-cell checks: **4/4 PASS**. Conservative route-road-edge, fixed-fixture AABB proxy, limited cross-section choice clearance and sparse sampled architectural proximity: **4/4 PASS**. The archive was extracted to a fresh directory, every packaged file was SHA256-checked and the independent generator regenerated all four JSONs **byte-for-byte**; the verifier ran again successfully.

**Important limitations:** the closest guide-to-fixture number is an *axis-aligned box approximation*, not real collision clearance for a radius-bearing ball moving at speed. Sparse decorative samples cannot establish full mesh collision absence. `generatedRoute:true` native route interpretation is unknown. **B3.8 native auto-driving, 28/36/48/64/80/96m/s finish, actual collision response, the actual camera, manual play and game-v7 integration are NOT RUN.** No P4/P5 past physical run result applies to P15.

## Publication boundary

Public PR adds **ONLY** this document and [`experiments/P15_INDEX.json`](../experiments/P15_INDEX.json). Separate offline chat ZIP: `STAGE_FORGE_P15_HERO_REFINEMENT_FOUR_HERO_FAMILIES.zip` (SHA256 `f0e7d6f81f7042e2653ace7309ec8bcacc800bb5b7b596b028079b80c081a0f8`).

Full stage JSONs, generator, previews, private game/editor source, user-authored stage examples, third-party media, secrets and deployment material have not been published. No main merge, approved catalog modification, game v7 change, physics change or deploy has occurred. Previous P14 and earlier baselines remain preserved.

Next objective: continue *tangible stage architecture and driving design*, with optional low-friction native verification if it ever becomes available; keep static and physical tests distinct.
