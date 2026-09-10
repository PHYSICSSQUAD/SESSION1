/* =========================================================
   APP STATE
========================================================= */
let current = 0;
let sim = {}; // transient per-slide interactive state, reset on render

const root = document.getElementById('slideContent');
const progressFill = document.getElementById('progressFill');
const slideCount = document.getElementById('slideCount');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

/* =========================================================
   BACKGROUND — animated circuit / node canvas
========================================================= */
(function bg(){
  const canvas = document.getElementById('bgCanvas');
  const ctx = canvas.getContext('2d');
  let w,h,nodes=[];
  function resize(){
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    const count = Math.max(24, Math.floor((w*h)/55000));
    nodes = Array.from({length:count}, ()=>({
      x:Math.random()*w, y:Math.random()*h,
      vx:(Math.random()-0.5)*0.18, vy:(Math.random()-0.5)*0.18,
      r:Math.random()*1.6+0.6
    }));
  }
  window.addEventListener('resize', resize);
  resize();
  function tick(){
    ctx.clearRect(0,0,w,h);
    for(const n of nodes){
      n.x+=n.vx; n.y+=n.vy;
      if(n.x<0||n.x>w) n.vx*=-1;
      if(n.y<0||n.y>h) n.vy*=-1;
    }
    for(let i=0;i<nodes.length;i++){
      for(let j=i+1;j<nodes.length;j++){
        const a=nodes[i], b=nodes[j];
        const dx=a.x-b.x, dy=a.y-b.y, d=Math.sqrt(dx*dx+dy*dy);
        if(d<130){
          ctx.strokeStyle = `rgba(59,130,246,${0.11*(1-d/130)})`;
          ctx.lineWidth=1;
          ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
        }
      }
    }
    for(const n of nodes){
      ctx.fillStyle='rgba(96,165,250,0.55)';
      ctx.beginPath(); ctx.arc(n.x,n.y,n.r,0,Math.PI*2); ctx.fill();
    }
    requestAnimationFrame(tick);
  }
  tick();
})();

/* =========================================================
   RENDER
========================================================= */
function render(idx){
  current = Math.max(0, Math.min(SLIDES.length-1, idx));
  sim = {};
  const s = SLIDES[current];
  root.scrollTop = 0;
  root.innerHTML = RENDERERS[s.type](s);
  prevBtn.disabled = current===0;
  nextBtn.disabled = current===SLIDES.length-1;
  progressFill.style.width = ((current+1)/SLIDES.length*100)+'%';
  slideCount.textContent = `${current+1} / ${SLIDES.length}`;
  document.querySelectorAll('.toc-item[data-idx]').forEach(el=>{
    el.classList.toggle('active', Number(el.dataset.idx)===current);
  });
  postRender(s);
  history.replaceState(null,'','#'+current);
}
function go(delta){ render(current+delta); }

