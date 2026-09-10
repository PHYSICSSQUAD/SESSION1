/* ============================================================
   المحرك — التنقل + نظام الأسئلة + النتائج + الخلفية التفاعلية
   ============================================================ */
(function(){
const $=(s,r)=>(r||document).querySelector(s);
const $$=(s,r)=>Array.from((r||document).querySelectorAll(s));
const C=window.CONFIG.teacher, D=window.CONFIG.deck;
const SLIDES=window.SLIDES, QB=window.QBANK, QO=window.QORDER, SECS=window.SECTIONS;
const LVL={easy:["EASY","lv-easy"],medium:["MEDIUM","lv-medium"],hard:["HARD","lv-hard"],extreme:["EXTREME","lv-extreme"]};
const TYP={mcq:"Multiple Choice",tf:"True / False",fill:"Fill the Blank",match:"Matching",theory:"Theory / Essay"};

let S={}; try{ S=JSON.parse(localStorage.getItem("itdeck-scores")||"{}"); }catch(e){}
const save=()=>localStorage.setItem("itdeck-scores",JSON.stringify(S));
let idx=0;

/* ---------- شعار / مونوجرام ---------- */
function initials(){ const p=C.name.trim().split(/\s+/); return ((p[0]||"?")[0]+(p[1]||p[0]||"?")[0]||"").toUpperCase(); }
function logoHTML(big){
  if(C.logo) return `<img class="logo-img ${big?"big":""}" src="${C.logo}" alt="logo">`;
  return `<div class="monogram ${big?"big":""}"><span>${initials()}</span><svg viewBox="0 0 100 100" class="mono-ring"><circle cx="50" cy="50" r="46" fill="none" stroke="url(#lg1)" stroke-width="3" stroke-dasharray="8 6"/><defs><linearGradient id="lg1"><stop offset="0" stop-color="#22d3ee"/><stop offset="1" stop-color="#3b82f6"/></linearGradient></defs></svg></div>`;
}

/* ---------- أيقونات التواصل ---------- */
const IC={
 wa:`<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.2 14.2c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1-3-1-5.3-3.2-6.4-6-.3-.7-.3-1.3-.1-1.7.2-.5.8-1.3 1.2-1.4.3-.1.6 0 .8.3l.9 1.5c.1.3.1.6-.1.8l-.6.8c.6 1.3 1.7 2.4 3 3l.8-.6c.2-.2.5-.2.8-.1l1.6.8c.3.2.4.5.4.8 0 .2-.4.5-1 .7z" fill="currentColor"/></svg>`,
 li:`<svg viewBox="0 0 24 24"><path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.2c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21h-4z" fill="currentColor"/></svg>`,
 ph:`<svg viewBox="0 0 24 24"><path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.7.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.8 21 3 13.2 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.7.1.3 0 .7-.2 1z" fill="currentColor"/></svg>`,
 em:`<svg viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5z" fill="currentColor"/></svg>`
};
function contactHTML(){
  const mk=(href,icon,label,cls)=>`<a class="cicon ${cls}" href="${href}" target="_blank" rel="noopener" title="${label}" aria-label="${label}">${icon}<span class="cicon-tip">${label}</span></a>`;
  return mk("https://wa.me/"+C.whatsapp,IC.wa,"WhatsApp","c-wa")
       + mk(C.linkedin,IC.li,"LinkedIn","c-li")
       + mk("tel:"+C.phone.replace(/\s/g,""),IC.ph,"Call me","c-ph")
       + mk("mailto:"+C.email,IC.em,"Email","c-em");
}

/* ---------- نظام الأسئلة ---------- */
function record(qid,status){ S[qid]=status; save(); refreshChips(); }
function stats(ids){
  let att=0,cor=0; const byLvl={easy:[0,0],medium:[0,0],hard:[0,0],extreme:[0,0]};
  ids.forEach(id=>{ const q=QB[id]; const st=S[id];
    if(st){att++; byLvl[q.level][0]++; if(st==="correct"||st==="known"){cor++; byLvl[q.level][1]++;}} });
  return {n:ids.length,att,cor,byLvl};
}
function chipHTML(ids){
  const s=stats(ids); const pct=s.att? Math.round(s.cor/s.att*100):0;
  return `<span class="sc-ic">🎯</span> Attempted <b>${s.att}/${s.n}</b> · Correct <b>${s.cor}</b>${s.att?` · <b>${pct}%</b>`:""}`;
}
function refreshChips(){
  const map={scoreL1:[...QO["l1-inline"],...QO["l1-end"]],scoreL2:[...QO["l2-inline"],...QO["l2-end"]],scoreC:QO.comp};
  Object.keys(map).forEach(id=>{ const el=document.getElementById(id); if(el) el.innerHTML=chipHTML(map[id]); });
}

function qCard(qid){
  const q=QB[qid]; const [lt,lc]=LVL[q.level];
  const el=document.createElement("div");
  el.className="qcard"; el.dataset.qid=qid;
  let body="";
  if(q.type==="mcq"){ body=`<div class="qopts">${q.options.map((o,i)=>`<button class="qopt" data-i="${i}">${String.fromCharCode(65+i)}. ${o.t}</button>`).join("")}</div>`; }
  else if(q.type==="tf"){ body=`<div class="qopts tf"><button class="qopt" data-v="1">○ True</button><button class="qopt" data-v="0">× False</button></div>`; }
  else if(q.type==="match"){ body=`<div class="qmatch">${q.rows.map(r=>`<div class="qm-row" data-r="${r.id}"><span class="qm-l">${r.id})</span><span class="qm-t">${r.t}</span><span class="qm-chips">${q.choices.map(ch=>`<button class="qm-chip" data-c="${ch.id}">${ch.id}</button>`).join("")}</span></div>`).join("")}</div><button class="btn b-blu qcheck">Check ✔</button>`; }
  else { body=`<button class="btn b-blu qreveal">🔑 Show Model Answer</button>`; }
  el.innerHTML=`
    <div class="qtop"><span class="qbadge ${lc}">${lt}</span><span class="qtype">${TYP[q.type]}</span><span class="qref">Lesson ${q.lesson==="comp"?"1-1 & 1-2":q.lesson}</span></div>
    <div class="qtext">${q.q}</div>${body}
    <div class="qanswer" hidden></div>`;
  const ans=el.querySelector(".qanswer");
  const showAns=(ok)=>{
    ans.hidden=false;
    const aText = q.type==="mcq" ? "Correct answer: "+q.options.find(o=>o.c).t
      : q.type==="tf" ? "Answer: "+(q.answer?"○ True":"× False")
      : q.type==="match" ? "Mapping: "+Object.entries(q.answer).map(([k,v])=>k+"→"+v).join(" · ")
      : "✔ Model answer: "+q.answer;
    ans.innerHTML=`<div class="qa-line ${ok===true?"ok":ok===false?"no":""}">${ok===true?"✔ Correct!":ok===false?"✘ Not quite.":""} ${aText}</div><p class="qa-expl">💡 ${q.expl}</p>`;
    if(q.type==="fill"||q.type==="theory"){
      ans.innerHTML+=`<div class="qself"><span>قيّم نفسك بأمانة:</span><button class="btn b-grn sm" data-mk="known">✔ عرفتها</button><button class="btn b-red sm" data-mk="missed">✘ راجعها</button></div>`;
    }
  };
  if(q.type==="mcq"){
    el.querySelectorAll(".qopt").forEach(b=>b.addEventListener("click",()=>{
      if(el.dataset.done) return; el.dataset.done="1";
      const ok=!!q.options[+b.dataset.i].c;
      el.querySelectorAll(".qopt").forEach(x=>x.disabled=true);
      b.classList.add(ok?"good":"bad");
      const cb=el.querySelector(`.qopt[data-i="${q.options.findIndex(o=>o.c)}"]`); if(cb) cb.classList.add("good");
      record(qid, ok?"correct":"wrong"); showAns(ok);
    }));
  } else if(q.type==="tf"){
    el.querySelectorAll(".qopt").forEach(b=>b.addEventListener("click",()=>{
      if(el.dataset.done) return; el.dataset.done="1";
      const ok=(b.dataset.v==="1")===q.answer;
      el.querySelectorAll(".qopt").forEach(x=>x.disabled=true);
      b.classList.add(ok?"good":"bad"); showAns(ok); record(qid, ok?"correct":"wrong");
    }));
  } else if(q.type==="match"){
    el.querySelectorAll(".qm-row").forEach(row=>{
      row.querySelectorAll(".qm-chip").forEach(ch=>ch.addEventListener("click",()=>{
        if(el.dataset.done) return;
        row.querySelectorAll(".qm-chip").forEach(x=>x.classList.remove("on"));
        ch.classList.add("on"); row.dataset.sel=ch.dataset.c;
      }));
    });
    el.querySelector(".qcheck").addEventListener("click",()=>{
      if(el.dataset.done) return;
      const rows=el.querySelectorAll(".qm-row");
      const allSel=[...rows].every(r=>r.dataset.sel);
      if(!allSel){ el.querySelector(".qcheck").textContent="اختار حرف لكل صف الأول 👆"; return; }
      el.dataset.done="1";
      let allOk=true;
      rows.forEach(r=>{ const ok=r.dataset.sel===q.answer[r.dataset.r]; r.classList.add(ok?"good":"bad"); if(!ok) allOk=false; });
      showAns(allOk); record(qid, allOk?"correct":"wrong");
      el.querySelector(".qcheck").disabled=true;
    });
  } else {
    el.querySelector(".qreveal").addEventListener("click",()=>{
      if(el.dataset.done) return;
      el.querySelector(".qreveal").style.display="none";
      showAns(null);
    });
  }
  ans.addEventListener("click",e=>{
    const mk=e.target.dataset.mk; if(!mk||el.dataset.scored) return; el.dataset.scored="1";
    record(qid,mk);
    e.target.parentElement.innerHTML=`<span class="dim">اتسجلت في نتيجتك ✔</span>`;
  });
  return el;
}

/* ---------- النتائج ---------- */
function lvlBreakHTML(ids){
  const s=stats(ids);
  return ["easy","medium","hard","extreme"].map(L=>{
    const [a,c]=s.byLvl[L]; const tot=ids.filter(i=>QB[i].level===L).length;
    return `<div class="lb-row"><span class="qbadge ${LVL[L][1]}">${LVL[L][0]}</span><div class="lb-bar"><i style="width:${tot?Math.round(c/tot*100):0}%"></i></div><span class="lb-n">${c}/${tot}</span></div>`;
  }).join("");
}
function fillScorePages(){
  const g1=[...QO["l1-inline"],...QO["l1-end"]], g2=[...QO["l2-inline"],...QO["l2-end"]], g3=QO.comp;
  const put=(id,ids,br)=>{ const el=document.getElementById(id); if(el) el.innerHTML=chipHTML(ids);
    if(br){ const b=document.getElementById(br); if(b) b.innerHTML=lvlBreakHTML(ids);} };
  put("scoreL1b",g1,"lvlBreak1"); put("scoreL2b",g2,"lvlBreak2");
  const fa=document.getElementById("finalAll");
  if(fa){
    fa.innerHTML=[["Lesson 1-1",g1],["Lesson 1-2",g2],["Comprehensive",g3]].map(([n,ids])=>{
      const s=stats(ids); const pct=s.att?Math.round(s.cor/s.att*100):0;
      return `<div class="fa-row"><span>${n}</span><div class="lb-bar"><i style="width:${pct}%"></i></div><span class="lb-n">${s.cor}/${s.n} · ${pct}%</span></div>`;
    }).join("")+(()=>{const all=[...g1,...g2,...g3];const s=stats(all);const pct=s.att?Math.round(s.cor/s.att*100):0;
      return `<div class="fa-row total"><span>TOTAL</span><div class="lb-bar"><i style="width:${pct}%"></i></div><span class="lb-n">${s.cor}/${s.n} · ${pct}%</span></div>`;})();
  }
}

/* ---------- الرندر والتنقل ---------- */
const stage=$("#stage");
function render(i,dir){
  idx=Math.max(0,Math.min(SLIDES.length-1,i));
  const s=SLIDES[idx];
  stage.classList.remove("in-r","in-l");
  stage.innerHTML=`<div class="slide ${s.sec}">${s.html}</div>`;
  void stage.offsetWidth;
  stage.classList.add(dir==="back"?"in-l":"in-r");
  // question slots
  $$(".qslot",stage).forEach(sl=>{ sl.replaceWith(qCard(sl.dataset.q)); });
  // sim
  if(s.init && window.SIMS[s.init]) window.SIMS[s.init](stage);
  // goto buttons
  $$("[data-goto]",stage).forEach(b=>b.addEventListener("click",()=>{ const t=SLIDES.findIndex(x=>x.id===b.dataset.goto); if(t>=0) render(t); }));
  // cover / thanks fill
  if(s.id==="cover"){
    $("#coverLogo").innerHTML=logoHTML(true);
    $("#coverCourse").textContent=D.course;
    $("#coverContact").innerHTML=contactHTML();
  }
  if(s.id==="thanks"){
    $("#thanksLogo").innerHTML=logoHTML(true);
    $("#thanksName").textContent=C.name;
    const m=$("#thanksMail"); m.textContent=C.email; m.href="mailto:"+C.email;
    $("#thanksContact").innerHTML=contactHTML();
  }
  if(["l1quizhead","l2quizhead","comphead"].includes(s.id)) refreshChips();
  if(["l1score","l2score","compscore"].includes(s.id)) fillScorePages();
  // chrome
  $("#prog").style.width=((idx+1)/SLIDES.length*100)+"%";
  $("#counter").textContent=(idx+1)+" / "+SLIDES.length;
  const sec=SECS.find(x=>x.id===s.sec);
  $("#secChip").textContent=sec.label; $("#secChip").style.borderColor=sec.color; $("#secChip").style.color=sec.color;
  $("#prevB").disabled=idx===0; $("#nextB").disabled=idx===SLIDES.length-1;
  $("#tocCur").textContent=s.toc;
  buildTOC();
  location.hash="s-"+s.id;
}
const next=()=>{ if(idx<SLIDES.length-1) render(idx+1); };
const prev=()=>{ if(idx>0) render(idx-1,"back"); };

/* ---------- TOC + Overview ---------- */
function buildTOC(){
  const t=$("#tocList"); let h="";
  SECS.forEach(sec=>{
    h+=`<div class="toc-sec" style="--c:${sec.color}">${sec.label}</div>`;
    SLIDES.forEach((s,i)=>{ if(s.sec!==sec.id) return;
      const isQ=s.html.includes("qslot");
      h+=`<button class="toc-item ${i===idx?"cur":""}" data-i="${i}"><span class="toc-n">${i+1}</span>${isQ?"❓ "+(s.toc==="Q"?"Question":s.toc):s.toc}</button>`;
    });
  });
  t.innerHTML=h;
  $$(".toc-item",t).forEach(b=>b.addEventListener("click",()=>{ render(+b.dataset.i); toggleTOC(false); }));
}
function toggleTOC(force){ const el=$("#toc"); const on=force!==undefined?force:!el.classList.contains("open"); el.classList.toggle("open",on); $("#ov").classList.remove("open"); }
function buildOV(){
  const g=$("#ovGrid");
  g.innerHTML=SLIDES.map((s,i)=>{ const sec=SECS.find(x=>x.id===s.sec);
    return `<button class="ov-t" style="--c:${sec.color}" data-i="${i}" title="${s.toc}"><b>${i+1}</b><span>${s.toc}</span></button>`; }).join("");
  $$(".ov-t",g).forEach(b=>b.addEventListener("click",()=>{ render(+b.dataset.i); toggleOV(false); }));
}
function toggleOV(force){ const el=$("#ov"); const on=force!==undefined?force:!el.classList.contains("open"); el.classList.toggle("open",on); $("#toc").classList.remove("open"); }

/* ---------- الخلفية ---------- */
function bg(){
  const cv=$("#bg"), cx=cv.getContext("2d"); let W,H,P=[];
  const SYM=["0","1","</>","{ }","AI","λ","#","∑"];
  const rs=()=>{ W=cv.width=innerWidth; H=cv.height=innerHeight;
    P=Array.from({length:Math.min(90,Math.floor(W*H/16000))},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,r:Math.random()*1.8+.6})); };
  rs(); addEventListener("resize",rs);
  const T=SYM.map((s,i)=>({s,x:Math.random()*innerWidth,y:Math.random()*innerHeight,v:.15+Math.random()*.3,a:.05+Math.random()*.08}));
  const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
  (function loop(){
    cx.clearRect(0,0,W,H);
    // symbols
    cx.font="12px monospace";
    T.forEach(t=>{ cx.fillStyle=`rgba(56,189,248,${t.a})`; cx.fillText(t.s,t.x,t.y); if(!reduce){ t.y-=t.v; if(t.y<-20){t.y=H+20;t.x=Math.random()*W;} } });
    // particles + links
    P.forEach(p=>{ if(!reduce){ p.x+=p.vx; p.y+=p.vy; if(p.x<0||p.x>W)p.vx*=-1; if(p.y<0||p.y>H)p.vy*=-1; }
      cx.beginPath(); cx.arc(p.x,p.y,p.r,0,7); cx.fillStyle="rgba(96,165,250,.5)"; cx.fill(); });
    for(let i=0;i<P.length;i++) for(let j=i+1;j<P.length;j++){
      const a=P[i],b=P[j],d=(a.x-b.x)**2+(a.y-b.y)**2;
      if(d<130*130){ cx.strokeStyle=`rgba(34,211,238,${.14*(1-d/16900)})`; cx.beginPath(); cx.moveTo(a.x,a.y); cx.lineTo(b.x,b.y); cx.stroke(); } }
    requestAnimationFrame(loop);
  })();
}

