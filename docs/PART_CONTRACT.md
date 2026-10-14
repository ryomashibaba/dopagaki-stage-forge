# STAGE FORGE stage-part contract / version 1

Primary purpose: create many **structurally unrelated** impressive stage parts with detailed built-in architecture.
DOPAGAKI SLOPE's actual playable final courses are the goal, not endless editor additions.

## Native course format
- Each `course.json` uses `dopagaki.track-director/1` and remains loadable by the separate B3.8 editor.
- Rideable surfaces and visual-only structural surfaces are distinct. Visual-only geometry should normally set
  `rideable:false`, `collidable:false` to avoid invisible collision failures.
- Limits tracked by P1 validator: 32 surfaces, 256 fixtures, rows/cols 2..32, resolution 2..16,
  coordinate components within +/-2000 m, estimated solid triangles <=200000.
- Only native B3.8 recognized fixture kinds may appear. The final game is a different integration target.
- A smooth centerline does NOT guarantee seamless road edges. Adjacent surfaces must be checked across
  their width, slope and underside; continuous driveable meshes are preferred when possible.

## Storage (proposed; populated in later phases)
```
approved/HG-001-hanging-basilica/v1/course.json
approved/HG-001-hanging-basilica/v1/manifest.json
approved/HG-001-hanging-basilica/v1/generator.mjs
approved/HG-001-hanging-basilica/v1/previews/
approved/HG-001-hanging-basilica/v1/qa/
```
`HG-001` is a **reservation**, not a claim that its content was published or approved.
Existing A3 test data must undergo a separate public-source review before upload.

## Manifest fields for future stage parts
- id, version, status (experimental/candidate/approved/archived), structureFamily, concept
- geometry signature: enclosure type, layering, dominant axis, void/volume, entry/exit topology
- driving signature: speed range actually tested, hazard type, traversal time, turn complexity
- scenery signature: primary frame, secondary ribs, mechanical joins, micro-detail patterns
- entrance and exit: position, normal/tangent, width, elevation, slope (measured, not guessed)
- artifacts: generator source, seed, course JSON, preview images, QA results
- provenance: originally authored vs copied vs licensed assets; source of third-party material

## Diversity gate
A different material, color or theme does not constitute a new structural family.
Compare architecture, spatial traversal and mechanical driving characteristics separately.
Do not allow the user's uploaded sample or previous AI courses to become a default geometry template.

## Scenery responsibilities
- Stage Forge: load-bearing-looking silhouettes, hollows, structural seams, trusses, anchor joints,
  ribbing, micro-detail, understructure. Density should have rhythm rather than homogeneous clutter.
- Game runtime: lighting, particles, animated effects, distant city/sky, sound.
Both layers should complement each other; the geometry remains convincing without runtime cosmetics.

## Acceptance
FORMAT PASS alone never means playable. Require visual reviews and speed-range tests before calling a part
a candidate, plus human testing before approved. The game v7 source and deployment remain untouched.
