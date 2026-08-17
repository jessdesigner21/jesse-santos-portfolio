"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { clients } from "@/data/clients";
import { getProjectBySlug } from "@/data/projects";
import ProjectCover from "./ProjectCover";
import { setAccent } from "@/lib/accent";

export default function ClientsSection({ showLabel = true }: { showLabel?: boolean }) {
  const [active, setActive] = useState<string | null>(null);
  const activeClient = clients.find((c) => c.name === active);
  const activeProject = activeClient
    ? getProjectBySlug(activeClient.projectSlugs[0])
    : null;

  return (
    <section id="clientes-preview" className="relative px-5 md:px-8 py-24 md:py-36">
      {showLabel && <p className="editorial-num mb-10">Clientes</p>}

      <div className="flex flex-col border-t border-ink/10">
        {clients.map((c) => {
          const project = getProjectBySlug(c.projectSlugs[0]);
          return (
            <button
              key={c.name}
              onMouseEnter={() => {
                setActive(c.name);
                if (project) setAccent(project.accentColor);
              }}
              onMouseLeave={() => {
                setActive(null);
                setAccent(null);
              }}
              onFocus={() => setActive(c.name)}
              onBlur={() => setActive(null)}
              className="group flex items-baseline justify-between border-b border-ink/10 py-4 md:py-6 text-left"
              data-cursor="ver"
            >
              <span className="font-serif italic text-[8vw] md:text-[3.6vw] leading-none group-hover:not-italic group-hover:font-grotesk group-hover:font-bold transition-all">
                {c.name}
              </span>
              <span className="editorial-num text-graphite hidden md:block">
                {c.services.join(" / ")}
              </span>
            </button>
          );
        })}
      </div>

      {/* preview flutuante do projeto ao passar o mouse (desktop) */}
      <div className="hidden md:block pointer-events-none">
        <AnimatePresence>
          {activeProject && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="fixed top-1/2 right-[8vw] -translate-y-1/2 w-[22vw] aspect-[4/5] z-40 shadow-2xl"
            >
              <ProjectCover project={activeProject} className="w-full h-full" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {activeProject && (
        <Link
          href={`/work/${activeProject.slug}`}
          className="sr-only"
        >{`Ver projeto ${activeProject.title}`}</Link>
      )}
    </section>
  );
}
