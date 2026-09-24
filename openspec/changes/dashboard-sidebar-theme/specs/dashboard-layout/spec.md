## ADDED Requirements

### Requirement: Navegação no sidebar
O sidebar do dashboard SHALL exibir links para "Currículos" (`/dashboard/resumes`) e "Configurações de Conta" (`/dashboard/account`), destacando o item cuja rota corresponde à rota atual.

#### Scenario: Rota ativa destacada
- **WHEN** o usuário está em `/dashboard/resumes`
- **THEN** o item "Currículos" aparece com fundo de destaque (`bg-accent`)

#### Scenario: Navegação entre seções
- **WHEN** o usuário clica em "Configurações de Conta"
- **THEN** a aplicação navega para `/dashboard/account`

### Requirement: Menu do usuário
O rodapé do sidebar SHALL exibir o avatar e o nome do usuário, que abrem um menu com "Configurações de Conta" e "Sair".

#### Scenario: Nome longo
- **WHEN** o nome do usuário não cabe na largura disponível
- **THEN** o nome é truncado com reticências e o botão de tema continua visível dentro do sidebar

### Requirement: Troca de tema
A aplicação SHALL permitir escolher o tema Claro, Escuro ou Sistema pelo botão no rodapé do sidebar, cada opção com seu ícone, e manter a escolha entre visitas.

#### Scenario: Selecionar tema escuro
- **WHEN** o usuário escolhe "Escuro" no menu de tema
- **THEN** a classe `dark` é aplicada ao `<html>` e a escolha persiste ao recarregar

#### Scenario: Tema padrão
- **WHEN** o usuário nunca escolheu um tema
- **THEN** a aplicação segue a preferência do sistema operacional
