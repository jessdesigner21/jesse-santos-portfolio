import Image from "next/image";
import Link from "next/link";
import AgroriegoShowcase from "./AgroriegoShowcase";
import ArchiveCarousel from "./ArchiveCarousel";

const media = "/projects/arquivo-vivo";

const reelSeries = [
  {
    title: "Centro Luminus",
    account: "centroluminus",
    reels: [
      { id: "DZNcmiZkSBU", title: "Quando a mente não para" },
      { id: "DY724_CEquI", title: "A síndrome da boazinha" },
      { id: "DXPzOPiipUf", title: "Aprender a colocar limites" },
      { id: "DWHtNLACdC-", title: "Quando considerar a terapia de casal" },
      { id: "DV1si4uDX40", title: "Quando começar a terapia" },
      { id: "DUbl9FuDJI_", title: "O que é gaslighting?" },
      { id: "DSm0yquky--", title: "Uma mensagem de fim de ano" },
    ],
  },
  {
    title: "Fabrimetal",
    account: "fabrimetalsa",
    reels: [
      { id: "DfVC6BzDLlr", title: "A nova identidade da Fabrimetal" },
      { id: "DfmxjDxSUnq", title: "48 anos de Fabrimetal" },
    ],
  },
];

const printProjects = [
  {
    id: "alpha-ados",
    title: "¿En qué estás pensando?",
    category: "Alpha/ADOs · Campanha no Chile",
    slides: [
      { src: `${media}/alpha-1.webp`, alt: "Pendão com fotografia" },
      { src: `${media}/alpha-2.webp`, alt: "Pendão ilustrado" },
    ],
  },
  {
    id: "biogreen",
    title: "Pins Biogreen",
    category: "Design de pins · Mockups",
    slides: [
      { src: `${media}/biogreen-03.webp`, alt: "Pin apresentado em caixa" },
      { src: `${media}/biogreen-01.webp`, alt: "Pin aplicado na lapela" },
      { src: `${media}/biogreen-02.webp`, alt: "Pin aplicado na nécessaire" },
      { src: `${media}/biogreen-04.webp`, alt: "Pin aplicado na bolsa de tecido" },
    ],
  },
  {
    id: "salud-laboral",
    title: "Salud Laboral Petrínovic",
    category: "Comunicação impressa · Pendões",
    slides: [
      { src: `${media}/petrinovic-01.webp`, alt: "Pendão com profissional e estetoscópio" },
      { src: `${media}/petrinovic-02.webp`, alt: "Pendão com equipe de saúde" },
    ],
  },
];

const videos = [
  { slug: "petrinovic-hall", title: "Petrínovic", caption: "Vídeo institucional para o hall de entrada.", landscape: true },
  { slug: "go-marketing", title: "Go Marketing", caption: "Depoimento de cliente para a agência." },
  { slug: "nueva-identidad", title: "Nueva Identidad", caption: "Vídeo de apresentação de uma nova identidade visual." },
];

export const archiveSlug = "grupo-tattersall";
export const archivePath = `/work/${archiveSlug}`;

export const archiveCollections = [
  { slug: "apresentacao", title: "Apresentação", subtitle: "Agroriego Tattersall", anchor: "agroriego-recorte" },
  { slug: "pecas-graficas", title: "Peças gráficas", subtitle: "Pendões e pins", anchor: "alpha-ados" },
  { slug: "videos", title: "Vídeos", subtitle: "Institucional, depoimento e identidade", anchor: "arquivo-video" },
  { slug: "reels", title: "Reels", subtitle: "Centro Luminus e Fabrimetal", anchor: "arquivo-reels" },
] as const;

type Collection = (typeof archiveCollections)[number]["slug"];

