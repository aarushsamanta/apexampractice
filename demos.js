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
