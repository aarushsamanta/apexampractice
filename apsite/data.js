const COURSES=[{id:'apphys1',title:'AP Physics 1',sub:'Algebra-based mechanics',units:[
{id:1,title:'Kinematics',lessons:[
{id:'1.1',title:'Describing motion',demo:null,
body:`<p><b>Vectors</b> have magnitude and direction (displacement, velocity, acceleration). <b>Scalars</b> have magnitude only (distance, speed, time).</p>
<p>For constant acceleration use the four kinematics equations:</p>
<div class="eq">v = v₀ + at<br>Δx = v₀t + ½at²<br>v² = v₀² + 2aΔx<br>Δx = ½(v₀+v)t</div>
<p><b>Stumbling block:</b> they only work when acceleration is constant, and signs matter. Pick a positive direction first and stay consistent.</p>
<p>Graph rules: slope of x–t is velocity. Slope of v–t is acceleration. Area under v–t is displacement.</p>`,
practice:{q:'A car goes from rest to 20 m/s in 5 s at constant acceleration. How far does it travel?',o:['40 m','50 m','100 m','20 m'],a:1,w:'Δx = ½(v₀+v)t = ½(0+20)(5) = 50 m. It is also the area of the triangle under the v–t graph.'},
check:[{q:'What does the slope of a velocity–time graph represent?',o:['Displacement','Acceleration','Speed','Jerk'],a:1,w:'Slope = Δv/Δt = acceleration.'},
{q:'Which is a scalar?',o:['Velocity','Displacement','Speed','Acceleration'],a:2,w:'Speed has no direction.'},
{q:'An object at constant velocity has acceleration…',o:['Equal to its velocity','Zero','Constant and nonzero','Increasing'],a:1,w:'Constant velocity means Δv = 0.'}]},
{id:'1.2',title:'Projectile motion',demo:'projectile',
body:`<p>Treat x and y <b>independently</b>. Horizontally: no acceleration (ignoring air), so vₓ is constant. Vertically: a = −g = −9.8 m/s².</p>
<p>The two dimensions are linked only by time. At the top of the flight, v<sub>y</sub> = 0 but vₓ is not, and acceleration is still g, downward.</p>
<p>Try the launcher, then answer the practice question.</p>`,
practice:{q:'A ball is launched at 30° above horizontal on level ground. At which other angle (same speed) is the range the same?',o:['45°','60°','15°','75°'],a:1,w:'Range ∝ sin2θ, and sin60° = sin120°, so complementary angles (θ and 90°−θ) give equal range.'},
check:[{q:'At the peak of a projectile\'s path, its acceleration is…',o:['Zero','g downward','g upward','Horizontal'],a:1,w:'Gravity acts the whole flight.'},
{q:'Two balls: one dropped, one thrown horizontally from the same height. Which lands first?',o:['Dropped','Thrown','Same time','Depends on speed'],a:2,w:'Vertical motion is identical.'}]}],
test:[{q:'An object is thrown straight up at 14.7 m/s. How long until it returns to its start? (g = 9.8)',o:['1.5 s','3 s','4.5 s','6 s'],a:1,w:'t = 2v₀/g = 2(14.7)/9.8 = 3 s.'},
{q:'A v–t graph is a horizontal line above the axis. The object has…',o:['Constant positive velocity','Constant acceleration','Zero velocity','Increasing speed'],a:0,w:'Flat v–t means constant v, zero a.'},
{q:'Doubling the launch speed (same angle, level ground) changes range by a factor of…',o:['2','√2','4','8'],a:2,w:'Range ∝ v₀².'},
{q:'A car brakes uniformly from 30 m/s to rest in 90 m. Its acceleration magnitude is…',o:['2.5 m/s²','5 m/s²','10 m/s²','0.33 m/s²'],a:1,w:'a = v²/2Δx = 900/180 = 5.'}]},
{id:2,title:'Force & Translational Dynamics',lessons:[
{id:'2.1',title:'Newton\'s Second Law',demo:'newton',
body:`<p><b>ΣF = ma.</b> Net force, not any single force, determines acceleration. Draw a free-body diagram, choose axes, sum forces along each, then solve.</p>
<p>Newton's 1st: zero net force means constant velocity (including at rest). Newton's 3rd: forces come in pairs acting on <i>different</i> objects, equal in size, opposite in direction.</p>
<p>Weight is F<sub>g</sub> = mg. Friction: kinetic f = μ<sub>k</sub>F<sub>N</sub>; static f ≤ μ<sub>s</sub>F<sub>N</sub>.</p>`,
practice:{q:'A 4 kg block is pushed by 20 N with 8 N of friction opposing. What is its acceleration?',o:['3 m/s²','5 m/s²','7 m/s²','2 m/s²'],a:0,w:'ΣF = 20 − 8 = 12 N; a = 12/4 = 3 m/s².'},
check:[{q:'A book rests on a table. The reaction to its weight (3rd law) is…',o:['The normal force','The book pulling up on Earth','Friction','Nothing'],a:1,w:'Third-law pairs involve the same two objects: Earth pulls book, book pulls Earth.'},
{q:'Mass is tripled with the same net force. Acceleration becomes…',o:['3×','1/3','9×','Unchanged'],a:1,w:'a = F/m.'}]}],
test:[{q:'An elevator accelerates upward. The normal force on a rider is…',o:['Less than mg','Equal to mg','Greater than mg','Zero'],a:2,w:'N − mg = ma with a upward, so N > mg.'},
{q:'Two blocks touch; a push moves both. The contact forces between them are…',o:['Equal and opposite','Zero','Larger on the heavier','Same direction'],a:0,w:'Newton\'s 3rd law.'}]},
{id:3,title:'Circular Motion & Gravitation',soon:1},{id:4,title:'Energy',soon:1},{id:5,title:'Momentum',soon:1},{id:6,title:'Simple Harmonic Motion',soon:1},{id:7,title:'Torque & Rotational Motion',soon:1}]}];
