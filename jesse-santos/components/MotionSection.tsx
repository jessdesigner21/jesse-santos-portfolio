"use client";

import { motion } from "framer-motion";
import { motionPieces } from "@/data/videos";
import VideoPlayer from "./VideoPlayer";

/**
 * "EM MOVIMENTO" — seção dedicada a vídeo/motion/edição. Só renderiza se
 * houver ao menos 1 item em /data/videos.ts, para nunca mostrar players
 * vazios ou texto de placeholder ao visitante (ver comentário no data file).
 */
export default function MotionSection() {
  if (motionPieces.length === 0) return null;

  const [lead, ...rest] = motionPieces;
  const verticals = rest.filter((v) => v.format === "9:16").slice(0, 3);
  const others = rest.filter((v) => v.format !== "9:16");

  return (
    <section className="relative px-5 md:px-8 py-24 md:py-36">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="editorial-num mb-10"
      >
        Em Movimento
      </motion.p>

      {lead && (
        <div className="-mx-5 md:-mx-8 mb-12">
          <VideoPlayer piece={lead} className="w-full aspect-video" />
        </div>
      )}

      {verticals.length > 0 && (
        <div className="flex gap-4 overflow-x-auto no-scrollbar mb-12">
          {verticals.map((v) => (
            <VideoPlayer
              key={v.slug}
              piece={v}
              className="w-[60vw] md:w-[22vw] shrink-0 aspect-[9/16]"
            />
          ))}
        </div>
      )}

      {others.length > 0 && (
        <div className="grid md:grid-cols-2 gap-6">
          {others.map((v) => (
            <VideoPlayer key={v.slug} piece={v} className="w-full aspect-video" />
          ))}
        </div>
      )}
    </section>
  );
}
