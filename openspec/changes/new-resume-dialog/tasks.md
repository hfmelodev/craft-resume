## 1. Dependências e UI base

- [x] 1.1 Instalar `react-hook-form`, `@hookform/resolvers` e `zod`
- [x] 1.2 Criar `Input`, `InputField`, `FieldWrapper` e `Label`
- [x] 1.3 Adicionar prop `icon` ao `Dialog`

## 2. Dialog de criação

- [x] 2.1 Criar `NewResumeDialog` com formulário e campo "Título" obrigatório
- [x] 2.2 Usar o `AddResumeButton` como trigger na `ResumesList`

## 3. Próximos passos

- [ ] 3.1 Persistir o currículo e redirecionar para `/dashboard/resumes/[id]`
- [ ] 3.2 Exibir toast de sucesso
- [ ] 3.3 Migrar a validação para `zod` ou remover as dependências não usadas

## 4. Verificação

- [x] 4.1 `tsc --noEmit`, `biome check` e `next build` sem erros
