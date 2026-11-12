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
      <div className="flex items-center justify-between px-5 md:px-8 py-4">
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
          onClick={() => setOpen((v) => !v)}
          className="nav-menu-button md:hidden editorial-num inline-flex min-h-11 items-center gap-2 rounded-full border border-[#25251D]/60 bg-[#FFE009] px-4 py-2.5 font-semibold text-[#25251D]"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu de navegação" : "Abrir menu de navegação"}
        >
          <span aria-hidden="true" className="nav-menu-spark">✳</span>
          <span>{open ? "Fechar" : "Menu"}</span>
          <span aria-hidden="true" className="nav-menu-arrow">{open ? "×" : "↗"}</span>
        </button>
      </div>

      {isHome && !open && !scrolled && (
        <div className="nav-menu-hint pointer-events-none absolute right-5 top-[calc(100%+5px)] flex items-center gap-2 rounded-sm bg-[#FFE009] px-3 py-2 text-[#22271C] shadow-sm md:right-8" aria-hidden="true">
          <span className="font-serif text-sm italic">tem mais por aqui</span>
          <svg viewBox="0 0 24 20" width="26" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M2 17 Q8 3 21 4 M14 2 L21 4 L18 11" />
          </svg>
        </div>
      )}

      {open && (
        <nav
          id="mobile-menu"
          className="md:hidden bg-[#FCFAF4] border-t border-[#27291F]/15 px-5 py-6 flex flex-col gap-5 shadow-xl"
        >
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="nav-mobile-link font-serif italic text-2xl min-h-11 flex items-center justify-between border-b border-[#A88735]/20 pb-2"
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
