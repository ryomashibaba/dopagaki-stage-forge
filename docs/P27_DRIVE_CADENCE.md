# P27 DRIVE CADENCE — four real driving upgrades to P26's monuments

Date: 2026-10-15. This is a metadata-only Public Draft PR. Public main is still `915fb440d5db5eaac0ead0f607d9bab8e591c4c8`. All P27 parts remain **EXPERIMENTAL_NOT_APPROVED**.

## Offline course-production facts

Rebuilt **four real complete `dopagaki.track-director/1`-shaped stages** with a deterministic source generator. Each physical 31×5 **collidable** road grid, bank/width functions and/or Y profile actually changed, together with additional fixed native-kind challenges and a new 481-point advisory route. No user-created stage or live game/editor was modified. Monumental architecture layouts and signatures stayed the same, with heights followed where necessary.

| New working candidate | Authoring changes | Hazards P26→P27 | Minimum road width P26→P27 | Maximum P26→P27 longitudinal row descent |
|---|---|---:|---:|---:|
| TS-001 TERRACE SHOCK | 3 huge ~70m U-hairpins retained; physical widths at the first two turn rows 23.14→40.89m and 22.20→41.87m; 8 extra fixed challenge obstacles | **5→13** | 22.2→**28.15m** | −18.1%→−18.1% |
| RW-001 RESONANCE WAVE | All 3 real rise/fall cycles retained; wave height 27→22m; 7 additional real challenge obstacles; bank and recovery floor widths altered | **5→12** | 21.25→**24.80m** | −66.2%→**−56.3%** |
| PR-001 PRISM RIFT | Wide recovery zones after large zigzags; bank 22→18 degrees in authored function; 6 more real hazards | **6→12** | 23.00→**25.88m** | −41.7%→−41.7% |
| KH-001 SKYHOOK KITE | Actual dive-shape broadened and deep Gaussian reduced 82→76m, retaining about **142m** of vertical range; six more obstacles | **5→11** | 19.52→**28.17m** | −51.8%→**−46.3%** |

Approximate **largest fixed-obstacle progress intervals**, measured by center-road length multiplied by normalized authored progress difference (NOT gameplay elapsed time), changed: TERRACE 475.89→324.47m, WAVE 227.66→137.06m, PRISM 207.30→130.93m, KITE 232.46→105.49m. The eleven-to-thirteen challenges are genuinely authored fixtures with positions and IDs; not visual-only annotations.

The real road control vertices changed at **124/155 TERRACE**, **155/155 WAVE**, **121/155 PRISM**, **155/155 KITE**. All four maintain exactly 32 surfaces, including one real continuous rideable/collidable surface and 31 noncollidable monument surfaces. Physical road width, bank and hazard changes are in the regenerated course JSONs, not just QA metadata.

## Exact preservation distinction

- **TERRACE and PRISM:** all 31 architectural surfaces and all 132 original background fixtures are deep-equal to P26; only driveable road and challenge positions/quantities change.
- **WAVE and KITE:** road Y shape changes; the 31 structure meshes and 132 background fixtures were **intentionally re-generated relative to the changed road elevations**. The architectural families, surface identities/counts, and aesthetic construction designs are preserved, but **the coordinates are not identical**. Do not incorrectly report full byte equality for WAVE/KITE scenery.
- Entire P26 original ZIP, with original four full JSONs, source, historical archive and QA, is preserved SHA256 **`2751932564ea233870ddceec259c0674ecb0ac398d787741a12bea3989020be5`** in the offline P27 ZIP.

## Real independent offline QA

1. **4/4 native-format-like structural, fixture ID/kind/point limit, actual road continuous seam, road-edge, guide-to-hazard AABB and sparse decor geometry PASS.** One first added TERRACE hazard initially intersected the guide proxy; it was moved and the **actual stage was regenerated** before final static QA.
2. **4/4 independent Catmull–Rom reconstructed triangle-to-triangle tests** using two and three control-cell subdivisions, checking the real road against all 31 architecture surfaces. Final nearest triangle at step3: TERRACE **15.696m**, WAVE **≥16m cutoff**, PRISM **39.734m**, KITE **≥16m cutoff**. No reconstructed intersections were detected. The reconstructed surface is **not B3.8 native collision geometry**.
3. **4/4 actual control-point delta, hazard-count/spacing, original ID and preservation-scope comparison PASS** against P26, with generated comparative profile image from actual control points.
4. **Fresh separate ZIP extraction and 41/41 SHA256 payload checks**, **4/4 byte-exact JSON regeneration**, five independent static/report/identity/mesh/delta suites successfully rerun.

### Not tested — cannot certify playability

**B3.8 original `surface.js`, `collision.js`, `physics.js`, renderer, arcade ball dynamics, native speed, actual 28/36/48/64/80/96m/s U-bends, flight/landing, real game camera, human driving, and site v7 integration were NOT RUN.** The actual B3.8 semantics of `generatedRoute:true` with an authored route are unknown. Geometry metrics and proxy margins **do not prove high-speed turn feasibility**. The extra fixed hazards may demand more reactions than a human can make at full speed. No P4/P25 native pass may be carried forward.

## Deliverables and strict Public/Private boundary

Offline, private ChatGPT ZIP: `STAGE_FORGE_P27_DRIVE_CADENCE_FOUR_FAMILIES.zip` SHA256 `5bf76fe173027900d6ac4ea0176bc82b1605082efe988a03a769753a36a8126e`. It contains four full P27 JSONs, zero-external-code deterministic generator, P26 original four full JSONs and entire preserved P26 original ZIP, geometry/statistical/delta/mesh QA scripts and reports, geometry-backed multi-view previews, elevation and P26/P27 width/hazard timelines, native readonly gate, README and manifest.

**This Public Draft PR adds ONLY this document and [`experiments/P27_INDEX.json`](../experiments/P27_INDEX.json).** Stage JSONs, original generators, QA code, previews, historical original archives, user-authored stages, private app/editor/game engine, secrets, and deployment assets remain in the user’s offline ZIP, NOT in Public GitHub. No main merge, official catalog admission, old PR alteration or game deployment.
