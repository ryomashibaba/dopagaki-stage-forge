# P31 SPATIAL RUN REFINEMENT

Four experimentally revised architectural road courses, created 2026-10-15. Public main stays frozen at `915fb440d5db5eaac0ead0f607d9bab8e591c4c8`.

## Actual offline deliverables
- CX-001 CROSSWIND: widened entering and exiting viaduct road, crossover decks maintain 121.6m vertical separation.
- LC-001 LANTERN: the real road, all 31 building surfaces and background fixtures were rescaled consistently in Y by a factor of 0.84. Maximum uphill grade changes +55.3% to +46.4%, downhill −56.7% to −47.7%. Multi-level clearance 58.5m.
- GF-001 GATEFOLD: new real centerline lateral chicanes and wider recovery areas through its monumental seven-gate structure.
- SC-001 SPLIT CORE: widened lower diagonal extraction and new lateral road offsets. Overpass clearance 116.4m.

All four full original JSONs have modified collidable road control vertices, 7 to 9 real fixed hazards, and an updated 481-point guide. Each contains one continuous collidable road and 31 noncollidable architectural surfaces. Buildings for CX/GF/SC remain unchanged; LC's building heights intentionally changed.

## Independent offline tests
- Structural/road/guide/obstacle static QA **4/4 PASS**.
- P30/P31 true 3D mesh control point comparison **4/4 PASS**.
- Real crossing-level static checks **4/4 PASS** (three different-height crossings, one intentionally no crossing).
- Reconstructed Catmull–Rom triangle-mesh proximity at densities 2 and 3 **4/4 PASS**, threshold 9m. LC minimum is ~9.673m, which is closer than other stages and should be reviewed in the original renderer.
- New ZIP extraction, **39/39 SHA256** checks, and **4/4 byte-exact course regeneration** plus QA rerun PASS.

**Native B3.8 engine loader, ball physics, collision solids, camera visibility, 28–96m/s driving, human play, jump/landing and deployed game compatibility were NOT RUN.** P31 geometry success is not a gameplay PASS.

## Private artifacts
The separate private conversation archive `STAGE_FORGE_P31_SPATIAL_RUN_REFINEMENT_FOUR_FAMILIES.zip`, SHA256 `ef32b6aff8093e0795f5d7607a78fe77f368529d46d6b9cf43ac8c7ee11e7056`, contains all four stage JSONs, deterministic source, independent tests, diagnostic previews, four original P30 JSONs, and the immutable P30 full ZIP.

This Public Draft PR contains only this note and [P31_INDEX.json](../experiments/P31_INDEX.json), not the stages, source, tests, game files or images. No main merge, site update or formal approval. Status: EXPERIMENTAL_NOT_APPROVED.
