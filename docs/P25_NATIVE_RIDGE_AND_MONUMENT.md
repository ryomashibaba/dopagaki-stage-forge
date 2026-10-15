# P25: original B3.8 execution and actual NEXUS ridge/monument improvements

P24 previously lacked its original runtime in the execution environment. P25 found the owner's local B3.8 handoff and verified all five original surface/collision/physics/math/fixture modules against its integrity manifest. The modules were copied into an isolated offline package without edits. No public game or physics settings changed.

The original P24 complete ZIP matched its public SHA256 and all 26 manifest entries. Seven P24 courses matched their public hashes and are preserved, including the complete nested P23/earlier archive chain. The P24 ORBITAL correction is unchanged.

## Actual new offline courses

Two complete new JSON artifacts are delivered privately: NEXUS P25 compact 12.805m true missing deck and the continuous comparison. Each changes 64 actual collidable road control points, retains all 124 fixtures/spawns/routeSegments, and changes six noncolliding monumental bow roofs. Compact has 32 surfaces; continuous has 31.

Six approach rows align to a +10% lip-directed grade, suppressing premature departure at the old convex crest. Initial capture width grows by up to 18%, then returns to its original width. The late rebound crown is moderated by 1.2m, adjacent rows by .3m. Six giant bow roofs grow 25% in width and double their crown relief, raised 20m; 24 other building surfaces remain exactly unchanged. These are actual JSON geometry changes, not just planning.

## Original-engine evidence, with boundaries

P24 continuous was run before compact. Both completed at start speeds 28/44/64/96m/s. P25 continuous and compact also completed all eight conditions, using the original `parse`, `compile`, `Runner.step`, gravity 28m/s², radius .65m and DT 1/240s. Existing engine assist and an external steering controller were used. No position snapping, engine edits, fabricated trajectories or borrowed historical P4 results.

P24 64/96m/s departed around Z=178/177m, before the lip Z=208.970m. P25 compact departed around Z=209.36–209.95m for all four speeds. First real landing-deck contacts occurred at Z=228.56/244.66/268.78/425.94m. All four were independently checked by querying actual native collision contacts at their recorded positions. All eight P25 finish positions likewise have real native road support near the terminal deck.

**96m/s still overshoots the initial capture shelf ending near Z=294.67m.** Finished status is not an all-speed capture-quality approval. The original engine's guide-index finish condition occurs roughly 13–21m before the physical deck edge; crossing the final boundary is not claimed. Node simulation is not a browser camera, human input or published v7 playtest.

Native parse: 9/9 courses. Modified native collision mesh: 2/2 compile, zero degenerate triangles. Compact gap retained at 12.805m; three native vertical sweeps in the missing span have no hit. Full native-mesh Y bounds separate the changed six roofs from all road meshes by at least 119.54m. This does not claim global separation of every untouched building.

## Final private delivery integrity

The final ZIP is freshly extracted; **36/36 payload SHA256 checks, 2/2 full JSON byte-identical regeneration, all 16 rerun native simulations producing four byte-identical telemetry reports, and byte-identical independent QA PASS**. Original engine foundation tests and four existing model runs also passed. Two diagnostic PNGs derive from the delivered JSON's original B3.8 tessellation and recorded ball positions; they are not game screenshots.

Archive: `STAGE_FORGE_P25_NATIVE_RIDGE_AND_MONUMENT.zip`
SHA256: `db3067066470ace7decb527bf9d56092abe92bbf26817e05625cc3b29ee886b5`

Full courses, original runtime, generator, QA code, detailed telemetry, previews and old archives stay in the private offline ZIP. This independent Draft PR contains exactly this explanation and `experiments/P25_NATIVE_INDEX.json`. Main, prior PRs, approved catalog and published site are unchanged. Existing public CI covers its structural smoke fixtures, not the private course simulations.

**EXPERIMENTAL_NOT_APPROVED.** Original browser editor import UI, camera/rendering, human driving and v7 integration NOT RUN. The retained 16.8/22.8m originals were parsed, not physics-driven in P25. Next: isolated browser/camera/control verification and geometry-only improvements to high-speed capture, using the runtime now available.
