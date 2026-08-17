import type { Metadata } from "next";
import ClientsSection from "@/components/ClientsSection";

export const metadata: Metadata = {
  title: "Clientes — Jesse Santos",
};

export default function ClientesPage() {
  return (
    <div className="pt-28 md:pt-36 pb-24">
      <div className="px-5 md:px-8">
        <p className="editorial-num mb-4">Marcas e clientes</p>
        <h1 className="font-serif italic font-light text-5xl md:text-8xl leading-[0.9] mb-8">
          Quem já confiou
          <br />
          no trabalho.
        </h1>
      </div>
      <ClientsSection showLabel={false} />
    </div>
  );
}
