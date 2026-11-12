import type { Metadata } from "next";
import Link from "next/link";
import { motionPieces } from "@/data/videos";
import { ArchiveReels, ArchiveVideos } from "@/components/ArchiveShowcase";
import MotionReveal from "@/components/MotionReveal";
import VideoPlayer from "@/components/VideoPlayer";

export const metadata: Metadata = {
  title: "Em Movimento — Jesse Santos",
};

export default function MovimentoPage() {
  return (
    <article className="paper-surface bg-[#F7F4EB] px-5 pb-24 pt-28 md:px-8 md:pt-36">
      <div className="motion-program mx-auto max-w-[1376px]">
        <header className="editorial-page-header motion-program-header">
          <span className="editorial-num editorial-page-kicker">02 / Vídeo & motion</span>
          <h1 className="editorial-page-display">Em movimento<span className="editorial-page-script">com intenção.</span></h1>
          <div className="editorial-page-bottom">
            <p className="editorial-page-subtitle">Imagens que respiram, ideias que ganham ritmo e histórias que encontram movimento.</p>
            <Link href="/work" className="editorial-page-switch">01 / Design & imagem <span aria-hidden="true">↗</span></Link>
          </div>
          <nav aria-label="Seções de Movimento" className="mt-8 flex flex-wrap gap-5 text-sm text-[#45593d]">
            <a href="#videos" className="marker-underline">Vídeos ↓</a>
            <a href="#reels" className="marker-underline">Reels ↓</a>
            <Link href="/clientes" className="marker-underline">Marcas & clientes ↗</Link>
          </nav>
        </header>

        <section id="videos" className="motion-program-section" aria-labelledby="motion-videos-title">
          <MotionReveal>
            <h2 id="motion-videos-title" className="editorial-section-heading">Vídeos <span className="handwritten-accent text-[#566a45]">que contam.</span></h2>
            <ArchiveVideos titleLevel="h3" />
            {motionPieces.length > 0 && (
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {motionPieces.map((piece) => (
                  <VideoPlayer
                    key={piece.slug}
                    piece={piece}
                    className={`w-full ${piece.format === "9:16" ? "aspect-[9/16]" : piece.format === "1:1" ? "aspect-square" : "aspect-video"}`}
                  />
                ))}
              </div>
            )}
          </MotionReveal>
        </section>

        <section id="reels" className="motion-program-section" aria-labelledby="motion-reels-title">
          <MotionReveal>
            <h2 id="motion-reels-title" className="editorial-section-heading">Reels <span className="handwritten-accent text-[#566a45]">em série.</span></h2>
            <ArchiveReels titleLevel="h3" />
          </MotionReveal>
        </section>
      </div>
    </article>
  );
}
