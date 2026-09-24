## ADDED Requirements

### Requirement: Listagem de currículos
A página `/dashboard/resumes` SHALL exibir o título "Currículos" e uma grade responsiva com o botão "Criar novo currículo" como primeiro item, seguido dos currículos do usuário.

#### Scenario: Grade responsiva
- **WHEN** a largura da tela aumenta
- **THEN** a grade passa de 2 para 3, 4 e 5 colunas nos breakpoints `md`, `lg` e `xl`

#### Scenario: Abrir currículo
- **WHEN** o usuário clica em um card de currículo
- **THEN** a aplicação navega para `/dashboard/resumes/[id]`

### Requirement: Data de atualização relativa
Cada card de currículo SHALL exibir a última atualização em formato relativo, em português.

#### Scenario: Atualizado ontem
- **WHEN** o currículo foi atualizado há um dia
- **THEN** o card exibe "Última atualização há 1 dia"

### Requirement: Estado de carregamento
Enquanto a lista carrega, a página SHALL exibir uma grade de skeletons com o mesmo layout da lista.

#### Scenario: Carregando
- **WHEN** a lista ainda não foi resolvida
- **THEN** são exibidos placeholders animados no lugar dos cards
