## Why

Depois do resumo, o currículo precisa das seções com vários itens: redes sociais, experiências, educação, habilidades, idiomas, certificações e projetos. O usuário deve conseguir ver os itens de cada seção e reordená-los arrastando.

## What Changes

- Novo componente `MultipleDragList`: título da seção, lista de itens ligada a um array do formulário via `useFieldArray` e reordenação por arrastar e soltar (`@hello-pangea/dnd`). Cada item mostra um título e uma descrição configuráveis, com tooltip "Clique para editar".
- Estado vazio com botão "Adicionar item"; com itens, o botão fica abaixo da lista.
- `MultiplesSections`: configura as sete seções (chave do formulário, título, ícone, campos de título e descrição) e as exibe no painel de informações, separadas por `Separator`.
- `ResumeContentData` passa a declarar `socialMedias`, `experiences`, `educations`, `skills`, `languages`, `certifications` e `projects`, com valor padrão `[]`.
- Dependência: `@hello-pangea/dnd`.

## Capabilities

### New Capabilities

_Nenhuma._

### Modified Capabilities

- `resume-editor`: seções múltiplas com reordenação por arrastar.

## Impact

- Arquivos: `src/@types/types.d.ts`, `src/components/pages/dashboard/resume/{index.tsx,infos-sidebar/index.tsx,infos-sidebar/sections/multiples.tsx,infos-sidebar/multiple-drag-list/index.tsx}`.
- `package.json` / `pnpm-lock.yaml`: `@hello-pangea/dnd` (traz `redux`, `react-redux`, `raf-schd`, `css-box-model`).
