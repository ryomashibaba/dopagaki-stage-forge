# P33 VORTEX CAUSEWAY — stage-only giant descent / 2026-10-15

Experimental, **NOT GAME APPROVED**. Public frozen main: `915fb440d5db5eaac0ead0f607d9bab8e591c4c8`. Parent: P32 SKYFALL SPAN.

## Real offline road and monumental architecture production

From the **unchanged P32 RIFT original**, P33 built four new real `dopagaki.track-director/1` stage JSONs: VORTEX CLEAR/STATIC and SAIL CLEAR/STATIC, plus two byte-identical P32 RIFT controls. This is real **physical collidable road control geometry** in the huge Z≈340–453m chasm, not a guide-only or cosmetic change.

P33 modifies exactly **25 XYZ landing-road control points** (five full rows, 5 columns) per newly authored course. The P32 source road is preserved for true comparisons. Modified portion: landing road rows **6–10**; jump lip, gap, first six landing rows, rows **11–20** including **all three previously established future B45 bays** and chamber architecture remain unchanged.

| Authored profile | Peak displacement from already sculpted P32 RIFT | Peak Y variation | Peak X variation |
|---|---:|---:|---:|
| **VORTEX** — primary, massive double crest + changing bank | **9.0797m** | **8.266m** | **3.7569m** |
| **SAIL** — calmer alternate skyfall | **6.9329m** | **6.004m** | **3.6906m** |

P32 had eighteen huge noncolliding suspended structural `beam` elements in this skyfall. P33 **repositioned all 18 on the new road** rather than leaving them floating arbitrarily above the old route; six vertical spines also receive greater visual height. We added **four very broad elevated VOID CROWN beams** above the falling corridor. Both new stage profiles hold **32/32 surfaces and 253/256 fixtures**, leaving **3 free slots** for actual future imported B45 moving obstacle instances, subject to verified sample schema. All **231 pre-P32 fixtures**, all 30 original enormous architectural surfaces, existing P31 three-bay chambers and P30 placement intention are kept. Existing stationary danger/clear training modes remain true native collision or noncollision variants.

## Genuine ORIGINAL B3.8 legacy physics (NOT moving B45 physics; NOT human driving)

Native **unchanged five old B3.8 runtime modules**, built-in original heading assist ON, discrete 100ms machine steering policy (`center` and `anticipation80`), speeds **28/44/64/96m/s**, four newly authored versions = **32 actual runs**:

| Course | Genuine old B3.8 assisted result |
|---|---|
| **VORTEX CLEAR** | **8/8 finished** |
| **VORTEX STATIC** | **7/8 finished**; 64m/s with 80m anticipated maneuver hit a real fixed danger |
| **SAIL CLEAR** | **8/8 finished** |
| **SAIL STATIC** | **4/8 finished**; four further genuine *fixed danger* collisions |
| **Total** | **27 grounded-near-guide-end finished / 5 fixed hazard failures** |

These are real original B3.8 physical contact/failure outcomes under **machine** control, not actual human key driving, not game-v7 scoring. No fabricated moving obstacles. We tested and discarded an earlier sharper swing (~21m real 3D road displacement): it failed 14/32 trial cases, with low-speed off-road deaths, so those overly aggressive geometry parameters are **not** the P33 delivered version. The revised VORTEX retains strong elevations/banks but both CLEAR editions pass all eight assisted conditions. This is a concrete iteration informed by physics rather than visuals alone.

## B45 development team split / no invented moving JSON

According to the user, the other B3.8 development branch has built horizontal slider, rotating arm, vertical piston and per-obstacle response C (instant fail/bounce/push) by B45, with 98/98 automatic tests PASS. **Exact exported B45 fixture fields and official samples have NOT been provided to this stage-authoring thread, and Windows B45 integrated play is unconfirmed.** Therefore P33's actual JSON files contain **zero new moving hazard kinds and zero guessed collision C settings**. Old B3.8 static `danger` fixtures are NOT claimed to be moving substitutes.

The original editor/movement/physics/QA source is owned by the other branch and was not changed or published here. After the exact B45 three-object example arrives, transplant only official names/properties to three reserved slots; have the editor branch verify read-save-reload and moving physics. Three bays remain in unchanged landing rows 11–20.

## Exact immutable original and independently reproducible offline delivery

Private chat ZIP `STAGE_FORGE_P33_VORTEX_CAUSEWAY.zip`, SHA256 `3f914b963fd552f71699c84585243b9e916be8619d7f2e1660c14c607240cd62`, contains:
- immutable complete original P32 ZIP SHA256 `d64ea421bdff32e0804990cfbe317389ca2f002f6e98dd0b44a0c2f287ca78bd`;
- 4 actually revised stage JSONs and 2 byte-identical parent P32 RIFT controls, deterministic zero-dependency Node source generator, original five B3.8 physics modules (unchanged), 32 real original B3.8 physics run records including five failures, independent geometry/integrity verifier and three geometry-driven matplotlib previews;
- custom standalone **local-only** manual-input/assist switching viewer, optional `START_P33_VIEWER.cmd`, Japanese README, exact future B45 schema gate, and SHA256SUMS.

The new ZIP was **freshly extracted to an independent temporary directory**, with **35/35 checksum manifest entries PASS**, **6/6 stage JSONs byte-identical on deterministic regeneration**, **32/32 old B3.8 real run results byte-identical (including failures)** and independent geometry/fixture/unchanged-source assertions PASS. All checked payload files remained byte-identical after reruns. Original native B3.8 seven core tests PASS. Local viewer's HTTP resources **8/8 HTTP200**. We do **not** claim a fully automated browser real-human play session, original B3.8 editor UI/camera, native B45 moving collision, or published game v7 integration.

## Public GitHub scope

Only this explanatory document and [`experiments/P33_INDEX.json`](../experiments/P33_INDEX.json) are included in this Draft PR. **DO NOT publish** the actual stage JSONs, generator, bundled original old physics source, full parent archive, browser viewer, preview images, telemetry, user-authored stages or unreleased assets. No merge into main, no old PR modification, no B3.8/editor/physics changes, no live game or public site deploy, no stage catalog promotion.

**Status: EXPERIMENTAL_NOT_APPROVED.** Future P34 should prioritize official B45 integration when its actual schema becomes available, otherwise substantially differentiated stage/drive production rather than endless metadata-only work.
