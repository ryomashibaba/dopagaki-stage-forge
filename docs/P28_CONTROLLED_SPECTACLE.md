# P28 CONTROLLED SPECTACLE — dense challenge repair, four original monumental courses

Date: 2026-10-15. Frozen Public main `915fb440d5db5eaac0ead0f607d9bab8e591c4c8`. Four P27 stage originals and the full SHA256-preserved P27 ZIP remain offline, unchanged. All P28 output remains **EXPERIMENTAL_NOT_APPROVED**.

## Actual new work: modify the real courses, not just diagnostics

P27 had 11–13 fixed challenges per stage. Independent measurement of the **actual 481-point authored route arc distance** found nearest successive obstacles as close as **40.98m on WAVE, 48.02m on PRISM, 60.59m on KITE, 77.12m on TERRACE**. A 96m/s *constant hypothetical speed* would traverse 41m in 0.43 seconds; that does **not** model native acceleration, display visibility, human recognition or reaction.

P28 regenerated all four full `dopagaki.track-director/1`-shaped course JSONs with **real changed collidable 31×5 road control grid width and bank**, fewer, relocated native fixed challenge objects, and redesigned smoothed advisory 481-point routes (not just scripted plans). No changes were made to center-road 3D Y elevation: the previously ambitious 109–153m high-relief ride architecture and key plan geometry remain.

| Original stage | Fixed native challenge objects P27→P28 | Nearest along-guide obstacle interval P27→P28 | Worst authored guide planar curvature /m P27→P28 |
|---|---:|---:|---:|
| TS-001 TERRACE SHOCK | **13→10** | **77.12→142.31m** | .03174→.02734 |
| RW-001 RESONANCE WAVE | **12→8** | **40.98→106.19m** | .17404→.03282 |
| PR-001 PRISM RIFT | **12→8** | **48.02→104.24m** | .12742→.05192 |
| KH-001 SKYHOOK KITE | **11→8** | **60.59→99.98m** | .14360→.12177 |

The original three sweeping suspended TERRACE turns, all three WAVE vertical oscillations, the PRISM crystalline slalom, and KITE's superclimb/long dive all remain. Each track's all **31 visual-only monumental surfaces and all 132 original background fixtures** are *exactly deep-equal* to its P27 original. Only the 1 collidable road surface plus challenges and advisory route were changed in each. Measured altered authored road control points: TS **124**, RW **117**, PR **124**, KH **122** (out of 155).

P28 removes particularly close PRISM and WAVE challenge pairs and avoids placing the final obstacle too close to a track end. It introduces wider road shoulders/aprons into selected turn approaches while scaling bank peaks down slightly, instead of simply deleting architecture or flattening large descents.

## What we **actually** audited (independent geometry, not game physics)

- Fresh zero-private-runtime independent format/road/seam/route-edge and native-kind obstacle AABB proxy geometry: **4/4 PASS**; a new early TERRACE obstacle conflicting with the advisory route was moved to the opposite side before final production.
- Original scenery/monument JSON exact preservation **4/4 PASS**; each real road control lattice changed, not metadata-only.
- Minimum arc distance between adjacent fixed challenges on the **P28 3D route** `>=95m`: **4/4 PASS**.
- All four maximum calculated planar curvatures of the **advisory guide**, not ball path, are lower than P27. **This does NOT prove drivable high-speed curvature**.
- Independent reconstructed Catmull–Rom **triangle-to-triangle** distances at subdivisions 2 and 3 over road × all 31 structural surfaces: **4/4 PASS** without detected reconstructed intersection. At subdivision 3 TERRACE nearest 16.311m, PRISM nearest 38.669m, WAVE/KITE >=16m under configured cutoff. **This is not the original native B3.8 collision mesh**.
- A separate **96m-before-each-hazard authored-guide curvature scan**, **not real sightline/raycast/camera visibility**, reports **KITE 2/8 caution sections** at curvature >=.06/m and 0 marked sections on the other three. KITE remains a risk, not a completed fix.
- Archive was freshly extracted in a separate working folder, **36/36 SHA256 payload checks** and **4/4 byte-exact deterministic stage regeneration PASS**. Re-ran structural QA, P27/P28 comparisons, 96m curvature scans and both mesh subdivision audits with PASS. ZIP carries 37 files including the SHA256 manifest.

## Absolutely NOT native validated

Native B3.8 importer/renderer, `surface.js`, `collision.js`, `physics.js`, actual ball radius/swept collision, high-speed turn grip, moving camera, obstacle visibility, human reaction, 28–96m/s completion, flights and landings, actual generatedRoute:true authority, and published game v7 integration **were NOT RUN or verified**. Arbitrary **distance / 96 m/s** is a constant-speed arithmetic illustration, **not** evidence of real time-to-react in the game. The speed-dependent fairness of 8–10 obstacles is unproven; we must not claim a playable PASS.

## Reproducible offline release, strict privacy

The user received `STAGE_FORGE_P28_CONTROLLED_SPECTACLE_FOUR_FAMILIES.zip`, SHA256 **`5b08430e53f1acc3d5902ca4928c395235c3426c76fcc903c10cfbe8c3197cfc`**. It contains the four complete stage JSONs, offline deterministic original generator and foundation, original unchanged P27 stage JSONs and entire P27 ZIP, 4 static reports and scripts including the independent reconstruction code, actual-JSON 3D multiview previews, detailed P27/P28 measured timeline image, all-file SHA256SUMS and a read-only native B3.8 QA gate.

**This Public Draft PR adds ONLY this explanatory document and [`experiments/P28_INDEX.json`](../experiments/P28_INDEX.json)**. Actual stage JSONs, generators, tests, preview images, full historical P27 archive, private original game/editor/physics data, user-authored stages, deployment sources, secrets or other confidential assets are NOT uploaded. Main, previously open Draft PRs, original deployed game and official stage catalog are not changed or merged.

Next step: risk-directed native B3.8 import/camera/ball drive testing when original authorized runtime is available, with **KITE's two geometric turn cautions** prioritized; meanwhile continue creating genuinely different spectacular stage architecture rather than endless paperwork.
