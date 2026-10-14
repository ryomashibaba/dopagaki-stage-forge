# P3 — Verification and preservation

## Results of offline evaluation, 2026-10-14

For the first four experimental architecture families, format and local native B3.8 offline runner were evaluated.
Speed values are **initial speeds in m/s**, not maintained speeds: 28, 36, 48, 64, 80, 96.
The local runner had route assist enabled, used nearest-guide steering, and simulated at 240 Hz for up to 37 seconds per test.

| ID | P2 physics | P3 physics | Modified |
|---|---|---|---|
| HC-001 / HOLLOW CORE | Failed at 36,48,64 m/s (left road, then fell) | 6/6 FINISHED | Replaced unsafe wraparound/hairpin with smoother central-void descent; 26 architectural surfaces and 72 fixtures retained |
| TF-001 / TITAN FOLD | 36,48,64 m/s finished | 6/6 FINISHED | No road changes |
| AF-001 / ABYSS FRACTURE | 36,48,64 m/s finished | 6/6 FINISHED | No road changes |
| FM-001 / FRACTURED MONOLITH | 36,48,64 m/s finished | 6/6 FINISHED | No road changes |

All four P3 native mesh compiles found zero degenerate triangles. Independent static edge/width/slope audit reported no failures.

**Caution:** No manual Windows/B3.8 playtest, and no published game v7 compatibility test. Automated completion does NOT prove that these courses are fun or possible without route assistance. An engine's collision counter includes routine road-floor contacts; it cannot be interpreted as a count of obstacles.

## Public code and private code boundary

- The standalone public audit in tools/audit-geometry.mjs checks approximate width, 3D grade, degenerate control cells, spawn-to-guide distance, and full-width discontinuities across declared route segments.
- The standalone audit does NOT compile collision triangles or simulate spheres.
- Optional tools/verify-with-b38.mjs can import runtime files from an **existing local B3.8 copy**. No B3.8 engine source is copied to this public repository. CI does not invoke it.
- The four P3 experimental JSONs and regeneration source are distributed through the explicit chat ZIP handoff. They are NOT in the repository until a separate sanitized, reproducible publishing step.
- HANGING BASILICA A3 remains reserved as a candidate, not approved or uploaded. The user-authored course remains private.
- No deploy, no main-game changes, no engine modifications, no automatic candidate approval.

## Next requirements

Before promoting any part to approved: actual B3.8 rendered screenshots, manual runs in relevant speed zones, evaluation of silhouette and detailed decoration, route obstruction and game-engine integration. Preserve all successful stages with exact hashes and immutable versions.
