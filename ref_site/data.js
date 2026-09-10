/* =========================================================
   CONFIG — edit these with your own details
========================================================= */
const CONFIG = {
  teacherName: "Your Name Here",
  logoText: "LOGO",
  whatsapp: "https://wa.me/200000000000",
  linkedin: "https://linkedin.com/in/your-profile",
  phone: "tel:+200000000000",
  email: "you@email.com"
};

/* =========================================================
   ICONS (inline SVG strings)
========================================================= */
const ICO = {
  whatsapp:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm5.7 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.1.1-1.8-.1-.4-.1-.9-.3-1.6-.6-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8 0-1.3.7-2 1-2.2.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.3 0 .5l-.4.5c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.4.1.6-.1l.6-.7c.2-.3.4-.2.7-.1l1.8.9c.2.1.4.2.5.3.1.2.1.9-.1 1.7Z"/></svg>`,
  linkedin:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM5 8h4v11H5zm7 0h3.8v1.6h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V19h-4v-4.9c0-1.17-.02-2.68-1.63-2.68-1.64 0-1.9 1.28-1.9 2.6V19h-4z"/></svg>`,
  phone:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z"/></svg>`,
  check:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
  arrowL:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>`,
  arrowR:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>`,
  menu:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>`,
  close:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>`,
  chevron:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>`,
  home:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/></svg>`,
  sns:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 10.6l6.8-3.9M8.6 13.4l6.8 3.9"/></svg>`,
  cart:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>`,
  home2:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/></svg>`,
  book:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/></svg>`,
  card:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/></svg>`
};

/* helper */
function kt(title, text){return `<div class="keyterm-box"><b>${title}</b><span>${text}</span></div>`;}
function tip(title,text){return `<div class="tip-box"><b>${title}</b>${text}</div>`;}
function obj(list){return `<ul class="obj-list">${list.map(l=>`<li>${ICO.check}<span>${l}</span></li>`).join('')}</ul>`;}

/* =========================================================
   SLIDES DATA
   type drives the renderer. navLabel/section used for TOC.
========================================================= */
const SLIDES = [];

/* ---------- 0. COVER ---------- */
SLIDES.push({type:'cover', section:'Start', navLabel:'Cover'});

/* ---------- 1. CHAPTER MENU ---------- */
SLIDES.push({type:'chapterMenu', section:'Start', navLabel:'Chapter Menu'});

/* =========================================================
   LESSON 1-1 — Development of IT and Social Transformation
========================================================= */
const L1 = 'Lesson 1-1';
SLIDES.push({type:'lessonCover', section:L1, navLabel:'1-1 Cover',
  code:'Lesson 1-1', title:'Development of Information Technology and Social Transformation',
  objectives:[
    'Explain the major stages in the development of information technology and their impact on society.',
    'Give examples of social changes and emerging technologies brought about by information technology, and explain their characteristics.'
  ], color:'blue'});

SLIDES.push({type:'content', section:L1, navLabel:'Guiding Question',
  eyebrow:'Guiding Question', title:'How has information technology developed through its major stages, and how has each stage changed society?',
  body:`<p>On an ordinary day, a student in Egypt checks messages on an SNS app, pays for breakfast with a cashless app, joins a lesson through online learning, and orders a book from an e-commerce (EC) shop.</p>
  <p>Twenty years ago, most of this was not possible. Information technology has developed through a series of stages — from the first computers to cloud computing — and at each stage it has changed the way people communicate, work, learn, and pay.</p>`,
  side: kt('Key Fact','At each stage, information technology introduced a new technology or service and also changed how society communicates, works, and does business.')
    + `<div class="chips">${['Moore\'s Law','SNS','e-commerce','remote work','online learning','cashless payment','edge computing','autonomous driving','AR / VR','quantum computing'].map(c=>`<span class="chip">${c}</span>`).join('')}</div>`
});

SLIDES.push({type:'content', section:L1, navLabel:'Explore Activity',
  eyebrow:'Explore · In Pairs', title:'Before we read on...',
  body:`<p>With a partner, look at the five time periods you're about to see. For each period, name one device or service from that era that you still use or hear about today.</p>
  <p>Then predict: which stage changed daily life the most — and why?</p>`,
  side: tip('Discuss first','Make your prediction before the next slide reveals the answer. There is no wrong guess here — it primes you for the timeline ahead.')
});

