# P9 VERTICAL INTERCHANGE — four actual 3D stage productions (experimental)

Date: 2026-10-15. Main baseline: `915fb440d5db5eaac0ead0f607d9bab8e591c4c8`.

## Actual stage JSONs and replayable generator created OFFLINE

Four new `dopagaki.track-director/1` JSON course experiments and source code were packaged in `STAGE_FORGE_P9_VERTICAL_INTERCHANGE_FOUR_NEW_FAMILIES.zip`. The stage data, generators, and geometry previews **are not published in this Public PR**.

| Stage | Distinct spatial structure and real road action | Surfaces / fixtures |
|---|---|---|
| PX-001 PARALLAX EXCHANGE | A native single-road figure-eight over-under layout with its planar centerline crossing itself at progress 25% and 75%, **35m different height**; six fixed barriers and colossal suspended frames | 32 / 114 |
| AR-001 ATLAS REVERSAL | Interior switchback megastructure with three X-direction reversals, alternating bank and lane hazards (six pylons), and suspended giant galleries | 32 / 114 |
| HC-001 HEXACHAMBERS | Three large polygonal hollow chamber vaults containing bank and cross-sectional width changes and six static walls in three phases | 32 / 114 |
| TW-001 TIDAL WAVEFRAME | A rising/falling suspended architectural road (four elevation-direction reversals), broad valley-like recovery space, four fixed blockers | 32 / 112 |

All have **one continuous collidable road surface plus 31 visual-only noncolliding structure surfaces**. There are no animations, moving barriers or forced jumps. All assets were independently generated; no original game/editor code, private runtime, user-authored courses or licensed art is copied.

## Checked and unchecked

- Standalone JSON structure and geometric static checks: **4/4 PASS**.
- Road widths, guide edge margins, triangle budget, fixture kinds, degenerate control cells and declared seams: checked. **Zero degenerate cells / declared seams**.
- Independently detect the 35m over-under crossing using `qa/spatial-probes.mjs`, not just a diagram.
- The first pass found a high bridge frame near another road level. That frame was elevated; the **minimum sparse-sampled decoration-to-road distance in PX is now 19.33m**. The independent checks still use sparse samples, so do not claim full native intersection proof.
- Validate all non-challenge fixtures' nearest sampled 3D AABB to road, and separate guide-to-fixed-challenge AABB proxies.
- Newly generated JSON exactly matches the archived JSON **4/4 byte-for-byte**, including extraction into a separate verification folder.
- **B3.8 native physics, swept collisions, speed-28-to-96 completion, generatedRoute behavior, human driving, real game camera and v7 integration: NOT RUN.** Historic P4 runs cannot be transferred.

## Protection and publication boundary

This Public Draft PR adds this text and `experiments/P9_INDEX.json` only. Do not merge stage JSONs, preview images, generator internals or private assets without separate authorization and privacy review. Earlier P8/P7 course ZIPs, Draft PRs #5–#9 and all game/deployment sources remain unchanged; P8 archive SHA256 was recorded in the offline P9 ZIP for provenance.

All four remain `EXPERIMENTAL_NOT_APPROVED`; no formal catalog approval is implied. Next useful work should emphasize actual geometry and eventual simple native driving confirmation, not a new QA platform.

See [the P9 metadata index](../experiments/P9_INDEX.json) for artifact file SHA256 and explicit test limitations.