/* =========================================================
   RENDERERS
========================================================= */
const RENDERERS = {

  cover(){
    return `<div class="cover">
      <div class="cover-logo"><span>${CONFIG.logoText}</span></div>
      <h1>Information Technology <span class="grad">& Society</span></h1>
      <p class="sub">An interactive lesson deck — presented by <b style="color:var(--ink)">${CONFIG.teacherName}</b></p>
      <div class="contact-row">
        <a class="contact-btn" href="${CONFIG.whatsapp}" target="_blank" rel="noopener" style="color:#34d399">${ICO.whatsapp}<span class="label">WhatsApp</span></a>
        <a class="contact-btn" href="${CONFIG.linkedin}" target="_blank" rel="noopener" style="color:#60a5fa">${ICO.linkedin}<span class="label">LinkedIn</span></a>
        <a class="contact-btn" href="${CONFIG.phone}" style="color:#22d3ee">${ICO.phone}<span class="label">Call</span></a>
      </div>
      <div class="cover-hint">${ICO.arrowR} Press the arrow, or → key, to begin</div>
    </div>`;
  },

  chapterMenu(){
    const lessons = [
      {n:'1-1', name:'Development of Information Technology and Social Transformation', color:'blue', active:true},
      {n:'1-2', name:'How AI Works', color:'blue', active:true},
      {n:'1-3', name:'AI in Daily Life and Industry', color:'violet', active:false},
      {n:'1-4', name:'Ethical Issues with AI', color:'violet', active:false}
    ];
    return `<div class="chapter-menu">
      <div class="chapter-eyebrow">Chapter 1</div>
      <h1>Information Technology and Society</h1>
      <div class="lesson-grid">
        ${lessons.map(l=>`
          <div class="lesson-card ${l.color}" ${l.active?`data-action="jump-lesson" data-lesson="${l.n}"`:''}>
            <div class="glow"></div>
            <div class="num">${l.n}</div>
            <div class="lname">${l.name}</div>
            <div class="status">${l.active? ICO.check + ' Ready — click to open' : '— coming soon'}</div>
          </div>`).join('')}
      </div>
    </div>`;
  },

  lessonCover(s){
    return `<div class="cover">
      <div class="eyebrow"><span class="bar"></span>${s.code}</div>
      <h1 style="max-width:820px">${s.title}</h1>
      <div class="panel" style="text-align:left; max-width:560px; margin-top:18px;">
        <div class="panel-title">Learning Objectives</div>
        ${obj(s.objectives)}
      </div>
      <div class="cover-hint">${ICO.arrowR} Continue</div>
    </div>`;
  },

  content(s){
    return `<div class="slide">
      ${crumbHead(s)}
      <h1 class="slide-title">${s.title}</h1>
      ${s.side ? `<div class="two-col"><div class="body-text">${s.body}</div><div>${s.side}</div></div>`
                : `<div class="body-text">${s.body}</div>`}
    </div>`;
  },

  timeline(s){
    return `<div class="slide">
      ${crumbHead(s)}
      <h1 class="slide-title">${s.title}</h1>
      <p class="lede">${s.intro}</p>
      <div class="timeline">
        ${s.stages.map((st,i)=>`
          <div class="tstage" data-action="timeline-toggle" data-i="${i}">
            <div class="thead">
              <div class="period">${st.period}</div>
              <div class="tech">${st.tech}</div>
              <div class="chevron">${ICO.chevron}</div>
            </div>
            <div class="tbody"><div class="tbody-inner">${st.impact}</div></div>
          </div>`).join('')}
      </div>
    </div>`;
  },

  flipcards(s){
    return `<div class="slide">
      ${crumbHead(s)}
      <h1 class="slide-title">${s.title}</h1>
      <p class="lede">${s.intro}</p>
      <div class="flip-grid">
        ${s.cards.map((c,i)=>`
          <div class="flip-card" data-action="flip-card" data-i="${i}">
            <div class="flip-inner">
              <div class="flip-face flip-front">${c.icon}<div class="fname">${c.name}</div></div>
              <div class="flip-face flip-back"><div class="fdef">${c.def}</div><div class="fex">${c.ex}</div></div>
            </div>
          </div>`).join('')}
      </div>
    </div>`;
  },

  mooreChart(s){
    return `<div class="slide">
      ${crumbHead(s)}
      <h1 class="slide-title">${s.title}</h1>
      ${s.intro}
      <div class="sim-panel moore-wrap">
        <div class="sim-toggle-row">
          <button class="sim-btn active" data-action="moore-toggle" data-mode="points">Show data points</button>
          <button class="sim-btn" data-action="moore-toggle" data-mode="trend">Show doubling trend</button>
        </div>
        <div class="moore-canvas-box"><canvas id="mooreCanvas"></canvas></div>
        <div class="sim-readout" id="mooreReadout">Transistor count per chip, 1971–2022 (log scale).</div>
      </div>
    </div>`;
  },

  edgeSim(s){
    return `<div class="slide">
      ${crumbHead(s)}
      <h1 class="slide-title">${s.title}</h1>
      ${s.intro}
      <div class="sim-panel">
        <div class="sim-toggle-row">
          <button class="sim-btn active" data-action="edge-mode" data-mode="edge">⚡ Edge computing (on‑board)</button>
          <button class="sim-btn" data-action="edge-mode" data-mode="cloud">☁️ Send to cloud first</button>
        </div>
        <div class="sim-stage" id="edgeStage">
          <div class="latency-badge" id="latencyBadge">sending to cloud…</div>
          <div class="cloud-icon" id="edgeCloudIcon">☁️</div>
          <div class="pedestrian">🚶</div>
          <div class="road"></div>
          <div class="car" id="edgeCar">🚗</div>
        </div>
        <div class="sim-readout" id="edgeReadout">Press "Run" to see how each mode reacts to the pedestrian ahead.</div>
        <div style="text-align:center; margin-top:12px;"><button class="reveal-btn" data-action="edge-run">Run simulation</button></div>
      </div>
    </div>`;
  },

  arvr(s){
    return `<div class="slide">
      ${crumbHead(s)}
      <h1 class="slide-title">${s.title}</h1>
      <p class="lede">${s.intro}</p>
      <div class="sim-panel">
        <div class="sim-toggle-row">
          <button class="sim-btn active" data-action="arvr-mode" data-mode="ar">Augmented Reality (AR)</button>
          <button class="sim-btn" data-action="arvr-mode" data-mode="vr">Virtual Reality (VR)</button>
        </div>
        <div class="sim-stage">
          <div class="arvr-frame ar" id="arvrFrame">
            <div class="icon" style="top:14px;left:16px;">📍</div>
            <div class="icon" style="top:60px;right:20px;" >💬</div>
            <div class="icon" style="bottom:16px;left:60px;">🧭</div>
          </div>
        </div>
        <div class="sim-readout" id="arvrReadout"><b>AR</b> overlays digital information (pins, labels, chat bubbles) on top of the real, camera-seen world.</div>
      </div>
    </div>`;
  },

  quantum(s){
    return `<div class="slide">
      ${crumbHead(s)}
      <h1 class="slide-title">${s.title}</h1>
      ${s.intro}
      <div class="sim-panel">
        <div class="qbit-stage">
          <div style="text-align:center;">
            <div class="classical-switch" id="classicalSwitch" data-action="classical-toggle"><div class="knob">0</div></div>
            <div style="font-size:11.5px;color:var(--muted);margin-top:10px;">Classical bit — one state at a time</div>
          </div>
          <div style="text-align:center;">
            <div class="qubit-sphere"><div class="orbit"><div class="dot"></div></div></div>
            <div style="font-size:11.5px;color:var(--muted);margin-top:10px;">Qubit — superposition of 0 and 1</div>
          </div>
        </div>
        <div class="sim-readout" id="quantumReadout">Click the classical switch to flip 0 ⇄ 1. Notice the qubit never stops spinning — it holds both states at once.</div>
      </div>
    </div>`;
  },

  hierarchy(s){
    const layers = [
      {k:'ai', label:'AI', cls:'ring-ai', title:'AI (Artificial Intelligence)', def:'A general term for technologies that reproduce or perform intelligent human behavior — learning, reasoning, judgment, etc. — on a computer.', ex:'Speech recognition, image recognition, translation.'},
      {k:'ml', label:'Machine Learning', cls:'ring-ml', title:'Machine Learning', def:'One of the learning technologies that makes AI work. It learns patterns from data to make predictions and judgments.', ex:'Spam filters, product recommendations.'},
      {k:'dl', label:'Deep Learning', cls:'ring-dl', title:'Deep Learning', def:'An advanced technology within machine learning that uses neural networks. It learns complex patterns using large-scale data.', ex:'Image analysis for autonomous driving, speech synthesis.'},
      {k:'genai', label:'GenAI', cls:'ring-genai', title:'Generative AI', def:'AI technology that uses deep learning to generate new data — text, images, audio, programs, etc.', ex:'ChatGPT, image generation AIs.'}
    ];
    sim.hierLayers = layers;
    return `<div class="slide">
      ${crumbHead(s)}
      <h1 class="slide-title">${s.title}</h1>
      <p class="lede">${s.intro}</p>
      <div class="hier-wrap">
        <div class="hier-rings">
          ${layers.map(l=>`<div class="hier-ring ${l.cls}" data-action="hier-select" data-k="${l.k}">${l.label}</div>`).join('')}
        </div>
        <div class="hier-detail panel" id="hierDetail">
          <div class="panel-title">AI (Artificial Intelligence)</div>
          <div class="body-text" style="font-size:14px;">A general term for technologies that reproduce or perform intelligent human behavior — learning, reasoning, judgment, etc. — on a computer.<br><br><b style="color:var(--cyan);font-size:12px;">EXAMPLES</b><br>Speech recognition, image recognition, translation.</div>
        </div>
      </div>
    </div>`;
  },

  neuralnet(s){
    return `<div class="slide">
      ${crumbHead(s)}
      <h1 class="slide-title">${s.title}</h1>
      <p class="lede">${s.intro}</p>
      <div class="sim-panel">
        <div class="nn-stage" id="nnStage"></div>
        <div style="text-align:center; margin-top:8px;"><button class="reveal-btn" data-action="nn-play">▶ Play forward pass</button></div>
      </div>
    </div>`;
  },

  genai(s){
    return `<div class="slide">
      ${crumbHead(s)}
      <h1 class="slide-title">${s.title}</h1>
      ${s.intro}
      <div class="sim-panel">
        <div class="genai-input-row">
          <input class="genai-input" id="genaiInput" placeholder="Type a short prompt, e.g. 'a poem about the sea'" />
          <button class="reveal-btn" style="margin:0" data-action="genai-generate">Generate</button>
        </div>
        <div class="genai-outputs">
          <div class="genai-out" id="genaiText">📝<span>Text</span></div>
          <div class="genai-out" id="genaiImage">🖼️<span>Image</span></div>
          <div class="genai-out" id="genaiAudio">🎧<span>Audio</span></div>
        </div>
        <div class="sim-readout" id="genaiReadout">A single prompt can generate several kinds of new data — the model just needs to be trained for that output type.</div>
      </div>
    </div>`;
  },

  question(s){
    const isMcq = s.kind==='mcq';
    return `<div class="slide">
      ${crumbHead(s)}
      <span class="q-badge ${s.level}">${levelLabel(s.level)}</span>
      <p class="q-prompt">${s.prompt}</p>
      ${isMcq ? `
        <div class="mcq-options">
          ${s.options.map((o,i)=>`<button class="mcq-opt" data-action="mcq-pick" data-i="${i}"><span class="letter">${String.fromCharCode(65+i)}</span><span>${o}</span></button>`).join('')}
        </div>
        <div class="answer-panel" id="answerPanel"><b>EXPLANATION</b>${s.explain}</div>
      ` : `
        <button class="reveal-btn" data-action="reveal-answer">Show answer</button>
        <div class="answer-panel" id="answerPanel"><b>MODEL ANSWER</b>${s.answer}</div>
      `}
    </div>`;
  },

  exheader(s){
    return `<div class="exheader">
      <div class="tagline">${s.tagline}</div>
      <h1>${s.title}</h1>
      <p>${s.text}</p>
      ${s.levels ? `<div class="level-bar">
        <span class="level-pill" style="color:#34d399;border-color:rgba(52,211,153,.4)">Easy</span>
        <span class="level-pill" style="color:#fbbf24;border-color:rgba(251,191,36,.4)">Medium</span>
        <span class="level-pill" style="color:#fb923c;border-color:rgba(251,146,60,.4)">Hard</span>
        <span class="level-pill" style="color:#f87171;border-color:rgba(248,113,113,.4)">Extreme</span>
      </div>` : ''}
    </div>`;
  },

  reflect(s){
    return `<div class="slide">
      ${crumbHead(s)}
      <h1 class="slide-title">${s.title}</h1>
      <div style="display:flex; flex-direction:column; gap:16px;">
        <div class="reflect-box"><b>REFLECT</b>${s.reflect}</div>
        <div class="reflect-box" style="background:linear-gradient(160deg,rgba(34,211,238,0.1),rgba(59,130,246,0.05))"><b style="color:var(--cyan)">CHALLENGE</b>${s.challenge}</div>
      </div>
    </div>`;
  },

  thanks(){
    return `<div class="thanks">
      <div class="thanks-logo"><span>${CONFIG.logoText}</span></div>
      <h1>Thank You</h1>
      <div class="tname">${CONFIG.teacherName}</div>
      <div class="temail">Questions? Reach out at <a href="mailto:${CONFIG.email}">${CONFIG.email}</a></div>
    </div>`;
  }
};

