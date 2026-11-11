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
}: {
  images: MediaItem[];
  presentation?: boolean;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Imagens do projeto"
      className="mt-20 px-5 md:px-8 md:mt-28"
    >
      <div
        className={
          presentation
            ? "mx-auto max-w-[1440px] flex flex-col gap-0"
            : "mx-auto max-w-[1440px] grid grid-cols-1 gap-y-12 md:grid-cols-12 md:gap-x-8 md:gap-y-20"
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
