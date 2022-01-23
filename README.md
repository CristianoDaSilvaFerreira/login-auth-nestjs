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

> Um Sistema de Login com autenticação feito usando o `NestJs` e para autenticação usa-se o `Token JWT - (JSON WEB TOKEN)`
> O NestJS facilita muito a proteção de recursos em nossa API

##  JSON Web Tokens
> JWT, resumidamente, é uma string de caracteres que, caso cliente e servidor estejam sob HTTPS, permite que somente o servidor que conhece o ‘segredo’ possa validar o conteúdo do token e assim confirmar a autenticidade do cliente. O token não é “criptografado”, mas “assinado”, de forma que só com o secret essa assinatura possa ser comprovada, o que impede que atacantes “criem” tokens por conta própria.
> Em termos práticos, quando um usuário se autentica no sistema ou web API (com usuário e senha), o servidor gera um token com data de expiração pra ele. Durante as requisições seguintes do cliente, o JWT é enviado no cabeçalho da requisição e, caso esteja válido, a API irá permitir acesso aos recursos solicitados, sem a necessidade de se autenticar novamente.

![jwt](https://user-images.githubusercontent.com/68359459/150660979-154e65af-f6d3-47a7-91db-0b4915e03177.png)

                                                                                                                                  
> Poderá pode ver o schema de autenticação através do link <a href="https://miro.com/welcomeonboard/NlZFWWdnRWkxVXhzdmNRR3NxRVhRSkFFeWNScFVtVURvQzBhdHJadENjZHppRU1Zb0FtWXMxd2QwdldBZDRTR3wzNDU4NzY0NTE3MTM1Nzg5NTg1?invite_link_id=190498062630">Miro - Autenticação NestJs JWT</a>, mas desde já deixo uma previa nas imagens abaixo                                                                   

 ![schemas auth](https://user-images.githubusercontent.com/68359459/150660719-ed19eaf8-d360-4199-8aa0-2b52ddc29e33.jpg)


![schemas frontend-backend](https://user-images.githubusercontent.com/68359459/150660723-a8981cc4-d0af-45b7-95c2-7abb5d0273f0.jpg)


![schemas local-jwt](https://user-images.githubusercontent.com/68359459/150660727-9060954a-0d28-4620-b57b-ca595d842191.jpg)


![schemas criptografia](https://user-images.githubusercontent.com/68359459/150660732-c65624e9-cd7d-466a-9d52-fdb90572fb56.jpg)

## Autenticação
> Autenticação é você provar que você é você mesmo. Já autorização é você provar que possui permissão para fazer ou ver o que você está tentando.

> Antes de gerar o JWT é necessário que o usuário passe por uma autenticação tradicional, geralmente com usuário e senha. Essa informação fornecida é validada junto a uma base de dados e somente caso ela esteja ok é que geramos o JWT para ele
                                                                                                                         

                                                                                                                                  
# Checklist

## Clonando este repositório

```bash
$ git clone https://github.com/CristianoDaSilvaFerreira/login-auth-nestjs.git
```

> Execute o comando `npm install` ou `yar install` para estar as depedências do `package.json`

```node.js
npm install
```

## Rotando o projeto
```node.js
npm run start:dev
```

## Iniciando um projeto NestJS
                                                                                                                                  
> Antes de iniciar, certifique-se de que você possui um projeto NestJS criado e que a CLI do NestJS está instalada no seu computador.

```node.js
nest new nome_projeto
```
                                                                                                                                  
> Nesse caso como gerenciador de pacotes estou usando o `npm` mas pode ficar a vontade em usar qualquer um.
                                                                                                                                  
## Instalações Necessárias
* Prisma
                                                                                                                                  
```node.js
npm install -D prisma
```

> A instalação do `Prisma`com `-D` significa que estará sendo feito uma instalação para desenvolvimento.
                                                                                                                                  
* Inicializar o prisma
                                                                                                                                  
```node.js
npx prisma init
```
                                                                                                                                  
* Configurar o arquivo `.env`
                                                                                                                                  
```java
# Configuration

JWT_SECRET=""

# Database

DATABASE_URL=""
```
     
* Arquivo `.env` preenchido

```java
# Configuration

JWT_SECRET="texto aleatório para proteger sua aplicação"

# Database

DATABASE_URL="file:./sqlite.db" 
```
                               
* Migra o Banco de Dados
                               
```node.js
npx prisma migrate dev --name init
```           

> Esse comando deverá instalar a dependência `@prisma/client` no projeto.
                               
## Criaçãp do módulo do Prisma
                               
#### Comandos na `CLI` para criação dos arquivos
                               
```node.js
nest g module prisma
nest g service prisma                              
```

## Dependências
                               
- `@nestjs/passport`
- `@nestjs/jwt`
- `bcrypt`
- `class-validator`
- `class-transformer`
- `passport`
- `passport-jwt`
- `passport-local`
                               
Comando para instalar tudo ao mesmo tempo:
                               
```node.js
npm i @nestjs/passport @nestjs/jwt bcrypt class-validator class-transformer passport passport-jwt passport-local
```
                               
## Dependências Dev

- `@types/passport-jwt`
- `@types/passport-local`
- `@types/bcrypt`
                               
> Comando para instalar tudo ao mesmo tempo:
                               
```node.js
npm i -D @types/passport-jwt @types/passport-local @types/bcrypt
```

# Códigos

## Usuários que será autenticados: diretório `src/user`

> Comando do terminal para criação dos arquivos

```node.js
nest g resource user
```

## Autenticação: diretório `auth`

```node.js
nest g module auth
nest g controller auth
nest g service auth
```

## Tratamento de erros: diretório `src/auth/errrs`

```node.js
export class UnauthorizedError extends Error {}
```

# Requisições

## Criação de usuário

> ❗ Importante ❗
>
> Para criar um usuário, certifique-se de liberar o endpoint antes com o decorator @IsPublic().
>
> Caso a criação de usuários da sua aplicação seja restrita, remova o decorator IsPublic(), pois as próximas criações deverão ser autenticadas por um usuário já existente.

**Endpoint:** `/user`

**Method:** `POST`
                               
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

**Endpoint:** `/login`

**Method:** _ POST`

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

                       
                               
                               
                               
                               
               
