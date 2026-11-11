export type Client = {
  name: string;
  /** caminho para logo, se disponível — opcional, a UI funciona sem logo */
  logo?: string;
  industry: string;
  services: string[];
  projectSlugs: string[];
  year?: number;
  url?: string;
  agency?: boolean;
  workHref?: string;
};

export const agency = {
  name: "Go Marketing Group",
  logo: "/clients/go-marketing-group.png",
  website: "https://gomarketing.cl/",
  instagram: "https://www.instagram.com/gomkt.cl/",
};

export const clients: Client[] = [
  {
    name: "Grupo Tattersall",
    agency: true,
    workHref: "/work/grupo-tattersall/apresentacao",
    industry: "Corporativo",
    services: ["Apresentações", "Direção Visual"],
    projectSlugs: ["grupo-tattersall"],
  },
  {
    name: "Corf",
    agency: true,
    industry: "",
    services: [],
    projectSlugs: [],
  },
  {
    name: "Euro",
    agency: true,
    industry: "",
    services: [],
    projectSlugs: [],
  },
  {
    name: "Grupo Petrinovic",
    agency: true,
    workHref: "/work/grupo-tattersall/pecas-graficas#salud-laboral",
    industry: "Saúde ocupacional",
    services: ["Peças gráficas", "Vídeo"],
    projectSlugs: ["grupo-tattersall"],
  },
  {
    name: "Biogreen",
    agency: true,
    workHref: "/work/grupo-tattersall/pecas-graficas#biogreen",
    industry: "Bem-estar",
    services: ["Design de pins"],
    projectSlugs: ["grupo-tattersall"],
  },
  {
    name: "GYMSA",
    agency: true,
    industry: "Indústria",
    services: [],
    projectSlugs: [],
  },
  {
    name: "eLights",
    agency: true,
    industry: "Iluminação",
    services: [],
    projectSlugs: [],
  },
  {
    name: "Fabrimetal",
    workHref: "/movimento#fabrimetalsa",
    industry: "Indústria",
    services: ["Design gráfico", "Edição de vídeo"],
    projectSlugs: [],
  },
  {
    name: "Centro Luminus",
    workHref: "/movimento#centroluminus",
    industry: "Saúde",
    services: ["Edição de vídeo"],
    projectSlugs: [],
  },
  {
    name: "Alpha/ADOs",
    workHref: "/work/grupo-tattersall/pecas-graficas#alpha-ados",
    industry: "Campanha",
    services: ["Design gráfico"],
    projectSlugs: ["grupo-tattersall"],
  },
  {
    name: "DOSP",
    industry: "",
    services: ["Design gráfico"],
    projectSlugs: [],
  },
  {
    name: "DOT Solutions",
    industry: "",
    services: ["Design gráfico"],
    projectSlugs: [],
  },
  {
    name: "ESE Maquinarias",
    industry: "",
    services: ["Design gráfico"],
    projectSlugs: [],
  },
  {
    name: "JIE",
    industry: "",
    services: ["Design gráfico"],
    projectSlugs: [],
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
