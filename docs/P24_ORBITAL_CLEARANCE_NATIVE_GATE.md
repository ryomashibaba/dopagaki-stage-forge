# P24 ORBITAL CLEARANCE & NATIVE READ-ONLY GATE (experimental, 2026-10-15)

Public frozen baseline: `main@915fb440d5db5eaac0ead0f607d9bab8e591c4c8`. Offline parent: P23 LANDING HANDOFF, full ZIP SHA256 `fd91603b016c6baefc3a21874c7e6ef24e8e43f17e369b097e3eae5f710df2fb`.

## Why P24 changed course

P23 had identified ORBITAL ENGINE's architecture/road sparse-sample closest point at approximately **3.166m**. A **higher-density independent bicubic-surface point-sample pass** on the exact P23 JSON found a worse close approach:

- **0.605m** to `orbital-stator-10`;
- **0.856m** to `orbital-stator-8`;
- **2.188m** to `orbital-stator-9`.

This demonstrates the prior coarse scan **underestimated proximity**; it does not establish that native triangles collide. These authored panels are `collidable:false`, yet such near overlap can affect visual design and may deserve real-renderer verification.

Rather than extending jumps speculatively, P24 modifies **ONLY** these three noncolliding giant architecture panels by rigid 3D translations, preserving every detail/control grid shape:

| Surface | Exact translation XYZ (m) | Prior dense nearest | P24 dense nearest |
|---|---|---:|---:|
| `orbital-stator-8` | (-25, 0, 0) | 0.856m | **13.194m** |
| `orbital-stator-9` | (+25, 0, 0) | 2.188m | **12.496m** |
| `orbital-stator-10` | (0, 0, -24) | 0.605m | **11.280m** |

Global minimum across all 31 nonrideable architectural surfaces improves **0.605 → 11.280m in this specific high-density sampled metric**. Sampling: **241×21** roadway points and decoration control grid **8 samples per cell edge**; nearest-point comparison in 3D. This is still not a continuous mesh/triangle-to-triangle intersection solver, native renderer, full collision proof, or ball-swept simulation. A different interpolation/tessellation resolution might change exact distances.

The collidable ORBITAL road surface, real fixed challenges, preferred `route`, `routeSegments`, `spawns`, and all **28 remaining noncollidable monumental surfaces** are JSON-identical to P23. No obstacle logic or game mechanics were altered.

## P23 six-course controls intentionally left untouched

The other **six P24-delivered JSONs are byte-for-byte identical** to the original P23 files: MIRROR, NEEDLE, NEXUS COMPACT 12.805m, NEXUS SHORT 16.805m, NEXUS STANDARD 22.806m, and NEXUS physically connected comparison. The takeoff and 69–74m landing capture profile are unchanged. This preserves a stable baseline for future actual B3.8 testing rather than repeatedly retuning geometry without physics evidence.

- Independent structural/static authoring and geometry preflight **7/7 PASS**.
- Generic continuous-road audit **4 PASS / 3 EXPECTED FAIL** on precisely the three **real NEXUS missing road spans**; no unknown seams introduced.
- Original P23 ZIP hash checked; changed surfaces exactly and exclusively the three specified noncollidable panels; every other physical-road/fixture/guide/spawn JSON preserved.
- Clean extraction into another directory, **26/26 checksum manifest entries PASS**, deterministic **7/7 byte-exact JSON regeneration**, and independent static scripts rerun PASS.
- The P24 ZIP also includes two before/after actual geometry projections; they are **not game screenshots**.

## Native B3.8 test gate: specified, but NOT executed

P24 ships a concise offline `P24_NATIVE_READONLY_GATE.md` for an eventual lawful, isolated, **read-only** B3.8 session. Priority: import NEXUS **physically connected reference** first; only if import and road/camera/ball pass, import COMPACT **two separate rideable decks**; then gather actual takeoff/landing/contact telemetry. Separately render P23/P24 ORBITAL from identical camera positions and inspect whether shifting three stators is visually acceptable.

**B3.8 real importer, `surface.js`, `collision.js`, `physics.js`, camera, native road tessellation, double-rideable-surface semantics, `generatedRoute:true` with authored route, actual ball jump/landing, 28–96m/s completion, user driving and v7 integration: NOT RUN.** There is NO imported stage, actual completed race, successful jump or physics evidence. P4 assisted history cannot be borrowed.

## Publication boundary

Offline full source archive: `STAGE_FORGE_P24_NATIVE_GATE_AND_ORBITAL_CLEARANCE.zip`, SHA256 `ebd0c97ea977f6949847a616f95103a465a99a25c7a3c0cb938c1c3e397939d5`. It contains the actual seven course JSONs, unmodified complete original P23 ZIP, seven exact P23 original JSONs, P24 deterministic generator, high-density nearest point static QA, integrity checks, geometry comparisons and read-only native-test instructions.

**This Public Draft PR adds only this note and [`experiments/P24_INDEX.json`](../experiments/P24_INDEX.json)**. Full stage JSONs, generator, preview media, private game/editor/physics code, user-authored tracks, other unreleased assets, secrets and deployments remain outside the repository. No `main` merge, no live-site change, no approved-stage-catalog promotion.

**P24 status: EXPERIMENTAL_NOT_APPROVED.**
