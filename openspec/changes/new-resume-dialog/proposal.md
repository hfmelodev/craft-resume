## Why

O botão "Criar novo currículo" não fazia nada. O usuário precisa informar um título para iniciar um novo currículo.

## What Changes

- Novo `NewResumeDialog`: dialog com ícone, título, descrição e formulário (`react-hook-form`) com o campo "Título" obrigatório e ações "Cancelar" / "Criar currículo".
- `ResumesList` passa a envolver o `AddResumeButton` com o `NewResumeDialog` (o botão vira o trigger).
- `Dialog` (wrapper em `ui/dialog/index.tsx`) ganha a prop opcional `icon`, exibida ao lado do título/descrição.
- Novos componentes de formulário: `Input` (`ui/input/index.tsx`), `InputField` integrado ao `react-hook-form` (`ui/input/field.tsx`), `FieldWrapper` (label + mensagem de erro) e `Label` (shadcn).

## Capabilities

### New Capabilities

_Nenhuma._

### Modified Capabilities

- `resumes-list`: o botão de criação abre o dialog de novo currículo.

## Impact

- Novas dependências: `react-hook-form`, `@hookform/resolvers`, `zod`.
- Arquivos: `src/components/pages/dashboard/resumes/{new-resume-dialog.tsx,resumes-list/index.tsx}`, `src/components/ui/{dialog/index.tsx,input/*,field-wrapper.tsx,label.tsx}`.
