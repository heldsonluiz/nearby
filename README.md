
<p align="center"><img src="https://raw.githubusercontent.com/heldsonluiz/nearby/refs/heads/main/assets/prints/Thumbnail.png" alt="Nearby App thumbnail"></p>

# Nearby

![image](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![image](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![image](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)
![image](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![image](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![image](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)

Nearby é um aplicativo mobile de clube de benefícios com cupons para utilizar em estabelecimentos próximos a você.
Esse é o projeto do evento NLW Pocket Mobile, um dos conteúdos disponíveis para alunos da Rocketseat.

O projeto realizado foi o desenvolvimento de uma aplicação mobile em React Native, aplicação dos conceitos de Propriedades, Estados e Componentes, tipagem com Typescript, Expo Framework, interface com StyleSheet, roteamento por arquivos com Expo Router, consumo de API Node.js, Bottom Sheet, leitura de QRCode com câmera, exibição de mapa.

<p>&nbsp</p>

## Setup
### Requisistos
- [Node (> 20)](https://nodejs.org/)
- [Expo Go](https://expo.dev/go])

<p>&nbsp</p>

## Rodando
### API
Para exibir as listas de estabelecimentos, cupons e realizar o consumo dos cupons o aplicativo realiza comunicação com uma API, e para que possa ser usado localmente, é necessário que o usuário siga os seguintes passos:
  - Descompactar a pasta 'api.zip' em uma pasta separada
  - Dentro da pasta da API, abrir um terminal e executar
    ```bash
      npm i
      npm start
    ```
  - Atualizar a variável 'EXPO_PUBLIC_API_URL' dentro o arquivo '.env' para contar o IP da máquina aonde a API está rodando

<p>&nbsp</p>

### Mobile
O projeto foi desenvolvido utilizando o framework [Expo](https://expo.dev/) e portanto pode ser visualizado tanto em aparelhos físicos quanto emuladores. Acesse o site do framework para entender qual a melhor opção. Aqui, seguiremos com o Expo Go

Para a visualização do projeto em um aparelho físico é necessário que o usuário baixe o aplicativo Expo Go na loja de aplicativos correspondente ao seu aparelho.

Com o aplicativo já instalado e a variável de ambiente da API configurada corretamente, o usuário poderá rodar e visualizar o projeto seguindo os passos abaixo:
  - Dentro da pasta do mobile, abrir um terminal e executar
  ```bash
    npm i
    npx expo start
  ```
  - O comando gerará um QR Code que ao ser escaneado pelo dispositivo físico abrirá o aplicativo no Expo Go

<p>&nbsp</p>

> OBS: O projeto pode ser configurado para utilizar a localização atual do usuário configurando a variável 'EXPO_PUBLIC_USER_LOCATION=true' dentro do arquivo .env, porém, os dados de exemplo na API estão configurados para uma localizaçẽo específica, portanto ao usar a localização do usuário, pode não ser exibidos estabelecimentos próximos. Para que os estabelecimentos próximos ao usuário sejam exibidos ao utilizar sua localização, é necessário cadastrar locais na API que sejam próximos ao local de testes.

<p>&nbsp</p>

## Utilizando
<p align="center">
<img src="https://raw.githubusercontent.com/heldsonluiz/nearby/refs/heads/main/assets/prints/Project.png" alt="Nearby App Screens Thumbnail">
</p>

- Ao abrir o aplicativo, o usuário é direcionado para uma tela de boas vindas com um pequeno tutorial;
- Ao avançar, é exibida uma lista de locais próximos ao usuário que pode ser filtrada por categorias que são exibidas no topo da tela;
- O usuário pode clicar em um 'pin' no mapa referente a um estabelecimento exibir o nome e endereço do estabelecimento;
- Ao clicar nas informações exibidas ou em um card na listagem de estabelecimentos, o usuário é redirecionado para a tela de detalhes do estabelecimento;
- Nesta tela, o usuário visualizará mais detalhes do estabelecimento e pode consumir um dos cupons disponíveis fazendo o uso da câmera para escanear um QR Code (que ficaria disponível no estabelecimento);