SLIDES.push({type:'timeline', section:L1, navLabel:'History of IT',
  eyebrow:'Point 1', title:'The History of Information Technology (IT)',
  intro:'The major stages in the development of IT are summarized below. Click a stage to reveal its impact on society.',
  stages:[
    {period:'1940s–60s', tech:'Birth of the computer (ENIAC, vacuum tubes)', impact:'Mainly used for military and scientific computation.'},
    {period:'1970s–80s', tech:'Spread of personal computers (PCs)', impact:'Beginning of personal computer use.'},
    {period:'1990s', tech:'Commercialization of the Internet; the Web', impact:'Globalization of information; spread of email.'},
    {period:'2000s', tech:'Rise of smartphones (iPhone, etc.)', impact:'Explosive spread of mobile Internet.'},
    {period:'2010s onward', tech:'Spread of cloud computing', impact:'Large-scale data analysis and AI; "IT as a service" becomes widespread.'}
  ]
});

SLIDES.push({type:'question', section:L1, navLabel:'Q · Stage Order', level:'check', kind:'mcq',
  prompt:'Which option lists the stages of IT development in the correct chronological order?',
  options:[
    'Birth of the computer → Rise of smartphones → Commercialization of the Internet → Spread of cloud computing',
    'Birth of the computer → Commercialization of the Internet → Rise of smartphones → Spread of cloud computing',
    'Commercialization of the Internet → Birth of the computer → Spread of cloud computing → Rise of smartphones',
    'Rise of smartphones → Commercialization of the Internet → Birth of the computer → Spread of cloud computing'
  ], correct:1,
  explain:'The correct order is: Birth of the computer (1940s–60s) → Commercialization of the Internet (1990s) → Rise of smartphones (2000s) → Spread of cloud computing (2010s onward).'
});

SLIDES.push({type:'mooreChart', section:L1, navLabel:'Moore\'s Law',
  eyebrow:'Point 1 · continued', title:'Moore\'s Law',
  intro:`${kt('Moore\'s Law','The empirical observation that "the number of transistors on an integrated circuit doubles approximately every two years." This held largely accurate for many years, and computing power increased dramatically.')}
  <p class="body-text">Toggle the trend line below to see how real processors have tracked this ~2-year doubling curve, from the Intel 4004 (1971) to the Apple M1 Ultra (2022).</p>`
});

SLIDES.push({type:'question', section:L1, navLabel:'Q · Moore\'s Limit', level:'check', kind:'theory',
  prompt:'In recent years, why has it become difficult to keep shrinking transistors — and what two directions are being pursued instead?',
  answer:'Miniaturization is approaching a physical limit. If circuits are made any smaller, problems arise such as the quantum tunneling effect (electrons slip through barriers) and leakage current (current escapes unintentionally), making it hard to achieve both higher performance and lower power consumption at once. In response, new directions are being pursued: parallel processing using multiple processor cores, and quantum computers based on the principles of quantum mechanics.'
});

SLIDES.push({type:'flipcards', section:L1, navLabel:'Social Changes',
  eyebrow:'Point 2', title:'Social Changes Resulting from Information Technology',
  intro:'Five changes driven by IT. Click each card to flip it and reveal the definition.',
  cards:[
    {icon:ICO.sns, name:'SNS', def:'Services that allow users to connect with each other and post and share information. Highly effective at spreading information rapidly.', ex:'Social Networking Service'},
    {icon:ICO.cart, name:'E‑commerce', def:'Buying and selling goods and services through the Internet.', ex:'e.g. Amazon, eBay'},
    {icon:ICO.home2, name:'Remote work', def:'A working style in which work is performed from home or other remote locations using the Internet.', ex:'Work from anywhere'},
    {icon:ICO.book, name:'Online learning', def:'A learning style in which classes and study materials are delivered using the Internet.', ex:'Study anywhere'},
    {icon:ICO.card, name:'Cashless payment', def:'A system for making payments using electronic money, QR codes, etc., without using cash.', ex:'e.g. cards, mobile pay'}
  ]
});

SLIDES.push({type:'question', section:L1, navLabel:'Q · E-commerce', level:'check', kind:'mcq',
  prompt:'Which statement about e-commerce (EC) is TRUE?',
  options:[
    'E-commerce refers to purchasing goods at physical stores using cash.',
    'E-commerce is buying and selling goods and services through the Internet.',
    'E-commerce only refers to social networking activity.',
    'E-commerce cannot be used for services, only physical goods.'
  ], correct:1,
  explain:'E-commerce (EC) means buying and selling goods and services through the Internet — e.g. online shops such as Amazon and eBay. Buying at a physical store with cash is the opposite of e-commerce.'
});

