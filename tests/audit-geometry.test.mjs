import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {auditGeometry,gridSample} from '../tools/audit-geometry.mjs';
const reference=JSON.parse(readFileSync(new URL('../examples/format-smoke.json',import.meta.url),'utf8'));
const clone=()=>structuredClone(reference);
test('smoke geometry is wider than ball',()=>{
 const report=auditGeometry(reference);
 assert.equal(report.status,'PASS');
 assert.ok(report.metrics.minRoadWidthMeters>=5);
});
test('narrow roadway is rejected even when format is valid',()=>{
 const doc=clone();
 for(const p of doc.surfaces[0].points)p[0]*=.01;
 const report=auditGeometry(doc);
 assert.equal(report.status,'FAIL');
 assert.match(report.failures[0],/width under/);
});
test('mismatched road-edge seams are rejected',()=>{
 const doc=clone(),b=structuredClone(doc.surfaces[0]);
 b.id='second-road';b.points=b.points.map(p=>[p[0]+5,p[1],p[2]+20]);
 doc.surfaces.push(b);
 doc.routeSegments=[
   {surface:'smoke-road',u0:0,u1:1,v:.5},
   {surface:'second-road',u0:0,u1:1,v:.5}
 ];
 const report=auditGeometry(doc);
 assert.equal(report.status,'FAIL');
 assert.ok(report.metrics.maxDeclaredSeamGapMeters>1);
});
test('grid interpolation retains control corners',()=>{
 const s=reference.surfaces[0];
 assert.ok(Math.hypot(...gridSample(s,0,0).map((x,i)=>x-s.points[0][i]))<1e-4);
});
test('static pass does not claim physical verification',()=>{
 const report=auditGeometry(reference);
 assert.match(report.disclaimer,/Does not verify physics/);
});
