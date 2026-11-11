import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { projects, getProjectBySlug } from "@/data/projects";
import ProjectCover from "@/components/ProjectCover";
import ProjectAccentSetter from "@/components/ProjectAccentSetter";
import ProjectGallery from "@/components/ProjectGallery";
import AgroriegoShowcase from "@/components/AgroriegoShowcase";
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
  const isPride = project.slug === "falas-de-orgulho";
  const isAgroriego = project.slug === "grupo-tattersall";

  return (
    <article className="pt-28 md:pt-36 pb-24">
      <ProjectAccentSetter color={project.accentColor} />

      <header className="px-5 md:px-8">
        <p className="editorial-num text-graphite mb-4">
          {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
        </p>
        <h1
          style={isPride ? { fontFamily: '"hey-eloise", cursive' } : undefined}
          className={
            isPride
              ? "text-[#AC871C] font-normal leading-[1] tracking-normal text-[clamp(3.4rem,9vw,9rem)]"
              : "font-serif italic font-light leading-[0.88] text-[13vw] md:text-[7vw]"
          }
        >
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

      {isAgroriego ? (
        <AgroriegoShowcase />
      ) : (
        <>
        <div className={isPride ? "mt-16 px-5 md:px-8" : "mt-16"}>
          {isPride && project.cover ? (
            <div className="relative mx-auto max-w-[1440px] aspect-[16/9] bg-[#EEE8DC]">
              <Image
                src={project.cover}
                alt={`Imagem de abertura do projeto ${project.title}`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 95vw"
                className="object-contain"
              />
            </div>
          ) : (
            <ProjectCover
              project={project}
              priority
              className="w-full aspect-[16/10] md:aspect-[21/9]"
            />
          )}
        </div>
  
        <div className="px-5 md:px-8 mt-16 grid md:grid-cols-12 gap-8">
          <p className="md:col-span-6 md:col-start-4 text-lg md:text-xl leading-relaxed">
            {project.description}
          </p>
        </div>
  
        {/* Galeria editorial: formatos reais, sem recortes e com movimento suave */}
        {project.images && project.images.length > 0 && (
          <ProjectGallery
            images={project.images}
            presentation={project.layout === "presentation"}
          />
        )}
  
  
        </>
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