SLIDES.push({type:'edgeSim', section:L1, navLabel:'Autonomous Driving',
  eyebrow:'Point 3 · Emerging Technologies', title:'Autonomous Driving & Edge Computing',
  intro:`${kt('Edge computing','Processing data on the device itself, instantly, instead of sending it to the cloud.')}
  <p class="body-text">Autonomous driving uses AI to drive a vehicle without human operation — cameras and sensors recognize the surroundings and the car makes driving decisions. Because a delay of even 0.1 seconds can cause an accident, edge computing is used. Try both modes below.</p>`
});

SLIDES.push({type:'question', section:L1, navLabel:'Q · Why Edge?', level:'check', kind:'theory',
  prompt:'Why is it necessary to process data instantly on the vehicle side using edge computing, rather than sending the data to the cloud for judgment?',
  answer:'A self-driving car must react to its surroundings (pedestrians, obstacles) in real time. Sending data to the cloud and waiting for a response adds network delay, and even a delay of 0.1 seconds can lead to an accident. Edge computing processes the data instantly on board the vehicle itself, so the car can make and act on a decision without that round-trip delay.'
});

SLIDES.push({type:'arvr', section:L1, navLabel:'AR / VR',
  eyebrow:'Point 3 · continued', title:'AR / VR',
  intro:`Two related but different technologies. Switch between them below.`
});

SLIDES.push({type:'question', section:L1, navLabel:'Q · AR/VR/Auto Match', level:'check', kind:'mcq',
  prompt:'"A technology that allows users to immerse themselves in a virtual space generated by a computer" describes which technology?',
  options:['Autonomous driving','Augmented Reality (AR)','Virtual Reality (VR)','Edge computing'], correct:2,
  explain:'Immersing oneself in a fully computer-generated virtual space is Virtual Reality (VR). AR overlays digital information on real-world images; autonomous driving uses AI to drive a vehicle without human operation.'
});

SLIDES.push({type:'quantum', section:L1, navLabel:'Quantum Computing',
  eyebrow:'Point 3 · continued', title:'Quantum Computing',
  intro:`${kt('Quantum computing','A technology expected to dramatically speed up computations that are difficult or impossible for traditional computers, by using the principles of quantum mechanics.')}
  <p class="body-text">A classical bit holds one definite state at a time — either 0 or 1, never both. A qubit uses <b>superposition</b>: a combination of 0 and 1 at once. Toggle between them below.</p>`
});

SLIDES.push({type:'question', section:L1, navLabel:'Q · Qubit', level:'check', kind:'theory',
  prompt:'What is the key difference between a classical bit and a qubit, and why does it matter for computing power?',
  answer:'A classical bit holds one definite state at a time — either 0 or 1, never both. A qubit uses superposition, representing a combination of 0 and 1 at once. Superposition lets many qubits represent a much larger space of states simultaneously, enabling massive parallel processing for certain problems that would be difficult or impossible for traditional computers.'
});

SLIDES.push({type:'content', section:L1, navLabel:'Worked Example',
  eyebrow:'Worked Example · Solution', title:'True or False — Moore\'s Law & SNS',
  body:`<div class="body-text"><p><b>A.</b> Moore's Law is the empirical observation that transistors on a chip double roughly every two years. → <span style="color:#34d399">True</span></p>
  <p><b>B.</b> Moore's Law has been said to be approaching a physical limit in recent years. → <span style="color:#34d399">True</span></p>
  <p><b>C.</b> SNS is highly effective at spreading information rapidly. → <span style="color:#34d399">True</span></p>
  <p><b>D.</b> E-commerce (EC) refers to purchasing goods at physical stores using cash. → <span style="color:#f87171">False</span> — EC means buying/selling through the Internet.</p></div>`,
  side: tip('Matching recap','a → AR (overlays digital info on real images) · b → Autonomous driving (drives without human operation) · c → VR (immerses in a virtual space).')
});

/* --- Lesson 1-1 exercise set --- */
SLIDES.push({type:'exheader', section:L1, navLabel:'1-1 Exercises', tagline:'Lesson 1-1 · Practice',
  title:'Let\'s Check What You Know', text:'A short set of questions covering everything in this lesson.'});

