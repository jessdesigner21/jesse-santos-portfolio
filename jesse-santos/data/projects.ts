/**
 * ─────────────────────────────────────────────────────────────────────────
 * CAMADA DE DADOS — PROJETOS
 * ─────────────────────────────────────────────────────────────────────────
 */

export type Discipline =
  | "Design Gráfico"
  | "Direção Visual"
  | "Social Media"
  | "Identidade Visual"
  | "Fotografia"
  | "Vídeo"
  | "Motion"
  | "Apresentações"
  | "Editorial";

export type MediaItem = {
  src: string;
  alt: string;
  ratio?: string;
};

export type VideoItem = {
  title: string;
  format: "16:9" | "9:16" | "1:1";
  videoUrl?: string;
  poster?: string;
  description?: string;
};

export type Project = {
  title: string;
  slug: string;
  client?: string;
  year?: number;
  discipline: Discipline[];
  role?: string;
  description: string;
  challenge?: string;
  cover?: string;
  coverRatio?: string;
  images?: MediaItem[];
  videos?: VideoItem[];
  poster?: string;
  accentColor: string;
  featured?: boolean;
  layout:
    | "gallery"
    | "video-lead"
    | "reels"
    | "editorial"
    | "presentation";
  credits?: { role: string; name: string }[];
  behanceUrl?: string;
  coverTreatment?: "serif" | "grotesk" | "mono-grid";
};

