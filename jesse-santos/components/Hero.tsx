"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import Link from "next/link";
import { getFeaturedProjects, type Project } from "@/data/projects";
import ProjectCover from "./ProjectCover";

type FragmentLayout = {
  top: string;
  left: string;
  w: string;
  h: string;
  rotate: number;
  depth: number;
};

function HeroFragment({
  project,
  layout,
  sx,
  sy,
  index,
}: {
  project: Project;
  layout: FragmentLayout;
  sx: MotionValue<number>;
  sy: MotionValue<number>;
  index: number;
}) {
  const tx = useTransform(sx, (v) => v * layout.depth);
  const ty = useTransform(sy, (v) => v * layout.depth);

  return (
    <motion.div
      style={{
        top: layout.top,
        left: layout.left,
        width: layout.w,
        height: layout.h,
        rotate: layout.rotate,
        x: tx,
        y: ty,
      }}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay: 0.12 * index,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="absolute shadow-[0_20px_55px_rgba(0,0,0,0.12)]"
    >
      <ProjectCover project={project} className="w-full h-full" />
    </motion.div>
  );
}

const fragments = getFeaturedProjects().slice(0, 3);

/*
 * Agora usamos somente 3 fragmentos no hero.
 * Isso reduz a poluição e evita conflito com nome, retrato e textos.
 */
