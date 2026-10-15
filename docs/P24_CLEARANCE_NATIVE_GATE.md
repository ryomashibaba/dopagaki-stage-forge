# P24 CLEARANCE / NATIVE GATE — one real structure fix, six unchanged experimental controls

Date: 2026-10-15. Public main baseline: `915fb440d5db5eaac0ead0f607d9bab8e591c4c8`. Source batch P23 LANDING HANDOFF, immutable SHA256 `fd91603b016c6baefc3a21874c7e6ef24e8e43f17e369b097e3eae5f710df2fb`.

## The actual production change

P23's ORBITAL ENGINE geometry audit used a relatively sparse road-to-decoration sample and reported a **3.166m** minimum. A new independent denser scan samples reconstructed Catmull–Rom road surfaces at **6,817 points** and bilinear decoration control quads at **18,075 points**, revealing **0.842m** nearest proximity at `orbital-stator-10`, **1.599m** at `orbital-stator-8`, and **5.024m** at `orbital-stator-9`.

**We did not attempt to claim game collisions.** These are **noncolliding visual architectural panels** (`rideable:false, collidable:false`), so the concern is primarily geometry overlap/visual clipping and unspecified native handling, not a proven physical hazard.

A **new real ORBIT stage JSON** was generated. Three giant architecture panels were translated in XZ while preserving their grid topology:

| Surface | X/Z translation | Original dense sampled separation | P24 same-method separation |
|---|---|---:|---:|
| `orbital-stator-8` | −15m / +15m | 1.599m | 15.837m |
| `orbital-stator-9` | +25m / +5m | 5.024m | 16.127m |
| `orbital-stator-10` | 0m / −30m | 0.842m | 17.151m |

The **overall nearest sampled road-to-decor separation improved 0.842m → 15.837m**. This is real changed source geometry, not guide-line editing. All **collidable road points**, route, spawns, routeSegments, fixtures including obstacles, and **all other 28 architectural surfaces** remain deep-equal to the P23 original. The visual design may still require game-camera review. The two nearest sets in the sample are unchanged named panels before/after.

**Scope warning:** this is higher-density *point-based reconstruction* from authoring control points, NOT an exhaustive native tessellated triangle-to-triangle intersection algorithm. There is no actual ball radius/swept collision guarantee or native 3D render. P24 has no verified playability result.

## NEXUS: improved static compatibility diagnosis, no new jump claims

The **other six JSONs are exactly byte-identical to P23**, including three NEXUS true-gap variants, the connected NEXUS reference, MIRROR and NEEDLE. The P23 complete original ZIP and all seven original JSONs are preserved offline.

For NEXUS, a separate preflight verifies actual `routeSegments[].surface`, `spawns[].surface`, `rideable/collidable` surface IDs and fixture names/types. These reference relations pass as a **static authoring-contract check** for all four NEXUS stages. The true empty road separations remain **12.805 / 16.805 / 22.806m**, with the connected reference at 0m.

A new route-to-actual-road nearest *sampled point cloud* check found that of 481 explicit authored guide points, **6 / 7 / 9** are more than 5m from sampled road points in COMPACT / SHORT / STANDARD versus **0** in the continuous reference (with this sampling density). This is a **diagnostic**, not evidence that the native `generatedRoute:true` engine will obey the authored virtual guide or that a player will be airborne. In fact, how B3.8 handles a separate pair of rideable surfaces is completely **UNVERIFIED**.

The original generic seam checker correctly shows **4 PASS and 3 EXPECTED FAIL**, one real missing road interval in each gap; do not report those as ordinary continuity PASS.

## Reproducible private offline artifact

`STAGE_FORGE_P24_CLEARANCE_NATIVE_GATE_SEVEN_TRACKS.zip`, SHA256 `75f22503d3a3a898df0564ab0b7fcde9a66b50017cdeed734720da10b992d1a4`, delivered in the conversation and **not attached to the public repository**, contains:
- 7 full-stage JSONs (one ORBIT architecture revised, six P23 originals unchanged);
- all 7 original P23 JSONs and **complete original P23 ZIP**;
- deterministic independent source generator, higher-density reconstructed geometry sampler and independent authoring/reference tests;
- geometry-derived ORBIT before/after wireframes, three-surface clearance comparisons, NEXUS gap comparison and sample metrics (not game screenshots);
- native read-only test gate and SHA256SUMS.

Extracted to a new independent directory and confirmed **29/29 SHA256 payload files, 7/7 byte-exact course regeneration and full independent P24 static verification PASS**.

**NOT RUN**: proprietary/native B3.8 `surface.js`, `collision.js`, `physics.js`, native game renderer, true triangle meshes, ball collisions, airborne takeoff/flight/landing, 28–96m/s completions, game camera, human play or public site integration. Earlier P4 assisted completions do not apply to P24. A future read-only native trial should import the continuous NEXUS before a gap, then verify COMPACT, and compare old/new ORBIT renderings.

## Public scope

This Public Draft PR includes **only this note and [`experiments/P24_INDEX.json`](../experiments/P24_INDEX.json)**. No original game/editor/physics source, actual stage JSON, generator, original P23 private archive, user-authored courses, art, credentials, personal data, or deployment changes are added. Frozen main, previous P23 and older Draft PRs, approved catalog and published game remain unchanged. **EXPERIMENTAL_NOT_APPROVED**; no merge to main and no production deployment.
