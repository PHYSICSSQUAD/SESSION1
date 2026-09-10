/* ============================================================
   المحاكيات التفاعلية — كل دالة بتشتغل على جذر السلايد
   ============================================================ */
(function(){
const $ = (s,r)=> (r||document).querySelector(s);
const $$ = (s,r)=> Array.from((r||document).querySelectorAll(s));

function fmtT(t){
  if(t>=1e9) return (t/1e9).toFixed(t<1e10?1:0)+" B";
  if(t>=1e6) return (t/1e6).toFixed(t<1e7?1:0)+" M";
  if(t>=1e3) return (t/1e3).toFixed(0)+" K";
  return Math.round(t)+"";
}

window.SIMS = {

/* ---------- كروت بتتقلب (Social Changes — من المرجع) ---------- */
flip(root){
  $$(".flip-card",root).forEach(c=>c.addEventListener("click",()=>c.classList.toggle("flipped")));
},

/* ---------- AR / VR switcher (من المرجع) ---------- */
arvr(root){
  const frame=$("#arvrFrame",root), out=$("#arvrReadout",root);
  const V={
    ar:{cls:"arvr-frame ar",
        html:`<div class="ic" style="top:14px;left:16px">📍</div><div class="ic" style="top:60px;right:20px">💬</div><div class="ic" style="bottom:16px;left:60px">🧭</div>`,
        txt:'<b>AR</b> overlays digital information (pins, labels, chat bubbles) on top of the real, camera-seen world.'},
    vr:{cls:"arvr-frame vr",
        html:`<div class="ic" style="top:20px;left:40%">🔺</div><div class="ic" style="top:70px;left:20%">⬢</div><div class="ic" style="top:90px;right:20%">◆</div><div class="ic" style="bottom:20px;left:45%">🥽</div>`,
        txt:'<b>VR</b> replaces the real world entirely — the user is immersed inside a fully computer-generated virtual space.'}
  };
  $$(".sim-btn",root).forEach(b=>b.addEventListener("click",()=>{
    $$(".sim-btn",root).forEach(x=>x.classList.remove("active"));
    b.classList.add("active");
    const v=V[b.dataset.mode]; if(!v||!frame) return;
    frame.className=v.cls; frame.innerHTML=v.html; out.innerHTML=v.txt;
  }));
},

/* ---------- يوم طالب مصري ---------- */
day(root){
  const DATA=[
    {ic:"💬", t:"Checks messages on an SNS app", ch:"Social change: <b>SNS</b> — connect, post & share; information spreads rapidly.", st:"Made possible by: <b>1990s</b> Internet commercialization + <b>2000s</b> smartphones."},
    {ic:"🥐", t:"Pays for breakfast — cashless", ch:"Social change: <b>Cashless payment</b> — e-money / QR, no cash.", st:"Made possible by: <b>2000s</b> smartphones + <b>2010s</b> cloud computing."},
    {ic:"🎓", t:"Joins a lesson online", ch:"Social change: <b>Online learning</b> — classes & materials over the Internet.", st:"Made possible by: <b>1990s</b> Internet + <b>2010s</b> cloud (“IT as a service”)."},
    {ic:"📦", t:"Orders a book from an EC shop", ch:"Social change: <b>E-commerce</b> — buying & selling through the Internet.", st:"Made possible by: <b>1990s</b> Web + <b>2000s</b> mobile Internet."}
  ];
  $$(".day-stop",root).forEach(b=>b.addEventListener("click",()=>{
    $$(".day-stop",root).forEach(x=>x.classList.remove("on"));
    b.classList.add("on");
    const d=DATA[+b.dataset.i];
    $("#dayPanel",root).innerHTML = `<span class="dp-ic">${d.ic}</span><div><b>${d.t}</b><p>${d.ch}</p><p class="dim">${d.st}</p></div>`;
  }));
},

/* ---------- الخط الزمني ---------- */
timeline(root){
  const DATA=[
    {e:"1940s–60s", tech:"Birth of the computer (ENIAC, vacuum tubes).", imp:"Mainly military & scientific computation.", fun:"The first computers filled a whole room."},
    {e:"1970s–80s", tech:"Spread of personal computers (PCs).", imp:"Beginning of personal computer use.", fun:"Computers shrank from a room to a desk."},
    {e:"1990s", tech:"Commercialization of the Internet; the Web.", imp:"Globalization of information; spread of e-mail.", fun:"Information became borderless."},
    {e:"2000s", tech:"Rise of smartphones (iPhone, etc.).", imp:"Explosive spread of mobile Internet.", fun:"The computer moved into your pocket."},
    {e:"2010s →", tech:"Spread of cloud computing.", imp:"Large-scale data analysis & AI; “IT as a service”.", fun:"You stopped owning machines — you rent power."}
  ];
  const P=$("#tlPanel",root);
  const show=i=>{ $$(".tl-node",root).forEach((n,j)=>n.classList.toggle("on",j===i));
    const d=DATA[i];
    P.innerHTML=`<div class="tl-card"><h4>${d.e}</h4><p><b>Tech:</b> ${d.tech}</p><p><b>Impact:</b> ${d.imp}</p><p class="dim">${d.fun}</p></div>`; };
  $$(".tl-node",root).forEach(n=>n.addEventListener("click",()=>show(+n.dataset.i)));
  show(0);
},

/* ---------- محاكي قانون مور ---------- */
moore(root){
  const svg=$("#mooreSvg",root), slider=$("#mooreYear",root), read=$("#mooreRead",root);
  if(!svg) return;
  const X=y=>70+(y-1970)/(2025-1970)*550;
  const Y=t=>{const L=Math.log10(Math.max(t,1e3)); return 230-(L-3)/(11-3)*210;};
  const model=y=>2300*Math.pow(2,(y-1971)/2);
  const real=[[1978,29e3,"8086"],[1982,134e3,"286"],[1989,1.2e6,"i486"],[2000,42e6,"P4"],[2010,1.17e9,"i7"],[2022,114e9,"M1"]];
  let s=`<line x1="70" y1="230" x2="620" y2="230" stroke="#27476f"/><line x1="70" y1="20" x2="70" y2="230" stroke="#27476f"/>`;
  for(let L=3;L<=11;L+=2) s+=`<text x="62" y="${Y(Math.pow(10,L))+4}" fill="#6ea8ff" font-size="10" text-anchor="end">10^${L}</text><line x1="70" y1="${Y(Math.pow(10,L))}" x2="620" y2="${Y(Math.pow(10,L))}" stroke="#12305a"/>`;
  for(let yr=1970;yr<=2020;yr+=10) s+=`<text x="${X(yr)}" y="248" fill="#6ea8ff" font-size="10" text-anchor="middle">${yr}</text>`;
  let pts=""; for(let y=1971;y<=2025;y++) pts+=`${X(y)},${Y(model(y))} `;
  s+=`<polyline points="${pts}" fill="none" stroke="#22d3ee" stroke-width="2.5" stroke-dasharray="6 4"/>`;
  real.forEach(r=>{ s+=`<circle cx="${X(r[0])}" cy="${Y(r[1])}" r="5" fill="#3b82f6" stroke="#dff3ff" stroke-width="1.5"/><text x="${X(r[0])+8}" y="${Y(r[1])-6}" fill="#cfe8ff" font-size="10">${r[2]}</text>`; });
  s+=`<g id="mooreMark"><line id="mmL" y1="20" y2="230" stroke="#f59e0b" stroke-width="1.5"/><circle id="mmC" r="7" fill="#f59e0b" stroke="#fff" stroke-width="2"/></g>`;
  svg.innerHTML=s;
  const upd=()=>{ const y=+slider.value, t=model(y);
    const mx=X(y),my=Y(t);
    $("#mmL",root).setAttribute("x1",mx); $("#mmL",root).setAttribute("x2",mx);
    $("#mmC",root).setAttribute("cx",mx); $("#mmC",root).setAttribute("cy",my);
    read.innerHTML=`<b>${y}</b> → ≈ <b>${fmtT(t)}</b> transistors <span class="dim">(×${fmtT(t/2300)} since 1971)</span>`; };
  slider.addEventListener("input",upd); upd();
},

/* ---------- edge vs cloud ---------- */
edge(root){
  const car=$("#edgeCar",root), ped=$("#edgePed",root), pk=$("#edgePacket",root),
        v=$("#edgeVerdict",root), tm=$("#edgeTime",root);
  let raf=0;
  const stop=()=>cancelAnimationFrame(raf);
  const run=(mode)=>{
    stop(); v.innerHTML=""; pk.style.opacity=1;
    const t0=performance.now(), dur= mode==="cloud"?1800:600, tmax= mode==="cloud"?0.40:0.02;
    const tick=now=>{ const p=Math.min(1,(now-t0)/dur);
      tm.textContent="t = "+(p*tmax).toFixed(2)+" s";
      if(mode==="cloud"){
        // car -> cloud -> car
        const cr=car.getBoundingClientRect(), st=$("#edgeStage",root).getBoundingClientRect();
        const cx=cr.left-st.left+cr.width/2, cy=cr.top-st.top;
        const clx=st.width*0.82, cly=st.height*0.14;
        let x,y;
        if(p<0.5){const q=p/0.5; x=cx+(clx-cx)*q; y=cy+(cly-cy)*q;}
        else {const q=(p-0.5)/0.5; x=clx+(cx-clx)*q; y=cly+(cy-cly)*q;}
        pk.style.left=x+"px"; pk.style.top=y+"px";
      } else {
        pk.style.left=""; pk.style.top=""; pk.className="edge-packet on-edge";
      }
      if(p<1) raf=requestAnimationFrame(tick);
      else {
        if(mode==="cloud"){ v.className="edge-verdict bad"; v.innerHTML="✖ 0.40 s delay — the car hesitates. A delay of even <b>0.1 s</b> can lead to an accident!"; ped.textContent="🚶"; }
        else { v.className="edge-verdict good"; v.innerHTML="✔ Edge computing: processed <b>on board, instantly</b> (0.02 s) — the car brakes in time."; ped.textContent="🚶✅"; }
        setTimeout(()=>{ped.textContent="🚶";},1600);
      }
    };
    pk.className="edge-packet"+(mode==="edge"?" on-edge":"");
    raf=requestAnimationFrame(tick);
  };
  $("#edgeCloud",root).addEventListener("click",()=>run("cloud"));
  $("#edgeEdge",root).addEventListener("click",()=>run("edge"));
},

/* ---------- bit vs qubit ---------- */
quantum(root){
  const bit=$("#bitBall",root), qb=$("#qubitBall",root), note=$("#qtmNote",root);
  $("#bitFlip",root).addEventListener("click",()=>{ bit.textContent = bit.textContent==="0"?"1":"0"; bit.classList.remove("pop"); void bit.offsetWidth; bit.classList.add("pop");});
  $("#qubitMeasure",root).addEventListener("click",()=>{
    qb.classList.remove("spin"); const r=Math.random()<0.5?"0":"1"; qb.textContent=r;
    note.innerHTML=`🎯 Measured → collapsed to <b>${r}</b>. Before measuring it was in <b>superposition</b> (0 and 1 at once).`;
    setTimeout(()=>{qb.classList.add("spin"); qb.textContent="0+1"; note.textContent="The qubit spins in superposition… until you measure it.";},2200);
  });
  qb.classList.add("spin");
},

/* ---------- الهرم المتداخل ---------- */
hier(root){
  const DATA=[
    {n:"AI — Artificial Intelligence", d:"A general term for technologies that reproduce intelligent human behavior (learning, reasoning, judgment) on a computer.", e:"speech recognition · image recognition · translation"},
    {n:"Machine Learning", d:"A learning technology that makes AI work — learns patterns from data to make predictions and judgments.", e:"spam filters · product recommendations"},
    {n:"Deep Learning", d:"An advanced technology WITHIN machine learning that uses neural networks on large-scale data.", e:"image analysis for autonomous driving · speech synthesis"},
    {n:"Generative AI", d:"AI that uses deep learning to GENERATE new data (text, images, audio, programs…).", e:"ChatGPT · image generation AIs"}
  ];
  const info=$("#hierInfo",root);
  $$(".h-layer",root).forEach(l=>l.addEventListener("click",e=>{
    e.stopPropagation();
    $$(".h-layer",root).forEach(x=>x.classList.remove("active"));
    l.classList.add("active");
    const d=DATA[+l.dataset.i];
    info.innerHTML=`<h4>${d.n}</h4><p>${d.d}</p><p class="dim">e.g. ${d.e}</p>`;
  }));
},

/* ---------- قواعد vs تعلم ---------- */
rules(root){
  const V=$("#rulesView",root), b1=$("#rulesBtn1",root), b2=$("#rulesBtn2",root);
  const views={
    rules:`<div class="rv"><div class="rv-code">IF subject contains "FREE MONEY" → SPAM<br>IF subject contains "PRINCE" → SPAM<br>IF sender unknown → MAYBE<br>ELSE → INBOX</div>
      <div class="rv-mail">📩 New mail: “You won a FR33 trip!!”</div>
      <div class="rv-out bad">Verdict: <b>INBOX ✖</b> — the hand-written rules missed “FR33”. Rules are brittle.</div></div>`,
    ml:`<div class="rv"><div class="rv-code">Train on 10,000 labeled e-mails →<br>the model <b>learns the pattern</b> of spam by itself.</div>
      <div class="rv-mail">📩 New mail: “You won a FR33 trip!!”</div>
      <div class="rv-out good">Verdict: <b>SPAM 97% ✔</b> — it saw thousands of similar tricks before.</div></div>`
  };
  const set=m=>{ b1.classList.toggle("on",m==="rules"); b2.classList.toggle("on",m==="ml"); V.innerHTML=views[m]; };
  b1.addEventListener("click",()=>set("rules")); b2.addEventListener("click",()=>set("ml"));
  set("rules");
},

/* ---------- الشبكة العصبية ---------- */
nn(root){
  const svg=$("#nnSvg",root), out=$("#nnOut",root);
  const layers=[[80,4],[280,4],[470,3]];
  const yFor=(n,i)=> 150 - (n-1)*40 + i*80;
  let nodes=[],edges=[];
  layers.forEach((L,li)=>{ for(let i=0;i<L[1];i++) nodes.push({x:L[0],y:yFor(L[1],i),l:li}); });
  for(let li=0;li<2;li++) for(let a=0;a<layers[li][1];a++) for(let b=0;b<layers[li+1][1];b++)
    edges.push([nodes.find(n=>n.l===li&&n.y===yFor(layers[li][1],a)), nodes.find(n=>n.l===li+1&&n.y===yFor(layers[li+1][1],b))]);
  let s=`<text x="80" y="285" fill="#6ea8ff" font-size="11" text-anchor="middle">Input layer</text><text x="280" y="285" fill="#6ea8ff" font-size="11" text-anchor="middle">Hidden layer</text><text x="470" y="285" fill="#6ea8ff" font-size="11" text-anchor="middle">Output</text>`;
  edges.forEach((e,i)=>{ s+=`<line class="nn-e" data-i="${i}" x1="${e[0].x}" y1="${e[0].y}" x2="${e[1].x}" y2="${e[1].y}" stroke="#1d4d86" stroke-width="1.4"/>`; });
  const outLabels=["Healthy 🌿","Diseased 🍂","?"];
  nodes.forEach((n,i)=>{ s+=`<circle class="nn-n" data-i="${i}" cx="${n.x}" cy="${n.y}" r="14" fill="#0b2c55" stroke="#3b82f6" stroke-width="2"/>`; });
  outLabels.forEach((t,i)=>{ s+=`<text x="492" y="${yFor(3,i)+4}" fill="#cfe8ff" font-size="12">${t}</text>`; });
  svg.innerHTML=s;
  let scrambled=false, busy=false;
  $("#nnScramble",root).addEventListener("click",()=>{ scrambled=!scrambled;
    $$(".nn-e",root).forEach(e=>{ e.setAttribute("stroke", scrambled? "#a855f7":"#1d4d86"); e.setAttribute("stroke-dasharray", scrambled? "3 5":"none"); });
    out.innerHTML = scrambled? `<span class="dim">⚠️ Weights scrambled = untrained network (it guesses!)</span>` : `<span class="dim">Weights learned from data ✔</span>`;
  });
  const run=(inp)=>{ if(busy) return; busy=true;
    const lines=$$(".nn-e",root), nset=$$(".nn-n",root);
    nset.forEach(n=>n.classList.remove("hot"));
    lines.forEach(l=>l.classList.remove("flow"));
    // light input nodes
    nset.filter(n=>+n.dataset.i<4).forEach(n=>n.classList.add("hot"));
    setTimeout(()=>lines.forEach(l=>{ if(+l.dataset.i<16) l.classList.add("flow"); }),100);
    setTimeout(()=>nset.filter(n=>+n.dataset.i>=4&&+n.dataset.i<8).forEach(n=>n.classList.add("hot")),500);
    setTimeout(()=>lines.forEach(l=>{ if(+l.dataset.i>=16) l.classList.add("flow"); }),800);
    setTimeout(()=>{
      let chosen;
      if(scrambled){ chosen=Math.floor(Math.random()*2); out.innerHTML=`<span class="bad-t">Output: <b>${outLabels[chosen]}</b> — wrong or lucky! Untrained weights = garbage.</span>`; }
      else { chosen=inp; out.innerHTML=`<span class="good-t">Output: <b>${outLabels[chosen]}</b> — confidence 96%. The network learned the pattern.</span>`; }
      nset.filter(n=>+n.dataset.i===8+chosen).forEach(n=>n.classList.add("hot"));
      busy=false;
    },1200);
  };
  $("#nnRun1",root).addEventListener("click",()=>run(0));
  $("#nnRun2",root).addEventListener("click",()=>run(1));
  out.innerHTML=`<span class="dim">Weights learned from data ✔ — جرّب صورة!</span>`;
},

/* ---------- المولد ---------- */
genai(root){
  const O=$("#genOut",root);
  const type=(txt,done)=>{ O.innerHTML=`<span class="gen-tag">TEXT</span><span id="tw"></span>`; let i=0;
    const iv=setInterval(()=>{ $("#tw",root).textContent=txt.slice(0,++i); if(i>=txt.length) clearInterval(iv); },24); };
  const acts=[
    ()=>type("“The Nile flows through time like a ribbon of light — carrying five thousand years of stories to the sea.” ✨ (نص جديد اتولد مش منسوخ)"),
    ()=>{ O.innerHTML=`<span class="gen-tag">IMAGE</span><svg viewBox="0 0 300 140" class="gen-svg"><rect width="300" height="140" fill="#071a38"/><circle cx="230" cy="40" r="22" fill="#f59e0b"><animate attributeName="cy" values="90;38" dur="2s" fill="freeze"/></circle><polygon points="60,120 130,30 200,120" fill="#123c74"/><polygon points="140,120 200,45 260,120" fill="#0d2f5c"/><rect y="118" width="300" height="22" fill="#0a2547"/></svg><p class="dim">صورة جديدة اتبنت بكسل-ببكسل من البرومبت.</p>`; },
    ()=>{ O.innerHTML=`<span class="gen-tag">AUDIO</span><p>🎵 Three-note ringtone generated:</p>`;
      try{ const C=new (window.AudioContext||window.webkitAudioContext)();
        [523.25,659.25,783.99].forEach((f,i)=>{ const o=C.createOscillator(),g=C.createGain();
          o.type="sine"; o.frequency.value=f; o.connect(g); g.connect(C.destination);
          const t=C.currentTime+i*0.28; g.gain.setValueAtTime(0.0001,t); g.gain.exponentialRampToValueAtTime(0.3,t+0.03); g.gain.exponentialRampToValueAtTime(0.0001,t+0.26);
          o.start(t); o.stop(t+0.3); });
      }catch(e){}
      O.innerHTML+=`<div class="gen-wave">${Array.from({length:40},(_,i)=>`<i style="height:${6+Math.abs(Math.sin(i/3))*26}px"></i>`).join("")}</div>`; }
  ];
  $$(".gen-chip",root).forEach(c=>c.addEventListener("click",()=>acts[+c.dataset.p]()));
}

};
})();
