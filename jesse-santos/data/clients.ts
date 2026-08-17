/**
 * ─────────────────────────────────────────────────────────────────────────
 * CAMADA DE DADOS — CLIENTES
 * ─────────────────────────────────────────────────────────────────────────
 * Cada cliente se conecta a projeto(s) via `projectSlugs` (deve bater com
 * o campo `slug` em /data/projects.ts). A seção de clientes na home lê
 * este array e resolve os projetos automaticamente — não edite a UI.
 *
 * Apenas nomes confirmados no Behance/material fornecido estão listados.
 * Para adicionar um cliente novo: copie o formato abaixo.
 * ─────────────────────────────────────────────────────────────────────────
 */

export type Client = {
  name: string;
  /** caminho para logo, se disponível — opcional, a UI funciona sem logo */
  logo?: string;
  industry: string;
  services: string[];
  projectSlugs: string[];
  year?: number;
  url?: string;
};

export const clients: Client[] = [
  {
    name: "Grupo Tattersall",
    industry: "Corporativo",
    services: ["Apresentações", "Direção Visual"],
    projectSlugs: ["grupo-tattersall"],
  },
  {
    name: "Glow Beauty",
    industry: "Beleza",
    services: ["Identidade Visual", "Social Media"],
    projectSlugs: ["glow-beauty"],
  },
  {
    name: "Cantim do Vin",
    industry: "Vinícola / Bebidas",
    services: ["Identidade Visual"],
    projectSlugs: ["cantim-do-vin"],
  },
  {
    name: "Amarelo",
    industry: "Marca",
    services: ["Identidade Visual"],
    projectSlugs: ["amarelo"],
  },
  {
    name: "Flash Food",
    industry: "Food Service",
    services: ["Identidade Visual", "Design Gráfico"],
    projectSlugs: ["flash-food"],
  },
];

export function getClientProjects(client: Client) {
  return client.projectSlugs;
}
