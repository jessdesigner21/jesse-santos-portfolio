"use client";

import Link from "next/link";
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-off-white/80 backdrop-blur-md" : "bg-transparent"
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

        <nav className="hidden md:flex items-center gap-8 editorial-num">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="hover:text-accent transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden editorial-num border border-ink px-3 py-2"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? "Fechar" : "Menu"}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          className="md:hidden bg-off-white border-t border-ink/10 px-5 py-6 flex flex-col gap-5"
        >
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-serif text-3xl"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
