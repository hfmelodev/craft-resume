## ADDED Requirements

### Requirement: Navegação responsiva
Em telas menores que `lg`, o dashboard SHALL esconder o sidebar fixo e exibir um header com a logo e um botão de menu que abre a navegação em um painel lateral.

#### Scenario: Abrir menu no mobile
- **WHEN** o usuário, em tela menor que `lg`, clica no botão de menu
- **THEN** um painel lateral abre pela esquerda com a navegação, o menu do usuário e a troca de tema

#### Scenario: Navegar pelo menu mobile
- **WHEN** o usuário escolhe um item de navegação no painel lateral
- **THEN** a aplicação navega para a rota e o painel fecha

#### Scenario: Desktop
- **WHEN** a tela tem largura `lg` ou maior
- **THEN** o sidebar fixo de 300px é exibido e o header mobile fica oculto
