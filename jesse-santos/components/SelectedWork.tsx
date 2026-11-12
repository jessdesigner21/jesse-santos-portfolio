
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { selectedProjects, additionalProjects, type Project } from "@/data/projects";
import ProjectCover from "./ProjectCover";
import { setAccent } from "@/lib/accent";

/*
 * CAPAS PERSONALIZADAS
 *
 * Quando criar uma capa para outro projeto:
 * 1. Envie a imagem para a pasta public.
 * 2. Acrescente aqui o slug e o nome do arquivo.
 *
 * Exemplo:
 * "cantim-do-vin": "/capa-cantim.jpg",
 *
 * Os projetos sem capa personalizada continuam
 * usando suas imagens ou capas atuais.
 */

const PROJECT_COVERS: Record<string, string> = {
  "falas-de-orgulho": "/sem%20precisar%20se%20explicar.jpg",
};

const handwritten = {
  fontFamily: '"hey-eloise", cursive',
  fontWeight: 400,
  fontStyle: "normal" as const,
};

function Meta({ project }: { project: Project }) {
  return (
    <div
      className="
        editorial-num
        mt-4 flex flex-wrap
        gap-x-4 gap-y-2
        uppercase text-[#756D62]
      "
    >
      {project.client && <span>{project.client}</span>}
      <span>{project.discipline[0]}</span>
      {project.year && <span>{project.year}</span>}
    </div>
  );
}

/*
 * Imagem personalizada quando disponível.
 * Caso contrário, usa ProjectCover.
 */

function WorkCover({
  project,
  priority = false,
  className = "",
}: {
  project: Project;
  priority?: boolean;
  className?: string;
}) {
  const customCover = PROJECT_COVERS[project.slug];

  if (customCover) {
    return (
      <div className={`relative overflow-hidden bg-[#EEE8DC] ${className}`}>
        <Image
          src={customCover}
          alt={`Capa do projeto ${project.title}`}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 80vw"
          className="
            object-contain
            transition-transform duration-700
            group-hover:scale-[1.025]
          "
        />
      </div>
    );
  }

  return (
    <ProjectCover
      project={project}
      priority={priority}
      className={className}
    />
  );
}

/*
 * Moldura artesanal do projeto destaque.
 */

function SketchBorder() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.svg
      aria-hidden="true"
      viewBox="0 0 900 560"
      preserveAspectRatio="none"
      className="
        pointer-events-none absolute
        -inset-2 z-20
        h-[calc(100%+1rem)]
        w-[calc(100%+1rem)]
        overflow-visible
      "
    >
      <motion.path
        d="
          M15 17
          C180 6 315 22 455 12
          S740 7 884 19
          C897 130 887 260 894 360
          S892 478 882 545
          C718 555 548 542 440 550
          S172 556 18 542
          C8 415 21 280 11 170
          S9 65 15 17
          Z
        "
        fill="none"
        stroke="#A88735"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
        strokeLinecap="round"
        initial={
          reduceMotion ? false : { pathLength: 0 }
        }
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.6,
          ease: "easeInOut",
        }}
      />

      <path
        d="
          M27 8 C195 0 335 14 487 7
          M895 43 C904 171 895 270 903 390
          M845 551 C650 559 492 549 310 558
          M9 505 C1 379 15 283 4 168
        "
        fill="none"
        stroke="#B795C5"
        strokeWidth="1.3"
        vectorEffect="non-scaling-stroke"
        strokeLinecap="round"
        opacity="0.7"
      />
    </motion.svg>
  );
}

