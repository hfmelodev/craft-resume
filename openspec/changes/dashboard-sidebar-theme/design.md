## Context

Next.js 16 (App Router) com shadcn/ui e Tailwind v4. O layout do dashboard é um grid `300px | 1fr` com sidebar fixo à esquerda.

## Goals / Non-Goals

**Goals:**
- Navegação entre as seções do dashboard.
- Troca de tema persistida (claro, escuro, sistema).
- Rodapé do sidebar estável com nomes longos.

**Non-Goals:**
- Autenticação real: o usuário do `UserDropdown` é fixo e "Sair" ainda não tem ação.
- Conteúdo das páginas de currículos e conta (ficam como placeholder "Em breve...").

## Decisions

- **`next-themes` com `attribute="class"`**: combina com a variante `dark` do Tailwind/shadcn; `defaultTheme="system"` + `enableSystem` respeitam a preferência do SO; `disableTransitionOnChange` evita animações ao trocar o tema. `suppressHydrationWarning` no `<html>` porque a classe é aplicada antes da hidratação.
- **Componentes client isolados**: `NavItems` (usa `usePathname`), `UserDropdown`, `ModeToggle` e `ThemeProvider` são `'use client'`; o `DashboardLayout` continua Server Component.
- **Organização**: componentes de página em `src/components/pages/<área>/`, reutilizáveis em `src/components/shared/`.
- **Rota ativa**: `pathname.startsWith(item.path)` para cobrir sub-rotas.
- **Overflow do rodapé**: item flex tem `min-width: auto` por padrão; o botão do usuário usa `min-w-0 flex-1` e o nome `truncate`, e o toggle usa `shrink-0`, para o toggle nunca ser empurrado para fora do sidebar.

## Risks / Trade-offs

- Dados do usuário fixos no código → substituir quando houver autenticação.
- `Link` envolvendo `DropdownMenuItem`/`Button` gera elementos interativos aninhados; aceitável por enquanto, revisar com `asChild` depois.
