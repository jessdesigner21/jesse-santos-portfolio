"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Cursor contextual minimalista. Fica um pequeno ponto por padrão e expande
 * com um rótulo ("VER", "PLAY", "ABRIR") quando passa sobre elementos com
 * data-cursor="ver|play|abrir". A visibilidade é controlada via CSS
 * (media queries pointer/reduced-motion em globals.css), não via estado
 * React, para evitar setState síncrono dentro de efeito.
 */
export default function CustomCursor() {
  const [label, setLabel] = useState<string | null>(null);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 30, stiffness: 400, mass: 0.4 });
  const springY = useSpring(y, { damping: 30, stiffness: 400, mass: 0.4 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || reduced) return;

    document.body.classList.add("has-custom-cursor");

    const move = (e: PointerEvent) => {
      if (raf.current) cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        x.set(e.clientX);
        y.set(e.clientY);
        const target = e.target as HTMLElement;
        const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
        setLabel(cursorTarget?.dataset.cursor ?? null);
      });
    };

    window.addEventListener("pointermove", move);
    return () => {
      window.removeEventListener("pointermove", move);
      document.body.classList.remove("has-custom-cursor");
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="custom-cursor-dot pointer-events-none fixed top-0 left-0 z-[200] hidden items-center justify-center rounded-full mix-blend-difference"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: label ? 84 : 10,
        height: label ? 84 : 10,
        backgroundColor: "#F3EFE9",
      }}
      transition={{ type: "spring", damping: 22, stiffness: 300 }}
    >
      {label && (
        <span className="editorial-num text-ink font-medium">{label}</span>
      )}
    </motion.div>
  );
}
