const fs=require("fs");const {JSDOM,VirtualConsole}=require("jsdom");
const html=fs.readFileSync("/home/user/site/dist/IT-Society-Deck.html","utf8");
const errors=[];const vc=new VirtualConsole();
vc.on("jsdomError",e=>errors.push(e.message));vc.on("error",(...a)=>errors.push(a.join(" ")));
const dom=new JSDOM(html,{runScripts:"dangerously",pretendToBeVisual:true,url:"http://localhost/",virtualConsole:vc,
 beforeParse(w){w.HTMLCanvasElement.prototype.getContext=function(){return new Proxy({},{get:(t,p)=>(p==="canvas"?this:()=>{}),set:()=>true});};
 w.matchMedia=()=>({matches:false,addListener(){},removeListener(){}});
 w.requestAnimationFrame=cb=>setTimeout(()=>cb(Date.now()),16);w.cancelAnimationFrame=id=>clearTimeout(id);w.confirm=()=>true;w.AudioContext=undefined;}});
const {window}=dom,{document}=window;const q=s=>document.querySelector(s),qa=s=>[...document.querySelectorAll(s)];
setTimeout(()=>{
 const r=[],ck=(n,c)=>r.push([c?"PASS":"FAIL",n]);
 ck("header name", q("#hdrName").textContent==="Eng. Tadros Wagih");
 ck("header logo is image", !!q("#hdrLogo .logo-img") && q("#hdrLogo .logo-img").src.startsWith("data:image/png"));
 ck("no mono-ring on cover", qa(".mono-ring").length===0);
 ck("cover logo image", !!q("#coverLogo .logo-img"));
 const wa=q('.cicon.c-wa'),li=q('.cicon.c-li'),ph=q('.cicon.c-ph'),em=q('.cicon.c-em');
 ck("whatsapp link", wa.href==="https://wa.me/201271482728");
 ck("linkedin link", li.href.includes("tadros-wagih-381422247"));
 ck("phone link", ph.href==="tel:+201271482728");
 ck("email link", em.href==="mailto:tadroswagih02@gmail.com");
 // thanks page
 q("#ovB").click(); qa(".ov-t")[qa(".ov-t").length-1].click();
 ck("thanks name", q("#thanksName").textContent==="Eng. Tadros Wagih");
 ck("thanks email", q("#thanksMail").textContent==="tadroswagih02@gmail.com");
 ck("thanks logo image", !!q("#thanksLogo .logo-img"));
 ck("no errors", errors.length===0);
 let f=0;r.forEach(([s,n])=>{console.log(s,"-",n);if(s==="FAIL")f++;});
 if(errors.length)console.log(errors.slice(0,3));
 console.log(f?f+" FAIL":"BRANDING ALL PASS");process.exit(0);
},800);
