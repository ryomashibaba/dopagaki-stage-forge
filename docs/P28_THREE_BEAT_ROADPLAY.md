# P28 THREE BEAT ROADPLAY — real fixed-hazard NEXUS skill course (experimental)

Date 2026-10-15. Public frozen `main@915fb440d5db5eaac0ead0f607d9bab8e591c4c8`. Parent: P27 PLAYER VISIBILITY. **EXPERIMENTAL_NOT_APPROVED**.

## Actually authored offline; not just another QA iteration

Two **real new `dopagaki.track-director/1` stage JSONs** were generated from immutable P27/P26 NEXUS LEDGE:
- TRAINING: three noncollidable *marker* fixtures placed at real surface locations Z≈498.314, 569.497, 634.445m; collision-free teaching line.
- CHALLENGE: the same XYZ coordinates and fixture IDs become three native **solid lethal `danger` colliders**. Alternating lateral placement requires left/right/right recovery planning after the already-native-confirmed 12.805m launch/landing section, without fabricating any separate road branch.
- All **32 original surfaces**, **two collidable rideable pieces**, **entire monumental architecture**, guide, actual road control lattice, all 124 old fixtures, original B3.8 source and game physics remain byte-for-byte unchanged. Fixture count increases 124→127, below 256.
- Actual custom diagnostic browser viewer was upgraded with TRAINING vs CHALLENGE selection, NEXT-detection caution, low chase/reference/top camera, AUTO/MANUAL external steering split, original native B3.8 assist independently controlled, steer-on-screen buttons, 96m/s diagnostic HUD, and exported telemetry.
- An additional **training-only** checkpoint at Z≈320m for initial speeds 28/44/64/96 was captured by starting from the real spawn, following the actual original B3.8 physics with assisted steering until supported landing, and saving its real position, normal, velocity and direction. `Runner.resumeAt()` then allows rapid hazard practice. This mode is clearly marked **not a complete full-course run**.

## Original native physics evidence, separating control from human playing

Native **unmodified** B3.8 modules (math, surface, collision, fixtures and physics):
- Training course, simulated LEFT/RIGHT key choices that track center route, initial speed 28/64/96 m/s: **3/3 original-engine `finished`**.
- Challenge course with the same center-route key policy: **3/3 original-engine `failed` from actual red dangerous fixture collision**. New objects are functioning physics colliders, not just decorative dots.
- Challenge course using a planned obstacle-aware three-beat key policy, with 80m preview target and about 12m desired lateral path shift: **3/3 original-engine `finished`** at 28/64/96m/s. Several other parameter choices failed: this is an actual skill-dependent distinction.
- TRAINING every 0.1 sec simulated held-button choices instead of continuous analog control: **3/3 finish**; key state changes 66/30/11 (28/64/96m/s). This is still a **perfectly informed machine policy**, not plausible literal human reflex/reaction validation.
- Native `Runner.assist` was **ON** for the above runs. This is the original engine's heading stabilization and is separate from the external AUTO steering. Independent exploratory assist-OFF trials failed; **no proof exists that a human can complete with assist OFF**. Bare no-steering also fell off all three speed baselines.

**Never report these as human manual game completions.** The 3/3 probe is computer-controlled, not a person who learned the line. `Runner.finished` is the original near-end-on-surface definition, not a production game's scoring or finish flag. The P26 112m/s original failure remains.

## True Chromium and local static delivery

An isolated Chromium session executed all five **unchanged original B3.8 physics modules** as in-page ESM Blobs on `about:blank`, since browser navigation to localhost was administrator-blocked. It showed real stage surfaces and the new danger props in a separately authored custom Canvas renderer; browser keyboard ArrowRight to actual native physics was verified for at least 60 ticks. A scripted request to practice at the real supported landing checkpoint was verified, no browser JavaScript errors, and authentic screenshots were captured. **This is not the original B3.8 editor/camera or human play.** The standalone viewer was also statically served by its included Node server, returning actual HTTP 200 for homepage, viewer JS, and checkpoint JSON. Local user access still must be manually tried on the user's own system.

## Reproducibility and privacy

Private user archive `STAGE_FORGE_P28_THREE_BEAT_ROADPLAY.zip` SHA256 `7992e3c5b10e220f4d02bd0b12006566bcaa696adcc8e3d5c52ce70229d6c6f9` contains actual 2 new stage JSONs plus 3 original untouched stage snapshots, the complete immutable P27 ZIP, deterministic native JSON generator, untouched original 5 physics modules, 18 native challenge trial logs, obstacle-aware avoidance probes, 100ms input test, real physics checkpoint generator, independent verifier, visual source geometry obstacle map, authentic custom Chromium screenshots, and Windows one-double-click local launcher.

Fresh independent ZIP extraction checked **47/47 manifest entries**, rebuilt **5/5 JSONs byte-for-byte**, and passed independent source-hash, surface identity, fixture effect, real native telemetry and custom browser smoke verification.

**Public Draft PR includes only [`experiments/P28_INDEX.json`](../experiments/P28_INDEX.json) and this note.** No real course JSON, original game/editor/physics source, generator, test code, imagery, user stage data or site assets enter the public repo. No main merge, original game/deployed site change, existing PR edit or stage catalog approval.

Next priority: controlled **real human input test** in the local-only viewer (first TRAINING at 28m/s) and compare the hit/finish telemetry. Only once human input reveals weaknesses should the stage collision rhythm or camera be tuned; meanwhile native editor camera and 112m/s failure remain separate blockers.
