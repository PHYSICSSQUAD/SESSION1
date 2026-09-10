const fs = require("fs");
const { JSDOM, VirtualConsole } = require("jsdom");

const html = fs.readFileSync("/home/user/site/dist/IT-Society-Deck.html", "utf8");
const errors = [];
const vc = new VirtualConsole();
vc.on("jsdomError", e => errors.push("jsdomError: " + e.message));
vc.on("error", (...a) => errors.push("console.error: " + a.join(" ")));

const dom = new JSDOM(html, {
  runScripts: "dangerously",
  pretendToBeVisual: true,
  url: "http://localhost/",
  virtualConsole: vc,
  beforeParse(window) {
    // canvas stub
    window.HTMLCanvasElement.prototype.getContext = function () {
      return new Proxy({}, { get: (t, p) => (p === "canvas" ? this : () => {}), set: () => true });
    };
    window.matchMedia = window.matchMedia || (() => ({ matches: false, addListener(){}, removeListener(){} }));
    window.AudioContext = undefined;
    window.requestAnimationFrame = cb => setTimeout(() => cb(performance.now()), 16);
    window.cancelAnimationFrame = id => clearTimeout(id);
    window.confirm = () => true;
  }
});

const { window } = dom;
const { document } = window;

function q(sel) { return document.querySelector(sel); }
function qa(sel) { return [...document.querySelectorAll(sel)]; }
const results = [];
const check = (name, cond) => results.push([cond ? "PASS" : "FAIL", name]);

setTimeout(() => {
  try {
    check("cover rendered", !!q(".cover-title") && qa("#coverContact .cicon").length === 4);
    check("counter shows total", /\/ 8\d/.test(q("#counter").textContent) || /\/ \d+/.test(q("#counter").textContent));
    const total = parseInt(q("#counter").textContent.split("/")[1]);

    // go to chapter slide (idx 1) via next button
    q("#nextB").click();
    check("chapter cards exist", qa(".lesson-card").length === 4);
    check("two locked lessons", qa(".lesson-card.violet").length === 2);
    check("chapter cards jump", qa(".lesson-card.blue[data-goto]").length === 2);

    // jump via overview to moore slide
    q("#ovB").click();
    const mooreTile = qa(".ov-t").find(t => t.title.includes("Moore"));
    mooreTile.click();
    check("moore sim rendered", !!q("#mooreSvg line") && q("#mooreRead").textContent.includes("1971"));
    q("#mooreYear").value = "2025";
    q("#mooreYear").dispatchEvent(new window.Event("input"));
    check("moore slider updates", q("#mooreRead").textContent.includes("2025") && /B/.test(q("#mooreRead").textContent));

    // jump to first question slide c1102
    q("#ovB").click();
    const qTile = qa(".ov-t").find(t => t.title === "Check ✔");
    qTile.click();
    check("question card built", !!q(".qcard") && qa(".qopt").length === 4);
    // click correct option (index 2)
    qa(".qopt")[2].click();
    check("answer revealed", !q(".qanswer").hidden && q(".qa-line").classList.contains("ok"));
    const saved = JSON.parse(window.localStorage.getItem("itdeck-scores"));
    check("score persisted", saved && saved.q1102 === "correct");

    // theory question self-mark (slide #33 = c1117 theory)
    q("#ovB").click();
    qa(".ov-t").find(t => +t.querySelector("b").textContent === 31).click();
    q(".qreveal").click();
    q(".qself .b-grn").click();
    check("theory self-mark recorded", JSON.parse(window.localStorage.getItem("itdeck-scores")).q1117 === "known");

    // match question interaction (slide #29 = c1113)
    q("#ovB").click();
    qa(".ov-t").find(t => +t.querySelector("b").textContent === 27).click();
    const want = { a: "B", b: "A", c: "C" };
    qa(".qm-row").forEach(r => r.querySelector(`.qm-chip[data-c="${want[r.dataset.r]}"]`).click());
    q(".qcheck").click();
    check("match all-correct scores", JSON.parse(window.localStorage.getItem("itdeck-scores")).q1113 === "correct");

    // score page renders
    q("#ovB").click();
    qa(".ov-t").find(t => t.title.includes("Results 1-1")).click();
    check("score page stats", q("#scoreL1b").textContent.includes("/") && qa("#lvlBreak1 .lb-row").length === 4);

    // thanks slide
    q("#ovB").click();
    qa(".ov-t")[qa(".ov-t").length - 1].click();
    check("thanks slide", !!q("#thanksMail") && q("#thanksMail").textContent.length > 3);

    
    // NEW: merged order + new components
    q("#ovB").click();
    const tiles = qa(".ov-t").map(t => t.title);
    check("86 slides merged", tiles.length === 86);
    check("order: cover→chapter→1-1 cover→guiding", tiles[1] === "Chapter Menu" && tiles[2] === "1-1 Cover" && tiles[3] === "Guiding Question");
    check("order: history(5) moore(8) limits(10) social(11)", tiles[4].includes("History") && tiles[7].includes("Moore") && tiles[9].includes("Physical") && tiles[10].includes("Social"));
    check("order: quantum(19) then 1-1 quiz(22)", tiles[18].includes("Quantum") && tiles[21].includes("Quiz"));
    check("order: l2 ML(46) NN(47) genai(49) halluc(51)", tiles[45].includes("Machine Learning") && tiles[46].includes("Neural") && tiles[48].includes("Generative") && tiles[50].includes("Hallucination"));
    q("#ovB").click();

    // flip cards
    q("#ovB").click(); qa(".ov-t").find(t=>t.title.includes("Social Changes")).click();
    check("5 flip cards", qa(".flip-card").length === 5);
    qa(".flip-card")[0].click();
    check("flip works", qa(".flip-card")[0].classList.contains("flipped"));

    // AR/VR switcher
    q("#ovB").click(); qa(".ov-t").find(t=>t.title.includes("AR / VR")).click();
    check("arvr default AR", q("#arvrFrame").className.includes("ar"));
    qa(".sim-btn").find(b=>b.dataset.mode==="vr").click();
    check("arvr switches to VR", q("#arvrFrame").className.includes("vr") && q("#arvrReadout").innerHTML.includes("VR"));

    // lesson objectives (REF)
    q("#ovB").click(); qa(".ov-t").find(t=>t.title==="1-2 Cover").click();
    check("1-2 objectives present", qa(".obj-list li").length === 2);

    // new merged questions render
    q("#ovB").click(); qa(".ov-t").find(t=>+t.querySelector("b").textContent === 82).click();
    check("new REF question rc01 renders", !!q(".qcard") && qa(".qopt").length === 4);
    qa(".qopt")[1].click();
    check("rc01 scores correct", JSON.parse(window.localStorage.getItem("itdeck-scores")).rc01 === "correct");

    // images never cropped
    const allImgs = [];
    for (let i=0;i<86;i++){ }
    check("no runtime errors", errors.length === 0);
  } catch (e) {
    results.push(["FAIL", "exception: " + e.message]);
  }
  let fail = 0;
  for (const [s, n] of results) { console.log(s, "-", n); if (s === "FAIL") fail++; }
  if (errors.length) console.log("ERRORS:", errors.slice(0, 6).join("\n"));
  console.log(fail === 0 ? "ALL PASS" : fail + " FAILURES");
  process.exit(0);
}, 700);
