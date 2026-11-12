
"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

const COVER_IMAGE =
  "/Sem%20Ti%CC%81tulo-1Prancheta%201.jpg";

const creativeTools = [
  { short: "Ps", name: "Photoshop" },
  { short: "Ai", name: "Illustrator" },
  { short: "Ae", name: "After Effects" },
  { short: "✳", name: "IA & experimentação" },
];

// Assinatura visual da capa
const SIGNATURE_STYLE = {
  fontFamily: '"hey-eloise", cursive',
  fontStyle: "normal" as const,
  fontWeight: 400,
  color: "#A88735",
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  // Movimento suave durante a rolagem
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -35]
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.04]
  );

  const titleY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -65]
  );

  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.85],
    [1, 0.15]
  );

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="
        hero-grain relative isolate
        min-h-[100svh]
        overflow-hidden
        bg-[#FFF9C7]
        text-[#202020]
        border-b border-black/15
      "
    >
      {/* DESKTOP */}

      <div className="hidden md:block">

        {/* Imagem com movimento parallax */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={
            reduceMotion
              ? undefined
              : { y: imageY, scale: imageScale }
          }
        >
          <Image
            src={COVER_IMAGE}
            alt="Capa autoral de Jesse Santos"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        <div
          className="
            relative z-10
            flex min-h-[100svh]
            flex-col justify-between
            px-[5vw]
            pt-28
            pb-2
          "
        >
          {/* Identificação superior */}

          <div className="flex items-center justify-between">
            <p className="editorial-num uppercase tracking-widest">
              Jesse Santos — Graphic Designer
            </p>

            <p className="editorial-num uppercase tracking-widest">
              Portfolio / 2026
            </p>
          </div>

          {/* Título com animação */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 30 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="w-[43%]"
          >
            <motion.div
              style={
                reduceMotion
                  ? undefined
                  : {
                      y: titleY,
                      opacity: titleOpacity,
                    }
              }
            >
              <h1
                className="
                  font-grotesk
                  font-bold
                  text-[clamp(3.6rem,6.8vw,9rem)]
                  leading-[0.9]
                  tracking-[-0.075em]
                "
              >
                Portfólio

                <span
                  className="
                    mt-4 block
                    font-serif font-normal italic
                    text-[1.12em]
                    tracking-[-0.065em]
                  "
                >
                  do Jess
                </span>
              </h1>
            </motion.div>
          </motion.div>

          {/* Pequena assinatura técnica, preservando a capa autoral. */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 13 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.65 }}
            className="hero-toolkit"
            aria-label="Ferramentas que fazem parte do meu processo criativo"
          >
            <p className="editorial-num hero-toolkit-label">minha caixa de ferramentas <span aria-hidden="true">↗</span></p>
            <div className="hero-toolkit-list">
              {creativeTools.map((tool, index) => (
                <span key={tool.short} className="hero-toolkit-chip" style={{ animationDelay: `${index * 130}ms` }}>
                  <span className="hero-toolkit-symbol">{tool.short}</span>
                  <span>{tool.name}</span>
                </span>
              ))}
            </div>
          </motion.div>

          {/* Linha inferior */}

          <div
            className="
              flex items-end justify-between
              gap-8
              border-t border-black/25
              pt-5
            "
          >
            <Link
              href="#trabalho"
              data-cursor="ver"
              className="
                editorial-num uppercase
                tracking-widest
                marker-underline
                pb-2
                transition-all duration-500
                hover:opacity-50
                hover:tracking-[0.2em]
              "
            >
              ↓ Explorar trabalhos
            </Link>

            {/* ASSINATURA HEY ELOISE */}

            <motion.p
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 20 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.55,
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={SIGNATURE_STYLE}
              className="
                max-w-[58%]
                text-right
                text-[clamp(1.7rem,2.8vw,3.5rem)]
                leading-[1.05]
                tracking-normal
              "
            >
              uma vida com textura.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Capa mobile com a MESMA arte e a mesma paleta do desktop.
          A imagem 16:9 original ocupa uma área editorial vertical para
          o lettering ser legível, sem barras cinzas ou compressão. */}
      <div className="mobile-hero md:hidden">
        <div className="mobile-hero-content">
          <div className="mobile-hero-eyebrow editorial-num">
            <span>Jesse Santos — Graphic Designer</span>
            <span>Portfolio / 2026</span>
          </div>

          <h1 className="mobile-hero-title">
            Portfólio
            <span className="font-serif font-normal italic">do Jess</span>
          </h1>

          <div className="mobile-hero-art">
            <Image
              src={COVER_IMAGE}
              alt="Capa autoral do portfólio de Jesse Santos, com retrato e lettering amarelo"
              fill
              priority
              unoptimized
              sizes="100vw"
              className="object-cover object-center scale-[1.18]"
            />
          </div>

          <div className="mobile-hero-bottom">
            <Link href="#trabalho" className="mobile-hero-link marker-underline">
              ↓ Explorar trabalhos
            </Link>
            <p style={SIGNATURE_STYLE} className="mobile-hero-signature">
              uma vida com textura.
            </p>
          </div>
        </div>
        <div className="hero-toolkit-mobile" aria-label="Ferramentas que fazem parte do meu processo criativo">
          <span className="editorial-num hero-toolkit-mobile-label">crio com</span>
          <div className="hero-toolkit-mobile-scroll">
            {creativeTools.map((tool) => (
              <span key={tool.short} className="hero-toolkit-chip hero-toolkit-chip--mobile">
                <span className="hero-toolkit-symbol">{tool.short}</span>
                <span>{tool.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
