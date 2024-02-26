# Dahora Filmes

Exeplo de App nativo criado com react Native Expo.

## 04-recursos-de-navegação

Para gerenciar os recursos de navegação é necessário usar uma biblioteca de navegação.

As mais conhecidas são a **React Navigation** e a **Expo Router**.

Atualmente (Fevereiro/2024) a biblioteca mais usada e considerada padrão é a **React Navigation**.

### Site oficial:

- React Navigation: https://reactnavigation.org/
- Expo Rounter: https://docs.expo.dev/router/introduction/

### Como usar o React Navigation com navegação Stack

#### DPacotes de instalação

React Navigation: `npm install @react-navigation/native`

Dependências para navegação:

`npx expo install react-native-screens react-native-safe-area-context`

Mecanismo de navegação Stack: `npm install @react-navigation/native-stack`

## 03-componentes-de-telas

- Criação das telas básicas: Sobre e Privacidade
- Componente `ScrollView` para conteúdos maiores que a tela com suporte à rolagem
- Componente `Linking` para criação de link para a web.

## 02-customização-estilos-logo-fonte-icones-pressable

### Utilização de fontes adicionais

- Donwload dos arquivos de fonte (formato TTF ou OTF)
- Colocação na pasta `assets\fonts`
- Instalação das libs `expo-fonts` e `expo-splash-screen`
- importação das fontes com auxílio dos `hooks` `useFonts` e `useCallback`
- Aplicação das fontes usando regras de StyledSheet.

Para mais detalhes sobre o processo veja a documentação do Expo Fonts e do Expo Splash Screen:

- https://docs.expo.dev/versions/latest/sdk/font/
- https://docs.expo.dev/versions/latest/sdk/splash-screen/
- https://docs.expo.dev/guides/icons/

## Dica

Instale a extensão **ES7+ React...** no VsCode para facilitar a programação de componentes.
