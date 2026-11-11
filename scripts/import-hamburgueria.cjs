/* One-off import of Jesse Santos's own publicly published Behance project.
   Runs only in the isolated GitHub import branch. */
const fs = require("node:fs");
const path = require("node:path");
const { chromium } = require("playwright");
const PROJECT_ID = "204358135";
const PROJECT_URL = "https://www.behance.net/gallery/204358135/SOCIAL-MEDIA-HAMBURGUERIA";
const DIR = path.join(process.cwd(), "jesse-santos/public/projects/behance");
const DATA = path.join(process.cwd(), "jesse-santos/data/projects.ts");
const COVER = "/projects/behance/social-media-hamburgueria-capa.webp";
const fromUrl = (str) => {
  if (!str || !str.includes("project_modules")) return null;
  try { return new URL(str.replace(/&amp;/g,"&"), PROJECT_URL).href; } catch { return null; }
};
(async () => {
  const browser = await chromium.launch({ headless: true, args: ["--disable-blink-features=AutomationControlled"] });
  const context = await browser.newContext({
    viewport: {width: 1440, height: 900},
    locale: "pt-BR",
    userAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
  });
  const page = await context.newPage();
  const captured = [];
  page.on("response", res => {
    const url = fromUrl(res.url());
    if(url) captured.push(url);
  });
  try {
    const res = await page.goto(PROJECT_URL, {waitUntil:"domcontentloaded", timeout: 60000});
    console.log("Behance status:", res?.status(), "title:", await page.title());
    for (let i=0; i<26; i++) {
      await page.mouse.wheel(0, 1150);
      await page.waitForTimeout(250);
    }
    const dom = await page.evaluate(() => {
      const collected = [];
      document.querySelectorAll("img, source").forEach(el => {
        for(const a of ["src","data-src","data-original","srcset","data-srcset"])
          if(el.getAttribute(a)) collected.push(el.getAttribute(a));
      });
      const html = document.documentElement.outerHTML;
      const matches = html.match(/https?:\\?\\?\/\\?\\?\/[^"<>\\s]+?project_modules[^"<>\\s]+/g) || [];
      return [...collected, ...matches];
    });
    for(const x of dom) {
      for (const portion of x.split(",").map(v=>v.trim().split(" ")[0])) {
        const uri=fromUrl(portion.replace(/\\\//g,"/"));
        if(uri) captured.push(uri);
      }
    }
    const seen = new Set();
    const choices = [];
    for(const url of captured) {
      const id = url.split("?")[0].split("/").at(-1);
      if(seen.has(id)) continue;
      seen.add(id);
      choices.push(url);
    }
    console.log("Total candidate module images:", choices.length);
    for(const u of choices) console.log("CANDIDATE",u);
    if(choices.length === 0) throw new Error("Behance did not provide individual project module images. Nothing will be committed.");

    const saved = [];
    for (const url of choices.slice(0,40)) {
      try {
        const res=await context.request.get(url, {timeout:30000,headers:{"Referer":"https://www.behance.net/"}});
        const ct=res.headers()["content-type"]||"";
        const bytes=await res.body();
        if(!res.ok() || !ct.startsWith("image/") || bytes.length<15000) {
          console.log("SKIP",res.status(),ct,bytes.length,url);
          continue;
        }
        const ext=ct.includes("webp")?"webp":ct.includes("png")?"png":ct.includes("jpeg")?"jpg":null;
        if(!ext)continue;
        const fname="social-media-hamburgueria-"+String(saved.length+1).padStart(2,"0")+"."+ext;
        fs.writeFileSync(path.join(DIR,fname),bytes);
        saved.push({src:"/projects/behance/"+fname,alt:"Peça "+(saved.length+1)+" da identidade visual Social Media — Hamburgueria"});
        console.log("SAVED",fname,bytes.length);
      } catch(e) {console.log("DOWNLOAD ERROR",String(e).slice(0,180));}
    }
    if(!saved.length) throw new Error("No original assets could be downloaded. Project data left unchanged.");
    let data=fs.readFileSync(DATA,"utf8");
    const before=data.indexOf('    slug: "social-media-hamburgueria",');
    const after=data.indexOf("  /* =========================================================",before);
    if(before<0 || after<0)throw new Error("Could not locate target project block");
    const block=data.slice(before,after);
    const anchor='    behanceUrl: "https://www.behance.net/gallery/204358135/SOCIAL-MEDIA-HAMBURGUERIA",';
    if(!block.includes(anchor))throw new Error("Target project Behance URL changed");
    const all=[{src:COVER,alt:"Onion Rings — capa da identidade visual da hamburgueria"},...saved];
    const line=anchor+"\n    images: [\n"+all.map(a=>'      { src: '+JSON.stringify(a.src)+', alt: '+JSON.stringify(a.alt)+' },').join("\n")+"\n    ],";
    data=data.slice(0,before)+block.replace(anchor,line)+data.slice(after);
    fs.writeFileSync(DATA,data);
    console.log("Import complete:", saved.length, "original modules plus cover.");
  } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});
