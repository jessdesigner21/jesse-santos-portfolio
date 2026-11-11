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
  darkLogo?: boolean;
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
    logo: "/clients/tattersall.webp",
    darkLogo: true,
    workHref: "/work/grupo-tattersall/apresentacao",
    industry: "Agro e equipamentos",
    services: ["Apresentações", "Direção Visual"],
    projectSlugs: ["grupo-tattersall"],
  },
  {
    name: "Kolff",
    agency: true,
    logo: "/clients/kolff.webp",
    industry: "Energia, mineração e indústria",
    services: [],
    projectSlugs: [],
  },
  {
    name: "Grupo Petrinovic",
    agency: true,
    logo: "/clients/petrinovic.webp",
    workHref: "/work/grupo-tattersall/pecas-graficas#salud-laboral",
    industry: "Saúde e bem-estar",
    services: ["Peças gráficas", "Vídeo"],
    projectSlugs: ["grupo-tattersall"],
  },
  {
    name: "Biogreen",
    agency: true,
    logo: "/clients/biogreen.webp",
    darkLogo: true,
    workHref: "/work/grupo-tattersall/pecas-graficas#biogreen",
    industry: "Saúde e bem-estar",
    services: ["Design de pins"],
    projectSlugs: ["grupo-tattersall"],
  },
  {
    name: "GYMSA",
    agency: true,
    logo: "/clients/gymsa.webp",
    darkLogo: true,
    industry: "Energia, mineração e indústria",
    services: ["Design gráfico"],
    projectSlugs: [],
  },
  {
    name: "eLights",
    agency: true,
    logo: "/clients/elights.webp",
    industry: "Iluminação e tecnologia",
    services: ["Design gráfico"],
    projectSlugs: [],
  },
  {
    name: "Fabrimetal",
    agency: true,
    logo: "/clients/fabrimetal.webp",
    workHref: "/movimento#fabrimetalsa",
    industry: "Energia, mineração e indústria",
    services: ["Design gráfico", "Edição de vídeo"],
    projectSlugs: [],
  },
  {
    name: "Centro Luminus",
    agency: true,
    logo: "/clients/centro-luminus.webp",
    workHref: "/movimento#centroluminus",
    industry: "Saúde e bem-estar",
    services: ["Edição de vídeo"],
    projectSlugs: [],
  },
  {
    name: "Alpha/ADOs",
    agency: true,
    logo: "/clients/alpha-ados.webp",
    workHref: "/work/grupo-tattersall/pecas-graficas#alpha-ados",
    industry: "Comunidade e campanhas",
    services: ["Design gráfico"],
    projectSlugs: ["grupo-tattersall"],
  },
  {
    name: "DOSP",
    agency: true,
    logo: "/clients/dosp.webp",
    darkLogo: true,
    industry: "Energia, mineração e indústria",
    services: ["Design gráfico"],
    projectSlugs: [],
  },
  {
    name: "DOT Solutions",
    agency: true,
    logo: "/clients/dot-solutions.webp",
    industry: "Iluminação e tecnologia",
    services: ["Design gráfico"],
    projectSlugs: [],
  },
  {
    name: "ESE Maquinarias",
    agency: true,
    logo: "/clients/ese-maquinarias.webp",
    industry: "Energia, mineração e indústria",
    services: ["Design gráfico"],
    projectSlugs: [],
  },
  {
    name: "JIE",
    agency: true,
    logo: "/clients/jie.webp",
    darkLogo: true,
    industry: "Iluminação e tecnologia",
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
