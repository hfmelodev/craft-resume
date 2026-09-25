## Why

Os componentes `ui/switch` e `ui/tooltip` vieram do shadcn com valores arbitrários e sintaxes que o Tailwind v4 já expressa com utilitários canônicos. O IntelliSense do Tailwind sinaliza essas classes, e manter a forma canônica deixa o código consistente com o restante do projeto.

## What Changes

- `ui/switch`: `h-[14px]` → `h-3.5`, `w-[28px]` → `w-7`, `w-[24px]` → `w-6`; `group-has-[:focus-visible]/field-label` → `group-has-focus-visible/field-label`; `-translate-x-0` → `translate-x-0` no RTL.
- `ui/tooltip`: seta com `translate-y-[calc(-50%-2px)]` (sem `_`) e `rounded-xs` no lugar de `rounded-[2px]`.

Sem mudança visual nem de comportamento.

## Capabilities

### New Capabilities

_Nenhuma._

### Modified Capabilities

_Nenhuma_ (refactor de estilo).

## Impact

- Arquivos: `src/components/ui/switch/index.tsx`, `src/components/ui/tooltip/primitive.tsx`.
