const sh=(x,on)=>{x.shadowColor=on?'#0005':'transparent';x.shadowBlur=on?12:0;x.shadowOffsetY=on?4:0};
const txt=(x,s,a,b,c)=>{x.fillStyle=c;x.font='600 13px Inter';x.fillText(s,a,b)};
Object.assign(DEMOS,{
forces(el){lab(el,[['F','Push force (N)',0,80,30],['m','Mass (kg)',1,10,5],['u','Friction coefficient μ',0,.8,.4,.05]],(x,p,t,T,C)=>{const N=p.m*10,fm=p.u*N,mv=p.F>fm,f=mv?fm:p.F,a=mv?(p.F-fm)/p.m:0,px=Math.min(60+.5*a*t*t*5,520),w=30+p.m*5,cy=190-w/2,cx=px+w/2;
x.fillStyle=C.line;x.fillRect(0,190,640,40);x.fillStyle=C.mute;for(let i=0;i<20;i++)x.fillRect(((i*40-(mv?px:0)*.6)%640+640)%640,196,16,3);
sh(x,1);x.fillStyle=C.ink;x.fillRect(px,190-w,w,w);sh(x,0);
ar(x,cx,cy,cx,cy+N*.9,C.mute);txt(x,'Fg',cx+6,cy+N*.9,C.mute);ar(x,cx,cy,cx,cy-N*.9,C.ok);txt(x,'N',cx+6,cy-N*.9+14,C.ok);
if(p.F)ar(x,px+w,cy,px+w+p.F*2.2,cy,C.acc);if(f)ar(x,px,cy+18,px-f*2.2,cy+18,'#b42318');
return `${mv?'KINETIC':'STATIC'} friction = ${f.toFixed(0)} N (max static ${fm.toFixed(0)} N) · ΣF = ${(p.F-f).toFixed(0)} N → a = ${a.toFixed(1)} m/s²`},{T:3,H:230})},
incline(el){lab(el,[['t','Ramp angle (°)',0,60,30],['u','Friction coefficient μ',0,.8,.2,.05]],(x,p,t)=>{const r=p.t*Math.PI/180,a=Math.max(0,10*(Math.sin(r)-p.u*Math.cos(r))),L=420,ox=60,oy=250,s=Math.min(.5*a*t*t*14,L-70);
x.save();x.translate(ox,oy);x.fillStyle='#8884';x.beginPath();x.moveTo(0,0);x.lineTo(L*Math.cos(r)+10,0);x.lineTo(0,-L*Math.sin(r)-10);x.fill();x.restore();
const bx=ox+(L-s-40)*Math.cos(r),by=oy-(L-s-40)*Math.sin(r);x.save();x.translate(bx,by);x.rotate(-r);sh(x,1);x.fillStyle=getComputedStyle(document.body).getPropertyValue('--ink');x.fillRect(-20,-34,40,34);sh(x,0);x.restore();
const c=[bx-Math.sin(r)*17,by-Math.cos(r)*17],d=(ang,l,col)=>ar(x,c[0],c[1],c[0]+l*Math.cos(ang),c[1]+l*Math.sin(ang),col);
d(Math.PI/2,70,'#888');d(Math.PI/2+r,70*Math.cos(r),'#2f7d4f');d(Math.PI-r,70*Math.sin(r)+1,'#e08a00');if(a>0||p.t>0)d(-r,Math.min(70*Math.sin(r),p.u*70*Math.cos(r))+1,'#b42318');
return `gray: weight · green: mg cosθ (into ramp, balanced by N) · gold: mg sinθ (down ramp) · red: friction. a = g(sinθ − μcosθ) = ${a.toFixed(2)} m/s² ${a?'':'· STUCK (μ ≥ tanθ)'}`},{T:3,H:290})},
atwood(el){lab(el,[['a','Left mass (kg)',1,10,2],['b','Right mass (kg)',1,10,3]],(x,p,t)=>{const a=(p.b-p.a)*10/(p.a+p.b),Tn=2*p.a*p.b*10/(p.a+p.b),d=Math.max(-90,Math.min(90,.5*a*t*t*10)),ink=getComputedStyle(document.body).getPropertyValue('--ink');
x.strokeStyle=ink;x.lineWidth=3;x.beginPath();x.arc(320,60,26,0,7);x.stroke();const yl=190-d,yr=190+d,wl=24+p.a*3,wr=24+p.b*3;x.beginPath();x.moveTo(294,60);x.lineTo(294,yl);x.moveTo(346,60);x.lineTo(346,yr);x.stroke();
sh(x,1);x.fillStyle=ink;x.fillRect(294-wl/2,yl,wl,wl);x.fillStyle='#c2410c';x.fillRect(346-wr/2,yr,wr,wr);sh(x,0);
return `a = (m₂−m₁)g/(m₁+m₂) = ${a.toFixed(2)} m/s² (right mass ${a>0?'falls':a<0?'rises':'balanced'}) · tension = ${Tn.toFixed(1)} N — less than the heavier weight, more than the lighter`},{T:2.5,H:300})},
circle(el,cut){lab(el,[['r','Radius (m)',1,10,6],['v','Speed (m/s)',1,15,8]].concat(cut?[['c','Cut the string at 2 s? (0 no, 1 yes)',0,1,0]]:[]),(x,p,t)=>{const k=17,R=p.r*k,w=p.v/p.r,cx=320,cy=190,P=q=>[cx+R*Math.cos(w*q),cy-R*Math.sin(w*q)],V=q=>[-Math.sin(w*q),-Math.cos(w*q)],cutOn=p.c&&t>2;
x.strokeStyle='#8886';x.lineWidth=1.5;x.setLineDash([5,5]);x.beginPath();x.arc(cx,cy,R,0,7);x.stroke();x.setLineDash([]);dot(x,cx,cy,5,'#888');
let b=P(t),u=V(t);if(cutOn){const b2=P(2),u2=V(2);b=[b2[0]+u2[0]*p.v*k*(t-2),b2[1]+u2[1]*p.v*k*(t-2)];u=u2}
else{x.strokeStyle='#888';x.beginPath();x.moveTo(cx,cy);x.lineTo(...b);x.stroke()}
dot(x,...b,11,'#c2410c');ar(x,b[0],b[1],b[0]+u[0]*p.v*6,b[1]+u[1]*p.v*6,'#1c1917');
if(!cutOn){const a=p.v*p.v/p.r,L=Math.min(a*2.2,110),n=[(cx-b[0])/R,(cy-b[1])/R];ar(x,b[0],b[1],b[0]+n[0]*L,b[1]+n[1]*L,'#2f7d4f')}
return `a = v²/r = ${(p.v*p.v/p.r).toFixed(1)} m/s² · period = 2πr/v = ${(6.283*p.r/p.v).toFixed(1)} s · black: velocity (tangent) · green: acceleration (toward center)${cutOn?' · CUT: no net force → straight line':''}`},{T:6,H:380})},
grav(el){lab(el,[['r','Distance from Earth\'s center (Earth radii)',1,6,2,.25]],(x,p,t)=>{const R=p.r*30,w=2/Math.pow(p.r,1.5),cx=320,cy=190;x.strokeStyle='#8886';x.setLineDash([5,5]);x.beginPath();x.arc(cx,cy,R,0,7);x.stroke();x.setLineDash([]);
const g=x.createRadialGradient(cx-8,cy-8,3,cx,cy,28);g.addColorStop(0,'#5fa8d3');g.addColorStop(1,'#1d4e89');x.fillStyle=g;x.beginPath();x.arc(cx,cy,28,0,7);x.fill();
const b=[cx+R*Math.cos(w*t*3),cy-R*Math.sin(w*t*3)];sh(x,1);dot(x,...b,8,'#c2410c');sh(x,0);const f=Math.min(110/(p.r*p.r),110),n=[(cx-b[0])/R,(cy-b[1])/R];ar(x,b[0],b[1],b[0]+n[0]*f,b[1]+n[1]*f,'#2f7d4f');
return `F ∝ 1/r²: ${(1/p.r**2).toFixed(2)}× its surface value · g = ${(10/p.r**2).toFixed(2)} m/s² · orbital speed ∝ 1/√r ≈ ${(7.9/Math.sqrt(p.r)).toFixed(1)} km/s (closer = faster)`},{T:8,H:380})}});
DEMOS.circlecut=e=>DEMOS.circle(e,1);
