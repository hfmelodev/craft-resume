## Context

As sete seções têm a mesma forma: um array de objetos em `content.<seção>` exibido como lista. Muda só a chave, o título, o ícone e quais campos servem de título e descrição.

## Decisions

- **Um componente genérico configurado por dados**: `MultipleDragItemData` descreve cada seção (`formKey`, `title`, `icon`, `titleKey`, `descriptionKey`) e `MultiplesSections` só mapeia a lista. Adicionar uma seção é adicionar uma entrada.
- **`ResumeArrayKeys`**: derivado de `keyof ResumeContentData` excluindo `image`, `infos` e `summary`, para que `formKey` só aceite chaves de array.
- **`useFieldArray` + `move`**: a reordenação altera diretamente o array no formulário, então a ordem é salva junto com o currículo e refletida no preview.
- **`@hello-pangea/dnd`**: fork mantido do `react-beautiful-dnd`, compatível com React 19.
- **Adicionar/editar via callbacks**: `onAdd` e `onEdit(index)` ficam no `MultipleDragList`; o diálogo que usa esses callbacks entra numa próxima etapa.

## Risks / Trade-offs

- `onAdd` e `onEdit` ainda são funções vazias: os botões e o clique no item não fazem nada até o diálogo de gerenciamento existir.
- `key` e `draggableId` do `Draggable` usam o índice, não `field.id`; a biblioteca recomenda IDs estáveis, o que pode causar animações erradas ao reordenar.
