"use client";

import { useEffect } from "react";
import { setAccent } from "@/lib/accent";

/**
 * Aplica a accentColor do projeto como cor de interface enquanto a página
 * de case está aberta, e reverte ao sair (ver PRD: "o portfólio deve
 * permitir que o trabalho contamine o site").
 */
export default function ProjectAccentSetter({ color }: { color: string }) {
  useEffect(() => {
    setAccent(color);
    return () => setAccent(null);
  }, [color]);
  return null;
}
