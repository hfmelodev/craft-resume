## ADDED Requirements

### Requirement: Seção de resumo
O painel de informações SHALL exibir a seção "Sobre Você" com um editor rich text ligado ao campo `content.summary` do formulário.

#### Scenario: Abrir o editor
- **WHEN** o editor do currículo é carregado
- **THEN** a seção "Sobre Você" aparece abaixo das informações básicas com o editor vazio

#### Scenario: Escrever o resumo
- **WHEN** o usuário digita no editor
- **THEN** `content.summary` passa a conter o HTML do texto

### Requirement: Formatação do resumo
O editor SHALL oferecer negrito, itálico, riscado, sublinhado, lista, lista ordenada e alinhamento à esquerda, centro, direita e justificado, cada botão com tooltip descritivo.

#### Scenario: Aplicar negrito
- **WHEN** o usuário seleciona um trecho e clica em "Negrito"
- **THEN** o trecho fica em negrito e o HTML salvo contém a marcação correspondente

#### Scenario: Ver a descrição do botão
- **WHEN** o usuário passa o mouse sobre um botão da barra
- **THEN** um tooltip exibe o nome da ação
