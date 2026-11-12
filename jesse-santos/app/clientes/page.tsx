import type { Metadata } from "next";
import ClientsSection from "@/components/ClientsSection";

export const metadata: Metadata = {
  title: "Clientes — Jesse Santos",
};

export default function ClientesPage() {
  return (
    <article className="paper-surface bg-[#F7F4EB] pt-28 md:pt-36">
      <header className="editorial-page-header mx-auto max-w-[1440px] px-5 md:px-8">
        <span className="editorial-num editorial-page-kicker">03 / Colaborações</span>
        <h1 className="editorial-page-display">Marcas & clientes<span className="editorial-page-script">em parceria.</span></h1>
        <p className="editorial-page-subtitle">Cada marca tem uma voz. O design encontra maneiras de fazê-la aparecer.</p>
      </header>
      <ClientsSection />
    </article>
  );
}
