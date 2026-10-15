# P30 MOVING-READY ARCHITECTURAL BAYS — stage production only

Date: 2026-10-15. Experimental, **NOT game-approved**. Frozen public main `915fb440d5db5eaac0ead0f607d9bab8e591c4c8`.

## Clarified parallel-team interface

The user's other branch has reported implementation of 3 moving obstacle systems **horizontal slider, rotating arm and vertical piston** in its modern B3.8 editor, with 33 additional tests, 31 prior QA and 48 browser checks passing. In the user's CURRENT handoff, the per-obstacle **C collision strategy (immediate fail, bounce, push)** is still *planned / not yet complete*. That editor/physics/moving-hazard work belongs exclusively to the other branch. The STAGE FORGE thread owns stage production, architecture, placement and roadplay only.

**Important limitation:** The exact new B3.8 moving hazard JSON schema, fixture kind IDs and parameter definition were not supplied in this stage-production workspace. The included P29 runtime modules precede those 3 moving kinds. **We did NOT fabricate moving objects, their collision-mode payloads or successful moving obstacle simulations.** This PR does not claim direct compatibility with the new editor build.

## Actual original authored STAGE FORGE work

Two new complete `dopagaki.track-director/1` native-*legacy*-compatible experimental stages derived from the user's true P29 beginner NEXUS stage.

1. **P30 CLEAR / MOTION READY:** on NEXUS's true disconnected jump landing road, created 3 distinct prospective movement bays, each with real upper cross-beams (2) and left/right entry light columns (2), installed as 12 noncolliding valid legacy-native fixtures. Each bay center has a non-colliding `marker` instead of a `danger`. No animated hazard yet.
2. **P30 STATIC / PHYSICAL REHEARSAL:** exactly the same architectural decoration, but 3 bay-center props are genuine **stationary `danger` collisions**. This is an actual possible stage to practice avoidance; it does not mimic motion physics.
3. Original **P29 BEGINNER** and original **P28 STANDARD** challenge stages preserved byte-for-byte in generated files, alongside immutable complete source P29 ZIP.

Three **real roadway coordinate anchors** are stored in a separate authoring-only JSON `source/P30_MOTION_BINDING_CANDIDATES.json`:
- **SLIDER GALLERY**, landing rideable surface u **0.600**;
- **ROTATOR ATRIUM**, u **0.755**;
- **PISTON VAULT**, u **0.900**.

For each center the original B3.8 Catmull–Rom `sample(road,u,v)` computes real XYZ anchor; suggested movement envelopes are **design sketches only** with `nativeFixturePayload: null`. No invented JSON field is put into an executable course. All 32 original surfaces, road geometry, start points, authored guide, all enormous architecture, all original 124 scenery/challenge objects remain unchanged; fixture counts rise from 127 to **139** (12 additional noncolliding beams/markers) in each new course, below the 256 limit.

## Original legacy B3.8 physics evidence, honestly scoped

We executed **12 native physics runs** on original unmodified *P29-inherited* 5 B3.8 modules: CLEAR and STATIC course × 28/64/96m/s × computer-driven 100ms `center` and `anticipation80` discrete left/right steering, with original `Runner.assist` ON. Results:

| Real physics course / machine policy | 28 m/s | 64 m/s | 96 m/s |
|---|---|---|---|
| CLEAR / center tracking | finished | finished | finished |
| CLEAR / anticipatory steer | finished | finished | **fell off course** |
| STATIC / center tracking | finished | **hit actual lethal stationary danger** | finished |
| STATIC / anticipatory steer | finished | finished | **fell off course** |

**9/12 native assisted results finished, 3/12 failed**. The intermediate speed collision and oversteer fall are meaningful failure evidence. This validates real *static* collision and stage-authored geometry, **not** moving-slider/rotor/piston animation or swept collision, not per-obstacle C response, and not human skill. Original B3.8 tests passed 7/7.

A functional **local-only isolated custom viewer** renders actual non-moving course JSON and runs original legacy physics. Actual localhost Node HTTP resources returned HTTP 200 for HTML, JS, both new JSONs and design-only socket metadata. A preview image was generated from real source control points of the huge 3D building and roadway and explicitly labels motion types **PLANNED**, not currently running.

## Reproducible SAFE delivery

The private ZIP `STAGE_FORGE_P30_MOVING_READY_BAYS.zip`, SHA256 `957b102a3492091c464d406955ffaf5469aaae8dba8721f9144a9825ed83230e`, contains:
- 4 entire course JSONs (2 new stage builds + 2 exact originals);
- intact P29 complete ZIP and original runtime source, all code retained **only privately**;
- deterministic `source/generate-p30.mjs` with architecture fixtures and 3 design-only movement slots;
- independent test and original 12 real legacy native assisted-physics logs including failures;
- a custom isolated local-only player-view build, actual geometry-backed 3D drawing, Japanese README and SHA256SUMS.

Archive was freshly unzipped into another independent directory: **30/30 manifest SHA256**, **4/4 course JSON byte-exact reproduction** and **12/12 original B3.8 legacy static physics stdout byte-exact replay**, source/hazard preservation and independent static QA PASS.

### Next required contract before stage release with truly moving props

Transfer the integrated `DOPAGAKI_B38_MOVING_INTEGRATED_20261015.zip` **or one representative exported stage JSON containing each of the three true moving kinds** from the other branch. STAGE FORGE would then bind the real property names/types to these existing three measured anchors, without editing the B3.8 physics, editor/UI or collision strategies. Unless/until the C per-object mode is confirmed actually implemented and tested, **do not serialize C mode settings at all**. Then run both the other branch's moving collision/native editor import and the user's stage-drive tests on the actual moving edition, recording failures as such.

**This Public Draft PR adds ONLY this explanatory document and [`experiments/P30_INDEX.json`](../experiments/P30_INDEX.json).** No real new stage JSON, the original B3.8 source, generator, user work, screenshots, ZIPs, game editor, editor modifications, main merge, site deployment or approved-stage registration. Status: **EXPERIMENTAL_NOT_APPROVED**.
