# P32 SKYFALL SPAN — genuine sculpted plunge + suspended megastructure (EXPERIMENTAL)

2026-10-15. Frozen public main: `915fb440d5db5eaac0ead0f607d9bab8e591c4c8`. Parent P31.

## Actual real stage development OFFLINE

P31's NEXUS lower landing deck originally dropped roughly **50 vertical meters** from Z≈340 to Z≈453, then reached its three moving-ready chambers. P32 turns that huge descending transit into a genuine **three-dimensional S-shaped plunging roadway** (actual B3.8 XYZ physical rideable surface control mesh, not route annotations alone), and adds eighteen giant, floating, visually non-colliding structural members above and alongside that course.

**Four complete native legacy-shaped stage outputs (all kept privately):**
- **RIFT CLEAR and RIFT STATIC** — stronger twisting low-road-bank, descending trough, elevated crest, X lateral S-bend.
- **FLOW CLEAR and FLOW STATIC** — 56% amplitude variant to compare perceived difficulty and robustness.
- **Two completely unmodified P31 CLEAR/STATIC files** preserved as exact reference controls.

Every new P32 stage changes **25 genuine XYZ control points** (five rows × five lane-control columns), while keeping all Z control coordinates unchanged to maintain track progression. The modified section is landing (u=0.30–0.50), approximately Z340–453m. RIFT maximal point displacement **9.644m** (Y **9.098m**, X **5.454m**); FLOW **5.401m** (Y **5.095m**, X **3.054m**). Original B3.8-generated guide points are recalculated locally only in the modified section, not dragged globally.

**Actual visual architecture:** 6 extremely broad suspended skybridge cross-girders (66–74m spans), 6 huge pylons/spines (62–72m length), and 6 diagonal aerial braces. These are **18 original B3.8 legacy `beam` decorations**, not fabricated B45-moving pieces, and no physical collider. The 92 P31 originals and all its three distinguishable chambers remain unchanged. **Fixture capacity: 249/256**, seven reserved slots. All **32 original surfaces** remain and no new curve surface is consumed. The 30 original enormous architectural surfaces and the real NEXUS two-piece jump/takeoff are untouched. All 231 previous fixtures, including three fixed markers/legacy dangers, are identical; three B45 future movement-zone anchor control-row neighborhoods `u=.600/.755/.900` remain identical. Mid-course shape does not touch the first six landing road rows.

## ORIGINAL unchanged B3.8 physics trial evidence, scoped correctly

Four new courses × initial speeds **28/44/64/96m/s** × two **machine-generated discrete key steering** policies (center vs 80m anticipation), original **unchanged** legacy B3.8 five physical modules, with original built-in `Runner.assist` ON: **32 actual physical trials, 29 `finished`, 3 `failed`**.

| Version | Original B3.8 assisted status |
|---|---|
| RIFT CLEAR | **8/8 finished** |
| RIFT STATIC | **7/8 finished**, 28m/s anticipation hit a real stationary danger collider |
| FLOW CLEAR | **7/8 finished**, 96m/s anticipation fell off course |
| FLOW STATIC | **7/8 finished**, 96m/s anticipation fell off course |

The known **96m/s first separate landing deck contact at about Z318.303m** remains; these sculpt edits start downstream. Failures preserved as real physics outcome, not erased, retuned or mistaken for user error. `Runner.finished` is original grounded-near-guide-end, not official full game scoring/approval. **NO human/manual drive** was performed and the custom standalone viewer is **NOT** the original B3.8 editor.

The current STAGE FORGE workspace has only the old B3.8 source. The separate editor/physics branch **reportedly** has by B45 all 3 truly moving hazards and per-object collision-mode C (immediate fail, bounce, push), with 98/98 automated tests PASS. **However, the exact exported B45 course JSON samples and property contracts have still not been shared here.** Thus P32 contains **ZERO** actual moving objects or serialized per-obstacle response modes. These real road/fixture tests are explicitly old **static collision** tests and cannot be reused as B45 successes. Windows real B45 integration, original editor camera and human manual roadplay all unverified.

## Safe private offline reproduction and ZIP

The private user-download artifact `STAGE_FORGE_P32_SKYFALL_SPAN.zip`, SHA256 `d64ea421bdff32e0804990cfbe317389ca2f002f6e98dd0b44a0c2f287ca78bd`, contains the complete unmodified original P31 ZIP (sha256 `0db1fc3c2c3cf264e71431bd03a249131f78ec64897a1941d2825f6eff8483dd`), six stage JSONs, deterministic JS generator, independent Python verifier, untouched original B3.8 runtime source modules, full 32-run native records, realistic stage JSON-derived 3D previews, original-physics custom local player lab updated for RIFT/FLOW, single-double-click optional Windows launcher and the official-B45 handoff *gate* with empty (non-executable) slots.

On **completely fresh independent ZIP extraction**: **36/36 manifest checksums**, **6/6 regenerated stage JSON byte-exact**, **32/32 original B3.8 physical trial logs byte-exact including three failures**, dedicated geometry/scenery original-hash/fixture/route preservation PASS, base B3.8 tests PASS, and eight local static viewer HTTP resource URLs 200. This is not the original editor running in a browser.

**This Public Draft PR commits ONLY this note and [`experiments/P32_INDEX.json`](../experiments/P32_INDEX.json).** None of the actual course JSONs, B3.8 original game/editor/physics source, generator, trial scripts, original private archive, preview screenshots, user-made stages or deploy artifacts are committed. No public main merge, real game or published site change, previous PR alteration, or catalog promotion.

**Next P33**: once B45 official schema/sample truly arrives, bind 3 real moving objects to P31's three preserved slots via exact fields in a stage JSON and request moving-team test. Meanwhile, stage-production development remains free to expand macro-scale architecture and meaningful roadplay without inventing B45 fields.
