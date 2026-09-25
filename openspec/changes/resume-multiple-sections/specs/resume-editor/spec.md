## ADDED Requirements

### Requirement: Seções múltiplas
O painel de informações SHALL exibir, abaixo do resumo, as seções Redes Sociais, Experiências, Educação, Habilidades, Idiomas, Certificações e Projetos, cada uma ligada ao array correspondente em `content`.

#### Scenario: Seção vazia
- **WHEN** a seção não tem itens
- **THEN** exibe apenas o título e o botão "Adicionar item" ocupando a largura toda

#### Scenario: Seção com itens
- **WHEN** a seção tem itens
- **THEN** cada item aparece com seu título e descrição, e o botão "Adicionar item" fica abaixo da lista

### Requirement: Reordenar itens
Os itens de uma seção múltipla SHALL poder ser reordenados arrastando pela alça lateral.

#### Scenario: Arrastar um item
- **WHEN** o usuário arrasta um item para outra posição da lista
- **THEN** a ordem do array no formulário é atualizada

#### Scenario: Soltar fora da lista
- **WHEN** o usuário solta o item fora da área da lista
- **THEN** a ordem não muda
