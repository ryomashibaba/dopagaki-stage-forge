# P26 / NEXUS MIDFLIGHT CAPTURE — actual original B3.8 physical correction

Date: 2026-10-15. Status: **EXPERIMENTAL_NOT_APPROVED**. Frozen public main: `915fb440d5db5eaac0ead0f607d9bab8e591c4c8`.

## Real P26 geometry shipped OFFLINE (not committed here)

P25 parent recorded a 96m/s assisted compact-gap stage first landing at **Z=425.943m**, far past the original first landing shelf's end at Z=294.667m. P26 changes **only real Y positions on the collidable receiving road's control lattice** — no speed cap/reset, jump button, booster, force-field, original B3.8 physics or public game changes.

Three native-format course JSONs are present in a separate 19.1MB offline archive:
1. **LEDGE — main experiment**: 20 actual receiving road Y-coordinate control-point changes (four complete 5-column rows). Original P25's 12.805m real split-deck gap, giant architecture, objects, 124 fixtures, spawns, road widths and modified takeoff lip maintained. 96m/s first landing moved to **Z=318.049m**.
2. **CAPTURE — alternate experiment**: 25 actual receiving road Y control-point changes (five complete five-column rows). 96m/s first landing Z=311.153m. Although earlier, it was less stable on speed sweeps.
3. **CONTINUOUS CONTROL**: the untouched original P25 single-drive-surface course file; **byte-identical** (same SHA256), not an invented newly improved continuous road.

### Original unchanged B3.8 Node physics, assisted external steering

- **LEDGE:** 28/44/64/**96**m/s: 4/4 `finished`; independent calls to B3.8 `contacts` verify real contact with landing surface for each speed and real support near finish.
- **CAPTURE:** the same original four input speeds: 4/4 `finished`, actual landing contacts confirmed.
- **P25 CONTINUOUS CONTROL:** 28/44/64/96m/s: 4/4 `finished`.
- Thus the 3×4 native assisted-run matrix = **12/12 finished**, and byte-exact native telemetry reproduced after fresh extraction.
- **Additional speed stress:** LEDGE 72/80/88/92/100/104m/s `finished`, **112m/s FAIL (course fall)**. CAPTURE 72/80/92/100/104m/s `finished`, **88 and 112m/s FAIL**. These are genuine original-engine outcomes including failures, not arbitrary sampling estimates.
- The parent P25 originally landed at Z=425.943m at 96m/s; LEDGE advances contact **107.894m**. But LEDGE's contact Z=318.049m is **still after original first shelf end Z≈294.667m**. Precisely describe it as an *intermediate raised catch zone*, **not successful landing within the original first shelf**.
- The original B3.8 engine retains gravity 28 m/s², ball radius 0.65m, time step 1/240 sec, unchanged original assist and external auto-steering. The official `Runner` `finished` event is conditioned on real support and near-end route guide, **not crossing the final physical boundary**.

## Actual browser testing, distinguished from editor play

P26 includes a standalone **new custom** HTML5 Canvas diagnostic viewer, not the official B3.8 browser editor, renderer, camera or native import UI. Chromium ran the same unchanged original B3.8 physics modules as ESMs; browser tests confirmed assisted 96m/s LEDGE `finished`, continuous-control `finished`, chase/overhead diagnostic camera switching, and acceptance of a scripted ArrowRight press for 60 physics ticks, without JavaScript exceptions. The keyboard input was **Playwright automation, not a person playing**.

The execution environment administrator blocked both local HTTP and file-based Chromium navigation. Therefore this isolated test injected modules as ESM Blob URLs into an `about:blank` document with the real JSON bytes in memory; **it does not demonstrate the original editor page's import/UI or even regular local URL navigation here**. Included screenshots are **authentic Chromium screenshots of this new diagnostic viewer**, not original B3.8 screenshots. A separate localhost-only Node static server and optional Windows launcher are included offline for users with permitted localhost navigation.

**Still NOT RUN:** official original B3.8 editor camera/import/renderer, human manual full-course test, qualitative playability, public game v7 integration and deployment.

## Integrity, reproduction, private source boundary

The user's full original P25 source archive, SHA256 `db3067066470ace7decb527bf9d56092abe92bbf26817e05625cc3b29ee886b5`, is kept **unmodified and nested** in the P26 ZIP. It includes previous generations and protected P24 and earlier courses. The five original native B3.8 runtime modules each match P25's owner-local SHA256 provenance. The real P26 roadway and P25-protected architectural surfaces, fixtures and original public game are not published here.

P26 private archive: `STAGE_FORGE_P26_NATIVE_LANDING_CAPTURE.zip`, SHA256 `dc4d0e435f305470629a01ba162e4ac8d4e6a98395f2e1e5ae8bb3807740d982`. Fresh extraction verification:
- **44/44** payload SHA256 manifest;
- **3/3** course JSON byte-for-byte regeneration;
- **12/12** original B3.8 assisted speed-run telemetry, three report files, byte-identical after independent replay;
- **14/14** additional velocity stress probes byte-identical (including the three genuine failures);
- independent geometry, provenance, real landing and final contact QA repeat PASS;
- original B3.8 core module's seven base tests and four built-in example runs PASS;
- browser-screenshot/probe bytes protected by manifest (browser automatic rerun is a separate optional test requiring Chromium + Playwright).

## Public-safe Draft only

This PR commits **only** this explanatory note and [`experiments/P26_INDEX.json`](../experiments/P26_INDEX.json). Neither full P25/P26 JSONs nor generators, preview images, runtime modules, tests, private game/editor/physics code, user stages, assets or deployment credentials go to the Public GitHub repo. No main merge, previous Draft PR modification, approved catalog change or public game/site release.

Next phase should prioritize human difficulty assessment and **the real official editor camera/visibility test**, while preserving this improved midflight landing and respecting the 112m/s failure. No claim of an officially playable finish is made.
