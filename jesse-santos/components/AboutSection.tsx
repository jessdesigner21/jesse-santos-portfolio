"use client";

import { motion } from "framer-motion";

/**
 * Perfil profissional — 100% sobre atuação criativa. Sem vida pessoal,
 * identidade ou biografia íntima. O campo de foto só aparece quando um
 * retrato real fornecido por Jesse for adicionado (ver comentário abaixo).
 */

// Quando Jesse fornecer um retrato profissional, adicione o arquivo em
// /public/profile/ e aponte o caminho aqui. Enquanto for null, nenhuma
// imagem falsa é exibida.
const PORTRAIT: string | null = null;

const skills = [
  "Design Gráfico",
  "Identidade Visual",
  "Direção Visual",
  "Social Media",
  "Fotografia",
  "Apresentações",
  "Vídeo & Motion",
  "Edição",
];

export default function AboutSection() {
  return (
    <section className="relative px-5 md:px-8 py-24 md:py-36 grid md:grid-cols-12 gap-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="md:col-span-7"
      >
        <p className="editorial-num mb-6">Perfil</p>
        <h2 className="font-serif italic font-light text-4xl md:text-6xl leading-[1.05] max-w-2xl">
          Jesse pensa em imagem antes de pensar em ferramenta — o design
          nasce do problema de comunicação, não do software.
        </h2>
        <p className="mt-8 max-w-xl text-graphite text-lg">
          Atua entre design gráfico, identidade visual, social media e
          direção visual, com fotografia, apresentações, vídeo e motion como
          extensão do mesmo processo. Cada projeto é tratado como um sistema
          de decisões — cor, tipografia, imagem e ritmo — não como uma peça
          isolada.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="md:col-span-4 md:col-start-9"
      >
        {PORTRAIT ? (
          <div className="w-full aspect-[4/5] relative overflow-hidden mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={PORTRAIT} alt="Jesse Santos" className="w-full h-full object-cover" />
          </div>
        ) : null}
        <p className="editorial-num text-graphite mb-3">Disciplinas</p>
        <ul className="flex flex-col gap-1">
          {skills.map((s) => (
            <li key={s} className="font-grotesk font-medium text-lg">
              {s}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
