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
        <header className="motion-program-header">
          <div>
            <h1 className="archive-collection-title">Em movimento<span className="text-[var(--portfolio-yellow)]">.</span></h1>
            <Link href="/clientes" className="mt-3 inline-block text-sm text-[#655b4c]">Trabalhos via Go Marketing Group ↗</Link>
          </div>
          <nav aria-label="Seções de Movimento" className="flex flex-wrap gap-5">
            <a href="#videos" className="marker-underline">Vídeos ↓</a>
            <a href="#reels" className="marker-underline">Reels ↓</a>
          </nav>
        </header>

        <section id="videos" className="motion-program-section" aria-labelledby="motion-videos-title">
          <MotionReveal>
            <h2 id="motion-videos-title" className="archive-work-title">Vídeos</h2>
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
            <h2 id="motion-reels-title" className="archive-work-title">Reels</h2>
            <ArchiveReels titleLevel="h3" />
          </MotionReveal>
        </section>
      </div>
    </article>
  );
}
