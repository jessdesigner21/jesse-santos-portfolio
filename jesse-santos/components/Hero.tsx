{/* =========================================================
    MOBILE — EXPERIÊNCIA EDITORIAL
========================================================= */}

<div
  className="
    md:hidden
    relative
    px-5
    pt-24
    pb-16
    overflow-hidden
  "
>
  {/* número editorial */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    className="
      absolute
      top-24
      right-5
      editorial-num
      text-black/45
      uppercase
    "
  >
    01 / Portfolio
  </motion.div>

  {/* NOME */}
  <motion.h1
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    }}
    className="
      relative
      z-10
      leading-[0.72]
      tracking-[-0.07em]
      pointer-events-none
    "
  >
    <span
      className="
        block
        font-serif
        italic
        font-light
        text-[25vw]
        translate-x-[2vw]
      "
    >
      Jesse
    </span>

    <span
      className="
        block
        font-grotesk
        font-bold
        uppercase
        text-[26vw]
        tracking-[-0.08em]
        -mt-[2vw]
      "
    >
      Santos
    </span>
  </motion.h1>

  {/* microtexto vertical */}
  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2 }}
    className="
      absolute
      right-5
      top-[28rem]
      editorial-num
      uppercase
      leading-[1.7]
      text-right
      text-black/60
    "
  >
    Design
    <br />
    Direção
    <br />
    Motion
  </motion.p>

  {/* PRIMEIRO PROJETO */}
  {fragments[0] && (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: -3 }}
      animate={{ opacity: 1, y: 0, rotate: -2 }}
      transition={{
        duration: 0.8,
        delay: 0.18,
      }}
      className="
        relative
        z-[4]
        -mt-5
        w-[88%]
        aspect-[16/10]
        shadow-[0_16px_40px_rgba(0,0,0,0.12)]
      "
    >
      <Link
        href={`/trabalho/${fragments[0].slug}`}
        className="block w-full h-full"
      >
        <ProjectCover
          project={fragments[0]}
          className="w-full h-full"
        />
      </Link>

      <div
        className="
          absolute
          -bottom-7
          left-0
          editorial-num
          uppercase
        "
      >
        01 — {fragments[0].title}
      </div>
    </motion.div>
  )}

  {/* BLOCO PROFISSIONAL */}
  <motion.div
    initial={{ opacity: 0, y: 14 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.7,
      delay: 0.3,
    }}
    className="
      relative
      z-[5]
      mt-16
      ml-auto
      w-[64%]
      bg-[#c6ff3d]
      px-4
      py-5
      rotate-[1deg]
    "
  >
    <p
      className="
        editorial-num
        uppercase
        leading-[1.7]
      "
    >
      Design Gráfico
      <br />
      Direção Visual
      <br />
      Social Media
      <br />
      Conteúdo em Movimento
    </p>
  </motion.div>

  {/* FOTO */}
  <motion.div
    initial={{ opacity: 0, y: 26 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.8,
      delay: 0.4,
    }}
    className="
      relative
      z-[3]
      mt-10
      -ml-3
      w-[84vw]
      max-w-[390px]
      aspect-[4/5]
    "
  >
    <div
      className="
        absolute
        inset-[3%_-5%_-4%_5%]
        bg-[#ead4d8]
        rotate-[-2deg]
        [clip-path:polygon(10%_0%,92%_4%,100%_30%,91%_100%,7%_95%,0_27%)]
      "
    />

    <div
      className="
        absolute
        inset-0
        overflow-hidden
        [clip-path:polygon(10%_0%,92%_4%,100%_30%,91%_100%,7%_95%,0_27%)]
      "
    >
      <Image
        src={PROFILE_IMAGE}
        alt="Retrato de Jesse Santos"
        fill
        sizes="84vw"
        className="
          object-cover
          object-[50%_38%]
        "
      />
    </div>

    <div
      className="
        absolute
        -right-2
        bottom-5
        bg-background
        px-3
        py-2
        editorial-num
        uppercase
        rotate-[-1deg]
      "
    >
      Jesse Santos
      <br />
      Designer Gráfico
    </div>
  </motion.div>

  {/* FRASE PRINCIPAL */}
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.7,
      delay: 0.5,
    }}
    className="
      mt-12
      pt-7
      border-t
      border-black/20
    "
  >
    <p
      className="
        font-serif
        italic
        text-[1.7rem]
        leading-[1.15]
        max-w-[85%]
      "
    >
      Design gráfico,
      <br />
      direção visual
      <br />
      e conteúdo em movimento.
    </p>

    <p
      className="
        mt-4
        max-w-[80%]
        text-sm
        leading-[1.6]
        text-graphite
      "
    >
      Feito para marcas que precisam ser vistas antes de serem lidas.
    </p>

    <Link
      href="#trabalho"
      data-cursor="ver"
      className="
        inline-flex
        items-center
        gap-3
        mt-7
        pb-1
        editorial-num
        uppercase
        border-b
        border-black
      "
    >
      Ver trabalhos ↗
    </Link>
  </motion.div>

  {/* SEGUNDO PROJETO COMO TEASER */}
  {fragments[1] && (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: 0.6,
      }}
      className="
        relative
        mt-16
        ml-auto
        w-[58%]
        aspect-square
        rotate-[2deg]
        shadow-[0_12px_30px_rgba(0,0,0,0.10)]
      "
    >
      <Link
        href={`/trabalho/${fragments[1].slug}`}
        className="block w-full h-full"
      >
        <ProjectCover
          project={fragments[1]}
          className="w-full h-full"
        />
      </Link>

      <div
        className="
          absolute
          -left-10
          top-1/2
          -translate-y-1/2
          -rotate-90
          editorial-num
          uppercase
        "
      >
        próximo projeto
      </div>
    </motion.div>
  )}

  {/* linha final */}
  <div
    className="
      mt-16
      pt-4
      border-t
      border-black/20
      flex
      justify-between
      editorial-num
      uppercase
      text-black/50
    "
  >
    <span>↓ Scroll</span>
    <span>Portfolio / 2026</span>
  </div>
</div>
