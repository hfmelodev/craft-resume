## Context

Ainda não há backend; o submit apenas registra os dados no console. A estrutura (mutation, toast e redirecionamento) já está esboçada em comentário.

## Decisions

- **`FormProvider` + `InputField`**: o `InputField` lê o `control` via `useFormContext` (com `control` opcional por prop) e usa `Controller`, então os campos não precisam receber `register` manualmente.
- **Validação por `rules`**: `required` vira a regra `'Campo obrigatório'`; o erro é exibido pelo `FieldWrapper`.
- **`shouldUnregister: true`**: ao fechar o dialog os campos são desmontados e o formulário volta ao valor inicial.
- **Ícone no header**: quando `icon` é informado, o header vira linha com o ícone em um quadrado `bg-primary/10`; sem ícone, o layout original é mantido.

## Risks / Trade-offs

- `zod` e `@hookform/resolvers` foram instalados, mas ainda não são usados (validação continua por `rules`).
- Criação real do currículo pendente de persistência.
