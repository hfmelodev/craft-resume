## Context

Troca de classes Tailwind por equivalentes canônicos, mantendo os mesmos valores computados.

## Decisions

- **Equivalência de valores**: `3.5`/`6`/`7` na escala de espaçamento equivalem a 14px/24px/28px; `rounded-xs` no Tailwind v4 é `0.125rem` (2px).
- **`calc` sem `_`**: o Tailwind v4 insere espaços em volta dos operadores em valores arbitrários; o CSS gerado continua `calc(-50% - 2px)` (conferido no build).
- **`translate-x-0`**: `-0` e `0` são idênticos; a forma negativa era redundante.
- **`group-has-focus-visible`**: variante nativa do v4 para `:has(:focus-visible)`, equivalente ao seletor arbitrário.

## Risks / Trade-offs

- Nenhum esperado; ao reinstalar os componentes pelo shadcn CLI as classes originais voltam.
