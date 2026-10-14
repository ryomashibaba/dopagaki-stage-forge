/**
 * Optional adapter for LOCAL verification using the owner's own unmodified B3.8 director runtime.
 * The engine files are intentionally not vendored or downloaded by this repository.
 * This uses route assist plus simple nearest-guide steering; it does not prove human playability.
 */
import {readFileSync} from 'node:fs';
import {resolve,join} from 'node:path';
import {pathToFileURL} from 'node:url';
const args=process.argv.slice(2),idx=args.indexOf('--runtime');
if(idx<0 || !args[idx+1]) {
 console.error('Usage: node tools/verify-with-b38.mjs --runtime <B3.8/director-folder> <course.json>...');
 process.exit(2);
}
const root=resolve(args[idx+1]);args.splice(idx,2);
if(!args.length){console.error('Supply course JSON files');process.exit(2);}
const imp=async name=>import(pathToFileURL(join(root,name)).href);
const {validate}=await imp('surface.js');
const {compile}=await imp('collision.js');
const {Runner,routeFrame}=await imp('physics.js');
const sub=(a,b)=>a.map((v,i)=>v-b[i]);
const dot=(a,b)=>a.reduce((v,x,i)=>v+x*b[i],0);
const cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
const unit=a=>a.map(v=>v/(Math.hypot(...a)||1));
const clamp=x=>Math.max(-1,Math.min(x,1));
for(const filename of args) {
 const doc=JSON.parse(readFileSync(filename,'utf8'));validate(doc);
 const world=compile(doc);const runs=[];
 for(const speed of [28,36,48,64,80,96]){
  const r=new Runner(doc,world,0,speed);
  for(let i=0;i<37*240&&!['failed','finished'].includes(r.status);i++){
   const guide=routeFrame(doc.route,r.p),right=unit(cross(r.forward,r.normal));
   const input=clamp(dot(sub(guide.point,r.p),right)*.45-dot(r.v,right)*.10);
   r.step(input);
  }
  runs.push({initialSpeed:speed,status:r.status,timeSeconds:+r.time.toFixed(3),failure:r.failure?.reason??null});
 }
 console.log(JSON.stringify({filename,meshDegenerate:world.invalid,
  completionCount:runs.filter(x=>x.status==='finished').length,runs,
  limitations:'Local B3.8 assisted autopilot only; not Windows manual playtest or live-game compatibility'},null,2));
 if(world.invalid||runs.some(x=>x.status!=='finished'))process.exitCode=1;
}
