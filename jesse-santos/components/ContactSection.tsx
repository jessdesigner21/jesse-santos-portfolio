"use client";

import { motion } from "framer-motion";
import { CONTACT } from "@/data/contact";

export default function ContactSection() {
  return (
    <section
      id="contato"
      className="relative px-5 md:px-8 py-28 md:py-48 bg-ink text-off-white"
    >
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="editorial-num text-off-white/50 mb-6"
      >
        Contato
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="font-grotesk font-bold uppercase leading-[0.9] text-[13vw] md:text-[7vw]"
      >
        Tem uma ideia?
        <br />
        <span className="font-serif italic font-light normal-case">Me conta.</span>
      </motion.h2>

      {CONTACT.email ? (
        <motion.a
          href={`mailto:${CONTACT.email}`}
          data-cursor="abrir"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="block mt-10 md:mt-16 font-serif italic break-words text-[8vw] md:text-[4vw] hover:text-accent transition-colors"
        >
          {CONTACT.email}
        </motion.a>
      ) : (
        <p className="mt-10 md:mt-16 font-serif italic text-2xl text-off-white/60 max-w-md">
          Se chegou até aqui, talvez a gente devesse criar alguma coisa
          juntos — os contatos abaixo estão sempre abertos.
        </p>
      )}

      <div className="mt-16 flex gap-8 editorial-num">
        {CONTACT.behance && (
          <a href={CONTACT.behance} target="_blank" rel="noreferrer" className="border-b border-off-white/40 hover:border-off-white pb-1">
            Behance
          </a>
        )}
        {CONTACT.linkedin && (
          <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="border-b border-off-white/40 hover:border-off-white pb-1">
            LinkedIn
          </a>
        )}
        {CONTACT.instagram && (
          <a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="border-b border-off-white/40 hover:border-off-white pb-1">
            Instagram
          </a>
        )}
      </div>
    </section>
  );
}
