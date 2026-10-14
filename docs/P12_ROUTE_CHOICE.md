# P12 ROUTE CHOICE — meaningful choices on existing monumental stages

Date: 2026-10-15. Public main baseline: `915fb440d5db5eaac0ead0f607d9bab8e591c4c8`. Parent offline batch: P11 SPEED FLOW. Status: **EXPERIMENTAL_NOT_APPROVED**.

## Actual stage production, not only a proposal

Four new full `dopagaki.track-director/1` course JSONs were generated using independent source code from **SHA-verified immutable P11 originals**. All four driveable road surface control lattices (width and local bank), fixed-challenge placements and one recommended guide line changed. The **31 architectural surfaces and all non-challenge background fixtures remain unchanged** per stage.

| ID | New route-choice gameplay | Local double-sided pass zones | Surfaces / fixtures |
|---|---|---:|---:|
| PX-001 PARALLAX EXCHANGE | Two central obstacle islands and an alternating 2-stage overpass slalom; preserves the real 35m two-level crossing | 2 | 32 / 114 |
| AR-001 ATLAS REVERSAL | Two wide bifurcation-like atrium gates and alternating obstacles between switchbacks | 2 | 32 / 114 |
| HC-001 HEXACHAMBERS | Each of three chambers receives a central splitter followed by a broad concourse | 3 | 32 / 114 |
| TW-001 TIDAL WAVEFRAME | Opposite-side options on the climb/valley approaches, separated by a broad recovery section | 2 | 32 / 112 |

**9 locally double-sided gate passages were placed.** These are *two possible sides of a fixed obstacle on one physical continuous rideable surface*, not distinct branching roads, dynamic gates or proof of two complete viable routes. The P12 `route` is one authored **illustrative preferred guide**; `generatedRoute:true` B3.8 behavior is unknown.

## Independent static results (not actual physics)

| Stage | Sampled min road width | Min preferred-guide-to-fixture 3D AABB | Local dual-side probes |
|---|---:|---:|---:|
| PX-001 | 25.33m | 3.66m | 2/2 PASS |
| AR-001 | 24.15m | 3.01m | 2/2 PASS |
| HC-001 | 24.71m | 2.91m | 3/3 PASS |
| TW-001 | 24.67m | 3.37m | 2/2 PASS |

All four standalone structural/format and static road audits: **PASS**. Road control points changed, decorations untouched, no reported near-degenerate cells / declared seams, budgets respected. For each center obstacle, **both sides** were sampled in a short ±0.86% progress window using 3D fixture AABB and road-edge distances, which exceeded the local 1.7m thresholds. This is **not** full-route playability, swept-ball collisions or camera visibility.

The ZIP was freshly extracted into a separate folder; its SHA256SUMS verified, the generator reproduced each of the four course JSONs **byte-for-byte**, and both independent static verifiers passed again. ZIP SHA256: `7a493e8f15cff91896890be5a3c683131ea9d6ea5e40a29d5c29a962d103c221`.

## Unverified / safety boundaries

**No native B3.8 physics, 28–96m/s steering/finish trials, human play, real renderer/camera, ball-radius collision proof or game-v7 integration was performed.** Road choice QA uses fixture AABB proxies and a sparse control-mesh interpolation model; physically comfortable transitions remain unproven. Do not transfer old P4 24/24 runs to P12.

All actual stage JSONs, P11 source baselines, regenerated P12 source, QA reports and geometry-derived previews are held in a separate **offline ZIP delivered in the conversation**: `STAGE_FORGE_P12_ROUTE_CHOICE_FOUR_FAMILIES.zip`. The public repository receives **only this documentation and [`experiments/P12_INDEX.json`](../experiments/P12_INDEX.json)**. No private game/editor code, user-authored courses, secrets, deployment settings or proprietary third-party content is published. Main, prior Draft PRs and deployed game are unchanged.

Next useful phase: challenge variation and genuine human-accessible running with simple one-click native tests when available, while continuing stage production without complex Windows tasks.
