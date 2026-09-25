## Context

Os três painéis do editor (informações, preview e estrutura) precisam ler e escrever os mesmos dados do currículo.

## Decisions

- **Um único `useForm<ResumeData>` em `ResumePage`** com `FormProvider`: os campos acessam o formulário por `useFormContext`, sem prop drilling, e o preview poderá usar `watch` no mesmo estado.
- **Tipos globais em `.d.ts`** (sem import): os tipos do currículo são usados em muitos componentes; ficam disponíveis como tipos ambientes.
- **Tipagem incremental**: `ResumeData` só declara o que já tem UI (`content.image`, `content.infos`). Os campos restantes ficam comentados para não exigir valores padrão ainda não usados.
- **`SwitchField` com `Controller`**: o `Switch` do Radix não é um input nativo, então precisa de `checked`/`onCheckedChange` controlados.

## Risks / Trade-offs

- Valores padrão estão fixos no componente; ainda não são carregados pelo `id` do currículo.
- `IAGenerationDropdown` é só um botão; o menu com os modos (`AIGenerationMode`) vem depois.
