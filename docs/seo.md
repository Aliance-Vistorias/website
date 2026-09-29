# SEO, Analytics e Schema.org

## BaseLayout — props de SEO

Toda página passa estas props para `BaseLayout.astro`:

```ts
interface Props {
  title: string;       // Título sem o sufixo "| Aliance Vistorias"
  description: string; // 150-160 caracteres recomendado
  keywords?: string;   // Palavras-chave separadas por vírgula
  currentPage: string; // Identificador da página (ex: "home", "servicos")
  ogImage?: string;    // URL da imagem Open Graph (tem fallback padrão)
}
```

O `<title>` final é gerado como: `${title} | Aliance Vistorias`.

## Open Graph e Twitter Card

Gerados automaticamente pelo `BaseLayout` a partir das props. O `ogImage` padrão é uma foto genérica de carro do Unsplash — substitua por imagem própria por página quando relevante.

## Schema.org

`BaseLayout` injeta JSON-LD com `@type: AutoRepair` contendo:

- Nome, área de atendimento (Pernambuco)
- Telefones: (81) 98879-1365 e (81) 99822-5763
- Email: vistoriasaliance@gmail.com
- Horário: seg-sex 08:00-18:00, sáb 08:00-12:00
- URL canônica da página

Para atualizar dados da empresa, edite `src/layouts/BaseLayout.astro` (objeto `localBusinessSchema`).

## Google Analytics 4

ID: `G-7NNZ01L27Y`

Eventos rastreados automaticamente pelo `BaseLayout`:

| Evento GA4 | Gatilho |
|-----------|---------|
| `whatsapp_click` | Clique em link `wa.me` |
| `redirect_click` | Clique em link externo |
| `[data-track-event]` | Qualquer elemento com o atributo |

Para rastrear um elemento específico:

```html
<a href="/agendamento" data-track-event="agendar_vistoria_click">
  Agendar
</a>
```

## Sitemap

Gerado automaticamente pelo `@astrojs/sitemap` no build. URL base: `https://aliancevistorias.com.br`.

## robots.txt

Localizado em `public/robots.txt`. Permite indexação de todas as páginas.
