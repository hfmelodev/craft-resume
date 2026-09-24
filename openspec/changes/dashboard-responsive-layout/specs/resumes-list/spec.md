## MODIFIED Requirements

### Requirement: Listagem de currículos
A página `/dashboard/resumes` SHALL exibir o título "Currículos" e uma grade responsiva com o botão "Criar novo currículo" como primeiro item, seguido dos currículos do usuário.

#### Scenario: Grade responsiva
- **WHEN** a largura da tela aumenta
- **THEN** a grade passa de 1 coluna (abaixo de 400px) para 2, 3, 4 e 5 colunas nos breakpoints `400px`, `md`, `lg` e `xl`

#### Scenario: Cards no mobile
- **WHEN** a largura da tela é menor que `sm`
- **THEN** os cards e os skeletons usam altura reduzida

#### Scenario: Abrir currículo
- **WHEN** o usuário clica em um card de currículo
- **THEN** a aplicação navega para `/dashboard/resumes/[id]`
