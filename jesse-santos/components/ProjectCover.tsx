import Image from "next/image";
import type { Project } from "@/data/projects";

/**
 * Capa de um projeto. Se `cover` existir, usa a imagem real via next/image.
 * Caso contrário, desenha uma capa tipográfica editorial autoral a partir
 * do título e da accentColor — isto NÃO é um placeholder textual, é um
 * tratamento de capa legítimo (comum em portfólios editoriais quando a
 * peça final ainda não foi fotografada) e some automaticamente assim que
 * `cover` for preenchido em /data/projects.ts.
 */
export default function ProjectCover({
  project,
  className = "",
  priority = false,
}: {
  project: Project;
  className?: string;
  priority?: boolean;
}) {
  if (project.cover) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={project.cover}
          alt={project.title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 80vw"
          className="object-cover"
        />
      </div>
    );
  }

  const treatment = project.coverTreatment ?? "grotesk";

  return (
    <div
      className={`relative overflow-hidden flex items-end @container ${className}`}
      style={{ backgroundColor: project.accentColor }}
    >
      <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay" aria-hidden>
        <div className="w-full h-full" style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 1px, transparent 12px)",
        }} />
      </div>

      {treatment === "serif" && (
        <p className="relative font-serif italic font-light text-ink leading-[0.9] p-[6cqw] text-[13cqw]">
          {project.title}
        </p>
      )}

      {treatment === "grotesk" && (
        <p className="relative font-grotesk font-bold uppercase leading-[0.92] tracking-tight text-ink p-[6cqw] text-[9cqw] break-words">
          {project.title}
        </p>
      )}

      {treatment === "mono-grid" && (
        <div className="relative p-[6cqw] w-full">
          <p className="text-[2.6cqw] font-mono uppercase tracking-[0.14em] text-ink/70 mb-[2cqw] leading-none">
            {project.client ?? project.discipline[0]}
          </p>
          <p className="font-grotesk font-medium uppercase leading-[0.95] tracking-tight text-ink text-[9cqw]">
            {project.title}
          </p>
        </div>
      )}
    </div>
  );
}
