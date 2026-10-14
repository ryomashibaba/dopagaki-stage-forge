import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const index=JSON.parse(readFileSync(new URL('../experiments/P4_INDEX.json',import.meta.url),'utf8'));
const legacy=JSON.parse(readFileSync(new URL('../experiments/P3_INDEX.json',import.meta.url),'utf8'));
test('P4 four distinctive families are never silently approved',()=>{
 assert.equal(index.status,'EXPERIMENTAL_NOT_APPROVED');
 assert.equal(index.parts.length,4);
 assert.equal(new Set(index.parts.map(x=>x.id)).size,4);
 assert.equal(new Set(index.parts.map(x=>x.family)).size,4);
 assert.equal(new Set(index.parts.map(x=>x.sha256)).size,4);
 for(const p of index.parts){
  assert.equal(p.status,'experimental');
  assert.equal(p.stageJsonStoredInGitHub,false);
  assert.equal(p.manualWindows,'NOT_TESTED');
  assert.equal(p.publishedGame,'NOT_TESTED');
  assert.match(p.sha256,/^[a-f0-9]{64}$/);
  assert.ok(p.surfaces>=2&&p.surfaces<=32);
  assert.equal(p.decorativeSurfaces,p.surfaces-1);
  assert.ok(p.decorativeSurfaces>=28);
  assert.ok(p.fixtures>=100&&p.fixtures<=256);
  assert.equal(p.autopilotCompleted,p.autopilotSpeeds.length);
  assert.deepEqual(p.autopilotSpeeds,[28,36,48,64,80,96]);
 }
});
test('P4 structural families are new relative to P3',()=>{
 const old=new Set(legacy.parts.map(x=>x.family));
 for(const p of index.parts)assert.ok(!old.has(p.family),p.id+' overlaps P3 family');
});
test('P4 index does not claim public stage payload or live game verification',()=>{
 assert.equal(index.metrics.manualWindowsPlaytests,0);
 assert.match(index.description,/not published to GitHub/);
 assert.equal(index.metrics.automatedAssistRunsFinished,24);
 assert.equal(index.metrics.automatedAssistRunsTotal,24);
});
