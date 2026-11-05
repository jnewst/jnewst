// ใส่ลิงก์ Vimeo ของแต่ละคลิปที่ช่อง y เช่น y:"https://vimeo.com/123456789" (เรียงตาม Showcase) ถ้ายังไม่ใส่ จะเปิดคลิปจาก Showcase รวมแทน
var works=[
 {t:"งานอีเวนต์ | BioActive Plus - Meen",c:"งานอีเวนต์",hl:1,y:"https://vimeo.com/1232305532",g:"#000,#0f3a9c"},
 {t:"งานอีเวนต์ | BioActive Plus - NamtanFilm",c:"งานอีเวนต์",y:"https://vimeo.com/1232305531",g:"#050a1f,#2b5cff"},
 {t:"งานอีเวนต์ | BioActive Plus - Becky",c:"งานอีเวนต์",y:"https://vimeo.com/1232305533",g:"#000,#1741c4"},
 {t:"รีวิว | คุณซานนิ ลบรอยแผลเป็น",c:"รีวิว",hl:1,y:"https://vimeo.com/1232306470",g:"#0b1a4d,#5b8cff"},
 {t:"รีวิว | คุณยูนิฟ โปรแกรมฉีด Neauvia",c:"รีวิว",y:"https://vimeo.com/1232306421",g:"#000,#1741c4"},
 {t:"รีวิว | คุณอั๋น ลบรอยสัก",c:"รีวิว",y:"https://vimeo.com/1232306419",g:"#06143f,#3d6bff"},
 {t:"คอนเทนต์คลินิก | คุณนิก ลบรอยแดงสิว",c:"คอนเทนต์คลินิก",hl:1,y:"https://vimeo.com/1242783136",g:"#06143f,#3d6bff"},
 {t:"คอนเทนต์คลินิก | คุณเซ้นต์ ขายโปรโมชั่น",c:"คอนเทนต์คลินิก",y:"https://vimeo.com/1242782451",g:"#000,#1741c4"},
 {t:"คอนเทนต์คลินิก | One Direction to erase the marks",c:"คอนเทนต์คลินิก",y:"https://vimeo.com/1237508449",g:"#0b1a4d,#5b8cff"},
 {t:"คอนเทนต์คลินิก | คุณเซ้นต์",c:"คอนเทนต์คลินิก",y:"https://vimeo.com/1242687469",g:"#000,#0f3a9c"},
 {t:"วิดีโอความรู้ | หมอหญิง ลบรอยสัก",c:"วิดีโอความรู้",hl:1,y:"https://vimeo.com/1232307410",g:"#06143f,#3d6bff"},
 {t:"วิดีโอความรู้ | หมอแบงค์ สอนดูแลผิว",c:"วิดีโอความรู้",y:"https://vimeo.com/1232307409",g:"#0b1a4d,#5b8cff"},
 {t:"วิดีโอความรู้ | หมอหนุ่ม ก่อนลบรอยสัก ควรทำอย่างไร",c:"วิดีโอความรู้",y:"https://vimeo.com/1232307408",g:"#000,#0f3a9c"},
 {t:"วิดีโอความรู้ | หมอปรัช การเลือกหัวเลเซอร์ลบรอยสัก",c:"วิดีโอความรู้",y:"https://vimeo.com/1232307411",g:"#050a1f,#2b5cff"},
 {t:"วิดีโอแนะนำโครงการ | บ้านเดี่ยวติดสวน",c:"วิดีโอแนะนำโครงการ",hl:1,y:"https://vimeo.com/1232306946",g:"#000,#1741c4"},
 {t:"วิดีโอแนะนำโครงการ | แนะนำโครงการ",c:"วิดีโอแนะนำโครงการ",y:"https://vimeo.com/1232306945",g:"#06143f,#3d6bff"},
 {t:"สัมภาษณ์ | ผู้บริหารโครงการ K Grand Ville",c:"สัมภาษณ์",hl:1,y:"https://vimeo.com/982304860",g:"#06143f,#3d6bff"},
 {t:"AI | ลบรอยด่างขาว",c:"AI",hl:1,y:"https://vimeo.com/1242782762",g:"#050a1f,#2b5cff"},
 {t:"AI | ปักหมุดโคราช",c:"AI",y:"https://vimeo.com/1232313794",g:"#000,#1741c4"},
 {t:"โฆษณา | ลบรอยสัก",c:"โฆษณา",hl:1,y:"https://vimeo.com/1232306469",h:1,g:"#000,#0f3a9c"},
 {t:"โฆษณา | ลบรอยแดงสิว",c:"โฆษณา",y:"https://vimeo.com/1232306462",h:1,g:"#050a1f,#2b5cff"},
 {t:"โฆษณา | ลบแผลเป็น",c:"โฆษณา",y:"https://vimeo.com/1232306418",h:1,g:"#0b1a4d,#5b8cff"}
];
var SHOW="https://vimeo.com/showcase/12436496";
function emb(u){if(!u)return"";var s,m;if(m=u.match(/vimeo\.com\/showcase\/(\d+)\/?(?:[?#].*)?$/i)){s="https://vimeo.com/showcase/"+m[1]+"/embed";return'<iframe src="'+s+'" allow="autoplay;fullscreen" allowfullscreen></iframe>'}if(m=u.match(/vimeo\.com\/(?:showcase\/\d+\/)?(?:video\/)?(\d+)(?:\/([a-z0-9]+))?/i)){s="https://player.vimeo.com/video/"+m[1]+"?autoplay=1"+(m[2]?"&h="+m[2]:"")}else if(m=u.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/)){s="https://www.youtube.com/embed/"+m[1]+"?autoplay=1"}else if(/^[\w-]{11}$/.test(u)){s="https://www.youtube.com/embed/"+u+"?autoplay=1"}else return"";return'<iframe src="'+s+'" allow="autoplay;fullscreen" allowfullscreen></iframe>'}
var cats=["ไฮไลต์","ทั้งหมด"].concat(works.map(function(w){return w.c}).filter(function(v,i,a){return a.indexOf(v)===i}));
var cur="ไฮไลต์",F=document.getElementById("filters"),G=document.getElementById("grid"),G2=document.getElementById("grid2");
function render(){if(!F)return;
 F.innerHTML="";cats.forEach(function(c){var b=document.createElement("button");b.textContent=c;b.setAttribute("aria-pressed",c===cur);b.onclick=function(){cur=c;render()};F.appendChild(b)});
 var pr=F.querySelector('[aria-pressed="true"]');if(pr&&F.scrollWidth>F.clientWidth)F.scrollLeft=pr.offsetLeft-(F.clientWidth-pr.offsetWidth)/2;
 G.innerHTML="";G2.innerHTML="";works.forEach(function(w){if(cur==="ไฮไลต์"?!w.hl:(cur!=="ทั้งหมด"&&w.c!==cur))return;
  var a=document.createElement("button");a.className="card"+(w.h?" h":"");var g=w.g.split(",");
  var pp=w.t.split(" | "),nm=pp.length>1?pp.slice(1).join(" | "):w.t,ct=pp.length>1?pp[0]:"";
  a.innerHTML='<div class="poster'+(w.th?'':' sk')+'" style="background:linear-gradient(135deg,'+g[0]+','+g[1]+')">'+(w.th?'<img src="'+w.th+'" alt="" loading="lazy">':'')+'<span class="play">▶</span>'+(w.dur?'<span class="badge">'+fmt(w.dur)+'</span>':'')+'</div><div class="t">'+(ct?'<small class="cat">'+ct+'</small>':'')+'<b>'+nm+'</b></div>';
  a.dataset.k=works.indexOf(w);a.onclick=function(){openVideo(w,a)};
  (w.h?G2:G).appendChild(a)})}
function fmt(n){n=Math.round(n);return Math.floor(n/60)+":"+("0"+n%60).slice(-2)}
function paint(w){var el=document.querySelector('.card[data-k="'+works.indexOf(w)+'"] .poster');if(!el)return;el.classList.remove("sk");
 if(w.th&&!el.querySelector("img")){var im=new Image();im.alt="";im.style.opacity=0;im.onload=function(){im.style.opacity=1};im.src=w.th;el.insertBefore(im,el.firstChild)}
 if(w.dur&&!el.querySelector(".badge")){var b=document.createElement("span");b.className="badge";b.textContent=fmt(w.dur);el.appendChild(b)}}
function marq(){var R=document.getElementById("reel2"),l=works.filter(function(w){return w.th});if(!R||l.length<6)return;
 var h=l.map(function(w){return'<img src="'+w.th+'" alt="" loading="lazy">'}).join("");R.innerHTML='<div class="rt">'+h+h+'</div>';R.classList.add("on")}
function thumbs(){var pend=0;works.forEach(function(w){var m=(w.y||"").match(/vimeo\.com\/(\d+)/);if(!m||w.tq)return;w.tq=1;pend++;
 fetch("https://vimeo.com/api/oembed.json?url="+encodeURIComponent("https://vimeo.com/"+m[1])+"&width=640").then(function(r){return r.json()}).then(function(j){if(j){if(j.thumbnail_url)w.th=j.thumbnail_url;if(j.duration)w.dur=j.duration;paint(w)}}).catch(function(){}).then(function(){if(--pend===0)marq()})})}
render();if(F||document.getElementById("reel2"))thumbs();
// ภาพนิ่งแบบอัลบั้ม: 1 อัลบั้ม = 1 การ์ด (1 โฟลเดอร์ใน images/)
// วิธีที่ 1 (อัตโนมัติ): สร้างโฟลเดอร์ images/<ชื่อโฟลเดอร์>/ แล้วโยนรูปลงไป จากนั้นใส่ {t:"ชื่องาน",dir:"ชื่อโฟลเดอร์"} ด้านล่าง
//   (ไม่ใส่ในรายการก็ได้ ระบบจะสร้างการ์ดให้เองโดยใช้ชื่อโฟลเดอร์เป็นชื่อ)
// วิธีที่ 2 (ระบุเอง): {t:"ชื่องาน",d:"คำอธิบาย",cover:"images/a/01.jpg",imgs:["images/a/01.jpg","images/a/02.jpg"]}
var albums=[
 {t:"RemovalOnMe",dir:"RemovalOnMe",cover:"RemovalOnMe-151.jpg",imgs:["images/RemovalOnMe/RemovalOnMe-43.jpg","images/RemovalOnMe/RemovalOnMe-45.jpg","images/RemovalOnMe/RemovalOnMe-73.jpg","images/RemovalOnMe/RemovalOnMe-79.jpg","images/RemovalOnMe/RemovalOnMe-111.jpg","images/RemovalOnMe/RemovalOnMe-133.jpg","images/RemovalOnMe/RemovalOnMe-134.jpg","images/RemovalOnMe/RemovalOnMe-151.jpg","images/RemovalOnMe/RemovalOnMe-153.jpg","images/RemovalOnMe/RemovalOnMe-161.jpg","images/RemovalOnMe/RemovalOnMe-185.jpg","images/RemovalOnMe/RemovalOnMe-191.jpg","images/RemovalOnMe/RemovalOnMe-201.jpg","images/RemovalOnMe/RemovalOnMe-230.jpg","images/RemovalOnMe/RemovalOnMe-237.jpg"]},
 {t:"OneDirectionToEraseTheMarks",dir:"OneDirectionToEraseTheMarks",cover:"OneDirectionToEraseTheMarks-58.jpg",imgs:["images/OneDirectionToEraseTheMarks/OneDirectionToEraseTheMarks-3.jpg","images/OneDirectionToEraseTheMarks/OneDirectionToEraseTheMarks-7.jpg","images/OneDirectionToEraseTheMarks/OneDirectionToEraseTheMarks-24.jpg","images/OneDirectionToEraseTheMarks/OneDirectionToEraseTheMarks-27.jpg","images/OneDirectionToEraseTheMarks/OneDirectionToEraseTheMarks-35.jpg","images/OneDirectionToEraseTheMarks/OneDirectionToEraseTheMarks-55.jpg","images/OneDirectionToEraseTheMarks/OneDirectionToEraseTheMarks-58.jpg","images/OneDirectionToEraseTheMarks/OneDirectionToEraseTheMarks-67.jpg","images/OneDirectionToEraseTheMarks/OneDirectionToEraseTheMarks-77.jpg","images/OneDirectionToEraseTheMarks/OneDirectionToEraseTheMarks-85.jpg","images/OneDirectionToEraseTheMarks/OneDirectionToEraseTheMarks-95.jpg","images/OneDirectionToEraseTheMarks/OneDirectionToEraseTheMarks-130.jpg"]},
 {t:"ตรุษจีน",dir:"ChineseNewYear",cover:"cny-67.jpg",imgs:["images/ChineseNewYear/cny-3.jpg","images/ChineseNewYear/cny-21.jpg","images/ChineseNewYear/cny-34.jpg","images/ChineseNewYear/cny-44.jpg","images/ChineseNewYear/cny-47.jpg","images/ChineseNewYear/cny-56.jpg","images/ChineseNewYear/cny-67.jpg","images/ChineseNewYear/cny-73.jpg","images/ChineseNewYear/cny-104.jpg","images/ChineseNewYear/cny-106.jpg","images/ChineseNewYear/cny-118.jpg"]}
 // {t:"งานอีเวนต์ | BioActive Plus",d:"ภาพบรรยากาศและเบื้องหลัง",dir:"bioactive"},
 // {t:"คอนเทนต์คลินิก",dir:"clinic"},
 // {t:"โครงการ K Grand Ville",dir:"kgrand",cover:"01.jpg"}
];
(function(){if(!document.getElementById("albums"))return;
 var A=document.getElementById("albums"),AD=document.getElementById("adlg"),AM=document.getElementById("amasonry"),
 P=document.getElementById("pdlg"),I=document.getElementById("pimg"),list=[],idx=0;
 var IMG=/\.(jpe?g|png|webp|gif|avif)$/i;
 function esc(s){return String(s||"").replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
 function num(a,b){return a.localeCompare(b,undefined,{numeric:true})}
 function norm(x){return typeof x==="string"?{src:x,t:""}:x}
 function open(i){idx=(i+list.length)%list.length;I.src=list[idx].src;I.alt=list[idx].t||"";if(!P.open)P.showModal()}
 var PN=document.getElementById("apanel"),SL=document.getElementById("aslot"),curCard=null,busy=false;
 function box(r){PN.style.left=r.left+"px";PN.style.top=r.top+"px";PN.style.width=r.width+"px";PN.style.height=r.height+"px"}
 function reset(){PN.className="apanel";PN.removeAttribute("style");SL.style.height=""}
 function openAlbum(al,card){
  if(busy)return;busy=true;curCard=card;
  document.getElementById("atitle").textContent=al.t;document.getElementById("adesc").textContent=(al.d?al.d+" · ":"")+al.imgs.length+" ภาพ";
  document.getElementById("acover").src=al._cv||al.imgs[0].src;
  AM.innerHTML="";list=al.imgs;
  list.forEach(function(p,i){var b=document.createElement("button");b.style.setProperty("--i",Math.min(i,18));b.innerHTML='<img src="'+esc(p.src)+'" alt="'+esc(p.t)+'"'+(i<24?'':' loading="lazy"')+' decoding="async">';var im=b.firstChild;im.onload=function(){if(im.naturalWidth&&im.naturalHeight)b.style.setProperty("--r",(im.naturalWidth/im.naturalHeight).toFixed(4))};if(im.complete)im.onload();b.onclick=function(){open(i)};AM.appendChild(b)});
  reset();AD.classList.remove("in");AD.showModal();
  var pr=PN.getBoundingClientRect(),r=card.getBoundingClientRect();
  SL.style.height=pr.height+"px";
  PN.style.transition="none";PN.classList.add("fly");box(r);PN.style.borderRadius="12px";
  card.style.visibility="hidden";void PN.offsetWidth;PN.style.transition="";
  requestAnimationFrame(function(){requestAnimationFrame(function(){AD.classList.add("in");box(pr);PN.style.borderRadius=""})});
  setTimeout(function(){PN.classList.remove("fly");PN.removeAttribute("style");busy=false},650)}
 function closeAlbum(){
  if(busy||!AD.open)return;busy=true;
  var pr=PN.getBoundingClientRect(),r=curCard.getBoundingClientRect();
  PN.style.transition="none";PN.classList.add("fly");box(pr);void PN.offsetWidth;PN.style.transition="";
  AD.classList.remove("in");box(r);PN.style.borderRadius="12px";
  setTimeout(function(){AD.close();reset();curCard.style.visibility="";busy=false},560)}
 function draw(){
  A.innerHTML="";
  albums.forEach(function(al){
   if(!al.imgs||!al.imgs.length)return;
   var cv=al.cover?(al.cover.indexOf("/")<0&&al.dir!==undefined?"images/"+(al.dir?encodeURIComponent(al.dir)+"/":"")+encodeURIComponent(al.cover):al.cover):al.imgs[0].src;
   var a=document.createElement("button");a.className="card album";
   a.innerHTML='<div class="poster" style="background:linear-gradient(135deg,#000,#0f3a9c)"><img src="'+esc(cv)+'" alt="" loading="lazy"><span class="badge">'+al.imgs.length+' ภาพ</span></div><div class="t"><b>'+esc(al.t)+'</b>'+(al.d?'<p>'+esc(al.d)+'</p>':'')+'</div>';
   al._cv=cv;a.onclick=function(){openAlbum(al,a)};A.appendChild(a)})}
 document.getElementById("aclose").onclick=closeAlbum;
 AD.addEventListener("cancel",function(e){e.preventDefault();closeAlbum()});
 AD.addEventListener("click",function(e){var t=e.target;if(t===AD||t.classList.contains("ablur")||t.classList.contains("awrap"))closeAlbum()});
 document.getElementById("pclose").onclick=function(){P.close()};
 document.getElementById("pprev").onclick=function(){open(idx-1)};
 document.getElementById("pnext").onclick=function(){open(idx+1)};
 P.addEventListener("click",function(e){if(e.target===P)P.close()});
 P.addEventListener("keydown",function(e){if(e.key==="ArrowLeft")open(idx-1);if(e.key==="ArrowRight")open(idx+1)});
 albums.forEach(function(al){if(al.imgs)al.imgs=al.imgs.map(norm)});
 var h=location.hostname;
 if(!/\.github\.io$/.test(h)){draw();return}
 var seg=location.pathname.split("/")[1],r=(seg&&seg.indexOf(".")<0)?seg:h;
 fetch("https://api.github.com/repos/"+h.split(".")[0]+"/"+r+"/git/trees/HEAD?recursive=1").then(function(x){return x.ok?x.json():{tree:[]}}).then(function(j){
  var by={};
  (j.tree||[]).forEach(function(f){var m=f.path.match(/^images\/(?:([^\/]+)\/)?([^\/]+)$/);if(!m||f.type!=="blob"||!IMG.test(m[2]))return;(by[m[1]||""]=by[m[1]||""]||[]).push(m[2])});
  var used={};
  albums.forEach(function(al){
   if(al.dir!==undefined)used[al.dir]=1;
   if(al.imgs&&al.imgs.length)return;
   var k=al.dir||"";
   al.imgs=(by[k]||[]).sort(num).map(function(n){return{src:"images/"+(k?encodeURIComponent(k)+"/":"")+encodeURIComponent(n),t:""}})});
  Object.keys(by).sort(num).forEach(function(k){if(used[k])return;
   albums.push({t:k||"ภาพอื่น ๆ",dir:k,imgs:by[k].sort(num).map(function(n){return{src:"images/"+(k?encodeURIComponent(k)+"/":"")+encodeURIComponent(n),t:""}})})});
  draw()}).catch(draw)
})();
(function(){
 var reduce=window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches;
 var vals={years:Math.max(1,new Date().getFullYear()-2023),works:works.length,albums:albums.length,brands:document.querySelectorAll(".brands span").length};
 var els=[].slice.call(document.querySelectorAll("[data-stat]"));
 els.forEach(function(el){var k=el.getAttribute("data-stat");if(vals[k]!=null)el.setAttribute("data-to",vals[k])});
 function fmt(el,n){el.textContent=n+(el.getAttribute("data-suffix")||"")}
 function run(el){var to=+el.getAttribute("data-to");if(reduce||!to){fmt(el,to);return}
  var t0=null,d=1100;function f(t){if(t0===null)t0=t;var p=Math.min((t-t0)/d,1);fmt(el,Math.round(to*(1-Math.pow(1-p,3))));if(p<1)requestAnimationFrame(f)}
  fmt(el,0);requestAnimationFrame(f)}
 els.forEach(function(el){fmt(el,+el.getAttribute("data-to"))});
 if(!("IntersectionObserver" in window))return;
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){run(e.target);io.unobserve(e.target)}})},{threshold:.5});
 els.forEach(function(el){io.observe(el)});
})();
(function(){if(!document.getElementById("vdlg"))return;
 var VD=document.getElementById("vdlg"),PN=document.getElementById("vpanel"),SL=document.getElementById("vslot"),PL=document.getElementById("vplayer"),CV=document.getElementById("vcover"),card=null,curK=-1,busy=false,tok=0;
 function box(r){PN.style.left=r.left+"px";PN.style.top=r.top+"px";PN.style.width=r.width+"px";PN.style.height=r.height+"px"}
 function reset(){PN.className="apanel";PN.removeAttribute("style");SL.style.width="";SL.style.height="";PL.innerHTML=""}
 window.openVideo=function(w,a){
  if(busy)return;busy=true;card=a;curK=works.indexOf(w);var my=++tok;
  var p=(w.t||"").split(" | ");
  document.getElementById("vtitle").textContent=p.length>1?p.slice(1).join(" | "):w.t;
  document.getElementById("vcat").textContent=p.length>1?p[0]:"";
  document.getElementById("vext").href=w.y||SHOW;
  var vt=!!w.y&&!w.h,maxH=Math.max(240,innerHeight-190),maxW=innerWidth*.92,pw,ph;
  if(vt){ph=Math.min(maxH,820);pw=ph*9/16;if(pw>maxW){pw=maxW;ph=pw*16/9}}
  else{pw=Math.min(920,maxW);ph=pw*9/16;if(ph>maxH){ph=maxH;pw=ph*16/9}}
  reset();
  SL.style.width=pw+"px";SL.style.height=ph+"px";
  PL.style.setProperty("--pw",pw+"px");PL.style.setProperty("--ph",ph+"px");
  if(w.th){CV.src=w.th;CV.style.display=""}else{CV.removeAttribute("src");CV.style.display="none"}
  VD.classList.remove("in");VD.showModal();
  var pr=PN.getBoundingClientRect(),r=a.getBoundingClientRect();
  PN.style.transition="none";PN.classList.add("fly");box(r);PN.style.borderRadius="12px";
  a.style.visibility="hidden";void PN.offsetWidth;PN.style.transition="";
  requestAnimationFrame(function(){requestAnimationFrame(function(){VD.classList.add("in");box(pr);PN.style.borderRadius=""})});
  setTimeout(function(){if(my===tok&&VD.open)PL.innerHTML=emb(w.y||SHOW)},250);
  setTimeout(function(){PN.classList.remove("fly");PN.removeAttribute("style");busy=false},650)};
 function closeV(){
  if(busy||!VD.open)return;busy=true;tok++;
  var c=document.querySelector('.card[data-k="'+curK+'"]')||card;
  var pr=PN.getBoundingClientRect(),r=c.getBoundingClientRect();
  PN.style.transition="none";PN.classList.add("fly");box(pr);void PN.offsetWidth;PN.style.transition="";
  VD.classList.remove("in");box(r);PN.style.borderRadius="12px";
  setTimeout(function(){PL.innerHTML=""},200);
  setTimeout(function(){VD.close();reset();c.style.visibility="";card.style.visibility="";busy=false},560)}
 document.getElementById("vclose").onclick=closeV;
 VD.addEventListener("cancel",function(e){e.preventDefault();closeV()});
 VD.addEventListener("click",function(e){var t=e.target;if(t===VD||t.classList.contains("ablur")||t.classList.contains("awrap"))closeV()});
})();
(function(){if(!("IntersectionObserver" in window)||(window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches))return;
 document.documentElement.classList.add("js");
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("vis");io.unobserve(e.target)}})},{threshold:.06});
 document.querySelectorAll("section").forEach(function(x){x.classList.add("rv");io.observe(x)})})();
