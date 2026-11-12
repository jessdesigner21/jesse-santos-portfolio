import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";

export const metadata: Metadata = {
  title: "Sobre — Jesse Santos",
};

export default function SobrePage() {
  return (
    <div className="pt-28 md:pt-36 pb-24">
      <div className="px-5 md:px-8">
        <div className="editorial-page-header">
          <p className="editorial-num editorial-page-kicker">04 / Perfil profissional</p>
          <h1 className="editorial-page-display">Como Jesse<span className="editorial-page-script">trabalha.</span></h1>
          <p className="editorial-page-subtitle">Design tem processo, intuição e um pouco de quem a gente é.</p>
        </div>
      </div>
      <AboutSection />

    </div>
  );
}
