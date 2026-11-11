
"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const AUDIO_SRC = "/sobre%20mim%20por%20mim%20.opus";

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

const bars = Array.from({ length: 44 }, (_, i) =>
  12 + Math.abs(Math.sin(i * 1.71) * Math.cos(i * 0.43)) * 78
);

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${String(secs).padStart(2, "0")}`;
}

function AudioStory() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const reduceMotion = useReducedMotion();

  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState(false);

  async function toggleAudio() {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
      return;
    }

    try {
      setError(false);
      await audio.play();
    } catch {
      setPlaying(false);
      setError(true);
    }
  }

  function seek(value: number) {
    const audio = audioRef.current;
    if (!audio || !Number.isFinite(duration) || duration <= 0)
      return;

    audio.currentTime = value;
    setCurrentTime(value);
  }

  return (
    <div
      className="
        relative mt-24
        border-y border-black/20
        py-12 md:mt-32 md:py-20
      "
    >
      <audio
        ref={audioRef}
        src={AUDIO_SRC}
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => {
          setPlaying(false);
          setCurrentTime(0);
        }}
        onTimeUpdate={(event) =>
          setCurrentTime(event.currentTarget.currentTime)
        }
        onLoadedMetadata={(event) => {
          const value = event.currentTarget.duration;
          setDuration(Number.isFinite(value) ? value : 0);
        }}
        onError={() => setError(true)}
      />

      <div className="grid gap-10 md:grid-cols-12">

        <div className="md:col-span-5">
          <p className="editorial-num uppercase text-black/50">
            02.1 / Uma voz, muitas texturas
          </p>

          <h3
            className="
              mt-6 font-serif italic
              text-4xl leading-[1.08]
              tracking-[-0.04em]
              md:text-6xl
            "
          >
            Algumas histórias
            <br />
            precisam ser
            <br />
            <span
              style={handwritten}
              className="text-[#A88735]"
            >
              ouvidas.
            </span>
          </h3>

          <p
            className="
              mt-7 max-w-sm font-grotesk
              text-base leading-[1.8]
              text-[#645F58]
            "
          >
            Um pouco de mim, pela minha própria voz.
            Com pausas, respiros e os sons da vida acontecendo.
          </p>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <div
            className="
              relative bg-[#EDE5D4]
              border border-[#D8CCB8]
              p-6 md:p-9
            "
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="editorial-num uppercase text-black/45">
                  Gravação pessoal / 2026
                </p>

                <p
                  className="
                    mt-3 font-grotesk
                    text-xl font-medium
                    tracking-[-0.035em]
                    md:text-2xl
                  "
                >
                  Sobre mim, por mim.
                </p>
              </div>

              <motion.span
                aria-hidden="true"
                style={handwritten}
                className="text-4xl text-[#A88735]"
                animate={
                  playing && !reduceMotion
                    ? { rotate: [-5, 8, -5] }
                    : { rotate: -5 }
                }
                transition={{
                  duration: 2.5,
                  repeat: playing && !reduceMotion ? Infinity : 0,
                  ease: "easeInOut",
                }}
              >
                *
              </motion.span>
            </div>

            {/* Ondas visuais que se animam durante o áudio */}

            <div
              aria-hidden="true"
              className="
                mt-10 flex h-28
                items-center justify-between
                gap-[2px] overflow-hidden
              "
            >
              {bars.map((height, index) => (
                <motion.span
                  key={index}
                  className="
                    block min-w-0 flex-1
                    rounded-full bg-[#A88735]
                  "
                  style={{
                    height: `${height}%`,
                    transformOrigin: "center",
                  }}
                  animate={
                    playing && !reduceMotion
                      ? { scaleY: [0.55, 1.12, 0.7, 1] }
                      : { scaleY: 1 }
                  }
                  transition={{
                    duration: 0.65 + (index % 6) * 0.14,
                    repeat:
                      playing && !reduceMotion ? Infinity : 0,
                    ease: "easeInOut",
                    delay: (index % 7) * 0.06,
                  }}
                />
              ))}
            </div>

            {/* Controles */}

            <div className="mt-8 flex items-center gap-5">
              <button
                type="button"
                onClick={toggleAudio}
                disabled={error}
                aria-label={playing ? "Pausar áudio" : "Reproduzir áudio"}
                aria-pressed={playing}
                className="
                  flex h-14 w-14 shrink-0
                  items-center justify-center
                  rounded-full
                  bg-[#A88735] text-white
                  transition-transform duration-300
                  hover:scale-105
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-[#A88735]
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                "
              >
                {playing ? (
                  <svg
                    width="19"
                    height="22"
                    viewBox="0 0 19 22"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <rect x="2" y="2" width="5" height="18" />
                    <rect x="12" y="2" width="5" height="18" />
                  </svg>
                ) : (
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M3 1.5 L20 11 L3 20.5 Z" />
                  </svg>
                )}
              </button>

              <div className="min-w-0 flex-1">
                <div className="flex justify-between gap-3">
                  <span className="editorial-num uppercase">
                    {playing ? "Reproduzindo" : "Ouvir relato"}
                  </span>
                  <span className="editorial-num">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>

                <input
                  type="range"
                  min={0}
                  max={duration > 0 ? duration : 1}
                  step={0.1}
                  value={Math.min(currentTime, duration || 1)}
                  disabled={!duration || error}
                  onChange={(event) =>
                    seek(Number(event.target.value))
                  }
                  aria-label="Posição da gravação"
                  className="mt-3 w-full cursor-pointer"
                  style={{ accentColor: "#A88735" }}
                />
              </div>
            </div>

            {error && (
              <p role="alert" className="mt-4 text-sm text-[#8B3E37]">
                Não foi possível reproduzir este formato de áudio
                neste navegador.
              </p>
            )}

            <div
              className="
                mt-8 flex justify-between
                gap-4 border-t border-black/15 pt-4
              "
            >
              <span className="editorial-num uppercase text-black/45">
                Sem filtros. Sem pressa.
              </span>

              <span className="editorial-num uppercase text-black/45">
                Uma vida com textura
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
        px-5 py-24 md:px-10 md:py-36
      "
    >
      {/* Textura de papel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(92,78,59,0.045) 4px)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px]">

        {/* Identificação */}

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

        {/* Manifesto */}

        <div className="relative pt-16 md:pt-24">
          <motion.svg
            aria-hidden="true"
            viewBox="0 0 120 120"
            fill="none"
            className="
              pointer-events-none absolute
              right-0 top-6 w-16
              md:right-[5%] md:top-10 md:w-28
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
            transition={{ duration: 1.2, ease: "easeOut" }}
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
                leading-[0.98] tracking-[-0.065em]
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
                    text-[#A88735] tracking-normal
                  "
                  style={handwritten}
                >
                  liso
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
                      transition={{ delay: 0.5, duration: 1.1 }}
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

          <motion.p
            {...reveal(0.25)}
            className="
              mt-10 max-w-xs
              font-serif italic text-lg
              md:ml-auto md:mr-[9%] md:text-2xl
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
                tracking-[-0.04em] md:text-5xl
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
                font-grotesk text-xl leading-[1.6]
                md:text-[1.65rem] md:leading-[1.5]
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
                text-[#645F58] md:text-lg
              "
            >
              Meu design carrega um pouco de tudo que vivi.
              Porque, para mim, criar também é deixar marcas.
            </p>

            <p
              className="
                mt-7 max-w-xl font-grotesk
                text-base leading-[1.8]
                text-[#645F58] md:text-lg
              "
            >
              Trabalho com design gráfico, identidade visual,
              direção visual e conteúdo digital. Gosto de
              explorar como cor, tipografia, imagem e movimento
              podem construir narrativas com personalidade.
            </p>
          </motion.div>
        </div>

        {/* Seu relato em áudio */}
        <AudioStory />

        {/* Palavra gráfica */}

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
              leading-[1.1] tracking-[-0.04em]
              text-[#C9A84A]
            "
          >
            TEXTURA
          </p>

          <p
            className="
              relative -mt-2 text-right
              editorial-num uppercase
              tracking-widest text-black/50
              md:-mt-5
            "
          >
            Não é só estética.
          </p>
        </motion.div>

        {/* Competências */}

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
              flex flex-wrap content-start gap-2
              md:col-span-7 md:col-start-6
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
