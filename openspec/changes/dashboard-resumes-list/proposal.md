## Why

A página `/dashboard/resumes` era apenas um placeholder ("Em breve..."). O usuário precisa ver seus currículos em grade e ter um ponto de entrada para criar um novo.

## What Changes

- `/dashboard/resumes` passa a exibir o título "Currículos" e a lista de currículos dentro de um `Suspense` com skeleton de carregamento.
- Novo `ResumesList`: grade responsiva (2 → 3 → 4 → 5 colunas) com o botão "Criar novo currículo" seguido dos cards (dados mockados por enquanto).
- Novo `ResumeCard` / `ResumeCardButton`: card com título e "Última atualização" relativa (`date-fns`, locale `ptBR`), linkando para `/dashboard/resumes/[id]`.
- Novo `AddResumeButton` reutilizando `ResumeCardButton` com ícone `Plus`.
- Novo `ResumesListSkeleton` com 15 placeholders.
- Adiciona componentes de UI: `skeleton` (shadcn) e `dialog` (primitivos shadcn em `ui/dialog/primitive.tsx` + wrapper `Dialog` simplificado em `ui/dialog/index.tsx`).

## Capabilities

### New Capabilities

- `resumes-list`: listagem de currículos no dashboard.

### Modified Capabilities

_Nenhuma._

## Impact

- Nova dependência: `date-fns`.
- Arquivos: `src/app/dashboard/resumes/page.tsx`, `src/components/pages/dashboard/resumes/**`, `src/components/ui/{skeleton.tsx,dialog/*}`.
