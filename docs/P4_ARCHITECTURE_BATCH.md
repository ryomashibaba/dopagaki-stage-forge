# P4 — Four structurally distinct architecture-first experiments

Status: **EXPERIMENTAL / NOT APPROVED** (2026-10-14).

This phase explicitly prioritized original large-scale architecture, close-up ribbing / engineered detail, and *different spatial structure families*, rather than editor functionality.

| Part | Macro architecture | P4 decorative surface count | Built-in visual fixtures | Native assisted runs |
|---|---|---:|---:|---|
| PC-001 PRISM CATHEDRAL | soaring interlocked fractured crystalline buttresses, deep overhead kite vaults | 30 | 140 | 6/6 |
| TT-001 TITAN TURBINE | four concentric industrial rotors, radial vane sheets, service machine housings | 28 | 152 | 6/6 |
| ED-001 ECLIPSE DISHES | six immense inverted paraboloid shells with skewed sector partitions and tension roots | 30 | 144 | 6/6 |
| SC-001 SKYLINE COLLAPSE | seven architectural towers with extruded exofaces and suspended structural connections | 31 | 156 | 6/6 |

The initially proposed ORBITAL GATES concept was **dropped** because it appeared too similar in silhouette to TITAN TURBINE. ECLIPSE DISHES replaces it. No duplicate design is counted as a separate successful family.

## Offline evidence

- All four JSONs validated against the owner's unchanged B3.8 runtime.
- Static surface-width, seam, near-degenerate-control-cell diagnostics: 4/4 PASS.
- Native B3.8 physics with route assistance: all four prototypes completed at initial speeds **28, 36, 48, 64, 80, 96 m/s** (24/24 runs).
- The roads were simplified locally where the first draft fell at high speed. Large architecture and visual-decoration geometry were retained.
- Exact immutable SHA-256s, candidate IDs, size, scale and counts are recorded in [P4_INDEX.json](../experiments/P4_INDEX.json).
- Re-generation byte-for-byte equality passed for all four P4 candidate JSONs when run with the included self-contained archive producer.

## Publication and verification limits

The original generated JSON files, original generator and orthographic previews were delivered separately as a chat handoff ZIP. This public repository retains the original-file hashes and metadata; **the P4 stage payloads are not currently uploaded to GitHub**, and the approved catalog remains empty.

Do **not** claim these are playable by humans or in DOPAGAKI SLOPE v7. There has been **no Windows graphical/manual playtest**, and no full game integration test. Decorative surface sheets were intentionally tagged non-collidable, which avoids physics interference but does not certify graphic appearance or occlusion.

No original game code, protected physical engine implementation, user-authored course, or private material is imported. No deployment. Promotion to `approved` requires explicit human review of appearance and practical playability.
