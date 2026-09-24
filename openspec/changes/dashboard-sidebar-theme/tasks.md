## 1. Dependências e UI base

- [x] 1.1 Instalar `next-themes`
- [x] 1.2 Adicionar componentes shadcn `avatar` e `dropdown-menu`

## 2. Tema

- [x] 2.1 Criar `ThemeProvider` em `src/components/shared/theme-provider.tsx`
- [x] 2.2 Envolver o `body` do layout raiz com `ThemeProvider` e adicionar `suppressHydrationWarning`
- [x] 2.3 Criar `ModeToggle` com opções Claro/Escuro/Sistema e ícones

## 3. Sidebar do dashboard

- [x] 3.1 Criar `NavItems` com destaque da rota ativa
- [x] 3.2 Criar `UserDropdown` com avatar, nome e links de conta/sair
- [x] 3.3 Montar rodapé do sidebar com `UserDropdown` + `ModeToggle`
- [x] 3.4 Corrigir overflow do rodapé (truncate + shrink-0)

## 4. Páginas

- [x] 4.1 Criar placeholder `/dashboard/account`
- [x] 4.2 Ajustar placeholder `/dashboard/resumes`
- [x] 4.3 Dar padding e rolagem ao `<main>`

## 5. Verificação

- [x] 5.1 `tsc --noEmit`, `biome check` e `next build` sem erros
