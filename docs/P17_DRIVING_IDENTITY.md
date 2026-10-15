# P17 DRIVING IDENTITY — four preserved megastructures, four distinct real driving challenges

Date: 2026-10-15. Public main `915fb440d5db5eaac0ead0f607d9bab8e591c4c8`. Parent experimental stage data: P16 ARCHITECTURAL CONTRAST.

## Actually built and preserved

Regenerated **four real native-format-shaped course JSONs** from separately archived, SHA256-verified P16 originals; each has actual altered continuous road control-lattice width/bank/height, changed fixed-obstacle placement, and a separately smoothed advisory driving guide. In all four, all **31 architectural surfaces** and **all non-challenge scenery fixtures** remain deep-equal to P16. No dynamic obstacles, true physical road fork, editor or live game changes.

| Stage | Driving challenge implemented in real JSON | Road min–max width | Max bank | P17 longest authored-guide fixed-hazard-free interval |
|---|---|---:|---:|---:|
| MV-001 MIRROR VAULT | Three alternating two-sided central gate choices and two offset blocks between canted reflector walls, with real bank and changing-width constrictions | 19.32–42.32m | 15.7° | 141.9m |
| HN-001 HYPERBOLIC NEXUS | Two narrow hourglass waists linked by a broad recovery space; opposite bank directions and offset pillars on the waist approaches | 18.67–41.79m | 25.0° | 198.8m |
| OE-001 ORBITAL ENGINE | Real hazards concentrated at entry and departure, with a long unblocked **532.2m** authored-guide section around the giant central hub, retaining the P16 radial/hub/radial 3D course | 21.00–41.81m | 17.7° | 532.2m |
| NA-001 NEEDLE ARRAY | Six fixed blockers organized into three two-beat rhythm groups in a dense spike structure, with intervening release plazas | 20.32–48.20m | 15.2° | 154.0m |

All four still use one continuous rideable/collidable road surface plus 31 noncollidable architectural surfaces; count is 32 surfaces each, fixture counts 120/124/113/111.

## Honest independent QA

- Zero-dependency standalone authoring-format-like and static mesh geometry checks: **4/4 PASS**.
- Changed actual rideable road points and original architecture/background fixture equality: **4/4 PASS**.
- Central fixed hazard left/right sampled cross-section AABB clearance: **7/7 PASS** locally; it is **not** a complete dual-route or native ball-swept test.
- Static independently sampled advisory route-to-road near membership **4/4 PASS** (worst section proxy approximately 0.98m), route edge/fixture proxies and declared seams within static thresholds.
- A discrete advisory-route interpolation kink was discovered on NA-001, then removed by smoothing the *route only*; real physical road control points remain unchanged by the smoothing operation. P17 recorded max authored-guide planar curvature: MV .00758, HN .00529, OE .00929, NA .00658 per meter. These geometric values **do not prove high-speed turning or arcade-physics completion**.
- The complete ZIP was extracted into a fresh independent folder: all file SHA256 sums verified, regenerated the four JSON files **byte-for-byte**, and ran three standalone static verification scripts successfully.
- **NOT RUN**: native B3.8 physics/autopilot at 28–96m/s, real collision geometry, full human two-sided playability, human manual test, actual game camera, dynamic obstacle behavior and public game v7 integration. The authored guide's authority when `generatedRoute:true` is **UNVERIFIED**. Neither P4's 24/24 native results nor any other older completion reports apply to P17.

## Public safety and delivery

The user's offline ZIP `STAGE_FORGE_P17_DRIVING_IDENTITY_FOUR_FAMILIES.zip` (SHA256 `8fddbc9d975c902d9c0e36f4ba5fe795d031e6fef62f1f2097157ed7d52b8d50`) contains 4 actual P17 course JSONs, immutable 4 P16 stage JSON originals and their original generator, newly authored deterministic P17 generator, multiple geometry-backed diagnostic previews, source-geometry approximate chase views, static QA scripts, reports and per-file hashes.

**This Public Draft PR commits ONLY this document and [`experiments/P17_INDEX.json`](../experiments/P17_INDEX.json)**, never stage geometry, user-authored stages, private game/editor/physics files, generators, confidential local files, secrets, third-party assets, or site/deployment configuration. Main, approved catalog, historical P16/earlier Draft PRs and deployed game unchanged. No merge or production deployment authorized.

Status: **EXPERIMENTAL_NOT_APPROVED**. Next practical priority is diversified actual geometry and low-friction native driving confirmation when a lawful runtime becomes available, without requiring complex Windows operations.
