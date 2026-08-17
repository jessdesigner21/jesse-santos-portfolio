"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { disciplines } from "@/data/projects";

const sizes = [
  "text-[13vw] md:text-[6.5vw]",
  "text-[9vw] md:text-[4vw]",
  "text-[15vw] md:text-[7.5vw]",
  "text-[8vw] md:text-[3.2vw]",
  "text-[11vw] md:text-[5vw]",
  "text-[9vw] md:text-[3.6vw]",
  "text-[10vw] md:text-[4.4vw]",
  "text-[8vw] md:text-[3vw]",
  "text-[12vw] md:text-[5.6vw]",
];

const shift = [0, 6, -4, 10, -8, 3, -6, 8, -3];

export default function DisciplinesSection() {
  return (
    <section className="relative px-5 md:px-8 py-24 md:py-40 bg-ink text-off-white overflow-hidden">
      <p className="editorial-num text-off-white/50 mb-10">Disciplinas</p>
      <div className="flex flex-col">
        {disciplines.map((d, i) => (
          <motion.div
            key={d}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ x: 16, color: "var(--project-accent)" }}
            style={{ marginLeft: `${shift[i % shift.length]}%` }}
            className={`font-grotesk font-bold uppercase leading-[0.95] tracking-tight cursor-default ${sizes[i % sizes.length]}`}
          >
            {d}
          </motion.div>
        ))}
      </div>
      <p className="mt-16 max-w-lg text-off-white/60 font-serif italic text-lg">
        Amplitude sem dispersão: cada disciplina alimenta a seguinte dentro de
        um mesmo projeto.
      </p>
      <Link
        href="/work"
        data-cursor="ver"
        className="editorial-num inline-block mt-8 border-b border-off-white/40 pb-1 hover:border-off-white"
      >
        Ver por disciplina →
      </Link>
    </section>
  );
}