SLIDES.push({type:'question', section:L1, navLabel:'Ex1 · Term', level:'easy', kind:'theory',
  prompt:'What is the name of the empirical observation that the number of transistors on an integrated circuit doubles approximately every two years?',
  answer:'Moore\'s Law.'});

SLIDES.push({type:'question', section:L1, navLabel:'Ex2 · Term', level:'easy', kind:'mcq',
  prompt:'What is the term for the working style in which one works from home or other remote locations using the Internet?',
  options:['Online learning','Remote work','Cashless payment','E-commerce'], correct:1,
  explain:'Remote work is a working style in which work is performed from home or other remote locations using the Internet.'});

SLIDES.push({type:'question', section:L1, navLabel:'Ex3 · Fill Blanks', level:'medium', kind:'theory',
  prompt:'Fill in the blanks: "Computers were invented in the 1940s. Later, in the 1970s–80s, ( a ) became widespread. In the 1990s, ( b ) was commercialized. In the 2000s, ( c ) emerged, leading to the explosive spread of mobile Internet."',
  answer:'(a) Personal computers (PCs) · (b) the Internet (the Web) · (c) Smartphones (e.g. the iPhone).'});

SLIDES.push({type:'question', section:L1, navLabel:'Ex4 · Service', level:'medium', kind:'theory',
  prompt:'What technology, which spread from the 2010s onward, supports large-scale data analysis and the use of AI?',
  answer:'Cloud computing — IT delivered as a service over the Internet.'});

SLIDES.push({type:'question', section:L1, navLabel:'Ex5 · Not a Tech', level:'medium', kind:'mcq',
  prompt:'Which option is NOT an appropriate description of an emerging technology from this lesson?',
  options:[
    'Autonomous driving uses AI to drive a vehicle without human operation.',
    'AR is a technology that overlays digital information on real-world images.',
    'VR is a technology that dramatically improves the processing speed of a computer.',
    'Quantum computing is expected to speed up computations that are difficult for traditional computers.'
  ], correct:2,
  explain:'VR (Virtual Reality) lets users immerse themselves in a computer-generated virtual space — it is not about improving a computer\'s processing speed. That description does not match any of the five technologies as defined.'});

SLIDES.push({type:'question', section:L1, navLabel:'Ex6 · Village', level:'hard', kind:'theory',
  prompt:'A village that has never had Internet access is connected to high-speed Internet and cashless payment for the first time. Predict two ways daily life will change, and identify one new problem the village may face.',
  answer:'Sample answer: (1) Residents could gain access to e-commerce, ordering goods that were previously unavailable locally, and to online learning, letting students take classes they couldn\'t access before. (2) Cashless payment could speed up transactions and reduce the need to carry cash. A new problem: people without a bank card, smartphone, or reliable connectivity could be excluded from these services — a "digital divide" within the village.'});

SLIDES.push({type:'reflect', section:L1, navLabel:'1-1 Reflect',
  title:'Reflect & Challenge',
  reflect:'Which stage of information technology do you think will matter most in the next ten years? Give one reason. Was your prediction at the start of the lesson correct? What changed your mind?',
  challenge:'Choose one emerging technology from this lesson (autonomous driving, AR, VR, or quantum computing). Suggest one way it could help solve a real problem, and state one risk.'});

/* =========================================================
   LESSON 1-2 — How AI Works
========================================================= */
const L2 = 'Lesson 1-2';
SLIDES.push({type:'lessonCover', section:L2, navLabel:'1-2 Cover',
  code:'Lesson 1-2', title:'How AI Works',
  objectives:['Explain what AI is.','Explain how generative AI is positioned within AI technologies.'], color:'blue'});

SLIDES.push({type:'content', section:L2, navLabel:'Guiding Question',
  eyebrow:'Guiding Question', title:'What is AI, and how are machine learning, deep learning, and generative AI related?',
  body:`<p>When you use a phone, AI is often at work. A spam filter sorts your email, a store recommends products you might buy, a translation app changes one language into another, and ChatGPT generates text from a prompt.</p>
  <p>These are all examples of AI, but they are not all the same kind. AI includes machine learning, within machine learning is deep learning, and today's generative AI systems are built on deep learning — a series of nested technologies, each more specialized than the last.</p>`,
  side: tip('Explore · In Pairs','With a partner, list three tasks a phone or computer does for you that seem to need "intelligence" — for example sorting spam, recommending a video, or translating text. Then predict: does the computer follow fixed rules, or does it learn from examples?')
});

