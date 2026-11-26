/* JNEW: Floating Pill indicator + Parallax Viewfinder background */
(function(){
 var reduce=window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches;
 /* ---------- พื้นหลัง Parallax ---------- */
 if(!document.getElementById("vf")){
  var v=document.createElement("div");v.id="vf";v.setAttribute("aria-hidden","true");
  var S='<svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">';
  v.innerHTML='<div class="vl au" data-d="30"><i></i><i></i><i></i></div>'+
   '<div class="vl" data-d="12">'+S+'<rect x="120" y="110" width="1360" height="765"/><rect x="120" y="226" width="1360" height="569"/><path d="M573 110V875M1027 110V875M120 365V620M1480 365V620"/></svg></div>'+
   '<div class="vl" data-d="24">'+S+'<path d="M770 450h60M800 420v60M740 450h8M852 450h8M800 390v8M800 502v8"/><circle cx="800" cy="450" r="64"/><path d="M60 60h40M60 60v40M1540 60h-40M1540 60v40M60 840h40M60 840v-40M1540 840h-40M1540 840v-40"/></svg></div>'+
   '<div class="vl" data-d="36">'+S+'<path d="M300 880h1000M300 872v16M400 876v8M500 876v8M600 876v8M700 876v8M800 872v16M900 876v8M1000 876v8M1100 876v8M1200 876v8M1300 872v16M24 300v300M16 300h16M20 350h8M20 400h8M16 450h16M20 500h8M20 550h8M16 600h16"/></svg></div>';
  document.body.insertBefore(v,document.body.firstChild);
  var ls=[].map.call(v.querySelectorAll(".vl"),function(el){return{el:el,d:+el.dataset.d,x:0,y:0}}),tx=0,ty=0;
  window.addEventListener("mousemove",function(e){tx=e.clientX/innerWidth*2-1;ty=e.clientY/innerHeight*2-1},{passive:true});
  (function loop(){
   /* หยุดคำนวณเมื่อเปิด Modal/Lightbox หรือแท็บถูกซ่อน (lerp ~0.05) */
   if(!reduce&&!document.hidden&&!document.querySelector("dialog[open]")){
    for(var i=0;i<ls.length;i++){var l=ls[i];l.x+=(tx*l.d-l.x)*.05;l.y+=(ty*l.d-l.y)*.05;l.el.style.transform="translate3d("+l.x.toFixed(2)+"px,"+l.y.toFixed(2)+"px,0)"}
   }
   requestAnimationFrame(loop)})();
 }
 /* ---------- Floating Pill + Sliding Indicator ---------- */
 var N=document.querySelector("header.top nav");if(!N)return;
 var L=[].slice.call(N.querySelectorAll("a")),ind=document.createElement("i");ind.id="pind";ind.setAttribute("aria-hidden","true");N.insertBefore(ind,N.firstChild);
 var act=-1;L.forEach(function(a,i){if(a.hasAttribute("aria-current"))act=i});
 var cur=act;
 function place(i){
  if(i<0||!L[i]||!L[i].offsetWidth){ind.style.opacity=0;return}
  ind.style.opacity=1;ind.style.width=L[i].offsetWidth+"px";ind.style.transform="translateX("+L[i].offsetLeft+"px)"}
 function jump(i){ind.style.transition="none";place(i);void ind.offsetWidth;ind.style.transition=""}
 L.forEach(function(a,i){
  a.addEventListener("mouseenter",function(){cur=i;place(i)});
  a.addEventListener("focus",function(){cur=i;place(i)})});
 N.addEventListener("mouseleave",function(){cur=act;place(act)});
 N.addEventListener("focusout",function(){cur=act;place(act)});
 /* เปลี่ยนหน้า: ให้ตัวไฮไลต์สไลด์จากเมนูของหน้าก่อนหน้าไปยังหน้านี้ */
 var prev=-2;try{var s=sessionStorage.getItem("jnew-nav");if(s!==null)prev=+s}catch(e){}
 if(!reduce&&prev>=0&&prev!==act&&L[prev]){jump(prev);requestAnimationFrame(function(){requestAnimationFrame(function(){place(act)})})}else jump(act);
 function save(){try{sessionStorage.setItem("jnew-nav",String(act))}catch(e){}}
 window.addEventListener("pagehide",save);
 function re(){place(cur)}
 window.addEventListener("resize",re);
 if(document.fonts&&document.fonts.ready)document.fonts.ready.then(function(){jump(cur)});
})();
