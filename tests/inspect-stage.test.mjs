import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {inspectStage} from '../tools/inspect-stage.mjs';
const d=JSON.parse(fs.readFileSync(new URL('../examples/format-smoke.json',import.meta.url),'utf8'));
test('inspection is deterministic and never alters stage',()=>{
 const before=JSON.stringify(d),a=inspectStage(d),b=inspectStage(d);
 assert.deepEqual(a,b);assert.equal(JSON.stringify(d),before);
 assert.equal(a.format.surfaceCount,1);assert.equal(a.architecture.scenicSurfaces,0);
 assert.equal(a.architecture.scenicFraction,0);assert.ok(a.traversal.guideLength>0);
});
test('geometry signatures respond to path changes',()=>{
 const a=structuredClone(d),b=structuredClone(d);b.route=[[0,0,1],[1,10,20]];
 assert.ok(inspectStage(b).traversal.verticalTravel>inspectStage(a).traversal.verticalTravel);
});
test('scenic surface metadata is not confused with rideable geometry',()=>{
 const b=structuredClone(d),s=structuredClone(b.surfaces[0]);
 s.id='visual-shell';s.rideable=false;s.collidable=false;s.material='shell';b.surfaces.push(s);
 const result=inspectStage(b);
 assert.equal(result.architecture.scenicSurfaces,1);
 assert.equal(result.architecture.nonCollidableSurfaces,1);
 assert.equal(result.format.surfaceCount,2);
});
