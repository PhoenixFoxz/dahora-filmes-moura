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

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={estilosInicio.container}>
        <View style={estilosInicio.viewLogo}>
          <Image source={logo} style={estilosInicio.logo} />
          <Text>Dá Hora Filmes</Text>
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
