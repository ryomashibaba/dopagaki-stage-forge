# P16 ARCHITECTURAL CONTRAST — four original monumental stage families

Date: 2026-10-15. Baseline `main@915fb440d5db5eaac0ead0f607d9bab8e591c4c8`. All parts remain **EXPERIMENTAL_NOT_APPROVED**.

## Actual original stage production

Created four new `dopagaki.track-director/1` JSON courses and their original deterministic generator, all archived in a **separate offline ZIP**. This batch does **not** modify P15's four selected hero stages; their exact JSONs and SHA256-checked index are retained in the same offline ZIP. There is no editor, deployed game, or production physics change.

| Original stage | Physical architecture integrated with road | Driving theme | Surfaces / fixtures |
|---|---|---|---:|
| MV-001 MIRROR VAULT | 16 massive canted reflector monoliths + 9 spanning ribs + 6 underfloor anchor sheets | Three locally two-sided central fixed barriers and two alternating side blockers in a varying-width/banked corridor | 32 / 120 |
| HN-001 HYPERBOLIC NEXUS | 24 hyperbolic longitudinal shell panels defining two distinct narrow waists + 7 overhead bows | Narrow and open riding sections, inverted bank orientation, four fixed pylons | 32 / 124 |
| OE-001 ORBITAL ENGINE | 16 huge radial stator blades, 8 central hub panels and 7 upper transfer spars | **Approximately 240m radial straight insertion → 546m hub perimeter → 251m tangent/radial exit**, all derived from the actual XYZ road, four fixed blockers | 32 / 113 |
| NA-001 NEEDLE ARRAY | 24 canted vertical megaspikes plus 7 horizontal collars | Grouped fixed obstacles (six in total), alternating precision constrictions and long relief spaces | 32 / 111 |

Each course consists of **one real continuous collidable drive surface plus 31 noncollidable architectural surfaces**. No unsupported animated hazards, boost-forced jump, or fictitious forked roads are included.

## Repeatable independent QA already performed

- Standalone authoring-format limits, triangular mesh budget, 3D road width/grade/seam and degenerate control checks: **4/4 PASS**.
- Sampled minimum road widths: MV **21.4m**, HN **20.51m**, OE **22.3m**, NA **21.83m**. Limits of 32 surfaces and 256 fixtures respected.
- **7/7 local left/right passage probes** for central fixed hazards, in a single continuous road (MV 3, OE 2, NA 2). These local geometric clearances do **not** prove two complete drivable routes.
- The independently sampled nearest road-surface proximity to the *smoothed advisory guide* was under 1m for all four. Its native behavior when `generatedRoute:true` remains **unknown**.
- 3D sparse sampled decorative surface proximity: **zero samples under 2.2m**, but incomplete as a native tessellated collision proof.
- Original P15 stage JSON preservation: **4/4 SHA256 checks PASS**, via `baseline/P15_INDEX.json`.
- Clean-directory ZIP extraction, SHA256 checks of every bundled file and byte-for-byte deterministic regeneration of all four P16 JSONs: **4/4 PASS**. All three independent static QA scripts re-ran successfully after fresh extraction.
- Multiple view images and illustrative road-level perspectives are computed from the actual generated JSON, **not screenshots from B3.8**.

## Critical not-yet-tested boundaries

The proprietary/native B3.8 `surface.js`, `collision.js`, and `physics.js` were not included. **No real native autopilot at 28, 36, 48, 64, 80 or 96m/s; no real ball-swept collision test; no human manual play; no production-game compatibility or exact camera sightline test was performed.** Static curvature and path margins cannot establish high-speed feasibility. Historical P4 24/24 completion results do **not** transfer to these courses. These experimental parts are not entered into the approved catalog.

## Public safety and immutable delivery

The offline archive is `STAGE_FORGE_P16_ARCHITECTURAL_CONTRAST_FOUR_NEW_FAMILIES.zip`, SHA256 `a3f6c94d02db9df6f9ab44eadfa48c7e38ebe1daf9639e36c11cfea5a7f3e830`. It contains the four full P16 JSONs, source generator, full QA reports and scripts, geometry-backed previews and four immutable P15 stage JSON snapshots.

**Only this document and [`experiments/P16_INDEX.json`](../experiments/P16_INDEX.json) are included in this Public Draft PR.** Do not publish the actual stage JSONs, generator, any private game/editor/runtime source, user-authored stage files, unreviewed third-party assets, personal information, credentials, or deployment materials. Earlier P15 and older drafts are preserved. No main merge, no production deployment, and no official approval.
