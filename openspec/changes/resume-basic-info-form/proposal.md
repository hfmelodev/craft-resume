## Why

O editor de currículo tinha apenas os painéis vazios. O primeiro passo para editar o conteúdo é ter um formulário compartilhado entre os painéis e a seção de informações básicas (foto, nome, cabeçalho e contatos).

## What Changes

- Tipos globais do currículo em `src/@types/types.d.ts` (`ResumeData`, `ResumeContentData`, seções, templates, idiomas, modos de geração por IA). Por enquanto `ResumeData` só expõe `content.image` e `content.infos`; os demais campos estão esboçados em comentário.
- `ResumePage` vira client component e envolve os painéis em um `FormProvider` do `react-hook-form` com valores padrão vazios.
- `InfosSidebar` passa a exibir o botão "Inteligência Artificial" (`IAGenerationDropdown`, ainda sem menu), um `Separator` e a `BasicInfoSection`.
- `BasicInfoSection`: URL da foto com switch de visibilidade e os campos nome completo, cabeçalho, e-mail, site, telefone e localização, em grade de duas colunas.
- Novos componentes: `SectionTitle`, `ui/separator` (shadcn), `ui/switch` (shadcn) e `ui/switch/field` (`SwitchField` ligado ao formulário via `Controller`).
- `ui/input`: altura padrão de `h-7` para `h-8.5`.

## Capabilities

### New Capabilities

_Nenhuma._

### Modified Capabilities

- `resume-editor`: formulário do currículo e seção de informações básicas.

## Impact

- Arquivos: `src/@types/types.d.ts`, `src/components/pages/dashboard/resume/{index.tsx,infos-sidebar/*}`, `src/components/ui/{separator.tsx,switch/*,input/index.tsx}`.
- A altura do `Input` muda em todos os formulários que o usam.
