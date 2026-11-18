# BrasaBox — Sistema web de Fast-Food

Projeto acadêmico fictício desenvolvido com HTML5, CSS3 e JavaScript puro.

## Requisitos do Visual Paradigm implementados

- Login
- Cadastro de usuário
- Menu principal
- Gerenciamento de carrinho
- Adicionar item
- Remover item
- Calcular total
- Realizar pedido
- Realizar pagamento (simulado)
- Confirmar pagamento
- Área administrativa
- Cadastrar produto
- Editar produto
- Remover produto

O diagrama também mostra o encerramento do sistema. No site, isso é representado pela opção **Sair** no perfil e pela limpeza da sessão.

## Como executar

1. Extraia a pasta.
2. Abra `index.html` no navegador ou use o Live Server do VS Code.
3. Não é necessário servidor ou banco de dados.
4. Os dados ficam no `localStorage` do navegador.

### Acesso administrativo de demonstração
- E-mail: `admin@brasabox.local`
- Senha: `1234`

## Estrutura

```text
fastfood-site/
├── index.html
├── cardapio.html
├── produto.html
├── promocoes.html
├── sobre.html
├── contato.html
├── carrinho.html
├── pedido.html
├── perfil.html
├── admin.html
├── css/style.css
├── js/dados.js
├── js/script.js
├── js/produtos.js
├── js/carrinho.js
├── js/auth.js
├── js/pedido.js
├── js/admin.js
└── img/
    ├── produtos/
    ├── banners/
    └── icones/
```
