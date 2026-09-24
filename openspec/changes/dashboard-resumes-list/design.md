## Context

Primeira versão da listagem de currículos, ainda sem backend. Os cards são estáticos para validar layout e navegação.

## Decisions

- **Server Components + `Suspense`**: `ResumesList` é server component; o `Suspense` com `ResumesListSkeleton` já prepara a página para quando a lista vier de uma fonte assíncrona.
- **`ResumeCardButton` compartilhado**: card de currículo e botão de criação usam a mesma base visual (altura `h-75`, gradiente inferior com título/descrição), garantindo grade uniforme.
- **Data relativa com `date-fns`**: `formatDistanceToNow` com `locale: ptBR` e `addSuffix` ("há 1 dia").
- **Dialog em duas camadas**: `primitive.tsx` mantém os primitivos shadcn intactos; `index.tsx` expõe um `Dialog` de alto nível (`title`, `description`, `content`, trigger opcional via `children`, controle via `open`/`setOpen`). Será usado no fluxo de criação de currículo.

## Risks / Trade-offs

- Dados mockados (id fixo `1`, data "ontem"): substituir quando houver persistência.
- `AddResumeButton` ainda não abre o dialog de criação.
