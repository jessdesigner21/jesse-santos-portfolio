import type { Metadata } from "next";
import Link from "next/link";
import { motionPieces } from "@/data/videos";
import VideoPlayer from "@/components/VideoPlayer";

export const metadata: Metadata = {
  title: "Em Movimento — Jesse Santos",
};

export default function MovimentoPage() {
  return (
    <div className="pt-28 md:pt-36 px-5 md:px-8 pb-24 min-h-[60vh]">
      <p className="editorial-num mb-4">Vídeo / Motion / Edição</p>
      <h1 className="font-serif italic font-light text-5xl md:text-8xl leading-[0.9] mb-16">
        Em movimento.
      </h1>

      {motionPieces.length === 0 ? (
        <p className="font-serif italic text-2xl text-graphite max-w-lg">
          Os trabalhos audiovisuais de Jesse estão sendo organizados para
          esta seção — enquanto isso, explore o{" "}
          <Link href="/work" className="border-b border-ink">
            trabalho selecionado
          </Link>
          .
        </p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {motionPieces.map((v) => (
            <VideoPlayer
              key={v.slug}
              piece={v}
              className={`w-full ${v.format === "9:16" ? "aspect-[9/16] md:w-[60%]" : "aspect-video"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
