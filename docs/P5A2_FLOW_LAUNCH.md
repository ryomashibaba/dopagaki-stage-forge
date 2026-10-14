# P5-A2 FLOW & LAUNCH — four revised experimental roadplay candidates

Date: 2026-10-15. Baseline: the separately supplied P5-A archive, whose four original course JSONs are verified by exact SHA256 before generating any changes. P4 and P5 originals remain immutable.

## Actual course changes

- **PC-001 PRISM CATHEDRAL:** six original alternated crystal columns and the bank-reversal road retained; collision-avoidance guide joins successive lanes more gradually instead of making brief last-second spikes.
- **TT-001 TITAN TURBINE:** eight existing fixed barricades now form **four opposite-side two-beat groups** (right/right, left/left, right/right, left/left). This changes real fixture placements while preserving the monumental rotor architecture and the count/allowed kinds of obstacles. A longer dwell phase is available between major lane changes.
- **ED-001 ECLIPSE DISHES:** instead of treating the changing concave, banked 11–24m-wide section as a centered road, the explicit route explores different cross-section lines. No unnecessary new hazards.
- **SC-001 SKYLINE COLLAPSE:** corrected the previous nominal jump crest: measured maximum positive control-row slope was only **0.015** because it lay on a long descent. The new physical road rises to a measured **+0.23 uphill grade** before a roughly **-0.45 downhill grade**, forming a real launch-face candidate. **Flight/landing NOT demonstrated**; the road is still a single continuous rideable surface. Existing architecture not altered.

The route guide uses independently authored fifth-order eased waypoint transitions. Whether the proprietary B3.8 runtime honors this manually authored route when `generatedRoute` is true remains **unverified**.

## Standalone verification results

| ID | Surfaces | Fixtures | Format | Static geometry | Native physics |
|---|---:|---:|---|---|---|
| PC-001 | 31 | 146 | PASS | PASS | NOT RUN |
| TT-001 | 29 | 160 | PASS | PASS | NOT RUN |
| ED-001 | 31 | 144 | PASS | PASS | NOT RUN |
| SC-001 | 32 | 161 | PASS | PASS | NOT RUN |

Independent verification of archived P5-A inputs, byte-structured preservation of decorative surfaces, reproducible JSON generation, fixture-envelope spacing, route margins, degenerate control cells, and declared seams completed locally: 4/4 PASS. The minimum *planar* guide-to-new-fixture-rectangle distances were PC **3.48m**, TT **3.56m**, SC **5.75m** (ED no fixed hazards). This is not a proof of ball-radius clearance or path feasibility at speed. Human/manual playtesting was not run.

The B3.8 native runner `surface.js`, `collision.js`, and `physics.js` is not in either supplied archive or this public repository. Do not report 28/36/48/64/80/96m/s completion for this version. P4's 24/24 results do not transfer to P5-A2.

## Immutable distribution / publicity boundary

An **offline ZIP** contains actual course JSONs, regenerated source, immutable P5-A and P4 source snapshots, per-stage four-view previews, and the full independent QA report. It is **not attached to this Public PR**. This PR publishes only metadata and the explanatory note, never private game physics, proprietary/editor source, user-authored courses, deployment or credential data.

**Status: EXPERIMENTAL_NOT_APPROVED**. No approved catalog entry, no public game changes, no site updates, and no manual user operations. Refer to [`experiments/P5A2_INDEX.json`](../experiments/P5A2_INDEX.json) for exact version hashes. Prior experimental P5-A record: PR #5.