const layout: FragmentLayout[] = [
  {
    top: "13%",
    left: "6%",
    w: "27vw",
    h: "30vh",
    rotate: -3,
    depth: 24,
  },
  {
    top: "10%",
    left: "68%",
    w: "20vw",
    h: "22vh",
    rotate: 3,
    depth: 42,
  },
  {
    top: "64%",
    left: "72%",
    w: "21vw",
    h: "23vh",
    rotate: -2,
    depth: 30,
  },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const sx = useSpring(mx, {
    damping: 30,
    stiffness: 60,
  });

  const sy = useSpring(my, {
    damping: 30,
    stiffness: 60,
  });

  function handleMove(e: React.MouseEvent) {
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
        min-h-[100svh]
        overflow-hidden
        pt-28 pb-20
        md:pt-0 md:pb-0
        bg-background
      "
    >
      {/* =========================================================
          DESKTOP — FRAGMENTOS DE PROJETOS
      ========================================================= */}

      <div
        className="absolute inset-0 hidden md:block pointer-events-none"
        aria-hidden
      >
        {fragments.map((project, index) => (
          <HeroFragment
            key={project.slug}
            project={project}
            layout={layout[index]}
            sx={sx}
            sy={sy}
            index={index}
          />
        ))}
      </div>

      {/* =========================================================
          DESKTOP — RETRATO
          
          Quando você subir sua foto para:
          /public/profile/jesse.webp
          
          ela aparecerá automaticamente aqui.
      ========================================================= */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.25,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          hidden md:block
          absolute
          z-[4]
          left-[45%]
          top-[22%]
          w-[25vw]
          h-[67vh]
        "
      >
        {/* forma editorial atrás da fotografia */}
        <div
          className="
            absolute
            inset-[6%_-5%_-3%_5%]
            bg-[#f1d8dc]
            [clip-path:polygon(14%_0,90%_4%,100%_35%,89%_100%,4%_94%,0_30%)]
          "
        />

        {/* FOTO */}
        <div
          className="
            absolute
            inset-0
            bg-center
            bg-no-repeat
            bg-contain
            z-10
          "
          style={{
            backgroundImage: "url('/profile/jesse.webp')",
          }}
          aria-label="Retrato de Jesse Santos"
        />
      </motion.div>

      {/* =========================================================
          CONTEÚDO PRINCIPAL
      ========================================================= */}

      <div
        className="
          relative
          z-10
          min-h-[calc(100svh-7rem)]
          md:min-h-[100svh]
          px-5
          md:px-8
        "
      >
        {/* NOME */}

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            pt-10
            md:absolute
            md:left-[2%]
            md:top-[25%]
            leading-[0.78]
            tracking-[-0.055em]
            pointer-events-none
          "
        >
          <span
            className="
              block
              font-serif
              italic
              font-light
              text-[19vw]
              md:text-[10.5vw]
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
              text-[19vw]
              md:text-[10.5vw]
              -mt-[1.5vw]
            "
          >
            Santos
          </span>
        </motion.h1>

        {/* TEXTO PRINCIPAL */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.4,
          }}
          className="
            mt-10
            md:mt-0
            md:absolute
            md:left-[3%]
            md:top-[67%]
            md:w-[31vw]
          "
        >
          <p
            className="
              font-serif
              italic
              text-[1.45rem]
              md:text-[1.65rem]
              leading-[1.25]
              max-w-xl
            "
          >
            Design gráfico, direção visual e conteúdo em movimento.
          </p>

          <p
            className="
              mt-3
              font-grotesk
              text-sm
              md:text-base
              leading-relaxed
              max-w-md
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
              editorial-num
              border-b
              border-current
              pb-1
              transition-[gap]
              duration-300
              hover:gap-5
            "
          >
            VER TRABALHOS
            <span>↗</span>
          </Link>
        </motion.div>

        {/* DISCIPLINAS */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.65,
            duration: 0.7,
          }}
          className="
            mt-12
            md:mt-0
            md:absolute
            md:left-[39%]
            md:bottom-[9%]
            editorial-num
            leading-[1.65]
            text-graphite
          "
        >
          DESIGN GRÁFICO
          <br />
          DIREÇÃO VISUAL
          <br />
          SOCIAL MEDIA
          <br />
          CONTEÚDO EM MOVIMENTO
        </motion.div>

        {/* PEQUENA FRASE EDITORIAL */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.85,
            duration: 0.7,
          }}
          className="
            hidden
            md:block
            absolute
            right-[7%]
            top-[48%]
            w-[15vw]
            font-grotesk
            text-xs
            uppercase
            tracking-[0.14em]
            leading-[1.8]
          "
        >
          IDEIAS
          <br />
          IMAGENS
          <br />
          MOVIMENTO
          <div className="mt-3 h-px w-16 bg-current" />
        </motion.div>

        {/* =====================================================
            MOBILE — FOTO
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.35,
          }}
          className="
            md:hidden
            relative
            mt-12
            w-[82vw]
            max-w-sm
            aspect-[4/5]
            ml-auto
          "
        >
          <div
            className="
              absolute
              inset-[5%_-4%_-3%_5%]
              bg-[#f1d8dc]
              [clip-path:polygon(12%_0,91%_4%,100%_35%,90%_100%,3%_94%,0_28%)]
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-center
              bg-no-repeat
              bg-contain
            "
            style={{
              backgroundImage: "url('/profile/jesse.webp')",
            }}
            aria-label="Retrato de Jesse Santos"
          />
        </motion.div>

        {/* =====================================================
            MOBILE — PROJETOS
        ===================================================== */}

        <div className="md:hidden flex gap-4 mt-12 overflow-hidden -mr-5">
          {fragments.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.5 + index * 0.1,
              }}
              style={{
                rotate: index % 2 === 0 ? -2 : 2,
              }}
              className={`
                shrink-0
                shadow-[0_12px_30px_rgba(0,0,0,0.12)]
                ${
                  index === 0
                    ? "w-[58vw] aspect-[16/10]"
                    : "w-[38vw] aspect-square mt-6"
                }
              `}
            >
              <ProjectCover project={project} className="w-full h-full" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* INDICAÇÃO DE SCROLL */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
          duration: 0.6,
        }}
        className="
          hidden
          md:block
          absolute
          bottom-6
          left-8
          editorial-num
          text-graphite
        "
      >
        <Link href="#trabalho" data-cursor="ver">
          ↓ TRABALHO SELECIONADO
        </Link>
      </motion.div>
    </section>
  );
}
