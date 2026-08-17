# Jesse Santos — Portfólio

Site-portfólio experimental construído em Next.js (App Router) + TypeScript +
Tailwind CSS v4 + Framer Motion.

## Rodar localmente

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm run start
```

## Como adicionar conteúdo (sem tocar em UI)

Toda a arquitetura foi feita para que Jesse (ou qualquer pessoa) adicione
trabalho novo apenas editando arquivos de dados — nenhum componente precisa
ser alterado.

- **Projetos** → `/data/projects.ts` (comentário no topo do arquivo explica
  cada campo: title, slug, client, year, discipline, role, description,
  cover, images, videos, accentColor, featured, credits, layout).
- **Clientes** → `/data/clients.ts` (conecta cliente → projeto via `projectSlugs`).
- **Vídeo / Motion / Edição** → `/data/videos.ts` (a seção "Em Movimento" só
  aparece quando este array tiver itens — hoje está vazio de propósito,
  nenhum vídeo real foi fornecido ainda).
- **Contato** → `/data/contact.ts` (e-mail, LinkedIn e Instagram só aparecem
  quando preenchidos — nenhum dado foi inventado).

Assets (imagens/vídeos) vão em `/public`. Enquanto um projeto não tiver
`cover`, o componente `ProjectCover` desenha uma capa tipográfica editorial
autoral (não um placeholder) a partir do título e da `accentColor` — ela some
sozinha assim que a imagem real for adicionada.

## Stack

- Next.js 16 (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4 (config via `@theme` em `app/globals.css`, sem `tailwind.config.js`)
- Framer Motion
- Fontes self-hosted via `@fontsource` (Space Grotesk, Fraunces Variable, IBM Plex Mono) —
  usadas no lugar de `next/font/google` porque o ambiente de build não tem
  acesso a `fonts.googleapis.com`; funcionam offline e sem esse requisito em
  qualquer ambiente de deploy.

## Acessibilidade

- `prefers-reduced-motion` respeitado globalmente (desliga scroll suave,
  reduz animações, e o cursor customizado nunca é ativado).
- Cursor customizado e efeitos de hover são desativados automaticamente em
  dispositivos touch (`pointer: coarse`).
- Navegação por teclado com `:focus-visible` usando a cor de acento do
  projeto em foco.
- Skip link para o conteúdo principal.
- Estrutura semântica (`header`, `main`, `article`, `footer`, hierarquia de
  headings).