SLIDES.push({type:'content', section:L2, navLabel:'What is AI?',
  eyebrow:'Point 1', title:'What is Artificial Intelligence (AI)?',
  body: kt('AI (Artificial Intelligence)','A general term for technologies that reproduce or perform intelligent human behavior — learning, reasoning, judgment, etc. — on a computer.')
  + `<p class="body-text"><b>Examples:</b> speech recognition, image recognition, translation.</p>`,
  side: `<div class="hero-visual"><svg viewBox="0 0 200 140"><rect x="10" y="20" width="180" height="100" rx="14" fill="none" stroke="#3b82f6" stroke-width="1.5" opacity=".5"/><circle cx="60" cy="70" r="22" fill="none" stroke="#22d3ee" stroke-width="1.5"/><circle cx="140" cy="70" r="22" fill="none" stroke="#8b5cf6" stroke-width="1.5"/><path d="M82 70h36" stroke="#22d3ee" stroke-width="1.5" stroke-dasharray="4 4"/><text x="60" y="75" fill="#eaf2ff" font-size="9" text-anchor="middle" font-family="Sora">Data</text><text x="140" y="75" fill="#eaf2ff" font-size="9" text-anchor="middle" font-family="Sora">Judgment</text></svg></div>`
});

SLIDES.push({type:'hierarchy', section:L2, navLabel:'AI Hierarchy',
  eyebrow:'Point 2', title:'The Relationship between AI and Machine Learning',
  intro:'Within AI is machine learning; within machine learning is deep learning; within deep learning is generative AI — a series of nested categories, each more specialized than the last. Click a ring to explore it.'
});

SLIDES.push({type:'question', section:L2, navLabel:'Q · Common Ground', level:'check', kind:'theory',
  prompt:'Spam filters and product recommendations are both examples of machine learning, but the tasks they perform are completely different. From the perspective of how AI works, what do these two applications have in common?',
  answer:'Both are examples of machine learning: rather than following fixed, hand-written rules, both systems learn patterns from data (e.g. examples of spam vs. not-spam, or a user\'s past purchases) in order to make predictions and judgments on new, unseen cases — sorting an email or recommending a product.'
});

SLIDES.push({type:'content', section:L2, navLabel:'Machine Learning',
  eyebrow:'Point 2 · continued', title:'Machine Learning & Deep Learning',
  body: kt('Machine learning','One of the learning technologies that makes AI work. It learns patterns from data to make predictions and judgments.') + `<p class="body-text" style="margin-bottom:14px"><b>Examples:</b> spam filters, product recommendations.</p>`
    + kt('Deep learning','An advanced technology within machine learning that uses neural networks. It learns complex patterns using large-scale data.') + `<p class="body-text"><b>Examples:</b> image analysis for autonomous driving, speech synthesis.</p>`,
  side: tip('Neural network','A system modeled after the workings of nerve cells (neurons) in the human brain. By connecting many components, it learns from data and becomes capable of making complex judgments — the core technology behind recent advances in AI.')
});

SLIDES.push({type:'neuralnet', section:L2, navLabel:'Neural Network',
  eyebrow:'Point 2 · continued', title:'Inside a Neural Network',
  intro:'A neural network connects many simple components in layers. Press play to watch a signal move from the input layer to the output layer.'
});

SLIDES.push({type:'question', section:L2, navLabel:'Q · Rare Data', level:'check', kind:'theory',
  prompt:'Deep learning needs large-scale data to learn. Why might an AI struggle with something it has rarely seen in its data?',
  answer:'Deep learning models learn patterns statistically from the examples they are trained on. If a situation or category is rare or absent in the training data, the model has little or no pattern to learn from, so its predictions for that case are less reliable — it may misclassify it or make an inaccurate judgment, because it is essentially generalizing from experience it never actually had.'
});

SLIDES.push({type:'genai', section:L2, navLabel:'Generative AI',
  eyebrow:'Point 2 · continued', title:'Generative AI',
  intro: kt('Generative AI','AI technology that uses deep learning to generate new data — text, images, audio, programs, etc.') + `<p class="body-text"><b>Examples:</b> ChatGPT, image generation AIs. Try the demo below — type a short prompt and generate.</p>`
});

