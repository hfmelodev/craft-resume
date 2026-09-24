## Why

O layout do dashboard tinha apenas a logo no sidebar, sem navegação, sem identificação do usuário e sem suporte a tema claro/escuro. As páginas internas também não tinham estrutura visual.

## What Changes

- Adiciona navegação no sidebar (`NavItems`) com os links "Currículos" e "Configurações de Conta", destacando a rota ativa.
- Adiciona o rodapé do sidebar com `UserDropdown` (avatar, nome truncado, links de conta e sair) e `ModeToggle`.
- Adiciona suporte a tema claro/escuro/sistema com `next-themes` (`ThemeProvider` no layout raiz, `suppressHydrationWarning` no `<html>`).
- `ModeToggle` exibe ícones (Sun, Moon, Monitor) em cada opção do menu.
- Corrige o rodapé do sidebar para não estourar a largura (botão do usuário com `min-w-0 flex-1` + `truncate`, toggle com `shrink-0`).
- Cria a página placeholder `/dashboard/account` e ajusta `/dashboard/resumes` para o mesmo padrão.
- `<main>` passa a ter padding e rolagem própria.
- Adiciona os componentes shadcn `avatar` e `dropdown-menu`.

## Capabilities

### New Capabilities

- `dashboard-layout`: estrutura do dashboard (sidebar com navegação, menu do usuário e troca de tema).

### Modified Capabilities

_Nenhuma._

## Impact

- Nova dependência: `next-themes`.
- Arquivos: `src/app/layout.tsx`, `src/app/dashboard/**`, `src/components/pages/dashboard/*`, `src/components/shared/*`, `src/components/ui/{avatar,dropdown-menu}.tsx`.