function crumbHead(s){
  return `<div class="eyebrow"><span class="bar"></span>${s.eyebrow||s.section}</div>`;
}
function levelLabel(l){
  return {easy:'Easy',medium:'Medium',hard:'Hard',extreme:'Extreme',check:'Check your understanding'}[l]||l;
}

/* =========================================================
   POST-RENDER (canvas draws, animations that need live DOM)
========================================================= */
function postRender(s){
  if(s.type==='mooreChart') drawMoore('points');
  if(s.type==='neuralnet') drawNN();
}

/* ---- Moore's Law canvas ---- */
const MOORE_DATA = [
  {y:1971,t:2300,label:'Intel 4004'},
  {y:1978,t:29000,label:'Intel 8086'},
  {y:1989,t:1200000,label:'Intel 80486'},
  {y:2000,t:42000000,label:'Pentium 4'},
  {y:2010,t:1170000000,label:'Core i7'},
  {y:2022,t:114000000000,label:'Apple M1 Ultra'}
];
function drawMoore(mode){
  const canvas = document.getElementById('mooreCanvas');
  if(!canvas) return;
  const box = canvas.parentElement.getBoundingClientRect();
  canvas.width = box.width; canvas.height = box.height;
  const ctx = canvas.getContext('2d');
  const W=canvas.width, H=canvas.height, pad={l:56,r:20,t:16,b:30};
  const x0=1969,x1=2024, ymin=1000, ymax=2e11;
  const X = y => pad.l + (y-x0)/(x1-x0)*(W-pad.l-pad.r);
  const Y = t => (H-pad.b) - (Math.log10(t)-Math.log10(ymin))/(Math.log10(ymax)-Math.log10(ymin))*(H-pad.b-pad.t);
  ctx.clearRect(0,0,W,H);
  // grid
  ctx.strokeStyle='rgba(255,255,255,0.08)'; ctx.fillStyle='rgba(255,255,255,0.4)';
  ctx.font='10px Inter'; ctx.textAlign='right';
  for(let p=3;p<=11;p+=2){
    const t=Math.pow(10,p); const y=Y(t);
    ctx.beginPath(); ctx.moveTo(pad.l,y); ctx.lineTo(W-pad.r,y); ctx.stroke();
    ctx.fillText('10^'+p, pad.l-8, y+3);
  }
  ctx.textAlign='center';
  [1970,1980,1990,2000,2010,2020].forEach(yr=>{
    ctx.fillText(yr, X(yr), H-pad.b+16);
  });
  if(mode==='trend'){
    ctx.strokeStyle='rgba(34,211,238,0.65)'; ctx.setLineDash([5,4]); ctx.lineWidth=1.6;
    ctx.beginPath();
    let first=true;
    for(let yr=1971; yr<=2024; yr+=1){
      const t = 2300*Math.pow(2,(yr-1971)/2);
      const yy = Y(Math.min(t,ymax));
      if(first){ctx.moveTo(X(yr),yy); first=false;} else ctx.lineTo(X(yr),yy);
    }
    ctx.stroke(); ctx.setLineDash([]);
  }
  MOORE_DATA.forEach(d=>{
    const x=X(d.y), y=Y(d.t);
    ctx.fillStyle='#60a5fa';
    ctx.beginPath(); ctx.arc(x,y,4,0,Math.PI*2); ctx.fill();
    ctx.fillStyle='rgba(234,242,255,0.85)'; ctx.textAlign='left'; ctx.font='10px Inter';
    ctx.fillText(d.label, x+7, y-6);
  });
}

