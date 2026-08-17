"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCover from "./ProjectCover";
import { setAccent } from "@/lib/accent";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

function Num({ n }: { n: number }) {
  return (
    <span className="editorial-num text-graphite">
      {String(n).padStart(2, "0")}
    </span>
  );
}

function Meta({ p }: { p: (typeof projects)[number] }) {
  return (
    <div className="editorial-num text-graphite flex flex-wrap gap-x-4 gap-y-1 mt-2">
      {p.client && <span>{p.client}</span>}
      <span>{p.discipline[0]}</span>
      {p.year && <span>{p.year}</span>}
    </div>
  );
}

export default function SelectedWork() {
  const [p1, p2, p3, p4, p5, ...rest] = projects;

  return (
    <section id="trabalho" className="relative px-5 md:px-8 py-24 md:py-36">
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        variants={fadeUp}
        className="editorial-num mb-10"
      >
        Trabalhos Selecionados
      </motion.p>

      {/* 01 — imagem enorme + título lateral pequeno */}
      {p1 && (
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          onMouseEnter={() => setAccent(p1.accentColor)}
          onMouseLeave={() => setAccent(null)}
          className="grid md:grid-cols-12 gap-6 items-end mb-20 md:mb-32"
        >
          <Link
            href={`/work/${p1.slug}`}
            data-cursor="ver"
            className="md:col-span-9 block group"
          >
            <ProjectCover
              project={p1}
              priority
              className="w-full aspect-[4/5] md:aspect-[16/10] transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </Link>
          <div className="md:col-span-3">
            <Num n={1} />
            <h3 className="font-serif italic text-3xl md:text-4xl mt-2">
              <Link href={`/work/${p1.slug}`}>{p1.title}</Link>
            </h3>
            <Meta p={p1} />
          </div>
        </motion.div>
      )}

      {/* 02 — duas imagens menores desalinhadas */}
      {p2 && p3 && (
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="grid md:grid-cols-12 gap-6 mb-20 md:mb-32"
        >
          <div
            onMouseEnter={() => setAccent(p2.accentColor)}
            onMouseLeave={() => setAccent(null)}
            className="md:col-span-5 md:mt-16"
          >
            <Num n={2} />
            <Link href={`/work/${p2.slug}`} data-cursor="ver" className="block group mt-2">
              <ProjectCover project={p2} className="w-full aspect-[4/5] transition-transform duration-700 group-hover:scale-[1.02]" />
            </Link>
            <h3 className="font-serif italic text-2xl mt-3">{p2.title}</h3>
            <Meta p={p2} />
          </div>
          <div
            onMouseEnter={() => setAccent(p3.accentColor)}
            onMouseLeave={() => setAccent(null)}
            className="md:col-span-6 md:col-start-7"
          >
            <Num n={3} />
            <Link href={`/work/${p3.slug}`} data-cursor="ver" className="block group mt-2">
              <ProjectCover project={p3} className="w-full aspect-[3/4] transition-transform duration-700 group-hover:scale-[1.02]" />
            </Link>
            <h3 className="font-serif italic text-2xl mt-3">{p3.title}</h3>
            <Meta p={p3} />
          </div>
        </motion.div>
      )}

      {/* 04 — full bleed */}
      {p4 && (
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          onMouseEnter={() => setAccent(p4.accentColor)}
          onMouseLeave={() => setAccent(null)}
          className="-mx-5 md:-mx-8 mb-20 md:mb-32"
        >
          <Link href={`/work/${p4.slug}`} data-cursor="ver" className="block group relative">
            <ProjectCover project={p4} className="w-full aspect-[16/9] md:aspect-[21/9] transition-transform duration-700 group-hover:scale-[1.01]" />
            <div className="absolute bottom-0 left-0 p-5 md:p-8">
              <Num n={4} />
              <h3 className="font-grotesk font-bold uppercase text-3xl md:text-6xl text-off-white mt-2 mix-blend-difference">
                {p4.title}
              </h3>
            </div>
          </Link>
        </motion.div>
      )}

      {/* 05 — projeto experimental quebrando a grade (Falas de Orgulho) */}
      {p5 && (
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          onMouseEnter={() => setAccent(p5.accentColor)}
          onMouseLeave={() => setAccent(null)}
          className="relative grid md:grid-cols-12 gap-4 mb-20 md:mb-32"
        >
          <div className="md:col-span-4 md:col-start-2 md:-rotate-2">
            <Num n={5} />
            <Link href={`/work/${p5.slug}`} data-cursor="ver" className="block group mt-2">
              <ProjectCover project={p5} className="w-full aspect-square transition-transform duration-700 group-hover:scale-[1.02]" />
            </Link>
          </div>
          <div className="md:col-span-6 md:col-start-6 md:mt-24">
            <h3 className="font-serif italic font-light text-5xl md:text-7xl leading-[0.9]">
              {p5.title}
            </h3>
            <p className="mt-4 max-w-md text-graphite">{p5.description}</p>
            <Link
              href={`/work/${p5.slug}`}
              data-cursor="abrir"
              className="editorial-num inline-block mt-6 border-b border-ink pb-1"
            >
              Abrir projeto →
            </Link>
          </div>
        </motion.div>
      )}

      {/* restante — grid mais silenciosa */}
      {rest.length > 0 && (
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUp}
          className="grid md:grid-cols-3 gap-6 mt-8"
        >
          {rest.map((p, i) => (
            <div
              key={p.slug}
              onMouseEnter={() => setAccent(p.accentColor)}
              onMouseLeave={() => setAccent(null)}
            >
              <Num n={6 + i} />
              <Link href={`/work/${p.slug}`} data-cursor="ver" className="block group mt-2">
                <ProjectCover project={p} className="w-full aspect-[4/5] transition-transform duration-500 group-hover:scale-[1.02]" />
              </Link>
              <h3 className="font-serif italic text-xl mt-3">{p.title}</h3>
              <Meta p={p} />
            </div>
          ))}
        </motion.div>
      )}
    </section>
  );
}
