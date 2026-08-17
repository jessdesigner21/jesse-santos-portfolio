import type { Metadata } from "next";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource-variable/fraunces/wght.css";
import "@fontsource-variable/fraunces/wght-italic.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Jesse Santos — Designer Gráfico / Direção Visual",
  description:
    "Jesse Santos. Design gráfico, identidade visual, social media, fotografia e conteúdo em movimento. Trabalho, não manifesto.",
  openGraph: {
    title: "Jesse Santos — Designer Gráfico / Direção Visual",
    description:
      "Design gráfico, identidade visual, social media, fotografia e conteúdo em movimento.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-full flex flex-col bg-off-white text-ink overflow-x-hidden">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-ink focus:text-off-white focus:px-4 focus:py-2"
        >
          Pular para o conteúdo
        </a>
        <CustomCursor />
        <SiteNav />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
