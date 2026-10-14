/**
 * P2 geometry-signature inspector.
 * Independent of private game/editor code; deterministic, read-only, offline.
 * This is a comparison aid, not an objective measure of fun or originality.
 */
import fs from 'node:fs';
import { pathToFileURL } from 'node:url';
import { validateStage } from './validate.mjs';
const norm=v=>Math.hypot(...v);
const minus=(a,b)=>a.map((x,i)=>x-b[i]);
const dot=(a,b)=>a.reduce((v,x,i)=>v+x*b[i],0);
const rounded=n=>+n.toFixed(3);
export function inspectStage(course) {
 const format=validateStage(course);
 const surfaces=course.surfaces;
 const path=course.route;
 let distance=0, vertical=0, turn=0, climb=0, drop=0;
 for(let i=1;i<path.length;i++){
   const delta=minus(path[i],path[i-1]),d=norm(delta);
   distance+=d;vertical+=Math.abs(delta[1]);
   if(delta[1]>0)climb+=delta[1];else drop-=delta[1];
   if(i>=2){
     const a=minus(path[i-1],path[i-2]),la=norm(a);
     if(d>.00001&&la>.00001)
       turn+=Math.acos(Math.min(1,Math.max(-1,dot(a,delta)/(la*d))))*180/Math.PI;
   }
 }
 const nonRideable=surfaces.filter(s=>!s.rideable).length;
 const nonCollidable=surfaces.filter(s=>!s.collidable).length;
 const counts=Object.fromEntries(['road','roof','shell'].map(m=>[m,surfaces.filter(s=>s.material===m).length]));
 const b=format.bounds;
 return {
  name:course.name,id:course.stageForge?.id??null,family:course.stageForge?.structureFamily??null,
  status:course.stageForge?.status??'unspecified',format,
  architecture:{
    scenicSurfaces:nonRideable,nonCollidableSurfaces:nonCollidable,
    scenicFraction:rounded(nonRideable/Math.max(1,surfaces.length)),
    materialCounts:counts, fixtureKinds:Object.fromEntries([...new Set((course.fixtures??[]).map(f=>f.kind))].sort().map(k=>[k,course.fixtures.filter(f=>f.kind===k).length])),
    dimensions:b?b.max.map((x,i)=>rounded(x-b.min[i])):[0,0,0]
  },
  traversal:{guideLength:rounded(distance),verticalTravel:rounded(vertical),climb:rounded(climb),
    descent:rounded(drop),accumulatedTurnDegrees:rounded(turn)}
 };
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href){
 const paths=process.argv.slice(2);if(!paths.length){console.error('Usage: node tools/inspect-stage.mjs <stage.json>...');process.exitCode=2;}
 for(const path of paths)try{console.log(JSON.stringify(inspectStage(JSON.parse(fs.readFileSync(path,'utf8'))),null,2));}
 catch(error){console.error(path,error.message);process.exitCode=1;}
}
