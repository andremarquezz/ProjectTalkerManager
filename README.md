<h1 align="center">Projeto Talker Manager</h1>
<p align="center">Uma aplicação de cadastro de talkers (palestrantes) em que é possível cadastrar, visualizar, pesquisar, editar e excluir informações.!</p>

# Sumário

</br>

• [Sobre o Projeto](#-sobre-o-projeto)

• [Como executar o projeto](#-como-executar-o-projeto)

### 📃 Sobre o Projeto

---

<p>Uma API de um CRUD (Create, Read, Update e Delete) de palestrantes (talkers) que possui endpoints que leem e escrevem em um arquivo utilizando o módulo fs</p>

---

### 🛠 Tecnologias e Bibliotecas utilizadas no desenvolvimento do projeto

- **[Node.js](https://nodejs.org/en/)**

- **[Fs Modules](https://nodejs.dev/learn/reading-files-with-nodejs)**

- **[Crypto](https://nodejs.org/api/crypto.html)**

- **[Express](http://expressjs.com/pt-br/)**

- **[Nodemon](https://www.npmjs.com/package/nodemon)**

  > Veja o arquivo [package.json](https://github.com/andremarquezz/ProjectTalkerManager/blob/main/package.json)


---

### 🚀 Como executar o projeto

_Pré-requisitos_

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com),
[Node.js](https://nodejs.org/en/).

É recomendado utilizar algum cliente HTTP, como [Postman](https://www.postman.com/) ou o [Insomnia](https://insomnia.rest/download).

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

---

_1- Clonar o repositorio_

```jsx
git@github.com:andremarquezz/ProjectTalkerManager.git
```

---


<details>
  <summary><strong>:whale: Rodando no Docker</strong></summary><br />
  
  ## Com Docker
 
 
_Rode o serviço `node` com o comando_

```jsx
docker-compose up -d
```

- Esse serviço irá inicializar um container chamado `talker_manager`.
  - A partir daqui você pode rodar o container via CLI ou abri-lo no VS Code.

_Via CLI use o comando_
```jsx
docker exec -it talker_manager bash
```
- Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

_Instale as dependências `dentro do container` com_

```jsx
npm install
```
  
  </details>
  
---
  
<details>
  <summary><strong>:computer: Rodando Localmente</strong></summary><br />
 
 _Instale as dependências com o comando_
 
 ```jsx
npm install
```
- Para rodar o projeto desta forma, **obrigatoriamente** você deve ter o `node` instalado em seu computador.
  - Recomenda-se a versão `^16`
</details>

---
