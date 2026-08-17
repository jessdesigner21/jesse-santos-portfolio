/**
 * ─────────────────────────────────────────────────────────────────────────
 * CAMADA DE DADOS — EM MOVIMENTO (vídeo / motion / edição)
 * ─────────────────────────────────────────────────────────────────────────
 * Nenhum arquivo de vídeo real foi fornecido ainda, então este array
 * começa vazio de propósito — a seção "EM MOVIMENTO" na home só é
 * renderizada quando houver pelo menos 1 item aqui (ver
 * components/MotionSection.tsx). Isso evita mostrar players falsos ou
 * texto de placeholder ao visitante.
 *
 * COMO ATIVAR A SEÇÃO
 * Adicione objetos ao array abaixo. `videoUrl` aceita:
 *  - caminho local de arquivo em /public (ex: "/motion/reel-01.mp4")
 *  - embed externo (YouTube/Vimeo) — passe a URL de embed completa
 * `poster` é a imagem exibida antes do play / usada como capa do card.
 * `format` controla o layout: "16:9" (cinematográfico, quase full-bleed),
 * "9:16" (reel vertical flutuante) ou "1:1" (quadrado, social).
 *
 * Vídeos também podem ser embutidos DENTRO de um projeto específico —
 * nesse caso use o campo `videos` do próprio projeto em
 * /data/projects.ts, não este arquivo. Este array é para a seção
 * dedicada "EM MOVIMENTO" que atravessa a home.
 * ─────────────────────────────────────────────────────────────────────────
 */

import type { VideoItem } from "./projects";

export type MotionPiece = VideoItem & {
  slug: string;
  client?: string;
  year?: number;
  role?: string;
};

export const motionPieces: MotionPiece[] = [
  // Exemplo de como adicionar (remova o comentário e preencha com dados reais):
  // {
  //   slug: "reel-institucional-2026",
  //   title: "Reel Institucional",
  //   client: "Nome do Cliente",
  //   year: 2026,
  //   role: "Edição e motion",
  //   format: "9:16",
  //   videoUrl: "/motion/reel-institucional-2026.mp4",
  //   poster: "/motion/reel-institucional-2026-poster.jpg",
  //   description: "Peça curta de social media com motion aplicado sobre fotografia.",
  // },
];
