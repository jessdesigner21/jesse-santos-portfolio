// Store only assets explicitly supplied by the portfolio owner.
const fs = require("node:fs");
const path = require("node:path");
const files = [
  {
    "path": "hamburgueria/01.jpg",
    "url": "https://d2ol7oe51mr4n9.cloudfront.net/user_3A5I6Cy7Vi77FSx9aDoV418OWGY/6773e7ca-034f-4b59-87cd-720e482da56a.jpg"
  },
  {
    "path": "hamburgueria/02.jpg",
    "url": "https://d2ol7oe51mr4n9.cloudfront.net/user_3A5I6Cy7Vi77FSx9aDoV418OWGY/d7a34e69-f46e-4185-9ee5-c242687f7675.jpg"
  },
  {
    "path": "hamburgueria/03.jpg",
    "url": "https://d2ol7oe51mr4n9.cloudfront.net/user_3A5I6Cy7Vi77FSx9aDoV418OWGY/c71cbf7c-4d36-4bdd-9ee6-215271cfd4ae.jpg"
  },
  {
    "path": "hamburgueria/04.jpg",
    "url": "https://d2ol7oe51mr4n9.cloudfront.net/user_3A5I6Cy7Vi77FSx9aDoV418OWGY/30ed38be-3b90-4a57-be26-c0e4639838d6.jpg"
  },
  {
    "path": "hamburgueria/05.jpg",
    "url": "https://d2ol7oe51mr4n9.cloudfront.net/user_3A5I6Cy7Vi77FSx9aDoV418OWGY/ec2758c1-2752-4ee9-ae09-fd18806074c7.jpg"
  },
  {
    "path": "hamburgueria/10.jpg",
    "url": "https://d2ol7oe51mr4n9.cloudfront.net/user_3A5I6Cy7Vi77FSx9aDoV418OWGY/c3d313cb-2827-4725-86fc-73105d88e16f.jpg"
  },
  {
    "path": "hamburgueria/11.jpg",
    "url": "https://d2ol7oe51mr4n9.cloudfront.net/user_3A5I6Cy7Vi77FSx9aDoV418OWGY/b9c0cda5-a7e3-43fd-963a-392e1d5c2cba.jpg"
  },
  {
    "path": "hamburgueria/12.jpg",
    "url": "https://d2ol7oe51mr4n9.cloudfront.net/user_3A5I6Cy7Vi77FSx9aDoV418OWGY/70c5fb66-2370-45fb-8ab2-3c0be904f963.jpg"
  },
  {
    "path": "hamburgueria/13.jpg",
    "url": "https://d2ol7oe51mr4n9.cloudfront.net/user_3A5I6Cy7Vi77FSx9aDoV418OWGY/1aea395e-0979-4617-8d8a-3878d3e16d76.jpg"
  },
  {
    "path": "hamburgueria/14.jpg",
    "url": "https://d2ol7oe51mr4n9.cloudfront.net/user_3A5I6Cy7Vi77FSx9aDoV418OWGY/bdaf0e87-107f-47f8-b695-3f50a6e440c1.jpg"
  },
  {
    "path": "monkey-cafe/menu.jpg",
    "url": "https://d2ol7oe51mr4n9.cloudfront.net/user_3A5I6Cy7Vi77FSx9aDoV418OWGY/4ec3af6a-90b2-4d3a-9f14-ade40dcbb323.jpg"
  },
  {
    "path": "monkey-cafe/camiseta.jpg",
    "url": "https://d2ol7oe51mr4n9.cloudfront.net/user_3A5I6Cy7Vi77FSx9aDoV418OWGY/e6d4c4bb-a72b-4716-b5ca-abce8a5eecc3.jpg"
  },
  {
    "path": "monkey-cafe/caixas.jpg",
    "url": "https://d2ol7oe51mr4n9.cloudfront.net/user_3A5I6Cy7Vi77FSx9aDoV418OWGY/3f92f752-ac11-407b-a289-1c32ef52c968.jpg"
  },
  {
    "path": "monkey-cafe/graos.jpg",
    "url": "https://d2ol7oe51mr4n9.cloudfront.net/user_3A5I6Cy7Vi77FSx9aDoV418OWGY/765e0e35-f5aa-41a0-a4eb-259df8b31d12.jpg"
  },
  {
    "path": "monkey-cafe/capa.jpg",
    "url": "https://d2ol7oe51mr4n9.cloudfront.net/user_3A5I6Cy7Vi77FSx9aDoV418OWGY/b9c432b5-a908-4fa5-b05a-15472e9c30e9.jpg"
  }
];
const outputDir=path.join(process.cwd(),"jesse-santos/public/projects/owner");
async function main(){
  for(const file of files){
    const res=await fetch(file.url,{headers:{"User-Agent":"JessePortfolioAssetImporter/1.0"}});
    if(!res.ok)throw new Error("Image "+file.path+" download failed with "+res.status);
    const type=res.headers.get("content-type")||"";
    if(!type.startsWith("image/"))throw new Error("Unexpected response content-type "+type);
    const bytes=Buffer.from(await res.arrayBuffer());
    if(bytes.length<10000)throw new Error("File too small "+file.path+" "+bytes.length);
    const dest=path.join(outputDir,file.path);
    fs.mkdirSync(path.dirname(dest),{recursive:true});
    fs.writeFileSync(dest,bytes);
    console.log("SAVED",file.path,bytes.length,type);
  }
  console.log("IMPORTED",files.length,"owner-provided original images");
}
main().catch(e=>{console.error(e);process.exit(1)});