SLIDES.push({type:'question', section:L2, navLabel:'Q · Hallucination', level:'check', kind:'theory',
  prompt:'Generative AI can produce text that sounds plausible but is factually incorrect (a "hallucination"). Why is it dangerous to use such output as the answer to a school report as-is, and what should learners do instead?',
  answer:'Because the text sounds fluent and confident, a reader can mistake a hallucination for a verified fact and unknowingly spread misinformation, which can damage the credibility of the report and the learner\'s understanding of the topic. Learners should treat generative AI output as a draft or starting point, and verify any facts, figures, or claims against reliable sources before including them in a report.'
});

SLIDES.push({type:'content', section:L2, navLabel:'Worked Example',
  eyebrow:'Worked Example · Solution', title:'True or False — AI, ML & Deep Learning',
  body:`<div class="body-text">
  <p><b>A.</b> Machine learning is one of the technologies that makes AI work. → <span style="color:#34d399">True</span></p>
  <p><b>B.</b> Deep learning is a completely different technology from machine learning. → <span style="color:#f87171">False</span> — deep learning is a type of machine learning.</p>
  <p><b>C.</b> Generative AI is a technology that uses deep learning to generate new data. → <span style="color:#34d399">True</span></p>
  <p><b>D.</b> AI and machine learning have the same meaning. → <span style="color:#f87171">False</span> — AI is the broad field; machine learning is one technology within it.</p></div>`,
  side: tip('Matching recap','a → Machine learning (learns patterns from data) · b → Deep learning (uses neural networks) · c → Generative AI (generates new data).')
});

/* --- Lesson 1-2 exercise set --- */
SLIDES.push({type:'exheader', section:L2, navLabel:'1-2 Exercises', tagline:'Lesson 1-2 · Practice',
  title:'Let\'s Check What You Know', text:'A short set of questions covering everything in this lesson.'});

SLIDES.push({type:'question', section:L2, navLabel:'Ex1 · Abbreviation', level:'easy', kind:'theory',
  prompt:'What is the general term, expressed by a two-letter abbreviation, for technologies that reproduce or perform intelligent human behavior on a computer?',
  answer:'AI (Artificial Intelligence).'});

SLIDES.push({type:'question', section:L2, navLabel:'Ex2 · Fill Blanks', level:'easy', kind:'theory',
  prompt:'Fill in the blanks: "The general term for technologies that reproduce intelligent human behavior is ( a ). The learning technology that makes ( a ) work by learning patterns from data is ( b ). Within ( b ), an advanced technology using neural networks is ( c ). The technology that uses ( c ) to generate new data is ( d )."',
  answer:'(a) AI · (b) Machine learning · (c) Deep learning · (d) Generative AI.'});

SLIDES.push({type:'question', section:L2, navLabel:'Ex3 · Order', level:'medium', kind:'mcq',
  prompt:'Which option correctly describes the relationship between AI, machine learning, deep learning, and generative AI?',
  options:[
    'AI > Deep Learning > Machine Learning > Generative AI',
    'Machine Learning > AI > Generative AI > Deep Learning',
    'AI > Machine Learning > Deep Learning > Generative AI',
    'Generative AI > Deep Learning > Machine Learning > AI'
  ], correct:2,
  explain:'AI is the broadest field. Machine learning sits inside it, deep learning sits inside machine learning, and generative AI is built on deep learning: AI > Machine Learning > Deep Learning > Generative AI.'});

SLIDES.push({type:'question', section:L2, navLabel:'Ex4 · Not GenAI', level:'medium', kind:'mcq',
  prompt:'Which option is NOT an appropriate example of generative AI?',
  options:['ChatGPT','Image generation AI','Spam filter','Audio generation AI'], correct:2,
  explain:'A spam filter classifies existing emails as spam or not — it does not generate new text, images, or audio, so it is a machine learning example rather than generative AI.'});

SLIDES.push({type:'question', section:L2, navLabel:'Ex5 · Crops', level:'hard', kind:'theory',
  prompt:'A farmer wants to use AI to distinguish healthy crops from diseased ones in photographs. Using what you learned about deep learning and image analysis, explain what the AI would need to learn from, and identify one reason its judgment might be wrong.',
  answer:'The AI (a deep learning / neural network model) would need to learn from a large-scale set of labeled photographs of both healthy and diseased crops, so it can learn the complex visual patterns that distinguish them. Its judgment might be wrong if it has rarely or never seen a particular disease, lighting condition, or crop variety in its training data — since it can only generalize from the patterns it was trained on, an unfamiliar case can be misclassified.'});

