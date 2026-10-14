import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { validateStage, STAGE_SCHEMA } from '../tools/validate.mjs';

const seed=JSON.parse(fs.readFileSync(new URL('../examples/format-smoke.json',import.meta.url),'utf8'));
const clone=()=>structuredClone(seed);

test('independent smoke fixture validates',()=>{
  const result=validateStage(seed);
  assert.equal(result.surfaceCount,1);
  assert.equal(result.fixtureCount,0);
});
test('reject duplicate surfaces',()=>{
  const d=clone(); d.surfaces.push(structuredClone(d.surfaces[0]));
  assert.throws(()=>validateStage(d),/duplicate surface/);
});
test('reject bad spawn references',()=>{
  const d=clone(); d.spawns[0].surface='missing';
  assert.throws(()=>validateStage(d),/Invalid spawn/);
});
test('reject unsupported fixture',()=>{
  const d=clone(); d.fixtures.push({
    id:'fixture-1',kind:'unknown',position:[0,0,0],size:[1,1,1],yaw:0
  });
  assert.throws(()=>validateStage(d),/Invalid\/duplicate fixture/);
});
test('reject point outside coordinate bounds',()=>{
  const d=clone(); d.surfaces[0].points[0][0]=2001;
  assert.throws(()=>validateStage(d),/invalid points/);
});
test('require exact Track Director schema',()=>{
  const d=clone(); d.schema='some-other-schema';
  assert.throws(()=>validateStage(d),/Wrong stage schema/);
  assert.equal(STAGE_SCHEMA,'dopagaki.track-director/1');
});
test('reject unreferenced structure',()=>{
  const d=clone(); d.surfaces[0].objectId='missing';
  d.objects=[];
  assert.throws(()=>validateStage(d),/Unknown structure/);
});
