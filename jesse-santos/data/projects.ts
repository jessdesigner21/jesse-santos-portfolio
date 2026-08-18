"use client";

import { useRef, type MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";

import {
  getProjectBySlug,
  type Project,
} from "@/data/projects";

import ProjectCover from "./ProjectCover";

const PROFILE_IMAGE = "/jesse.jpg.jpeg";

type ProjectCardProps = {
  project: Project;
  rotate?: number;
  depth?: number;
  sx: MotionValue<number>;
  sy: MotionValue<number>;
  index: number;
  className?: string;
};

function ProjectCard({
  project,
  rotate = 0,
  depth = 20,
  sx,
  sy,
  index,
  className = "",
}: ProjectCardProps) {
  const x = useTransform(sx, (value) => value * depth);
  const y = useTransform(sy, (value) => value * depth);

  return (
    <motion.div
      style={{
        x,
        y,
        rotate,
      }}
      initial={{
        opacity: 0,
        scale: 0.97,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
        delay: 0.12 + index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        rotate: 0,
        scale: 1.018,
      }}
      className={`
        relative
        overflow-hidden
        shadow-[0_18px_45px_rgba(0,0,0,0.10)]
        ${className}
      `}
    >
      <Link
        href={`/trabalho/${project.slug}`}
        data-cursor="ver"
        className="block h-full w-full"
      >
        <ProjectCover
          project={project}
          className="h-full w-full"
        />

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            bg-black/75
            px-3
            py-2
            text-white
            opacity-0
            transition-opacity
            duration-300
            hover:opacity-100
          "
        >
          <p className="editorial-num uppercase">
            0{index + 1} — {project.title}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

/*
 * Definimos diretamente os 3 projetos da capa.
 *
 * Assim o Hero sempre mostra:
 * 01 — Falas de Orgulho
 * 02 — Apresentação de Vendas
 * 03 — Cantim do Vin
 */
const heroProjects = [
  getProjectBySlug("falas-de-orgulho"),
  getProjectBySlug("grupo-tattersall"),
  getProjectBySlug("cantim-do-vin"),
].filter((project): project is Project => Boolean(project));

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const sx = useSpring(mx, {
    damping: 34,
    stiffness: 65,
  });

  const sy = useSpring(my, {
    damping: 34,
    stiffness: 65,
  });

  const portraitX = useTransform(sx, (value) => value * 8);
  const portraitY = useTransform(sy, (value) => value * 6);

  function handleMove(event: MouseEvent<HTMLElement>) {
    const rect = ref.current?.getBoundingClientRect();

    if (!rect) return;

    mx.set(
      (event.clientX - rect.left) / rect.width - 0.5
    );

    my.set(
      (event.clientY - rect.top) / rect.height - 0.5
    );
  }

  const falas = heroProjects[0];
  const tattersall = heroProjects[1];
  const cantim = heroProjects[2];

  return (
    <section
      ref={ref}
      onMouseMove={handleMove}
      className="
        relative
        overflow-hidden
        border-b
        border-black/15
        bg-background
      "
    >
      {/* =====================================================
          DESKTOP
      ===================================================== */}

      <div
        className="
          hidden
          min-h-[100svh]
          px-8
          pb-6
          pt-24
          md:block
          lg:px-10
        "
      >
        <div
          className="
            grid
            grid-cols-12
            items-start
            gap-x-5
            gap-y-5
            lg:gap-x-7
          "
        >
          {/* ===============================================
              LINHA SUPERIOR
          =============================================== */}

          {falas && (
            <div className="col-span-4">
              <ProjectCard
                project={falas}
                rotate={-2}
                depth={18}
                sx={sx}
                sy={sy}
                index={0}
                className="
                  h-[24vh]
                  min-h-[190px]
                  max-h-[250px]
                  w-full
                "
              />
            </div>
          )}

          {/* BLOCO VERDE */}

          <motion.div
            initial={{
              opacity: 0,
              y: -12,
              rotate: -1,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: -1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="
              col-start-5
              col-span-2
              mt-1
              min-h-[130px]
              bg-[#c6ff3d]
              px-5
              py-5
            "
          >
            <p
              className="
                editorial-num
                uppercase
                leading-[1.7]
              "
            >
              Design Gráfico
              <br />
              Direção Visual
              <br />
              Social Media
              <br />
              Motion
            </p>
          </motion.div>

          {tattersall && (
            <div
              className="
                col-start-10
                col-span-3
              "
            >
              <ProjectCard
                project={tattersall}
                rotate={2}
                depth={28}
                sx={sx}
                sy={sy}
                index={1}
                className="
                  h-[21vh]
                  min-h-[170px]
                  max-h-[225px]
                  w-full
                "
              />
            </div>
          )}

          {/* ===============================================
              LINHA CENTRAL
          =============================================== */}

          <motion.h1
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.85,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              col-span-5
              mt-4
              leading-[0.72]
              tracking-[-0.07em]
              pointer-events-none
            "
          >
            <span
              className="
                block
                font-serif
                text-[8.3vw]
                font-light
                italic
              "
            >
              Jesse
            </span>

            <span
              className="
                block
                font-grotesk
                text-[9.1vw]
                font-bold
                uppercase
                tracking-[-0.08em]
              "
            >
              Santos
            </span>
          </motion.h1>

          {/* ===============================================
              FOTO
          =============================================== */}

          <motion.div
            style={{
              x: portraitX,
              y: portraitY,
            }}
            initial={{
              opacity: 0,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.28,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              relative
              col-start-6
              col-span-4
              h-[46vh]
              min-h-[370px]
              max-h-[500px]
            "
          >
            {/* shape rosa */}

            <div
              className="
                absolute
                inset-[4%_-5%_-4%_5%]
                rotate-[2deg]
                bg-[#ead4d8]
                [clip-path:polygon(12%_0%,92%_4%,100%_29%,91%_100%,7%_95%,0_27%)]
              "
            />

            {/* moldura */}

            <div
              aria-hidden
              className="
                absolute
                left-[-4%]
                top-[6%]
                h-[88%]
                w-[92%]
                rotate-[-2deg]
                border
                border-black/25
              "
            />

            {/* imagem */}

            <div
              className="
                absolute
                inset-0
                z-[5]
                overflow-hidden
                [clip-path:polygon(12%_0%,92%_4%,100%_29%,91%_100%,7%_95%,0_27%)]
              "
            >
              <Image
                src={PROFILE_IMAGE}
                alt="Retrato de Jesse Santos"
                fill
                priority
                sizes="34vw"
                className="
                  object-cover
                  object-[50%_42%]
                  transition-transform
                  duration-700
                  hover:scale-[1.02]
                "
              />
            </div>

            {/* detalhe verde */}

            <motion.div
              aria-hidden
              initial={{
                scale: 0,
              }}
              animate={{
                scale: 1,
              }}
              transition={{
                duration: 0.4,
                delay: 0.7,
              }}
              className="
                absolute
                -right-[3%]
                top-[18%]
                z-[10]
                h-8
                w-8
                rotate-[6deg]
                bg-[#c6ff3d]
              "
            />

            {/* linha */}

            <div
              aria-hidden
              className="
                absolute
                -right-[8%]
                bottom-[18%]
                z-[10]
                h-px
                w-[32%]
                bg-black/40
              "
            />
          </motion.div>

          {/* ===============================================
              CANTIM DO VIN
          =============================================== */}

          {cantim && (
            <div
              className="
                col-start-10
                col-span-3
                mt-14
                self-end
              "
            >
              <ProjectCard
                project={cantim}
                rotate={-1.5}
                depth={22}
                sx={sx}
                sy={sy}
                index={2}
                className="
                  h-[22vh]
                  min-h-[180px]
                  max-h-[235px]
                  w-full
                "
              />
            </div>
          )}

          {/* ===============================================
              TEXTO PRINCIPAL
          =============================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 14,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.55,
            }}
            className="
              col-span-4
              mt-3
              pr-8
            "
          >
            <p
              className="
                font-serif
                text-[1.45rem]
                italic
                leading-[1.22]
                lg:text-[1.7rem]
              "
            >
              Design gráfico, direção visual
              <br />
              e conteúdo em movimento.
            </p>

            <p
              className="
                mt-4
                max-w-[360px]
                font-grotesk
                text-sm
                leading-[1.6]
                text-graphite
              "
            >
              Feito para marcas que precisam ser vistas antes de serem lidas.
            </p>

            <Link
              href="#trabalho"
              data-cursor="ver"
              className="
                mt-6
                inline-flex
                items-center
                gap-3
                border-b
                border-black
                pb-1
                editorial-num
                uppercase
                transition-all
                duration-300
                hover:gap-5
              "
            >
              Ver trabalhos
              <span>↗</span>
            </Link>
          </motion.div>

          {/* micro texto */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.75,
              duration: 0.6,
            }}
            className="
              col-start-5
              col-span-1
              mt-5
              editorial-num
              uppercase
              leading-[1.7]
              text-graphite
            "
          >
            Ideia
            <br />
            imagem
            <br />
            ritmo
            <br />
            movimento
          </motion.div>
        </div>

        {/* DIVISÓRIA */}

        <div
          className="
            mt-7
            flex
            items-end
            justify-between
            border-t
            border-black/20
            pt-4
          "
        >
          <Link
            href="#trabalho"
            data-cursor="ver"
            className="editorial-num uppercase"
          >
            ↓ Trabalho selecionado
          </Link>

          <p
            className="
              editorial-num
              uppercase
              text-black/40
            "
          >
            Portfolio / 2026
          </p>
        </div>
      </div>

      {/* =====================================================
          MOBILE
      ===================================================== */}

      <div
        className="
          relative
          px-5
          pb-14
          pt-24
          md:hidden
        "
      >
        <div
          className="
            mb-8
            flex
            items-start
            justify-between
          "
        >
          <p className="editorial-num uppercase">
            Portfolio
          </p>

          <p
            className="
              editorial-num
              text-right
              uppercase
              text-black/45
            "
          >
            Design Gráfico
            <br />
            Direção Visual
          </p>
        </div>

        {/* NOME */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 18,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            leading-[0.72]
            tracking-[-0.07em]
          "
        >
          <span
            className="
              block
              font-serif
              text-[24vw]
              font-light
              italic
            "
          >
            Jesse
          </span>

          <span
            className="
              block
              font-grotesk
              text-[25vw]
              font-bold
              uppercase
              tracking-[-0.08em]
            "
          >
            Santos
          </span>
        </motion.h1>

        {/* FALAS */}

        {falas && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.7,
            }}
            className="
              mt-7
              aspect-[16/10]
              w-[94%]
              -rotate-1
              shadow-[0_14px_35px_rgba(0,0,0,0.12)]
            "
          >
            <Link
              href={`/trabalho/${falas.slug}`}
              className="block h-full w-full"
            >
              <ProjectCover
                project={falas}
                className="h-full w-full"
              />
            </Link>
          </motion.div>
        )}

        {/* BLOCO VERDE */}

        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
            duration: 0.7,
          }}
          className="
            ml-auto
            mt-10
            w-[62%]
            rotate-[1deg]
            bg-[#c6ff3d]
            px-4
            py-5
          "
        >
          <p
            className="
              editorial-num
              uppercase
              leading-[1.7]
            "
          >
            Design Gráfico
            <br />
            Direção Visual
            <br />
            Social Media
            <br />
            Motion
          </p>
        </motion.div>

        {/* FOTO */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
            duration: 0.8,
          }}
          className="
            relative
            mt-10
            aspect-[4/5]
            w-[84vw]
            max-w-[390px]
          "
        >
          <div
            className="
              absolute
              inset-[3%_-5%_-4%_5%]
              rotate-[-1.5deg]
              bg-[#ead4d8]
              [clip-path:polygon(10%_0%,92%_4%,100%_30%,91%_100%,7%_95%,0_27%)]
            "
          />

          <div
            className="
              absolute
              inset-0
              overflow-hidden
              [clip-path:polygon(10%_0%,92%_4%,100%_30%,91%_100%,7%_95%,0_27%)]
            "
          >
            <Image
              src={PROFILE_IMAGE}
              alt="Retrato de Jesse Santos"
              fill
              sizes="84vw"
              className="
                object-cover
                object-[50%_40%]
              "
            />
          </div>
        </motion.div>

        {/* TEXTO */}

        <motion.div
          initial={{
            opacity: 0,
            y: 14,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 0.7,
          }}
          className="
            mt-12
            border-t
            border-black/20
            pt-7
          "
        >
          <p
            className="
              max-w-[90%]
              font-serif
              text-[1.65rem]
              italic
              leading-[1.18]
            "
          >
            Design gráfico, direção visual e conteúdo em movimento.
          </p>

          <p
            className="
              mt-4
              max-w-[85%]
              text-sm
              leading-[1.6]
              text-graphite
            "
          >
            Feito para marcas que precisam ser vistas antes de serem lidas.
          </p>

          <Link
            href="#trabalho"
            className="
              mt-6
              inline-flex
              items-center
              gap-3
              border-b
              border-black
              pb-1
              editorial-num
              uppercase
            "
          >
            Ver trabalhos ↗
          </Link>
        </motion.div>

        {/* CANTIM MOBILE */}

        {cantim && (
          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.6,
              duration: 0.7,
            }}
            className="
              ml-auto
              mt-14
              aspect-[16/10]
              w-[72%]
              rotate-[1.5deg]
              shadow-[0_12px_30px_rgba(0,0,0,0.10)]
            "
          >
            <Link
              href={`/trabalho/${cantim.slug}`}
              className="block h-full w-full"
            >
              <ProjectCover
                project={cantim}
                className="h-full w-full"
              />
            </Link>

            <p
              className="
                mt-3
                editorial-num
                uppercase
              "
            >
              03 — Cantim do Vin
            </p>
          </motion.div>
        )}

        <div
          className="
            mt-12
            flex
            justify-between
            border-t
            border-black/20
            pt-4
            editorial-num
            uppercase
            text-black/45
          "
        >
          <span>↓ Trabalho</span>
          <span>2026</span>
        </div>
      </div>
    </section>
  );
}
