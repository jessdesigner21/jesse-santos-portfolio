"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { MediaItem } from "@/data/projects";

/**
 * Galeria editorial que respeita o formato REAL de cada imagem.
 * As composições são assimétricas, mas nunca recortam uma arte.
 * Projetos em formato de apresentação mantêm a sequência contínua,
 * de cima para baixo, sem espaços entre as pranchas.
 */
const layout = [
  "md:col-span-5",
  "md:col-span-6 md:col-start-7",
  "md:col-span-8 md:col-start-3",
  "md:col-span-12",
  "md:col-span-7",
  "md:col-span-5 md:col-start-8",
  "md:col-span-12",
];

export default function ProjectGallery({
  images,
  presentation = false,
  compactPresentation = false,
  mosaic = false,
}: {
  images: MediaItem[];
  presentation?: boolean;
  compactPresentation?: boolean;
  mosaic?: boolean;
}) {
  const reduceMotion = useReducedMotion();

  // As pranchas exportadas do Behance são partes de uma única narrativa.
  // Sem cards, legendas, transições ou qualquer espaço entre as peças.
  if (presentation) {
    return (
      <section aria-label="Pranchas completas do projeto" className="mt-10 md:mt-16">
        <div className={`mx-auto w-full ${compactPresentation ? "max-w-[820px]" : "max-w-[1000px]"}`}>
          {images.map((item, index) => (
            <a
              key={item.src + index}
              href={item.src}
              target="_blank"
              rel="noreferrer"
              aria-label={`Ampliar prancha ${index + 1} de ${images.length}: ${item.alt}`}
              title="Abrir imagem em tamanho original"
              className="block w-full"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.alt}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                className="block w-full h-auto m-0 p-0"
              />
            </a>
          ))}
        </div>
      </section>
    );
  }

  if (mosaic) {
    return (
      <section aria-label="Coleção de artes do projeto" className="mt-12 px-5 md:mt-20 md:px-8">
        <div className="mx-auto max-w-[980px]">
          <div className="mb-7 flex items-end justify-between gap-4 border-b border-black/20 pb-4">
            <p className="editorial-num text-[#756D62]">Identidade em aplicações / peças originais</p>
            <span className="editorial-num text-[#756D62]">{String(images.length).padStart(2, "0")} artes</span>
          </div>
          <div className="grid grid-cols-1 items-start gap-x-5 gap-y-10 sm:grid-cols-2 md:gap-y-12">
            {images.map((item, index) => (
              <motion.figure
                key={item.src + index}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.6,
                  delay: (index % 2) * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="min-w-0"
              >
                <a
                  href={item.src}
                  target="_blank"
                  rel="noreferrer"
                  className="group block overflow-hidden bg-[#F3EEE3] p-2 md:p-3 mosaic-art-link"
                  aria-label={`Abrir arte ${index + 1} em resolução original: ${item.alt}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="block h-auto w-full mosaic-art-image"
                  />
                </a>
                <figcaption className="mt-2 flex justify-between gap-3 editorial-num text-[#756D62]">
                  <span>{item.alt}</span>
                  <span className="shrink-0">{String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      aria-label="Imagens do projeto"
      className="mt-10 px-5 md:px-8 md:mt-28"
    >
      <div
        className={
          presentation
            ? "mx-auto max-w-[1440px] flex flex-col gap-0"
            : "mx-auto max-w-[1440px] grid grid-cols-1 gap-y-6 md:grid-cols-12 md:gap-x-8 md:gap-y-20"
        }
      >
        {images.map((item, index) => (
          <motion.figure
            key={item.src + index}
            initial={
              presentation || reduceMotion
                ? false
                : { opacity: 0, y: 34 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{
              duration: 0.85,
              delay: presentation ? 0 : Math.min(index % 2, 1) * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={
              presentation
                ? "w-full min-w-0"
                : `min-w-0 ${layout[index % layout.length]}`
            }
          >
            {/*
              img com largura 100% e altura automática preserva
              as proporções de cada arquivo, independentemente
              de o projeto ter fotos verticais ou horizontais.
            */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              decoding="async"
              className="block w-full h-auto"
            />
            {!presentation && (
              <figcaption className="editorial-num mt-3 text-[#756D62]">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(images.length).padStart(2, "0")}
              </figcaption>
            )}
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
