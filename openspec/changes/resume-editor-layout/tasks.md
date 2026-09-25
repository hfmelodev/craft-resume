## 1. Rotas

- [x] 1.1 Mover o layout do dashboard para o route group `(layout)`
- [x] 1.2 Criar a rota `/dashboard/resumes/[id]` fora do grupo

## 2. Editor

- [x] 2.1 Adicionar `react-resizable-panels` e o componente `ui/resizable`
- [x] 2.2 Criar `ResumePage` com `InfosSidebar`, `ResumeContent` e `StructureSidebar`
- [x] 2.3 Corrigir tamanhos padrão dos painéis (porcentagem em string na v4)

## 3. Próximos passos

- [ ] 3.1 Seções de informações (dados básicos, resumo, seções múltiplas) e geração por IA
- [ ] 3.2 Preview com zoom/pan e templates
- [ ] 3.3 Seções de estrutura (templates, layout, tema, idioma)
- [ ] 3.4 Carregar os dados do currículo pelo `id`

## 4. Verificação

- [x] 4.1 `tsc --noEmit`, `biome check` e `next build` sem erros
