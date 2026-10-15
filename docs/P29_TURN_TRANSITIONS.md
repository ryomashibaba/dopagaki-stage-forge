# P29 TURN TRANSITIONS — repair two SKYHOOK KITE approach kinks and widen real turn entry decks

Date 2026-10-15. Public `main@915fb440d5db5eaac0ead0f607d9bab8e591c4c8`. Parent protected source is P28 CONTROLLED SPECTACLE.

## Actual independently generated stage modifications

P29 produces **four complete true `dopagaki.track-director/1`-shaped experimental JSON courses** from a deterministic offline Node.js generator. All four physically change the **real 31×5 control-point collidable road surface**, by expanding approach/exit shoulders at steep-descent or monumental turn transitions and softening local cross-banks. Road centerline Y values, original spectacular elevations and the long-span architectural motifs are deliberately kept unchanged.

| Stage | Real structural road edits | Fixed hazards |
|---|---|---|
| TS-001 TERRACE SHOCK | Physical widened shoulder aprons at `u≈.215,.505,.785` approaching the three suspended 70m hairpins, reduced banks near transition | 10, same count as P28 |
| RW-001 RESONANCE WAVE | Three widened banking transition zones at `u≈.205,.505,.815` while preserving all three very large vertical oscillations | 8, same |
| PR-001 PRISM RIFT | Wider roads through the 3 crystal slalom entries at `u≈.205,.530,.760`, eased lateral bank | 8, same |
| KH-001 SKYHOOK KITE | Extra-wide shoulders and easier banks at `u≈.295,.665` *plus a newly smoothed advisory line*, directly addressing the two P28 96-meter approach-curvature cautions near obstacles 3 and 6; adjusted the lateral offsets of noncentral hazards for better static margin | 8, same |

Source-level **real roadway changes**: terrace 124/155 road control points, wave 124/155, prism 122/155, kite 124/155. All **31 original noncollidable monumental architectural surfaces** and all **132 background fixtures** were preserved **exactly** for *each* stage. No new hazards, no physics changes, no new authoring control type, no discontinuous road-gap claim.

## Measured difference from P28

The previous KITE advisory route's side-change intervals at approximately `u=.256–.273` and `u=.610–.633` created short, sharp steering-guide turns. An independent JSON geometry audit found peak guide planar curvature **0.121769/m** (P28), improved to **0.017202/m** (P29), via broad smooth authored guide sweeps centered at `u=.305` and `u=.660`. The before/after X-Z guide and local curvature plots are drawn **from the real exported 481-point routes** and included in the private ZIP.

The static diagnostic checks `96m` of authored guide immediately ahead of each fixed obstacle and flags windows with peak `>=0.06/m` as a **geometric caution only**. There are 34 native-kind fixed obstacles across four courses; **KITE 2/8 flagged → 0/8, and the other three stages all remain at 0 flagged**. This is **not a tested native 96m visibility distance, actual camera FOV, ball trajectory, human reaction time, avoidance guarantee, or speed-completion result**.

| Candidate | Minimum actual sampled road width | Smallest guide-to-native-kind fixture 3D AABB proxy | Max authored guide planar curvature /m |
|---|---:|---:|---:|
| TERRACE | 29.61m | 4.51m | .027343 |
| WAVE | 26.28m | 4.28m | .032821 |
| PRISM | 30.97m | 3.79m | .051888 |
| KITE | 29.01m | 4.09m | **.017202** |

The guide-curvature maxima on TERRACE and WAVE happen in unchanged portions of their routes and thus **stay identical** to P28; this does not invalidate their independent actual physical road width/bank changes.

## Completed independent static verification

- Four generated full JSON stages meet the known offline schema/mesh/fixture/guide/route/seam limits and obstacle AABB proxies: **4/4 PASS**, with one real collidable road and 31 visual-only monumental surfaces each.
- An independent `P28→P29` JSON comparison confirms **4/4 changed real road grids**, **4/4 deep-equal monumental architecture + scenery**, unchanged centerline height span, same challenge counts, and lower-or-equal worst authored-guide curvature.
- Separate `96m` approach analysis: **0/34 flagged geometric windows** after the specific KITE revision. It does not raycast cameras or predict ball momentum.
- Road × all 31 original architectural surfaces tested via independently reconstructed Catmull–Rom triangle-to-triangle geometry at subdivisions **2 and 3 per control cell: 4/4 PASS at each step**. Step3 TERRACE nearest about **16.163m**, PRISM about **38.197m**; WAVE and KITE have no closer candidates than **16m** under the configured threshold. **These are not the B3.8 engine's actual tessellation or physics collision solids.**
- Clean independently extracted private ZIP: **36/36 SHA256 payload matches**, original P28 full archive SHA256 `5b08430e53f1acc3d5902ca4928c395235c3426c76fcc903c10cfbe8c3197cfc` preserved, **4/4 byte-exact deterministic stage reproduction**, and rerun structural, comparison, approach and two mesh-subdivision audits PASS.

## Not executed, mandatory limitations

The authorized original game B3.8 `surface.js`, `collision.js`, `physics.js`, native renderer, camera and gameplay runtime remain unavailable. No **real import, 28–96m/s arcade-ball drive, real collision, camera sightline, airborne flight, jump landing, human play, v7 integration or generatedRoute:true interpretation** were tested. A static guide-line curvature repair is **not proof that a player can steer through these large high-speed turns**. Older P4 model runs cannot be transferred. All four remain **EXPERIMENTAL_NOT_APPROVED**.

## Private distribution and Public repository limits

The user receives `STAGE_FORGE_P29_TURN_TRANSITIONS_FOUR_FAMILIES.zip` offline, exact SHA256 `f3682bc5e65cd736c6c12c567e06b21e574080fbb2442c66cfeba124969255ad`. It contains actual four editable full JSONs, original deterministic generator, all independent QA sources and reports, source-derived four multiview 3D previews and KITE before/after guide curvature image, original P28 four JSONs and immutable complete P28 ZIP, plus the future native read-only test gate.

**Public Draft PR includes only this document and [`experiments/P29_INDEX.json`](../experiments/P29_INDEX.json).** Do NOT publish the actual course JSON files, generators, QA scripts, private game/editor/physics source, user-authored courses, preview imagery, P28 original archive, credentials or site/deployment changes. No main merge, older PR changes, official catalog acceptance, production game mutation or deployment.
