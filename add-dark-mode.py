# รันในโฟลเดอร์ที่มีไฟล์ .html ของเว็บ: python3 add-dark-mode.py
# เติมสคริปต์กันจอกะพริบ + ปุ่มสลับโหมด + เลขเวอร์ชันแคช ให้ทุกหน้า (รันซ้ำได้ ไม่ซ้อน)
import re,glob,sys
V="20261126-1"
HEAD='<script>(function(){try{var t=localStorage.getItem("jnew-theme");if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light";document.documentElement.setAttribute("data-theme",t)}catch(e){}})()</script>'
BTN='<button class="tgl" type="button" aria-label="เปลี่ยนเป็นโหมดมืด"><svg class="i-sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg><svg class="i-moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg></button>'
def patch(s):
    if "jnew-theme" not in s:
        s=s.replace('<meta charset="utf-8">','<meta charset="utf-8">\n'+HEAD,1)
        s=s.replace('<meta name="color-scheme" content="light">','<meta name="color-scheme" content="light dark">')
        s=s.replace('<meta name="theme-color" content="#ffffff">','<meta name="theme-color" content="#F6F5F2">')
        s=s.replace('<a class="cta"',BTN+'<a class="cta"',1)
    return re.sub(r'(style\.css|site\.js)(\?v=[^"]*)?"',lambda m:m.group(1)+"?v="+V+'"',s)
for f in (sys.argv[1:] or glob.glob("*.html")):
    s=open(f,encoding="utf-8").read();n=patch(s)
    if n!=s: open(f,"w",encoding="utf-8").write(n);print("updated",f)
