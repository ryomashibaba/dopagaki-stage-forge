/**
 * Standalone conservative static geometry checks for Track Director /1.
 * No private game/editor imports. Never label this a physics or human-playtest PASS.
 */
import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
const sub=(a,b)=>a.map((v,i)=>v-b[i]);
const size=a=>Math.hypot(...a);
const dist=(a,b)=>size(sub(a,b));
const product=(a,b)=>a.reduce((n,v,i)=>n+v*b[i],0);
const cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
const norm=a=>a.map(v=>v/(size(a)||1));
function cr(a,b,c,d,t) {
 return a.map((_,i)=>.5*(2*b[i]+(c[i]-a[i])*t+(2*a[i]-5*b[i]+4*c[i]-d[i])*t*t+(-a[i]+3*b[i]-3*c[i]+d[i])*t*t*t));
}
export function gridSample(s,u,v) {
 const rows=s.rows, cols=s.cols;
 const row=r=>{
  r=Math.max(0,Math.min(rows-1,r));
  const q=Math.max(0,Math.min(cols-1-1e-8,v*(cols-1))),j=Math.floor(q),t=q-j;
  const p=k=>s.points[r*cols+Math.max(0,Math.min(cols-1,k))];
  return cr(p(j-1),p(j),p(j+1),p(j+2),t);
 };
 const q=Math.max(0,Math.min(rows-1-1e-8,u*(rows-1))),i=Math.floor(q);
 return cr(row(i-1),row(i),row(i+1),row(i+2),q-i);
}
export function auditGeometry(doc) {
 if(!doc || !Array.isArray(doc.surfaces) || !Array.isArray(doc.route))
  throw Error('Expected a Track Director course document');
 const failures=[],warnings=[],ride=doc.surfaces.filter(s=>s.rideable && s.collidable);
 const metrics={rideableSurfaces:ride.length,decorativeSurfaces:doc.surfaces.length-ride.length};
 let badCells=0,minWidth=Infinity,maxGrade=0,maxTurn=0,travel=0;
 for(const s of doc.surfaces) for(let i=0;i<s.rows-1;i++) for(let j=0;j<s.cols-1;j++) {
  const p=(r,c)=>s.points[r*s.cols+c],a=sub(p(i+1,j),p(i,j)),b=sub(p(i,j+1),p(i,j));
  if(size(cross(a,b))<.0001)badCells++;
 }
 for(const s of ride) {
  let old=null,oldForward=null;
  for(let i=0;i<=100;i++) {
   const u=i/100,center=gridSample(s,u,.5),left=gridSample(s,u,0),right=gridSample(s,u,1);
   const width=dist(left,right);minWidth=Math.min(minWidth,width);
   if(width<1.4) failures.push(s.id+': width under 1.4m at '+u.toFixed(2));
   if(old) {
    const step=sub(center,old),h=Math.hypot(step[0],step[2]);
    travel+=size(step); maxGrade=Math.max(maxGrade,Math.abs(step[1])/(h||1e-9));
    const tangent=norm([step[0],0,step[2]]);
    if(oldForward && h>1e-5)
     maxTurn=Math.max(maxTurn,Math.acos(Math.max(-1,Math.min(1,product(tangent,oldForward))))*180/Math.PI);
    if(h>1e-5)oldForward=tangent;
   }
   old=center;
  }
 }
 let maxSeam=0;
 const surfaces=new Map(doc.surfaces.map(s=>[s.id,s]));
 for(let i=1;i<(doc.routeSegments??[]).length;i++) {
  const a=doc.routeSegments[i-1],b=doc.routeSegments[i],sa=surfaces.get(a.surface),sb=surfaces.get(b.surface);
  if(!sa||!sb)continue;
  if(a.surface===b.surface && Math.abs(a.u1-b.u0)<1e-9)continue;
  let best=Infinity;
  for(const flipped of [false,true]) {
   let worst=0;
   for(let k=0;k<=8;k++) {
    const v=k/8;
    worst=Math.max(worst,dist(gridSample(sa,a.u1,v),gridSample(sb,b.u0,flipped?1-v:v)));
   }
   best=Math.min(best,worst);
  }
  maxSeam=Math.max(maxSeam,best);
  if(best>.15) failures.push(a.surface+' -> '+b.surface+': seam '+best.toFixed(2)+' m');
 }
 if(badCells)warnings.push(badCells+' near-degenerate control cells; tessellated normals should be tested');
 if(maxGrade>.8)warnings.push('Very steep sections; test airborne physics');
 const sp=doc.spawns?.[0],surface=surfaces.get(sp?.surface);
 const spawnRouteDistance=sp&&surface&&doc.route.length
  ?dist(gridSample(surface,sp.u,sp.v),doc.route[0]):null;
 if(spawnRouteDistance!==null && spawnRouteDistance>20)
  warnings.push('Spawn is far from first route point');
 metrics.minRoadWidthMeters=ride.length?+minWidth.toFixed(2):null;
 metrics.estimatedRoadLengthMeters=+travel.toFixed(1);
 metrics.maxGradeRatio=+maxGrade.toFixed(3);
 metrics.maxTurnDegreesPerSample=+maxTurn.toFixed(2);
 metrics.nearDegenerateCells=badCells;
 metrics.maxDeclaredSeamGapMeters=+maxSeam.toFixed(3);
 metrics.spawnToRouteStartMeters=spawnRouteDistance===null?null:+spawnRouteDistance.toFixed(2);
 return {schema:'dopagaki.stage-forge.geometry-audit/1',status:failures.length?'FAIL':'PASS',
  failures:[...new Set(failures)],warnings,metrics,
  disclaimer:'Static geometry only. Does not verify physics, collision avoidance, manual playability, rendering, or game compatibility.'};
}
if(process.argv[1] && import.meta.url===pathToFileURL(process.argv[1]).href) {
 if(process.argv.length<3) {console.error('Usage: node tools/audit-geometry.mjs <course.json>');process.exit(2);}
 for(const file of process.argv.slice(2))try {
  const result=auditGeometry(JSON.parse(readFileSync(file,'utf8')));
  console.log(JSON.stringify({file,...result}));
  if(result.status!=='PASS')process.exitCode=1;
 }catch(error){console.error(file,error.message);process.exitCode=1;}
}