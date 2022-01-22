<div align="center">
 <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/CristianoDaSilvaFerreira/login-auth-nestjs" height="32">
 <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/CristianoDaSilvaFerreira/login-auth-nestjs" height="32">
 <img alt="NestJs" src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white" height="32">
 <img alt="Badges TypeScript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="32"> 
 <img alt="Node.Js" src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" height="32">
 <img alt="Next Js" src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" height="32">
 <br />
 <br />
  <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" height="24"> 
  <img alt="npm" src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white" height=24">  
  <img alt="SQLite" src="https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white" height="24">
  <img alt="VS Code" src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white" height="24">
  <img alt="Prisma ORM" src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" height="24">
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/CristianoDaSilvaFerreira/login-auth-nestjs" height="24">
</div>

# Login Auth NestJs
                                                                                                                                  
 Um Sistema de Login com autenticação feito usando o `NestJs` e para autenticação usa-se o `Token JWT`
                                                                                                                                  
# Checklist
                                                                                                                                  
## Iniciando um projeto NestJS
                                                                                                                                  
Antes de iniciar, certifique-se de que você possui um projeto NestJS criado e que a CLI do NestJS está instalada no seu computador.

```bash
nest new nome_projeto
```
                                                                                                                                  
Nesse caso como gerenciador de pacotes estou usando o `npm` mas pode ficar a vontade em usar qualquer um.
                                                                                                                                  
## Instalações Necessárias
* Prisma
                                                                                                                                  
```bash
npm install -D prisma
```

A instalação do `Prisma`com `-D` significa que estará sendo feito uma instalação para desenvolvimento.
                                                                                                                                  
* Inicializar o prisma
                                                                                                                                  
```bash
npx prisma init
```
                                                                                                                                  
* Configurar o arquivo `.env`
                                                                                                                                  
```bash
# Configuration

JWT_SECRET=""

# Database

DATABASE_URL=""
```
     
* Arquivo `.env`preenchido

```bash
# Configuration

JWT_SECRET="texto aleatório para proteger sua aplicação"

# Database

DATABASE_URL="file:./sqlite.db" 
```
                               
* Migra o Banco de Dados
                               
```bash
npx prisma migrate dev --name init
```           

Esse comando deverá instalar a dependência `@prisma/client` no projeto.
                               
## Criaçãp do módulo do Prisma
                               
#### Comandos na `CLI` para criação dos arquivos
                               
```bash
nest g module prisma
nest g service prisma                              
```

## Dependências
                               
* @nestjs/passport
* @nestjs/jwt
* bcrypt
* class-validator
* class-transformer
* passport
* passport-jwt
* passport-local
                               
Comando para instalar tudo ao mesmo tempo:
                               
```bash
npm i @nestjs/passport @nestjs/jwt bcrypt class-validator class-transformer passport passport-jwt passport-local
```
                               
## Dependências Dev

* @types/passport-jwt
* @types/passport-local
* @types/bcrypt
                               
Comando para instalar tudo ao mesmo tempo:
                               
```bash
npm i -D @types/passport-jwt @types/passport-local @types/bcrypt
```

# Códigos

## Usuários que será autenticados: diretório `src/user`

Comando do terminal para criação dos arquivos

```bash
nest g resource user
```

## Autenticação: diretório `auth`

```bash
nest g module auth
nest g controller auth
nest g service auth
```

## Tratamento de erros: diretório `src/auth/errrs`

```bash
export class UnauthorizedError extends Error {}
```

# Requisições

## Criação de usuário

❗ Importante ❗
Para criar um usuário, certifique-se de liberar o endpoint antes com o decorator @IsPublic().
Caso a criação de usuários da sua aplicação seja restrita, remova o decorator IsPublic(), pois as próximas criações deverão ser autenticadas por um usuário já existente.

**Endpoint:** /user

**Method:** POST
                               
### Request Body:

```JSon
{
    "email": "email@email.com",
    "password": "Abc@123",
    "name": "name user"
}
```

### Request Body: (Status 201)

```JSon
{
    "email": "email@email.com",
    "password": "Abc@123",
    "name": "name user"
}
```
## Realizando o login

**Endpoint:** /login

**Method:** POST

### Request Body:

```JSon
{
    "email": "email@email.com",
    "password": "Abc@123",
}
```

### Response Body (Status 200):

```JSon
{    
    "access_token": "JWT token gerado"
}
```

                       
                               
                               
                               
                               
               
