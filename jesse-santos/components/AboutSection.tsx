
"use client";

import { motion, useReducedMotion } from "framer-motion";

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

const handwritten = {
  fontFamily: '"hey-eloise", cursive',
  fontWeight: 400,
  fontStyle: "normal" as const,
};

export default function AboutSection() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: 0.85,
      delay,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  });

  return (
    <section
      id="sobre"
      aria-labelledby="sobre-titulo"
      className="
        relative isolate overflow-hidden
        bg-[#F7F4EB] text-[#24221F]
        px-5 py-24
        md:px-10 md:py-36
      "
    >
      {/* Textura de papel muito sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(92,78,59,0.045) 4px)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px]">

        {/* Identificação da seção */}

        <div
          className="
            flex flex-wrap items-center justify-between
            gap-4 border-b border-black/20 pb-5
          "
        >
          <p className="editorial-num uppercase tracking-widest">
            02 / Sobre mim
          </p>

          <p className="editorial-num uppercase text-black/45">
            Uma vida com textura
          </p>
        </div>

        {/* Manifesto tipográfico */}

        <div className="relative pt-16 md:pt-24">

          {/* Asterisco desenhado à mão */}
          <motion.svg
            aria-hidden="true"
            viewBox="0 0 120 120"
            fill="none"
            className="
              pointer-events-none absolute
              right-0 top-6
              w-16 md:right-[5%] md:top-10 md:w-28
            "
            initial={
              reduceMotion
                ? false
                : { opacity: 0, rotate: -25, scale: 0.7 }
            }
            whileInView={{
              opacity: 1,
              rotate: 10,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
          >
            <path
              d="M60 8 L61 111 M10 59 L111 62 M25 24 L97 99 M98 20 L22 99"
              stroke="#B795C5"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </motion.svg>

          <motion.div {...reveal(0)}>
            <h2
              id="sobre-titulo"
              className="
                relative max-w-[1150px]
                font-grotesk font-bold
                text-[clamp(3rem,6.5vw,7.6rem)]
                leading-[0.98]
                tracking-[-0.065em]
              "
            >
              <span className="block">
                Nem tudo precisa
              </span>

              <span className="block mt-3 md:mt-5">
                ser{" "}
                <span
                  className="
                    relative inline-block
                    text-[#A88735]
                    tracking-normal
                  "
                  style={handwritten}
                >
                  liso

                  {/* Rabisco lilás */}
                  <motion.svg
                    aria-hidden="true"
                    viewBox="0 0 270 35"
                    preserveAspectRatio="none"
                    className="
                      pointer-events-none
                      absolute -bottom-3 left-0
                      h-6 w-full
                    "
                  >
                    <motion.path
                      d="M5 24 C60 7 127 34 265 12"
                      fill="none"
                      stroke="#B795C5"
                      strokeWidth="5"
                      strokeLinecap="round"
                      initial={
                        reduceMotion
                          ? false
                          : { pathLength: 0 }
                      }
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.5,
                        duration: 1.1,
                      }}
                    />
                  </motion.svg>
                </span>
              </span>

              <span className="block mt-5 md:mt-7">
                para fazer
              </span>

              <span className="block mt-3 md:mt-5">
                sentido
                <span className="text-[#B795C5]">.</span>
              </span>
            </h2>
          </motion.div>

          {/* Pequeno detalhe de direção de arte */}

          <motion.p
            {...reveal(0.25)}
            className="
              mt-10 max-w-xs
              font-serif italic
              text-lg md:ml-auto md:mr-[9%]
              md:text-2xl
              text-[#74665B]
            "
          >
            O processo também deixa marcas.
          </motion.p>
        </div>

        {/* Texto de apresentação */}

        <div
          className="
            mt-24 grid gap-10
            border-t border-black/20 pt-12
            md:mt-36 md:grid-cols-12
            md:gap-8 md:pt-16
          "
        >
          <motion.div
            {...reveal(0)}
            className="md:col-span-4"
          >
            <p className="editorial-num mb-5 uppercase text-black/50">
              Um pouco sobre meu olhar
            </p>

            <h3
              className="
                max-w-sm font-serif italic
                text-3xl leading-[1.12]
                tracking-[-0.04em]
                md:text-5xl
              "
            >
              Entre o que vivo e o que crio.
            </h3>
          </motion.div>

          <motion.div
            {...reveal(0.15)}
            className="
              max-w-2xl md:col-span-7
              md:col-start-6
            "
          >
            <p
              className="
                font-grotesk
                text-xl leading-[1.6]
                md:text-[1.65rem]
                md:leading-[1.5]
              "
            >
              Entre experiências, referências, erros e
              descobertas, fui construindo meu jeito de
              enxergar e criar.
            </p>

            <p
              className="
                mt-7 max-w-xl font-grotesk
                text-base leading-[1.8]
                text-[#645F58]
                md:text-lg
              "
            >
              Meu design carrega um pouco de tudo que vivi.
              Porque, para mim, criar também é deixar marcas.
            </p>

            <p
              className="
                mt-7 max-w-xl font-grotesk
                text-base leading-[1.8]
                text-[#645F58]
                md:text-lg
              "
            >
              Trabalho com design gráfico, identidade visual,
              direção visual e conteúdo digital. Gosto de
              explorar como cor, tipografia, imagem e movimento
              podem construir narrativas com personalidade.
            </p>
          </motion.div>
        </div>

        {/* Palavra gráfica de destaque */}

        <motion.div
          {...reveal(0)}
          aria-hidden="true"
          className="
            relative mt-20 overflow-hidden
            border-b border-black/20
            pb-6 md:mt-28 md:pb-10
          "
        >
          <p
            style={handwritten}
            className="
              select-none whitespace-nowrap
              text-center
              text-[clamp(3.5rem,13vw,13rem)]
              leading-[1.1]
              tracking-[-0.04em]
              text-[#C9A84A]
            "
          >
            TEXTURA
          </p>

          <p
            className="
              relative -mt-2 text-right
              editorial-num uppercase
              tracking-widest
              text-black/50
              md:-mt-5
            "
          >
            Não é só estética.
          </p>
        </motion.div>

        {/* Competências profissionais */}

        <div
          className="
            grid gap-8 pt-12
            md:grid-cols-12 md:pt-16
          "
        >
          <motion.div
            {...reveal(0)}
            className="md:col-span-4"
          >
            <p className="editorial-num uppercase text-black/50">
              O que faço
            </p>

            <h3
              className="
                mt-4 font-serif italic
                text-3xl md:text-4xl
                tracking-[-0.04em]
              "
            >
              Ferramentas de expressão.
            </h3>
          </motion.div>

          <motion.div
            {...reveal(0.15)}
            className="
              flex flex-wrap content-start
              gap-2 md:col-span-7
              md:col-start-6
            "
          >
            {skills.map((skill, index) => (
              <span
                key={skill}
                className={`
                  inline-flex items-center
                  border border-black/25
                  px-4 py-3
                  font-grotesk text-sm
                  transition-colors duration-300
                  hover:bg-[#E9D795]
                  md:text-base
                  ${
                    index === 0
                      ? "bg-[#E9D795]"
                      : "bg-transparent"
                  }
                `}
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
