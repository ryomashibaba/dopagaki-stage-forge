# P26 SPECTACLE RUN — four newly manufactured monumental roadplay families

Date 2026-10-15. Frozen public main `915fb440d5db5eaac0ead0f607d9bab8e591c4c8`. All stages **EXPERIMENTAL_NOT_APPROVED**.

## Focus and actual original work

P26 resumes new **stage creation rather than indefinitely polishing static preflights for P25**. Four original `dopagaki.track-director/1`-shaped complete JSON stages were generated from P26's original independent deterministic generator, each with one actual 31×5-control-point continuous collidable rideable deck and **31 entirely original noncollidable architectural surfaces**, 137–138 authored fixtures, and a 481-point advisory route.

| New stage | Truly different construction and road | Real center-road Y range | Width min | Sampled bank max | Fixed hazards |
|---|---|---:|---:|---:|---:|
| TS-001 TERRACE SHOCK | **4 air terrace traversals and 3 large ~70m-radius reversing hairpins**; 8 isolated load piers, 8 raised galleries, 9 underside decks and 6 giant perimeter towers | 153.42m | 21.17m | 20.0° | 5 |
| RW-001 RESONANCE WAVE | **3 real rise-and-fall oscillations**, 12 resonance shell fins, 9 high arches, 6 below-floor counterweights, 4 remote antenna towers | 150.96m | 21.15m | 12.1° | 5 |
| PR-001 PRISM RIFT | **Sinuous mega-shard court slalom** with multiple bank reversals and real 189.2m X span, 14 giant oblique fins, 8 open diamond skylights, 5 external obelisks and 4 below-deck shards | 108.81m | 23.0m | 22.3° | 6 |
| KH-001 SKYHOOK KITE | **One major ascent followed by a long high-to-low descent**, 6 kite wing sails, 8 cable masts, 8 tension spars, 5 underside braces and 4 horizon spires | 149.5m | 19.51m | 17.0° | 5 |

These four differ in route plan and 3D elevation signature, not only stage colors. There is **no literal road gap, moving stage machinery, jump button, booster or reset logic**, and **no claim of actual ball jumps or landings**.

All earlier P25 original experimental JSONs and full P25 archive remain immutable and were preserved in the offline P26 delivery archive, not modified in GitHub or the deployed game.

## Completed offline validation, with transparent failure and correction

- Independent authoring contract, actual road shape, advisory road-edge and fixture AABB static checks **4/4 PASS**. Road remains one continuous real surface per stage, with 0 unintended route seams, 32/32 surface cap and 137–138/256 fixtures.
- Independent geometry identity validation **4/4 PASS**, including physically measured road-center elevations, true traversed X/Z plan profiles and separate road geometry fingerprints.
- A **triangle-to-triangle** geometric intersection/distance test independently reconstructs Catmull–Rom control-grid meshes. Tested full road against **all 31 monumental non-road surfaces**, each at two and three subdivisions per control cell. In the first trial, two TERRACE perimeter towers truly intersected the reconstructed road. **The stage generator was corrected**, putting the towers outside the playable core; the final geometry passed the same independent tests. At subdivision 3, TERRACE nearest **14.682m**; WAVE / PRISM / KITE each at least **16m** apart under the configured near-candidate threshold. No intersections detected in that reconstructed mesh.
- Archive `STAGE_FORGE_P26_SPECTACLE_RUN_FOUR_NEW_FAMILIES.zip` SHA256 **`2751932564ea233870ddceec259c0674ecb0ac398d787741a12bea3989020be5`** was extracted into a fresh isolated folder. All **36/36 payload SHA256 checks**, **4/4 byte-identical JSON regeneration**, repeat geometry identity, authoring/static QA and separate triangle-mesh QA **PASS**.
- The original P25 archive is itself preserved with SHA256 `b3c54c52409d6ee59b05bbbc4b1566b060792457e59f411373cd791131b4d3db`.

## Critical caveats: NOT native B3.8, never approve without testing

The independent reconstruction is **not a copy of the original B3.8 renderer's tessellation, ball radius or collision function**. Its 14.682m distance is *not proof of ball safety*. Measured real road center rows include steep downhills—approximately −0.662 grade on WAVE and −0.518 on KITE—so high-speed controllability is particularly uncertain. We have **NOT RUN** native stage import, `generatedRoute:true` steering/route handling, true ball contact, natural airborne takeoff or landings, any 28–96m/s full run, camera testing, human gameplay, or deployment to game v7. Old P4 24/24 successes cannot transfer.

We checked offline artifacts for the B3.8 runtime `surface.js`, `collision.js`, `physics.js` or authorized original renderer; none were available. P25's NEXUS 12.805/16.805/22.806m separated decks remain source-preserved for eventual **continuous variant → compact gap** native read-only testing. P26 does not masquerade physics simulation or another native QA report.

## Private offline artifact versus PUBLIC GitHub

The **offline ZIP only**, linked in the private user chat, contains the **four actual JSON stages, original generator and reusable foundation, independent full authoring/mesh QA code, tested result reports, original JSON-derived multiview images and comparative altitude graphics, all seven immutable P25 JSONs and entire original P25 archive, SHA256SUMS and a read-only native test plan**.

This public Draft PR must contain **only this explanation plus [`experiments/P26_INDEX.json`](../experiments/P26_INDEX.json)**. Do not upload actual stage JSON, generator source, private original game or editor or physics code, P25 originals, images, user stages, secrets, third-party artwork or deployment config. No main merge, official stage catalog admission, website change, or modification of previous PRs.
