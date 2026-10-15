# P23 LANDING HANDOFF — Longer 69–74m capture floor after genuine gaps

Date 2026-10-15. Baseline public `main@915fb440d5db5eaac0ead0f607d9bab8e591c4c8`. Parent offline P22 ZIP SHA256 `b23cfa6969a04b33bbcd7345755e5235b4033f224138d01d4193605802030301`.

## Actual course work

P23 modifies the **real XYZ points of collidable road surfaces** and repositions the heights of native fixed challenge fixtures to match the adjusted surface. It is not guide-line-only work. Original P22 visual architecture surfaces and non-challenge background fixtures are strictly deep-equal in **all seven stages**. Earlier P22 source is preserved, including its complete standalone original ZIP. The public game, original physics and historical staged experiments are unchanged.

P22's landing road was relatively level for ~46–51m but then abruptly entered a ~−20% grade and later ~−45–50% grade. P23 creates an additional ~23m of gentle landing-deck travel:

| NEXUS variant | Real empty roadway gap | P22 first 2 gentle spans | P23 first **3** gentle spans | Gap landing Y offset |
|---|---:|---:|---:|---:|
| COMPACT | 12.805m | 50.529m | **73.759m** | −7.486m |
| SHORT | 16.805m | 48.629m | **71.760m** | −7.486m |
| STANDARD | 22.806m | 45.810m | **68.761m** | −7.486m |
| CONTINUOUS comparison | **0m, real continuous road** | 45.810m | **68.761m** | Actual connected deck |

The first three revised centerline-row grades are around +1.1%, −2.8–3.0%, and −3.0–3.1%. The subsequent three grades descend approximately −12%, −24%, −38%, and later reach about **−46.5%**. We preserved dramatic descent, but moved its rapid onset farther from the potential landing impact. This is **real physical road mesh control-lattice editing**, not a native landing observation. The additional 23m is measured along authored road control-center segments, not proven contact at player speed.

Other actual edits, retaining large drops/crests:
- **MV-001 MIRROR VAULT:** Peak absolute grade in the measured 12–23 control region **.584 → .452**.
- **OE-001 ORBITAL ENGINE:** Peak absolute grade in measured 22–27 control region **.412 → .360**. Important caution: sparse sampled decor proximity is **3.166m**, closer than previously. **Native full-mesh collision testing is mandatory before approval**.
- **NA-001 NEEDLE ARRAY:** Peak absolute grade in measured 7–19 control region **.466 → .433**.

No moving objects, jump buttons, boosters, speed reset or changes to original game physics were added. All NEXUS gap candidates have genuinely **two disconnected collidable rideable decks**; the connected comparison has one. Their previous takeoff slope and gap lengths are retained. All candidates remain **EXPERIMENTAL_NOT_APPROVED**.

## What was verified (not native physics)

- Deterministic, independent `qa/verify-p23.mjs` confirmed all **7/7 static road geometry / format / fixture and scenery preservation** checks.
- **4/7 PASS from the ordinary connected-road seam audit**; **3/7 EXPECTED FAIL** for precisely one deliberately absent span in each true NEXUS gap. The special P23 check classified exactly those three and reported **zero unintentional missing seams**.
- All modified true road control grid and original architecture/scenery equality checks: **7/7 PASS**. Static 3D AABB advisory-route fixture proximity and sparse road-to-decor checks pass to the limited authored thresholds. These checks are **not swept-ball or full native-mesh intersection proof**.
- Fresh ZIP extraction into a separate directory, full-file checksums **33/33 PASS**, deterministic generation of **seven exact JSONs**, and rerun independent static tests **7/7 PASS**.
- Geometry-based four-course previews, four comparison diagrams, and a source-derived profile of the four NEXUS options were generated; images are **not native gameplay screenshots**.

## NOT RUN — unambiguous native gate

The original B3.8 `surface.js`, `collision.js`, `physics.js` and native renderer are **not accessible in this build environment**. Therefore **the live B3.8 import, recognition of two physically separate rideable decks, game ball collisions, natural takeoff, flight, actual landing, 28–96m/s completion, camera visibility, human play and compatibility with game v7 are all NOT RUN.** The runtime treatment of `generatedRoute:true` and authored `route` is unknown. Historical P4 physics data cannot be transferred. P23 includes an offline gate document, not fabricated telemetry. The native trial order remains the continuous comparison first, then 12.805m, 16.805m and 22.806m if earlier tests support proceeding.

## Safe distribution and preservation

Full editable native-shaped JSON, standalone reproducible P23 generator, static QA, full P22 original ZIP, seven immutable P22 JSONs, source-derived diagnostics, file SHA256SUMS and `P23_NATIVE_READONLY_GATE.md` are distributed privately in `STAGE_FORGE_P23_LANDING_HANDOFF_FOUR_FAMILIES.zip`, SHA256 `fd91603b016c6baefc3a21874c7e6ef24e8e43f17e369b097e3eae5f710df2fb`.

**This Public Draft PR includes only this note and [`experiments/P23_INDEX.json`](../experiments/P23_INDEX.json).** No game/physics/editor source, actual authored course JSON, original user stages, generator, images, private assets, personal info or deployment. No main merge, stage catalog approval, deployed game change or production release.
