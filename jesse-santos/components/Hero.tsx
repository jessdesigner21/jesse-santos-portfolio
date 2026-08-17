{/* =====================================================
    FOTO — COMPOSIÇÃO EDITORIAL
===================================================== */}

<motion.div
  style={{
    x: portraitX,
    y: portraitY,
  }}
  initial={{
    opacity: 0,
    y: 25,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 0.9,
    delay: 0.28,
    ease: [0.16, 1, 0.3, 1],
  }}
  className="
    col-start-6
    col-span-4
    relative
    h-[46vh]
    min-h-[370px]
    max-h-[500px]
  "
>
  {/* SHAPE ROSA ATRÁS */}
  <div
    className="
      absolute
      inset-[5%_-6%_-5%_5%]
      bg-[#ead4d8]
      rotate-[2deg]
      [clip-path:polygon(12%_0%,92%_4%,100%_29%,91%_100%,7%_95%,0_27%)]
    "
  />

  {/* MOLDURA DESLOCADA */}
  <div
    aria-hidden
    className="
      absolute
      z-[1]
      top-[8%]
      left-[-5%]
      w-[94%]
      h-[88%]
      border
      border-black/35
      rotate-[-2deg]
    "
  />

  {/* FOTO PRINCIPAL */}
  <div
    className="
      absolute
      z-[5]
      inset-0
      overflow-hidden
      [clip-path:polygon(12%_0%,92%_4%,100%_29%,91%_100%,7%_95%,0_27%)]
    "
  >
    <Image
      src={PROFILE_IMAGE}
      alt="Retrato de Jesse Santos"
      fill
      priority
      sizes="34vw"
      className="
        object-cover
        object-[50%_42%]
        transition-transform
        duration-700
        hover:scale-[1.025]
      "
    />
  </div>

  {/* PEQUENO RECORTE DA PRÓPRIA FOTO */}
  <div
    aria-hidden
    className="
      absolute
      z-[8]
      -left-[8%]
      bottom-[13%]
      w-[23%]
      h-[32%]
      overflow-hidden
      border
      border-background
      rotate-[-4deg]
      shadow-[0_10px_25px_rgba(0,0,0,0.10)]
    "
  >
    <Image
      src={PROFILE_IMAGE}
      alt=""
      fill
      sizes="10vw"
      className="
        object-cover
        object-[25%_48%]
        scale-[1.8]
      "
    />
  </div>

  {/* BLOCO VERDE DE ACENTO */}
  <motion.div
    aria-hidden
    initial={{
      scale: 0,
      rotate: 0,
    }}
    animate={{
      scale: 1,
      rotate: 6,
    }}
    transition={{
      delay: 0.7,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    }}
    className="
      absolute
      z-[10]
      -right-[4%]
      top-[17%]
      w-9
      h-9
      bg-[#c6ff3d]
    "
  />

  {/* LINHA EDITORIAL */}
  <div
    aria-hidden
    className="
      absolute
      z-[10]
      right-[-10%]
      bottom-[22%]
      w-[38%]
      h-px
      bg-black/45
    "
  />

  {/* PEQUENA CRUZ GRÁFICA */}
  <div
    aria-hidden
    className="
      absolute
      z-[11]
      right-[-2%]
      bottom-[18%]
      w-5
      h-5
    "
  >
    <span
      className="
        absolute
        left-1/2
        top-0
        w-px
        h-full
        bg-black/70
      "
    />

    <span
      className="
        absolute
        top-1/2
        left-0
        h-px
        w-full
        bg-black/70
      "
    />
  </div>
</motion.div>
