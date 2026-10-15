# P30 INTERNAL CROSSINGS — four original giant architectural roadplays

Date: 2026-10-15. Public main held at `915fb440d5db5eaac0ead0f607d9bab8e591c4c8`. These four **actual independently generated JSON courses are all EXPERIMENTAL_NOT_APPROVED**.

## Real original stage production

P29's four complete JSON courses are SHA256-verified unchanged and included in the separate offline P30 ZIP, together with the original full P29 archive. P30 creates **four substantially different real courses**, not recolors: one collidable, continuous 31×5 control grid **rideable road** per new stage, 31 newly authored noncollidable monumental architectural surface grids, 115 actual native-kind fixtures (seven fixed challenges plus 108 structural decorations), one 481-point advisory route and native-format-like spawn/route refs. No engine, physics, game editor or published website was modified.

| New stage | What the road actually does | Independent real center-road elevation span | Actual nonlocal XZ centerline crossings |
|---|---|---:|---:|
| **CX-001 CROSSWIND CONFLUENCE** | Traverse an oblique, very large internal high-viaduct interchange with ramps passing over and below one another | **173.84m** | **1** |
| **LC-001 LANTERN CATHEDRAL** | Ascend inside a roofed giant vertical atrium to high balconies, make a turn and plunge down a cathedral nave | **237.97m** | **1** |
| **GF-001 GATEFOLD FOUNDRY** | Slalom through seven pairs of giant offset asymmetric structural gates with high roof portals and declining road elevation; *no actual centerline over/under crossing by design* | **192.0m** | **0** |
| **SC-001 SPLIT CORE** | Follow a skewed internal cross-axial lattice with diagonal road bridges at two different levels | **204.05m** | **1** |

The control-point widths, banks, fixed object positions, full 3D road and arch supports all exist in four regenerated complete JSONs, not only architectural descriptions. The long multilevel roads are continuous; there are **no fabricated air gaps, true road forks, moving gates, jump buttons, boosters, speed resets or proven ball flights**.

## 3D road-crossing validation

The independent `qa/check-crossings.py` precisely detects **nonlocal plan intersections of the *true exported road centerline*** after sampling the Catmull–Rom road geometry at 481 points. Their measured center height differences are **127.39m / 79.24m / 126.57m** (CX, LC, SC). An additional independent check of the *entire width of each road cross-section at the corresponding crossing positions*, including authored 1.4m thickness per road, estimates **minimum vertical intervals between the two road sections** as **120.652m / 70.460m / 116.273m** respectively. All three pass the explicit, conservative **>35m authoring-space separation threshold**. This does **not** establish global self-intersection freedom, actual moving ball flight, or B3.8 native two-road collision.

GF-001 reports zero crossings, not an invented positive result. Its seven gates are giant side wings/roof structures with unobstructed driving floor.

## Independent offline static geometry and reproducibility

- Standalone format/road/fixture IDs/mesh-count/continuous seam/road-edge and 3D guide-to-obstacle AABB static audits: **4/4 PASS**. These proxy margins exclude real ball radius, inertia, true camera visibility and native runtime.
- Road against **all 31 new architectural surfaces**, independently reconstructed as Catmull–Rom triangles, tested at **two** and **three** subdivisions per control cell: **4/4 PASS**, no reconstructed intersections at the tested mesh densities. Closest triangle-to-triangle distance at step3: CX **19.281m**, LC **12.611m**, GF **30.486m**, SC **20.427m**. This is **not** original B3.8 renderer tessellation or native collision mesh; triangle edges/thickness can differ.
- After a **clean independent extraction**, the offline archive's **42/42 SHA256 payload records** were verified, all **4/4 complete stage JSONs reproduced byte-for-byte** from the original deterministic Node source, and the independent format/static geometry, intersection, crossing-section, two triangle-mesh-density checks all reran successfully.
- Exact P29 original full archive SHA256 `f3682bc5e65cd736c6c12c567e06b21e574080fbb2442c66cfeba124969255ad`; original four P29 stage JSONs individually verified against that ZIP. All existing previously designed and deployed assets remain protected.
- Source-derived diagnostic gallery, four multiview stage illustrations, road profile diagrams and true-overpass heights are in the separate offline package. These are **geometry projections and not native gameplay captures**.

## What we DID NOT do / next test gate

The original authorized `B3.8 surface.js`, `collision.js`, `physics.js`, renderer and official physics runtime are not available in the current working environment. Consequently **no native import, real collisions or swept-ball tests, auto 28–96m/s driving, human play, jump/landing, game camera sightlines, or game-v7 integration have been run**. Native `generatedRoute:true` combined with manually-authored advisory route remains unverified. Old P4 completion results cannot transfer.

All stage candidates remain **EXPERIMENTAL_NOT_APPROVED** until dedicated native gameplay and manual driving can validate actual feasibility. Future testing should try GF's continuous portal drive at low speed first, then the three over/under cases with real collision/contact analysis; high-speed and player reaction time tests only after native loading.

## Strict publication boundary

The user receives `STAGE_FORGE_P30_INTERNAL_CROSSINGS_FOUR_NEW_FAMILIES.zip` in the private conversation, containing all four real JSON tracks, the actual deterministic source generator, standalone QA scripts/reports, geometry-backed previews, immutable complete P29 source archive and four original P29 JSONs, file-hash manifest, and the native read-only gate.

**This Public Draft PR contains only this text and [`experiments/P30_INDEX.json`](../experiments/P30_INDEX.json).** Full stage JSONs, generator, static QA scripts, 3D previews, complete P29 source ZIP, user's own stages, private original game/editor/physics source, credentials and deployment code must **not** be published. Do not merge to main, change game v7, promote to production catalog or modify older Draft PRs. No Work/Windows user operation was required for the offline phase.