export const projects: Project[] = [
  /* =========================================================
     01 — FALAS DE ORGULHO
  ========================================================= */

  {
    title: "Falas de Orgulho",
    slug: "falas-de-orgulho",

    discipline: ["Editorial", "Design Gráfico"],

    role: "Conceito, direção de arte e design",

    description:
      "Projeto autoral de comunicação visual que transforma narrativas LGBTQIAPN+ em uma campanha gráfica construída por tipografia, cor, fotografia, ilustração e intervenção urbana.",

    challenge:
      "Criar uma linguagem visual capaz de amplificar diferentes vozes sem reduzir suas histórias a uma única estética.",

    cover: "/1ec70d211500145.6723e21b19ba8.webp",
    coverRatio: "16/9",

    images: [
      {
        src: "/81592a211500145.6723e21b17142.webp",
        alt: "Pelo direito de ser — Falas de Orgulho",
        ratio: "4/5",
      },
      {
        src: "/6e0050211500145.6723e21b18993.webp",
        alt: "Nosso amor é resistência — Falas de Orgulho",
        ratio: "4/5",
      },
      {
        src: "/b31634211500145.6723e21b18278.webp",
        alt: "Quem são os LGBTQIAP+ — Falas de Orgulho",
        ratio: "4/5",
      },
      {
        src: "/9847f1211500145.6723e21b193b8.webp",
        alt: "Aplicação urbana da campanha Falas de Orgulho",
        ratio: "16/9",
      },
      {
        src: "/7d3e4c211500145.6723e21b1767d (1).webp",
        alt: "Cartazes da campanha Falas de Orgulho em ambiente externo",
        ratio: "16/9",
      },
      {
        src: "/1ec70d211500145.6723e21b19ba8.webp",
        alt: "Painel urbano Falas de Orgulho",
        ratio: "16/9",
      },
      {
        src: "/8be1b5211500145.6723e21b18ec1 (1).webp",
        alt: "Cartazes Falas de Orgulho aplicados em ambiente urbano",
        ratio: "16/9",
      },
    ],

    accentColor: "#FF4BC8",
    featured: true,
    layout: "editorial",
    coverTreatment: "serif",
  },

  /* =========================================================
     02 — GRUPO TATTERSALL
  ========================================================= */

  {
    title: "Apresentação de Vendas",
    slug: "grupo-tattersall",
    client: "Grupo Tattersall",

    discipline: ["Apresentações", "Direção Visual"],

    role: "Design de apresentação",

    description:
      "Sistema visual para apresentação comercial — hierarquia clara, ritmo de slide e identidade aplicada a um material de vendas.",

    challenge:
      "Traduzir um discurso comercial denso em uma sequência visual que sustenta atenção slide após slide.",

    accentColor: "#2D6BFF",
    featured: true,
    layout: "presentation",
    coverTreatment: "grotesk",

    behanceUrl: "https://www.behance.net/jessesantos1",
  },

  /* =========================================================
     03 — SOCIAL MEDIA / BELEZA
     Continua no portfólio, mas NÃO ocupa a capa.
  ========================================================= */

  {
    title: "Social Media — Beleza",
    slug: "social-media-beleza",

    discipline: ["Social Media", "Design Gráfico"],

    role: "Direção de arte / peças sociais",

    description:
      "Conjunto de peças para redes sociais do universo de beleza — grid, cor e tipografia pensados para consumo rápido sem perder consistência de marca.",

    challenge:
      "Criar um sistema modular de posts que sustente identidade em alto volume de publicação.",

    accentColor: "#E8447A",

    featured: false,

    layout: "gallery",
    coverTreatment: "serif",
  },

  /* =========================================================
     04 — GLOW BEAUTY
  ========================================================= */

  {
    title: "Glow Beauty",
    slug: "glow-beauty",
    client: "Glow Beauty",

    discipline: ["Identidade Visual", "Social Media"],

    role: "Identidade visual / social media",

    description:
      "Identidade e aplicação social para marca de beleza — paleta quente, tipografia suave e fotografia como protagonista.",

    accentColor: "#E8447A",

    layout: "gallery",
    coverTreatment: "serif",
  },

  /* =========================================================
     05 — SOCIAL MEDIA / HAMBURGUERIA
  ========================================================= */

  {
    title: "Social Media — Hamburgueria",
    slug: "social-media-hamburgueria",

    discipline: ["Social Media", "Design Gráfico"],

    role: "Direção de arte / peças sociais",

    description:
      "Peças sociais para hamburgueria — apetite visual traduzido em contraste alto, cor quente e tipografia robusta.",

    accentColor: "#B23A2E",

    layout: "gallery",
    coverTreatment: "grotesk",
  },

  /* =========================================================
     06 — CANTIM DO VIN
     É o terceiro projeto em destaque na capa.
  ========================================================= */

  {
    title: "Cantim do Vin",
    slug: "cantim-do-vin",
    client: "Cantim do Vin",

    discipline: [
      "Identidade Visual",
      "Design Gráfico",
      "Direção Visual",
    ],

    role: "Identidade visual, direção de arte e aplicações",

    description:
      "Identidade visual para uma marca ligada ao universo do vinho, construída a partir do contraste entre uma tipografia expressiva, ilustrações espontâneas e uma paleta reduzida de roxo, preto e branco.",

    challenge:
      "Criar uma identidade com personalidade e sofisticação, sem recorrer aos códigos excessivamente formais do universo tradicional do vinho.",

    cover: "/behance_02.png",
    coverRatio: "16/9",

    images: [
      {
        src: "/behance_04.png",
        alt: "Sistema visual Cantim do Vin com logotipo, tipografia, ilustrações e padrões",
        ratio: "16/9",
      },
      {
        src: "/behance_05.png",
        alt: "Aplicação da identidade Cantim do Vin em materiais impressos",
        ratio: "16/9",
      },
      {
        src: "/behance_07.png",
        alt: "Sinalização externa Cantim do Vin aplicada em fachada de tijolos",
        ratio: "16/9",
      },
      {
        src: "/behance_08.png",
        alt: "Identidade Cantim do Vin aplicada em avental e sistema de ilustrações",
        ratio: "16/9",
      },
      {
        src: "/behance_06.png",
        alt: "Cardápio e embalagem para vinho da identidade Cantim do Vin",
        ratio: "16/9",
      },
      {
        src: "/behance_09.png",
        alt: "Logotipo Cantim do Vin sobre fotografia em preto e branco",
        ratio: "16/9",
      },
    ],

    accentColor: "#4B2E83",

    featured: true,

    layout: "gallery",
    coverTreatment: "serif",
  },

  /* =========================================================
     07 — AMARELO
  ========================================================= */

  {
    title: "Amarelo",
    slug: "amarelo",
    client: "Amarelo",

    discipline: ["Identidade Visual"],

    role: "Identidade visual completa",

    description:
      "Sistema de marca construído em torno de uma única cor como assinatura — identidade enxuta, direta e memorável.",

    accentColor: "#F2B705",

    layout: "gallery",
    coverTreatment: "mono-grid",
  },

  /* =========================================================
     08 — FLASH FOOD
  ========================================================= */

  {
    title: "Flash Food",
    slug: "flash-food",
    client: "Flash Food",

    discipline: ["Identidade Visual", "Design Gráfico"],

    role: "Identidade visual completa",

    description:
      "Marca para food service rápido — velocidade traduzida em forma: ângulos, tipografia condensada e cor ácida.",

    accentColor: "#C6FF3D",

    featured: true,

    layout: "gallery",
    coverTreatment: "grotesk",
  },

  /* =========================================================
     09 — CAFETERIA
  ========================================================= */

  {
    title: "Cafeteria",
    slug: "cafeteria",

    discipline: ["Identidade Visual", "Design Gráfico"],

    role: "Identidade visual completa",

    description:
      "Identidade para cafeteria — calor, textura e uma paleta terrosa que remete ao produto sem clichê de grão de café.",

    accentColor: "#B98D6F",

    layout: "gallery",
    coverTreatment: "serif",
  },

  /* =========================================================
     10 — FOTOGRAFIA EDITORIAL
  ========================================================= */

  {
    title: "Identidade Fotográfica Editorial",
    slug: "identidade-fotografica-editorial",

    discipline: ["Fotografia", "Editorial", "Direção Visual"],

    role: "Fotografia e direção de arte",

    description:
      "Ensaio fotográfico com tratamento editorial — direção de arte, curadoria de imagem e composição de página aplicadas à fotografia autoral.",

    accentColor: "#0B0B0A",

    layout: "editorial",
    coverTreatment: "mono-grid",
  },
];

/* =========================================================
   DISCIPLINAS
========================================================= */

export const disciplines: Discipline[] = [
  "Design Gráfico",
  "Direção Visual",
  "Social Media",
  "Identidade Visual",
  "Fotografia",
  "Vídeo",
  "Motion",
  "Apresentações",
  "Editorial",
];

/* =========================================================
   FUNÇÕES AUXILIARES
========================================================= */

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getProjectsByDiscipline(discipline: Discipline) {
  return projects.filter((project) =>
    project.discipline.includes(discipline)
  );
}
