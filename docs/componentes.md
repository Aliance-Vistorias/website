# Componentes

## Layout (`src/components/layout/`)

### `TopBar`
Barra fixa no topo da página com telefones e informações de contato rápido.
Não recebe props.

### `Header`
Navegação principal fixa. Recebe `currentPage: string` para marcar o item ativo.

Itens de navegação:
- Início → `/`
- Serviços → `/servicos`
- Sobre Nós → `/sobre`
- Contato → `/contato`

CTA fixo: **AGENDAR VISTORIA** → `/agendamento` (rastreado com `data-track-event="agendar_vistoria_click"`).

Menu mobile com animação Framer Motion (`AnimatePresence`).

### `Footer`
Rodapé com informações da empresa, links e redes sociais. Não recebe props.

### `WhatsAppButton`
Botão flutuante de WhatsApp fixo no canto inferior direito. Não recebe props.

---

## Seções da Home (`src/components/home/`)

Todos os componentes abaixo são usados em `src/views/Home.tsx` nesta ordem:

| Componente | Função |
|-----------|--------|
| `HeroSection` | Banner principal com CTA |
| `ServicesSection` | Cards dos serviços oferecidos |
| `AboutSection` | Seção sobre a empresa |
| `TestimonialsSection` | Depoimentos de clientes |
| `CTASection` | Call-to-action de agendamento |
| `ContactSection` | Formulário e informações de contato |

---

## UI (`src/components/ui/`)

Componentes do [shadcn/ui](https://ui.shadcn.com/). Não modifique diretamente — re-gere via CLI se precisar atualizar.

| Componente | Uso |
|-----------|-----|
| `button` | Botões com variantes |
| `card` | Cards com header/content/footer |
| `input` | Campos de texto |
| `label` | Labels de formulário |
| `textarea` | Área de texto |
| `select` | Select nativo acessível |
| `popover` | Popover flutuante |
| `calendar` | Seletor de data (react-day-picker) |

---

## Utilitários (`src/lib/utils.ts`)

```ts
import { cn } from "@/lib/utils";

cn("base-class", condition && "conditional-class", "outro")
// → merge inteligente de classes Tailwind
```

Combina `clsx` + `tailwind-merge` para evitar conflitos de classes.
