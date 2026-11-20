FoodExpress - Receitas do Coração

Site institucional e cardápio digital interativo para um restaurante, desenvolvido como atividade da disciplina de **Desenvolvimento Web**. O tema "FoodExpress" foi proposto pelo professor, e o layout foi pensado primeiro para **celulares**, com aparência de aplicativo.

Sobre o projeto

A página apresenta o restaurante, o cardápio dividido por categorias, tabelas informativas, um formulário para reserva de mesas e um **sistema de carrinho de compras interativo** para pedidos de entrega.

Funcionalidades

- **Site institucional:** cabeçalho, banner principal e seção "Quem somos"
- **Cardápio em Grid:** categorias de Pizzas, Bebidas, Cafés e Sobremesas, cada uma levando à sua lista de produtos
- **Carrinho de compras interativo:**
  - Adição de itens ao clicar nos produtos do cardápio
  - Botão flutuante com contador dinâmico de itens
  - Modal de pedido com listagem dos produtos selecionados, opção de remover itens e cálculo automático do valor total
  - Formulário de entrega com validação de campos obrigatórios, CEP e telefone
  - Consulta automática de endereço pelo CEP via API **ViaCEP**
- **Tabela de valores nutricionais** dos principais itens
- **Tabela de horários** de funcionamento e entregas
- **Formulário de reserva de mesas:** nome, e-mail, telefone, data, horário, número de pessoas e mensagem
- **Menu de navegação inferior fixo**, no estilo de aplicativo mobile
- **Layout responsivo** com media queries para celular, tablet e computador

Tecnologias utilizadas

- **HTML5:** estrutura semântica, listas, tabelas, formulários, modal e links internos e externos
- **CSS3:** seletores, cores e fontes, box model, posicionamento, Flexbox, Grid, animações e media queries
- **JavaScript & jQuery:** manipulação do DOM, controle do carrinho de compras, validação de formulário e requisição assíncrona (`$.getJSON`) à API ViaCEP

📁 Estrutura de arquivos

📁 Estrutura de arquivos

```
foodexpress/
├── index.html
├── styles.css
├── script.js
└── README.md
```

📱 Como testar o layout responsivo

1. Execute o projeto no navegador.
2. Pressione **F12** para abrir as ferramentas de desenvolvedor.
3. Clique no ícone de celular para simular telas menores.
4. A partir de **768px** de largura, o cardápio passa de 2 para 4 colunas e a lista de produtos passa para 2 colunas.

🖼️ Prévia

<img width="898" height="907" alt="image" src="https://github.com/user-attachments/assets/ab548119-3189-4b6a-acd7-0088bf1a0513" />

📌 Observações

- Os preços, valores nutricionais, horários e dados de contato são **fictícios**, criados apenas para fins didáticos.
- Os formulários de reserva e de pedido não enviam dados para nenhum servidor, pois o projeto não possui back-end.
- A busca automática de endereço por CEP depende de conexão com a internet para consultar a API **ViaCEP**, assim como o carregamento do jQuery e da imagem do banner.
