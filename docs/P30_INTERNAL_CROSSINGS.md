# P30 INTERNAL CROSSINGS — four actually built 3D monumental stage families

Date: 2026-10-15. Frozen Public main: `915fb440d5db5eaac0ead0f607d9bab8e591c4c8`. All candidates remain **EXPERIMENTAL_NOT_APPROVED**. This Public Draft PR contains **ONLY** descriptive metadata and a reproducible result synopsis — never private source or the actual stage files.

## Four completely original courses made and archived offline

| Original ID and name | Actual road geometry and architectural concept | Sampled centerline Y span | Real nonlocal plan-view centerline road crossings |
|---|---|---:|---:|
| CX-001 CROSSWIND CONFLUENCE | A descending multi-altitude skew junction; 12 massive diagonal piers, 8 inverted overhead crossbeams, 6 lower wedges and 5 fan/tower fins | 173.84m | 1 — centerline Y difference 127.39m |
| LC-001 LANTERN CATHEDRAL | Ascent through a huge skylit atrium to a high gallery then dramatic descent; 8 flying buttresses, 8 lantern/light shafts, 7 upper galleries, 8 light ribs | 237.97m | 1 — centerline Y difference 79.24m |
| GF-001 GATEFOLD FOUNDRY | Zigzag through seven massive asymmetric gate frames and huge elevated vault throats, descending through the complex; 14 gate wings, 7 roof vaults, 6 bellows/chimneys, 4 underkeel surfaces | 192.0m | 0 — deliberately a different noncrossing family |
| SC-001 SPLIT CORE | Skewed diagonal road bridging a structural labyrinth at two elevations, enlarged hairpin return and 3D crossover; 12 oblique diamond slabs, 8 crosswebs, 6 underbraces, 5 outrigger spires | 204.05m | 1 — centerline Y difference 126.57m |

All four are **new original JSON geometry**, not gallery-only concepts, recolored copies, reused P29 road layouts or stage edits in the deployed game. Each export contains 1 continuous 31×5 control-point `rideable:true, collidable:true` road surface, **31 separately authored `rideable:false, collidable:false` structural surfaces** (32 surface ceiling), **115 fixtures total**, 7 real fixed-native-kind challenges, 481 explicit advisory guide points, a spawn and one complete route segment.

The road crossings are verified as **XZ plan-view intersections only**; the physically separated road surfaces at the intersection are not attached, intersecting or branched. A dedicated test samples the **entire lateral road cross-section** at the relevant different progress parameters, finding a lower-bound vertical separation of **120.652m CX / 70.460m LC / 116.273m SC**. These figures refer to the independently interpolated authored geometry; **they are not engine-mesh, actual ball clearance or native physics claims**.

## Independent offline findings and actual corrections

- The four initial authored-format and 3D road-edge/obstacle AABB-proxy checks are **4/4 PASS**. Every stage contains 7 challenge fixtures. These are only proxy volumes: the actual game ball radius, collision system and object dynamics are not imported.
- We reconstructed *explicit Catmull–Rom triangle meshes* of each real road and each of its 31 building surfaces and compared triangle-to-triangle separation at **two distinct subdivision densities, step 2 and step 3, 4/4 PASS** for both. At step 3, nearest reconstructed road-to-monument distances were **CX 19.281m, LC 12.611m, GF 30.486m, SC 20.427m**. This is **not the original B3.8 renderer/collision tessellation**.
- An early LANTERN cathedral prototype had **actual reconstructed roadway/building intersections**. We moved the offending buttress/shaft/light and overhead gallery pieces outside the drive envelope, then reran both levels of independent mesh QA. The final course does **not** include these known early intersections.
- An early SPLIT CORE had a too-tight late bend: maximum static preferred guide curvature about **0.077/m**. The **real road centerline** was rebuilt with a broader final arc and offset monumental diamond slabs to avoid new proximity; final authored guide maximum **0.02582/m**, step 2+3 mesh checks PASS. Neither version has undergone native driving.
- Physical sampled road centerline elevation spans are between **174m and 238m**, but the LANTERN real control-road max climb/descent grade is approximately **+55%/−57%** and may be physically unplayable at game speeds without native tuning. It remains a flagged risk, not a success.

## Reproducible offline deliverable and no native-play claim

The offline user ZIP is `STAGE_FORGE_P30_INTERNAL_CROSSINGS_FINAL_FOUR_FAMILIES.zip` (SHA256 `dfe506239a962535fcabd648d1a529565e45eb2b03ab20f3f960eb668ebd7f8b`, 23,004,773 bytes). It includes:
- Four complete newly authored native-format-shaped JSON course exports plus a fresh independent deterministic original generator and shared foundation module.
- Independent authoring/geometry static verifier, actual centerline XZ-crossing detector, road full cross-section vertical-clearance verifier, independently reconstructed triangle/triangle near-intersection scanner, QA reports and per-file checksums.
- Four geometry-backed multiview previews, 4-family architecture gallery and real centerline crossing/elevation plots. **These are not screenshots of B3.8 gameplay**.
- Four immutable original P29 full JSON courses, plus the complete preserved P29 original handoff archive with verified SHA256 `f3682bc5e65cd736c6c12c567e06b21e574080fbb2442c66cfeba124969255ad`.
- A stepwise native read-only test gate for subsequent authorized B3.8 runtime validation.

The FINAL package was unpacked in a fresh independent location: **41/41 SHA256 payload files matched**. **4/4 generated JSONs regenerated byte-for-byte**; the independent static format/mesh/plan-crossing/cross-section checks were rerun and passed. Complete P29 original archive hash confirmed.

**UNTESTED**: the original authorized B3.8 `surface.js`, `collision.js`, `physics.js`, renderer, camera, import behavior for explicit `route` plus `generatedRoute:true`, ball radius/collisions, 28–96m/s real speed and steering, human play, takeoff/landing, and game v7 integration. No prior P4 or P29 physical success applies to these new stages. No single stage is considered actually finished or approved.

## Publication boundary

**Public PR contains only this doc and [`experiments/P30_INDEX.json`](../experiments/P30_INDEX.json).** Stage geometry JSON, generator/QA source, geometry preview images, private original game/editor/physics code, all P29 original materials, user-designed stages and private assets, deployed-site config and credentials are NEVER published. No main merge, original game or site change, previous PR alteration or catalog admission without separate user approval. This Draft remains metadata-only.
