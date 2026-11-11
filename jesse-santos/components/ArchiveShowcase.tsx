import Image from "next/image";
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

export default function ArchiveShowcase({ cover, description }: { cover: string; description: string }) {
  return (
    <div className="archive-showcase mt-12 bg-[#F7F4EB] text-[#24221F]">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <div className="relative aspect-[8/5] overflow-hidden bg-[#E9DFCD]">
          <Image src={cover} alt="Pendões da campanha Alpha/ADOs ao lado de um mockup dos pins Biogreen" fill preload sizes="(max-width: 1440px) 96vw, 1376px" />
        </div>
        <div className="mt-8 flex flex-wrap items-end justify-between gap-6 md:mt-12">
          <p className="max-w-2xl font-serif text-xl italic leading-snug md:text-3xl">{description}</p>
          <nav aria-label="Seções do Arquivo Vivo" className="flex flex-wrap gap-x-5 gap-y-3">
            <a href="#agroriego-recorte" className="archive-link">Apresentação</a>
            <a href="#alpha-ados" className="archive-link">Peças gráficas</a>
            <a href="#arquivo-video" className="archive-link">Vídeos</a>
            <a href="#arquivo-reels" className="archive-link">Reels</a>
          </nav>
        </div>
      </div>

      <AgroriegoShowcase />

      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <section id="arquivo-video" aria-labelledby="arquivo-video-title" className="archive-section">
          <h2 id="arquivo-video-title" className="archive-heading">Em movimento</h2>
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
                  <h3 className="font-serif text-[clamp(1.6rem,3vw,2.8rem)] italic leading-tight">{title}</h3>
                  <p className="mt-1 text-sm text-[#655b4c]">{caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

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

        <section id="arquivo-reels" aria-labelledby="arquivo-reels-title" className="archive-section">
          <h2 id="arquivo-reels-title" className="archive-heading">Reels</h2>
          <p className="mt-3 text-[#655b4c]">Edição por Jesse Santos · Assista no Instagram</p>
          {reelSeries.map(({ title, account, reels }) => (
            <div key={account} className="mt-9 md:mt-12">
              <h3 className="font-serif text-2xl italic md:text-3xl">{title}</h3>
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
      </div>
    </div>
  );
}