function AcervoCard({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion();
  const isPhotography = project.slug === "identidade-fotografica-editorial";
  const isAnimatedCase = ["flos-embalagens", "monkey-cafe", "social-media-hamburgueria"].includes(project.slug);
  if (!project.cover) return null;

  return (
    <motion.li
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className={isPhotography ? "sm:col-span-2 lg:col-span-2" : ""}
    >
      <Link
        href={`/work/${project.slug}`}
        className={`group block h-full portfolio-card ${isAnimatedCase ? "portfolio-card--motion" : ""}`}
        data-cursor="ver"
      >
        <div className="border-t border-[#A88735]/35 pt-3">
          <div className="relative overflow-hidden bg-[#FCF9F1] p-2 md:p-3 portfolio-card-art">
            <div className={`relative w-full overflow-hidden ${isPhotography ? "aspect-[16/9]" : "aspect-[800/626]"}`}>
              <Image
                src={project.cover}
                alt={`Capa de ${project.title}`}
                fill
                sizes={isPhotography ? "(max-width: 768px) 100vw, 65vw" : "(max-width: 640px) 100vw, 33vw"}
                className="object-contain portfolio-card-image"
              />
            </div>
            {isAnimatedCase && <span aria-hidden="true" className="portfolio-card-glint" />}
          </div>
          <div className="mt-3 flex items-start justify-between gap-3">
            <div>
              <h4 className="font-serif text-xl italic leading-tight md:text-2xl">{project.title}</h4>
              <p className="mt-1 editorial-num text-[#756D62]">{project.discipline.join(" / ")}</p>
            </div>
            <span className="archive-index-arrow shrink-0" aria-hidden="true">↗</span>
          </div>
        </div>
      </Link>
    </motion.li>
  );
}

export default function SelectedWork() {
  const reduceMotion = useReducedMotion();

  const featured = selectedProjects.find(
    (project) => project.slug === "falas-de-orgulho"
  );

  const galleryProjects = [
    ...selectedProjects.filter((project) => project !== featured),
    ...additionalProjects,
  ];

  return (
    <section
      id="trabalho"
      aria-labelledby="trabalhos-titulo"
      className="
        paper-surface relative isolate overflow-hidden
        bg-[#F7F4EB]
        px-5 py-12
        text-[#24221F]
        md:px-10 md:py-36
      "
    >
      <div className="relative mx-auto max-w-[1440px]">

        {/* Cabeçalho editorial */}

        <div
          className="
            hidden md:flex flex-wrap items-center
            justify-between gap-4
            border-b border-black/20 pb-5
          "
        >
          <p className="editorial-num uppercase tracking-widest">
            01 / Trabalhos selecionados
          </p>

          <p className="editorial-num uppercase text-black/45">
            Processos, ideias e experiências
          </p>
        </div>

        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 35 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative pb-7 md:py-16"
        >

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-12">
            <div className="min-w-0">
              <h2
                id="trabalhos-titulo"
                className="font-grotesk font-bold uppercase text-[clamp(2.15rem,9.8vw,3.35rem)] leading-[1] tracking-[-0.072em] md:text-[clamp(3rem,7.2vw,8.4rem)] md:leading-[0.94]"
              >
                Trabalhos<span className="text-[var(--portfolio-yellow)]">.</span>
              </h2>
              <p className="mt-4 hidden max-w-md font-serif italic text-lg leading-[1.4] md:block md:text-2xl">
                Cada projeto carrega um pouco do caminho até chegar aqui.
              </p>
            </div>
            <p
              style={handwritten}
              className="hidden text-[#A88735] text-2xl md:block md:mb-2 md:shrink-0 md:text-4xl md:-rotate-3"
            >
              com textura.
            </p>
          </div>
        </motion.div>

        {/* PROJETO 01 - FALAS DE ORGULHO */}

        {featured && (
          <motion.article
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 45 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            onMouseEnter={() =>
              setAccent(featured.accentColor)
            }
            onMouseLeave={() => setAccent(null)}
            className="relative pb-10 pt-3 md:py-24"
          >
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3 md:mb-12">
              <span className="editorial-num uppercase">
                01 / Projeto autoral
              </span>

              <span className="editorial-num uppercase text-black/50">
                Editorial + Design Gráfico
              </span>
            </div>

            <div className="relative">

              {/* Palavra gigante ao fundo */}

              <span
                aria-hidden="true"
                className="
                  pointer-events-none absolute hidden md:block
                  -top-12 left-0
                  z-0 select-none
                  font-grotesk font-bold
                  text-[clamp(6rem,20vw,24rem)]
                  leading-none
                  tracking-[-0.1em]
                  text-[#E0D5C1]
                "
              >
                AFETO
              </span>

              <div
                className="
                  relative z-10
                  grid items-center
                  gap-5 md:grid-cols-12
                  md:gap-10
                "
              >

                {/* Capa principal */}

                <div className="relative md:col-span-8">
                  <motion.div
                    whileHover={
                      reduceMotion
                        ? undefined
                        : { rotate: 0, y: -5 }
                    }
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    className="
                      relative rotate-[-1deg]
                    "
                  >
                    <Link
                      href={`/work/${featured.slug}`}
                      data-cursor="ver"
                      className="group relative block"
                    >
                      <WorkCover
                        project={featured}
                        priority
                        className="w-full aspect-[16/10]"
                      />

                      <SketchBorder />
                    </Link>
                  </motion.div>
                </div>

                {/* Conteúdo do projeto */}

                <div className="md:col-span-4">
                  <p
                    style={handwritten}
                    className="
                      mb-5 hidden text-[#A88735] md:block
                      text-3xl md:text-5xl
                      -rotate-3
                    "
                  >
                    existir.
                  </p>

                  <h3
                    className="
                      font-serif italic
                      text-4xl leading-[0.98]
                      tracking-[-0.055em]
                      md:text-[clamp(3.5rem,5vw,6rem)]
                    "
                  >
                    {featured.title}
                  </h3>

                  <p
                    className="
                      mt-3 max-w-md md:mt-7
                      font-grotesk
                      text-base leading-[1.8]
                      text-[#645F58]
                    "
                  >
                    {featured.description}
                  </p>

                  <Meta project={featured} />

                  <Link
                    href={`/work/${featured.slug}`}
                    data-cursor="abrir"
                    className="
                      editorial-num
                      mt-4 inline-flex md:mt-9
                      items-center gap-3
                      border-b border-black
                      pb-2 uppercase
                      transition-all duration-300
                      hover:gap-5
                    "
                  >
                    Conhecer projeto ↗
                  </Link>
                </div>
              </div>


            </div>
          </motion.article>
        )}

        {/* Um mesmo grid editorial para todo o acervo, sem separar os três destaques. */}
        {galleryProjects.length > 0 && (
          <section aria-label="Projetos e acervo" className="mt-12 border-t border-[#A88735]/30 pt-12 md:mt-20 md:pt-20">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4 md:mb-12">
              <div>
                <p className="editorial-num text-[#756D62]">02 / Projetos e experiências</p>
                <h3 style={handwritten} className="mt-2 text-[clamp(2.8rem,7vw,6.8rem)] leading-[0.95] text-[#A88735]">
                  Outros recortes.
                </h3>
              </div>
              <p className="max-w-xs font-serif text-base italic leading-relaxed text-[#655B4C] md:text-lg">
                Identidades, imagens e experimentações. Cada capa abre uma história.
              </p>
            </div>
            <ul className="grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
              {galleryProjects.map((project) => (
                <AcervoCard key={project.slug} project={project} />
              ))}
            </ul>
          </section>
        )}

        {/* Convite editorial flutuante ao acervo completo, após todos os cases da home. */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 26 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 border-t border-[#45432F]/20 pt-14 md:mt-24 md:pt-20"
        >
          <div className="archive-invitation mx-auto max-w-[980px]">
            <span aria-hidden="true" className="archive-invitation-scribble">✳</span>
            <div className="relative grid gap-7 md:grid-cols-[1.3fr_1fr] md:items-end md:gap-12">
              <div>
                <p className="editorial-num mb-5 text-[#626845]">03 / Para continuar explorando</p>
                <h3 className="font-grotesk text-[clamp(2.6rem,5.2vw,5.1rem)] font-bold leading-[0.98] tracking-[-0.065em] text-[#26281D]">
                  Isso aqui é só
                  <span className="mt-1 block font-serif font-normal italic text-[#596336]">um recorte.</span>
                </h3>
                <p className="mt-5 max-w-md font-serif text-lg italic leading-relaxed text-[#525444]">
                  Tem outras histórias, processos e imagens esperando pelo seu olhar.
                </p>
              </div>
              <div className="flex flex-col items-start gap-5 md:items-end">
                <Link href="/work" data-cursor="abrir" className="archive-invitation-button group inline-flex min-h-14 items-center gap-6 px-6 py-4 font-mono text-[0.7rem] font-medium uppercase tracking-[0.12em]">
                  Ver todos os trabalhos
                  <span className="archive-invitation-arrow text-2xl" aria-hidden="true">↗</span>
                </Link>
                <Link href="/movimento" className="marker-underline editorial-num inline-flex min-h-11 items-center text-[#596336]">
                  E os trabalhos em movimento ↗
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
