# 🤝 Lista de Presença | I'm Here

![Badge de Status](https://img.shields.io/badge/Status-Concluído-success)
![Badge de Tecnologias](https://img.shields.io/badge/Tech-React_Native%20%7C%20TypeScript%20%7C%20StyledComponents-blue)
[![Link do Figma](https://img.shields.io/badge/Layout-Figma-orange)](https://www.figma.com/design/0PVr0CoFGq8nCfK37cD5TE/Chapter-I---Im-Here--cópia-?node-id=1-4586&t=QbLaNdGjS2yMNvYn-0)

Uma aplicação móvel simples e reativa para o gerenciamento de lista de presença em eventos. Desenvolvida como atividade do curso de React Native, este projeto demonstra proficiência em gerenciamento de estado, persistência de dados e estilização avançada com foco em boas práticas.

## 🖼️ Demonstração (Screenshot/GIF)

[Insira aqui uma imagem ou GIF curto (5s) do seu aplicativo em funcionamento. Este é o item mais importante para o seu portfólio!]

## 🚀 Funcionalidades Chave

O aplicativo gerencia a lista de participantes de forma dinâmica, seguindo o layout do Figma:

- **➕ Adicionar Participante:** Cadastro de novos nomes na lista de presença.
- **🗑️ Remover Participante:** Remoção instantânea de qualquer item da lista.
- **Persistência de Dados:** A lista de participantes é salva e carregada automaticamente na inicialização (`AsyncStorage`).
- **UX Aprimorada:** Exibição da data atual e uma mensagem de estado vazio amigável.
- **Navegação:** Preparado com estrutura de _screens_ para expansões futuras.

---

## ⚙️ Tecnologias e Conceitos Utilizados

O projeto foi construído utilizando as seguintes ferramentas e conceitos, conforme o `package.json`:

### Core e Ambiente

| Pacote                   | Versão              | Função Principal                                |
| :----------------------- | :------------------ | :---------------------------------------------- |
| `react` / `react-native` | `19.1.0` / `0.81.5` | Base da interface e componentes mobile.         |
| `expo`                   | `~54.0.20`          | Estrutura de desenvolvimento e build.           |
| `styled-components`      | `^6.1.19`           | Estilização avançada, modular e componentizada. |
| `@expo/vector-icons`     | `^15.0.3`           | Ícones nativos.                                 |

### Gerenciamento de Dados e Utilidades

| Pacote                                      | Versão              | Função Principal                                             |
| :------------------------------------------ | :------------------ | :----------------------------------------------------------- |
| `@react-native-async-storage/async-storage` | `2.2.0`             | **Persistência de dados** local no dispositivo.              |
| `lodash` / `@types/lodash`                  | `^4.17.21`          | Utilidades de array e objeto (ex: imutabilidade, ordenação). |
| `date-fns` / `@date-fns/tz`                 | `^4.1.0` / `^1.4.1` | Formatação de datas e gerenciamento de fuso horário.         |

### Navegação e Componentes Adicionais

| Pacote                                   | Versão   | Função Principal                             |
| :--------------------------------------- | :------- | :------------------------------------------- |
| `@react-navigation/native-stack`         | `^7.5.1` | Estrutura de navegação nativa.               |
| `@expo-google-fonts/roboto`              | `^0.4.1` | Inclusão de fontes customizadas.             |
| `@react-native-community/datetimepicker` | `8.4.4`  | Componente nativo para seleção de data/hora. |

---

## 💡 Detalhes Técnicos (Destaques no Portfólio)

- **Persistência de Estado (`AsyncStorage`):** Implementação do salvamento e carregamento da lista de participantes no _storage_ local, garantindo que os dados permaneçam após o fechamento do app.
- **Imutabilidade e Lodash:** Uso de funções para manipular o array de participantes sem modificar o estado diretamente, seguindo o princípio da imutabilidade do React.
- **Controle de Datas:** O `date-fns` é utilizado para formatar e exibir a data atual na tela, demonstrando precisão no tratamento de datas.
- **Arquitetura:** O uso de dependências de navegação e componentes nativos (como o `datetimepicker`) indica familiaridade com projetos de React Native mais complexos e de nível de produção.

---

## 💻 Como Executar o Projeto

Para visualizar e testar o projeto localmente, siga os passos abaixo:

### Pré-requisitos

- Node.js (versão LTS recomendada)
- Yarn ou npm
- Expo Go app instalado no seu celular ou um simulador/emulador.

### Instalação e Execução

1.  **Clone o repositório:**

    ```bash
    git clone [Link do Seu Repositório GitHub]
    cd [Nome da Pasta do Projeto]
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Inicie o servidor de desenvolvimento do Expo:**

    ```bash
    npm start
    # ou
    yarn start
    ```

4.  **Acesse:** Escaneie o QR Code que aparecerá no seu terminal utilizando o aplicativo **Expo Go**.

---

## 👤 Autor e Contato

Desenvolvido por **[Seu Nome Completo]** como atividade prática e de portfólio em React Native.

| Plataforma   | Link                   |
| :----------- | :--------------------- |
| **LinkedIn** | [Seu Link do LinkedIn] |
| **GitHub**   | [Seu Link do GitHub]   |

---

Gostaria de ajuda para criar um breve _pitch_ (resumo de apresentação) para o seu LinkedIn ou para uma entrevista, destacando as principais tecnologias deste projeto?
