## Context

O layout do dashboard (`src/app/dashboard/layout.tsx`) é um server component. O menu mobile precisa de estado (aberto/fechado) e de `usePathname`, então fica em um client component separado.

## Decisions

- **Um único `SidebarContent`**: desktop e mobile renderizam o mesmo componente, evitando duplicar navegação, menu do usuário e troca de tema.
- **Breakpoint `lg`**: abaixo de `lg` o container vira `flex-col` (header + main); a partir de `lg` volta ao grid `300px 1fr`.
- **`Sheet` controlado**: `MobileSidebar` guarda `open` e fecha o `Sheet` quando o `pathname` muda, ajustando o estado durante o render (padrão "estado derivado da prop anterior" do React), sem `useEffect`.
- **`SheetTitle` com `sr-only`**: o Radix exige título no dialog para acessibilidade; ele fica oculto visualmente.
- **`h-dvh`**: acompanha a altura visível no mobile, sem ser cortado pela barra do navegador.

## Risks / Trade-offs

- O header mobile não repete o `ModeToggle`; a troca de tema fica dentro do menu.
