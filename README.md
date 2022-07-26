# API-Rest-Node.Js-e-MongoDB

- A api será baseado me framework Express para tratra as reqisições e enviar as respostas aos endPoints;
- Utiliza-se o MongoDB como banco, com a ODM Mongoose;
- As operações serão realizadas no MongoDB Atlas;
- O pacore Nodemon vai ajudar a atualizar o código em tempo real da aplicação;
- A API será testada pelo software Postman.

 # :hammer_and_wrench: Ferramentas Necessárias:
 - Node.js para rodar o projeto e utlizar npm para gerenciar os pacotes da aplicação;
 - Editor de código : VS code;
 - Postman, para teste de API;
 - Conta MongoDB Atlas ou MongoDB instalada;

## Objetivo do código
- Criar uma API nos padrões RESTful, que terá um Crud;
- os ENdppoints serão criados como os verbos HTTP que correspondem a ação do mesmo;
- As respostas serão baseadas em Json, retornando também o status correto;
- validações simples, para simular o 'mundo real';

## Pacotes de instlação

- npm init -y (para iniciar o arquivo Package.Json);
- npm stall dotenv

## Dependencias instaladas
-  npm install express nodemon mongoose
# Pastas criadas
## Arquivo criado Index.js
- Criação da ligação de banco de Dados MongoDB
- Crud de conexão
- Configuração inicial
- Rotas de API 
## Models / arquivos
- Person.js : criação de metodos para poder salva-los, ler 

## Person.JS
- exportação do módulo
- Read- leitura de dados
- Resgate de pessoas cadastradas
- Criaçao de dados
- Filtar a requisição do Api através de filtros, através de ID
- Update - atualização de dados
- atualização de dados através do Put e do Path
- Deletar dados

-Midlewares que são executados entre as requisições e respostas
- app.use arquivo de confuguração nas classes

https://user-images.githubusercontent.com/82326458/181131806-9ee8f5d9-3299-4ba4-8bc1-8b23c313f879.mp4
