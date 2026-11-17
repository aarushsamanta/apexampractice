const DEMOS={
projectile(el){el.innerHTML=`<canvas width=600 height=220></canvas><label>Speed <b id=sv>20</b> m/s<input id=s type=range min=5 max=40 value=20></label><label>Angle <b id=av>45</b>°<input id=a type=range min=5 max=85 value=45></label><p class=out id=o></p>`;
const c=el.querySelector('canvas'),x=c.getContext('2d'),S=el.querySelector('#s'),A=el.querySelector('#a');
const draw=()=>{const v=+S.value,t=+A.value*Math.PI/180,g=9.8,T=2*v*Math.sin(t)/g,R=v*v*Math.sin(2*t)/g,H=(v*Math.sin(t))**2/2/g;
el.querySelector('#sv').textContent=v;el.querySelector('#av').textContent=A.value;
el.querySelector('#o').textContent=`Time ${T.toFixed(2)} s · Range ${R.toFixed(1)} m · Max height ${H.toFixed(1)} m`;
x.clearRect(0,0,600,220);const k=Math.min(540/Math.max(R,1),170/Math.max(H,1));x.strokeStyle='#c2410c';x.lineWidth=3;x.beginPath();
for(let i=0;i<=60;i++){const tt=T*i/60,px=30+v*Math.cos(t)*tt*k,py=200-(v*Math.sin(t)*tt-g*tt*tt/2)*k;i?x.lineTo(px,py):x.moveTo(px,py)}x.stroke();
x.strokeStyle='#888';x.beginPath();x.moveTo(0,200);x.lineTo(600,200);x.stroke()};
S.oninput=A.oninput=draw;draw()},
newton(el){el.innerHTML=`<canvas width=600 height=120></canvas><label>Net force <b id=fv>10</b> N<input id=f type=range min=0 max=40 value=10></label><label>Mass <b id=mv>2</b> kg<input id=m type=range min=1 max=10 value=2></label><p class=out id=o></p>`;
const c=el.querySelector('canvas'),x=c.getContext('2d'),F=el.querySelector('#f'),M=el.querySelector('#m');let p=0,v=0,id;
const upd=()=>{el.querySelector('#fv').textContent=F.value;el.querySelector('#mv').textContent=M.value;el.querySelector('#o').textContent=`a = F/m = ${(F.value/M.value).toFixed(2)} m/s²`;p=0;v=0};
F.oninput=M.oninput=upd;upd();
(function loop(){if(!el.isConnected)return;const a=F.value/M.value;v+=a*.016;p+=v*.016*20;if(p>520){p=0;v=0}
x.clearRect(0,0,600,120);x.fillStyle='#1c1917';const w=20+M.value*5;x.fillRect(20+p,100-w,w,w);x.fillRect(0,100,600,2);requestAnimationFrame(loop)})()}};
function ar(x,a,b,c,d,col){x.strokeStyle=x.fillStyle=col;x.lineWidth=2.5;x.beginPath();x.moveTo(a,b);x.lineTo(c,d);x.stroke();const g=Math.atan2(d-b,c-a);x.beginPath();x.moveTo(c,d);x.lineTo(c-9*Math.cos(g-.4),d-9*Math.sin(g-.4));x.lineTo(c-9*Math.cos(g+.4),d-9*Math.sin(g+.4));x.fill()}
function lab(el,sl,fn,o={}){const H=o.H||240;el.innerHTML=`<canvas width=640 height=${H}></canvas>`+sl.map(s=>`<label>${s[1]} <b></b><input type=range min=${s[2]} max=${s[3]} value=${s[4]} step=${s[5]||1} data-k=${s[0]}></label>`).join('')+`<p class=out></p><button class=sm onclick="this.r()">↻ Replay</button>`;
const x=el.querySelector('canvas').getContext('2d'),ins=[...el.querySelectorAll('input')],css=n=>getComputedStyle(document.body).getPropertyValue(n);let t0=performance.now();
const rs=()=>t0=performance.now();el.querySelector('.sm').r=rs;ins.forEach(i=>i.oninput=rs);
(function L(){if(!el.isConnected)return;const p={};ins.forEach(i=>{p[i.dataset.k]=+i.value;i.previousElementSibling.textContent=i.value});
const T=typeof o.T=='function'?o.T(p):(o.T||5),e=(performance.now()-t0)/1000,t=Math.min(e,T);if(e>T+1.2)rs();
x.clearRect(0,0,640,H);const C={ink:css('--ink'),acc:css('--acc'),mute:css('--mute'),ok:css('--ok'),line:css('--line')};
el.querySelector('.out').textContent=fn(x,p,t,T,C)||'';requestAnimationFrame(L)})()}
const dot=(x,a,b,r,c)=>{x.fillStyle=c;x.beginPath();x.arc(a,b,r,0,7);x.fill()};
function mot(el,g){lab(el,[['v','Initial velocity (m/s)',-10,10,6],['a','Acceleration (m/s²)',-5,5,-2]],(x,p,t,T,C)=>{
const X=s=>p.v*s+.5*p.a*s*s,V=s=>p.v+p.a*s,k=2,B=g?100:190;x.strokeStyle=C.mute;x.lineWidth=1;x.beginPath();x.moveTo(0,B);x.lineTo(640,B);x.stroke();
for(let s=0;s<=t;s+=.5)dot(x,320+X(s)*k,B+8,3,C.mute);
const px=320+X(t)*k,v=V(t);x.fillStyle=C.ink;x.fillRect(px-14,B-22,28,22);ar(x,px,B-34,px+v*8,B-34,C.acc);ar(x,px,B-52,px+p.a*8,B-52,C.ok);
if(g)[[X,'x (m)'],[V,'v (m/s)',],[()=>p.a,'a (m/s²)']].forEach(([f,n],i)=>{const x0=20+i*210,w=190,cy=240,h=170;let m=1;for(let s=0;s<=T;s+=.1)m=Math.max(m,Math.abs(f(s)));
x.strokeStyle=C.line;x.strokeRect(x0,cy-h/2,w,h);x.strokeStyle=C.mute;x.beginPath();x.moveTo(x0,cy);x.lineTo(x0+w,cy);x.stroke();x.fillStyle=C.mute;x.font='12px Inter';x.fillText(n+' vs t',x0+6,cy-h/2+14);
x.strokeStyle=C.acc;x.lineWidth=2.5;x.beginPath();for(let s=0;s<=t+.001;s+=.05){const q=x0+s/T*w,r=cy-f(s)/m*(h/2-8);s?x.lineTo(q,r):x.moveTo(q,r)}x.stroke();dot(x,x0+t/T*w,cy-f(t)/m*(h/2-8),4,C.ink)});
return `t = ${t.toFixed(1)} s · v = ${v.toFixed(1)} m/s (orange arrow) · a = ${p.a} (green arrow) → ${Math.abs(v)<.1?'momentarily at rest':v*p.a>0?'SPEEDING UP':'SLOWING DOWN'}`},{H:g?340:230})}
Object.assign(DEMOS,{motion:e=>mot(e,0),graphs:e=>mot(e,1),
walk(el){const P=[[60,190],[280,190],[280,58],[170,58]];lab(el,[],(x,p,t,T,C)=>{const L=[];let tot=0;for(let i=0;i<3;i++){L.push(Math.hypot(P[i+1][0]-P[i][0],P[i+1][1]-P[i][1]));tot+=L[i]}
let d=t/T*tot,pos=P[0],dist=0;x.strokeStyle=C.mute;x.setLineDash([4,4]);x.beginPath();P.forEach((q,i)=>i?x.lineTo(...q):x.moveTo(...q));x.stroke();x.setLineDash([]);x.strokeStyle=C.ink;x.lineWidth=3;x.beginPath();x.moveTo(...P[0]);
for(let i=0;i<3;i++){const u=Math.min(d,L[i])/L[i];pos=[P[i][0]+(P[i+1][0]-P[i][0])*u,P[i][1]+(P[i+1][1]-P[i][1])*u];x.lineTo(...pos);dist+=Math.min(d,L[i]);d-=L[i];if(d<=0)break}x.stroke();
dot(x,...P[0],5,C.mute);ar(x,P[0][0],P[0][1]+14,pos[0],pos[1]+14,C.acc);dot(x,...pos,7,C.ink);
return `Distance walked (black path) = ${(dist/22).toFixed(1)} m · Displacement (orange arrow) = ${(Math.hypot(pos[0]-60,pos[1]-190)/22).toFixed(1)} m`},{T:6})},
drop(el){lab(el,[['h','Drop height (m)',5,80,20]],(x,p,t,T,C)=>{const k=2.6;x.fillStyle=C.mute;x.fillRect(0,226,640,3);for(let s=0;s<=t;s+=.5)dot(x,320,224-(p.h-5*s*s)*k,4,C.line);
const y=p.h-5*t*t;dot(x,320,224-y*k-8,9,C.acc);const v=-10*t;ar(x,360,224-y*k-8,360,224-y*k-8-v*1.2,C.ink);
return `t = ${t.toFixed(2)} s · v = ${v.toFixed(1)} m/s (negative: down) · fell ${(5*t*t).toFixed(1)} m · lands at ${(-Math.sqrt(20*p.h)).toFixed(1)} m/s after ${Math.sqrt(p.h/5).toFixed(2)} s`},{T:p=>Math.sqrt(p.h/5)})},
comp(el){lab(el,[['m','Magnitude',5,50,30],['t','Angle above +x (°)',0,90,37]],(x,p)=>{const o=[80,200],r=p.t*Math.PI/180,vx=p.m*Math.cos(r),vy=p.m*Math.sin(r),s=4.5;
x.strokeStyle='#8884';x.beginPath();x.moveTo(0,200);x.lineTo(640,200);x.stroke();ar(x,...o,o[0]+vx*s,o[1],'#2f7d4f');ar(x,o[0]+vx*s,o[1],o[0]+vx*s,o[1]-vy*s,'#e08a00');ar(x,...o,o[0]+vx*s,o[1]-vy*s,'#c2410c');
return `vₓ = ${p.m}·cos(${p.t}°) = ${vx.toFixed(1)} (green) · vᵧ = ${p.m}·sin(${p.t}°) = ${vy.toFixed(1)} (gold) — try 0°, 45°, 90°`},{T:.01})},
proj(el){lab(el,[['v','Launch speed (m/s)',10,40,25],['a','Launch angle (°)',10,80,45]],(x,p,t,T,C)=>{const r=p.a*Math.PI/180,vx=p.v*Math.cos(r),vy0=p.v*Math.sin(r),k=3.4,ox=30,gy=300,R=vx*2*vy0/10;
x.fillStyle=C.mute;x.fillRect(0,gy,640,3);x.fillStyle=C.ok;x.fillRect(ox+57*k,gy-6,6*k,6);x.fillStyle=C.mute;x.font='12px Inter';x.fillText('target: 60 m',ox+50*k,gy+16);
for(let s=0;s<=t;s+=.25)dot(x,ox+vx*s*k,gy-(vy0*s-5*s*s)*k,3,C.line);
const bx=ox+vx*t*k,by=gy-(vy0*t-5*t*t)*k,vy=vy0-10*t;dot(x,bx,by,8,C.acc);ar(x,bx,by,bx+vx*3,by,C.ok);ar(x,bx,by,bx,by-vy*3,'#e08a00');
return `vₓ = ${vx.toFixed(1)} (never changes) · vᵧ = ${vy.toFixed(1)} · range = ${R.toFixed(1)} m ${Math.abs(R-60)<3?'· 🎯 TARGET HIT!':'· aim for 60 m'}`},{H:320,T:p=>2*p.v*Math.sin(p.a*Math.PI/180)/10})},
frames(el){lab(el,[['a','Car A speed (m/s)',0,20,12],['b','Car B speed (m/s)',0,20,7],['f','Observer: 0 = on the ground, 1 = riding in car B',0,1,0]],(x,p,t,T,C)=>{const s=p.f?p.b*t:0,k=4;x.fillStyle=C.mute;x.fillRect(0,175,640,2);
for(let m=-20;m<=200;m+=10){const q=40+(m-s)*k;x.fillRect(q,172,2,8)}x.fillStyle=C.acc;x.fillRect(40+(p.a*t-s)*k,100,40,22);x.fillStyle=C.ink;x.fillRect(40+(p.b*t-s)*k,140,40,22);x.fillStyle=C.mute;x.font='12px Inter';x.fillText('A',40+(p.a*t-s)*k+16,96);x.fillText('B',40+(p.b*t-s)*k+16,136);
const f=p.f?p.b:0;return `This observer measures car A at ${p.a-f} m/s and car B at ${p.b-f} m/s (east is +). v(A rel. B) = vA − vB`},{T:6})}});
