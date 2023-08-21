### NA Tutorial
https://docs.expo.dev/tutorial/create-your-first-app/

npx create-expo-app Awesome Project
`npx-create-expo-app --template`

`npm install -g expo-cli`
`npm i` = `npm install`

É comum ter que apagar e instalar de novo a node modules
`npm run command` -> vai nos scripts do package.json e procura o comando dentro da key scripts


### instalar o app expo
  -   baixar ExpoApp e scannear qrcode dentro dele
  -   Certificar que a rede no PC está privada e que o celular e o PC estejam na mesma rede de internet para poder funcionar o QrCode

Componentes são a essência do react

Eu:
`npx expo install expo-navigation-bar`

React tem duas formas de criar um componente

Componentes poderão ter outros componentes dentro dele

key `children` é o que tá dentro do componente, não é mudável

**Não posso passar componentes em atributos, mas no children (dentro da tag) eu posso**

-   É um componente: passa via children
-   É função: passar propriedade
-   String... escolha é pessoal argument ou children

onPress não é onClick pq é celular
