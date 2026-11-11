import type { Metadata } from "next";
import ClientsSection from "@/components/ClientsSection";

export const metadata: Metadata = {
  title: "Clientes — Jesse Santos",
};

export default function ClientesPage() {
  return (
    <article className="paper-surface bg-[#F7F4EB] pt-28 md:pt-36">
      <header className="mx-auto max-w-[1440px] px-5 md:px-8">
        <h1 className="archive-collection-title">
          Clientes<span className="text-[var(--portfolio-yellow)]">.</span>
        </h1>
      </header>
      <ClientsSection />
    </article>
  );
}
