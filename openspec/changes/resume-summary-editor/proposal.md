## Why

Depois das informações básicas, o próximo bloco do currículo é o resumo profissional ("Sobre Você"). Um resumo precisa de formatação (negrito, listas, alinhamento), o que um `textarea` não oferece.

## What Changes

- Novo componente `ui/editor`: editor rich text com Tiptap 3 (`StarterKit` + `TextAlign`), saída em HTML e barra de ferramentas (`MenuBar`) com negrito, itálico, riscado, sublinhado, listas e alinhamentos.
- `ui/editor/field`: `EditorField`, ligado ao formulário via `Controller`, com label, erro e validação de obrigatório (`FieldWrapper`).
- Novo componente `ui/tooltip` (primitivos shadcn/Radix + wrapper `Tooltip` com `content` e `side`), usado nos botões da barra do editor.
- `SummarySection` ("Sobre Você") no painel de informações, ligada a `content.summary`.
- `ResumeContentData` passa a declarar `summary: string`, com valor padrão `'<p></p>'`.
- Dependências: `@tiptap/core`, `@tiptap/pm`, `@tiptap/react`, `@tiptap/starter-kit`, `@tiptap/extension-text-align`.

## Capabilities

### New Capabilities

_Nenhuma._

### Modified Capabilities

- `resume-editor`: seção de resumo com editor rich text.

## Impact

- Arquivos: `src/@types/types.d.ts`, `src/components/pages/dashboard/resume/{index.tsx,infos-sidebar/index.tsx,infos-sidebar/sections/summary.tsx}`, `src/components/ui/{editor/*,tooltip/*}`.
- `package.json` / `pnpm-lock.yaml`: pacotes do Tiptap e ProseMirror.