SLIDES.push({type:'reflect', section:L2, navLabel:'1-2 Reflect',
  title:'Reflect & Challenge',
  reflect:'Before this lesson, did you think AI was one single technology? How has your idea changed? Which of the four — AI, machine learning, deep learning, generative AI — was hardest to tell apart, and why?',
  challenge:'Generative AI can create text, images, and audio. Suggest one helpful use and one possible misuse, and say how the misuse could be reduced.'});

/* =========================================================
   COMPREHENSIVE REVIEW
========================================================= */
const LR = 'Comprehensive Review';
SLIDES.push({type:'exheader', section:LR, navLabel:'Review Start', tagline:'Chapter 1 · Comprehensive Review',
  title:'Putting It All Together', text:'Questions from both lessons, ranked from Easy to Extreme. Half are multiple-choice, half are short theory — with model answers straight from the lesson.',
  levels:true});

/* EASY */
SLIDES.push({type:'question', section:LR, navLabel:'Easy 1', level:'easy', kind:'mcq',
  prompt:'In which decade did the commercialization of the Internet and the Web take place?',
  options:['1970s–80s','1990s','2000s','2010s onward'], correct:1,
  explain:'The Internet and the Web were commercialized in the 1990s, driving the globalization of information and the spread of email.'});

SLIDES.push({type:'question', section:LR, navLabel:'Easy 2', level:'easy', kind:'theory',
  prompt:'What is the term for a system for making payments using electronic money, QR codes, etc., without using cash?',
  answer:'Cashless payment — e.g. credit cards, debit cards, mobile payment apps.'});

SLIDES.push({type:'question', section:LR, navLabel:'Easy 3', level:'easy', kind:'mcq',
  prompt:'Which technology overlays digital information on real-world images?',
  options:['Virtual Reality (VR)','Augmented Reality (AR)','Quantum computing','Edge computing'], correct:1,
  explain:'AR (Augmented Reality) overlays digital information on real-world images. VR replaces the real world with a fully virtual space.'});

SLIDES.push({type:'question', section:LR, navLabel:'Easy 4', level:'easy', kind:'theory',
  prompt:'What is the broad, general term for technologies that reproduce or perform intelligent human behavior on a computer?',
  answer:'AI (Artificial Intelligence).'});

/* MEDIUM */
SLIDES.push({type:'question', section:LR, navLabel:'Medium 1', level:'medium', kind:'mcq',
  prompt:'A store recommends products a shopper might like, based on their past purchases. This is best described as an example of:',
  options:['Generative AI','Machine learning','Quantum computing','Edge computing'], correct:1,
  explain:'Recommending products based on learned patterns in purchase data is a classic machine learning example — like spam filters, it learns from data to make predictions.'});

SLIDES.push({type:'question', section:LR, navLabel:'Medium 2', level:'medium', kind:'theory',
  prompt:'Explain, using the idea of nested categories, how AI, machine learning, deep learning, and generative AI relate to one another.',
  answer:'They are not four separate, parallel technologies — they are nested inside one another, each more specialized than the last. AI is the broadest field (reproducing intelligent human behavior). Machine learning sits inside AI (learning patterns from data). Deep learning sits inside machine learning (using neural networks on large-scale data). Generative AI sits inside deep learning (using it to generate new data such as text, images, or audio).'});

SLIDES.push({type:'question', section:LR, navLabel:'Medium 3', level:'medium', kind:'mcq',
  prompt:'Why does autonomous driving rely on edge computing rather than sending every decision to the cloud?',
  options:[
    'Cloud computing is more expensive per request.',
    'A round-trip delay to the cloud could be too slow to prevent an accident, so decisions must be made instantly on board.',
    'Edge computing uses less electricity than a car battery can supply.',
    'Cloud servers cannot store camera images.'
  ], correct:1,
  explain:'A delay of even 0.1 seconds can lead to an accident, so the vehicle processes data instantly on board (edge computing) instead of waiting on a round trip to the cloud.'});

