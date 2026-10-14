/**
 * Public, standalone, zero-dependency structural validator for Track Director /1 JSON.
 * Does NOT import DOPAGAKI game, editor, physics, or proprietary assets.
 * "Valid" means structural format only, never proven playability or rendering.
 */
import fs from 'node:fs';
import { pathToFileURL } from 'node:url';

export const STAGE_SCHEMA = 'dopagaki.track-director/1';
const kinds = new Set(['danger', 'shove', 'boosterCube', 'cube', 'magnet', 'block',
  'wall', 'gate', 'coin', 'coinPink', 'coinGold', 'coinRainbow', 'boost',
  'pylon', 'tunnel', 'marker', 'beam']);
const isRecord = value => value !== null && typeof value === 'object' && !Array.isArray(value);
const finite = v => typeof v === 'number' && Number.isFinite(v);
const intBetween = (v, low, high) => Number.isInteger(v) && v >= low && v <= high;
const xyz = p => Array.isArray(p) && p.length === 3 &&
  p.every(v => finite(v) && Math.abs(v) <= 2000);
const range01 = v => finite(v) && v >= 0 && v <= 1;
function demand(ok, message) { if (!ok) throw new Error(message); }

export function validateStage(doc) {
  demand(isRecord(doc) && doc.schema === STAGE_SCHEMA, 'Wrong stage schema');
  demand(Array.isArray(doc.surfaces) && doc.surfaces.length <= 32, 'Surfaces: maximum 32');
  demand(typeof doc.name === 'string' && doc.name.length > 0, 'Stage name is required');
  const surfaceIds = new Set();
  let triangles = 0, points = 0;
  const min = [Infinity,Infinity,Infinity], max = [-Infinity,-Infinity,-Infinity];
  for (const s of doc.surfaces) {
    demand(isRecord(s) && typeof s.id === 'string' && s.id.length > 0 &&
      !surfaceIds.has(s.id), 'Invalid or duplicate surface id');
    surfaceIds.add(s.id);
    demand(typeof s.name === 'string', `Surface ${s.id}: invalid name`);
    demand(intBetween(s.rows, 2, 32) && intBetween(s.cols, 2, 32) &&
      intBetween(s.resolution, 2, 16), `Surface ${s.id}: invalid lattice`);
    demand(Array.isArray(s.points) && s.points.length === s.rows*s.cols &&
      s.points.every(xyz), `Surface ${s.id}: invalid points`);
    demand(typeof s.rideable === 'boolean' && typeof s.collidable === 'boolean' &&
      ['road','roof','shell'].includes(s.material), `Surface ${s.id}: invalid physical attributes`);
    if (s.thickness !== undefined) demand(finite(s.thickness) &&
      s.thickness >= .15 && s.thickness <= 20, `Surface ${s.id}: invalid thickness`);
    if (s.thicknessMirror !== undefined) demand(Array.isArray(s.thicknessMirror) &&
      s.thicknessMirror.length === 3 && s.thicknessMirror.every(v => v===1 || v===-1),
      `Surface ${s.id}: invalid mirror directions`);
    for(const k of ['visible','locked']) if(s[k] !== undefined)
      demand(typeof s[k] === 'boolean', `Surface ${s.id}: invalid ${k}`);
    const nu=(s.rows-1)*s.resolution, nv=(s.cols-1)*s.resolution;
    triangles += 4*nu*nv+4*(nu+nv); points += s.points.length;
    for (const p of s.points) for (let k=0;k<3;k++) {
      min[k]=Math.min(min[k],p[k]); max[k]=Math.max(max[k],p[k]);
    }
  }
  demand(triangles <= 200000, 'Mesh exceeds 200000 estimated solid triangles');
  demand(Array.isArray(doc.spawns) && doc.spawns.length <= 32, 'Invalid spawns');
  demand(!doc.surfaces.some(s=>s.rideable && s.collidable) ||
    doc.spawns.length > 0, 'Rideable course requires spawn');
  for(const sp of doc.spawns) demand(isRecord(sp) && typeof sp.name === 'string' &&
    surfaceIds.has(sp.surface) && range01(sp.u) && range01(sp.v) &&
    (sp.reverse===undefined || typeof sp.reverse==='boolean'), 'Invalid spawn');
  demand(Array.isArray(doc.route) && doc.route.length <= 4096 &&
    (!doc.spawns.length || doc.route.length >= 2) && doc.route.every(xyz),
    'Invalid route');
  if (doc.routeSegments !== undefined) {
    demand(Array.isArray(doc.routeSegments), 'Invalid routeSegments');
    for(const g of doc.routeSegments) demand(isRecord(g) && surfaceIds.has(g.surface) &&
      range01(g.u0) && range01(g.u1) && range01(g.v) && g.u0!==g.u1,
      'Invalid route segment');
  }
  if (doc.objects !== undefined) {
    demand(Array.isArray(doc.objects), 'Invalid objects');
    const objects = new Map();
    for(const o of doc.objects) {
      demand(isRecord(o) && typeof o.id==='string' && o.id.length > 0 &&
        typeof o.name==='string' && !objects.has(o.id),'Duplicate or invalid object');
      objects.set(o.id,o);
    }
    for(const s of doc.surfaces) if(s.objectId)
      demand(objects.has(s.objectId), `Unknown structure: ${s.objectId}`);
    for(const o of doc.objects) {
      const seen=new Set([o.id]); let parent=o.parentId;
      while(parent) {
        demand(objects.has(parent) && !seen.has(parent), 'Invalid/cyclic object parents');
        seen.add(parent); parent=objects.get(parent).parentId;
      }
    }
  }
  if(doc.fixtures !== undefined) {
    demand(Array.isArray(doc.fixtures) && doc.fixtures.length<=256,
      'Fixtures: maximum 256');
    const fixtureIds=new Set();
    for(const f of doc.fixtures) {
      demand(isRecord(f) && typeof f.id==='string' && f.id.length > 0 &&
        !fixtureIds.has(f.id) && kinds.has(f.kind),'Invalid/duplicate fixture');
      fixtureIds.add(f.id);
      demand(xyz(f.position) && Array.isArray(f.size) && f.size.length===3 &&
        f.size.every(x=>finite(x)&&x>=.1&&x<=120) &&
        finite(f.yaw) && Math.abs(f.yaw)<=36000 &&
        (f.enabled===undefined || typeof f.enabled==='boolean'),
        `Invalid fixture transform: ${f.id}`);
    }
  }
  return {surfaceCount:doc.surfaces.length,fixtureCount:doc.fixtures?.length??0,
    controlPoints:points,estimatedSolidTriangles:triangles,
    bounds:doc.surfaces.length?{min,max}:null};
}

if(process.argv[1] && import.meta.url===pathToFileURL(process.argv[1]).href) {
  const paths=process.argv.slice(2);
  if(!paths.length) { console.error('Usage: node tools/validate.mjs <course.json>...'); process.exitCode=2; }
  else for(const path of paths) try {
    const summary=validateStage(JSON.parse(fs.readFileSync(path,'utf8')));
    console.log('FORMAT PASS',path,JSON.stringify(summary));
  } catch(err) {
    console.error('FORMAT FAIL',path,err.message);
    process.exitCode=1;
  }
}
