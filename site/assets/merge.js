/* ============================================================
   MERGE LAYER — يبني الترتيب النهائي المطلوب
   spine الشرح = CURRENT 1 → REF 2,3,4 → CURRENT 6,9,11 →
   REF 10,12,14 → CURRENT 19 → REF 19,27,28,29,30,32,33 →
   CURRENT 48,50
   الأسئلة/الكويزات/النتائج بتتوزّع حوالين الـspine من غير ما تكسره.
   ============================================================ */
(function(){
const OLD = {}; window.SLIDES.forEach(s=>OLD[s.id]=s);
const kt=(t,d)=>`<div class="keyterm-box"><b>${t}</b><span>${d}</span></div>`;
const tip=(t,d)=>`<div class="tip-box"><b>${t}</b>${d}</div>`;
const CHK=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`;
const obj=l=>`<ul class="obj-list">${l.map(x=>`<li>${CHK}<span>${x}</span></li>`).join("")}</ul>`;
const hint=t=>`<div class="hint" dir="rtl">💡 ${t}</div>`;
const head=(eye,title,lede)=>`<div class="slide-h"><span class="kick">${eye}</span><h2>${title}</h2>${lede?`<p class="lede">${lede}</p>`:""}</div>`;
const fig=(src,alt,cap)=>`<figure class="fig"><img class="limg" src="assets/img/${src}" alt="${alt}">${cap?`<figcaption>${cap}</figcaption>`:""}</figure>`;

/* ---------- REF 2 · Chapter Menu ---------- */
const R_chapter = { id:"chapter", sec:"open", toc:"Chapter Menu", html:`
  <div class="chapter-menu">
    <div class="chapter-eyebrow">Chapter 1</div>
    <h1>Information Technology and Society</h1>
    <div class="lesson-grid">
      <div class="lesson-card blue" data-goto="l1cover"><div class="glow"></div>
        <div class="num">1-1</div>
        <div class="lname">Development of Information Technology and Social Transformation</div>
        <div class="status">${CHK} Ready — click to open</div></div>
      <div class="lesson-card blue" data-goto="l2cover"><div class="glow"></div>
        <div class="num">1-2</div>
        <div class="lname">How AI Works</div>
        <div class="status">${CHK} Ready — click to open</div></div>
      <div class="lesson-card violet"><div class="glow"></div>
        <div class="num">1-3</div>
        <div class="lname">AI in Daily Life and Industry</div>
        <div class="status">🔒 coming soon</div></div>
      <div class="lesson-card violet"><div class="glow"></div>
        <div class="num">1-4</div>
        <div class="lname">Ethical Issues with AI</div>
        <div class="status">🔒 coming soon</div></div>
    </div>
  </div>`};

/* ---------- REF 3 · Lesson 1-1 cover ---------- */
const R_l1cover = { id:"l1cover", sec:"l1", toc:"1-1 Cover", html:`
  <div class="lesson-cover-ref">
    <div class="eyebrow"><span class="bar"></span>Lesson 1-1</div>
    <h1 class="lc-title">Development of Information Technology and Social Transformation</h1>
    <div class="lc-grid">
      <div class="panel"><div class="panel-title">Learning Objectives</div>
        ${obj([
          "Explain the major stages in the development of information technology and their impact on society.",
          "Give examples of social changes and emerging technologies brought about by information technology, and explain their characteristics."
        ])}</div>
      ${fig("intro-cashless.jpg","a day powered by information technology")}
    </div>
  </div>`};

/* ---------- REF 4 · Guiding Question (1-1) ---------- */
const R_l1guide = { id:"l1guide", sec:"l1", toc:"Guiding Question", html:`
  ${head("Guiding Question","How has information technology developed through its major stages, and how has each stage changed society?")}
  <div class="two-col">
    <div class="body-text">
      <p>On an ordinary day, a student in Egypt checks messages on an SNS app, pays for breakfast with a cashless app, joins a lesson through online learning, and orders a book from an e-commerce (EC) shop.</p>
      <p>Twenty years ago, most of this was not possible. Information technology has developed through a series of stages — from the first computers to cloud computing — and at each stage it has changed the way people communicate, work, learn, and pay.</p>
    </div>
    <div>
      ${kt("Key Fact","At each stage, information technology introduced a new technology or service and also changed how society communicates, works, and does business.")}
      <div class="chips">${["Moore's Law","SNS","e-commerce","remote work","online learning","cashless payment","edge computing","autonomous driving","AR / VR","quantum computing"].map(c=>`<span>${c}</span>`).join("")}</div>
      ${tip("Explore · In Pairs","With a partner, look at the five time periods you're about to see. For each period, name one device or service from that era that you still use or hear about today. Then predict: which stage changed daily life the most — and why?")}
    </div>
  </div>
  ${hint("خلّي كل تلاتة يتوقعوا قبل ما تفتح الخط الزمني — التوقع الغلط بيثبّت المعلومة أكتر من الشرح المباشر.")}`};

/* ---------- REF 10 · Social Changes (flip cards) ---------- */
const R_l1social = { id:"l1social", sec:"l1", toc:"2. Social Changes", init:"flip", html:`
  ${head("Point 2","Social Changes Resulting from Information Technology","Five changes driven by IT. اضغط على أي كارت عشان يتقلب ويوريك التعريف.")}
  <div class="flip-grid">
    <div class="flip-card" data-i="0"><div class="flip-inner">
      <div class="flip-face flip-front"><div class="fic">🔗</div><div class="fname">SNS</div></div>
      <div class="flip-face flip-back"><div class="fdef">Services that allow users to connect with each other and post and share information. Highly effective at spreading information rapidly.</div><div class="fex">Social Networking Service</div></div></div></div>
    <div class="flip-card" data-i="1"><div class="flip-inner">
      <div class="flip-face flip-front"><div class="fic">🛒</div><div class="fname">E-commerce</div></div>
      <div class="flip-face flip-back"><div class="fdef">Buying and selling goods and services through the Internet.</div><div class="fex">e.g. Amazon, eBay</div></div></div></div>
    <div class="flip-card" data-i="2"><div class="flip-inner">
      <div class="flip-face flip-front"><div class="fic">🏠</div><div class="fname">Remote work</div></div>
      <div class="flip-face flip-back"><div class="fdef">A working style in which work is performed from home or other remote locations using the Internet.</div><div class="fex">Work from anywhere</div></div></div></div>
    <div class="flip-card" data-i="3"><div class="flip-inner">
      <div class="flip-face flip-front"><div class="fic">📖</div><div class="fname">Online learning</div></div>
      <div class="flip-face flip-back"><div class="fdef">A learning style in which classes and study materials are delivered using the Internet.</div><div class="fex">Study anywhere</div></div></div></div>
    <div class="flip-card" data-i="4"><div class="flip-inner">
      <div class="flip-face flip-front"><div class="fic">💳</div><div class="fname">Cashless payment</div></div>
      <div class="flip-face flip-back"><div class="fdef">A system for making payments using electronic money, QR codes, etc., without using cash.</div><div class="fex">e.g. cards, mobile pay</div></div></div></div>
  </div>
  ${fig("five-changes.jpg","five social changes brought by information technology")}
  ${hint("اقلب كارت واحد بس وسيبهم يخمّنوا الباقي — بعدين اقلبهم كلهم للمراجعة السريعة في آخر الحصة.")}`};

/* ---------- REF 12 · Autonomous driving + Edge ---------- */
const R_l1auto = { id:"l1auto", sec:"l1", toc:"Autonomous Driving + Edge", init:"edge", html:`
  ${head("Point 3 · Emerging Technologies","Autonomous Driving &amp; Edge Computing")}
  ${kt("Edge computing","Processing data on the device itself, instantly, instead of sending it to the cloud.")}
  <p class="body-text">Autonomous driving uses AI to drive a vehicle without human operation — cameras and sensors recognize the surroundings and the car makes driving decisions. Because a delay of even 0.1 seconds can cause an accident, edge computing is used. جرّب الوضعين تحت.</p>
  <div class="edge-box">
    <div class="edge-stage" id="edgeStage">
      <div class="edge-car" id="edgeCar">🚗</div>
      <div class="edge-ped" id="edgePed">🚶</div>
      <div class="edge-cloud">☁️ Cloud</div>
      <div class="edge-packet" id="edgePacket"></div>
      <div class="edge-verdict" id="edgeVerdict"></div>
    </div>
    <div class="edge-ctl">
      <button class="btn b-red" id="edgeCloud">☁️ Send to cloud</button>
      <button class="btn b-grn" id="edgeEdge">⚡ Decide on board (edge)</button>
      <span class="edge-time" id="edgeTime">t = 0.00 s</span>
    </div>
  </div>
  ${fig("self-driving.jpg","a self-driving car decides on board using edge computing")}
  ${hint("قِس بالثواني قدامهم: 0.40 ثانية سحابة مقابل 0.02 ثانية على العربية — الفرق ده هو الفرق بين فرملة وحادثة.")}`};

/* ---------- REF 14 · AR / VR ---------- */
const R_l1arvr = { id:"l1arvr", sec:"l1", toc:"AR / VR", init:"arvr", html:`
  ${head("Point 3 · continued","AR / VR","Two related but different technologies. بدّل بينهم تحت.")}
  <div class="sim-panel">
    <div class="sim-toggle-row">
      <button class="sim-btn active" data-mode="ar">Augmented Reality (AR)</button>
      <button class="sim-btn" data-mode="vr">Virtual Reality (VR)</button>
    </div>
    <div class="sim-stage">
      <div class="arvr-frame ar" id="arvrFrame">
        <div class="ic" style="top:14px;left:16px">📍</div>
        <div class="ic" style="top:60px;right:20px">💬</div>
        <div class="ic" style="bottom:16px;left:60px">🧭</div>
      </div>
    </div>
    <div class="sim-readout" id="arvrReadout"><b>AR</b> overlays digital information (pins, labels, chat bubbles) on top of the real, camera-seen world.</div>
  </div>
  ${fig("ar-vr.jpg","AR overlays information on reality, VR immerses you in a virtual space")}
  ${hint("AR = بتضيف على الواقع (فلتر الكاميرا). VR = بتستبدل الواقع (نظارة). الفرق ده بيتسأل عليه كتير.")}`};

/* ---------- REF 19 · 1-1 Exercises header ---------- */
const R_l1ex = { id:"l1quizhead", sec:"l1", toc:"🏁 Lesson 1-1 Quiz", html:`
  <div class="exheader">
    <div class="tagline">Lesson 1-1 · Practice</div>
    <h1>Let's Check What You Know</h1>
    <p>A short set of questions covering everything in this lesson — Easy to Extreme, نص اختياري ونص نظري بإجابات نموذجية من الكتاب.</p>
    <div class="level-bar">
      <span class="level-pill lv-easy">Easy</span><span class="level-pill lv-medium">Medium</span>
      <span class="level-pill lv-hard">Hard</span><span class="level-pill lv-extreme">Extreme</span>
    </div>
    <div class="score-chip big" id="scoreL1"></div>
  </div>`};

/* ---------- REF 27 · Lesson 1-2 cover ---------- */
const R_l2cover = { id:"l2cover", sec:"l2", toc:"1-2 Cover", html:`
  <div class="lesson-cover-ref">
    <div class="eyebrow"><span class="bar"></span>Lesson 1-2</div>
    <h1 class="lc-title">How AI Works</h1>
    <div class="lc-grid">
      <div class="panel"><div class="panel-title">Learning Objectives</div>
        ${obj(["Explain what AI is.","Explain how generative AI is positioned within AI technologies."])}</div>
      ${fig("ai-examples.jpg","AI is already around you every day")}
    </div>
  </div>`};

/* ---------- REF 28 · Guiding Question (1-2) ---------- */
const R_l2guide = { id:"l2guide", sec:"l2", toc:"Guiding Question", html:`
  ${head("Guiding Question","What is AI, and how are machine learning, deep learning, and generative AI related?")}
  <div class="two-col">
    <div class="body-text">
      <p>When you use a phone, AI is often at work. A spam filter sorts your email, a store recommends products you might buy, a translation app changes one language into another, and ChatGPT generates text from a prompt.</p>
      <p>These are all examples of AI, but they are not all the same kind. AI includes machine learning, within machine learning is deep learning, and today's generative AI systems are built on deep learning — a series of nested technologies, each more specialized than the last.</p>
    </div>
    <div>${tip("Explore · In Pairs","With a partner, list three tasks a phone or computer does for you that seem to need \"intelligence\" — for example sorting spam, recommending a video, or translating text. Then predict: does the computer follow fixed rules, or does it learn from examples?")}</div>
  </div>
  ${hint("اسألهم: مين فيكم النهارده استخدم AI من غير ما ياخد باله؟ (الكيبورد اللي بيكمّل الكلمة، فلتر الكاميرا، اقتراحات يوتيوب).")}`};

/* ---------- REF 29 · What is AI? ---------- */
const R_l2define = { id:"l2define", sec:"l2", toc:"What is AI?", html:`
  ${head("Point 1","What is Artificial Intelligence (AI)?")}
  <div class="two-col">
    <div>
      ${kt("AI (Artificial Intelligence)","A general term for technologies that reproduce or perform intelligent human behavior — learning, reasoning, judgment, etc. — on a computer.")}
      <p class="body-text"><b>Examples:</b> speech recognition, image recognition, translation.</p>
    </div>
    <div class="hero-visual">
      <svg viewBox="0 0 200 140"><rect x="10" y="20" width="180" height="100" rx="14" fill="none" stroke="#3b82f6" stroke-width="1.5" opacity=".5"/><circle cx="60" cy="70" r="22" fill="none" stroke="#22d3ee" stroke-width="1.5"/><circle cx="140" cy="70" r="22" fill="none" stroke="#8b5cf6" stroke-width="1.5"/><path d="M82 70h36" stroke="#22d3ee" stroke-width="1.5" stroke-dasharray="4 4"/><text x="60" y="75" fill="#eaf2ff" font-size="9" text-anchor="middle">Data</text><text x="140" y="75" fill="#eaf2ff" font-size="9" text-anchor="middle">Judgment</text></svg>
    </div>
  </div>
  ${hint("AI مش حاجة واحدة — دي مظلة كبيرة. ثبّت الكلمة دي قبل ما تدخل على الطبقات.")}`};

/* ---------- REF 32 · Machine Learning & Deep Learning ---------- */
const R_l2ml = { id:"l2ml", sec:"l2", toc:"Machine Learning &amp; Deep Learning", html:`
  ${head("Point 2 · continued","Machine Learning &amp; Deep Learning")}
  <div class="two-col">
    <div>
      ${kt("Machine learning","One of the learning technologies that makes AI work. It learns patterns from data to make predictions and judgments.")}
      <p class="body-text"><b>Examples:</b> spam filters, product recommendations.</p>
      ${kt("Deep learning","An advanced technology within machine learning that uses neural networks. It learns complex patterns using large-scale data.")}
      <p class="body-text"><b>Examples:</b> image analysis for autonomous driving, speech synthesis.</p>
    </div>
    <div>${tip("Neural network","A system modeled after the workings of nerve cells (neurons) in the human brain. By connecting many components, it learns from data and becomes capable of making complex judgments — the core technology behind recent advances in AI.")}
    ${fig("rules-vs-ml.jpg","hand-written rules versus learning from data")}</div>
  </div>
  ${hint("الفرق العملي: البرمجة العادية انت بتكتب القاعدة، والـML بتدّيه أمثلة وهو يطلّع القاعدة بنفسه.")}`};

/* ---------- الترتيب النهائي ---------- */
const P = id => OLD[id];
const ORDER = [
  /* ===== OPENING ===== */
  P("cover"),                 // CURRENT 1
  R_chapter,                  // REF 2
  /* ===== LESSON 1-1 ===== */
  R_l1cover,                  // REF 3
  R_l1guide,                  // REF 4
  P("l1history"),             // CURRENT 6
  P("c1102"), P("c1103"),
  P("l1moore"),               // CURRENT 9
  P("c1101"),
  P("l1limits"),              // CURRENT 11
  R_l1social,                 // REF 10
  P("c1104"), P("c1105"),
  R_l1auto,                   // REF 12
  P("c1106"),
  R_l1arvr,                   // REF 14
  P("c1107"),
  P("l1quantum"),             // CURRENT 19
  P("c1108"),
  R_l1ex,                     // REF 19
  P("c1109"),P("c1110"),P("c1111"),P("c1112"),P("c1113"),P("c1114"),
  P("c1115"),P("c1116"),P("c1117"),P("c1118"),P("c1119"),
  P("l1score"),
  /* ===== LESSON 1-2 ===== */
  R_l2cover,                  // REF 27
  R_l2guide,                  // REF 28
  R_l2define,                 // REF 29
  P("l2hier"),                // REF 30 (نفس المحتوى — محاكاة الطبقات عندنا)
  P("c1201"),P("c1202"),P("c1203"),P("c1204"),P("c1205"),
  R_l2ml,                     // REF 32
  P("l2nn"),                  // REF 33
  P("l2genai"),               // CURRENT 48
  P("c1206"),
  P("l2halluc"),              // CURRENT 50
  P("c1207"),
  P("l2quizhead"),
  P("c1208"),P("c1209"),P("c1210"),P("c1211"),P("c1212"),P("c1213"),
  P("c1214"),P("c1215"),P("c1216"),P("c1217"),
  P("l2score"),
  /* ===== COMPREHENSIVE ===== */
  P("comphead"),
  P("cc01"),P("cc02"),P("cc03"),P("cc04"),P("cc05"),P("cc06"),P("cc07"),
  P("cc08"),P("cc09"),P("cc10"),P("cc11"),P("cc12"),P("cc13"),P("cc14"),
  P("compscore"),
  /* ===== END ===== */
  P("thanks")
].filter(Boolean);

/* ---- سلايدات أسئلة للبنك المضاف من المرجع ---- */
function qSlide(id,qid,toc,sec){ return {id:id,sec:sec,toc:toc,html:`<div class="qslot" data-q="${qid}"></div>`}; }
function insertAfter(afterId, slide){
  const i=ORDER.findIndex(s=>s.id===afterId);
  if(i>=0) ORDER.splice(i+1,0,slide);
}
insertAfter("c1106", qSlide("cr1101","r1101","Check ✔","l1"));
insertAfter("c1108", qSlide("cr1102","r1102","Check ✔","l1"));
insertAfter("c1119", qSlide("cr1103","r1103","Q","l1"));
insertAfter("c1205", qSlide("cr1201","r1201","Check ✔","l2"));
insertAfter("l2nn",  qSlide("cr1202","r1202","Check ✔","l2"));
insertAfter("c1207", qSlide("cr1203","r1203","Check ✔","l2"));
insertAfter("comphead", qSlide("crc04","rc04","Q","comp"));
insertAfter("cc14",  qSlide("crc01","rc01","Q","comp"));
insertAfter("crc01", qSlide("crc02","rc02","Q","comp"));
insertAfter("crc02", qSlide("crc03","rc03","Q","comp"));

window.SLIDES = ORDER;
})();