/* ---- Neural network SVG ---- */
function drawNN(){
  const stage = document.getElementById('nnStage');
  if(!stage) return;
  const layers=[4,5,5,3];
  const W=760,H=220,padX=70;
  const xs = layers.map((_,i)=> padX + i*((W-2*padX)/(layers.length-1)));
  const coords = layers.map((n,li)=>{
    const gap=H/(n+1);
    return Array.from({length:n},(_,i)=>({x:xs[li], y:gap*(i+1)}));
  });
  let edges='';
  for(let l=0;l<coords.length-1;l++){
    for(const a of coords[l]) for(const b of coords[l+1]){
      edges += `<line class="nn-edge" x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}"/>`;
    }
  }
  let nodes='';
  coords.forEach(layer=>layer.forEach(p=>{
    nodes += `<circle class="nn-node" cx="${p.x}" cy="${p.y}" r="7"/>`;
  }));
  stage.innerHTML = `<svg viewBox="0 0 ${W} ${H}">${edges}${nodes}<g id="nnPulses"></g></svg>`;
  sim.nnCoords = coords;
}
function playNN(){
  const coords = sim.nnCoords;
  if(!coords) return;
  const svg = document.querySelector('#nnStage svg');
  const pulses = document.getElementById('nnPulses');
  pulses.innerHTML='';
  let delay=0;
  for(let l=0;l<coords.length-1;l++){
    coords[l].forEach(a=>{
      coords[l+1].forEach(b=>{
        const c=document.createElementNS('http://www.w3.org/2000/svg','circle');
        c.setAttribute('r','3'); c.setAttribute('class','nn-pulse'); c.setAttribute('cx',a.x); c.setAttribute('cy',a.y);
        c.style.opacity='0';
        pulses.appendChild(c);
        const anim = c.animate(
          [{cx:a.x,cy:a.y,opacity:0},{opacity:1,offset:0.08},{cx:b.x,cy:b.y,opacity:1},{opacity:0}],
          {duration:650, delay: delay, fill:'forwards'}
        );
      });
    });
    delay += 500;
  }
}

