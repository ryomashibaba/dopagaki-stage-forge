# P27 PLAYER VISIBILITY & MANUAL INPUT — native physics, custom isolated player-view lab

Date: 2026-10-15. Status: **EXPERIMENTAL_NOT_APPROVED**. Public frozen main `915fb440d5db5eaac0ead0f607d9bab8e591c4c8`. Parent: P26 NEXUS MIDFLIGHT CAPTURE.

## Actual production (all functional files delivered OFFLINE only)

P27 does **not** modify stage geometry or retune the P26 LEDGE/CAPTURE/CONTINUOUS experiments. All three stage JSONs, 5 original B3.8 modules and 12 native assisted-run reports are preserved **byte-for-byte** from P26. A full immutable P26 ZIP is enclosed in a new P27 conversation ZIP.

Instead, P27 implemented a **new, actually running standalone HTML5 Canvas diagnostic driving app** atop **unchanged B3.8 `Runner.step()`**, with actual NEXUS road and noncollidable monumental architecture geometry. Controls:
- fixed-distance ball-relative low chase as default; switch among low / P26 reference chase / overhead with C;
- manual steering with arrow keys, A/D and clickable/touchable left/right, separate MANUAL vs original external AUTO steering with M;
- independently toggle unchanged native `Runner.assist` using N;
- true contact/air phase, actual landing Z, speed, height, steering state, status HUD; local JSON telemetry export;
- fade very-near visual-only monumental surfaces **in this independent custom renderer**, not the stage/physics or public game.

### Measured camera findings

We tested real trajectories from **original B3.8 assisted physics** at 28/44/64/96m/s on the actual immutable P26 LEDGE course. For positions Z130–480m, we cast line-segment rays from each modeled diagnostic camera to source-authored advisory-road targets 30/60/90m ahead, intersecting **the top triangles of nonrideable visual architecture tessellated by the original B3.8 surface module**.

| Diagnostic camera | Obstructed among 321 sample rays | Obstructed among 42 rays at 96m/s |
|---|---:|---:|
| P26 reference CHASE, 29m behind and 15m up | **10 (3.1%)** | **9 (21.4%)** |
| P27 LOW chase, 22m behind and 6m up | **0 (0%)** | **0 (0%)** |
| Elevated diagnostic camera, 38m behind and 26m up | 50 (15.6%) | 24 (57.1%) |

The chief source of original roof-like visual interference was actually the noncollidable **`hyperbolic-shell-1-6`** side panel, not the six roof panels. Contrary to the assumption that a high camera is safer, in this monumental enclosed geometry the lowered, closer chase gave **much clearer calculated guide sightlines** without deleting architecture.

**Limitations**: These are **321 discrete line-segment checks against only nonrideable visual surfaces**. The results do NOT measure moving-player vision, the full viewport, course-road self-occlusion at terrain crests, object/fixture occlusion, near-plane clipping, actual renderer depth/transparency, a human driver's ability to see hazards, or the original B3.8 editor's camera. The accurate statement is *0 obstructions in this limited diagnostic sampling*, not *a perfect playable camera*.

### Actual input / physical browser evidence

P27 headless Chromium executed the unchanged original B3.8 physics modules via injected **in-memory ESM Blob URLs** in a sandboxed `about:blank` page, because local HTTP/file browsing is blocked by this test environment policy. Actual stage JSONs remained unmodified.

- **96m/s LEDGE original assisted AUTO: finished** with real event indicating contact on the separate landing deck. **P25 continuous physical-road control: finished**.
- Same initial state after 240 ticks, then scripted **ArrowLeft or ArrowRight for 60 ticks** (MANUAL, but unchanged native assist still ON): resulting ball X-coordinate difference **1.720547m**, confirming steering changes actual physics motion, not only the HUD.
- Original native assist OFF with scripted A key 60 ticks: input accepted, **not a human completion**.
- Low/reference/overhead camera tests and actual Chromium screenshots, JavaScript exceptions **0**.
- Real **human** driving is **NOT RUN**; the keyboard events were Playwright-driven. The original editor's UI/rendering/import/camera was **NOT RUN** and is not represented by our custom viewer. Public game v7 deployment/compatibility is **NOT RUN**.

## Verification, preservation and safe publication

The private offline P27 artifact `STAGE_FORGE_P27_PLAYER_VISIBILITY_NATIVE_CAMERA.zip` (SHA256 `745a1367387008776cb616e3db7ee7d72e0ecae001b0069ff103984186956816`) contains original P26 full ZIP and baseline stages, original runtime 5 modules, 3 source-identical stage JSONs, new viewer source and optional Windows double-click launcher, standalone 321-ray analyzer, Chromium automation script, 3 native 4-speed reports, all screenshots, records and integrity verifier, SHA256SUMS and Japanese reproducibility guide. Fresh extraction + file checksums: **38/38 PASS**. Deterministic JSON snapshot restoration: **3/3 identical to original P26**; original B3.8 engine 3 courses × 4 speeds: **12/12 reports byte-exact match P26**.

No original B3.8 physics editing; no alteration of original camera code (unavailable), game site, NEXUS stage JSON, giant architecture, fixtures, user stages or published game. The known 112m/s P26 failure is **not** improved or reclassified.

**This PUBLIC Draft PR adds only this file and [`experiments/P27_INDEX.json`](../experiments/P27_INDEX.json).** Actual JSON tracks, test automation, source modules, screenshots and complete private archive are **not** uploaded. No main merge, production deployment or official stage approval.

Next priority: have a human drive the standalone local viewer (optional Windows, Node22+), review whether low camera and occlusion translucency feels good, then acquire the lawful **original B3.8 editor UI/camera runtime** for real source-equivalent visuals and native import checks before promoting a course.
