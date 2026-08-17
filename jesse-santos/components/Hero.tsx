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
      animate={{ opacity: 0.9, scale: 1 }}
      transition={{ duration: 1, delay: 0.15 * index, ease: [0.16, 1, 0.3, 1] }}
      className="absolute shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
    >
      <ProjectCover project={project} className="w-full h-full" />
    </motion.div>
  );
}

const fragments = getFeaturedProjects().slice(0, 5);

const layout = [
  { top: "14%", left: "6%", w: "26vw", h: "32vh", rotate: -4, depth: 30 },
  { top: "8%", left: "62%", w: "22vw", h: "24vh", rotate: 3, depth: 60 },
  { top: "52%", left: "4%", w: "18vw", h: "22vh", rotate: 2, depth: 15 },
  { top: "58%", left: "70%", w: "24vw", h: "30vh", rotate: -2, depth: 45 },
  { top: "34%", left: "38%", w: "16vw", h: "18vh", rotate: -6, depth: 75 },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { damping: 30, stiffness: 60 });
  const sy = useSpring(my, { damping: 30, stiffness: 60 });

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
      className="relative md:min-h-[100svh] pt-28 pb-10 md:pt-0 md:pb-0 flex flex-col justify-center overflow-hidden"
    >
      {/* fragmentos de projetos reais, reagem levemente ao cursor */}
      <div className="absolute inset-0 hidden md:block" aria-hidden>
        {fragments.map((p, i) => (
          <HeroFragment
            key={p.slug}
            project={p}
            layout={layout[i]}
            sx={sx}
            sy={sy}
            index={i}
          />
        ))}
      </div>

      <div className="relative z-10 px-5 md:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="leading-[0.82] tracking-tight"
        >
          <span className="block font-serif italic font-light text-[18vw] md:text-[13vw]">
            Jesse
          </span>
          <span className="block font-grotesk font-bold uppercase text-[18vw] md:text-[13vw] -mt-[2vw]">
            Santos
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 md:mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6 max-w-3xl"
        >
          <p className="font-serif italic text-xl md:text-2xl max-w-md">
            Design gráfico, direção visual e conteúdo em movimento — feito
            para marcas que precisam ser vistas antes de serem lidas.
          </p>
          <p className="editorial-num text-graphite">
            Designer Gráfico<br />Direção Visual<br />Conteúdo em Movimento
          </p>
        </motion.div>

        {/* mobile: tira estática de fragmentos reais (sem interação de cursor) */}
        <div className="md:hidden flex gap-4 mt-10 -mr-5">
          {fragments.slice(0, 3).map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
              style={{ rotate: i % 2 === 0 ? -3 : 2 }}
              className={`shrink-0 shadow-[0_12px_30px_rgba(0,0,0,0.15)] ${
                i === 0 ? "w-[42vw] aspect-[4/5]" : "w-[30vw] aspect-square mt-6"
              }`}
            >
              <ProjectCover project={p} className="w-full h-full" />
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-6 left-5 md:left-8 editorial-num text-graphite"
      >
        <Link href="#trabalho" data-cursor="ver">
          ↓ Trabalho selecionado
        </Link>
      </motion.div>
    </section>
  );
}
