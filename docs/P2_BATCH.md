# P2 — First structural diversity batch

This batch deliberately avoids copying the user-authored stage or HANGING BASILICA.

| Candidate | Architecture | Structural assets in locally generated trial | Status |
| --- | --- | ---: | --- |
| HC-001 HOLLOW CORE | Fractured, multi-tier hollow observation cylinder | 27 surfaces / 72 fixtures | Experimental |
| TF-001 TITAN FOLD | Huge overlapping folded structural plates | 24 / 64 | Experimental |
| AF-001 ABYSS FRACTURE | Twin vertical tectonic escarpments and fault spines | 26 / 104 | Experimental |
| FM-001 FRACTURED MONOLITH | Four suspended split cubic bodies with shear cuts | 28 / 96 | Experimental |

## Important verification boundaries

- Native Track Director B3.8 `surface.js` structural validation: 4/4 PASS in isolated offline testing.
- No claimed Windows WebGL PASS, human playtest, game v7 compatibility or auto-driving speed range.
- 4 independently generated prototype JSONs, generator and coordinate-based preview images are bundled in the P2 handoff archive.
- `catalog.json` remains empty; no automatic promotion into `approved/`.
- Existing source, physics, visuals, deployment and user-authored stages remain untouched.
- Visual-only geometry uses `rideable=false, collidable=false`, while each prototype has a continuous physical driving skin.
- CI should test the published generator separately before the four stages are promoted.
- Human appraisal: does the large-scale structure survive when the road is hidden? Are silhouettes different? Are joins/fin details interesting?
