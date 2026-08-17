"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects, disciplines, type Discipline } from "@/data/projects";
import { clients } from "@/data/clients";
import ProjectCover from "./ProjectCover";
import { setAccent } from "@/lib/accent";

type Mode = "projeto" | "cliente" | "disciplina";

export default function WorkExplorer() {
  const [mode, setMode] = useState<Mode>("projeto");
  const [filter, setFilter] = useState<string | null>(null);

  const availableDisciplines = useMemo(
    () => disciplines.filter((d) => projects.some((p) => p.discipline.includes(d))),
    []
  );

  const filtered = useMemo(() => {
    if (mode === "disciplina" && filter) {
      return projects.filter((p) => p.discipline.includes(filter as Discipline));
    }
    if (mode === "cliente" && filter) {
      const client = clients.find((c) => c.name === filter);
      return projects.filter((p) => client?.projectSlugs.includes(p.slug));
    }
    return projects;
  }, [mode, filter]);

  return (
    <div>
      <div className="flex flex-wrap gap-x-8 gap-y-3 editorial-num mb-6 border-b border-ink/10 pb-6">
        {(["projeto", "cliente", "disciplina"] as Mode[]).map((m) => (
          <button
            key={m}
            onClick={() => {
              setMode(m);
              setFilter(null);
            }}
            className={`uppercase pb-1 border-b-2 transition-colors ${
              mode === m ? "border-ink text-ink" : "border-transparent text-graphite"
            }`}
          >
            Ver por {m}
          </button>
        ))}
      </div>

      {mode === "disciplina" && (
        <div className="flex flex-wrap gap-3 mb-12">
          <FilterChip active={!filter} onClick={() => setFilter(null)}>
            Tudo
          </FilterChip>
          {availableDisciplines.map((d) => (
            <FilterChip key={d} active={filter === d} onClick={() => setFilter(d)}>
              {d}
            </FilterChip>
          ))}
        </div>
      )}

      {mode === "cliente" && (
        <div className="flex flex-wrap gap-3 mb-12">
          <FilterChip active={!filter} onClick={() => setFilter(null)}>
            Tudo
          </FilterChip>
          {clients.map((c) => (
            <FilterChip key={c.name} active={filter === c.name} onClick={() => setFilter(c.name)}>
              {c.name}
            </FilterChip>
          ))}
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map((p, i) => (
          <motion.div
            key={p.slug}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            onMouseEnter={() => setAccent(p.accentColor)}
            onMouseLeave={() => setAccent(null)}
          >
            <span className="editorial-num text-graphite">
              {String(i + 1).padStart(2, "0")}
            </span>
            <Link href={`/work/${p.slug}`} data-cursor="ver" className="block group mt-2">
              <ProjectCover project={p} className="w-full aspect-[4/5] transition-transform duration-500 group-hover:scale-[1.02]" />
            </Link>
            <h3 className="font-serif italic text-xl mt-3">{p.title}</h3>
            <p className="editorial-num text-graphite mt-1">
              {[p.client, p.discipline[0]].filter(Boolean).join(" — ")}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`editorial-num px-0 pb-1 border-b transition-colors ${
        active ? "border-ink text-ink" : "border-ink/20 text-graphite hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}
