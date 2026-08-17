import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { projects, getProjectBySlug } from "@/data/projects";
import ProjectCover from "@/components/ProjectCover";
import ProjectAccentSetter from "@/components/ProjectAccentSetter";
import VideoPlayer from "@/components/VideoPlayer";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Jesse Santos`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="pt-28 md:pt-36 pb-24">
      <ProjectAccentSetter color={project.accentColor} />

      <header className="px-5 md:px-8">
        <p className="editorial-num text-graphite mb-4">
          {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
        </p>
        <h1 className="font-serif italic font-light leading-[0.88] text-[13vw] md:text-[7vw]">
          {project.title}
        </h1>

        <div className="flex flex-wrap gap-x-8 gap-y-2 mt-6 editorial-num text-graphite">
          {project.client && <span>Cliente — {project.client}</span>}
          {project.year && <span>Ano — {project.year}</span>}
          <span>Disciplina — {project.discipline.join(", ")}</span>
          {project.role && <span>Papel — {project.role}</span>}
        </div>

        {project.challenge && (
          <p className="font-serif italic text-2xl md:text-3xl max-w-2xl mt-10">
            {project.challenge}
          </p>
        )}
      </header>

      <div className="mt-16 -mx-0">
        <ProjectCover
          project={project}
          priority
          className="w-full aspect-[16/10] md:aspect-[21/9]"
        />
      </div>

      <div className="px-5 md:px-8 mt-16 grid md:grid-cols-12 gap-8">
        <p className="md:col-span-6 md:col-start-4 text-lg md:text-xl leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* galeria de imagens adicionais — aparece automaticamente quando `images` for preenchido */}
      {project.images && project.images.length > 0 && (
        <div className="px-5 md:px-8 mt-20 grid md:grid-cols-2 gap-6">
          {project.images.map((img) => (
            <div key={img.src} className="relative w-full aspect-[4/5] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      )}

      {/* vídeos do case — aparece automaticamente quando `videos` for preenchido */}
      {project.videos && project.videos.length > 0 && (
        <div className="px-5 md:px-8 mt-20 grid md:grid-cols-2 gap-6">
          {project.videos.map((v) => (
            <VideoPlayer
              key={v.title}
              piece={{ ...v, slug: v.title }}
              className={`w-full ${v.format === "9:16" ? "aspect-[9/16]" : "aspect-video"}`}
            />
          ))}
        </div>
      )}

      {project.credits && project.credits.length > 0 && (
        <div className="px-5 md:px-8 mt-20 editorial-num text-graphite">
          <p className="mb-3 text-ink">Créditos</p>
          {project.credits.map((c) => (
            <p key={c.role}>
              {c.role} — {c.name}
            </p>
          ))}
        </div>
      )}

      <div className="px-5 md:px-8 mt-24 pt-10 border-t border-ink/10 flex items-center justify-between">
        <Link href="/work" className="editorial-num border-b border-ink/40 pb-1">
          ← Todos os trabalhos
        </Link>
        <Link
          href={`/work/${next.slug}`}
          data-cursor="ver"
          className="text-right"
        >
          <span className="editorial-num text-graphite block mb-1">Próximo</span>
          <span className="font-serif italic text-2xl md:text-4xl">{next.title}</span>
        </Link>
      </div>
    </article>
  );
}
