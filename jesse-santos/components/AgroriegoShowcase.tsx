"use client";

import { useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

/**
 * Primeiro recorte do Arquivo Vivo.
 * Mostra somente as cinco páginas de autoria de Jesse.
 * Novos trabalhos (pendones, vídeos, peças avulsas) poderão ser
 * adicionados ao Arquivo Vivo como novos recortes independentes.
 */
const slides = [
  {
    src: "/projects/agroriego/agro-01.jpg",
    alt: "Capa Agroriego Tattersall: rastreabilidade e sustentabilidade hídrica",
    label: "Abertura",
  },
  {
    src: "/projects/agroriego/agro-02.jpg",
    alt: "Quem somos: números, atuação e pilares da Agroriego",
    label: "Quem somos",
  },
  {
    src: "/projects/agroriego/agro-03.jpg",
    alt: "Áreas de negócio e serviços",
    label: "Áreas de negócio",
  },
  {
    src: "/projects/agroriego/agro-04.jpg",
    alt: "Projeto chave na mão: engenharia, instalação e operações",
    label: "Projeto integral",
  },
  {
    src: "/projects/agroriego/agro-05.jpg",
    alt: "Produtos e soluções da Agroriego",
    label: "Produtos",
  },
] as const;

const handwritten = {
  fontFamily: '"hey-eloise", cursive',
  fontWeight: 400,
};

function Arrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="21"
      height="21"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={direction === "left" ? "rotate-180" : ""}
    >
      <path d="M4 12h16M13 5l7 7-7 7" />
    </svg>
  );
}

export default function AgroriegoShowcase() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);

  const next = () => setActive((current) => (current + 1) % slides.length);
  const previous = () =>
    setActive((current) => (current - 1 + slides.length) % slides.length);

  return (
    <section
      aria-labelledby="agroriego-recorte"
      className="relative mt-14 bg-[#F7F4EB] text-[#24221F] md:mt-20"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-end justify-between gap-6 border-t border-black/15 pt-6"
        >
          <div>
            <h2
              id="agroriego-recorte"
              className="archive-heading"
            >
              Agroriego Tattersall
            </h2>
            <p className="mt-3 max-w-xl font-grotesk text-sm leading-relaxed text-[#6B635A] md:text-base">
              Design de apresentação institucional. Um recorte com as cinco
              primeiras lâminas que desenvolvi.
            </p>
          </div>

          <span
            style={handwritten}
            className="text-2xl text-[#A88735] md:text-4xl md:-rotate-3"
          >
            pensado slide a slide.
          </span>
        </motion.div>

        {/* Mantemos o mockup original e a tipografia enorme ao fundo. */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-9 py-10 md:mt-12 md:py-16"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 select-none text-center font-grotesk font-bold text-[clamp(3.4rem,12vw,11rem)] leading-none tracking-[-0.08em] text-[#D9D0BC]"
          >
            AGRORIEGO
          </span>

          <div className="relative z-10 mx-auto max-w-5xl">
            <motion.div
              whileHover={reduceMotion ? undefined : { rotate: 0, y: -5 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative rotate-[-1.3deg] rounded-lg border-[7px] border-[#2B302A] bg-[#2B302A] shadow-[18px_25px_42px_rgba(43,44,32,0.18)] md:border-[13px]"
            >
              <div
                className="relative aspect-video overflow-hidden bg-[#EEE8DC]"
                aria-label="Visualização de cinco lâminas do projeto Agroriego"
              >
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={active}
                    className="absolute inset-0"
                    initial={
                      reduceMotion
                        ? { opacity: 1 }
                        : { opacity: 0, x: 18 }
                    }
                    animate={{ opacity: 1, x: 0 }}
                    exit={
                      reduceMotion
                        ? { opacity: 1 }
                        : { opacity: 0, x: -18 }
                    }
                    transition={{
                      duration: reduceMotion ? 0 : 0.34,
                      ease: "easeInOut",
                    }}
                  >
                    <Image
                      src={slides[active].src}
                      alt={slides[active].alt}
                      fill
                      priority={active === 0}
                      sizes="(max-width: 768px) 100vw, 950px"
                      className="object-contain"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              <span
                aria-hidden="true"
                className="absolute -bottom-3 left-1/2 h-[3px] w-12 -translate-x-1/2 rounded-full bg-white/25"
              />
            </motion.div>

            {/* Navegação fica fora da arte para não cobrir textos. */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-5 md:mt-10">
              <div className="flex items-center gap-4">
                <span aria-live="polite" className="editorial-num tabular-nums text-[#756D62]">
                  {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                </span>
                <span className="hidden h-px w-10 bg-[#BEB5A4] sm:block" aria-hidden="true" />
                <span className="font-serif italic text-base text-[#756D62] md:text-lg">
                  {slides[active].label}
                </span>
              </div>

              <div className="flex items-center gap-3" aria-label="Controles das lâminas">
                <button
                  type="button"
                  onClick={previous}
                  aria-label="Lâmina anterior"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#A88735] bg-transparent text-[#A88735] transition-colors duration-300 hover:bg-[#E8DDC3] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A88735] md:h-14 md:w-14"
                >
                  <Arrow direction="left" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Próxima lâmina"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#A88735] bg-[#A88735] text-white transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A88735] md:h-14 md:w-14"
                >
                  <Arrow direction="right" />
                </button>
              </div>
            </div>

            <p className="editorial-num mt-5 text-right uppercase text-[#786F60]">
              Agroriego Tattersall / Recorte autoral
            </p>
          </div>
        </motion.div>

        {/* Próximos recortes do Arquivo Vivo entram abaixo deste módulo.
            Não há uma galeria duplicada com as quatro páginas restantes. */}
      </div>
    </section>
  );
}
