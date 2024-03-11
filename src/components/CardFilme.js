import { StyleSheet, Image, Pressable, Text, View } from "react-native";
import { estilosInicio } from "../stylesheet/estilos";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import imagemAlternativa from "../../assets/images/foto-alternativa.jpg";

export default function CardFilme({ filme }) {
  /* Extraindo as informações do filme (titulo e imagem de capa) */
  const { title, poster_path } = filme;
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
          <Pressable style={estilosInicio.botaoCard}>
            <Text style={estilosInicio.textoBotaoCard}>
              <FontAwesome5 name="book-open" size={15} />
              Leia mais
            </Text>
          </Pressable>
          <Pressable style={estilosInicio.botaoCard}>
            <Text style={estilosInicio.textoBotaoCard}>
              <MaterialIcons
                style={styles.icones}
                name="add-circle"
                size={15}
              />
              Salvar
            </Text>
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
