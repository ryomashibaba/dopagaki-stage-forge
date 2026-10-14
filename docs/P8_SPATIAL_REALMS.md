# P8 SPATIAL REALMS — four original geometry-driven stage families

Date: 2026-10-15. Source of public baseline: `main@915fb440d5db5eaac0ead0f607d9bab8e591c4c8`.

## Actual stage production

Four new **native Track Director /1-shaped JSON course documents** were created with independent standalone generator source. They are distributed only via a separate private-conversation ZIP, not this public repository.

- **AW-001 AXIOM WELL:** a continuous, ~1.28-revolution descending track around a huge hollow axial shaft (~102m altitude loss in the authored centerline); 12 massive external vertical facets, eight interior stator vanes, six orbital belts, four transfer girders and a central core. Four fixed hazards in two side-paired phases. Unlike earlier mostly forward tracks, the centerline is actually helical in **XYZ**.
- **FD-001 FRACTURE DELTA:** ten towering fault blades, eight terraced canyon underdecks, eight heavy overhead bows, fractured high crowns. Narrow fault throats, broad terraces and five fixed hazards. Distinct x/y/z course traversals rather than road decoration.
- **OB-001 OBSIDIAN BLOOM:** 16 folded static lamella petals surrounding a three-throat vaulted roadway, eight internal ceiling members and four outer skins. Six fixed hazards in three two-beat stages. A discovered near-road geometric proximity issue was fixed by lifting the petals; they remain **STATIC**, not animated.
- **LC-001 LUMEN CATENARY:** descending-ascending road traverses an actual large vertical valley, supported visually by eight suspended arches, eight stays, eight under-deck trusses and four large anchor towers. Four fixed hazards, open valley floor and narrower entry/exit spans.

Each uses exactly **one continuous rideable/collidable native road surface**, plus **31 noncollidable architectural surfaces**. No stage contains unsupported animated mechanics or arbitrary external/private engine code. Prior 12 stage families and all Draft PRs #5–#8 remain untouched.

## Independently confirmed static QA

| Stage | Surfaces | Fixtures | Min sampled road width | Min guide to fixed-hazard 3D AABB |
|---|---:|---:|---:|---:|
| AW-001 | 32 | 120 | 13.01m | 4.38m |
| FD-001 | 32 | 129 | 12.23m | 2.78m |
| OB-001 | 32 | 118 | 12.09m | 2.66m |
| LC-001 | 32 | 114 | 12.31m | 3.68m |

- Native-format-like standalone bounds and schema verification: **4/4 PASS** (32 surface / 256 fixture budget, finite control lattice, valid fixture kinds, estimated triangle limit, object/spawn references).
- Static road width, degenerate control cells and declared seam audit: **4/4 PASS**, zero near-degenerate cells and no declared seam gaps.
- True 3D world-coordinate sparse decoration near-road sampling: **zero close samples**, including helical AW. This is a visual proximity screen, **not a full native tessellated mesh proof**.
- Deterministic generator output exactly matches archived JSON **4/4 PASS**, including a separate extraction of the packaged ZIP and rerun of the verifier.
- Each stage has two orthographic-ish 3D diagnostic views, a longitudinalized route/obstacle chart, longitudinal width/bank/elevation diagnostics and two approximate chase-view images. Preview art is derived from the **real generated JSON**, not the actual B3.8 game renderer.

## Explicit quality boundary

**B3.8 native physics NOT RUN** (owner runtime not included). No 28/36/48/64/80/96m/s completion claims, runtime swept collision proof, ball-radius feasibility, native-generated-route resolution proof, human playtest, certified camera sightline, or compatibility with public game v7. P4's previous 24/24 results are unrelated to this batch. All parts remain `EXPERIMENTAL_NOT_APPROVED`; official `catalog.json` stays unchanged.

## Distribution and privacy

Offline archive: `STAGE_FORGE_P8_SPATIAL_REALMS_FOUR_NEW_FAMILIES.zip`, containing all four stage JSONs, original regenerate source, independent QA/report/index, source-geometry 3D/multi-view/sightline previews and preview scripts. SHA256 of each course JSON is recorded in [`experiments/P8_INDEX.json`](../experiments/P8_INDEX.json).

**This Public Draft PR includes ONLY this note and a metadata index.** It publishes no stage geometry, private game/editor B3.8 source, user-authored stages, third-party art, deployment settings or credentials. No production deploy, main update, or Work/Windows operation. Continue producing high-diversity gameplay stages while distinguishing audited geometry from physically tested courses.
