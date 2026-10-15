# P18 ARCHITECTURAL TRAVERSAL — physically sculpted road cross-sections

Date: 2026-10-15. Parent experiment: P17 DRIVING IDENTITY. Public main baseline: `915fb440d5db5eaac0ead0f607d9bab8e591c4c8`.

## What was actually built, offline

Four new original `dopagaki.track-director/1`-shaped JSON exports. Each **real rideable road control lattice** was regenerated with changes to its width, bank, **transverse curvature** (raised crown versus recessed trough), and modest longitudinal height variation. Each existing fixed hazard was repositioned on the revised road and the advisory route was updated and smoothed. All **31 monumental architectural surfaces and all nonchallenge scenery fixtures** were retained exactly from the corresponding SHA256-verified P17 original.

This is not a guide-line-only change, not a simple repainted street, not a new editor, and not an alteration of the private game physics.

| Part | Driveable cross-section / architectural relationship | Actual width range | Max sampled absolute bank |
|---|---|---:|---:|
| MV-001 MIRROR VAULT | Three mirror-gate obstacles with folded cross-sections, a bank reversal, raised and recessed sections under the immovable mirror slabs | 19.51–45.59m | 16.8° |
| HN-001 HYPERBOLIC NEXUS | Two genuine width pinch points with inverted cross-banks and a shallow **trough** across the central expanded deck | 16.43–45.86m | 30.6° |
| OE-001 ORBITAL ENGINE | Real banked/perimeter floor along the central megahub and slight elevation transitions in radial entry/exit; an obstacle-clear hub arc is retained | 20.59–45.97m | 20.0° |
| NA-001 NEEDLE ARRAY | Three separated two-beat obstacle phases through staggered cross-slope ridge/trough pockets and decompression plazas | 18.69–52.20m | 15.4° |

Each stage still has **32 surfaces total** (one continuous rideable/collidable roadway + 31 visual-only architecture surfaces), 111–124 native-known fixtures, and no moving hazard or invented branch connector. The HN 30.6° measured bank is a static geometric observation, **not evidence of comfortable or safe gameplay**.

## Data-based comparison

An independent static P17-vs-P18 cross-section test measures the actual **five Y control points in each road row**, rather than merely the authored driving guide:

| Stage | P18 minus P17 crown/trough variation | Maximum center-road height change |
|---|---:|---:|
| MV-001 | -1.813 to +2.175m | 2.197m |
| HN-001 | -2.007 to +2.463m | 2.683m |
| OE-001 | -0.652 to +1.550m | 2.193m |
| NA-001 | -1.406 to +1.190m | 0.773m |

So the exported **driveable physical mesh control points have changed** across all four, not only the preferred route. The original monumental geometry and all background fixtures compare exactly to the previous stage JSON.

## Actual verification

- Standalone structural-format and static geometry audits: **4/4 PASS**.
- Architecture/non-challenge fixture preservation: **4/4 PASS**.
- Actual transverse crown/trough variations with both signs: **4/4 PASS**.
- Local double-side obstacle-proxy clearances: **7/7 PASS**.
- Sampled guide-to-road-membership checks: **4/4 PASS**.
- Original P17 stage SHA256 files: **4/4 VERIFIED**.
- Completely fresh ZIP extraction and all-file SHA256 verification, exact independent generation of each course JSON and rerun of four static QA scripts: **4/4 PASS**.
- Previews include original-json-backed architecture views, perspective approximations, plus a side-by-side **P17/P18 5-control-point transverse cross-section diagram**.

**Important: the native B3.8 `surface.js`, `collision.js`, and `physics.js` are not present. No native 28/36/48/64/80/96m/s autopilot, true swept ball collision, dynamic airborne motion, real native camera test, full human playtest or public game-v7 integration was performed.** The stage format is structurally compatible with the publicly documented B3.8 authoring format, but B3.8's runtime interpretation of `generatedRoute:true` plus an authored guide remains unverified. These geometric QA results must not be reported as game-playable/approved.

## Strict publication boundary and preservation

All four exported JSONs, deterministic generator, source P17 snapshots, complete immutable original P17 ZIP, preview assets, static test scripts and reports, complete SHA256SUMS and manifests are in the **separate conversation attachment** `STAGE_FORGE_P18_ARCHITECTURAL_TRAVERSAL_FOUR_FAMILIES.zip`, SHA256 `d993a6d608805e9edd9b93cf12e44c8173e733e6a10f29dd39bb4080774b0121`.

This Public Draft PR contains only this document and [`experiments/P18_INDEX.json`](../experiments/P18_INDEX.json). Full stage JSON, generators, previews, user's own stages, private original game/editor/runtime source, external art, personal information, credentials and deployment information are NOT published. Main, P17/P16 and earlier PRs, official approved catalog, game v7 and all live deployments stay unchanged. All P18 parts remain **EXPERIMENTAL_NOT_APPROVED**.
