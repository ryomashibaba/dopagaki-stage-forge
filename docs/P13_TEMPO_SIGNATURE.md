# P13 TEMPO SIGNATURE — four different driving rhythms (experimental)

Date: 2026-10-15. Public main `915fb440d5db5eaac0ead0f607d9bab8e591c4c8`. Offline parent: P12 ROUTE CHOICE.

## Four actual stage revisions

Four newly generated, deterministic `dopagaki.track-director/1` course JSONs were delivered in **`STAGE_FORGE_P13_TEMPO_SIGNATURE_FOUR_FAMILIES.zip` (OFFLINE conversation attachment only)**. The real rideable road's **cross-sectional width and bank control points** and the actual fixed obstacle positions were changed in every stage. The 31 noncolliding monumental architecture surfaces and all non-challenge decorative fixtures per stage were verified unchanged. All four remain one continuous road, not true diverging roads.

| Candidate | Designed roadplay rhythm | Static width min–max | Longest fixed-hazard-free authored-guide gap |
|---|---|---:|---:|
| PX-001 PARALLAX EXCHANGE | Entry barrier sequence → long empty overpass express → exit barrier sequence (original 35m two-level crossing preserved) | 24.79–33.02m | 293.70m |
| AR-001 ATLAS REVERSAL | Tight interior galleries and successive obstacles, then a broad central foyer, then more close-control galleries (3 switchbacks retained) | 20.49–31.35m | 177.38m |
| HC-001 HEXACHAMBERS | Three separate chamber episodes: central splitter → offset blocker → broad release | 21.89–34.62m | 169.00m |
| TW-001 TIDAL WAVEFRAME | Obstacles on the before/after approaches, obstacle-free center valley descent and recovery (vertical structure preserved) | 22.36–36.74m | 302.52m |

The measured interval is along the **authored guide** between fixed-hazard placement locations (including start and finish); it is not an observed high-speed safe stretch, a guaranteed reaction-time window or a native game measurement. Each stage has its own descriptive cruise/precision section labels; they do not instruct B3.8 to change speed.

## QA scope actually executed

- Standalone Track Director schema/budgets and conservative geometry audit: **4/4 PASS** (32 surfaces, 112–114 fixtures, zero nearly degenerate control cells, zero declared seam discrepancies).
- Changed physical road lattice, unchanged 31 architectural surfaces and unchanged non-challenge fixtures: **4/4 PASS**.
- Local center-island left/right clearance probes: **9/9 PASS**, using a 3D axis-aligned bounding-box obstacle proxy and road-edge interpolation. This is NOT full route feasibility.
- SHA256 checks of every packaged file and separate-directory extraction + generator reproduction of all four JSONs: **4/4 byte-exact PASS**.
- Actual B3.8 `surface.js` / `collision.js` / `physics.js` engine: not included. **Native autopilot at 28–96m/s, real collision, camera, manual playing and live game integration: NOT RUN.**
- `generatedRoute:true` behavior for the manually authored guide remains **UNVERIFIED**. The computed geometric lane corridors, obstacle-free gaps and static proximity do not prove that a player can successfully steer through those paths at speed.

## Artifact and publication protection

The offline ZIP contains all four **actual course JSONs**, original standalone P13 generator, immutable P12 baseline (including its original source and P11 ancestry), multiview geometry previews, illustrative non-runtime camera perspectives, independent static test scripts and reports, and SHA256 checksum list. Their exact course SHA256 and metrics are recorded in [`experiments/P13_INDEX.json`](../experiments/P13_INDEX.json).

**Only this note and the hash/QA index are being added to Public GitHub.** Do not post course JSON, generator, private editor/game/runtime, user-authored tracks, third-party content, credentials or personal files without separate review. No game v7 physics change, website deployment, GitHub main merge or official catalog approval was made. Stage lifecycle remains **EXPERIMENTAL_NOT_APPROVED**.

Next sensible phase: use this new differentiated tempo as a basis for new visual/roadplay production, while keeping native physical/human validation clearly pending rather than endlessly adjusting static curvature figures.
