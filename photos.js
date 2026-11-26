/* หน้าภาพนิ่ง: Split-Stage + แกลเลอรีกริด — อ่านข้อมูลจากตัวแปร albums ใน site.js (ต้องโหลดหลัง site.js)
   ฟิลด์เสริมต่ออัลบั้ม: c = หมวด, y = ปี, d = คำอธิบาย */
(function(){
 if(typeof albums==="undefined"||!document.getElementById("ss"))return;
 var $=function(id){return document.getElementById(id)};
 var esc=function(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})};
 var data=albums.filter(function(a){return a.imgs&&a.imgs.length}).map(function(a){
  var imgs=a.imgs.map(function(x){return typeof x==="string"?{src:x,t:""}:x});
  var cv=a.cover?(a.cover.indexOf("/")<0&&a.dir!==undefined?"images/"+(a.dir?encodeURIComponent(a.dir)+"/":"")+encodeURIComponent(a.cover):a.cover):imgs[0].src;
  return{t:a.t,c:a.c||"อัลบั้มภาพนิ่ง",y:a.y||"",d:a.d||"",imgs:imgs,cv:cv,bad:{}}});
 if(!data.length)return;
 var touch=matchMedia("(hover:none)").matches,reduce=matchMedia("(prefers-reduced-motion:reduce)").matches;
 var info=$("ss-info"),stage=$("ss-stage"),bk=[$("bkA"),$("bkB")],mn=[$("mnA"),$("mnB")],dots=$("ss-dots"),cardsEl=$("ss-cards");
 var ai=0,si=0,layer=0,timer=null,tk=0;

 cardsEl.innerHTML=data.map(function(a,i){return'<button class="ss-card" type="button" data-i="'+i+'" aria-label="'+esc(a.t)+'"><img src="'+esc(a.cv)+'" alt="" loading="lazy"><em>'+a.imgs.length+' ภาพ</em><b>'+esc(a.t)+'</b><u aria-hidden="true">↗</u></button>'}).join("");
 var cards=[].slice.call(cardsEl.children);
 cards.forEach(function(c){var im=c.querySelector("img");im.onerror=function(){im.style.display="none"}});

 function drawDots(){var n=Math.min(data[ai].imgs.length,12);dots.innerHTML=data[ai].imgs.length>1?Array.apply(null,Array(n)).map(function(_,k){return'<i class="'+(k===si%12?"on":"")+'"></i>'}).join(""):""}
 /* โหลดรูปจริงก่อนค่อย Crossfade ชั้นหลัง (blur) และชั้นหน้า (contain) พร้อมกัน; รูปที่โหลดไม่ได้จะข้ามไปรูปถัดไป */
 function slide(tries){
  tries=tries||0;var a=data[ai],n=a.imgs.length;
  if(tries>=n){stage.classList.add("empty");bk.concat(mn).forEach(function(e){e.classList.remove("v")});dots.innerHTML="";return}
  var id=++tk,src=a.imgs[si].src,im=new Image();
  im.onload=function(){if(id!==tk)return;
   stage.classList.remove("empty");var nx=1-layer;
   bk[nx].src=src;mn[nx].src=src;mn[nx].alt=a.t;
   bk[nx].classList.add("v");mn[nx].classList.add("v");bk[layer].classList.remove("v");mn[layer].classList.remove("v");layer=nx;drawDots()};
  im.onerror=function(){if(id!==tk)return;a.bad[si]=1;si=(si+1)%n;slide(tries+1)};
  im.src=src}
 function album(i,anim){
  ai=i;si=0;cards.forEach(function(c,k){c.classList.toggle("on",k===i);c.setAttribute("aria-pressed",k===i)});
  var a=data[i];
  function set(){$("ss-meta").textContent=a.c+(a.y?" · "+a.y:"")+" · "+a.imgs.length+" ภาพ";$("ss-ttl").textContent=a.t;$("ss-desc").textContent=a.d;$("ss-desc").style.display=a.d?"":"none";info.classList.remove("sw")}
  if(anim&&!reduce){info.classList.add("sw");setTimeout(set,260)}else set();
  slide();a.imgs.slice(0,6).forEach(function(p){new Image().src=p.src})}
 function stop(){clearInterval(timer);timer=null}
 function start(){stop();if(data[ai].imgs.length<2||reduce)return;timer=setInterval(function(){si=(si+1)%data[ai].imgs.length;slide()},touch?2600:1600)}

 cards.forEach(function(c,i){
  c.addEventListener("mouseenter",function(){if(touch)return;if(ai!==i)album(i,true);start()});
  c.addEventListener("mouseleave",function(){if(!touch)stop()});
  c.addEventListener("focus",function(){if(ai!==i)album(i,true)});
  c.addEventListener("click",function(){
   if(touch){if(ai!==i){album(i,true)}start();return}   /* มือถือ/แท็บเล็ต: แตะการ์ดเพื่อพรีวิว แล้วกด "ดูทั้งอัลบั้ม" */
   stop();if(ai!==i)album(i,true);openGallery(i)})});
 stage.addEventListener("click",function(){if(!touch)stop();openGallery(ai)});
 stage.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();openGallery(ai)}});
 $("ss-open").addEventListener("click",function(){stop();openGallery(ai)});

 /* ---------- แกลเลอรีกริด (Modal) ---------- */
 var G=$("gdlg"),GG=$("gd-grid"),P=$("pdlg"),I=$("pimg"),li=0,lj=0,root=document.documentElement;
 function openGallery(i){
  var a=data[i];li=i;$("gd-t").textContent=a.t;$("gd-n").textContent=a.imgs.length+" ภาพ";GG.innerHTML="";
  a.imgs.forEach(function(p,k){
   var b=document.createElement("button");b.type="button";b.setAttribute("aria-label","ดูภาพที่ "+(k+1));
   if(p.r){b.style.setProperty("--r",p.r);if(p.r>1.1)b.setAttribute("data-l","1")}
   var im=new Image();im.alt=p.t||"";im.decoding="async";if(k>=16)im.loading="lazy";
   im.onload=function(){if(im.naturalWidth&&im.naturalHeight){var r=im.naturalWidth/im.naturalHeight;b.style.setProperty("--r",r.toFixed(4));if(r>1.1)b.setAttribute("data-l","1");else b.removeAttribute("data-l")}};
   im.onerror=function(){b.remove()};
   im.src=p.src;b.appendChild(im);b.onclick=function(){openPhoto(i,k)};GG.appendChild(b)});
  GG.scrollTop=0;G.classList.remove("in");G.showModal();root.style.overflow="hidden";
  requestAnimationFrame(function(){requestAnimationFrame(function(){G.classList.add("in")})})}
 function closeGallery(){G.classList.remove("in");setTimeout(function(){if(G.open)G.close()},reduce?0:260)}
 G.addEventListener("close",function(){root.style.overflow=""});
 G.addEventListener("cancel",function(e){e.preventDefault();closeGallery()});
 G.addEventListener("click",function(e){if(e.target===G)closeGallery()});
 $("gd-x").onclick=closeGallery;
 /* คลิกรูปในกริดเพื่อดูภาพขยาย (ใช้ #pdlg เดิม) */
 function paint(){var a=data[li];I.src=a.imgs[lj].src;I.alt=a.t}
 function openPhoto(i,j){li=i;lj=j;paint();if(!P.open)P.showModal()}
 function step(d){var n=data[li].imgs.length;lj=(lj+d+n)%n;paint()}
 $("pclose").onclick=function(){P.close()};$("pprev").onclick=function(){step(-1)};$("pnext").onclick=function(){step(1)};
 P.addEventListener("click",function(e){if(e.target===P)P.close()});
 P.addEventListener("keydown",function(e){if(e.key==="ArrowLeft")step(-1);if(e.key==="ArrowRight")step(1)});

 album(0,false);
 if(touch)start();
})();
