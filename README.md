```markdown
# ConectaClima 🌍🌦️

ConectaClima é um aplicativo móvel desenvolvido durante o hackathon Hacker Cidadão. Ele permite que os usuários registrem e acompanhem eventos climáticos em suas regiões, promovendo a conscientização e a adaptação às mudanças climáticas.

## Estrutura do Projeto

```
```
conectaclima/
├── app/
│   ├── app/
│   ├── assets/
│   ├── components/
│   ├── .gitignore
│   ├── app.json
│   ├── babel.config.js
│   ├── dataAbrigos.json
│   ├── dataAreas.json
│   ├── package-lock.json
│   ├── package.json
│   ├── tailwind.config.js
│   └── .gitattributes
└── README.md
```

## Visão Geral 📋

ConectaClima é um aplicativo móvel que permite aos usuários:

- 📊 Registrar diferentes tipos de eventos climáticos, como chuvas, tempestades e ondas de calor.
- 🕒 Acompanhar a data, hora e localização dos eventos registrados.
- 🌐 Ver um mapa com a localização dos eventos registrados por outros usuários.

## Tecnologias Utilizadas 🛠️

### Frontend:
- 🖥️ React Native
- 📱 Expo
- 🌐 Tailwind

## Funcionalidades ✨

- **Registro de Eventos Climáticos:** Os usuários podem adicionar novos eventos climáticos com detalhes como tipo de evento, intensidade, data/hora e localização.
- **Mapa de Eventos:** Visualize um mapa com a localização dos eventos climáticos registrados pelos usuários.
- **Atualização em Tempo Real:** Puxe para atualizar a lista de eventos climáticos.

## Configuração do Ambiente de Desenvolvimento ⚙️

### Pré-requisitos

- 🔄 Node.js instalado
- 🌐 Expo CLI instalado globalmente (npm install -g expo-cli)

## Instalação

### Clonar o Repositório

```bash
git clone https://github.com/DizeuM/HackerCidadao11.git
cd ConectaClima/app
```

### Instalar Dependências

1. Navegue até a pasta do projeto:
    ```bash
    cd ConectaClima/app
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

### Iniciar o Expo

1. Inicie o Expo:
    ```bash
    npx expo start
    ```

### Acessar o Aplicativo

1. Escaneie o QR code com o aplicativo Expo Go no seu dispositivo móvel para visualizar o aplicativo.

## Uso 🚀

Os componentes e as funcionalidades principais do aplicativo incluem:

- **Registro de Eventos Climáticos:** Adicione eventos climáticos com detalhes específicos.
- **Mapa de Eventos:** Visualize a localização dos eventos no mapa.
- **Atualização em Tempo Real:** Atualize a lista de eventos puxando a tela para baixo.

## Licença 📄

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

---

### Dependências

As dependências do projeto estão listadas no arquivo `package.json`. Use o seguinte comando para instalar todas as dependências necessárias:

```bash
npm install
```

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Faça commit de suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Faça o push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request
