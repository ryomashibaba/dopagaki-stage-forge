# P20 TAKEOFF & LANDING — real experimental missing-deck gap, no jump claim

Date: 2026-10-15. Frozen public main: `915fb440d5db5eaac0ead0f607d9bab8e591c4c8`. Parent source: P19 AGGRESSIVE TRAVERSAL.

## Actual P20 stage work (delivered separately, not uploaded to GitHub)

P20 produced **four changed native-format-shaped JSON course files** plus a fifth continuously rideable comparison variant, original deterministic generator source, exact P19 JSON originals and full P19 ZIP, independent static QA and previews. Each primary course changes the **actual collidable rideable control geometry**, bank/width, and fixed hazard placement. No changes were made to the private game engine, deployed game v7, original users' tracks or public site.

| ID | What actually changed | Road surfaces | Road geometry state |
|---|---|---:|---|
| MV-001 MIRROR VAULT | Real crest and trough adjustments after the existing 31m-style chute, wider continuous recovery deck | 1 | Continuous; any airborne motion NOT TESTED |
| HN-001 HYPERBOLIC NEXUS | **One actual missing-road interval** separating a 10-row upper rideable deck and a 21-row lower rideable deck; horizontal **22.806m** gap, landing-side entry **4.486m below** takeoff edge, expanded landing and a long runout free of designated fixed challenges | 2 | Physically DISCONNECTED, gameplay NOT TESTED |
| OE-001 ORBITAL ENGINE | Deep hub plunge from P19 retained, modified banked perimeter and exit/recovery transitions | 1 | Continuous; native steerability NOT TESTED |
| NA-001 NEEDLE ARRAY | Added three short crests and broader recovery floor sections after the P19 triple cascade | 1 | Continuous; natural lift and land NOT TESTED |

Each course stays within the **32 authored surfaces / 256 fixtures** limits. HN uses 2 rideable surfaces plus 30 visual-only architecture surfaces; its sole excluded original architectural piece is the **noncollidable** roof panel `nexus-oculus-6`, to honor the 32-surface ceiling. All other original P19 architectural surfaces and all non-challenge scenery fixtures remain unchanged. Other P20 courses preserve all 31 visual-only original architecture surfaces. All original P19 assets remain SHA256-protected offline.

The HN comparison `generated/nexus-continuous-reference.json` retains a single unbroken rideable deck for review; it is **not** validated in the native game either.

## Distinguish deliberate gap from broken geometry and physical jump

The unmodified generic `audit-geometry.mjs` reports **FAIL** for HN because the two route segments do **not** share a seam. This is expected and must not be hidden or described as generic seam PASS.

The separate independent P20 static verifier checks that **exactly this single known route seam** is nonzero, measures its 22.806m missing horizontal deck, validates the lower landing offset, confirms two genuinely distinct collidable surfaces, and disallows any additional unknown seam. Under that **explicit-gap classification**, the 4/4 authored-format and static geometry QA is PASS. There are **zero unintended seam mismatches**. 32-surface/256-fixture caps, near-degenerate cells, route-to-road proxies and fixture 3D AABB static proximity are also checked.

HN's geometric takeoff last-row grade is about -0.025. An optional transparent comparison uses assumed initial 28–96m/s horizontal speeds and an **illustrative g=9.81m/s²** ballistic model to report height relative to the landing deck, **with no pass/fail or playable-jump conclusion**. This is not the native game engine: drag, arcade gravity, collision shapes, steering, speed progression, launch velocity, ball radius and camera differ and are unknown. Importantly, **no game-tested flight, landing, reset behavior or finish exists** for P20.

## Evidence / limitations

- Four complete P20 JSONs and one additional HN continuous reference: **5/5 byte-exact regeneration PASS** after fresh ZIP extraction.
- Packaged files SHA256: **25/25 PASS**, including the immutable full P19 archive (SHA256 `d7231e851769a236f6a25fa37dea434758fc3b100c0dbd93bfc730775674e70a`).
- Independent P20 geometry verification re-run after extraction: **PASS** for all four actual productions, with the intentional seam explicitly classified.
- Sampled minimum 3D road-to-decoration distances: MV **16.132m**, HN **19.620m**, OE **3.701m**, NA **15.416m**. **OE needs a native full-mesh collision review**, because 3.701m is only sparse sampling and thin triangles could come closer.
- The original engine `surface.js`, `collision.js`, `physics.js` is absent. B3.8 `generatedRoute:true` and **two separated rideable surfaces** handling are unverified. **B3.8 physics/autopilot at 28–96m/s, real ball collisions, human testing, airborne flight, landing and live game compatibility are ALL NOT RUN**.
- Neither P4's old 24/24 assisted completions nor any later geometric-only PASS may be transferred as game completion evidence.

## Publication, preservation, and next action

Offline ZIP: `STAGE_FORGE_P20_TAKEOFF_LANDING_FOUR_FAMILIES.zip`, SHA256 `47277d77576d9bbc6729f89d965ec7e6e5af9d080f4f67d8d90df89239f005c0`. It contains five full JSONs, production source, verification scripts and reports, source-derived multiview visuals, original P19 JSONs and original P19 archive.

**Public Draft PR includes this explanation and [`experiments/P20_INDEX.json`](../experiments/P20_INDEX.json) ONLY.** No actual stages, generator, source previews, private game/editor runtime, user courses, third-party assets, credentials or production deployment files are published. No main merge, catalog approval, original-game mutation or deploy. All four P20 candidates remain **EXPERIMENTAL_NOT_APPROVED**.

Next required evidence to promote HN: run a safe, low-friction native B3.8 import/render/ballistic/contact/landing test and human review when authorized runtime is available. Until then, treat the gap as a **real geometry experiment**, not a working confirmed jump.
