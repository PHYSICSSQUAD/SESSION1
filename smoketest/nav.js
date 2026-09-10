const fs=require("fs");const {JSDOM,VirtualConsole}=require("jsdom");
const html=fs.readFileSync("/home/user/site/dist/IT-Society-Deck.html","utf8");
const errors=[];const vc=new VirtualConsole();
vc.on("jsdomError",e=>errors.push("jsdomError: "+e.message));
vc.on("error",(...a)=>errors.push("console.error: "+a.join(" ")));
const dom=new JSDOM(html,{runScripts:"dangerously",pretendToBeVisual:true,url:"http://localhost/",virtualConsole:vc,
 beforeParse(w){
  w.HTMLCanvasElement.prototype.getContext=function(){return new Proxy({},{get:(t,p)=>(p==="canvas"?this:()=>{}),set:()=>true});};
  w.matchMedia=()=>({matches:false,addListener(){},removeListener(){}});
  w.requestAnimationFrame=cb=>setTimeout(()=>cb(Date.now()),16);
  w.cancelAnimationFrame=id=>clearTimeout(id); w.confirm=()=>true; w.AudioContext=undefined;
 }});
const {window}=dom, {document}=window;
const qa=s=>[...document.querySelectorAll(s)];
setTimeout(()=>{
  document.getElementById("tocB").click();
  const items=qa(".toc-item");
  console.log("TOC items:",items.length);
  let bad=0,imgs=0,broken=[];
  for(let i=0;i<items.length;i++){
    qa(".toc-item")[i].click();
    const cur=document.getElementById("counter").textContent;
    if(parseInt(cur.split("/")[0])!==i+1) {bad++;console.log("MISMATCH at",i+1,cur);}
    qa("#stage img").forEach(im=>{imgs++; if(!im.getAttribute("src")) broken.push(i+1);});
    document.getElementById("tocB").click();
  }
  console.log("nav mismatches:",bad);
  console.log("images rendered across deck:",imgs,"| broken src:",broken.length);
  // hash uniqueness
  console.log("runtime errors:",errors.length, errors.slice(0,3));
  console.log(bad===0&&broken.length===0&&errors.length===0?"NAV ALL PASS":"NAV FAIL");
  process.exit(0);
},800);
