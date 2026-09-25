## Context

O editor não pode herdar o layout com sidebar do dashboard, mas as demais páginas devem continuar usando-o.

## Decisions

- **Route group `(layout)`**: o layout com sidebar só envolve as rotas dentro do grupo; `/dashboard/resumes/[id]` fica fora e ocupa `h-screen`. As URLs não mudam.
- **Tamanhos em porcentagem (string)**: na v4 do `react-resizable-panels`, números em `defaultSize`/`minSize`/`maxSize` são interpretados como **pixels**. Os painéis usam `"30%"`/`"20%"`/`"40%"` (esquerda) e `"25%"`/`"20%"`/`"35%"` (direita); o painel central ocupa o restante.

## Risks / Trade-offs

- Tamanhos em porcentagem podem causar um leve layout shift no SSR (aviso da própria lib).
- Painéis ainda sem conteúdo real; dependem do formulário do currículo (`react-hook-form`) e dos templates.
