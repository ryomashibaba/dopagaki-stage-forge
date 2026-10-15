# P19 AGGRESSIVE TRAVERSAL — twelve real road-profile actions in four stage families

Date: 2026-10-15. Baseline: P18 ARCHITECTURAL TRAVERSAL. Public frozen `main@915fb440d5db5eaac0ead0f607d9bab8e591c4c8`.

## Why and what was actually built

Prior courses emphasized choice of left/right around fixed obstacles and long gentle roads. In P19 we changed the **actual rideable five-column / 31-row control mesh** on four prior huge-architecture courses, introducing large longitudinal dives, rising crests, multiple banks, major vertical recovery and stepped descents. The old P18 course JSONs and the complete original P18 ZIP remain SHA256-protected and unchanged. Fixed challenges were repositioned according to the revised real road; advice-only routes were also reprojected onto the new road.

| ID | New driving sequence / actual geometry | P19–P18 additional vertical relief | Maximum row-to-row up/down ratios |
|---|---|---:|---|
| MV-001 MIRROR VAULT / DROP-SHUNT EXPRESS | 31m descent chute → short rebound crest that *may* cause an airborne trajectory → long banked recovery climb under the original giant reflectors | 31m | +.224 / −.456 |
| HN-001 HYPERBOLIC NEXUS / LAUNCH-SPINE | climb ~20m above old design → continuous uphill-to-downhill crest → steep ~40m extra transition → recovering rise inside the two-waist megahall | 40m | +.262 / −.674 |
| OE-001 ORBITAL ENGINE / GRAVITY PLUNGE | 44m extra shaftlike descent on hub approach → heavily banked central orbit → raised extraction ramp | 44m | +.232 / −.377 |
| NA-001 NEEDLE ARRAY / TRIPLE CASCADE | sequential 14m, 13m and 12m additional drops interrupted by shallow rebound shelves, retaining obstacle pacing | 39m | +.085 / −.433 |

**All 12 phase signatures** were independently tested against sampled true course control-grid surface heights (not merely newly authored metadata or a painted guide). Repositioned fixed blockers clear the locally authored preferred guide by at least 4.20/7.35/9.23/5.02m per-stage 3D AABB *static proxy*. This proxy does not include native ball inertia, ball radius, or actual native collision geometry.

## Architecture preservation

- One continuous, collidable rideable road surface **per stage**, plus **31 unchanged noncollidable monumental architecture surfaces**.
- Unmodified background fixtures and previous stage prototype preserved exactly in the separately delivered offline source ZIP.
- 32/32 maximum authoring surfaces, fixtures 120 / 124 / 113 / 111 (maximum 256), all geometry static QA PASS.
- Road/control-cell degeneracies and declared seam discrepancies: zero; advisory route-to-road cross section and road edge clearance static PASS.
- One important caution: OE-001 has a road/decoration **sparse-sampled minimum of only 3.672m**; complete tessellated geometry and actual game collision have **NOT** been verified. Treat as a review item rather than a collision-clearance proof.

## Crucial distinction: crest versus actual jump

**The new stages do NOT contain literal road gaps.** The dramatic humps and slope reversals are **continuous geometry**, deliberately chosen as potential natural takeoff lips under the existing game's momentum physics. We have **NOT** demonstrated that the player leaves the ground, remains airborne, or lands. No launch pad, boost, jump button, arbitrary speed reset or physics engine modification was inserted. Labels such as `LAUNCH-SPINE` are geometry-design intentions, not proven gameplay mechanics.

Every completed run for prior P4 candidates remains unrelated. P19 has **no native B3.8 engine, actual 28/36/48/64/80/96m/s physics pass, human gameplay, game camera visibility test, real colliders, flight or landing test, or game v7 deployment**. Native `generatedRoute:true` behavior is still unknown. Do not present these static results as playable PASS or catalog approval.

## Reproduction, delivered safely offline

The separate conversation ZIP `STAGE_FORGE_P19_AGGRESSIVE_TRAVERSAL_FOUR_FAMILIES.zip`, SHA256 `d7231e851769a236f6a25fa37dea434758fc3b100c0dbd93bfc730775674e70a`, contains:
- four real native-format-shaped P19 stage JSONs;
- immutable P18 base JSON, original P18 generator and complete P18 ZIP;
- deterministic original P19 generator;
- independent geometry/fixture/decor and phase-signature static verifiers, result JSONs and all-file SHA256SUMS;
- a P18 vs P19 comparative chart **derived from the real Y road-control coordinates**, four multi-view JSON projections and four illustrative chase-view approximations (not real gameplay screenshots).

The archive was freshly extracted into an independent folder, every file SHA256 verified, all four stage JSONs regenerated **byte-for-byte**, and both independent static tests re-run with **4/4 and 12/12 PASS**.

## Public repository boundary

This Public Draft PR contains **only this document and [`experiments/P19_INDEX.json`](../experiments/P19_INDEX.json)**. No course JSON, source generator, preview graphic, user's private game/editor/physics code, third-party artwork, user-authored courses, confidential files, credentials or deployed-site changes enter the Public repository. No main merge or official candidate approval. Prior P18/P17 and older stages remain unchanged. Status: **EXPERIMENTAL_NOT_APPROVED**.

Next production priority is properly investigating the launch/landing behavior through a simple native-physics test whenever lawful runtime becomes available, while continuing to design distinct monumental playable-looking roads without inventing successful speed trial claims.
