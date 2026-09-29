# AGENTS.md — Aliance Website

## Regras obrigatórias para toda IA neste repositório

### 1. Sempre leia `docs/` primeiro

Antes de qualquer tarefa — implementação, refactor, bug fix, resposta a pergunta — leia os arquivos em `docs/`.
Se a pasta estiver vazia ou um tópico relevante não estiver documentado, crie/atualize o arquivo correspondente em `docs/` como parte da tarefa.

### 2. Sempre verifique o código antes de agir

**Nunca assuma** como algo está implementado. Antes de propor ou aplicar qualquer mudança:

- Leia o arquivo relevante inteiro
- Busque no repositório por símbolos, padrões ou imports relacionados (`grep`, `find`)
- Confirme a estrutura de diretórios atualizada

Exemplos obrigatórios:
- Vai adicionar componente? Verifique se já existe em `src/components/`
- Vai mudar rota? Leia `src/pages/` primeiro
- Vai alterar estilo? Leia `src/index.css` e `astro.config.mjs`
- Vai mexer em SEO? Leia `src/layouts/BaseLayout.astro`

### 3. Estrutura do projeto

```
src/
  components/
    home/       # Seções da página inicial
    layout/     # Header, Footer, TopBar, WhatsAppButton
    ui/         # shadcn/ui components
  layouts/      # BaseLayout.astro (SEO, meta tags)
  pages/        # Rotas Astro (.astro files)
  views/        # Componentes React de página inteira
  lib/          # Utilitários (utils.ts)
public/         # Assets estáticos
docs/           # Documentação do projeto (leia sempre)
```

### 4. Stack

- **Framework:** Astro 6 (`output: static`)
- **UI:** React 19 + Tailwind CSS v4 + shadcn/ui
- **Deploy:** Dokploy via Dockerfile + nginx
- **Branches:** `master` = produção | `develop` = testes

### 5. Commits

- Autor sempre: WalysonGO
- Nunca adicionar `Co-Authored-By` de IA
- Mensagens em português ou inglês, convenção `feat/fix/chore/docs`

### 6. Antes de concluir qualquer tarefa

- Verifique se o build passa: `pnpm build`
- Verifique se não quebrou rotas existentes
- Atualize `docs/` se adicionou feature ou mudou comportamento relevante
