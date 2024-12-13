<p align="center"><img src="https://raw.githubusercontent.com/heldsonluiz/nearby/refs/heads/main/assets/prints/Thumbnail.png" alt="Nearby App thumbnail"></p>

# Nearby

![image](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![image](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![image](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)
![image](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![image](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![image](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)

**Nearby** é um aplicativo mobile que conecta você aos melhores benefícios e descontos disponíveis em estabelecimentos próximos à sua localização.

Este projeto foi desenvolvido durante o evento **NLW Pocket Mobile** da **Rocketseat** e apresenta funcionalidades modernas como leitura de QR Codes, integração com APIs e exibição de mapas interativos.

---

## **Funcionalidades**

- Lista de estabelecimentos próximos com cupons de desconto.
- Filtros por categorias para facilitar a busca.
- Exibição de mapa interativo com localização de estabelecimentos.
- Leitura de QR Codes para consumir cupons diretamente no local.
- Integração com APIs para busca de dados em tempo real.
- Suporte à configuração de localização personalizada.

<p align="center">
<img src="https://raw.githubusercontent.com/heldsonluiz/nearby/refs/heads/main/assets/prints/Project.png" alt="Nearby App Screens Thumbnail">
</p>

---

## **Setup**

### **Requisitos**

- [Node.js (> 20)](https://nodejs.org/)
- [Expo Go](https://expo.dev/client)

### **Instalação**

1. Certifique-se de que o Node.js está instalado em sua máquina.
2. Instale o Expo CLI globalmente executando:
   ```bash
   npm install -g expo-cli
   ```
3. Baixe e instale o aplicativo **Expo Go** na loja de aplicativos do seu dispositivo.

---

## **Como Rodar o Projeto**

### **API**

Para exibir a lista de estabelecimentos e cupons, é necessário configurar e rodar a API localmente:

1. Descompacte a pasta `api.zip` em um diretório separado.
2. Abra o terminal na pasta da API e execute os comandos:
   ```bash
   npm install
   npm start
   ```
3. Atualize a variável `EXPO_PUBLIC_API_URL` no arquivo `.env` com o IP da máquina onde a API está rodando.

### **Mobile**

O projeto foi desenvolvido utilizando o framework [Expo](https://expo.dev/). Para rodá-lo:

1. Navegue até a pasta do projeto mobile e execute:
   ```bash
   npm install
   npx expo start
   ```
2. Escaneie o QR Code gerado com o aplicativo **Expo Go** em seu dispositivo.

> **Nota:** Para habilitar a funcionalidade de localização atual do usuário, configure `EXPO_PUBLIC_USER_LOCATION=true` no arquivo `.env`. Caso contrário, serão exibidos dados de exemplo de uma localização padrão.

---

## **Utilização**

1. Ao abrir o aplicativo, você verá uma tela de boas-vindas com um pequeno tutorial.
2. Navegue pela lista de estabelecimentos próximos, filtrando por categorias no topo da tela.
3. Clique em um estabelecimento no mapa para visualizar informações detalhadas.
4. Na tela de detalhes, consuma cupons disponíveis escaneando o QR Code do estabelecimento.

---

## **Licença**

Este projeto está licenciado sob a licença MIT. Para mais informações, leia o arquivo [LICENSE](LICENSE).

---

## **Contato**

Dúvidas ou sugestões? Entre em contato:

- **E-mail:** heldsonluiz@gmail.com
- **LinkedIn:** [Heldson Luiz](https://linkedin.com/in/heldsonluiz)

---
