"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import { getFeaturedProjects } from "@/data/projects";
import ProjectCover from "./ProjectCover";

/**
 * QUANDO VOCÊ COLOCAR SUA FOTO:
 *
 * 1. Crie:
 *    public/profile/
 *
 * 2. Coloque sua foto como:
 *    public/profile/jesse.webp
 *
 * 3. Troque null por:
 *    "/profile/jesse.webp"
 */
const PROFILE_IMAGE: string | null = null;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const sx = useSpring(mx, {
    damping: 30,
    stiffness: 65,
  });

  const sy = useSpring(my, {
    damping: 30,
    stiffness: 65,
  });

  const imageX = useTransform(sx, (v) => v * 22);
  const imageY = useTransform(sy, (v) => v * 14);

  const cardX = useTransform(sx, (v) => v * 35);
  const cardY = useTransform(sy, (v) => v * 22);

  const featured = getFeaturedProjects();

  // Como Falas de Orgulho está em primeiro no projects.ts,
  // ele será o protagonista.
  const falas = featured[0];
  const project2 = featured[1];
  const project3 = featured[2];

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
        overflow-hidden
        bg-[#f3efe8]
        min-h-[100svh]
        pt-28
        pb-16
        md:pt-0
        md:pb-0
      "
    >
      {/* =========================================================
          DESKTOP
      ========================================================== */}

      <div className="hidden md:block relative min-h-[100svh] px-8 lg:px-10">
        {/* ---------------------------------------------------------
            PROJETO FALAS DE ORGULHO
            imagem real parcialmente atrás do nome
        ---------------------------------------------------------- */}

        {falas && (
          <motion.div
            style={{
              x: imageX,
              y: imageY,
              rotate: -3,
            }}
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              absolute
              z-[1]
              top-[14%]
              left-[6%]
              w-[29vw]
              h-[29vh]
              min-h-[230px]
              max-h-[340px]
              shadow-[0_25px_60px_rgba(0,0,0,0.14)]
            "
          >
            <Link
              href={`/trabalho/${falas.slug}`}
              data-cursor="ver"
              className="block w-full h-full"
            >
              <ProjectCover
                project={falas}
                className="w-full h-full"
              />
            </Link>

            <div
              className="
                absolute
                -bottom-7
                left-0
                editorial-num
                text-[10px]
                uppercase
                tracking-[0.18em]
              "
            >
              01 / {falas.title}
            </div>
          </motion.div>
        )}

        {/* ---------------------------------------------------------
            BLOCO VERDE / COMPETÊNCIAS
        ---------------------------------------------------------- */}

        <motion.div
          initial={{
            opacity: 0,
            rotate: -3,
            y: -20,
          }}
          animate={{
            opacity: 1,
            rotate: -1.5,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.35,
          }}
          className="
            absolute
            z-[6]
            top-[12%]
            left-[35%]
            bg-[#c6ff3d]
            px-5
            py-5
            w-[190px]
            lg:w-[220px]
            shadow-[0_15px_35px_rgba(0,0,0,0.08)]
          "
        >
          <p
            className="
              font-mono
              uppercase
              text-[11px]
              lg:text-xs
              leading-[1.65]
              tracking-[0.12em]
            "
          >
            Designer Gráfico
            <br />
            Direção Visual
            <br />
            Social Media
            <br />
            Conteúdo em Movimento
          </p>
        </motion.div>

        {/* ---------------------------------------------------------
            FOTO
        ---------------------------------------------------------- */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.25,
          }}
          className="
            absolute
            z-[3]
            top-[23%]
            left-[48%]
            w-[27vw]
            max-w-[430px]
            min-w-[320px]
            h-[62vh]
            max-h-[650px]
            min-h-[480px]
          "
        >
          {/* shape atrás da foto */}
          <div
            className="
              absolute
              inset-[8%_3%_4%_3%]
              bg-[#e7cad0]
              rotate-[3deg]
              [clip-path:polygon(14%_0%,91%_5%,100%_30%,92%_100%,10%_94%,0_25%)]
            "
          />

          {PROFILE_IMAGE && (
            <div
              className="
                absolute
                inset-0
                overflow-hidden
                [clip-path:polygon(14%_0%,91%_5%,100%_30%,92%_100%,10%_94%,0_25%)]
              "
            >
              <Image
                src={PROFILE_IMAGE}
                alt="Jesse Santos"
                fill
                priority
                sizes="30vw"
                className="object-cover object-center"
              />
            </div>
          )}

          {/* detalhe gráfico quando ainda não há foto */}
          {!PROFILE_IMAGE && (
            <>
              <div
                aria-hidden
                className="
                  absolute
                  top-[18%]
                  left-[20%]
                  w-[55%]
                  h-px
                  bg-black/20
                  rotate-[-10deg]
                "
              />
              <div
                aria-hidden
                className="
                  absolute
                  bottom-[18%]
                  right-[12%]
                  w-20
                  h-20
                  border
                  border-black/20
                  rotate-[8deg]
                "
              />
            </>
          )}
        </motion.div>

        {/* ---------------------------------------------------------
            CARD SUPERIOR DIREITO
        ---------------------------------------------------------- */}

        {project2 && (
          <motion.div
            style={{
              x: cardX,
              y: cardY,
              rotate: 3,
            }}
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.45,
            }}
            whileHover={{
              rotate: 0,
              scale: 1.025,
            }}
            className="
              absolute
              z-[4]
              top-[9%]
              right-[5%]
              w-[22vw]
              h-[22vh]
              min-h-[180px]
              max-h-[260px]
              shadow-[0_20px_45px_rgba(0,0,0,0.12)]
            "
          >
            <Link
              href={`/trabalho/${project2.slug}`}
              data-cursor="ver"
              className="block w-full h-full"
            >
              <ProjectCover
                project={project2}
                className="w-full h-full"
              />
            </Link>
          </motion.div>
        )}

        {/* ---------------------------------------------------------
            CARD INFERIOR DIREITO
        ---------------------------------------------------------- */}

        {project3 && (
          <motion.div
            style={{
              x: imageX,
              y: imageY,
              rotate: -2,
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
              duration: 0.8,
              delay: 0.55,
            }}
            whileHover={{
              rotate: 0,
              scale: 1.025,
            }}
            className="
              absolute
              z-[5]
              right-[6%]
              bottom-[15%]
              w-[23vw]
              h-[25vh]
              min-h-[190px]
              max-h-[290px]
              shadow-[0_20px_45px_rgba(0,0,0,0.12)]
            "
          >
            <Link
              href={`/trabalho/${project3.slug}`}
              data-cursor="ver"
              className="block w-full h-full"
            >
              <ProjectCover
                project={project3}
                className="w-full h-full"
              />
            </Link>
          </motion.div>
        )}

        {/* ---------------------------------------------------------
            NOME
        ---------------------------------------------------------- */}

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
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            absolute
            z-[7]
            left-[2.5%]
            top-[28%]
            leading-[0.72]
            tracking-[-0.065em]
            pointer-events-none
          "
        >
          <span
            className="
              block
              font-serif
              italic
              font-light
              text-[10vw]
              translate-x-[1vw]
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
              text-[10.7vw]
              tracking-[-0.075em]
            "
          >
            Santos
          </span>
        </motion.h1>

        {/* ---------------------------------------------------------
            DESCRIÇÃO
        ---------------------------------------------------------- */}

        <motion.div
          initial={{
            opacity: 0,
            y: 16,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.65,
          }}
          className="
            absolute
            z-[8]
            left-[3%]
            bottom-[13%]
            max-w-[460px]
          "
        >
          <p
            className="
              font-serif
              italic
              text-[1.35rem]
              lg:text-[1.6rem]
              leading-[1.25]
            "
          >
            Design gráfico, direção visual
            <br />
            e conteúdo em movimento.
          </p>

          <p
            className="
              mt-3
              font-grotesk
              text-sm
              leading-relaxed
              max-w-[390px]
              text-black/65
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
              mt-7
              editorial-num
              uppercase
              border-b
              border-black
              pb-1
              hover:gap-5
              transition-all
            "
          >
            Ver trabalhos
            <span>↗</span>
          </Link>
        </motion.div>

        {/* ---------------------------------------------------------
            MICRO TEXTO À DIREITA
        ---------------------------------------------------------- */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.8,
            duration: 0.6,
          }}
          className="
            absolute
            z-[6]
            right-[27%]
            top-[49%]
            editorial-num
            uppercase
            leading-[1.65]
            max-w-[155px]
          "
        >
          Ideia
          <br />
          imagem
          <br />
          ritmo
          <br />
          movimento
        </motion.p>

        {/* ---------------------------------------------------------
            RODAPÉ DO HERO
        ---------------------------------------------------------- */}

        <div
          className="
            absolute
            z-[10]
            left-8
            right-8
            bottom-7
            flex
            items-end
            justify-between
            border-t
            border-black/25
            pt-4
          "
        >
          <p className="editorial-num uppercase">
            01 — Trabalho selecionado
          </p>

          <p className="editorial-num uppercase text-black/50">
            São Paulo / Brasil
          </p>
        </div>
      </div>

      {/* =========================================================
          MOBILE
      ========================================================== */}

      <div className="md:hidden px-5">
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="leading-[0.78]"
        >
          <span
            className="
              block
              font-serif
              italic
              text-[21vw]
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
              text-[22vw]
              tracking-[-0.075em]
            "
          >
            Santos
          </span>
        </motion.h1>

        <div
          className="
            mt-8
            grid
            grid-cols-[1fr_auto]
            gap-4
            items-start
          "
        >
          <p
            className="
              font-serif
              italic
              text-xl
              leading-[1.25]
            "
          >
            Design gráfico, direção visual e conteúdo em movimento.
          </p>

          <p
            className="
              editorial-num
              uppercase
              leading-[1.5]
            "
          >
            Design
            <br />
            Social
            <br />
            Motion
          </p>
        </div>

        {falas && (
          <motion.div
            initial={{
              opacity: 0,
              y: 24,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
            className="
              mt-10
              w-[91%]
              aspect-[16/10]
              -rotate-2
              shadow-[0_18px_40px_rgba(0,0,0,0.15)]
            "
          >
            <Link
              href={`/trabalho/${falas.slug}`}
              className="block w-full h-full"
            >
              <ProjectCover
                project={falas}
                className="w-full h-full"
              />
            </Link>
          </motion.div>
        )}

        {PROFILE_IMAGE && (
          <div
            className="
              relative
              mt-12
              ml-auto
              w-[72%]
              aspect-[4/5]
            "
          >
            <div
              className="
                absolute
                inset-2
                bg-[#e7cad0]
                rotate-3
              "
            />

            <Image
              src={PROFILE_IMAGE}
              alt="Jesse Santos"
              fill
              sizes="72vw"
              className="object-cover relative z-10"
            />
          </div>
        )}

        <p
          className="
            mt-10
            text-sm
            leading-relaxed
            max-w-xs
            text-black/65
          "
        >
          Feito para marcas que precisam ser vistas antes de serem lidas.
        </p>

        <Link
          href="#trabalho"
          className="
            inline-flex
            mt-6
            items-center
            gap-3
            editorial-num
            uppercase
            border-b
            border-black
            pb-1
          "
        >
          Ver trabalhos ↗
        </Link>
      </div>
    </section>
  );
}
