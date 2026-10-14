# P10 DRIVE GEOMETRY — four real road + hazard revisions

Date: 2026-10-15. Public main baseline `915fb440d5db5eaac0ead0f607d9bab8e591c4c8`. Earlier stage geometry remains preserved in the offline P9 archive; earlier Draft PRs #5–#10 remain untouched.

## Real changes in the separately delivered P10 stage ZIP

This is a **stage production and redesign**, not a proposed plan or a route-guide-only change.

- **PX-001 PARALLAX EXCHANGE:** genuine figure-eight road proportions changed (wider longitudinal turns, shallower loop lateral excursion), six fixed hazards regrouped as three two-beat phases. 35m actual centerline over-under elevation difference retained. A support pier and upper transfer arch that came close to the road in 3D were relocated in height/side and rechecked; all 31 decorative geometry surfaces still present.
- **AR-001 ATLAS REVERSAL:** centerline lateral amplitude reduced, full structure regenerated around it, six pylons repositioned as three alternating barrier stages. Three x-direction switchbacks retained.
- **HC-001 HEXACHAMBERS:** centerline side-to-side amplitude reduced while preserving three giant chambers and six fixed walls. A more gradual line of travel through narrow/broad volumes.
- **TW-001 TIDAL WAVEFRAME:** changed the physical vertical wave profile to moderate sharp descent and retained four elevation reversals; four fixed blocks repositioned and the route line softened.

Unlike editing just an author's guide line, the **rideable road control points actually changed in all four exported course JSONs**. Original P9 JSON and original P9 generator are immutable, included in the offline ZIP for comparison.

## Objective geometry measurement

| Candidate | P9 maximum guide curvature (1/m) | P10 | Reduction | P10 length (m) |
|---|---:|---:|---:|---:|
| PX-001 | .280093 | .043265 | 84.6% | 908.6 |
| AR-001 | .104821 | .042489 | 59.5% | 852.8 |
| HC-001 | .055458 | .040798 | 26.4% | 705.91 |
| TW-001 | .047530 | .026281 | 44.7% | 621.4 |

Lower guide curvature means fewer extreme authored path bends, **NOT proven completion or safer native arcade physics**. Even revised turns could demand very high acceleration at 96m/s. The archive includes a transparent constant-speed geometric lateral-acceleration proxy for speeds 28/36/48/64/80/96; this is **not** the B3.8 physics model or a speed PASS/FAIL.

## Verification

- Standalone native-format-like bounds and independent conservative static geometry: **4/4 PASS**.
- All 4: 32 surfaces, 112–114 fixtures, no degenerate control cells, no declared seam gaps.
- Measured sampled minimum road widths: **16.05m / 14.95m / 13.06m / 14.02m**.
- Nearest guide-to-challenge fixed-obstacle AABB proxy: **5.48m / 5.90m / 5.41m / 5.75m**. These are proxy values and not ball-swept collision clearance.
- Sparse-sampled nearest road-decorative geometry at least **22.85m** across these four revised stages; not proof against thin/full-tessellation collisions.
- Independent 3D P9/P10 curve comparison: **4/4 PASS**. PX remains a 35m multilevel self-crossing; AR retains 3 switchbacks; TW retains 4 elevation reversals.
- Extracted P10 ZIP to separate folder, validated checksums and byte-for-byte regenerated 4 JSONs: **4/4 PASS**.
- **Actual B3.8 autopilot, collision/steering, generatedRoute:true interpretation, camera, manual human playtest and v7 game integration: NOT RUN** (no native B3.8 engine available). No previous P4 completion result is transferred.

## Publication boundary / status

A separate offline conversation ZIP contains 4 actual stage JSONs, a working original deterministic generator, immutable P9 originals, QA scripts and reports, and geometry-backed 4-view + approximate chase-view previews. All four remain **EXPERIMENTAL_NOT_APPROVED**. There is no game deployment, engine modification, main merge or user-side Windows operation.

This Public Draft PR contains **only** this document and `experiments/P10_INDEX.json`. No private engine/runtime source, stage JSON, generators, third-party/user-authored tracks, credentials or deployed game assets have been added. Any formal approval requires a separately confirmed human/native playtest.
