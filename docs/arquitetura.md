# Arquitetura

## Visão geral

Site estático gerado pelo Astro. Cada página é um arquivo `.astro` em `src/pages/` que usa `BaseLayout.astro` como wrapper HTML e importa um componente React de `src/views/` para o conteúdo principal.

```
Rota /servicos
  └── pages/servicos.astro
        └── BaseLayout.astro  (HTML, SEO, GA4)
              └── views/Servicos.tsx  (React, client:load)
                    └── components/home/*.tsx
                    └── components/ui/*.tsx
```

## Padrão de página

Todo arquivo em `pages/` segue este padrão:

```astro
---
import MinhaView from "@/views/MinhaView";
import BaseLayout from "@/layouts/BaseLayout.astro";
---

<BaseLayout
  title="Título da Página"
  description="Descrição para SEO (150-160 chars)"
  keywords="palavra, chave, separada, por, virgula"
  currentPage="identificador"
>
  <MinhaView client:load />
</BaseLayout>
```

`currentPage` é passado para o `Header` para marcar o item ativo no menu.

## Hidratação React

Todas as views usam `client:load` — hidratam imediatamente no carregamento. Componentes puramente visuais sem interatividade podem usar `client:idle` ou `client:visible` para melhor performance.

## Alias de import

`@` aponta para `src/`. Sempre use `@/` nos imports:

```ts
import { cn } from "@/lib/utils";
import Button from "@/components/ui/button";
```

## Convenções

- Componentes React: PascalCase, extensão `.tsx`
- Páginas Astro: kebab-case, extensão `.astro`
- Estilos: Tailwind classes inline, sem CSS modules
- Ícones: `lucide-react`
- Animações: `framer-motion`
