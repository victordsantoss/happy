<h1 align="center">
    <img alt="Happy" src="./assets/logo.svg" height="100px" />
    <br>Next Level Week #3<br/>
    Node.js | ReactJS | React Native
</h1>

<p align="center">
  <a href="#sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#executar">Como Executar</a>
</p>

<p align="center">
    <img alt="Design do Projeto" width="650px" src="./assets/happy.png" />
<p>

<a id="sobre"></a>

# 🚀 O Projeto

O **Happy** é uma aplicação que conecta pessoas à casas de acolhimento institucional para fazer o dia de muitas crianças mais feliz

Esta aplicação foi desenvolvida durante a **Next Level Week #3**, projeto da [Rocketseat](https://rocketseat.com.br/).

<a id="tecnologias"></a>

# 🔩 Tecnologias

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [React.js](https://pt-br.reactjs.org/)
- [React Native](https://reactnative.dev/)

<a id="executar"></a>

## 💻 Configurações iniciais 

> Pré-requisitos

    É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** 16.11.
    
    É **necessário** possuir o **[Git](https://git-scm.com/)**.

    É **necessário** possuir um gerenciador de pacotes, **[Yarn](https://yarnpkg.com/)** ou **[NPM](https://www.npmjs.com/)**.

    É **necessário** ter o **[Expo](https://expo.io/)**.

> Clonando o Projeto na sua máquina:

    git clone https://github.com/victordsantoss/happy.git

> Configurando o Projeto:

    Nas pastas **api** e **web** execute: yarn install

> Rodar migrations

    Na pasta **api**, execute: yarn typeorm migration:run


## 🏃 Executando

> Para executar a aplicação **Web** e **Mobile**:
    
    yarn start


> Para executar o **api**, utilize:

    yarn dev


## Happy - NLW 03



### 
Node 16.11.1

### Como executar 
    npm start
    yarn dev

#### api
##### Migrations
    yarn typeorm migrations:create -n create_orphanages
    yarn typeorm migrations:run
    yarn typeorm migration:revert