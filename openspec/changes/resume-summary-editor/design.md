## Context

O resumo é armazenado no mesmo `useForm<ResumeData>` do editor e será renderizado no preview. O conteúdo precisa preservar formatação.

## Decisions

- **Tiptap 3 com saída HTML**: `onUpdate` envia `editor.getHTML()` ao formulário; o preview poderá renderizar o HTML diretamente.
- **Sublinhado via `StarterKit`**: no Tiptap 3 o `StarterKit` já inclui `Underline` (e `Link`, `ListKeymap`). Registrar `@tiptap/extension-underline` separadamente gera o aviso de extensão duplicada, então o pacote não é instalado à parte.
- **`immediatelyRender: false`**: o editor é client component mas passa por SSR; renderizar só no cliente evita hydration mismatch (o Tiptap avisa no console quando não é explícito).
- **Sincronização externa**: um `useEffect` aplica `setContent(value)` quando o valor do formulário difere do HTML atual (ex.: `reset` ou geração por IA). O `setTimeout` evita chamar `setContent` durante o render do React.
- **`Tooltip` com provider próprio**: cada tooltip traz seu `TooltipProvider`, sem exigir um provider global.

## Risks / Trade-offs

- O HTML do resumo ainda não é sanitizado; será necessário ao renderizá-lo no preview/PDF.
- `EditorField` ainda não é usado; está pronto para as seções múltiplas (experiências, formações etc.).