/* =========================================================
   EVENT DELEGATION
========================================================= */
root.addEventListener('click', e=>{
  const el = e.target.closest('[data-action]');
  if(!el) return;
  const action = el.dataset.action;

  if(action==='timeline-toggle'){
    el.closest('.tstage').classList.toggle('open');
  }
  else if(action==='flip-card'){
    el.classList.toggle('flipped');
  }
  else if(action==='moore-toggle'){
    root.querySelectorAll('[data-action="moore-toggle"]').forEach(b=>b.classList.remove('active'));
    el.classList.add('active');
    drawMoore(el.dataset.mode);
    document.getElementById('mooreReadout').innerHTML = el.dataset.mode==='trend'
      ? 'The dashed line shows a pure "doubling every 2 years" curve from the 1971 starting point — real processors have tracked it remarkably closely for 50 years.'
      : 'Transistor count per chip, 1971–2022 (log scale). Each dot is a real processor.';
  }
  else if(action==='edge-mode'){
    root.querySelectorAll('[data-action="edge-mode"]').forEach(b=>b.classList.remove('active'));
    el.classList.add('active');
    sim.edgeMode = el.dataset.mode;
    document.getElementById('edgeCloudIcon').style.opacity = sim.edgeMode==='cloud'?'1':'0.15';
  }
  else if(action==='edge-run'){
    runEdgeSim();
  }
  else if(action==='arvr-mode'){
    root.querySelectorAll('[data-action="arvr-mode"]').forEach(b=>b.classList.remove('active'));
    el.classList.add('active');
    const frame = document.getElementById('arvrFrame');
    const readout = document.getElementById('arvrReadout');
    if(el.dataset.mode==='vr'){
      frame.className='arvr-frame vr';
      frame.innerHTML = `<div class="icon" style="top:20px;left:40%;">🔺</div><div class="icon" style="top:70px;left:20%;">⬢</div><div class="icon" style="top:90px;right:20%;">◆</div><div class="icon" style="bottom:20px;left:45%;">🥽</div>`;
      readout.innerHTML = '<b>VR</b> replaces the real world entirely — the user is immersed inside a fully computer-generated virtual space.';
    } else {
      frame.className='arvr-frame ar';
      frame.innerHTML = `<div class="icon" style="top:14px;left:16px;">📍</div><div class="icon" style="top:60px;right:20px;">💬</div><div class="icon" style="bottom:16px;left:60px;">🧭</div>`;
      readout.innerHTML = '<b>AR</b> overlays digital information (pins, labels, chat bubbles) on top of the real, camera-seen world.';
    }
  }
  else if(action==='classical-toggle'){
    el.classList.toggle('on');
    const on = el.classList.contains('on');
    el.querySelector('.knob').textContent = on ? '1' : '0';
    document.getElementById('quantumReadout').innerHTML = `Classical bit flipped to <b>${on?1:0}</b> — still just one definite value. Meanwhile the qubit beside it keeps spinning through a mix of both.`;
  }
  else if(action==='hier-select'){
    root.querySelectorAll('.hier-ring').forEach(r=>r.classList.remove('active'));
    el.classList.add('active');
    const layer = sim.hierLayers.find(l=>l.k===el.dataset.k);
    document.getElementById('hierDetail').innerHTML = `<div class="panel-title">${layer.title}</div><div class="body-text" style="font-size:14px;">${layer.def}<br><br><b style="color:var(--cyan);font-size:12px;">EXAMPLES</b><br>${layer.ex}</div>`;
  }
  else if(action==='nn-play'){
    playNN();
  }
  else if(action==='genai-generate'){
    const prompt = document.getElementById('genaiInput').value.trim() || 'a poem about the sea';
    const outs = ['genaiText','genaiImage','genaiAudio'];
    outs.forEach(id=>document.getElementById(id).classList.remove('lit'));
    outs.forEach((id,i)=>setTimeout(()=>document.getElementById(id).classList.add('lit'), i*350));
    document.getElementById('genaiReadout').innerHTML = `Prompt received: <b>"${escapeHtml(prompt)}"</b> — a generative model trained on each data type could now produce new text, an image, or audio from it.`;
  }
  else if(action==='mcq-pick'){
    if(el.classList.contains('disabled')) return;
    const s = SLIDES[current];
    const i = Number(el.dataset.i);
    root.querySelectorAll('.mcq-opt').forEach((o,oi)=>{
      o.classList.add('disabled');
      if(oi===s.correct) o.classList.add('correct');
      else if(oi===i) o.classList.add('wrong');
    });
    document.getElementById('answerPanel').classList.add('show');
  }
  else if(action==='reveal-answer'){
    document.getElementById('answerPanel').classList.add('show');
    el.textContent='Answer shown above';
    el.disabled=true;
  }
  else if(action==='jump-lesson'){
    const target = SLIDES.findIndex(sl=> sl.section==='Lesson '+el.dataset.lesson);
    if(target>-1) render(target);
  }
});

