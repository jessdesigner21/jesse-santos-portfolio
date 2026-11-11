import Image from "next/image";
import AgroriegoShowcase from "./AgroriegoShowcase";
import ArchiveCarousel from "./ArchiveCarousel";

const media = "/projects/arquivo-vivo";

const reels = [
  "DZNcmiZkSBU",
  "DY724_CEquI",
  "DXPzOPiipUf",
  "DWHtNLACdC-",
  "DV1si4uDX40",
  "DUbl9FuDJI_",
  "DSm0yquky--",
  "DfVC6BzDLlr",
  "DfmxjDxSUnq",
];

const printProjects = [
  {
    id: "alpha-ados",
    title: "¿En qué estás pensando?",
    category: "Alpha/ADOs · Campanha no Chile",
    banners: true,
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
    banners: true,
    slides: [
      { src: `${media}/petrinovic-01.webp`, alt: "Pendão com profissional e estetoscópio" },
      { src: `${media}/petrinovic-02.webp`, alt: "Pendão com equipe de saúde" },
    ],
  },
];

const videos = [
  { slug: "go-marketing", title: "Go Marketing", caption: "Depoimento de cliente para a agência." },
  { slug: "nueva-identidad", title: "Nueva Identidad", caption: "Vídeo de apresentação de uma nova identidade visual." },
  { slug: "petrinovic-hall", title: "Petrínovic", caption: "Vídeo institucional para o hall de entrada." },
];

export default function ArchiveShowcase({ cover, description }: { cover: string; description: string }) {
  return (
    <div className="archive-showcase mt-12 bg-[#F7F4EB] text-[#24221F]">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <div className="relative aspect-[8/5] overflow-hidden bg-[#E9DFCD]">
          <Image src={cover} alt="Pendões da campanha Alpha/ADOs ao lado de um mockup dos pins Biogreen" fill preload sizes="(max-width: 1440px) 96vw, 1376px" />
        </div>
        <div className="mt-6 flex flex-wrap items-end justify-between gap-5">
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
        {printProjects.map((project) => (
          <section key={project.id} id={project.id} aria-labelledby={`${project.id}-title`} className="archive-section grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
            <header>
              <p className="editorial-num text-[#655b4c]">{project.category}</p>
              <h2 id={`${project.id}-title`} className="archive-heading">{project.title}</h2>
            </header>
            <ArchiveCarousel title={project.title} slides={project.slides} banners={project.banners} />
          </section>
        ))}

        <section id="arquivo-video" aria-labelledby="arquivo-video-title" className="archive-section">
          <h2 id="arquivo-video-title" className="archive-heading">Vídeos</h2>
          <div className="mt-8 grid gap-x-6 gap-y-10 md:grid-cols-3">
            {videos.map(({ slug, title, caption }) => (
              <figure key={slug}>
                <div className="relative aspect-[4/5] bg-[#241f19]">
                  <video
                    controls
                    playsInline
                    preload="none"
                    poster={`${media}/${slug}.jpg`}
                    aria-label={`Vídeo de ${title}`}
                    className="absolute inset-0 h-full w-full object-contain"
                  >
                    <source src={`${media}/${slug}.mp4`} type="video/mp4" />
                    <a href={`${media}/${slug}.mp4`}>Abrir vídeo de {title}</a>
                  </video>
                </div>
                <figcaption className="mt-4">
                  <h3 className="font-serif text-2xl italic">{title}</h3>
                  <p className="mt-1 text-sm text-[#655b4c]">{caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="arquivo-reels" aria-labelledby="arquivo-reels-title" className="archive-section">
          <h2 id="arquivo-reels-title" className="archive-heading">Reels para terapeutas</h2>
          <p className="mt-4 max-w-xl text-[#655b4c]">Edição de vídeo por Jesse Santos. Os Reels abrem no Instagram.</p>
          <ul className="mt-8 grid gap-px bg-[#cfc2a7] p-px sm:grid-cols-2 lg:grid-cols-3">
            {reels.map((id, index) => (
              <li key={id} className="bg-[#F7F4EB]">
                <a
                  href={`https://www.instagram.com/reel/${id}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Assistir ao Reel ${index + 1} no Instagram (nova aba)`}
                  className="flex min-h-20 items-center justify-between gap-4 p-5 transition-colors hover:bg-[#E9DFCD] focus-visible:outline-offset-[-4px]"
                >
                  <span className="font-serif text-xl italic">Reel {String(index + 1).padStart(2, "0")}</span>
                  <span className="editorial-num text-[#655b4c]" aria-hidden="true">Instagram ↗</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
