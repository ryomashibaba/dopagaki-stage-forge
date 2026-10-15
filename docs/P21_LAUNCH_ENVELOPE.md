# P21 LAUNCH ENVELOPE — real upward takeoff geometry and three experimental deck gaps

Date: 2026-10-15. Public frozen main: `915fb440d5db5eaac0ead0f607d9bab8e591c4c8`. Source: offline P20 TAKEOFF & LANDING, protected SHA256 `47277d77576d9bbc6729f89d965ec7e6e5af9d080f4f67d8d90df89239f005c0`.

## Actual course work, not a native game test

P20's NEXUS had a **negative takeoff edge grade of about −2.5%**, despite the design label "uphill lip." P21 altered the **actual rideable 5-column control mesh**: takeoff last-row grade is now **+11.563%** in the standard variant. The originally separated roads remain physically disconnected; takeoff-to-landing horizontal gaps were authored as three actual variants:

| Variant | Actual empty horizontal distance | Landing deck below takeoff | Last control-row uphill grade | Native playability |
|---|---:|---:|---:|---|
| SHORT | 16.805m | 7.486m | +10.715% | NOT TESTED |
| STANDARD | 22.806m | 7.486m | +11.563% | NOT TESTED |
| LONG | 28.806m | 7.486m | +12.556% | NOT TESTED |
| CONTINUOUS REFERENCE | no actual missing surface | gradual joined road | same source control profile | NOT TESTED |

The NEXUS gap variants each have **two independently collidable/rideable real surfaces** and preserve the old 30 visual-only architectural surfaces; P20 had already removed one noncolliding roof panel for the 32-surface limit. P21 removed nothing further. The single-road continuous reference has 31 total surfaces. Other P21 courses stay at 32 total, one real rideable and 31 untouched decorative surfaces.

Other real P21 revisions:
- **MV-001 MIRROR VAULT:** deepened a chute, reshaped the rising lip and widened recovery-like profile.
- **OE-001 ORBITAL ENGINE:** deepened the hub approach and reshaped a later rebound and ascent.
- **NA-001 NEEDLE ARRAY:** strengthened three convex kick ridges and valley recovery profiles.

All original P20 JSONs, their five source variants and complete P20 source ZIP are preserved in the user-provided offline P21 archive. Challenge objects move vertically with actual altered road lattice; non-challenge fixtures, huge architectural meshes, game engine and deployed site are untouched.

## Integrity and static QA

The separate archive `STAGE_FORGE_P21_LAUNCH_ENVELOPE_FOUR_FAMILIES.zip` (SHA256 `43c10556b310b0c3dc39097f9bb724fb60071d5ad5418c07129d0247f1a6e020`) contains:
- **7 deterministic complete stage JSONs** (four primary, short and long NEXUS, plus continuous comparison);
- standalone P21 geometry generator;
- immutable original P20 JSONs and the complete original P20 ZIP;
- independent structural/geometry and 3D AABB/sparse architecture audits, a point-mass toy-model sensitivity analysis, diagnostics, 3D geometry previews and route-height/variant illustrations, SHA256 checksums.

After extracting the archive to an independent folder, **all 33 file SHA256 checks passed**, the generator rebuilt all seven JSONs **byte-for-byte** and the static QA scripts passed.

**Do not conflate distinct tests**:
- *Ordinary generic continuous-route seam checker*: **4/7 PASS, 3/7 FAIL**. Each of those 3 failures is a correct report of **exactly one intentionally missing 3D road seam**, not something to suppress.
- *Independent experimental-gap-aware static verifier*: **7/7 PASS**, recognizing the expected gap and rejecting additional unintended seams. Mesh limits, fixed hazards and sparse road-to-architecture checks pass under their stated assumptions.
- *Point-mass illustrative model*: assumptions g = 9.81/20/35/55 m/s² at 28/36/48/64/80/96 m/s, three NEXUS gaps (72 cases). Geometric deck intersections happen only for some assumptions. They are **NOT native jump or landing successes**, do not account for actual game gravity, ball radius, steering, air drag, collision bodies, engine-specific speed, nor even native generatedRoute behavior. An advisory authored route crossing the void is a **virtual line with no road beneath**.
- *Real B3.8*, including 2 rideable surfaces support, parsing, physical takeoff, airborne motion, swept collision, landing, camera, player handling, 28–96m/s completion and public game v7 integration: **NOT RUN/UNVERIFIED**. Neither past P4 physical outcomes nor our toy-model crossings transfer.

Sampled road-to-architecture minimum distances for the primary variants were MV 14.398m, HN 18.806m, OE 5.607m and NA 16.102m. These are sparsely sampled **proxy** distances, not a full tessellated collision certificate, particularly near the orbital structure.

## Publication and next decision

**Public Draft PR only adds this note and [`experiments/P21_INDEX.json`](../experiments/P21_INDEX.json).** The seven actual stage JSONs, source generator, baseline P20 ZIP, images, QA scripts, original game/editor/physics and user-authored courses are **not** published. Main, older PRs, the official stage catalog and the deployed game remain unchanged.

All 7 outputs retain **EXPERIMENTAL_NOT_APPROVED** status. The next decisive step is a safe native B3.8 import and ball-physics trial, comparing the continuous and shortest-gap versions first, if the lawful private runtime becomes available and the user permits it. No complex Windows work is required to receive this P21 offline experiment.
