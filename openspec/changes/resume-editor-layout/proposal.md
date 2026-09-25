## Why

Ao abrir um currículo o usuário precisa de uma área de edição em tela cheia, com os painéis de informações, pré-visualização e estrutura lado a lado — sem a sidebar do dashboard.

## What Changes

- Layout do dashboard (sidebar + header mobile) movido para o route group `src/app/dashboard/(layout)/`, mantendo `/dashboard/resumes` e `/dashboard/account` com o mesmo visual.
- Nova rota `/dashboard/resumes/[id]` fora do route group, renderizando o `ResumePage` em tela cheia.
- `ResumePage` com três painéis redimensionáveis: `InfosSidebar` (logo com link para a listagem), `ResumeContent` (área de preview) e `StructureSidebar` (ainda vazios, com as seções esboçadas em comentário).
- Novo componente `ui/resizable.tsx` (shadcn) sobre `react-resizable-panels` v4.

## Capabilities

### New Capabilities

- `resume-editor`: página de edição de currículo com painéis redimensionáveis.

### Modified Capabilities

_Nenhuma._

## Impact

- Nova dependência: `react-resizable-panels`.
- Arquivos: `src/app/dashboard/(layout)/{layout.tsx,resumes/page.tsx}`, `src/app/dashboard/resumes/[id]/page.tsx`, `src/components/pages/dashboard/resume/*`, `src/components/ui/resizable.tsx`.
