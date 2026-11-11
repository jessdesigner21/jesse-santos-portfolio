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
     02 — ARQUIVO VIVO | RECORTES EM DIFERENTES FORMATOS
  ========================================================= */

  {
    title: "Arquivo Vivo",
    slug: "grupo-tattersall", // Mantém o endereço existente para não quebrar links.
    discipline: ["Design Gráfico", "Apresentações", "Vídeo"],
    description:
      "Uma seleção de trabalhos em diferentes formatos, do design de apresentações e peças impressas à edição de vídeos para marcas.",
    cover: "/projects/arquivo-vivo/capa.webp",
    coverRatio: "8/5",
    accentColor: "#A88735",
    featured: true,
    layout: "editorial",
    coverTreatment: "grotesk",
  },

  /* =========================================================
     03 — SOCIAL MEDIA / BELEZA
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
    cover: "/projects/behance/social-media-beleza-capa.webp",
    coverRatio: "800 / 626",
    behanceUrl: "https://www.behance.net/gallery/216736893/Social-Media-Beleza",
    images: [
      { src: "/projects/behance/social-media-beleza-01.webp", alt: "Prancha 1 de Social Media — Beleza" },
      { src: "/projects/behance/social-media-beleza-02.webp", alt: "Prancha 2 de Social Media — Beleza" },
    ],
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
    cover: "/projects/behance/glow-beauty-capa.webp",
    coverRatio: "800 / 626",
    behanceUrl: "https://www.behance.net/gallery/216726705/Glow-Beauty",
    images: [
      { src: "/projects/behance/glow-beauty-01.webp", alt: "Prancha 1 de Glow Beauty" },
      { src: "/projects/behance/glow-beauty-02.webp", alt: "Prancha 2 de Glow Beauty" },
      { src: "/projects/behance/glow-beauty-03.webp", alt: "Prancha 3 de Glow Beauty" },
    ],
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
    cover: "/projects/behance/social-media-hamburgueria-capa.webp",
    coverRatio: "800 / 626",
    behanceUrl: "https://www.behance.net/gallery/204358135/SOCIAL-MEDIA-HAMBURGUERIA",
    images: [
      { src: "/projects/owner/hamburgueria/01.jpg", alt: "Hambúrguer trufado e personagens ilustrados" },
      { src: "/projects/owner/hamburgueria/02.jpg", alt: "Onion rings e lettering amarelo sobre verde" },
      { src: "/projects/owner/hamburgueria/03.jpg", alt: "Monte seu lanche — composição tipográfica" },
      { src: "/projects/owner/hamburgueria/04.jpg", alt: "Pedido chegou — campanha de delivery" },
      { src: "/projects/owner/hamburgueria/05.jpg", alt: "Porção de batatas e molhos" },
      { src: "/projects/owner/hamburgueria/10.jpg", alt: "Cardápio dos queridinhos da galera" },
      { src: "/projects/owner/hamburgueria/11.jpg", alt: "Hamburgão em cartaz vertical" },
      { src: "/projects/owner/hamburgueria/12.jpg", alt: "Jogo da velha com produtos do delivery" },
      { src: "/projects/owner/hamburgueria/13.jpg", alt: "Depoimento ilustrado sobre a hamburgueria" },
      { src: "/projects/owner/hamburgueria/14.jpg", alt: "Batatas fritas e ilustração sorridente" },
    ],
    images: [
      { src: "/projects/behance/social-media-hamburgueria-capa.webp", alt: "Onion Rings — capa da identidade visual da hamburgueria" },
      { src: "/projects/behance/social-media-hamburgueria-01.webp", alt: "Peça 1 da identidade visual Social Media — Hamburgueria" },
      { src: "/projects/behance/social-media-hamburgueria-02.webp", alt: "Peça 2 da identidade visual Social Media — Hamburgueria" },
      { src: "/projects/behance/social-media-hamburgueria-03.webp", alt: "Peça 3 da identidade visual Social Media — Hamburgueria" },
      { src: "/projects/behance/social-media-hamburgueria-04.webp", alt: "Peça 4 da identidade visual Social Media — Hamburgueria" },
      { src: "/projects/behance/social-media-hamburgueria-05.webp", alt: "Peça 5 da identidade visual Social Media — Hamburgueria" },
      { src: "/projects/behance/social-media-hamburgueria-06.webp", alt: "Peça 6 da identidade visual Social Media — Hamburgueria" },
      { src: "/projects/behance/social-media-hamburgueria-07.webp", alt: "Peça 7 da identidade visual Social Media — Hamburgueria" },
      { src: "/projects/behance/social-media-hamburgueria-08.webp", alt: "Peça 8 da identidade visual Social Media — Hamburgueria" },
      { src: "/projects/behance/social-media-hamburgueria-09.webp", alt: "Peça 9 da identidade visual Social Media — Hamburgueria" },
      { src: "/projects/behance/social-media-hamburgueria-10.webp", alt: "Peça 10 da identidade visual Social Media — Hamburgueria" },
      { src: "/projects/behance/social-media-hamburgueria-11.webp", alt: "Peça 11 da identidade visual Social Media — Hamburgueria" },
    ],

  },

  /* =========================================================
     MONKEY CAFÉ — IDENTIDADE E APLICAÇÕES
  ========================================================= */
  {
    title: "Monkey Café",
    slug: "monkey-cafe",
    client: "Monkey Café",
    discipline: ["Identidade Visual", "Design Gráfico", "Direção Visual"],
    role: "Identidade visual, direção de arte e embalagens",
    description:
      "Uma marca de café com personalidade e humor. A identidade combina tipografia expressiva, ilustrações de macacos e uma paleta de amarelo, azul profundo e preto, aplicada em cardápios, embalagens e vestuário.",
    challenge:
      "Criar um universo gráfico reconhecível que conecte o ritual do café a uma experiência leve, afetiva e cheia de caráter.",
    cover: "/projects/owner/monkey-cafe/capa.jpg",
    coverRatio: "16/9",
    images: [
      { src: "/projects/owner/monkey-cafe/menu.jpg", alt: "Cardápio Monkey Café em moldura, apoiado na bancada de madeira" },
      { src: "/projects/owner/monkey-cafe/camiseta.jpg", alt: "Camiseta branca com ilustrações e identidade Monkey Café" },
      { src: "/projects/owner/monkey-cafe/caixas.jpg", alt: "Embalagens e sacolas personalizadas Monkey Café" },
      { src: "/projects/owner/monkey-cafe/graos.jpg", alt: "Pacotes de café com ilustração da marca sobre fundo amarelo" },
    ],
    accentColor: "#F0D310",
    layout: "gallery",
    coverTreatment: "grotesk",
  },

  /* =========================================================
     06 — CANTIM DO VIN
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
    cover: "/projects/behance/amarelo-capa.webp",
    coverRatio: "800 / 626",
    behanceUrl: "https://www.behance.net/gallery/203669763/IDENTIDADE-VISUAL-AMARELO",
    images: [
      { src: "/projects/behance/amarelo-01.webp", alt: "Prancha 1 de Amarelo" },
      { src: "/projects/behance/amarelo-02.webp", alt: "Prancha 2 de Amarelo" },
      { src: "/projects/behance/amarelo-03.webp", alt: "Prancha 3 de Amarelo" },
    ],
  },

  /* =========================================================
     08 — FLASH FOOD
     IMPORTANTE:
     As imagens foram criadas como uma narrativa contínua.
     Manter SEMPRE a sequência 01 → 08.
  ========================================================= */

  {
    title: "Flash Food",
    slug: "flash-food",

    client: "Flash Food",

    discipline: [
      "Identidade Visual",
      "Design Gráfico",
      "Direção Visual",
    ],

    role: "Identidade visual, direção de arte e aplicações",

    description:
      "Identidade visual criada para um food truck com linguagem vibrante, espontânea e direta — combinando lettering expressivo, ilustração e aplicações para construir uma marca com energia e personalidade.",

    challenge:
      "Construir uma identidade que traduzisse rapidez e experiência gastronômica sem cair nos códigos visuais genéricos do fast-food.",

    /*
     * A própria primeira prancha funciona como capa.
     */
    cover: "/BEHANCE_01.png",

    coverRatio: "16/9",

    /*
     * NÃO ALTERAR A ORDEM.
     *
     * As pranchas se conectam visualmente.
     * O case deve ser lido verticalmente:
     *
     * 01
     * ↓
     * 02
     * ↓
     * 03
     * ↓
     * 04
     * ↓
     * 05
     * ↓
     * 06
     * ↓
     * 07
     * ↓
     * 08
     */

    images: [
      {
        src: "/BEHANCE_01.png",
        alt: "Abertura da identidade visual Flash Food",
        ratio: "16/9",
      },

      {
        src: "/BEHANCE_02 (1).png",
        alt: "Conceito da marca Flash Food e início da aplicação no food truck",
        ratio: "16/9",
      },

      {
        src: "/BEHANCE_03 (1).png",
        alt: "Continuação da aplicação da identidade Flash Food no food truck",
        ratio: "16/9",
      },

      {
        src: "/BEHANCE_04 (1).png",
        alt: "Aplicação da identidade Flash Food em materiais gráficos",
        ratio: "16/9",
      },

      {
        src: "/BEHANCE_05 (1).png",
        alt: "Sistema de ilustração e aplicação digital da identidade Flash Food",
        ratio: "16/9",
      },

      {
        src: "/BEHANCE_06 (1).png",
        alt: "Aplicação mobile e elementos gráficos da marca Flash Food",
        ratio: "16/9",
      },

      {
        src: "/BEHANCE_07 (1).png",
        alt: "Aplicação da identidade Flash Food em vestuário",
        ratio: "16/9",
      },

      {
        src: "/BEHANCE_08 (1).png",
        alt: "Encerramento do projeto de identidade visual Flash Food",
        ratio: "16/9",
      },
    ],

    /*
     * Laranja é a cor dominante real do projeto.
     */
    accentColor: "#F05A00",

    featured: true,

    /*
     * Usamos presentation porque esse projeto funciona como
     * uma sequência de pranchas conectadas verticalmente,
     * e não como uma galeria de cards independentes.
     */
    layout: "presentation",

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
    cover: "/projects/behance/cafeteria-capa.webp",
    coverRatio: "800 / 626",
    behanceUrl: "https://www.behance.net/gallery/203501555/IDENTIDADE-VISUAL-CAFETERIA",
    images: [
      { src: "/projects/behance/cafeteria-01.webp", alt: "Prancha 1 de Cafeteria" },
      { src: "/projects/behance/cafeteria-02.webp", alt: "Prancha 2 de Cafeteria" },
    ],
  },

  /* =========================================================
     10 — IDENTIDADE FOTOGRÁFICA EDITORIAL
  ========================================================= */

  {
    title: "Identidade Fotográfica Editorial",
    slug: "identidade-fotografica-editorial",

    discipline: [
      "Fotografia",
      "Editorial",
      "Direção Visual",
    ],

    role: "Fotografia e direção de arte",

    description:
      "Ensaio fotográfico com tratamento editorial — direção de arte, curadoria de imagem e composição de página aplicadas à fotografia autoral.",

    accentColor: "#0B0B0A",

    layout: "editorial",

    coverTreatment: "mono-grid",
    cover: "/projects/behance/identidade-fotografica-editorial-capa.webp",
    coverRatio: "800 / 626",
    behanceUrl: "https://www.behance.net/gallery/202347019/PROJETO-IDENTIDADE-FOTOGRAFA-EDITORIAL",
    images: [
      { src: "/projects/behance/identidade-fotografica-editorial-01.webp", alt: "Prancha 1 de Identidade Fotográfica Editorial" },
    ],
  },
  {
    title: "Identidade Visual para Marca",
    slug: "identidade-visual-para-marca",
    discipline: ["Identidade Visual"],
    description: "Projeto de identidade visual apresentado por Jesse Santos no Behance.",
    accentColor: "#A88735",
    layout: "presentation",
    cover: "/projects/behance/identidade-visual-para-marca-capa.webp",
    coverRatio: "800 / 626",
    behanceUrl: "https://www.behance.net/gallery/202330001/Identidade-Visual-para-Marca",
    images: [
      { src: "/projects/behance/identidade-visual-para-marca-01.webp", alt: "Prancha 1 de Identidade Visual para Marca" },
    ],
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

const selectedSlugs = ["falas-de-orgulho", "grupo-tattersall", "cantim-do-vin", "flash-food"];

export const selectedProjects = selectedSlugs.flatMap((slug) => {
  const project = projects.find((entry) => entry.slug === slug);
  return project ? [project] : [];
});

export const additionalProjects = projects.filter((project) => project.cover && !selectedSlugs.includes(project.slug));
export const publishedProjects = [...selectedProjects, ...additionalProjects];

/* =========================================================
   FUNÇÕES AUXILIARES
========================================================= */

export function getProjectBySlug(slug: string) {
  return projects.find(
    (project) => project.slug === slug
  );
}

export function getFeaturedProjects() {
  return projects.filter(
    (project) => project.featured
  );
}

export function getProjectsByDiscipline(
  discipline: Discipline
) {
  return projects.filter((project) =>
    project.discipline.includes(discipline)
  );
}
