import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";
import { disciplines } from "@/data/projects";

export const metadata: Metadata = {
  title: "Sobre — Jesse Santos",
};

export default function SobrePage() {
  return (
    <div className="pt-28 md:pt-36 pb-24">
      <div className="px-5 md:px-8">
        <p className="editorial-num mb-4">Perfil profissional</p>
        <h1 className="font-serif italic font-light text-5xl md:text-8xl leading-[0.9] mb-4">
          Como Jesse
          <br />
          trabalha.
        </h1>
      </div>
      <AboutSection />
      <div className="px-5 md:px-8 mt-8 border-t border-ink/10 pt-12">
        <p className="editorial-num mb-6">Ferramentas & processo</p>
        <div className="flex flex-wrap gap-x-10 gap-y-3">
          {disciplines.map((d) => (
            <span key={d} className="font-grotesk text-lg">
              {d}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
