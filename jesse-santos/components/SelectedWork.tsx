
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { projects, type Project } from "@/data/projects";
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

/*
 * Palavras editoriais atrás de cada projeto.
 * Podemos alterar individualmente depois.
 */

const PROJECT_WORDS: Record<string, string> = {
  "falas-de-orgulho": "AFETO",
  "grupo-tattersall": "RECORTES",
  "social-media-beleza": "BELEZA",
  "glow-beauty": "BRILHO",
  "social-media-hamburgueria": "SABOR",
  "cantim-do-vin": "ENCONTRO",
  "amarelo": "COR",
  "flash-food": "ENERGIA",
  "cafeteria": "PAUSA",
  "identidade-fotografica-editorial": "OLHAR",
};

const handwritten = {
  fontFamily: '"hey-eloise", cursive',
  fontWeight: 400,
  fontStyle: "normal" as const,
};

function Num({ n }: { n: number }) {
  return (
    <span className="editorial-num text-[#756D62]">
      {String(n).padStart(2, "0")}
    </span>
  );
}

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

/*
 * Cards dos demais projetos.
 */

function WorkCard({
  project,
  index,
  wide = false,
}: {
  project: Project;
  index: number;
  wide?: boolean;
}) {
  const reduceMotion = useReducedMotion();

  const word = PROJECT_WORDS[project.slug] ?? "CRIAR";

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: 45 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setAccent(project.accentColor)}
      onMouseLeave={() => setAccent(null)}
      className={`
        relative min-w-0
        ${wide ? "md:col-span-12" : "md:col-span-6"}
      `}
    >
      <div className="relative pt-10 md:pt-14">

        {/* Palavra grande ao fundo */}

        <span
          aria-hidden="true"
          className="
            pointer-events-none absolute
            left-0 top-0 z-0
            max-w-full overflow-hidden
            whitespace-nowrap
            font-grotesk font-bold
            text-[clamp(3.5rem,9vw,11rem)]
            leading-none tracking-[-0.09em]
            text-[#D9CFB9]
            select-none
          "
        >
          {word}
        </span>

        {/* Identificação */}

        <div
          className="
            relative z-10 mb-4
            flex items-center
            justify-between gap-4
          "
        >
          <Num n={index + 1} />

          <span className="editorial-num uppercase text-black/45">
            {project.discipline[0]}
          </span>
        </div>

        {/* Capa */}

        <Link
          href={`/work/${project.slug}`}
          data-cursor="ver"
          className="
            group relative z-10
            block overflow-hidden
            transition-transform duration-500
            hover:-translate-y-1
          "
        >
          <WorkCover
            project={project}
            className="w-full aspect-[16/10]"
          />
        </Link>

        {/* Informações */}

        <div
          className={`
            relative z-10 mt-6
            ${wide ? "md:max-w-[850px]" : ""}
          `}
        >
          <h3
            className="
              font-serif italic
              text-3xl leading-[1.08]
              tracking-[-0.04em]
              md:text-5xl
            "
          >
            <Link href={`/work/${project.slug}`}>
              {project.title}
            </Link>
          </h3>

          <Meta project={project} />

          <Link
            href={`/work/${project.slug}`}
            data-cursor="abrir"
            className="
              editorial-num
              mt-7 inline-flex
              border-b border-black/70
              pb-2 uppercase
              transition-all duration-300
              hover:tracking-widest
            "
          >
            Abrir projeto ↗
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

/*
 * SEÇÃO PRINCIPAL
 */

export default function SelectedWork() {
  const reduceMotion = useReducedMotion();

  const featured = projects.find(
    (project) => project.slug === "falas-de-orgulho"
  );

  const otherProjects = projects.filter(
    (project) => project.slug !== "falas-de-orgulho"
  );

  return (
    <section
      id="trabalho"
      aria-labelledby="trabalhos-titulo"
      className="
        relative isolate overflow-hidden
        bg-[#F7F4EB]
        px-5 py-24
        text-[#24221F]
        md:px-10 md:py-36
      "
    >
      {/* Textura de papel */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          inset-0 opacity-20
        "
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(92,78,59,0.045) 4px)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px]">

        {/* Cabeçalho editorial */}

        <div
          className="
            flex flex-wrap items-center
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
          className="relative py-12 md:py-16"
        >

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-12">
            <div className="min-w-0">
              <h2
                id="trabalhos-titulo"
                className="font-grotesk font-bold uppercase text-[clamp(3rem,7.2vw,8.4rem)] leading-[0.94] tracking-[-0.075em]"
              >
                Trabalhos<span className="text-[#A88735]">.</span>
              </h2>
              <p className="mt-7 max-w-md font-serif italic text-lg leading-[1.4] md:text-2xl">
                Cada projeto carrega um pouco do caminho até chegar aqui.
              </p>
            </div>
            <p
              style={handwritten}
              className="text-[#A88735] text-2xl md:mb-2 md:shrink-0 md:text-4xl md:-rotate-3"
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
            className="relative py-16 md:py-24"
          >
            <div className="mb-12 flex flex-wrap items-center justify-between gap-4">
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
                  pointer-events-none absolute
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
                  gap-12 md:grid-cols-12
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
                      mb-5 text-[#A88735]
                      text-3xl md:text-5xl
                      -rotate-3
                    "
                  >
                    existir.
                  </p>

                  <h3
                    className="
                      font-serif italic
                      text-5xl leading-[0.98]
                      tracking-[-0.055em]
                      md:text-[clamp(3.5rem,5vw,6rem)]
                    "
                  >
                    {featured.title}
                  </h3>

                  <p
                    className="
                      mt-7 max-w-md
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
                      mt-9 inline-flex
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

              {/* Pequena anotação editorial */}

              <p
                className="
                  mt-12 text-right
                  font-serif italic
                  text-lg text-[#74665B]
                  md:mr-[8%] md:text-2xl
                "
              >
                Há muitas formas de existir.
              </p>
            </div>
          </motion.article>
        )}

        {/* OUTROS TRABALHOS */}

        <div
          className="
            flex flex-wrap
            items-end justify-between
            gap-5
            border-t border-black/20
            pt-7
          "
        >
          <p className="editorial-num uppercase tracking-widest">
            Outros caminhos criativos
          </p>

          <p className="editorial-num uppercase text-black/45">
            02 — {String(projects.length).padStart(2, "0")}
          </p>
        </div>

        <div
          className="
            mt-16 grid grid-cols-1
            gap-x-10 gap-y-24
            md:grid-cols-12
            md:gap-y-36
          "
        >
          {otherProjects.map((project, index) => (
            <WorkCard
              key={project.slug}
              project={project}
              index={index + 1}
              wide={index === 2 || index === 5}
            />
          ))}
        </div>

        {/* Encerramento */}

        <div
          className="
            mt-28 flex flex-wrap
            items-end justify-between
            gap-8
            border-t border-black/20
            pt-8 md:mt-40
          "
        >
          <p
            className="
              max-w-lg font-serif italic
              text-2xl leading-[1.2]
              md:text-4xl
            "
          >
            O trabalho continua.
            <br />
            A textura também.
          </p>

          <span
            style={handwritten}
            className="
              text-3xl text-[#A88735]
              md:text-5xl
            "
          >
            em construção.
          </span>
        </div>

      </div>
    </section>
  );
}
