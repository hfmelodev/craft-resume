## 1. Formulário

- [x] 1.1 Criar os tipos globais do currículo em `src/@types/types.d.ts`
- [x] 1.2 Envolver o `ResumePage` em `FormProvider` com valores padrão

## 2. Componentes

- [x] 2.1 Adicionar `ui/separator` e `ui/switch` (shadcn)
- [x] 2.2 Criar `SwitchField` ligado ao formulário
- [x] 2.3 Criar `SectionTitle`
- [x] 2.4 Ajustar a altura padrão do `Input` para `h-8.5`

## 3. Painel de informações

- [x] 3.1 Botão "Inteligência Artificial" (`IAGenerationDropdown`)
- [x] 3.2 `BasicInfoSection` com foto (e visibilidade), nome, cabeçalho, e-mail, site, telefone e localização

## 4. Próximos passos

- [ ] 4.1 Menu de geração por IA (cargo, corrigir conteúdo, traduzir)
- [ ] 4.2 Seção de resumo e seções múltiplas
- [ ] 4.3 Carregar os valores do formulário pelo `id` do currículo

## 5. Verificação

- [x] 5.1 `tsc --noEmit`, `biome check` e `next build` sem erros
