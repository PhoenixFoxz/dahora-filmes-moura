import { StyleSheet, Image, Pressable, Text, View } from "react-native";
import { estilosInicio } from "../stylesheet/estilos";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import imagemAlternativa from "../../assets/images/foto-alternativa.jpg";

/* Hook necessário pois não estamos em uma tela com acesso à prop navigation */
import { useNavigation } from "@react-navigation/native";

export default function CardFilme({ filme }) {
  /* Extraindo as informações do filme (titulo e imagem de capa) */
  const { title, poster_path } = filme;
  const navigation = useNavigation();
  return (
    <View style={estilosInicio.card}>
      <Image
        resizeMode="cover"
        style={estilosInicio.image}
        source={
          poster_path
            ? { uri: `https://image.tmdb.org/t/p/original/${poster_path}` }
            : imagemAlternativa
        }
      />
      <View style={estilosInicio.corpo}>
        <Text style={estilosInicio.filmeTitulo}> {title} </Text>
        <View style={estilosInicio.botoesCard}>
          <Pressable
            style={estilosInicio.botaoCard}
            onPress={() => navigation.navigate("Detalhes", { filme })}
          >
            <View style={styles.icones}>
              <FontAwesome5 name="book-open" size={15} color="#5451a6" />
              <Text style={estilosInicio.textoBotaoCard}>Leia mais</Text>
            </View>
          </Pressable>
          <Pressable style={estilosInicio.botaoCard}>
            <View style={styles.icones}>
              <MaterialIcons name="add-circle" size={15} color="#5451a6" />
              <Text style={estilosInicio.textoBotaoCard}>Salvar</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icones: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 8,
  },
});
