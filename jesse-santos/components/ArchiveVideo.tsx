"use client";

import { useRef, useState } from "react";

export default function ArchiveVideo({
  title,
  category,
  src,
  landscape,
}: {
  title: string;
  category: string;
  src: string;
  landscape?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  function play() {
    const video = videoRef.current;
    if (!video) return;
    setStarted(true);
    requestAnimationFrame(() => video.focus({ preventScroll: true }));
    void video.play().catch(() => {
      // The native controls remain available if the browser blocks playback.
    });
  }

  return (
    <div className={`archive-video-stage ${landscape ? "aspect-video" : "aspect-[9/16]"}`}>
      <video
        ref={videoRef}
        controls={started}
        playsInline
        preload="none"
        aria-label={`Vídeo de ${title}`}
        aria-hidden={!started}
        tabIndex={started ? 0 : -1}
        width={landscape ? 1280 : 720}
        height={landscape ? 720 : 1280}
        className="block h-full w-full"
      >
        <source src={src} type="video/mp4" />
        <a href={src}>Abrir vídeo de {title}</a>
      </video>
      {!started && (
        <button
          type="button"
          onClick={play}
          className="archive-video-cover paper-surface"
          aria-label={`Assistir: ${title}`}
        >
          <span className="editorial-num">{category}</span>
          <span className="archive-video-cover-title">{title}</span>
          <span className="archive-video-cover-play"><span aria-hidden="true">▶</span> Assistir</span>
        </button>
      )}
    </div>
  );
}
