# P5-A ROADPLAY LAYER — experimental batch (2026-10-14)

P4 main: `915fb440d5db5eaac0ead0f607d9bab8e591c4c8`. This record describes independently authored geometry held in a **separately distributed ZIP**. The ZIP contains four B3.8-compatible candidate JSONs, their P4 immutable originals, an original generator, 4-view diagnostic previews per stage, and reproducible standalone static QA. The playable stage JSONs, local B3.8 engine, private game code, and personal/user-authored stages are NOT published in this PR.

## Changed riding design

| Candidate | Roadplay change | P5-A surface / fixture count |
|---|---|---|
| PC-001 PRISM CATHEDRAL | Wider banked nave with reversal (+14° / -17°), 6 alternating fixed crystalline pylons and shifted guide route | 31 / 146 |
| TT-001 TITAN TURBINE | Straight rhythmic corridor with 8 alternating fixed block/wall barriers and suggested avoidance line | 29 / 160 |
| ED-001 ECLIPSE DISHES | Width varies roughly 11–24m, concave/convex cross sections and about ±20° bank inversions; no gratuitous blockers | 31 / 144 |
| SC-001 SKYLINE COLLAPSE | Rooftop obstacles (5), narrow span contrasts, continuous 6.4m kicker-shaped hill and downhill landing candidate | 32 / 161 |

P4 architecture surfaces and existing details remain byte-equivalent after regeneration (deep comparison). SC has **one continuous drivable surface**, not a confirmed jumping gap. No rotating/dynamic obstacles were implemented.

## Verification scope

- Standalone format gate: **4/4 PASS**.
- Static geometry (no degenerate control cells, no declared route seams): **4/4 PASS**.
- P4 decoration immutability, 19 new blocker positions, route margins: **PASS**.
- **B3.8 native physics: NOT RUN**. Owner's `surface.js`, `collision.js`, `physics.js` files were not provided in the P4 ZIP. The 24/24 runs reported for P4 DO NOT transfer to P5.
- **Human playtest, native hazard collision, takeoff/landing, live game v7 compatibility: NOT RUN**.

Only an original, separate B3.8 runtime can establish completion at 28/36/48/64/80/96m/s. The stage ZIP includes the `qa/verify-with-b38.mjs` adapter for the owner to run locally.

These stages remain **EXPERIMENTAL_NOT_APPROVED**; no official curation, physics modification, game deploy, or final-course integration was performed. The exact SHA256 hashes and per-stage counts are in [`experiments/P5_INDEX.json`](../experiments/P5_INDEX.json).

## Publication boundary

This draft intentionally publishes **metadata and documentation only**. Course data/generators, private editor or game source, deployment details, and user-authored content are held outside the Public repository until separate review.
