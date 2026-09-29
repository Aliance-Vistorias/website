# Aliance Vistorias — Website

Site institucional da **Aliance Vistorias**, empresa de vistoria veicular em Pernambuco.

- **Produção:** `master` → deploy automático via Dokploy
- **Testes:** `develop` → ambiente de homologação
- **URL:** https://aliancevistorias.com.br

## Stack

| Camada | Tecnologia |
|--------|-----------|
| Framework | Astro 6 (output: static) |
| UI | React 19 + shadcn/ui |
| Estilo | Tailwind CSS v4 |
| Animações | Framer Motion |
| Deploy | Dokploy + Docker + nginx |
| Analytics | Google Analytics 4 (G-7NNZ01L27Y) |

## Início rápido

```bash
pnpm install
pnpm dev        # http://localhost:4321
```

## Comandos

```bash
pnpm dev        # Servidor de desenvolvimento
pnpm build      # Build de produção → dist/
pnpm preview    # Serve dist/ localmente
pnpm lint       # ESLint
```

## Estrutura

```
src/
  components/
    home/       # Seções da página inicial (Hero, Services, About…)
    layout/     # Header, Footer, TopBar, WhatsAppButton
    ui/         # Componentes shadcn/ui
  layouts/
    BaseLayout.astro   # HTML base, SEO, GA4, Schema.org
  pages/        # Rotas Astro (.astro) — uma por página
  views/        # Componentes React que montam páginas inteiras
  lib/
    utils.ts    # cn() helper (clsx + tailwind-merge)
public/         # Assets estáticos (logo, favicon, robots.txt)
docs/           # Documentação técnica do projeto
```

## Páginas

| Rota | Arquivo | Descrição |
|------|---------|-----------|
| `/` | `pages/index.astro` | Página inicial |
| `/servicos` | `pages/servicos.astro` | Serviços oferecidos |
| `/sobre` | `pages/sobre.astro` | Sobre a empresa |
| `/contato` | `pages/contato.astro` | Formulário de contato |
| `/agendamento` | `pages/agendamento.astro` | Agendamento de vistoria |
| `/*` | `pages/404.astro` | Página não encontrada |

## Deploy

Build e deploy são feitos via Docker. Ver [`docs/deploy.md`](docs/deploy.md).

## Documentação

Ver pasta [`docs/`](docs/) para guias detalhados de arquitetura, componentes e deploy.
