"use client";

import { useState } from "react";
import Image from "next/image";

type Slide = { src: string; alt: string };

export default function ArchiveCarousel({
  title,
  slides,
}: {
  title: string;
  slides: Slide[];
}) {
  const [active, setActive] = useState(0);
  const current = slides[active];

  function move(offset: number) {
    setActive((index) => (index + offset + slides.length) % slides.length);
  }

  return (
    <div role="region" aria-roledescription="carrossel" aria-label={title}>
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image key={current.src} src={current.src} alt={current.alt} fill sizes="(max-width: 768px) 92vw, 60vw" className="archive-slide object-cover" />
      </div>
      <div className="mt-4 flex items-center justify-between gap-4">
        <p className="text-sm text-[#655b4c]" aria-live="polite">
          <span className="editorial-num mr-3">{active + 1} / {slides.length}</span>
          {current.alt}
        </p>
        <div className="flex shrink-0 gap-2">
          <button type="button" onClick={() => move(-1)} aria-label="Imagem anterior" className="archive-arrow">←</button>
          <button type="button" onClick={() => move(1)} aria-label="Próxima imagem" className="archive-arrow">→</button>
        </div>
      </div>
    </div>
  );
}
