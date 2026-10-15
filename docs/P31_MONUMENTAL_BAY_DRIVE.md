# P31 MONUMENTAL BAY DRIVE — three large drive-through architecture chambers

2026-10-15. Status **EXPERIMENTAL_NOT_APPROVED**. Public main frozen at `915fb440d5db5eaac0ead0f607d9bab8e591c4c8`; predecessor P30.

## Why P31 and what ACTUALLY changed

P30 produced three valid, static legacy-B3.8 placement bays for eventually receiving moving hazards. Instead of waiting and fabricating unfamiliar B45 JSON, P31 **expanded the actual stage** into a more monumental three-chamber drive, while preserving architecture and real game-physics boundaries.

- **SLIDER GALLERY / CANTED FIN CORRIDOR:** 34 legacy-native **noncolliding** decorative beams form giant overhead gantries, tilted fins and parallel side spines. At the actual rideable road, a bank and recessed channel change the driving floor geometry.
- **ROTATOR ATRIUM / DUAL CROWN:** 32 static, noncolliding visual beams form two 12-segment polygonal radial crowns and eight hanging structural masts. Real road cross-bank reverses locally. These are *not rotating collision arms*.
- **PISTON VAULT / STACKED PORTAL:** 26 static, noncolliding beams form three vertical portal tiers, side pylons and braced upper keels. Actual road narrows and rises/falls through the center. These are *not moving pistons*.

**Two complete new stage JSONs**: `nexus-p31-clear.json` (three noncolliding center markers), `nexus-p31-static.json` (three **stationary** original-B3.8 `danger` colliders), plus byte-exact preserved P30 clear/static controls. No fictitious B45 native kinds in any generated JSON.

The two new course outputs each have exactly **32 surfaces** (2 collidable drive floors across the unchanged actual NEXUS real gap + 30 unmodified monumental noncolliding surfaces). In the lower collidable drive floor, **68 of the actual 105 XYZ control points differ from P30**, with a maximum point displacement **4.251m**, vertical component **4.056m**, lateral component **1.273m**. Road Z positions and jump takeoff stage are unchanged. This is **real road/lane geometry editing**, not guide-line editing alone. The 92 new architectural visual beams bring each new course from 139 to **231 fixtures**, under the known old 256-fixture cap. There are 25 fixture slots left in this old schema. The original older 139 fixture IDs and original enormous roof/shell geometry are preserved; only the three original center danger/marker positions shift to match the revised floor.

## Key B45 update and strict responsible integration gate

The user clarified that by separate-branch **B45**, all three moving types **horizontal slider, rotating arm and vertical piston** *and* per-obstacle collision-mode C (**immediate fail / bounce / push**) are reported **implemented** (B40–B43), with moving-obstacle automated QA **98/98 PASS**. The Windows actual integration drive test is not yet confirmed.

However, the actual **B45 save/export schema and the three representative JSON samples are still being prepared by the other team**. The old runtime physically present in the P30/P31 package is not a B45 moving-runtime. Stage authors MUST NOT guess moving `kind` values, property names, collision-mode keys, timing axes or native physics.

P31 therefore serializes **ZERO moving props and ZERO mode-C settings**. `source/P31_B45_INTEGRATION_SLOTS.json` contains only explicit design intent with null official moving payloads. After the exact B45 exported examples arrive, map their real fields to the P31 established XYZ anchors, use the B45 owner/editor to read-save/reload, and let that separate team verify its native moving physics and per-object C responses. P31's existing static proxies may then be removed or replaced as the exact schema requires. This documentation does not transfer code ownership or claim new moving-physics PASS.

## Truthful genuine ORIGINAL (legacy) B3.8 physics tests

Two new complete P31 stages × four starting speeds **28 / 44 / 64 / 96 m/s** × two machine-driven discrete steering policies (*guide center* vs *stationary-obstacle anticipation*) were executed using the original **unchanged P30-inherited 5 B3.8 physical modules** with original `Runner.assist` ON.

**16 actual original legacy physical runs: 13 finished; 3 failed.** A center-following 64m/s static stage run contacted a lethal stationary danger block. Overly aggressive anticipatory steering at 96m/s left the track. Other assisted conditions reached the original runner's grounded-near-guide-end `finished` criterion. **All 3 failures preserved.**

Important limitations: none of the three B45 actual moving kinds or fail/bounce/push dynamics were loaded or driven here; none of this is a **human** manual finish; no actual B45 editor/browser/Windows integration pass, original B3.8 original game camera, public game v7 or official stage-catalog approval has been done. Even true `Runner.finished` is not a production game completion certificate.

## Independent artifact reproduction and publication boundaries

P31 separate offline user ZIP `STAGE_FORGE_P31_MONUMENTAL_BAY_DRIVE.zip`, SHA256 `0db1fc3c2c3cf264e71431bd03a249131f78ec64897a1941d2825f6eff8483dd`. Actual contents:
- 2 real P31 track variants + 2 protected P30 tracks;
- complete original P30 ZIP `SHA256=957b102a3492091c464d406955ffaf5469aaae8dba8721f9144a9825ed83230e`;
- deterministic stage source generator, independent QA checker, honest old-B3.8 native 16-run physics probe + report including failures;
- unchanged old B3.8 source modules, actual-geometry-derived 3D architectural preview and before/after road-control comparison;
- independently running local-only custom diagnostic viewer showing 92 architecture beams with original old B3.8 physics; this is **not** the B45 native editor;
- Japanese README, exact future integration gate, Windows optional single-double-click starter, SHA256SUMS.

Fresh unzip into independent directory: **33/33 payload SHA256 PASS**, **4/4 regenerated course JSONs byte-exact**, **16/16 reproduced original native physics probe stdout byte-exact**; dedicated source/reference/3-zone QA PASS; HTTP 200 for homepage, JS, both new stages and design-only integration JSON.

**Public Draft PR ONLY adds this explanatory document and [`experiments/P31_INDEX.json`](../experiments/P31_INDEX.json).** We did not upload the stage JSON, generator, source runtime/editor code, original full ZIP, previews, user-authored stages, private assets or deployment files to Public GitHub. We did not merge/change main, previous Draft PRs, published game, B3.8 editor/physics code or approved catalog.

Next step: continue building novel massive stage/road geometries; when the exact B45 sample JSON arrives, bind its native moving objects and the existing collision modes **only with verified official fields**, on a separate test version of these P31 stages.
