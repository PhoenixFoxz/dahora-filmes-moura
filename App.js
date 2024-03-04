import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Sobre from "./src/screens/Sobre";
import Privacidade from "./src/screens/Privacidade";
import Filmes from "./src/screens/Filmes";
import Resultados from "./src/screens/Resultados";

// Criação/inicialização do mecanismo Stack
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: "#5a51a6" },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Sobre"
            component={Sobre}
            options={{ title: "Conheça nosso App" }}
          />
          <Stack.Screen
            name="Filmes"
            component={Filmes}
            options={{ title: "Qual filme quer pesquisar?" }}
          />
          <Stack.Screen name="Resultados" component={Resultados} />
          <Stack.Screen name="Privacidade" component={Privacidade} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