/* ---------- init ---------- */
document.addEventListener("DOMContentLoaded",()=>{
  $("#hdrName").textContent=C.name;
  $("#hdrTitle").textContent=C.title;
  $("#hdrLogo").innerHTML=logoHTML(false);
  $("#nextB").addEventListener("click",next);
  $("#prevB").addEventListener("click",prev);
  $("#tocB").addEventListener("click",()=>toggleTOC());
  $("#ovB").addEventListener("click",()=>toggleOV());
  buildOV();
  addEventListener("keydown",e=>{
    if(e.target.tagName==="INPUT") return;
    if(e.key==="ArrowRight"||e.key===" "||e.key==="PageDown"){ e.preventDefault(); next(); }
    else if(e.key==="ArrowLeft"||e.key==="PageUp"){ e.preventDefault(); prev(); }
    else if(e.key==="Home") render(0);
    else if(e.key==="End") render(SLIDES.length-1);
    else if(e.key==="Escape"){ toggleTOC(false); toggleOV(false); }
  });
  let tx=0;
  addEventListener("touchstart",e=>{tx=e.touches[0].clientX;},{passive:true});
  addEventListener("touchend",e=>{ const d=e.changedTouches[0].clientX-tx; if(Math.abs(d)>60){ d<0?next():prev(); } },{passive:true});
  $("#resetB").addEventListener("click",()=>{ if(confirm("مسح كل نتائج الأسئلة والبدء من جديد؟")){ S={}; save(); render(idx); } });
  bg();
  // starting slide from hash
  const h=location.hash.replace("#s-","");
  const st=h?SLIDES.findIndex(s=>s.id===h):0;
  render(st>=0?st:0);
});
})();
