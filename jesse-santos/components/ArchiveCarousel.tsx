"use client";

import { useState } from "react";
import Image from "next/image";

type Slide = { src: string; alt: string };

export default function ArchiveCarousel({
  title,
  slides,
  banners = false,
}: {
  title: string;
  slides: Slide[];
  banners?: boolean;
}) {
  const [active, setActive] = useState(0);
  const current = slides[active];

  function move(offset: number) {
    setActive((index) => (index + offset + slides.length) % slides.length);
  }

  return (
    <div role="region" aria-roledescription="carrossel" aria-label={title}>
      <div
        className={`relative grid place-items-center overflow-hidden bg-[#e9dfcd] ${banners ? "h-[clamp(23rem,50vw,36rem)]" : "aspect-[4/3]"}`}
      >
        {banners ? (
          <div className="relative h-[85%] max-w-[85%] aspect-[2/5] border-b-4 border-[#584d3e] shadow-[9px_12px_24px_#43351b38]">
            <Image key={current.src} src={current.src} alt={current.alt} fill sizes="(max-width: 640px) 34vw, 256px" className="archive-slide object-contain" />
          </div>
        ) : (
          <Image key={current.src} src={current.src} alt={current.alt} fill sizes="(max-width: 768px) 95vw, 55vw" className="archive-slide object-contain p-4 md:p-8" />
        )}
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
