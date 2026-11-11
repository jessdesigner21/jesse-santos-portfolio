
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
        relative isolate
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

          {/* Linha inferior mais baixa */}

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
                border-b border-black
                pb-2
                transition-all duration-500
                hover:opacity-50
                hover:tracking-[0.2em]
              "
            >
              ↓ Explorar trabalhos
            </Link>

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
              className="
                font-serif italic
                text-[clamp(1.7rem,2.8vw,3.5rem)]
                leading-none
                tracking-[-0.04em]
              "
            >
              uma vida com textura.
            </motion.p>
          </div>
        </div>
      </div>

      {/* MOBILE */}

      <div
        className="
          relative flex
          min-h-[100svh]
          flex-col
          px-5 pb-10 pt-24
          md:hidden
        "
      >
        <div className="flex justify-between gap-4">
          <p className="editorial-num uppercase">
            Jesse Santos
          </p>

          <p className="editorial-num uppercase">
            Portfolio / 2026
          </p>
        </div>

        {/* Imagem mobile */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 25 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            relative mt-8
            w-full aspect-[4/5]
            overflow-hidden
          "
        >
          <motion.div
            className="absolute inset-0"
            style={
              reduceMotion
                ? undefined
                : { scale: imageScale }
            }
          >
            <Image
              src={COVER_IMAGE}
              alt="Capa do portfólio de Jesse Santos"
              fill
              priority
              unoptimized
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </motion.div>

        {/* Título mobile */}

        <motion.h1
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 25 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.9,
          }}
          className="
            mt-8
            font-grotesk
            text-[15vw]
            font-bold
            leading-[0.9]
            tracking-[-0.075em]
          "
        >
          Portfólio

          <span
            className="
              mt-3 block
              font-serif font-normal italic
              text-[1.15em]
            "
          >
            do Jess
          </span>
        </motion.h1>

        {/* Assinatura */}

        <motion.p
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 18 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.9,
          }}
          className="
            mt-6
            font-serif italic
            text-[clamp(1.8rem,8vw,3rem)]
            leading-tight
          "
        >
          uma vida com textura.
        </motion.p>

        {/* Navegação */}

        <div className="mt-auto pt-10">
          <div className="border-t border-black/25 pt-5">
            <Link
              href="#trabalho"
              className="
                editorial-num uppercase
                tracking-widest
                border-b border-black
                pb-2
              "
            >
              ↓ Explorar trabalhos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
