# P11 SPEED FLOW — geometry-backed roadplay refinement (2026-10-15)

**Goal:** Improve actual driveable road and hazard pacing in the four P10 stage parts, without touching their immutable originals or the deployed game.

## What was built in the separately delivered P11 ZIP

Four deterministic native-format-shaped stage JSONs, four immutable P10 originals, the original P10 generator, working independent P11 generator, geometry/proximity/route timing audit scripts, four multiview diagrams, four illustrative chase-camera projections, and SHA256 checksums. All four **rideable road control lattices changed**, as did the position of their fixed obstacles. Original architectural language and major features are preserved. P10 ZIP is not overwritten.

- **PX-001 PARALLAX EXCHANGE:** widen crossing approaches, soften genuine figure-eight arcs, distribute six static blockers into three distinct groups with long approach distances. The independently detected 35m over-under self-crossing remains.
- **AR-001 ATLAS REVERSAL:** re-proportion the indoor switchback geometry while keeping the three horizontal direction reversals; stage six static pylons away from abrupt lane changes.
- **HC-001 HEXACHAMBERS:** widen narrow passages through the three giant chambers, soften floor banking, and separate the six fixed wall obstacles.
- **TW-001 TIDAL WAVEFRAME:** adjust the real drive-floor vertical wave and four fixed blockers, using two separated hazard groups and avoiding the sharpest downhill gradient where possible. Four altitude-direction reversals remain.

## Measured geometry-only results

| Stage | P10 → P11 max authored-guide curvature (1/m) | Reduction | Minimum first approach / adjacent hazard spacing | P11 sampled minimum width |
|---|---:|---:|---:|---:|
| PX-001 | .043265 → .033124 | 23.4% | 111.9m | 20.04m |
| AR-001 | .042489 → .033214 | 21.8% | 97.3m | 18.08m |
| HC-001 | .040798 → .029478 | 27.7% | 96.7m | 18.03m |
| TW-001 | .026281 → .014822 | 43.6% | 98.1m | 19.02m |

Static authoring-format and geometry checks **4/4 PASS**, including surface (32) / fixture (112–114) budgets, non-degenerate control cells, declared seams, 3D obstacle-to-guide AABB proxies, decor proximity samples, regenerated structures and speed-flow separation checks. The offline ZIP was freshly extracted elsewhere and the independent generator reproduced its four JSONs **byte-for-byte** (4/4). The P11 asset SHA256 hashes are in [`experiments/P11_INDEX.json`](../experiments/P11_INDEX.json).

The interval values correspond to a nominal **approximately one second at a constant 96m/s**, *not* actual game reaction time. In particular, peak idealized lateral acceleration for following these precise guides at 96m/s remains extreme; bank and game arcade steering mechanics could produce different outcomes. Do **not** describe the revised parts as proven safe or finishable at 96m/s.

## Strict limitations

- No B3.8 `surface.js`, `collision.js` or `physics.js` supplied. **No native B3.8 autopilot trials or 28/36/48/64/80/96m/s completions were performed.**
- `generatedRoute:true` plus custom `route` guide is structurally valid, but the native runtime's interpretation is **UNVERIFIED**.
- No human playtest, frame-perfect camera visibility, true swept-ball obstacle collision test, takeoff/landing proof or public game v7 integration.
- Independent projected camera previews are diagnostic approximations of exported geometry, **not actual game screenshots**.
- No historical P4/P5 trial outcome is claimed for P11.

## Publication and preservation

The stage JSONs and generator are retained **offline only** inside `STAGE_FORGE_P11_SPEED_FLOW_FOUR_FAMILIES.zip`. **This Public PR publishes only this design note and the hash-based index.** It contains no user-authored stages, proprietary game/editor source, third-party artwork, secrets, or deployment files. No changes to `main`, official approved catalog, game physics, previously issued Draft PRs or production deployment.

**Status: EXPERIMENTAL_NOT_APPROVED.** For the next phase, prioritize genuinely different gameplay patterns and simple native verification if the relevant runtime becomes available, rather than reporting static geometry as tested gameplay.
