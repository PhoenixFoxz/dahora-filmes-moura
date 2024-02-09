import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from "react-native";
import { MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";
import logo from "./assets/images/logo.png";
import { estilosInicio } from "./src/stylesheet/estilos";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Monoton-Regular": require("./assets/fonts/Monoton-Regular.ttf"),
  });

  /* Função atrelada ao hook useCallback.
  Quando uma função está conectada ao useCallback, garantimos que a referência dela é armazenada na memória somente uma vez. */
  const aoAtualizarLayout = useCallback(async () => {
    /* Se estiver tudo ok com o carregamento */
    if (fontsLoaded || fontError) {
      /* Escondemos a splashscreen */
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView
        style={estilosInicio.container}
        onLayout={aoAtualizarLayout}
      >
        <View style={estilosInicio.viewLogo}>
          <Image source={logo} style={estilosInicio.logo} />
          <Text style={estilosInicio.titulo}>Dá Hora Filmes</Text>
        </View>
        <View style={estilosInicio.viewBotoes}>
          <Pressable style={estilosInicio.botao}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 2,
              }}
            >
              <MaterialCommunityIcons
                name="filmstrip-box-multiple"
                size={16}
                color="white"
              />
              <Text style={estilosInicio.textoBotao}>Buscar Filmes</Text>
            </View>
          </Pressable>
          <Pressable style={estilosInicio.botao}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Fontisto name="favorite" size={16} color="white" />
              <Text style={estilosInicio.textoBotao}>Favoritos</Text>
            </View>
          </Pressable>
        </View>
        <View style={estilosInicio.viewRodape}>
          <Button title="privacidade" />
          <Button title="Sobre" />
        </View>
      </SafeAreaView>
    </>
  );
}
