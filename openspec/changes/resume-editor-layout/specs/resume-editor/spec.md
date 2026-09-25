## ADDED Requirements

### Requirement: Editor de currículo em tela cheia
A rota `/dashboard/resumes/[id]` SHALL exibir o editor em tela cheia, sem a sidebar do dashboard, com três painéis lado a lado: informações, pré-visualização e estrutura.

#### Scenario: Abrir o editor
- **WHEN** o usuário acessa `/dashboard/resumes/<id>`
- **THEN** o editor ocupa toda a tela e a sidebar do dashboard não é exibida

#### Scenario: Voltar para a listagem
- **WHEN** o usuário clica no logo do painel de informações
- **THEN** é redirecionado para `/dashboard/resumes`

### Requirement: Painéis redimensionáveis
Os painéis laterais SHALL iniciar com 30% (informações) e 25% (estrutura) da largura e SHALL poder ser redimensionados dentro dos limites de 20–40% e 20–35%, respectivamente.

#### Scenario: Tamanho inicial
- **WHEN** o editor é carregado
- **THEN** os painéis laterais ocupam 30% e 25% da largura e o central ocupa o restante

#### Scenario: Redimensionar
- **WHEN** o usuário arrasta um divisor além do limite do painel
- **THEN** o painel para no tamanho mínimo ou máximo configurado
