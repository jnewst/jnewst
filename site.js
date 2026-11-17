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
 {t:"AI | ลบรอยหลุมสิว",c:"AI",y:"https://vimeo.com/1246513957",g:"#06143f,#3d6bff"},
 {t:"AI | ลบรอยด่างขาว",c:"AI",hl:1,y:"https://vimeo.com/1242782762",g:"#050a1f,#2b5cff"},
 {t:"AI | ปักหมุดโคราช",c:"AI",y:"https://vimeo.com/1232313794",g:"#000,#1741c4"},
 {t:"โฆษณา | ลบรอยสัก",c:"โฆษณา",hl:1,y:"https://vimeo.com/1232306469",h:1,g:"#000,#0f3a9c"},
 {t:"โฆษณา | ลบรอยแดงสิว",c:"โฆษณา",y:"https://vimeo.com/1232306462",h:1,g:"#050a1f,#2b5cff"},
 {t:"โฆษณา | ลบแผลเป็น",c:"โฆษณา",y:"https://vimeo.com/1232306418",h:1,g:"#0b1a4d,#5b8cff"}
];
var SHOW="https://vimeo.com/showcase/12436496";
function emb(u){if(!u)return"";var s,m;if(m=u.match(/vimeo\.com\/showcase\/(\d+)\/?(?:[?#].*)?$/i)){s="https://vimeo.com/showcase/"+m[1]+"/embed";return'<iframe src="'+s+'" allow="autoplay;fullscreen" allowfullscreen></iframe>'}if(m=u.match(/vimeo\.com\/(?:showcase\/\d+\/)?(?:video\/)?(\d+)(?:\/([a-z0-9]+))?/i)){s="https://player.vimeo.com/video/"+m[1]+"?autoplay=1"+(m[2]?"&h="+m[2]:"")}else if(m=u.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/)){s="https://www.youtube.com/embed/"+m[1]+"?autoplay=1"}else if(/^[\w-]{11}$/.test(u)){s="https://www.youtube.com/embed/"+u+"?autoplay=1"}else return"";return'<iframe src="'+s+'" allow="autoplay;fullscreen" allowfullscreen></iframe>'}
var cats=["ไฮไลต์","ทั้งหมด"].concat(works.map(function(w){return w.c}).filter(function(v,i,a){return a.indexOf(v)===i}));
var QT=[{l:"รีวิว",k:"รีวิว"},{l:"คลิปแนวตั้ง",k:"คลิปแนวตั้ง"},{l:"AI Video",k:"AI"},{l:"งานอีเวนต์",k:"งานอีเวนต์"},{l:"โฆษณา",k:"โฆษณา"}];
var cur="ไฮไลต์",F=document.getElementById("filters"),G=document.getElementById("grid"),G2=document.getElementById("grid2"),Q=document.getElementById("quick");
(function(){var h="";try{h=decodeURIComponent(location.hash.slice(1))}catch(e){}if(cats.indexOf(h)>-1||h==="คลิปแนวตั้ง")cur=h})();
function match(w,k){if(k==="ไฮไลต์")return!!w.hl;if(k==="ทั้งหมด")return true;if(k==="คลิปแนวตั้ง")return!w.h;return w.c===k}
function setCur(c){cur=c;try{history.replaceState(null,"","#"+encodeURIComponent(c))}catch(e){}render()}
function render(){if(!F)return;
 F.innerHTML="";cats.forEach(function(c){var b=document.createElement("button");b.textContent=c;b.setAttribute("aria-pressed",c===cur);b.onclick=function(){setCur(c)};F.appendChild(b)});
 if(Q){Q.innerHTML="<small>หมวดที่ลูกค้าหาบ่อย</small>";QT.forEach(function(t){var n=works.filter(function(w){return match(w,t.k)}).length,b=document.createElement("button");b.type="button";b.innerHTML=t.l+"<b>"+n+"</b>";b.setAttribute("aria-pressed",t.k===cur);b.onclick=function(){setCur(t.k===cur?"ทั้งหมด":t.k)};Q.appendChild(b)})}
 var pr=F.querySelector('[aria-pressed="true"]');if(pr&&F.scrollWidth>F.clientWidth)F.scrollLeft=pr.offsetLeft-(F.clientWidth-pr.offsetWidth)/2;
 G.innerHTML="";G2.innerHTML="";works.forEach(function(w){if(!match(w,cur))return;
  var a=document.createElement("button");a.className="card"+(w.h?" h":"");var g=w.g.split(",");
  var pp=w.t.split(" | "),nm=pp.length>1?pp.slice(1).join(" | "):w.t,ct=pp.length>1?pp[0]:"";
  a.innerHTML='<div class="poster'+(w.th?'':' sk')+'" style="background:linear-gradient(135deg,#ececec,#f6f6f6)">'+(w.th?'<img src="'+w.th+'" alt="" loading="lazy">':'')+'<span class="play">▶</span>'+(w.dur?'<span class="badge">'+fmt(w.dur)+'</span>':'')+'</div><div class="t">'+(ct?'<small class="cat">'+ct+'</small>':'')+'<b>'+nm+'</b></div>';
  a.dataset.k=works.indexOf(w);a.onclick=function(){openVideo(w,a)};
  (w.h?G2:G).appendChild(a)})}
function fmt(n){n=Math.round(n);return Math.floor(n/60)+":"+("0"+n%60).slice(-2)}
function paint(w){fillBento(w);var el=document.querySelector('.card[data-k="'+works.indexOf(w)+'"] .poster');if(!el)return;el.classList.remove("sk");
 if(w.th&&!el.querySelector("img")){var im=new Image();im.alt="";im.style.opacity=0;im.onload=function(){im.style.opacity=1};im.src=w.th;el.insertBefore(im,el.firstChild)}
 if(w.dur&&!el.querySelector(".badge")){var b=document.createElement("span");b.className="badge";b.textContent=fmt(w.dur);el.appendChild(b)}}
function vid(w){var m=(w.y||"").match(/vimeo\.com\/(\d+)/);return m?m[1]:""}
function vhref(w){var v=vid(w);return v?"works.html#v-"+v:"works.html"}
function buildBento(){var B=document.getElementById("bento");if(!B)return;var n=0;
 works.forEach(function(w,k){if(n>=4||!w.hl||w.h)return;n++;var p=w.t.split(" | "),a=document.createElement("a");a.className="bt";a.href=vhref(w);a.dataset.k=k;a.setAttribute("aria-label",w.t);
  a.innerHTML="<span><small>"+(p.length>1?p[0]:"")+"</small>"+(p.length>1?p.slice(1).join(" | "):w.t)+"</span>";B.appendChild(a)})}
function fillBento(w){var a=document.querySelector('.bt[data-k="'+works.indexOf(w)+'"]');if(a&&w.th&&!a.querySelector("img")){var im=new Image();im.alt="";im.style.opacity=0;im.onload=function(){im.style.opacity=1};im.src=w.th;a.insertBefore(im,a.firstChild)}}
function homeInit(){var T=document.getElementById("htabs"),R=document.getElementById("hrow");
 if(T&&R){var cs=[];works.forEach(function(w){if(cs.indexOf(w.c)<0)cs.push(w.c)});var cur=cs[0];
  var draw=function(){T.innerHTML="";cs.forEach(function(c){var b=document.createElement("button");b.type="button";b.textContent=c;b.setAttribute("aria-pressed",c===cur);b.onclick=function(){cur=c;draw()};T.appendChild(b)});
   R.innerHTML="";works.forEach(function(w,k){if(w.c!==cur)return;var a=document.createElement("a");a.className="card"+(w.h?" h":"");a.href=vhref(w);a.dataset.k=k;
    var pp=w.t.split(" | "),nm=pp.length>1?pp.slice(1).join(" | "):w.t;
    a.innerHTML='<div class="poster'+(w.th?"":" sk")+'" style="background:linear-gradient(135deg,#ececec,#f6f6f6)">'+(w.th?'<img src="'+w.th+'" alt="" loading="lazy">':"")+'<span class="play">▶</span>'+(w.dur?'<span class="badge">'+fmt(w.dur)+"</span>":"")+'</div><div class="t"><b>'+nm+"</b></div>";R.appendChild(a)});
   var all=document.getElementById("hall");if(all)all.href="works.html#"+encodeURIComponent(cur);R.scrollLeft=0};
  draw()}
 buildBento()}
function thumbs(){var pend=0;works.forEach(function(w){var m=(w.y||"").match(/vimeo\.com\/(\d+)/);if(!m||w.tq)return;w.tq=1;pend++;
 fetch("https://vimeo.com/api/oembed.json?url="+encodeURIComponent("https://vimeo.com/"+m[1])+"&width=640").then(function(r){return r.json()}).then(function(j){if(j){if(j.thumbnail_url)w.th=j.thumbnail_url;if(j.duration)w.dur=j.duration;paint(w)}}).catch(function(){})})}
render();homeInit();if(F||document.getElementById("bento")||document.getElementById("htabs"))thumbs();
(function(){var m=location.hash.match(/^#v-(\d+)$/);if(!m||!F)return;var k=-1;works.forEach(function(w,i){if(k<0&&(w.y||"").indexOf("/"+m[1])>-1)k=i});if(k<0)return;cur="ทั้งหมด";render();
 setTimeout(function(){var c=document.querySelector('.card[data-k="'+k+'"]');if(c&&window.openVideo){c.scrollIntoView({block:"center",behavior:"instant"});setTimeout(function(){openVideo(works[k],c)},150)}},300)})();
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
   a.innerHTML='<div class="poster" style="background:linear-gradient(135deg,#ececec,#f6f6f6)"><img src="'+esc(cv)+'" alt="" loading="lazy"><span class="badge">'+al.imgs.length+' ภาพ</span></div><div class="t"><b>'+esc(al.t)+'</b>'+(al.d?'<p>'+esc(al.d)+'</p>':'')+'</div>';
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
 var vals={years:Math.max(1,new Date().getFullYear()-2023),works:works.length,albums:albums.length,brands:document.querySelectorAll(".brands span").length||3};
 var els=[].slice.call(document.querySelectorAll("[data-stat]"));
 els.forEach(function(el){var k=el.getAttribute("data-stat");if(vals[k]!=null)el.setAttribute("data-to",vals[k])});
 function fmt(el,n){el.textContent=n+(el.getAttribute("data-suffix")||"")}
 function run(el){var to=+el.getAttribute("data-to");if(reduce||!to){fmt(el,to);return}
  var t0=null,d=1100;function f(t){if(t0===null)t0=t;var p=Math.min((t-t0)/d,1);fmt(el,Math.round(to*(1-Math.pow(1-p,3))));if(p<1)requestAnimationFrame(f)}
  fmt(el,0);requestAnimationFrame(f)}
 els.forEach(function(el){fmt(el,+el.getAttribute("data-to"))});
})();
(function(){if(!document.getElementById("vdlg"))return;
 var curShare=null,prevHash="";
 var VD=document.getElementById("vdlg"),PN=document.getElementById("vpanel"),SL=document.getElementById("vslot"),PL=document.getElementById("vplayer"),CV=document.getElementById("vcover"),card=null,curK=-1,busy=false,tok=0,scope="#grid .card,#grid2 .card",PV=document.getElementById("vprev"),NX=document.getElementById("vnext");
 function box(r){PN.style.left=r.left+"px";PN.style.top=r.top+"px";PN.style.width=r.width+"px";PN.style.height=r.height+"px"}
 function reset(){PN.className="apanel";PN.removeAttribute("style");SL.style.width="";SL.style.height="";SL.classList.remove("nav");PL.innerHTML=""}
 function fit(w){var vt=!!w.y&&!w.h,maxH=Math.max(240,innerHeight-215),maxW=innerWidth*.92,pw,ph;
  if(vt){ph=Math.min(maxH,820);pw=ph*9/16;if(pw>maxW){pw=maxW;ph=pw*16/9}}
  else{pw=Math.min(920,maxW);ph=pw*9/16;if(ph>maxH){ph=maxH;pw=ph*16/9}}
  SL.style.width=pw+"px";SL.style.height=ph+"px";
  PL.style.setProperty("--pw",pw+"px");PL.style.setProperty("--ph",ph+"px")}
 function info(w){var p=(w.t||"").split(" | ");
  document.getElementById("vtitle").textContent=p.length>1?p.slice(1).join(" | "):w.t;
  document.getElementById("vcat").textContent=p.length>1?p[0]:"";
  document.getElementById("vext").href=w.y||SHOW;
  var vid=((w.y||"").match(/vimeo\.com\/(\d+)/)||[])[1];curShare={t:w.t,id:vid};
  if(vid){try{history.replaceState(null,"","#v-"+vid)}catch(x){}}
  if(w.th){CV.src=w.th;CV.style.display=""}else{CV.removeAttribute("src");CV.style.display="none"}}
 function target(k){return document.querySelector(scope.split(",").map(function(s){return s+'[data-k="'+k+'"]'}).join(","))}
 function seq(){var ks=[].map.call(document.querySelectorAll(scope),function(c){return+c.dataset.k});return ks.length?ks:works.map(function(x,i){return i})}
 function navState(){var n=seq().length<2;if(PV)PV.disabled=n;if(NX)NX.disabled=n}
 window.openVideo=function(w,a){
  if(busy)return;busy=true;card=a;curK=works.indexOf(w);var my=++tok;scope=a.closest("#bento")?"#bento .bt":a.closest("#hrow")?"#hrow .card":"#grid .card,#grid2 .card";navState();
  prevHash=location.hash.indexOf("#v-")===0?"":location.hash;
  reset();info(w);fit(w);
  VD.classList.remove("in");VD.showModal();
  var pr=PN.getBoundingClientRect(),r=a.getBoundingClientRect();
  PN.style.transition="none";PN.classList.add("fly");box(r);PN.style.borderRadius="12px";
  a.style.visibility="hidden";void PN.offsetWidth;PN.style.transition="";
  requestAnimationFrame(function(){requestAnimationFrame(function(){VD.classList.add("in");box(pr);PN.style.borderRadius=""})});
  setTimeout(function(){if(my===tok&&VD.open)PL.innerHTML=emb(w.y||SHOW)},250);
  setTimeout(function(){PN.classList.remove("fly");PN.removeAttribute("style");busy=false},650)};
 function go(d){
  if(busy||!VD.open)return;var ks=seq();if(ks.length<2)return;
  var i=ks.indexOf(curK);if(i<0)i=d>0?-1:0;
  var k=ks[(i+d+ks.length)%ks.length],w=works[k],my=++tok;curK=k;
  if(card)card.style.visibility="";
  card=target(k);
  if(card){card.style.visibility="hidden";try{card.scrollIntoView({block:card.closest("#grid,#grid2")?"center":"nearest",inline:card.closest("#hrow")?"center":"nearest",behavior:"instant"})}catch(x){}}
  PL.innerHTML="";info(w);SL.classList.add("nav");fit(w);clearTimeout(go._t);go._t=setTimeout(function(){SL.classList.remove("nav")},400);
  setTimeout(function(){if(my===tok&&VD.open)PL.innerHTML=emb(w.y||SHOW)},120)}
 function closeV(){
  if(busy||!VD.open)return;busy=true;tok++;
  if(curShare&&curShare.id){try{history.replaceState(null,"",prevHash||location.pathname+location.search)}catch(x){}}
  var c=card&&card.isConnected?card:null;
  if(!c){VD.style.transition="opacity .3s ease";VD.style.opacity="0";PL.innerHTML="";
   setTimeout(function(){VD.close();VD.style.opacity="";VD.style.transition="";reset();busy=false},320);return}
  var pr=PN.getBoundingClientRect(),r=c.getBoundingClientRect();
  PN.style.transition="none";PN.classList.add("fly");box(pr);void PN.offsetWidth;PN.style.transition="";
  VD.classList.remove("in");box(r);PN.style.borderRadius="12px";
  setTimeout(function(){PL.innerHTML=""},200);
  setTimeout(function(){VD.close();reset();c.style.visibility="";busy=false},560)}
 function toast(m){var t=document.getElementById("toast");if(!t){t=document.createElement("div");t.id="toast";t.setAttribute("role","status")}
  (document.querySelector("dialog[open]")||document.body).appendChild(t);t.textContent=m;void t.offsetWidth;t.classList.add("on");clearTimeout(t._t);t._t=setTimeout(function(){t.classList.remove("on")},2200)}
 function copy(u){function fb(){var x=document.createElement("textarea");x.value=u;x.style.cssText="position:fixed;left:-999px;top:0";(document.querySelector("dialog[open]")||document.body).appendChild(x);x.select();try{document.execCommand("copy");toast("คัดลอกลิงก์แล้ว")}catch(e){toast("คัดลอกไม่ได้ ลองก๊อปจากแถบที่อยู่")}x.remove()}
  if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(u).then(function(){toast("คัดลอกลิงก์แล้ว")},fb)}else fb()}
 var SB=document.getElementById("vshare");if(SB)SB.onclick=function(){if(curShare&&curShare.id)copy(new URL("works.html#v-"+curShare.id,location.href).href)};
 var PV=document.getElementById("vprev"),NX=document.getElementById("vnext");
 if(PV)PV.onclick=function(){go(-1)};if(NX)NX.onclick=function(){go(1)};
 document.addEventListener("keydown",function(e){if(!VD.open)return;if(e.key==="ArrowLeft"){e.preventDefault();go(-1)}else if(e.key==="ArrowRight"){e.preventDefault();go(1)}});
 document.getElementById("vclose").onclick=closeV;
 VD.addEventListener("cancel",function(e){e.preventDefault();closeV()});
 VD.addEventListener("click",function(e){var t=e.target;if(t===VD||t.classList.contains("ablur")||t.classList.contains("awrap"))closeV()});
 // หน้าแรก: กดคลิปแล้วเล่นในหน้าต่างเดิมได้เลย
 document.addEventListener("click",function(e){
  if(e.defaultPrevented||e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||!e.target.closest)return;
  var t=e.target,a=t.closest(".bt")||t.closest("#hrow .card");
  if(!a||!works[+a.dataset.k])return;
  e.preventDefault();openVideo(works[+a.dataset.k],a)});
})();
(function(){var B=document.querySelectorAll(".cp");if(!B.length)return;
 function toast(m){var t=document.getElementById("toast");if(!t){t=document.createElement("div");t.id="toast";t.setAttribute("role","status");document.body.appendChild(t)}t.textContent=m;void t.offsetWidth;t.classList.add("on");clearTimeout(t._t);t._t=setTimeout(function(){t.classList.remove("on")},2200)}
 function copy(v,m){function fb(){var x=document.createElement("textarea");x.value=v;x.setAttribute("readonly","");x.style.cssText="position:fixed;left:-999px;top:0";document.body.appendChild(x);x.select();var ok=false;try{ok=document.execCommand("copy")}catch(e){}x.remove();toast(ok?m:"คัดลอกไม่ได้ ลองกดค้างที่ข้อความ")}
  if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(v).then(function(){toast(m)},fb)}else fb()}
 [].forEach.call(B,function(b){b.addEventListener("click",function(){copy(b.dataset.copy,b.dataset.msg)})})})();
(function(){if(!("IntersectionObserver" in window)||(window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches))return;
 document.documentElement.classList.add("js");
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("vis");io.unobserve(e.target)}})},{threshold:.06});
 document.querySelectorAll("section").forEach(function(x){x.classList.add("rv");io.observe(x)})})();
(function(){var T=document.querySelector("header.top");if(!T)return;var B=T.querySelector(".mbtn");
 function set(o){T.classList.toggle("open",o);if(B)B.setAttribute("aria-expanded",o?"true":"false")}
 if(B)B.addEventListener("click",function(){set(!T.classList.contains("open"))});
 T.addEventListener("click",function(e){if(e.target.closest&&e.target.closest("nav a"))set(false)});
 document.addEventListener("keydown",function(e){if(e.key==="Escape")set(false)});
 window.addEventListener("resize",function(){if(window.innerWidth>720)set(false)})})();
(function(){if(window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches)return;var H=document.documentElement;
 window.addEventListener("pageshow",function(e){if(e.persisted)H.classList.remove("leaving")});
 document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href]");if(!a||e.defaultPrevented||e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
  if(a.target&&a.target!=="_self"||a.hasAttribute("download"))return;var u;try{u=new URL(a.href,location.href)}catch(x){return}
  if(u.origin!==location.origin||(u.pathname===location.pathname&&u.search===location.search))return;
  e.preventDefault();H.classList.add("leaving");setTimeout(function(){location.href=a.href},230)})})();
