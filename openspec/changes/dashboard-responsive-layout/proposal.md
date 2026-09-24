## Why

O dashboard usava um grid fixo com sidebar de 300px, o que quebrava o layout em celulares e tablets: o conteúdo ficava espremido e a navegação ocupava boa parte da tela.

## What Changes

- Conteúdo do sidebar extraído para `SidebarContent` (logo, `NavItems`, `UserDropdown`, `ModeToggle`), usado no desktop e no mobile.
- Abaixo de `lg`, o sidebar fixo é escondido e aparece o `MobileSidebar`: header com logo e botão de menu que abre um `Sheet` lateral (esquerda) com o `SidebarContent`.
- O `Sheet` fecha automaticamente ao mudar de rota.
- Layout usa `h-dvh` (em vez de `h-screen`) e o `<main>` tem padding `p-4` no mobile e `p-6` a partir de `sm`.
- Listagem de currículos: 1 coluna abaixo de 400px, depois 2 → 3 → 4 → 5; cards e skeletons com `h-60` no mobile e `h-75` a partir de `sm`.
- Títulos das páginas `/dashboard/resumes` e `/dashboard/account` com fonte menor no mobile.
- Adiciona o componente shadcn `sheet`.

## Capabilities

### New Capabilities

_Nenhuma._

### Modified Capabilities

- `dashboard-layout`: navegação responsiva com menu lateral no mobile.
- `resumes-list`: grade e cards adaptados a telas pequenas.

## Impact

- Arquivos: `src/app/dashboard/{layout.tsx,resumes/page.tsx,account/page.tsx}`, `src/components/pages/dashboard/{sidebar-content,mobile-sidebar}.tsx`, `src/components/pages/dashboard/resumes/{resume-card.tsx,resumes-list/*}`, `src/components/ui/sheet.tsx`.
