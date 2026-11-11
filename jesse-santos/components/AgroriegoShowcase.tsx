"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const slides = Array.from({ length: 5 }, (_, i) => ({
  src: `/projects/agroriego/agro-${String(i + 1).padStart(2, "0")}.jpg`,
  alt: [
    "Agroriego Tattersall — abertura institucional e agricultura",
    "Quem somos — atuação e pilares da Agroriego",
    "Áreas de negócio — estrutura e serviços",
    "Projeto llave en mano — implementação e operações",
    "Nossos produtos — sistemas e soluções de irrigação",
  ][i],
}));

const handwritten = {
  fontFamily: '"hey-eloise", cursive',
  fontWeight: 400,
};

export default function AgroriegoShowcase() {
  const reduceMotion = useReducedMotion();
  const entry = (index = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 34 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.14 },
          transition: {
            duration: 0.85,
            delay: (index % 2) * 0.1,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
          },
        };

  return (
    <section aria-label="Recorte autoral da apresentação Agroriego" className="mt-16 md:mt-24 bg-[#F7F4EB] text-[#24221F]">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <motion.div {...entry()} className="flex flex-wrap items-end justify-between gap-5 border-t border-black/15 pt-6">
          <p className="editorial-num uppercase tracking-widest text-black/55">
            01 / 05 — Recorte autoral
          </p>
          <span style={handwritten} className="text-2xl md:text-4xl text-[#A88735] -rotate-3">
            pensado slide a slide.
          </span>
        </motion.div>

        {/* Mockup editorial da apresentação: não altera a arte original. */}
        <motion.div {...entry()} className="relative mt-12 md:mt-20 py-8 md:py-14">
          <p
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 text-center font-grotesk font-bold tracking-[-0.08em] leading-none text-[#D9D0BC] text-[clamp(3.4rem,12vw,11rem)]"
          >
            AGRORIEGO
          </p>
          <div className="relative z-10 mx-auto max-w-5xl">
            <motion.div
              whileHover={reduceMotion ? undefined : { rotate: 0, y: -7 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative rotate-[-1.3deg] rounded-lg border-[7px] md:border-[13px] border-[#2B302A] bg-[#2B302A] shadow-[18px_25px_42px_rgba(43,44,32,0.18)]"
            >
              <div className="relative aspect-video overflow-hidden bg-[#EEE8DC]">
                <Image
                  src={slides[0].src}
                  alt={slides[0].alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 950px"
                  className="object-contain"
                />
              </div>
              <div className="absolute left-1/2 -bottom-3 h-[3px] w-12 -translate-x-1/2 rounded-full bg-white/25" aria-hidden="true" />
            </motion.div>
            <p className="mt-7 text-right editorial-num uppercase text-[#786F60]">
              Apresentação institucional · design de slides
            </p>
          </div>
        </motion.div>

        <div className="mt-16 md:mt-24 flex flex-wrap items-end justify-between gap-6 border-t border-black/15 pt-6">
          <p className="editorial-num uppercase text-black/55">Outras páginas do mesmo projeto</p>
          <p className="font-serif italic text-lg md:text-2xl max-w-sm">
            Informação, fotografia e ritmo visual.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-y-14 md:gap-x-8 md:gap-y-20">
          {slides.slice(1).map((slide, index) => {
            const placement = [
              "md:col-span-7",
              "md:col-span-5 md:mt-24",
              "md:col-span-5 md:mt-16",
              "md:col-span-7",
            ][index];

            return (
              <motion.figure key={slide.src} {...entry(index)} className={placement}>
                <div className="relative bg-[#E9E5DC] p-2 md:p-3 border border-black/10 shadow-[0_12px_30px_rgba(34,34,34,0.06)]">
                  <div className="relative aspect-video">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 70vw"
                      className="object-contain"
                    />
                  </div>
                </div>
                <figcaption className="mt-4 flex justify-between gap-4 editorial-num uppercase text-[#756D62]">
                  <span>{String(index + 2).padStart(2, "0")} / 05</span>
                  <span>Design de apresentação</span>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>

        <motion.div {...entry()} className="mt-20 md:mt-32 border-t border-black/15 py-8 flex flex-wrap items-center justify-between gap-5">
          <p className="font-serif italic text-xl md:text-3xl">
            Cinco páginas. Um recorte do processo.
          </p>
          <p style={handwritten} className="text-[#A88735] text-2xl md:text-4xl">
            só o que criei.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
