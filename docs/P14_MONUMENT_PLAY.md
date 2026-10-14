# P14 MONUMENT PLAY — four new architecture-integrated stage parts

Date: 2026-10-15. Public main baseline: `915fb440d5db5eaac0ead0f607d9bab8e591c4c8`.

## Actual production

Four new, independently generated native-shaped `dopagaki.track-director/1` course JSONs, original deterministic source, static QA, geometry-backed diagnostics and approximate perspective previews have been delivered in the **separate offline ZIP** `STAGE_FORGE_P14_MONUMENT_PLAY_FOUR_NEW_FAMILIES.zip`. These are new geometry families, **not revisions or overwrites** of P13. Prior P13 archive SHA256 is preserved in the ZIP's `P13_BASELINE.json`.

| Candidate | Giant construction + genuinely different driving signature | Surfaces / fixtures | Sampled min width |
|---|---|---:|---:|
| TF-001 TRIDENT FOUNDRY | Three-prong foundry wings and elevated transverse crowns. Three central fixed blockers admit local left/right side choices before asymmetric evasions; 5 fixed challenges. | 32 / 105 | 18.12m |
| CC-001 CYCLOPS CRESCENT | Approximately 209-degree *authored* curved ring citadel, approximately 203-degree measured centerline tangent rotation. Bank reaches 24.1 degrees; four pylons in opposite-side phases. | 32 / 119 | 18.53m |
| AG-001 ANCHORFALL GANTRY | Huge hanging bearing walls and open hanging trusses frame a long 720m elevation-changing deck. Four sampled uphill/downhill directional reversals and four fixed obstacles. | 32 / 109 | 16.83m |
| FA-001 FOLDED AEGIS | Multiple angled exterior armor blades define three tight passage throats and open recovery courts; five fixed challenges, changing bank and width. | 32 / 106 | 16.64m |

Each exported stage has exactly **one actual continuous rideable, collidable surface** and **31 noncollidable large architectural surfaces**. No unsupported moving obstacle, real forked road, forced jump mechanic or game renderer alteration was added.

## Measured verification, not physics

- Independent structural/native-format-like bounds and conservative static geometry checks: **4/4 PASS** (32 surface/256 fixture maximum, zero near-degenerate control cells or declared seam discrepancies).
- Three TF center hazards locally checked on **both sides** of a single road cross-section: **3/3 PASS** with a conservative point-to-3D-axis-aligned-box proxy. This does **not** establish full obstacle-to-obstacle route feasibility.
- Static guide-to-hazard AABB margins are TF 6.37m, CC 7.62m, AG 5.96m, FA 4.50m; these are not swept-ball clearance.
- Sparse 3D road/decorative-surface sampling found no very close points, but **cannot** exclude intersections between samples in the native triangulation.
- Standalone deterministic source regenerated all four JSONs byte-for-byte, verified after freshly extracting the archive elsewhere. All packaged file hashes also verified.
- **B3.8 native speed trials, arcade steering, collisions, generatedRoute handling, human gameplay, real camera and v7 game integration: NOT RUN/UNVERIFIED.** Prior P4 24/24 completions do not transfer to P14.

## Public boundary and status

Only this note and [`experiments/P14_INDEX.json`](../experiments/P14_INDEX.json) are proposed in this **Public Draft PR**. Full stage JSON, generator, preview imagery, user-authored data, private game/editor/runtime source, third-party content and deployment details stay outside the public repository. This PR makes **no changes** to game physics, sites, historical P13 archives, previous Draft PRs or main. The approved catalog stays unchanged; candidates are **EXPERIMENTAL_NOT_APPROVED**.

Next priority is more tangible variety and eventual low-friction native driving verification. Do not misrepresent independent geometry tests as proven physical playability.
