# Projeto Cadastro de usuário - Backend
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/wendellmoraisz/cadastro-usuario-server/blob/main/LICENSE) <br>

O projeto simula um sistema de login, dando a possibilidade de ser criada uma nova conta pelo usuário.

# Tecnologias utilizadas
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [MySQL](https://www.mysql.com/)

# Funcionalidades
  - [x] Registrar um novo usuário no Banco de Dados
  - [x] Validar o login, verificando se as credenciais inseridas existem no BD

# Requisitos mínimos para executar o projeto
- Ter o [Node.js](https://nodejs.org/en/download/) instalado na sua máquina.
- Ter o [MySQL](https://dev.mysql.com/downloads/mysql/) instalado na sua máquina.

# Como rodar o server

Crie um novo Schema no MySQL Workbench.

Execute os [comandos SQL](/database/createTables.sql) no MySQL (se o seu editor de código for o VSCode, recomendo utilizar a extensão vscode-database).

Insira as credenciais do seu BD nas linhas 15 e 16 do arquivo index.ts

```bash

# clone o repositório
git clone https://github.com/wendellmoraisz/cadastro-usuario-server

#entre no diretório do projeto e execute os seguintes comandos no seu terminal:
npm install
npm start
```

Após isso, execute o [Front-end do projeto](https://github.com/wendellmoraisz/cadastro-usuario-client).
