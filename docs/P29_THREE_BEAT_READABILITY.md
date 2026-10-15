# P29 THREE BEAT READABILITY — real beginner danger course & clearer driving diagnostics

Date: 2026-10-15. Public frozen baseline `main@915fb440d5db5eaac0ead0f607d9bab8e591c4c8`. Parent: P28 THREE BEAT ROADPLAY. **EXPERIMENTAL_NOT_APPROVED**.

## Actually built OFFLINE

P29 makes exactly **one new genuinely collidable native-format stage JSON** derived from P28 CHALLENGE, not merely a decorative training variant. It preserves all **32 original surfaces**, complete road and huge architecture, spawn, route, all 124 pre-P28 props, and the genuine 12.805m NEXUS separated-deck launch and landing. The original 3 lethal `danger` objects are still lethal, but physically re-sized from **3.50×3.40×4.40m** to **2.55×3.10×3.30m** and moved laterally farther toward the left/right/left edges by changed normalized `v` [.255,.745,.265] versus the original [.32,.68,.33]. Total native fixture count remains **127**. No original B3.8 physics or stage road control points have been modified.

The parent **P28 STANDARD** actual danger stage and **P28 TRAINING** non-colliding marker stage are included **byte-identically** in a separate private ZIP. Three earlier P26 reference courses are also bitwise preserved. The full immutable original P28 archive, SHA256 `7992e3c5b10e220f4d02bd0b12006566bcaa696adcc8e3d5c52ce70229d6c6f9`, is nested unchanged.

### Custom diagnostic browser improvement (NOT original editor UI)

The real original B3.8 `Runner.step`, surfaces, swept contacts and danger fixtures are loaded as **unchanged in-memory ESM blobs** into real Chromium in an isolated custom HTML5 Canvas viewer. The normal localhost browser navigation was administrator-blocked here; a locally launched Node static server did respond HTTP 200 through ordinary CLI retrieval. Therefore neither real original B3.8 editor UI nor human manual driving was tested.

P29 custom viewer now projects **actual 3D box extents** and light/warning poles from real JSON challenge-fixture dimensions, rather than showing only tiny red dots. It adds a text cue for required passing side, real geometric distance to next danger, and **distance ÷ actual current speed** as an approximate time-to-obstacle; it changes cue prominence near obstacles. Real MANUAL keydown/up events record B3.8 simulation time, ball Z and upcoming hazard distance/time in a locally downloadable JSON. Original low/reference/overhead diagnostic cameras and the training-only real supported landing checkpoint remain.

A real Chromium automated test confirmed the beginner and standard displays, a scripted ArrowRight key forwarded through the original physical `Runner` for 60 ticks, two captured key transition events and true landing-checkpoint initialization, without JavaScript exceptions. Five genuine custom-viewer screenshots are in the offline ZIP. **No human drove the track**. Original native editor camera and deployed game integration remain unverified.

## Actual unchanged B3.8 physics trial matrix (24 tests, failures preserved)

Three initial speeds: **28, 64 and 96m/s**, both REAL danger versions; four computer-generated discrete-key policies:

| Input policy (automatic, original assist ON) | BEGINNER 28/64/96 | STANDARD 28/64/96 |
|---|---|---|
| 100ms decisions, track center | **Finished / danger hit / finished** | **Danger hit / danger hit / finished** |
| 100ms decisions, lateral 12m intent starting 80m ahead | Finished / finished / course fall | Finished / finished / course fall |
| Same but onset distance reduced by speed×250ms | Course fall / finished / finished | Course fall / finished / finished |
| 200ms decisions with onset reduced by speed×400ms | Course fall / course fall / finished | Course fall / course fall / finished |

**Caution:** The '250ms/400ms delay' is an authored **shorter lookahead distance**, **NOT** measured biological/human reaction time, nor a real communications latency. Every test had perfect access to actual world geometry and position from native simulation. Original B3.8 built-in `Runner.assist` was enabled. Thus these tests are not a real novice win rate or proof of intuitive manual skill. Note the deliberately recorded *non-monotonic difficulty*: the beginner setting can still hit a real danger at 64m/s; certain aggressive predicted avoidance policies steer too far and end up falling. Some standard 96m/s centerline runs nevertheless finish. Do not fabricate an overall difficulty score.

The test uses the **actual original** 5 B3.8 runtime modules, not a toy point-mass model, with real danger/road physics. The original `Runner.finished` definition is supported near-route-end, not game-v7 scoring approval.

## Reproducible offline delivery, strict privacy

The complete P29 offline user ZIP `STAGE_FORGE_P29_THREE_BEAT_READABILITY.zip`, SHA256 `71b09ce040d5a97e439b6a7f4326b53be593e1ea4e7242e0ad32c5ede09ed8fd`, includes:
- all **6** true authored/immutable stage JSONs, standalone deterministic P29 generator, exact complete source P28 archive and 5 immutable P28 tracks;
- original 5 unchanged B3.8 runtime modules, original base test, 24 real physics trial logs + programmable steering assumptions, native hazard-footprint geometry preview;
- full functional independent browser UI, Windows one-double-click localhost launcher, 5 actual Chromium diagnostic screenshots, two-key-action browser test evidence, recording/export code;
- Japanese report and commands, source/architecture integrity checker and `SHA256SUMS.txt`.

A clean ZIP extracted to a second independent directory passed **45/45 payload SHA256 checks, 6/6 byte-identical JSON regeneration and 24/24 byte-identical B3.8 trial reproduction**. The 5 original source modules and original stage sources compare exactly to immutable P28.

## Public PR scope only / not game-ready

The **ONLY** public files committed in this Draft PR are this explanation and [`experiments/P29_INDEX.json`](../experiments/P29_INDEX.json). Actual native JSON course shapes, P28 ZIP, original B3.8 code, P29 generator, viewer source, screenshots, telemetry code/results, user-made stages, original game/editor assets, and site files remain in the offline user ZIP, not published here. No main merge, game/physics changes, live public release or catalog approval.

Next P30 priority is **real human keyboard/touch play**, initially in TRAINING or BEGINNER at 28m/s, if the user wants; the user may download its interaction log locally and share it explicitly. Only after seeing real player input/failure should the 3 fixed hazards and cues be further tuned. Public site and original B3.8 native editor camera remain unchanged and unverified; 112m/s P26 fall is a separate unsolved issue.
