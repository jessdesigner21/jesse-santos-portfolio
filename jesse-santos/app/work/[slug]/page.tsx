import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { publishedProjects, getProjectBySlug } from "@/data/projects";
import ProjectCover from "@/components/ProjectCover";
import ProjectAccentSetter from "@/components/ProjectAccentSetter";
import ProjectGallery from "@/components/ProjectGallery";
import ArchiveShowcase, { archiveSlug } from "@/components/ArchiveShowcase";
import VideoPlayer from "@/components/VideoPlayer";

export function generateStaticParams() {
  return publishedProjects.map((p) => ({ slug: p.slug }));
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
  if (!project.cover) redirect("/#trabalho");

  const index = publishedProjects.findIndex((p) => p.slug === project.slug);
  const next = publishedProjects[(index + 1) % publishedProjects.length];
  const isPride = project.slug === "falas-de-orgulho";
  const isArchive = project.slug === archiveSlug;
  const isContinuousCase = Boolean(project.images?.length) && (Boolean(project.behanceUrl) || project.layout === "presentation");

  return (
    <article className={`pt-24 md:pt-36 pb-16 md:pb-24 ${isArchive ? "paper-surface bg-[#F7F4EB]" : ""}`}>
      <ProjectAccentSetter color={project.accentColor} />

      <header className={isArchive ? "mx-auto max-w-[1440px] px-5 md:px-8" : "px-5 md:px-8"}>
        {!isArchive && (
          <p className="editorial-num text-graphite mb-4">
            {String(index + 1).padStart(2, "0")} / {String(publishedProjects.length).padStart(2, "0")}
          </p>
        )}
        <h1
          style={isPride || isArchive ? { fontFamily: '"hey-eloise", cursive' } : undefined}
          className={
            isPride || isArchive
              ? "text-[#AC871C] font-normal leading-[1] tracking-normal text-[clamp(3.4rem,9vw,9rem)]"
              : "font-serif italic font-light leading-[0.94] text-[clamp(2.5rem,10vw,4.5rem)] md:text-[7vw]"
          }
        >
          {project.title}
        </h1>

        {isArchive ? (
          <p className="mt-4 max-w-xl font-serif text-xl italic leading-snug">{project.description}</p>
        ) : (
          <div className="flex flex-wrap gap-x-8 gap-y-2 mt-6 editorial-num text-graphite">
            {project.client && <span>Cliente — {project.client}</span>}
            {project.year && <span>Ano — {project.year}</span>}
            <span>Disciplina — {project.discipline.join(", ")}</span>
            {project.role && <span>Papel — {project.role}</span>}
          </div>
        )}

        {project.challenge && (
          <p className="font-serif italic text-2xl md:text-3xl max-w-2xl mt-10">
            {project.challenge}
          </p>
        )}
      </header>

      {isArchive && project.cover ? (
        <ArchiveShowcase cover={project.cover} />
      ) : (
        <>
        {/* Projetos em pranchas contínuas começam direto na sequência original;
            a capa de miniatura não é repetida nem separada do conteúdo. */}
        {!isContinuousCase && (
          <div className={isPride || project.behanceUrl ? "mt-8 px-5 md:mt-16 md:px-8" : "mt-8 md:mt-16"}>
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
            ) : project.behanceUrl && project.cover ? (
              <div className="relative mx-auto max-w-4xl" style={{ aspectRatio: project.coverRatio }}>
                <Image src={project.cover} alt={project.title} fill sizes="(max-width: 768px) 90vw, 896px" className="object-contain" />
              </div>
            ) : (
              <ProjectCover
                project={project}
                priority
                className="w-full aspect-[16/10] md:aspect-[21/9]"
              />
            )}
          </div>
        )}
  
        <div className="px-5 md:px-8 mt-8 md:mt-16 grid md:grid-cols-12 gap-4">
          <p className="md:col-span-6 md:col-start-4 text-lg md:text-xl leading-relaxed">
            {project.description}
          </p>
        </div>
  


        {/* Galeria editorial: formatos reais, sem recortes e com movimento suave */}
        {project.images && project.images.length > 0 && (
          <ProjectGallery
            images={project.images}
            presentation={isContinuousCase}
          />
        )}

        {/* O link externo aparece depois da leitura completa das pranchas. */}
        {project.behanceUrl && (
          <div className="px-5 pt-5 md:px-8">
            <a href={project.behanceUrl} target="_blank" rel="noreferrer" className="marker-underline">
              Ver projeto completo no Behance ↗
            </a>
          </div>
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

      <div className="px-5 md:px-8 mt-14 pt-6 border-t border-ink/10 flex flex-wrap items-center justify-between gap-5 md:mt-24 md:pt-10">
        <Link href={project.behanceUrl ? "/work" : "/#trabalho"} className="editorial-num border-b border-ink/40 pb-1">
          ← Trabalhos
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