export default function ArchiveShowcase({ cover }: { cover: string }) {
  return (
    <div className="archive-showcase mx-auto mt-8 grid max-w-[1440px] items-start gap-8 px-5 md:mt-12 md:px-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,5fr)] lg:gap-14">
      <nav aria-label="Coleções do Arquivo Vivo">
        <ul className="archive-index">
          {archiveCollections.map(({ slug, title, subtitle, anchor }) => (
            <li key={slug} id={anchor}>
              <Link href={`${archivePath}/${slug}`} className="archive-index-link">
                <span>
                  <span className="archive-work-title block">{title}</span>
                  <span className="mt-1 block text-sm text-[#655b4c]">{subtitle}</span>
                </span>
                <span className="text-2xl text-[#806324]" aria-hidden="true">↗</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="relative aspect-[8/5] bg-[#E9DFCD]">
        <Image src={cover} alt="Pendões da campanha Alpha/ADOs ao lado de um mockup dos pins Biogreen" fill preload sizes="(max-width: 1024px) 94vw, 50vw" />
      </div>
    </div>
  );
}

export function ArchiveCollection({ collection }: { collection: Collection }) {
  switch (collection) {
    case "apresentacao":
      return <AgroriegoShowcase />;
    case "pecas-graficas":
      return <Prints />;
    case "videos":
      return <Videos />;
    case "reels":
      return <Reels />;
  }
}

function Videos() {
  return (
    <section aria-label="Vídeos do Arquivo Vivo">
      <div className="archive-videos">
        {videos.map(({ slug, title, caption, landscape }) => (
          <figure key={slug} className={landscape ? "archive-video-lead" : "archive-video-portrait"}>
            <video
              controls
              playsInline
              preload="none"
              poster={`${media}/${slug}.jpg`}
              aria-label={`Vídeo de ${title}`}
              width={landscape ? 1280 : 720}
              height={landscape ? 720 : 1280}
              className={`block w-full ${landscape ? "aspect-video" : "aspect-[9/16]"}`}
            >
              <source src={`${media}/${slug}.mp4`} type="video/mp4" />
              <a href={`${media}/${slug}.mp4`}>Abrir vídeo de {title}</a>
            </video>
            <figcaption className="mt-4">
              <h2 className="archive-work-title">{title}</h2>
              <p className="mt-1 text-sm text-[#655b4c]">{caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Prints() {
  return (
    <div className="archive-prints">
      {printProjects.map((project) => (
        <section key={project.id} id={project.id} aria-labelledby={`${project.id}-title`} className="archive-print">
          <header>
            <p className="editorial-num text-[#655b4c]">{project.category}</p>
            <h2 id={`${project.id}-title`} className="archive-heading">{project.title}</h2>
          </header>
          {project.id === "biogreen" ? (
            <ArchiveCarousel title={project.title} slides={project.slides} />
          ) : (
            <div className="archive-diptych">
              {project.slides.map((slide) => (
                <Image key={slide.src} src={slide.src} alt={slide.alt} width={720} height={1800} sizes="(max-width: 768px) 41vw, 280px" className="h-auto w-full" />
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  );
}

function Reels() {
  return (
    <section aria-label="Séries de Reels">
      <p className="mt-3 text-[#655b4c]">Edição por Jesse Santos · Assista no Instagram</p>
      {reelSeries.map(({ title, account, reels }) => (
        <div key={account} className="archive-series">
          <h2 className="archive-work-title">{title}</h2>
          <ul className="archive-reels">
            {reels.map(({ id, title: reelTitle }) => (
              <li key={id}>
                <a
                  href={`https://www.instagram.com/${account}/reel/${id}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${reelTitle} · Assistir no Instagram (nova aba)`}
                  className="archive-reel"
                >
                  <span className="archive-reel-cover">
                    <Image
                      src={`${media}/reel-${id}.webp`}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 44vw, (max-width: 1000px) 30vw, 22vw"
                      className="object-cover"
                    />
                  </span>
                  <span className="mt-2 block font-serif text-base italic leading-snug md:text-lg">
                    {reelTitle} <span aria-hidden="true">↗</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
