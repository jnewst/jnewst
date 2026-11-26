/* Editorial Split-Stage — อ่านข้อมูลจากตัวแปร albums ใน site.js (ต้องโหลดหลัง site.js)
   ฟิลด์เสริมต่ออัลบั้ม: c = หมวด, y = ปี, d = คำอธิบาย */
(function(){
 if(typeof albums==="undefined"||!document.getElementById("ss"))return;
 var IMGS=function(x){return typeof x==="string"?{src:x,t:""}:x};
 var data=albums.filter(function(a){return a.imgs&&a.imgs.length}).map(function(a){
  var imgs=a.imgs.map(IMGS),cv=a.cover?(a.cover.indexOf("/")<0&&a.dir!==undefined?"images/"+(a.dir?encodeURIComponent(a.dir)+"/":"")+encodeURIComponent(a.cover):a.cover):imgs[0].src;
  return{t:a.t,c:a.c||"อัลบั้มภาพนิ่ง",y:a.y||"",d:a.d||(imgs.length+" ภาพ"),imgs:imgs,cv:cv}});
 if(!data.length)return;
 var $=function(id){return document.getElementById(id)},info=$("ss-info"),stage=$("ss-stage"),
  bk=[$("bkA"),$("bkB")],mn=[$("mnA"),$("mnB")],dots=$("ss-dots"),cardsEl=$("ss-cards"),
  ai=0,si=0,layer=0,timer=null,tk=0;
 cardsEl.innerHTML=data.map(function(a,i){return'<button class="ss-card" type="button" data-i="'+i+'" aria-label="'+a.t+'"><img src="'+a.cv+'" alt="" loading="lazy"><b>'+a.t+'</b><u aria-hidden="true">↗</u></button>'}).join("");
 var cards=[].slice.call(cardsEl.children);
 function drawDots(){var n=data[ai].imgs.length;dots.innerHTML=n>1?data[ai].imgs.slice(0,12).map(function(_,k){return'<i class="'+(k===si%12?"on":"")+'"></i>'}).join(""):""}
 /* Crossfade ชั้นหลัง(blur)และชั้นหน้า(contain) พร้อมกัน */
 function slide(){
  var n=1-layer,src=data[ai].imgs[si].src,id=++tk,im=new Image();
  function go(){if(id!==tk)return;
   bk[n].src=src;mn[n].src=src;mn[n].alt=data[ai].t;
   bk[n].classList.add("v");mn[n].classList.add("v");bk[layer].classList.remove("v");mn[layer].classList.remove("v");layer=n;drawDots()}
  im.onload=im.onerror=go;im.src=src;if(im.complete)go()}
 function album(i,anim){
  ai=i;si=0;cards.forEach(function(c,k){c.classList.toggle("on",k===i)});
  var a=data[i];function set(){$("ss-meta").textContent=a.c+(a.y?" · "+a.y:"");$("ss-ttl").textContent=a.t;$("ss-desc").textContent=a.d;info.classList.remove("sw")}
  if(anim){info.classList.add("sw");setTimeout(set,280)}else set();
  slide();a.imgs.slice(0,6).forEach(function(p){new Image().src=p.src})}
 function stop(){clearInterval(timer);timer=null}
 function start(){stop();if(data[ai].imgs.length<2)return;timer=setInterval(function(){si=(si+1)%data[ai].imgs.length;slide()},1600)}
 cards.forEach(function(c,i){
  c.addEventListener("mouseenter",function(){if(ai!==i)album(i,true);start()});
  c.addEventListener("mouseleave",stop);
  c.addEventListener("focus",function(){if(ai!==i)album(i,true)});
  c.addEventListener("click",function(){stop();if(ai!==i)album(i,true);open(i,0)})});
 stage.addEventListener("click",function(){stop();open(ai,si)});
 stage.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();stop();open(ai,si)}});
 /* Lightbox ใช้ #pdlg เดิม (สไตล์มีอยู่ใน style.css) */
 var P=$("pdlg"),I=$("pimg"),li=0,lj=0;
 function paint(){var a=data[li];I.src=a.imgs[lj].src;I.alt=a.t}
 function open(i,j){li=i;lj=j;paint();if(!P.open)P.showModal()}
 function step(d){var n=data[li].imgs.length;lj=(lj+d+n)%n;paint()}
 $("pclose").onclick=function(){P.close()};$("pprev").onclick=function(){step(-1)};$("pnext").onclick=function(){step(1)};
 P.addEventListener("click",function(e){if(e.target===P)P.close()});
 P.addEventListener("keydown",function(e){if(e.key==="ArrowLeft")step(-1);if(e.key==="ArrowRight")step(1)});
 album(0,false);
})();
