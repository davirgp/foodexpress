FoodExpress - Receitas do Coração

Site institucional e cardápio digital para um restaurante, desenvolvido como atividade da disciplina de **Desenvolvimento Web** (Parte 1: HTML5 e CSS3). O tema "FoodExpress" foi proposto pelo professor, e o layout foi pensado primeiro para **celulares**, com aparência de aplicativo.

Sobre o projeto

A página apresenta o restaurante, o cardápio dividido por categorias, tabelas informativas e um formulário para reserva de mesas. Toda a navegação é feita por **âncoras internas**, sem JavaScript.

Funcionalidades

- **Site institucional:** cabeçalho, banner principal e seção "Quem somos"
- **Cardápio em Grid:** categorias de Pizzas, Bebidas, Cafés e Sobremesas, cada uma levando à sua lista de produtos
- **Tabela de valores nutricionais** dos principais itens
- **Tabela de horários** de funcionamento e entregas
- **Formulário de reserva de mesas:** nome, e-mail, telefone, data, horário, número de pessoas e mensagem
- **Menu de navegação inferior fixo**, no estilo de aplicativo mobile
- **Layout responsivo** com media queries para celular, tablet e computador

Tecnologias utilizadas

- **HTML5:** estrutura semântica, listas, tabelas, formulário e links internos e externos
- **CSS3:** seletores, cores e fontes, box model, posicionamento, Flexbox, Grid e media queries

📁 Estrutura de arquivos

```
foodexpress/
├── index.html
├── styles.css
└── README.md
```

📱 Como testar o layout responsivo

1. Execute o projeto no navegador.
2. Pressione **F12** para abrir as ferramentas de desenvolvedor.
3. Clique no ícone de celular para simular telas menores.
4. A partir de **768px** de largura, o cardápio passa de 2 para 4 colunas.

🖼️ Prévia

<img width="898" height="907" alt="image" src="https://github.com/user-attachments/assets/ab548119-3189-4b6a-acd7-0088bf1a0513" />

📌 Observações

- Os preços, valores nutricionais, horários e dados de contato são **fictícios**, criados apenas para fins didáticos.
- O formulário de reserva não envia dados para nenhum servidor, pois o projeto não utiliza JavaScript nem back-end.
- A imagem do banner é carregada da internet. Sem conexão, o banner aparece apenas com a
