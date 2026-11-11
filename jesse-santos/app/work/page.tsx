import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { additionalProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Mais trabalhos — Jesse Santos",
};

export default function WorkPage() {
  return (
    <article className="paper-surface bg-[#F7F4EB] px-5 pb-16 pt-24 md:px-8 md:pb-24 md:pt-32">
      <div className="mx-auto max-w-[1376px]">
        <Link href="/#trabalho" className="marker-underline text-sm">← Trabalhos selecionados</Link>
        <h1 className="archive-collection-title mb-6 md:mb-12">Mais trabalhos</h1>
        <ul className="grid gap-7 min-[600px]:grid-cols-2 md:gap-10 lg:grid-cols-3">
          {additionalProjects.map((project) => (
            <li key={project.slug} className="border-t border-ink/15 pt-3">
              <Link href={`/work/${project.slug}`} className="group block">
                <div className="relative aspect-[800/626] overflow-hidden">
                  <Image src={project.cover!} alt="" fill sizes="(max-width: 600px) 90vw, (max-width: 1024px) 45vw, 31vw" className="object-contain transition-transform duration-300 group-hover:scale-[1.02]" />
                </div>
                <h2 className="mt-3 font-serif text-xl italic leading-tight md:text-2xl">{project.title} <span aria-hidden="true">↗</span></h2>
                <p className="mt-1 text-sm text-[#655b4c]">{project.discipline[0]}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
