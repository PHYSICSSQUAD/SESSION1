/* ============================================================
   محتوى السلايدز — Chapter 1: Information Technology and Society
   كل سلايد: { id, sec, toc, html, init? }
   init = اسم دالة محاكاة معرّفة في sims.js
   ============================================================ */
window.SLIDES = [

/* ============================ OPENING ============================ */
{ id:"cover", sec:"open", toc:"Cover", html:`
  <div class="cover">
    <div class="cover-logo" id="coverLogo"></div>
    <h1 class="cover-title"><span class="t-course" id="coverCourse"></span><span class="t-ch">CHAPTER 1 · Information Technology &amp; Society</span></h1>
    <p class="cover-sub">Interactive Lecture Deck — برمجة · ذكاء اصطناعي · تكنولوجيا</p>
    <div class="cover-contact" id="coverContact"></div>
    <p class="cover-press">Press <b>→</b> or swipe to start</p>
  </div>`},

{ id:"chapter", sec:"open", toc:"Chapter Map", html:`
  <div class="slide-h"><span class="kick">Chapter 1</span><h2>Information Technology and Society</h2>
    <p class="lede">الأربع دروس بتاع الشابتر — أول اتنين هنشرحهم النهارده بالتفصيل.</p></div>
  <div class="chapter-grid">
    <button class="ch-card c-on c-blue" data-goto="l1cover">
      <span class="ch-num">1-1</span><h3>Development of Information Technology and Social Transformation</h3>
      <span class="ch-go">ابدأ الدرس →</span></button>
    <button class="ch-card c-on c-blue" data-goto="l2cover">
      <span class="ch-num">1-2</span><h3>How AI Works</h3>
      <span class="ch-go">ابدأ الدرس →</span></button>
    <div class="ch-card c-off c-vio"><span class="ch-num">1-3</span><h3>AI in Daily Life and Industry</h3><span class="ch-lock">🔒 Coming Soon</span></div>
    <div class="ch-card c-off c-vio"><span class="ch-num">1-4</span><h3>Ethical Issues with AI</h3><span class="ch-lock">🔒 Coming Soon</span></div>
  </div>
  <div class="hint" dir="rtl">💡 قف هنا ثواني وخليهم يتوقعوا: أنهي درس فيهم هيكون الأسهل؟ خلّي الإجابة معاهم لآخر الحصة.</div>`},

/* ============================ LESSON 1-1 ============================ */
{ id:"l1cover", sec:"l1", toc:"1-1 Cover", html:`
  <div class="lesson-cover lc1">
    <div><span class="kick">Lesson 1-1</span><h2>Development of Information Technology and Social Transformation</h2>
    <div class="obj"><h4>🎯 Learning Objectives</h4><ul>
      <li>Explain the <b>major stages</b> in the development of information technology and their impact on society.</li>
      <li>Give examples of <b>social changes</b> and <b>emerging technologies</b> brought about by IT, and explain their characteristics.</li>
    </ul></div></div>
    <img class="limg" src="assets/img/intro-cashless.jpg" alt="cashless payment in daily life">
  </div>`},

{ id:"l1scenario", sec:"l1", toc:"Warm-up: A Day in Egypt", init:"day", html:`
  <div class="slide-h"><span class="kick">Warm-up · Explore</span><h2>An ordinary day — twenty years ago vs today</h2>
  <p class="lede">On an ordinary day, a student in Egypt does four things below. <b>اضغط على كل محطة</b> وشوف إيه اللي اتغير.</p></div>
  <div class="day-strip">
    <button class="day-stop" data-i="0"><span class="day-ic">💬</span><span>Checks messages on an SNS app</span></button>
    <button class="day-stop" data-i="1"><span class="day-ic">🥐</span><span>Pays for breakfast — cashless</span></button>
    <button class="day-stop" data-i="2"><span class="day-ic">🎓</span><span>Joins a lesson online</span></button>
    <button class="day-stop" data-i="3"><span class="day-ic">📦</span><span>Orders a book from an EC shop</span></button>
  </div>
  <div class="day-panel" id="dayPanel"><span class="dim">👆 دوس على أي محطة…</span></div>
  <div class="hint" dir="rtl">💡 اسألهم الأول: “مين فيكم عمل الحاجة دي النهارده؟” وبعدين افتح المحطات واحدة واحدة — دي أجمل فتحة درس.</div>`},

{ id:"l1guide", sec:"l1", toc:"Guiding Question", html:`
  <div class="gq"><span class="gq-q">?</span>
    <h2>How has information technology developed through its major stages, and how has <em>each stage</em> changed society?</h2>
    <p>السؤال ده هو خيط الدرس كله — هنرجع له في آخر سلايد ونقفل بيه.</p>
  </div>`},

{ id:"l1history", sec:"l1", toc:"1. The History of IT", init:"timeline", html:`
  <div class="slide-h"><span class="kick">Point! · Part 1</span><h2>The major stages of IT development</h2>
  <p class="lede">اضغط على أي حقبة في الخط الزمني عشان تفتح تفاصيلها.</p></div>
  <div class="tl" id="tl">
    <button class="tl-node" data-i="0"><span class="tl-era">1940s–60s</span><span class="tl-dot"></span><span class="tl-t">Birth of the computer</span></button>
    <button class="tl-node" data-i="1"><span class="tl-era">1970s–80s</span><span class="tl-dot"></span><span class="tl-t">Personal computers</span></button>
    <button class="tl-node" data-i="2"><span class="tl-era">1990s</span><span class="tl-dot"></span><span class="tl-t">Internet &amp; the Web</span></button>
    <button class="tl-node" data-i="3"><span class="tl-era">2000s</span><span class="tl-dot"></span><span class="tl-t">Smartphones</span></button>
    <button class="tl-node" data-i="4"><span class="tl-era">2010s →</span><span class="tl-dot"></span><span class="tl-t">Cloud computing</span></button>
  </div>
  <div class="tl-panel" id="tlPanel"></div>
  <div class="row2"><img class="limg sm" src="assets/img/it-evolution.jpg" alt="evolution of computers to the cloud"><img class="limg sm" src="assets/img/eniac-era.jpg" alt="first computers filled a room"></div>`},

{ id:"c1102", sec:"l1", toc:"Check ✔", html:`<div class="qslot" data-q="q1102"></div>`},
{ id:"c1103", sec:"l1", toc:"Check ✔", html:`<div class="qslot" data-q="q1103"></div>`},

{ id:"l1moore", sec:"l1", toc:"Moore's Law", init:"moore", html:`
  <div class="slide-h"><span class="kick">Key Law</span><h2>Moore’s Law — why everything got smaller &amp; faster</h2>
  <p class="lede">“The number of transistors on an integrated circuit <b>doubles approximately every two years</b>.” حرّك المؤشر وشوف الأرقام بتنفجر إزاي.</p></div>
  <div class="moore-box">
    <div class="moore-ctl"><input type="range" id="mooreYear" min="1971" max="2025" value="1971" step="1"><span class="moore-read" id="mooreRead"></span></div>
    <svg id="mooreSvg" viewBox="0 0 640 260" class="moore-svg"></svg>
  </div>
  <img class="limg sm center" src="assets/img/moores-law-chart.jpg" alt="Moore's law chart">
  <div class="hint" dir="rtl">💡 قرّبها لهم بمثال مصري: “لو عربية كانت بتضاعف سرعتها كل سنتين، كانت وصلت القمر في أيام” — الإحساس بالضعف الأسي هو المهم مش الحفظ.</div>`},

{ id:"c1101", sec:"l1", toc:"Check ✔", html:`<div class="qslot" data-q="q1101"></div>`},

{ id:"l1limits", sec:"l1", toc:"Physical Limits", html:`
  <div class="slide-h"><span class="kick">The Wall</span><h2>Moore’s Law is hitting a physical limit</h2></div>
  <div class="two-cards">
    <div class="card red"><h4>⚠️ The problem</h4><p>If circuits get any smaller: <b>quantum tunneling</b> — electrons slip through barriers — and <b>leakage current</b> — current escapes unintentionally. Result: hard to get higher performance AND lower power at the same time.</p></div>
    <div class="card grn"><h4>🚀 The new directions</h4><p><b>Parallel processing</b> with multiple processor cores, and <b>quantum computers</b> based on the principles of quantum mechanics.</p></div>
  </div>
  <div class="hint" dir="rtl">💡 شبّه الترانزيستور بأوضة صغيرة أوي لحد ما “الكهرباء تتنطط من الشباك” (tunneling) — الصورة دي بتثبّت المصطلح في دماغهم.</div>`},

{ id:"l1social", sec:"l1", toc:"2. Social Changes", html:`
  <div class="slide-h"><span class="kick">Point! · Part 2</span><h2>Five social changes driven by IT</h2></div>
  <div class="soc-grid">
    <div class="soc"><span>💬</span><h4>SNS</h4><p>Connect &amp; share information; spreads info rapidly.</p></div>
    <div class="soc"><span>🛒</span><h4>E-commerce</h4><p>Buy &amp; sell through the Internet (Amazon, eBay).</p></div>
    <div class="soc"><span>🏠</span><h4>Remote work</h4><p>Work from home or remote locations via the Internet.</p></div>
    <div class="soc"><span>🎓</span><h4>Online learning</h4><p>Classes &amp; materials delivered over the Internet.</p></div>
    <div class="soc"><span>💳</span><h4>Cashless payment</h4><p>Pay with e-money / QR — no cash.</p></div>
  </div>
  <img class="limg sm center" src="assets/img/five-changes.jpg" alt="five social changes">
  <div class="hint" dir="rtl">💡 خلّي كل طالب يختار واحدة من الخمسة ويقول مثال من بيته — التفاعل ده بيحوّل التعريف لحكاية.</div>`},

{ id:"c1104", sec:"l1", toc:"Check ✔", html:`<div class="qslot" data-q="q1104"></div>`},
{ id:"c1105", sec:"l1", toc:"Check ✔", html:`<div class="qslot" data-q="q1105"></div>`},

{ id:"l1auto", sec:"l1", toc:"Autonomous Driving + Edge", init:"edge", html:`
  <div class="slide-h"><span class="kick">Emerging Tech · 1</span><h2>Autonomous driving &amp; edge computing</h2>
  <p class="lede">The car sees a pedestrian. <b>جرّب الزرارين</b> وشوف الفرق بين القرار من السحابة والقرار على المركبة.</p></div>
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
  <img class="limg sm center" src="assets/img/self-driving.jpg" alt="self driving car decides on board">
  <div class="hint" dir="rtl">💡 شغّل وضع السحابة الأول وشخّصهم مع العدّاد، وبعدين شغّل الـ edge — الفرق في “الإحساس” قبل الشرح.</div>`},

{ id:"c1106", sec:"l1", toc:"Check ✔", html:`<div class="qslot" data-q="q1106"></div>`},

{ id:"l1arvr", sec:"l1", toc:"AR / VR", html:`
  <div class="slide-h"><span class="kick">Emerging Tech · 2</span><h2>AR vs VR</h2></div>
  <div class="two-cards">
    <div class="card blu"><h4>📱 AR — Augmented Reality</h4><p>Overlays <b>digital information on real-world images</b>. AR <em>adds</em> digital layers to the real world.</p></div>
    <div class="card vio"><h4>🥽 VR — Virtual Reality</h4><p>Immerses the user in a <b>virtual space generated by a computer</b>. VR <em>replaces</em> the real world.</p></div>
  </div>
  <img class="limg sm center" src="assets/img/ar-vr.jpg" alt="AR vs VR">
  <div class="hint" dir="rtl">💡 جملة الحفظ: “AR بيضيف طبقة على الدنيا، VR بيبدّل الدنيا كلها” — دي إجابة سؤال الـ TF الجاي زي ما هي.</div>`},

{ id:"c1107", sec:"l1", toc:"Check ✔", html:`<div class="qslot" data-q="q1107"></div>`},

{ id:"l1quantum", sec:"l1", toc:"Quantum Computing", init:"quantum", html:`
  <div class="slide-h"><span class="kick">Emerging Tech · 3</span><h2>Quantum computing — the qubit</h2>
  <p class="lede">A classical bit holds <b>one</b> state; a qubit uses <b>superposition</b>. جرّب زرار القياس!</p></div>
  <div class="qtm">
    <div class="qtm-bit"><span class="qtm-lbl">Classical bit</span><div class="bit-ball" id="bitBall">0</div><button class="btn" id="bitFlip">Flip bit</button></div>
    <div class="qtm-qubit"><span class="qtm-lbl">Qubit</span><div class="qubit-ball" id="qubitBall">0+1</div><button class="btn b-vio" id="qubitMeasure">🎲 Measure</button></div>
    <div class="qtm-note" id="qtmNote">The qubit spins in superposition… until you measure it.</div>
  </div>
  <img class="limg sm center" src="assets/img/bit-qubit.jpg" alt="classical bit vs qubit">
  <div class="hint" dir="rtl">💡 شبّه الـ qubit بعملة لسه بتلف في الهوا: طالما بتلف هي “صورة وكوتة معًا” — أول ما تقع (القياس) تبقى حاجة واحدة بس.</div>`},

{ id:"c1108", sec:"l1", toc:"Check ✔", html:`<div class="qslot" data-q="q1108"></div>`},

{ id:"l1worked", sec:"l1", toc:"Worked Example", html:`
  <div class="slide-h"><span class="kick">Worked Example</span><h2>Model solutions — فكّر معاهم خطوة بخطوة</h2></div>
  <details class="we"><summary>(1) Chronological order of stages → ?</summary><p>Birth of the computer (1940s–60s) → Internet (1990s) → smartphones (2000s) → cloud (2010s+). <b class="ok">Answer: B</b></p></details>
  <details class="we"><summary>(2) ○ / × on four statements</summary><p>A ○ exact Moore’s Law · B ○ approaching physical limit · C ○ SNS spreads rapidly · D ✕ EC is Internet trade, not cash in physical stores.</p></details>
  <details class="we"><summary>(3) Match: overlay / drive without human / immerse</summary><p>a → <b class="ok">B (AR)</b> · b → <b class="ok">A (Autonomous driving)</b> · c → <b class="ok">C (VR)</b></p></details>
  <div class="hint" dir="rtl">💡 متفتحش الإجابات إلا لما كل طالب يقرّر إجابته على الورق — القاعدة: “قلمك الأول، بعدين الشاشة”.</div>`},

{ id:"l1think", sec:"l1", toc:"Pause & Think", html:`
  <div class="slide-h"><span class="kick">Pause &amp; Think</span><h2>A fully cashless society?</h2>
  <p class="lede">Name <b>one advantage</b> and <b>one concern</b> of a fully cashless society.</p></div>
  <div class="think-table"><table>
    <tr><th>Group</th><th>Benefit</th><th>Drawback</th></tr>
    <tr><td>A customer paying</td><td>Speed of payment</td><td>Needs a card or a phone</td></tr>
    <tr><td>A small shop owner</td><td>?</td><td>?</td></tr>
    <tr><td>A person with no bank card / phone</td><td>?</td><td>?</td></tr>
  </table></div>
  <div class="hint" dir="rtl">💡 دي نشاط “فكّر كمهندس”: وزّع الجدول على 3 مجموعات ودقيقة لكل صف — بعدين اجمع الإجابات على الشاشة.</div>`},

{ id:"l1key", sec:"l1", toc:"Key Takeaway 1-1", html:`
  <div class="key"><span class="kick">⭐ Key Takeaway</span>
  <h2>IT developed in stages — computers → Internet → smartphones → cloud. At each stage it changed how society <em>communicates, works, learns and pays</em>.</h2>
  <div class="chips"><span>Moore’s Law</span><span>SNS</span><span>e-commerce</span><span>remote work</span><span>online learning</span><span>cashless</span><span>edge computing</span><span>autonomous driving</span><span>AR / VR</span><span>quantum</span></div></div>`},

{ id:"l1quizhead", sec:"l1", toc:"🏁 Lesson 1-1 Quiz", html:`
  <div class="quiz-head"><span class="kick">Lesson 1-1 · Exam Zone</span><h2>اختبار الدرس الأول</h2>
  <p class="lede">11 سؤالًا: اختياري + نظري، مقسّمين <b class="lv-easy">EASY</b> <b class="lv-medium">MEDIUM</b> <b class="lv-hard">HARD</b> <b class="lv-extreme">EXTREME</b>. نتيجة المحاولات بتتحفظ تلقائيًا.</p>
  <div class="score-chip big" id="scoreL1"></div></div>`},

{ id:"c1109", sec:"l1", toc:"Q", html:`<div class="qslot" data-q="q1109"></div>`},
{ id:"c1110", sec:"l1", toc:"Q", html:`<div class="qslot" data-q="q1110"></div>`},
{ id:"c1111", sec:"l1", toc:"Q", html:`<div class="qslot" data-q="q1111"></div>`},
{ id:"c1112", sec:"l1", toc:"Q", html:`<div class="qslot" data-q="q1112"></div>`},
{ id:"c1113", sec:"l1", toc:"Q", html:`<div class="qslot" data-q="q1113"></div>`},
{ id:"c1114", sec:"l1", toc:"Q", html:`<div class="qslot" data-q="q1114"></div>`},
{ id:"c1115", sec:"l1", toc:"Q", html:`<div class="qslot" data-q="q1115"></div>`},
{ id:"c1116", sec:"l1", toc:"Q", html:`<div class="qslot" data-q="q1116"></div>`},
{ id:"c1117", sec:"l1", toc:"Q", html:`<div class="qslot" data-q="q1117"></div>`},
{ id:"c1118", sec:"l1", toc:"Q", html:`<div class="qslot" data-q="q1118"></div>`},
{ id:"c1119", sec:"l1", toc:"Q", html:`<div class="qslot" data-q="q1119"></div>`},

{ id:"l1score", sec:"l1", toc:"📊 Results 1-1", html:`
  <div class="score-page"><span class="kick">Lesson 1-1</span><h2>نتيجتك في الدرس الأول</h2>
  <div class="score-chip big" id="scoreL1b"></div><div id="lvlBreak1" class="lvl-break"></div></div>`},

/* ============================ LESSON 1-2 ============================ */
{ id:"l2cover", sec:"l2", toc:"1-2 Cover", html:`
  <div class="lesson-cover lc2">
    <div><span class="kick">Lesson 1-2</span><h2>How AI Works</h2>
    <div class="obj"><h4>🎯 Learning Objectives</h4><ul>
      <li>Explain what <b>AI</b> is.</li>
      <li>Explain how <b>generative AI</b> is positioned within AI technologies (AI → ML → DL → GenAI).</li>
    </ul></div></div>
    <img class="limg" src="assets/img/student-ai.jpg" alt="student using AI on phone">
  </div>`},

{ id:"l2every", sec:"l2", toc:"AI Around You", html:`
  <div class="slide-h"><span class="kick">Hook</span><h2>When you use a phone, AI is often at work</h2></div>
  <div class="soc-grid g3">
    <div class="soc"><span>🗣️</span><h4>Speech recognition</h4><p>Your assistant hears you.</p></div>
    <div class="soc"><span>🖼️</span><h4>Image recognition</h4><p>Your camera finds faces.</p></div>
    <div class="soc"><span>🌐</span><h4>Translation</h4><p>Apps change one language into another.</p></div>
  </div>
  <img class="limg sm center" src="assets/img/ai-examples.jpg" alt="speech image translation AI examples">
  <p class="lede center">…plus spam filters, product recommendations, and ChatGPT. <b>كل دول AI — بس مش نفس النوع!</b></p>`},

{ id:"c1201", sec:"l2", toc:"Check ✔", html:`<div class="qslot" data-q="q1201"></div>`},
{ id:"c1202", sec:"l2", toc:"Check ✔", html:`<div class="qslot" data-q="q1202"></div>`},

{ id:"l2define", sec:"l2", toc:"What is AI?", html:`
  <div class="slide-h"><span class="kick">Point! · Part 1</span><h2>What is Artificial Intelligence?</h2></div>
  <div class="def-big"><b>AI (Artificial Intelligence)</b> — a general term for technologies that reproduce or perform <b>intelligent human behavior</b> (learning, reasoning, judgment, etc.) on a computer.<div class="dim">e.g., speech recognition, image recognition, translation.</div></div>
  <div class="two-cards">
    <div class="card blu"><h4>🧠 Narrow AI — today</h4><p>Today’s AI is <b>narrow</b>: expert at one task only. A spam filter filters; it can’t drive a car.</p></div>
    <div class="card grn"><h4> How it works</h4><p>Most modern AI doesn’t follow hand-written rules — it <b>learns patterns from data</b> (machine learning).</p></div>
  </div>`},

{ id:"l2hier", sec:"l2", toc:"The AI Hierarchy", init:"hier", html:`
  <div class="slide-h"><span class="kick">Point! · Part 2</span><h2>Nested categories — اضغط على كل طبقة</h2></div>
  <div class="hier-wrap">
    <div class="hier" id="hierBox">
      <button class="h-layer hl0" data-i="0">AI (Artificial Intelligence)<div class="h-layer hl1" data-i="1">Machine Learning<div class="h-layer hl2" data-i="2">Deep Learning<div class="h-layer hl3" data-i="3">Generative AI</div></div></div></button>
    </div>
    <div class="hier-info" id="hierInfo"><span class="dim">👆 دوس على أي طبقة…</span></div>
  </div>
  <img class="limg sm center" src="assets/img/ai-hierarchy.jpg" alt="hierarchy of AI technologies">
  <div class="hint" dir="rtl">💡 رسم الدواير المتداخلة على السبورة مع كل ضغطة بيثبّت فكرة “nested” — الامتحان بيحب كلمة nested دي جدًا.</div>`},

{ id:"c1203", sec:"l2", toc:"Check ✔", html:`<div class="qslot" data-q="q1203"></div>`},
{ id:"c1204", sec:"l2", toc:"Check ✔", html:`<div class="qslot" data-q="q1204"></div>`},
{ id:"c1205", sec:"l2", toc:"Check ✔", html:`<div class="qslot" data-q="q1205"></div>`},

{ id:"l2rules", sec:"l2", toc:"Rules vs Learning", init:"rules", html:`
  <div class="slide-h"><span class="kick">Machine Learning</span><h2>Fixed rules vs learned rules</h2>
  <p class="lede">بدّل بين الوضعين وشوف الفرق في طريقة التفكير.</p></div>
  <div class="rules-box">
    <div class="rules-ctl"><button class="btn on" id="rulesBtn1">📜 Hand-written rules</button><button class="btn" id="rulesBtn2">🤖 Learned from data</button></div>
    <div class="rules-view" id="rulesView"></div>
  </div>
  <img class="limg sm center" src="assets/img/rules-vs-ml.jpg" alt="fixed rules versus learned rules">
  <div class="hint" dir="rtl">💡 اسأل: “لو جت كلمة SPAM مكتوبة SP@M — طريقة القواعد هتقع ليه؟” — دي بوابة الدخول لفكرة التعلم من البيانات.</div>`},

{ id:"l2nn", sec:"l2", toc:"Neural Networks", init:"nn", html:`
  <div class="slide-h"><span class="kick">Deep Learning</span><h2>A neural network — جرّبها عايشة</h2>
  <p class="lede">Modeled after the neurons of the human brain: many simple components connected in layers learn from data. اختار صورة ودوس Run.</p></div>
  <div class="nn-box">
    <svg id="nnSvg" viewBox="0 0 640 300"></svg>
    <div class="nn-ctl">
      <button class="btn b-grn" id="nnRun1">🌿 Healthy leaf</button>
      <button class="btn b-red" id="nnRun2">🍂 Diseased leaf</button>
      <button class="btn b-vio" id="nnScramble">🎲 Scramble weights</button>
      <span class="nn-out" id="nnOut"></span>
    </div>
  </div>
  <img class="limg sm center" src="assets/img/neural-net.jpg" alt="neural network layers">
  <div class="hint" dir="rtl">💡 لعب الـ scramble أهم لحظة في السلايد: الشبكة “المتعلمة” بتصح والعشوائية بتغلط — يعني قيمة التعلم من البيانات بتتشاف قدامهم.</div>`},

{ id:"l2genai", sec:"l2", toc:"Generative AI", init:"genai", html:`
  <div class="slide-h"><span class="kick">Generative AI</span><h2>It creates NEW data — جرّب برومبت</h2></div>
  <div class="gen-box">
    <div class="gen-ctl"><button class="gen-chip" data-p="0">“Write a caption about the Nile”</button><button class="gen-chip" data-p="1">“Draw a pyramid at sunset”</button><button class="gen-chip" data-p="2">“Compose a 3-note ringtone”</button></div>
    <div class="gen-out" id="genOut"><span class="dim">اختار برومبت… وهيطلع ناتج جديد (text / image / audio) — ده الفرق بين التصنيف والتوليد.</span></div>
  </div>
  <img class="limg sm center" src="assets/img/genai.jpg" alt="generative AI creates text images audio">
  <div class="hint" dir="rtl">💡 وضّح إن دي محاكاة شكلها بس — بس الفكرة: الموديل الحقيقي بيولّد نص/صورة/صوت جديد مش بيختار من قائمة.</div>`},

{ id:"c1206", sec:"l2", toc:"Check ✔", html:`<div class="qslot" data-q="q1206"></div>`},

{ id:"l2halluc", sec:"l2", toc:"Hallucination", html:`
  <div class="slide-h"><span class="kick">Think It Through</span><h2>⚠️ Hallucination</h2>
  <p class="lede">Generative AI can produce text that <b>sounds plausible but is factually incorrect</b>. ليه خطر نستخدمه زي ما هو في تقرير مدرسي؟ والمفروض نعمل إيه؟</p></div>
  <div class="two-cards">
    <div class="card red"><h4>Why dangerous</h4><p>Wrong facts wearing a confident tone get submitted as truth.</p></div>
    <div class="card grn"><h4>What to do</h4><p>Verify with reliable sources; cross-check; use AI as a starting point, not a reference.</p></div>
  </div>
  <div class="hint" dir="rtl">💡 ورّيهم مثال حقيقي سريع (لو النت متاح) أو اسأل: “مين صدّق ناتج AI واكتشف غلطه بعدين؟”</div>`},

{ id:"c1207", sec:"l2", toc:"Check ✔", html:`<div class="qslot" data-q="q1207"></div>`},

{ id:"l2worked", sec:"l2", toc:"Worked Example", html:`
  <div class="slide-h"><span class="kick">Worked Example</span><h2>Model solutions</h2></div>
  <details class="we"><summary>(1) ○ / × : ML makes AI work · DL different from ML · GenAI uses DL · AI = ML</summary>
  <p>A ○ · B ✕ (DL is <i>within</i> ML) · C ○ · D ✕ (ML is one technology inside the broad AI).</p></details>
  <details class="we"><summary>(2) Match: patterns / neural networks / new data</summary>
  <p>a → <b class="ok">A (Machine learning)</b> · b → <b class="ok">B (Deep learning)</b> · c → <b class="ok">C (Generative AI)</b></p></details>
  <div class="hint" dir="rtl">💡 خلّيهم هما اللي يصححوا البيان الغلط بصوت عالي — التصحيح بصوت عالي بيثبّت أكتر من القراءة.</div>`},

{ id:"l2key", sec:"l2", toc:"Key Takeaway 1-2", html:`
  <div class="key"><span class="kick">⭐ Key Takeaway</span>
  <h2>AI is the broad field; <em>machine learning</em> sits inside it, <em>deep learning</em> inside machine learning, and today’s <em>generative AI</em> is built on deep learning.</h2>
  <div class="chips"><span>AI</span><span>machine learning</span><span>deep learning</span><span>neural network</span><span>generative AI</span><span>hallucination</span><span>narrow AI</span></div></div>`},

{ id:"l2quizhead", sec:"l2", toc:"🏁 Lesson 1-2 Quiz", html:`
  <div class="quiz-head"><span class="kick">Lesson 1-2 · Exam Zone</span><h2>اختبار الدرس الثاني</h2>
  <p class="lede">10 أسئلة من الكتاب + أفكاره، بنفس تقسيمة المستويات.</p>
  <div class="score-chip big" id="scoreL2"></div></div>`},

{ id:"c1208", sec:"l2", toc:"Q", html:`<div class="qslot" data-q="q1208"></div>`},
{ id:"c1209", sec:"l2", toc:"Q", html:`<div class="qslot" data-q="q1209"></div>`},
{ id:"c1210", sec:"l2", toc:"Q", html:`<div class="qslot" data-q="q1210"></div>`},
{ id:"c1211", sec:"l2", toc:"Q", html:`<div class="qslot" data-q="q1211"></div>`},
{ id:"c1212", sec:"l2", toc:"Q", html:`<div class="qslot" data-q="q1212"></div>`},
{ id:"c1213", sec:"l2", toc:"Q", html:`<div class="qslot" data-q="q1213"></div>`},
{ id:"c1214", sec:"l2", toc:"Q", html:`<div class="qslot" data-q="q1214"></div>`},
{ id:"c1215", sec:"l2", toc:"Q", html:`<div class="qslot" data-q="q1215"></div>`},
{ id:"c1216", sec:"l2", toc:"Q", html:`<div class="qslot" data-q="q1216"></div>`},
{ id:"c1217", sec:"l2", toc:"Q", html:`<div class="qslot" data-q="q1217"></div>`},

{ id:"l2score", sec:"l2", toc:"📊 Results 1-2", html:`
  <div class="score-page"><span class="kick">Lesson 1-2</span><h2>نتيجتك في الدرس الثاني</h2>
  <div class="score-chip big" id="scoreL2b"></div><div id="lvlBreak2" class="lvl-break"></div></div>`},

/* ============================ COMPREHENSIVE ============================ */
{ id:"comphead", sec:"comp", toc:"🏆 Comprehensive Exam", html:`
  <div class="quiz-head"><span class="kick">After both lessons</span><h2>الامتحان الشامل</h2>
  <p class="lede">14 سؤالًا بيمسكوا الدرسين مع بعض: <b class="lv-easy">4 EASY</b> · <b class="lv-medium">5 MEDIUM</b> · <b class="lv-hard">3 HARD</b> · <b class="lv-extreme">2 EXTREME</b>. أسئلة الـ EXTREME محتاجة تفكير مهندس حقيقي 🧠.</p>
  <div class="score-chip big" id="scoreC"></div></div>`},

{ id:"cc01", sec:"comp", toc:"Q", html:`<div class="qslot" data-q="qc01"></div>`},
{ id:"cc02", sec:"comp", toc:"Q", html:`<div class="qslot" data-q="qc02"></div>`},
{ id:"cc03", sec:"comp", toc:"Q", html:`<div class="qslot" data-q="qc03"></div>`},
{ id:"cc04", sec:"comp", toc:"Q", html:`<div class="qslot" data-q="qc04"></div>`},
{ id:"cc05", sec:"comp", toc:"Q", html:`<div class="qslot" data-q="qc05"></div>`},
{ id:"cc06", sec:"comp", toc:"Q", html:`<div class="qslot" data-q="qc06"></div>`},
{ id:"cc07", sec:"comp", toc:"Q", html:`<div class="qslot" data-q="qc07"></div>`},
{ id:"cc08", sec:"comp", toc:"Q", html:`<div class="qslot" data-q="qc08"></div>`},
{ id:"cc09", sec:"comp", toc:"Q", html:`<div class="qslot" data-q="qc09"></div>`},
{ id:"cc10", sec:"comp", toc:"Q", html:`<div class="qslot" data-q="qc10"></div>`},
{ id:"cc11", sec:"comp", toc:"Q", html:`<div class="qslot" data-q="qc11"></div>`},
{ id:"cc12", sec:"comp", toc:"Q", html:`<div class="qslot" data-q="qc12"></div>`},
{ id:"cc13", sec:"comp", toc:"Q", html:`<div class="qslot" data-q="qc13"></div>`},
{ id:"cc14", sec:"comp", toc:"Q", html:`<div class="qslot" data-q="qc14"></div>`},

{ id:"compscore", sec:"comp", toc:"🏆 Final Results", html:`
  <div class="score-page"><span class="kick">Chapter 1</span><h2>النتيجة النهائية للشابتر</h2>
  <div id="finalAll" class="final-all"></div>
  <div class="hint" dir="rtl">💡 قاعدة تصحيح سريعة: 85%+ ممتاز · 70% جيد جدًا · 50% محتاج مراجعة الدرس اللي وقع فيه.</div></div>`},

/* ============================ CLOSING ============================ */
{ id:"thanks", sec:"end", toc:"Thank You", html:`
  <div class="cover thanks">
    <div class="cover-logo big" id="thanksLogo"></div>
    <h1 class="thanks-name" id="thanksName"></h1>
    <p class="thanks-ar" dir="rtl">شكرًا لحضوركم 🙏 — أي سؤال أو متابعة، كلموني على الإيميل:</p>
    <a class="thanks-mail" id="thanksMail" href="#"></a>
    <div class="cover-contact" id="thanksContact"></div>
  </div>`}
];

/* أقسام الديك للـ TOC والهيدر */
window.SECTIONS = [
  {id:"open", label:"Opening", color:"#22d3ee"},
  {id:"l1",   label:"Lesson 1-1", color:"#3b82f6"},
  {id:"l2",   label:"Lesson 1-2", color:"#60a5fa"},
  {id:"comp", label:"Comprehensive", color:"#fbbf24"},
  {id:"end",  label:"Closing", color:"#22d3ee"}
];
