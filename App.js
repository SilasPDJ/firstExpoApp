import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
import MobiButton from './src/components/MobiButton/MobiButton';

const mostrarTexto = () => {
  console.log("Olá, tudo bem?")
}


export default function App() {
  const visibility = NavigationBar.useVisibility();
  NavigationBar.setBackgroundColorAsync("white");

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Meu Primeiro App! OLA</Text>

      <MobiButton title="Olá, botão!" funcaoOnPress={mostrarTexto} corBotao='blue' corTexto='white'>
        Primeiro Botão
      </MobiButton>
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#35A',
    alignItems: 'center',
    justifyContent: 'center',

  },
  texto: {
    color: "white",
    fontWeight: 'bold',
    fontSize: 32,
  }
});
