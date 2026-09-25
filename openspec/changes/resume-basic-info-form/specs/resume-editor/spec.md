## ADDED Requirements

### Requirement: Formulário compartilhado do currículo
O editor SHALL manter os dados do currículo em um único formulário acessível por todos os painéis.

#### Scenario: Editar um campo
- **WHEN** o usuário altera um campo no painel de informações
- **THEN** o valor fica disponível no mesmo formulário para os demais painéis

### Requirement: Seção de informações básicas
O painel de informações SHALL exibir a seção "Informações Básicas" com URL da foto, switch de visibilidade da foto e os campos nome completo, cabeçalho, e-mail, site, telefone e localização.

#### Scenario: Abrir o editor
- **WHEN** o editor é carregado
- **THEN** a seção exibe os campos vazios e o switch da foto ligado

#### Scenario: Ocultar a foto
- **WHEN** o usuário desliga o switch da foto
- **THEN** o campo `content.image.visible` do formulário passa a `false`

### Requirement: Acesso à geração por IA
O painel de informações SHALL exibir o botão "Inteligência Artificial" ao lado do logo.

#### Scenario: Ver o botão
- **WHEN** o editor é carregado
- **THEN** o botão "Inteligência Artificial" aparece no topo do painel de informações
