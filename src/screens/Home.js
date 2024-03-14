import { Image, Pressable, Text, View } from "react-native";
import { MaterialCommunityIcons, Fontisto, Ionicons } from "@expo/vector-icons";
import logo from "../../assets/images/logo.png";
import { estilosInicio } from "../../src/stylesheet/estilos";
import SafeContainer from "../components/SafeContainer";
import Privacidade from "./Privacidade";

export default function Home({ navigation }) {
  return (
    <SafeContainer>
      <View style={estilosInicio.viewLogo}>
        <Image source={logo} style={estilosInicio.logo} />
        <Text style={estilosInicio.titulo}>Dá Hora Filmes</Text>
      </View>
      <View style={estilosInicio.viewBotoes}>
        <Pressable
          style={estilosInicio.botao}
          onPress={() => navigation.navigate("Filmes")}
        >
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
        <Pressable
          style={estilosInicio.botao}
          onPress={() => navigation.navigate("Favoritos")}
        >
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
        <Pressable
          style={estilosInicio.botaoRodape}
          onPress={() => navigation.navigate("Privacidade")}
        >
          <Text style={estilosInicio.textoBotao}>
            <Ionicons name="lock-closed" size={16} color="white" />
            {""}
            Privacidade
          </Text>
        </Pressable>
        <Pressable
          style={estilosInicio.botaoRodape}
          onPress={() => navigation.navigate("Sobre")}
        >
          <Text style={estilosInicio.textoBotao}>
            <Ionicons name="information-circle" size={16} color="white" />
            {""}
            Sobre
          </Text>
        </Pressable>
      </View>
    </SafeContainer>
  );
}
