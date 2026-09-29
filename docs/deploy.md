# Deploy

## Branches

| Branch | Ambiente | Comportamento |
|--------|----------|--------------|
| `master` | Produção | Deploy automático no Dokploy |
| `develop` | Homologação | Deploy manual ou por trigger |

Nunca commitar direto na `master`. Fluxo: `develop` → PR → `master`.

## Docker

Build multi-stage:

1. **Stage `builder`** — Node 22 Alpine, instala deps com pnpm, roda `astro build`
2. **Stage `runner`** — nginx Alpine, serve `dist/` na porta 80

```bash
# Build local para testar
docker build -t aliance-website .
docker run -p 8080:80 aliance-website
# Acesse http://localhost:8080
```

## nginx

Configuração em `nginx.conf`:

- Fallback SPA: `try_files $uri $uri/ $uri.html /index.html`
- Cache de assets estáticos: 1 ano (`Cache-Control: public, immutable`)
- Gzip habilitado para JS, CSS, SVG, JSON
- Página 404 customizada: `/404.html`

## Dokploy

Configuração no painel Dokploy:

- **Source:** GitHub → `Aliance-Vistorias/website`
- **Branch prod:** `master`
- **Build type:** Dockerfile
- **Port:** 80
- **Health check:** `/`

## Variáveis de ambiente

Nenhuma variável de ambiente necessária. O ID do GA4 está hardcoded em `src/layouts/BaseLayout.astro`.

Se precisar externalizar no futuro, use `import.meta.env.PUBLIC_GA_ID` no Astro (prefixo `PUBLIC_` expõe para o cliente).

## Fluxo de release

```bash
# 1. Desenvolver na branch develop
git checkout develop
# ... fazer mudanças ...
git commit -m "feat: minha feature"
git push origin develop

# 2. Testar em homologação

# 3. Merge para master (produção)
git checkout master
git merge develop
git push origin master
```
