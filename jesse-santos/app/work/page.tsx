import type { Metadata } from "next";
import WorkExplorer from "@/components/WorkExplorer";

export const metadata: Metadata = {
  title: "Trabalho — Jesse Santos",
};

export default function WorkPage() {
  return (
    <div className="pt-28 md:pt-36 px-5 md:px-8 pb-24">
      <p className="editorial-num mb-4">Todos os trabalhos</p>
      <h1 className="font-serif italic font-light text-5xl md:text-8xl leading-[0.9] mb-16">
        Ver por projeto,
        <br />
        cliente ou disciplina.
      </h1>
      <WorkExplorer />
    </div>
  );
}