SLIDES.push({type:'question', section:LR, navLabel:'Medium 4', level:'medium', kind:'theory',
  prompt:'What problem is Moore\'s Law running into today, and name one of the two directions being pursued in response.',
  answer:'Miniaturizing transistors further is approaching a physical limit — effects like quantum tunneling (electrons slipping through barriers) and leakage current make it hard to raise performance while lowering power use. In response, engineers are pursuing parallel processing with multiple processor cores, and/or quantum computing based on the principles of quantum mechanics.'});

/* HARD */
SLIDES.push({type:'question', section:LR, navLabel:'Hard 1', level:'hard', kind:'mcq',
  prompt:'A hospital uses a deep learning model trained mainly on X-rays from adult patients. It is then used on a small number of child patients. Based on what you learned about deep learning, what is the most likely risk?',
  options:[
    'The model will run more slowly on children\'s X-rays.',
    'The model may judge child X-rays less reliably, since it has seen little data resembling them during training.',
    'The model will automatically retrain itself on the new data in real time.',
    'There is no risk, since deep learning is always equally accurate regardless of the data.'
  ], correct:1,
  explain:'Deep learning generalizes from the patterns in its training data. Since child X-rays were rarely represented in training, the model has little basis to judge them accurately — the same principle as struggling with anything rarely seen in its data.'});

SLIDES.push({type:'question', section:LR, navLabel:'Hard 2', level:'hard', kind:'theory',
  prompt:'Connect two ideas from this chapter: how does edge computing, which supports technologies like autonomous driving, relate to the broader shift toward cloud computing described in Point 1? Are they in conflict?',
  answer:'They are not in conflict — they are complementary strategies for where computation happens. Cloud computing (2010s onward) centralizes large-scale data analysis and AI as a service, which is powerful for tasks that can tolerate some delay. Edge computing instead pushes processing to the device itself for tasks where speed is critical, such as autonomous driving, where even a 0.1-second delay from a cloud round trip could cause an accident. Modern systems often use both: heavy training or large-scale analysis in the cloud, and fast, on-the-spot decisions at the edge.'});

/* EXTREME */
SLIDES.push({type:'question', section:LR, navLabel:'Extreme 1', level:'extreme', kind:'mcq',
  prompt:'A generative AI writing tool is trained (deep learning) on text data and can also power an autonomous vehicle\'s image recognition. A school bans generative AI for reports but allows spam filters and translation apps. Which statement best explains a defensible reason for this policy, based on what distinguishes generative AI from other machine learning applications discussed in this chapter?',
  options:[
    'Spam filters and translation apps are not AI at all, so they carry no risk.',
    'Generative AI creates new content that can sound plausible but be factually wrong (hallucination), which is a distinct risk not posed by classification tools like spam filters or translation, which map input to a known, checkable output.',
    'Generative AI is always slower than other machine learning tools, so it wastes students\' time.',
    'Autonomous driving and generative AI use completely unrelated underlying technology, so the comparison is invalid.'
  ], correct:1,
  explain:'Spam filters and translation apps are also machine learning / AI, but they classify or transform existing input into an output that can be checked against the source. Generative AI produces new content from a prompt, and because it can "hallucinate" plausible-sounding but false information, its output requires extra verification before being trusted as fact — the exact risk described for school reports in this chapter.'});

SLIDES.push({type:'question', section:LR, navLabel:'Extreme 2', level:'extreme', kind:'theory',
  prompt:'Synthesize across both lessons: explain how the 2010s-onward spread of cloud computing made both today\'s deep learning / generative AI boom and the rise of edge-computing-dependent technologies like autonomous driving possible — even though cloud and edge computing send data in opposite directions.',
  answer:'Cloud computing turned IT into a large-scale, on-demand service: it provides the massive, centralized computing power and storage needed to train deep learning models on huge datasets, which is what made today\'s generative AI (built on deep learning) possible. At the same time, once a powerful model exists, some applications — like autonomous driving — cannot afford the latency of sending live sensor data to that same cloud for every decision, because even a 0.1-second delay can cause an accident. So edge computing emerged as a complementary approach: the heavy lifting of training happens centrally in the cloud, while fast, safety-critical decisions are made locally, on the device, using a version of what was learned in the cloud. In short, cloud computing supplied the "brains" at scale, and edge computing supplies the "reflexes" where speed matters most — two directions that both trace back to the same stage of IT history.'});

/* =========================================================
   THANK YOU
========================================================= */
SLIDES.push({type:'thanks', section:'End', navLabel:'Thank You'});
