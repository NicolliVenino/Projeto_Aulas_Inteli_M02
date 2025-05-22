**Explique com suas palavras o papel de cada camada da arquitetura MVC usada neste projeto.**

O Model interage diretamente com o banco de dados, gerenciando o acesso e a manipulação dos dados com os comandos de CRUD. O Controller aciona o Model conforme as ações do usuário, enviando uma resposta para o View. Já a camada Views (responsável por mostrar as informações aos usuários), por sua vez, corresponde aos arquivos .ejs, os quais renderizam HTML com dados vindo do Controller.

**Como ocorre o envio e o recebimento de dados no formato JSON neste projeto?**

O envio das requisições são feitas com JSON. 
Por exemplo, no controller, pra criar um POST a gnt coloca que tal atributo recebe req.body. Esse req.body diz que a informação desse atributo vai ser recebida pelo usuário no formato JSON, que só funciona porque a gente ativou o express.json() no app.js. 

**Qual a importância de usar HTML básico com formulários e tabelas para organizar e manipular dados no navegador?**

A importância do HTML para Formulários e Tabelas é porque ele facilita o CRUD, de modo que o usuário pode criar, editar, deletar com uma visualização muito melhor e mais didática.

Por exemplo, no código abaixo, o formulário envia um POST para /cursos, que o controller recebe, usa o model e redireciona o usuário.

![Captura de tela 2025-05-22 111940](https://github.com/user-attachments/assets/915a6a49-24c9-45fd-8e60-c97e7f4d0f1c)

 
