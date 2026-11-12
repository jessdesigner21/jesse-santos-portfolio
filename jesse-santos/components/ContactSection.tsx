"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CONTACT } from "@/data/contact";

const channels = [
  {
    title: "E-mail",
    detail: "Para projetos e boas ideias",
    href: CONTACT.email ? `mailto:${CONTACT.email}` : "",
    external: false,
  },
  {
    title: "LinkedIn",
    detail: "Minha trajetória profissional",
    href: CONTACT.linkedin,
    external: true,
  },
  {
    title: "Behance",
    detail: "Onde os projetos ganham páginas",
    href: CONTACT.behance,
    external: true,
  },
  {
    title: "Instagram pessoal",
    detail: "Um pouco de mim quando o trabalho descansa",
    href: CONTACT.instagram,
    external: true,
  },
];

export default function ContactSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="contato"
      aria-labelledby="contato-titulo"
      className="contact-atelier relative overflow-hidden px-5 py-16 text-[#F7F3E5] md:px-10 md:py-36"
    >
      <div
        className="pointer-events-none absolute -right-16 top-0 hidden select-none font-serif text-[21rem] italic leading-none text-[#FFE009]/[0.035] lg:block"
        aria-hidden="true"
      >
        oi.
      </div>

      <div className="relative mx-auto max-w-[1376px]">
        <p className="editorial-num mb-8 border-b border-[#F7F3E5]/25 pb-5 text-[#D8C77E] md:text-[#FFE009]">
          03 / Entre uma ideia e outra
        </p>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-20">
          <div>
            <motion.h2
              id="contato-titulo"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-[830px] font-grotesk text-[clamp(2.1rem,8.9vw,3.4rem)] font-bold leading-[1.06] tracking-[-0.065em] md:text-[clamp(3.4rem,6.4vw,6.7rem)] md:leading-[0.99]"
            >
              Toda ideia começa em algum lugar.
              <span className="mt-3 block font-serif font-normal italic leading-[1.08] tracking-[-0.055em] text-[#D8C77E] md:mt-4 md:text-[#FFE009]">
                Que seja numa conversa.
              </span>
            </motion.h2>

            <p className="mt-6 max-w-md font-serif text-base italic leading-[1.6] text-[#F7F3E5]/75 md:mt-9 md:text-xl">
              Trabalho bom tem troca, curiosidade e encontro. Se alguma coisa aqui conversou com você, me escreve.
            </p>

            <span
              className="mt-7 block w-fit -rotate-2 font-serif text-2xl italic text-[#D8C77E] md:mt-10 md:text-5xl md:text-[#FFE009]"
              aria-hidden="true"
            >
              a gente se fala
            </span>
          </div>

          <div className="self-center">
            <p className="editorial-num mb-3 text-[#F7F3E5]/60 md:mb-4">
              Escolha por onde a conversa começa
            </p>

            <div className="grid gap-0 sm:grid-cols-2 sm:gap-3">
              {channels.filter((channel) => channel.href).map((channel, index) => (
                <motion.a
                  key={channel.title}
                  href={channel.href}
                  target={channel.external ? "_blank" : undefined}
                  rel={channel.external ? "noopener noreferrer" : undefined}
                  data-cursor="abrir"
                  initial={reduceMotion ? false : { opacity: 0, y: 15 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                  className="contact-link group flex min-h-[82px] flex-col justify-between gap-3 py-3.5 sm:min-h-[165px] sm:p-5 md:min-h-[180px]"
                >
                  <div className="flex w-full items-center justify-between gap-2">
                    <span className="editorial-num text-[#D8C77E] md:text-[#FFE009]">
                      {String(index + 1).padStart(2, "0")} / 04
                    </span>
                    <span
                      aria-hidden="true"
                      className="contact-link-arrow font-serif text-lg italic md:text-2xl"
                    >
                      ↗
                    </span>
                  </div>
                  <div>
                    <span className="block font-serif text-[1.25rem] italic leading-none md:text-[1.75rem]">
                      {channel.title}
                    </span>
                    <span className="mt-1.5 block text-[0.68rem] leading-relaxed tracking-wide text-[#F7F3E5]/65 md:mt-2 md:text-[0.71rem]">
                      {channel.detail}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            {CONTACT.email && (
              <a
                href={`mailto:${CONTACT.email}`}
                className="mt-5 inline-block break-all border-b border-[#D8C77E]/70 pb-1 font-mono text-xs text-[#D8C77E] transition-colors hover:text-white md:text-base md:text-[#FFE009]"
              >
                {CONTACT.email}
              </a>
            )}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[#F7F3E5]/25 pt-5 md:mt-24 md:pt-6">
          <p className="editorial-num text-[#F7F3E5]/65">
            Design, histórias e encontros.
          </p>
          <p className="font-serif text-base italic text-[#D8C77E] md:text-lg md:text-[#FFE009]">
            uma vida com textura.
          </p>
        </div>
      </div>
    </section>
  );
}
