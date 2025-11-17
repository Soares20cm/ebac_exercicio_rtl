# Requirements Document

## Introduction

Este documento define os requisitos para implementar testes automatizados usando React Testing Library para validar a funcionalidade de inserção de comentários em uma aplicação React. O objetivo é praticar o uso do React Testing Library e garantir que a funcionalidade de adicionar comentários funcione corretamente.

## Glossary

- **Sistema de Testes**: O conjunto de testes automatizados implementados usando React Testing Library
- **Componente de Comentários**: O componente React responsável por exibir e gerenciar comentários
- **data-testid**: Atributo HTML usado para identificar elementos durante os testes
- **RTL**: Abreviação para React Testing Library

## Requirements

### Requirement 1

**User Story:** Como desenvolvedor, eu quero adicionar atributos data-testid aos elementos do componente PostComments, para que eu possa identificar elementos de forma confiável nos testes

#### Acceptance Criteria

1. THE Componente de Comentários SHALL incluir o atributo data-testid no campo textarea com valor "campo-comentario"
2. THE Componente de Comentários SHALL incluir o atributo data-testid no botão de envio com valor "btn-comentar"
3. THE Componente de Comentários SHALL incluir o atributo data-testid em cada comentário exibido com valor "comentario"
4. WHEN os atributos são adicionados, THE Componente de Comentários SHALL manter toda a funcionalidade existente

### Requirement 2

**User Story:** Como desenvolvedor, eu quero testar a inserção de dois comentários consecutivos, para que eu possa garantir que múltiplos comentários podem ser adicionados sequencialmente

#### Acceptance Criteria

1. WHEN o teste é executado, THE Sistema de Testes SHALL renderizar o Componente de Comentários
2. WHEN o primeiro comentário é inserido no campo usando data-testid, THE Sistema de Testes SHALL preencher o textarea com o texto do primeiro comentário
3. WHEN o botão de comentar é clicado usando data-testid, THE Sistema de Testes SHALL submeter o primeiro comentário
4. WHEN o primeiro comentário é submetido, THE Sistema de Testes SHALL verificar que o comentário aparece na tela usando data-testid
5. WHEN o segundo comentário é inserido e submetido, THE Sistema de Testes SHALL verificar que ambos os comentários estão visíveis simultaneamente

### Requirement 3

**User Story:** Como desenvolvedor, eu quero atualizar o repositório com os testes criados, para que eu possa enviar o link para a EBAC

#### Acceptance Criteria

1. WHEN os testes são implementados, THE Sistema de Testes SHALL executar com sucesso usando o comando "yarn test"
2. WHEN os testes estão completos, THE desenvolvedor SHALL fazer commit das alterações no repositório Git
3. WHEN o commit é feito, THE desenvolvedor SHALL fazer push das alterações para o repositório remoto no GitHub
4. THE repositório atualizado SHALL conter o arquivo de teste com a implementação dos dois comentários
