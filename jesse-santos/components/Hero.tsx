
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
  { short: "Ps", name: "Photoshop", familiarity: 96 },
  { short: "Ai", name: "Illustrator", familiarity: 92 },
  { short: "Ae", name: "After Effects", familiarity: 74 },
  { short: "Pr", name: "Premiere", familiarity: 57 },
  { short: "Id", name: "InDesign", familiarity: 43 },
];

/** Logotipos vetoriais fiéis às marcas, sem carregamento de bibliotecas ou imagens externas. */
function AiLogo({ name }: { name: "chatgpt" | "gemini" }) {
  return name === "chatgpt" ? (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="hero-toolkit-ai-logo">
      <path d="M9.205 8.658v-2.26c0-.19.072-.333.238-.428l4.543-2.616c.619-.357 1.356-.523 2.117-.523 2.854 0 4.662 2.212 4.662 4.566 0 .167 0 .357-.024.547l-4.71-2.759a.797.797 0 00-.856 0l-5.97 3.473zm10.609 8.8V12.06c0-.333-.143-.57-.429-.737l-5.97-3.473 1.95-1.118a.433.433 0 01.476 0l4.543 2.617c1.309.76 2.189 2.378 2.189 3.948 0 1.808-1.07 3.473-2.76 4.163zM7.802 12.703l-1.95-1.142c-.167-.095-.239-.238-.239-.428V5.899c0-2.545 1.95-4.472 4.591-4.472 1 0 1.927.333 2.712.928L8.23 5.067c-.285.166-.428.404-.428.737v6.898zM12 15.128l-2.795-1.57v-3.33L12 8.658l2.795 1.57v3.33L12 15.128zm1.796 7.23c-1 0-1.927-.332-2.712-.927l4.686-2.712c.285-.166.428-.404.428-.737v-6.898l1.974 1.142c.167.095.238.238.238.428v5.233c0 2.545-1.974 4.472-4.614 4.472zm-5.637-5.303l-4.544-2.617c-1.308-.761-2.188-2.378-2.188-3.948A4.482 4.482 0 014.21 6.327v5.423c0 .333.143.571.428.738l5.947 3.449-1.95 1.118a.432.432 0 01-.476 0zm-.262 3.9c-2.688 0-4.662-2.021-4.662-4.519 0-.19.024-.38.047-.57l4.686 2.71c.286.167.571.167.856 0l5.97-3.448v2.26c0 .19-.07.333-.237.428l-4.543 2.616c-.619.357-1.356.523-2.117.523zm5.899 2.83a5.947 5.947 0 005.827-4.756C22.287 18.339 24 15.84 24 13.296c0-1.665-.713-3.282-1.998-4.448.119-.5.19-.999.19-1.498 0-3.401-2.759-5.947-5.946-5.947-.642 0-1.26.095-1.88.31A5.962 5.962 0 0010.205 0a5.947 5.947 0 00-5.827 4.757C1.713 5.447 0 7.945 0 10.49c0 1.666.713 3.283 1.998 4.448-.119.5-.19 1-.19 1.499 0 3.401 2.759 5.946 5.946 5.946.642 0 1.26-.095 1.88-.309a5.96 5.96 0 004.162 1.713z" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="hero-toolkit-ai-logo">
      <path d="M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z" />
    </svg>
  );
}

/** Assinatura de processo: uma micro-prancha, não um card de interface. */
function ToolSignature({ mobile = false }: { mobile?: boolean }) {
  return (
    <div className={mobile ? "hero-toolkit-mobile" : "hero-toolkit"} aria-label="Ferramentas do processo criativo">
      <div className="hero-toolkit-header">
        <span className="hero-toolkit-heading">ferramentas de criação</span>
        <span className="hero-toolkit-squiggle" aria-hidden="true">〰</span>
      </div>
      <div className="hero-toolkit-list">
        {creativeTools.map((tool) => (
          <div className="hero-toolkit-tool" key={tool.short} title={tool.name}>
            <span className="hero-toolkit-symbol" aria-hidden="true">{tool.short}</span>
            <span className="hero-toolkit-track" aria-label={`${tool.name}: indicador ilustrativo de familiaridade`}>
              <span className="hero-toolkit-fill" style={{ width: `${tool.familiarity}%` }} />
            </span>
            <span className="hero-toolkit-name">{tool.name}</span>
          </div>
        ))}
      </div>
      <div className="hero-toolkit-ai">
        <span className="hero-toolkit-ai-note">IA no processo</span>
        <span className="hero-toolkit-ai-brand" title="ChatGPT"><AiLogo name="chatgpt" /> ChatGPT</span>
        <span className="hero-toolkit-ai-brand" title="Google Gemini"><AiLogo name="gemini" /> Gemini</span>
      </div>
    </div>
  );
}

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

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.65 }}
            className="hero-toolkit-position"
          >
            <ToolSignature />
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
        <ToolSignature mobile />
      </div>
    </section>
  );
}
