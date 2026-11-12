"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CONTACT } from "@/data/contact";

type ContactKind = "email" | "linkedin" | "behance" | "instagram";

/* Desenhos vetoriais autorais, com linhas irregulares em vez de ícones prontos. */
function DoodleIcon({ kind }: { kind: ContactKind }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 76 76" className="contact-doodle h-[64px] w-[64px]" fill="none">
      <path d="M38 6 C57 3 71 18 70 38 C72 58 58 72 38 70 C18 73 5 57 6 37 C3 18 17 5 38 6 Z" stroke="currentColor" strokeWidth="1.4" opacity=".65" />
      <path d="M10 25 C3 39 11 58 23 65" stroke="currentColor" strokeWidth="1.2" opacity=".42" strokeLinecap="round" />
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {kind === "email" && (
          <>
            <path d="M19 28 Q19 24 24 24 L53 23 Q58 23 57 29 L56 49 Q56 53 51 53 L25 54 Q20 54 20 49 Z" />
            <path d="M21 28 Q37 41 56 27" />
            <path d="M23 50 L33 40 M54 49 L44 40" />
            <path d="M58 16 L60 11 M64 19 L69 17" strokeWidth="1.4" />
          </>
        )}
        {kind === "linkedin" && (
          <>
            <path d="M25 35 L25 53 M24.8 25.2 a2.7 2.7 0 1 0 .1 0" />
            <path d="M35 53 L35 35 M35 42 C37 31 50 30 51 42 L51 53" />
            <path d="M17 59 Q36 65 56 59" strokeWidth="1.3" />
          </>
        )}
        {kind === "behance" && (
          <>
            <path d="M27 19 L47 27 L37 54 L29 60 L25 49 Z" />
            <path d="M27 19 L18 27 L25 49 M29 60 L37 54 M30 26 L42 31" />
            <path d="M47 17 L53 14 M52 23 L59 22 M20 52 L15 57" strokeWidth="1.5" />
          </>
        )}
        {kind === "instagram" && (
          <>
            <path d="M26 21 Q19 22 20 30 L20 49 Q20 56 28 56 L48 56 Q56 56 56 48 L56 29 Q55 21 48 21 Z" />
            <path d="M38 30 C48 29 49 44 40 46 C31 48 27 38 33 33 C35 31 36 30 38 30 Z" />
            <path d="M49 27 L49.5 27.5" strokeWidth="3.5" />
            <path d="M17 17 Q13 11 9 17 M58 60 Q65 58 67 63" strokeWidth="1.4" />
          </>
        )}
      </g>
    </svg>
  );
}

const channels: Array<{
  kind: ContactKind;
  title: string;
  detail: string;
  href: string;
  external: boolean;
}> = [
  { kind: "email", title: "E-mail", detail: "Para projetos e boas ideias", href: CONTACT.email ? `mailto:${CONTACT.email}` : "", external: false },
  { kind: "linkedin", title: "LinkedIn", detail: "Minha trajetória profissional", href: CONTACT.linkedin, external: true },
  { kind: "behance", title: "Behance", detail: "Onde os projetos ganham páginas", href: CONTACT.behance, external: true },
  { kind: "instagram", title: "Instagram pessoal", detail: "Um pouco de mim quando o trabalho descansa", href: CONTACT.instagram, external: true },
];

export default function ContactSection() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="contato" aria-labelledby="contato-titulo" className="contact-atelier relative overflow-hidden px-5 py-24 text-[#F7F3E5] md:px-10 md:py-36">
      <div className="pointer-events-none absolute -right-16 top-0 hidden select-none font-serif text-[21rem] italic leading-none text-[#FFE009]/[0.035] lg:block" aria-hidden="true">oi.</div>
      <div className="relative mx-auto max-w-[1376px]">
        <p className="editorial-num mb-8 border-b border-[#F7F3E5]/25 pb-5 text-[#FFE009]">03 / Entre uma ideia e outra</p>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-20">
          <div>
            <motion.h2
              id="contato-titulo"
              initial={reduceMotion ? false : { opacity: 0, y: 25 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-[830px] font-grotesk text-[clamp(2.8rem,6.4vw,6.7rem)] font-bold leading-[0.99] tracking-[-0.07em]"
            >
              Toda ideia começa em algum lugar.
              <span className="mt-4 block font-serif font-normal italic leading-[1.04] tracking-[-0.055em] text-[#FFE009]">
                Que seja numa conversa.
              </span>
            </motion.h2>
            <p className="mt-9 max-w-md font-serif text-lg italic leading-[1.65] text-[#F7F3E5]/75 md:text-xl">
              Trabalho bom tem troca, curiosidade e encontro. Se alguma coisa aqui conversou com você, me escreve.
            </p>
            <span className="mt-10 block w-fit -rotate-3 font-serif text-4xl italic text-[#FFE009] md:text-5xl" aria-hidden="true">a gente se fala ↗</span>
          </div>
          <div className="self-center">
            <p className="editorial-num mb-4 text-[#F7F3E5]/60">Escolha por onde a conversa começa</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {channels.filter((c) => c.href).map((channel, index) => (
                <motion.a
                  key={channel.kind}
                  href={channel.href}
                  target={channel.external ? "_blank" : undefined}
                  rel={channel.external ? "noopener noreferrer" : undefined}
                  data-cursor="abrir"
                  initial={reduceMotion ? false : { opacity: 0, y: 15 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.55, delay: index * 0.07 }}
                  className="contact-link group flex min-h-[172px] flex-col items-start justify-between gap-4 p-5 md:min-h-[205px]"
                >
                  <div className="flex w-full items-start justify-between">
                    <DoodleIcon kind={channel.kind} />
                    <span aria-hidden="true" className="contact-link-arrow font-serif text-2xl italic">↗</span>
                  </div>
                  <div>
                    <span className="block font-serif text-2xl italic leading-none md:text-[1.75rem]">{channel.title}</span>
                    <span className="mt-2 block text-[0.71rem] leading-relaxed tracking-wide text-[#F7F3E5]/70">{channel.detail}</span>
                  </div>
                </motion.a>
              ))}
            </div>
            <a href={`mailto:${CONTACT.email}`} className="mt-5 inline-block break-all border-b border-[#FFE009]/70 pb-1 font-mono text-sm text-[#FFE009] transition-colors hover:text-white md:text-base">
              {CONTACT.email}
            </a>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-[#F7F3E5]/25 pt-6 md:mt-24">
          <p className="editorial-num text-[#F7F3E5]/65">Design, histórias e encontros.</p>
          <p className="font-serif text-lg italic text-[#FFE009]">uma vida com textura.</p>
        </div>
      </div>
    </section>
  );
}
