## ADDED Requirements

### Requirement: Dialog de novo currículo
Ao clicar em "Criar novo currículo", a aplicação SHALL abrir um dialog com o campo "Título" obrigatório e as ações "Cancelar" e "Criar currículo".

#### Scenario: Abrir o dialog
- **WHEN** o usuário clica no botão "Criar novo currículo" da listagem
- **THEN** o dialog "Criar novo currículo" é exibido com o foco no campo "Título"

#### Scenario: Título vazio
- **WHEN** o usuário envia o formulário sem preencher o título
- **THEN** o envio é bloqueado e o campo indica que é obrigatório

#### Scenario: Cancelar
- **WHEN** o usuário clica em "Cancelar"
- **THEN** o dialog fecha e o valor digitado é descartado
