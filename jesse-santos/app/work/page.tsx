import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { publishedProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Todos os trabalhos — Jesse Santos",
};

export default function WorkPage() {
  return (
    <article className="paper-surface bg-[#F7F4EB] px-5 pb-16 pt-24 md:px-8 md:pb-24 md:pt-32">
      <div className="mx-auto max-w-[1376px]">
        <Link href="/#trabalho" className="marker-underline text-sm">← Trabalhos selecionados</Link>
        <header className="editorial-page-header">
          <span className="editorial-num editorial-page-kicker">01 / Design & imagem</span>
          <h1 className="editorial-page-display">Todos os trabalhos<span className="editorial-page-script">em imagens.</span></h1>
          <div className="editorial-page-bottom">
            <p className="editorial-page-subtitle">Cada projeto é um pedaço de caminho. Explore por imagem, identidade e experimentação.</p>
            <Link href="/movimento" className="editorial-page-switch">02 / Vídeo & motion <span aria-hidden="true">↗</span></Link>
          </div>
        </header>
        <ul className="grid gap-7 min-[600px]:grid-cols-2 md:gap-10 lg:grid-cols-3">
          {publishedProjects.map((project) => (
            <li key={project.slug} className="editorial-catalog-card">
              <Link href={`/work/${project.slug}`} className="group block editorial-catalog-link">
                <div className="editorial-catalog-image relative aspect-[800/626] overflow-hidden">
                  <Image src={project.cover!} alt="" fill sizes="(max-width: 600px) 90vw, (max-width: 1024px) 45vw, 31vw" className="object-contain transition-transform duration-300 group-hover:scale-[1.02]" />
                </div>
                <h2 className="editorial-catalog-title mt-4 font-serif text-xl font-light italic leading-tight md:text-[1.7rem]">{project.title} <span aria-hidden="true">↗</span></h2>
                <p className="editorial-num mt-2 text-[#506047]">{project.discipline[0]}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
