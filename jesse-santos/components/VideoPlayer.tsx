"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { MotionPiece } from "@/data/videos";

/**
 * Player de vídeo do portfólio. Aceita arquivo local (mp4 em /public) ou
 * embed externo (YouTube/Vimeo, via iframe). Preview silencioso em hover /
 * quando entra na viewport (desktop), com play/pause explícito por toque
 * no mobile. Respeita prefers-reduced-motion (nunca autoplay nesse caso).
 */
export default function VideoPlayer({
  piece,
  className = "",
}: {
  piece: MotionPiece;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [reducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const isEmbed = piece.videoUrl?.includes("http") && !piece.videoUrl.endsWith(".mp4");

  useEffect(() => {
    if (isEmbed || reducedMotion || !piece.videoUrl) return;
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {});
          setPlaying(true);
        } else {
          videoRef.current?.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [isEmbed, reducedMotion, piece.videoUrl]);

  function togglePlay() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  }

  return (
    <div
      ref={wrapperRef}
      className={`relative overflow-hidden bg-ink ${className}`}
      data-cursor="play"
    >
      {piece.poster && !playing && (
        <Image
          src={piece.poster}
          alt={piece.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      )}

      {piece.videoUrl && isEmbed && (
        <iframe
          src={piece.videoUrl}
          title={piece.title}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; encrypted-media; picture-in-picture"
          loading="lazy"
        />
      )}

      {piece.videoUrl && !isEmbed && (
        <video
          ref={videoRef}
          src={piece.videoUrl}
          poster={piece.poster}
          muted
          loop
          playsInline
          onClick={togglePlay}
          className="absolute inset-0 w-full h-full object-cover cursor-pointer"
        />
      )}

      <button
        onClick={togglePlay}
        className="md:hidden absolute bottom-4 right-4 editorial-num bg-off-white text-ink px-3 py-2"
        aria-label={playing ? "Pausar vídeo" : "Reproduzir vídeo"}
      >
        {playing ? "Pause" : "Play"}
      </button>

      <div className="absolute bottom-0 left-0 p-4 text-off-white">
        <p className="editorial-num opacity-70">
          {[piece.client, piece.year].filter(Boolean).join(" — ")}
        </p>
        <p className="font-serif italic text-lg">{piece.title}</p>
      </div>
    </div>
  );
}
