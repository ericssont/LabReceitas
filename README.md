# Projeto avaliativo FuturoDEV

## LabReceitas - Controle de Receitas Online

Este projeto é parte de um desafio prático proposto pelo FuturoDEV - SENAI para avaliar desenvolvedores em potencial. O objetivo é criar uma aplicação que permita ao usuário criar, visualizar e gerenciar receitas de forma fácil e eficiente.

#### Requisitos da aplicação

A aplicação foi desenvolvida em React e atende aos seguintes requisitos:

- Título na aba do navegador para facilitar a identificação da aplicação;
- Cabeçalho dentro da página para indicar em qual página o usuário se encontra e do que se trata o conteúdo;
- Três campos de seleção para filtrar receitas por "Sem derivados de leite", "Sem Glúten" e "Todas";
- Botão para filtrar as receitas;
- Botão para adicionar uma nova receita. Ao ser pressionado, a aplicação apresenta um pop-up para cadastro da receita, com os seguintes campos: nome (receita), ingredientes, modo de preparo e restrições (lactose ou glúten);
- Possibilidade de editar ou excluir as informações da receita. Ao pressionar o botão de edição (!), a aplicação apresentará um pop-up com as informações da receita e três botões: "Alterar", "Excluir" ou "Cancelar" ;
- Lista de receitas será salva no localStorage do navegador, incluindo as receitas que foram excluídas.
- A lista será carregada sempre que a página for reaberta.

### Como utilizar a aplicação

- Para utilizar a aplicação, basta abrir `[ https://lab-receita.herokuapp.com/ ]` em seu navegador preferido. Ao carregar a página, você poderá adicionar suas receitas preferidas.

- Para adicionar uma nova receita, basta clicar no botão "+" e preencher os campos solicitados. Ao finalizar, clique em "Adicionar" para adicionar a receita à lista.

- Para filtrar as receitas, basta selecionar as opção desejada no checkbox de filtro.

- Para editar ou excluir uma receita existente, basta clicar no botão "i" ao lado do nome da receita e editar a opção desejada no pop-up.

### Considerações finais

Este projeto foi desenvolvido como parte de um desafio avaliativo e possui fins educativos.
