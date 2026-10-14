# P7 SIGHTLINE & FLOW — four roadplay geometry revisions

Date: 2026-10-15. Public main baseline `915fb440d5db5eaac0ead0f607d9bab8e591c4c8`. Previous P6 candidate metadata in Draft PR #7; previous P5-A2 in Draft PR #6.

## What has actually changed

Four new **real native-format stage JSONs** were generated privately (offline ZIP, not committed in this Public PR) by deterministic original source code with immutable P6 source snapshots.

- **SL-001 SLUICE LEVIATHAN:** 6 fixed barriers regrouped into three side-paired lock stages; longer cross-lane transitions and increased width at one undersampled tight throat.
- **VA-001 VERTEX ARBORETUM:** 4 root-throat blockers arranged into two phases; longer bank-assisted side choices and varying width.
- **CL-001 CLOCKWORK LATTICE:** 6 fixed barriers arranged as three widely spaced two-beat phases; road gets gentle floor undulations, widening at gear passages and bank accents. Original triple gear architecture preserved unchanged.
- **DK-001 NEBULA DRYDOCK:** 4 blockers re-phased; old Gaussian road hump replaced by an approximately +14m progressive rising run-up, a short crest and a longer downhill recovery. It remains **one continuous road**; airborne flight and landing are unverified.

**All structural/architectural surface meshes except the driveable road are byte-equivalent JSON after regeneration to P6. All non-challenge decorative fixtures are identical.** The renderer, game v7 physics and deployment are untouched.

## Measured results

| Part | Surfaces / fixtures | P6 max route curvature 1/m | P7 max route curvature 1/m | P7 obstacle-guide planar margin |
|---|---:|---:|---:|---:|
| SL-001 | 31 / 120 | .036264 | .008144 | 4.94m |
| VA-001 | 31 / 129 | .012322 | .005270 | 5.17m |
| CL-001 | 32 / 166 | .060985 | .007125 | 5.32m |
| DK-001 | 32 / 134 | .036078 | .011853 | 5.14m |

Independent authoring-format check, static road width and seam audit, decoration preservation, archive extraction and regenerated JSON comparison: **4/4 PASS**. Near-road decorative control-cell sampling: **no hits found**, but incomplete as a collision/visibility proof.

The curvature values are independent measurements of the route polyline, not measured dynamics or autopilot completion; lower curvature by itself is not proof of a playable stage. The fixture margin is merely planar distance to axis-aligned fixture footprints and ignores ball radius, physics and collision sweeping.

### Explicitly not verified

B3.8 native physics, obstacle collision envelopes, jump takeoff and landing, 28/36/48/64/80/96m/s trial runs, human gameplay, exact native camera, game v7 integration and B3.8 behavior of custom routes with `generatedRoute:true`. The prior P4 native runs **do not** apply to P7.

Perspective preview images in the offline ZIP are projections from authored geometry using an **illustrative approximation** of a follow camera; they are not B3.8 screenshots or verified runtime sightlines.

## Publication boundary

Only this document and `experiments/P7_INDEX.json` are added to the **Public** repository, not the course JSONs, generators, previews, private runtime, user-authored tracks or any game physics/assets. No main merges, no deployment; stage status remains **EXPERIMENTAL_NOT_APPROVED**. There is no requirement for the owner to operate Windows.

The offline archive `STAGE_FORGE_P7_SIGHTLINE_FLOW_FOUR_FAMILIES.zip` includes the full original and regenerated JSONs, independent generator, QA and multiple viewpoints. SHA256 of each generated JSON is in [`experiments/P7_INDEX.json`](../experiments/P7_INDEX.json).

## Next useful phase

Prioritize tangible stage geometry and gameplay after eventually gaining simple access to native verification, rather than building more elaborate QA infrastructure. Avoid claiming real playability based on offline projections.
