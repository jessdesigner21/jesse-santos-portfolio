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

type FragmentLayout = {
  top: string;
  left?: string;
  right?: string;
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
        right: layout.right,
        width: layout.w,
        height: layout.h,
        rotate: layout.rotate,
        x: tx,
        y: ty,
      }}
      initial={{
        opacity: 0,
        scale: 0.96,
        y: 18,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: 0.9,
        delay: 0.15 + index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        rotate: 0,
        scale: 1.018,
        zIndex: 30,
      }}
      className="
        absolute
        overflow-hidden
        shadow-[0_18px_45px_rgba(0,0,0,0.10)]
        pointer-events-auto
      "
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
            px-3
            py-2
            bg-black/75
            text-white
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

/*
 * A composição fica deliberadamente assimétrica,
 * mas cada elemento ocupa uma zona própria.
 *
 * Isso evita colisão entre:
 * nome / foto / textos / projetos.
 */
const layout: FragmentLayout[] = [
  {
    top: "13%",
    left: "5.5%",
    w: "26vw",
    h: "29vh",
    rotate: -2.5,
    depth: 22,
  },
  {
    top: "10%",
    right: "5%",
    w: "21vw",
    h: "23vh",
    rotate: 2.5,
    depth: 38,
  },
  {
    top: "62%",
    right: "5.5%",
    w: "22vw",
    h: "24vh",
    rotate: -1.5,
    depth: 27,
  },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const sx = useSpring(mx, {
    damping: 32,
    stiffness: 65,
  });

  const sy = useSpring(my, {
    damping: 32,
    stiffness: 65,
  });

  const portraitX = useTransform(sx, (v) => v * 10);
  const portraitY = useTransform(sy, (v) => v * 7);

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
        min-h-[100svh]
        bg-background
        overflow-hidden
        border-b
        border-black/15
      "
    >
      {/* =========================================================
          DESKTOP
      ========================================================= */}

      <div className="hidden md:block relative min-h-[100svh]">
        {/* PROJETOS */}

        <div className="absolute inset-0 z-[2]">
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
            FOTO
        ========================================================= */}

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
            duration: 1,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            absolute
            z-[5]

            left-[47%]
            top-[22%]

            w-[27vw]
            max-w-[430px]
            min-w-[330px]

            h-[58vh]
            max-h-[610px]
            min-h-[450px]
          "
        >
          {/* shape de fundo */}

          <div
            className="
              absolute
              inset-[4%_-5%_-4%_5%]
              bg-[#ead4d8]
              rotate-[2deg]
              [clip-path:polygon(13%_0%,92%_4%,100%_29%,91%_100%,8%_95%,0_26%)]
            "
          />

          {/* foto */}

          <div
            className="
              absolute
              inset-0
              overflow-hidden
              [clip-path:polygon(13%_0%,92%_4%,100%_29%,91%_100%,8%_95%,0_26%)]
            "
          >
            <Image
              src={PROFILE_IMAGE}
              alt="Retrato de Jesse Santos"
              fill
              priority
              sizes="30vw"
              className="
                object-cover
                object-[50%_40%]
              "
            />
          </div>

          {/* pequena legenda */}

          <div
            className="
              absolute
              -right-8
              bottom-[4%]
              z-20

              bg-background
              px-3
              py-2

              editorial-num
              uppercase
              rotate-[-2deg]
            "
          >
            Jesse Santos
            <br />
            Designer Gráfico
          </div>
        </motion.div>

        {/* =========================================================
            NOME
        ========================================================= */}

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
            absolute
            z-[10]

            left-[2.7%]
            top-[31%]

            w-[43vw]

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
              text-[9.5vw]
              translate-x-[0.5vw]
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
              text-[10.4vw]
              tracking-[-0.075em]
            "
          >
            Santos
          </span>
        </motion.h1>

        {/* =========================================================
            BLOCO PROFISSIONAL
        ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            rotate: -2,
            y: -12,
          }}
          animate={{
            opacity: 1,
            rotate: -1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.45,
          }}
          className="
            absolute
            z-[12]

            left-[34%]
            top-[12%]

            w-[190px]

            bg-[#c6ff3d]

            px-5
            py-5

            shadow-[0_10px_30px_rgba(0,0,0,0.06)]
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

        {/* =========================================================
            TEXTO PRINCIPAL
        ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.6,
          }}
          className="
            absolute
            z-[12]

            left-[3%]
            bottom-[12%]

            w-[32vw]
            max-w-[470px]
          "
        >
          <p
            className="
              font-serif
              italic

              text-[1.45rem]
              lg:text-[1.7rem]

              leading-[1.24]
            "
          >
            Design gráfico, direção visual
            <br />
            e conteúdo em movimento.
          </p>

          <p
            className="
              mt-3
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
              border-current

              transition-all
              duration-300

              hover:gap-5
            "
          >
            Ver trabalhos
            <span>↗</span>
          </Link>
        </motion.div>

        {/* =========================================================
            MICRO TEXTO
        ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.85,
            duration: 0.6,
          }}
          className="
            absolute
            z-[10]

            left-[38%]
            bottom-[10%]

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

        {/* =========================================================
            BASE DA CAPA
        ========================================================= */}

        <div
          className="
            absolute
            z-[20]

            left-8
            right-8
            bottom-6

            flex
            justify-between
            items-end

            pt-4

            border-t
            border-black/20
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
              text-black/45
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

          px-5
          pt-28
          pb-12
        "
      >
        {/* NOME */}

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
          className="
            leading-[0.76]
            tracking-[-0.055em]
          "
        >
          <span
            className="
              block
              font-serif
              italic
              font-light
              text-[20vw]
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
              text-[21vw]
              tracking-[-0.075em]
            "
          >
            Santos
          </span>
        </motion.h1>

        {/* BLOCO DE ÁREA */}

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
            delay: 0.2,
            duration: 0.7,
          }}
          className="
            mt-8
            inline-block

            bg-[#c6ff3d]

            px-4
            py-4

            -rotate-1
          "
        >
          <p
            className="
              editorial-num
              uppercase
              leading-[1.65]
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

        {/* PRIMEIRO PROJETO */}

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
              duration: 0.8,
              delay: 0.3,
            }}
            className="
              mt-10

              w-[92%]
              aspect-[16/10]

              -rotate-2

              shadow-[0_16px_35px_rgba(0,0,0,0.12)]
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

        {/* FOTO */}

        <motion.div
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
            delay: 0.4,
          }}
          className="
            relative

            mt-14
            ml-auto

            w-[78vw]
            max-w-[370px]
            aspect-[4/5]
          "
        >
          <div
            className="
              absolute
              inset-[4%_-5%_-4%_5%]

              bg-[#ead4d8]

              rotate-[2deg]

              [clip-path:polygon(12%_0%,92%_4%,100%_30%,91%_100%,7%_95%,0_27%)]
            "
          />

          <div
            className="
              absolute
              inset-0

              overflow-hidden

              [clip-path:polygon(12%_0%,92%_4%,100%_30%,91%_100%,7%_95%,0_27%)]
            "
          >
            <Image
              src={PROFILE_IMAGE}
              alt="Retrato de Jesse Santos"
              fill
              sizes="78vw"
              className="
                object-cover
                object-[50%_38%]
              "
            />
          </div>
        </motion.div>

        {/* DESCRIÇÃO */}

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
            delay: 0.5,
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

              text-[1.45rem]
              leading-[1.25]
            "
          >
            Design gráfico, direção visual e conteúdo em movimento.
          </p>

          <p
            className="
              mt-3
              max-w-xs

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
      </div>
    </section>
  );
}
