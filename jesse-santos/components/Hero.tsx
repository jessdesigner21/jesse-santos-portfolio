"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";

import { getFeaturedProjects, type Project } from "@/data/projects";
import ProjectCover from "./ProjectCover";

const PROFILE_IMAGE = "/jesse.jpg.jpeg";

function ProjectCard({
  project,
  rotate = 0,
  depth = 20,
  sx,
  sy,
  index,
  className = "",
}: {
  project: Project;
  rotate?: number;
  depth?: number;
  sx: MotionValue<number>;
  sy: MotionValue<number>;
  index: number;
  className?: string;
}) {
  const x = useTransform(sx, (v) => v * depth);
  const y = useTransform(sy, (v) => v * depth);

  return (
    <motion.div
      style={{ x, y, rotate }}
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.12 + index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        rotate: 0,
        scale: 1.015,
        y: -4,
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
        className="block w-full h-full"
      >
        <ProjectCover project={project} className="w-full h-full" />

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            bg-black/75
            text-white
            px-3
            py-2
            opacity-0
            hover:opacity-100
            transition-opacity
            duration-300
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

const fragments = getFeaturedProjects().slice(0, 3);

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

  const portraitX = useTransform(sx, (v) => v * 8);
  const portraitY = useTransform(sy, (v) => v * 6);

  function handleMove(e: React.MouseEvent<HTMLElement>) {
    const rect = ref.current?.getBoundingClientRect();

    if (!rect) return;

    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      ref={ref}
      onMouseMove={handleMove}
      className="
        relative
        bg-background
        border-b
        border-black/15
        overflow-hidden
      "
    >
      {/* =========================================================
          DESKTOP
      ========================================================= */}

      <div
        className="
          hidden md:block
          min-h-[100svh]
          px-8
          lg:px-10
          pt-24
          pb-6
        "
      >
        <div
          className="
            grid
            grid-cols-12
            gap-x-5
            lg:gap-x-7
            gap-y-5
            items-start
          "
        >
          {/* =====================================================
              LINHA 01 — PROJETOS + ÁREAS
          ===================================================== */}

          {fragments[0] && (
            <div className="col-span-4">
              <ProjectCard
                project={fragments[0]}
                rotate={-2}
                depth={18}
                sx={sx}
                sy={sy}
                index={0}
                className="
                  w-full
                  h-[24vh]
                  min-h-[190px]
                  max-h-[250px]
                "
              />
            </div>
          )}

          {/* bloco verde */}
          <motion.div
            initial={{ opacity: 0, y: -12, rotate: -1 }}
            animate={{ opacity: 1, y: 0, rotate: -1 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="
              col-start-5
              col-span-2

              mt-1

              bg-[#c6ff3d]

              px-5
              py-5

              min-h-[130px]
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

          {fragments[1] && (
            <div
              className="
                col-start-10
                col-span-3
              "
            >
              <ProjectCard
                project={fragments[1]}
                rotate={2}
                depth={28}
                sx={sx}
                sy={sy}
                index={1}
                className="
                  w-full
                  h-[21vh]
                  min-h-[170px]
                  max-h-[225px]
                "
              />
            </div>
          )}

          {/* =====================================================
              LINHA 02 — NOME + FOTO + TERCEIRO PROJETO
          ===================================================== */}

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
                italic
                font-light

                text-[8.3vw]
              "
            >
              Jesse
            </span>

            <span
              className="
                block
                font-grotesk
                font-bold
                uppercase

                text-[9.1vw]
                tracking-[-0.08em]
              "
            >
              Santos
            </span>
          </motion.h1>

          {/* FOTO */}

          <motion.div
            style={{
              x: portraitX,
              y: portraitY,
            }}
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.28,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              col-start-6
              col-span-4

              relative

              h-[46vh]
              min-h-[370px]
              max-h-[500px]
            "
          >
            <div
              className="
                absolute
                inset-[3%_-4%_-4%_4%]

                bg-[#ead4d8]

                rotate-[1.5deg]

                [clip-path:polygon(12%_0%,92%_4%,100%_29%,91%_100%,7%_95%,0_27%)]
              "
            />

            <div
              className="
                absolute
                inset-0

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
                "
              />
            </div>

            <div
              className="
                absolute
                right-1
                bottom-5

                bg-background

                px-3
                py-2

                editorial-num
                uppercase
              "
            >
              Jesse Santos
              <br />
              Designer Gráfico
            </div>
          </motion.div>

          {fragments[2] && (
            <div
              className="
                col-start-10
                col-span-3

                self-end
                mt-14
              "
            >
              <ProjectCard
                project={fragments[2]}
                rotate={-1.5}
                depth={22}
                sx={sx}
                sy={sy}
                index={2}
                className="
                  w-full
                  h-[22vh]
                  min-h-[180px]
                  max-h-[235px]
                "
              />
            </div>
          )}

          {/* =====================================================
              LINHA 03 — TEXTO
          ===================================================== */}

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
                italic

                text-[1.45rem]
                lg:text-[1.7rem]

                leading-[1.22]
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
                inline-flex
                items-center
                gap-3

                mt-6
                pb-1

                editorial-num
                uppercase

                border-b
                border-black

                transition-all
                duration-300

                hover:gap-5
              "
            >
              Ver trabalhos
              <span>↗</span>
            </Link>
          </motion.div>

          {/* microtexto */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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

          {/* espaço central proposital */}
          <div className="col-start-6 col-span-4" />

          {/* assinatura visual direita */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.9,
            }}
            className="
              col-start-10
              col-span-3

              mt-5

              flex
              justify-end
            "
          >
            <p
              className="
                editorial-num
                uppercase
                text-right
                text-black/45
                leading-[1.7]
              "
            >
              Design
              <br />
              imagem
              <br />
              movimento
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            DIVISÓRIA DA CAPA
        ===================================================== */}

        <div
          className="
            mt-7

            pt-4

            border-t
            border-black/20

            flex
            items-end
            justify-between
          "
        >
          <Link
            href="#trabalho"
            data-cursor="ver"
            className="
              editorial-num
              uppercase
            "
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

      {/* =========================================================
          MOBILE
      ========================================================= */}

      <div
        className="
          md:hidden
          relative
          px-5
          pt-24
          pb-14
        "
      >
        <div
          className="
            flex
            justify-between
            items-start

            mb-8
          "
        >
          <p
            className="
              editorial-num
              uppercase
            "
          >
            Portfolio
          </p>

          <p
            className="
              editorial-num
              uppercase
              text-right
              text-black/45
            "
          >
            Design Gráfico
            <br />
            Direção Visual
          </p>
        </div>

        {/* nome */}

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
              italic
              font-light

              text-[24vw]
            "
          >
            Jesse
          </span>

          <span
            className="
              block
              font-grotesk
              font-bold
              uppercase

              text-[25vw]
              tracking-[-0.08em]
            "
          >
            Santos
          </span>
        </motion.h1>

        {/* projeto 01 */}

        {fragments[0] && (
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

              w-[94%]

              aspect-[16/10]

              -rotate-1

              shadow-[0_14px_35px_rgba(0,0,0,0.12)]
            "
          >
            <Link
              href={`/trabalho/${fragments[0].slug}`}
              className="block w-full h-full"
            >
              <ProjectCover
                project={fragments[0]}
                className="w-full h-full"
              />
            </Link>
          </motion.div>
        )}

        {/* disciplinas */}

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
            mt-10
            ml-auto

            w-[62%]

            bg-[#c6ff3d]

            px-4
            py-5

            rotate-[1deg]
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

        {/* foto */}

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

            w-[84vw]
            max-w-[390px]

            aspect-[4/5]
          "
        >
          <div
            className="
              absolute
              inset-[3%_-5%_-4%_5%]

              bg-[#ead4d8]

              rotate-[-1.5deg]

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

        {/* descrição */}

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

            pt-7

            border-t
            border-black/20
          "
        >
          <p
            className="
              font-serif
              italic

              text-[1.65rem]
              leading-[1.18]

              max-w-[90%]
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
              inline-flex
              items-center
              gap-3

              mt-6
              pb-1

              editorial-num
              uppercase

              border-b
              border-black
            "
          >
            Ver trabalhos ↗
          </Link>
        </motion.div>

        <div
          className="
            mt-12
            pt-4

            border-t
            border-black/20

            flex
            justify-between

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