function escapeHtml(str){
  return str.replace(/[&<>"']/g, m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}

function runEdgeSim(){
  const car = document.getElementById('edgeCar');
  const badge = document.getElementById('latencyBadge');
  const readout = document.getElementById('edgeReadout');
  const stageW = car.parentElement.getBoundingClientRect().width;
  car.style.left='24px'; badge.style.display='none';
  void car.offsetWidth;
  if(sim.edgeMode==='cloud'){
    badge.style.display='block';
    car.style.transition='left 2.4s linear';
    car.style.left=(stageW-140)+'px';
    setTimeout(()=>{
      readout.innerHTML = `<span style="color:var(--red)">⚠ Round-trip delay to the cloud meant the car reacted too late — it kept moving toward the pedestrian before a decision came back.</span>`;
      badge.style.display='none';
    }, 1300);
  } else {
    car.style.transition='left 0.9s linear';
    car.style.left=(stageW-190)+'px';
    setTimeout(()=>{
      readout.innerHTML = `<b style="color:var(--green)">✓ Edge computing processed the camera feed on board and stopped instantly — no round trip needed.</b>`;
    }, 900);
  }
}

/* =========================================================
   NAV / KEYBOARD / TOC
========================================================= */
prevBtn.addEventListener('click', ()=>go(-1));
nextBtn.addEventListener('click', ()=>go(1));
document.addEventListener('keydown', e=>{
  if(e.key==='ArrowRight') go(1);
  if(e.key==='ArrowLeft') go(-1);
  if(e.key==='Escape') closeToc();
});

const tocOverlay = document.getElementById('tocOverlay');
const tocList = document.getElementById('tocList');
function buildToc(){
  let html=''; let lastSection=null;
  SLIDES.forEach((s,i)=>{
    if(s.section!==lastSection){
      html += `<div class="toc-item section">${s.section}</div>`;
      lastSection = s.section;
    }
    html += `<div class="toc-item" data-idx="${i}"><span class="dot"></span>${s.navLabel||s.type}</div>`;
  });
  tocList.innerHTML = html;
}
buildToc();
tocList.addEventListener('click', e=>{
  const el = e.target.closest('.toc-item[data-idx]');
  if(!el) return;
  render(Number(el.dataset.idx));
  closeToc();
});
function openToc(){ tocOverlay.classList.add('open'); }
function closeToc(){ tocOverlay.classList.remove('open'); }
document.getElementById('tocBtn').addEventListener('click', openToc);
document.getElementById('tocCloseBtn').addEventListener('click', closeToc);
tocOverlay.addEventListener('click', e=>{ if(e.target===tocOverlay) closeToc(); });
document.getElementById('homeBtn').addEventListener('click', ()=>render(0));

/* init */
document.getElementById('teacherNameLabel').textContent = CONFIG.teacherName;
document.querySelectorAll('.logo-chip').forEach(el=>el.textContent = CONFIG.logoText);
const startIdx = Number(location.hash.replace('#',''))||0;
render(startIdx);
