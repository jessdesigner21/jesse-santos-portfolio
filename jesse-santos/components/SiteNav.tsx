"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/#trabalho", label: "Trabalho" },
  { href: "/movimento", label: "Movimento" },
  { href: "/clientes", label: "Clientes" },
  { href: "/sobre", label: "Sobre" },
  { href: "/#contato", label: "Contato" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[#FCF9F1]/95 backdrop-blur-sm md:bg-off-white/90"
          : isHome
            ? "bg-[#FCFAF4]/95 md:bg-transparent"
            : "bg-[#FCF9F1]/95 md:bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-5 py-3.5 md:px-8 md:py-4">
        <Link
          href="/"
          className="font-grotesk font-bold tracking-tight text-sm md:text-base"
          data-cursor="ver"
        >
          JESSE SANTOS
        </Link>

        <nav aria-label="Navegação principal" className="nav-cluster hidden md:flex items-center gap-6 rounded-full border border-[#27291F]/15 bg-[#FCFAF4]/90 px-5 py-3 editorial-num shadow-[0_3px_20px_rgba(50,49,35,0.06)]">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="nav-marker"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="nav-menu-button inline-flex min-h-11 items-center gap-2.5 rounded-full border border-[#29271D]/25 bg-[#FCFAF4]/95 px-4 py-2 font-mono text-[0.68rem] font-medium uppercase tracking-[0.10em] text-[#25251D] transition-colors duration-200 hover:border-[#A88735] hover:bg-[#F5F0E4] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu de navegação" : "Abrir menu de navegação"}
        >
          <span>{open ? "Fechar" : "Menu"}</span>
          <svg
            aria-hidden="true"
            width="17"
            height="17"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          >
            {open ? (
              <>
                <path d="M4 4L16 16" />
                <path d="M16 4L4 16" />
              </>
            ) : (
              <>
                <path d="M3 7H17" />
                <path d="M3 13H17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          className="md:hidden border-t border-[#27291F]/15 bg-[#FCFAF4]/98 px-5 py-4 flex flex-col gap-2 shadow-[0_14px_24px_rgba(32,30,23,0.08)]"
        >
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="nav-mobile-link font-serif italic text-[1.35rem] min-h-12 flex items-center justify-between border-b border-[#A88735]/20 py-2"
            >
              {l.label}
              <span aria-hidden="true" className="text-[#5A642E] text-lg">↗</span>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
