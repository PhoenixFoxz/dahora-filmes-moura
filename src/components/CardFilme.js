import {
  StyleSheet,
  Image,
  Pressable,
  Text,
  View,
  Alert,
  Vibration,
} from "react-native";
import { estilosInicio } from "../stylesheet/estilos";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import imagemAlternativa from "../../assets/images/foto-alternativa.jpg";

/* Hook necessário pois não estamos em uma tela com acesso à prop navigation */
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CardFilme({ filme }) {
  /* Extraindo as informações do filme (titulo e imagem de capa) */
  const { title, poster_path } = filme;
  const navigation = useNavigation();
  const salvar = async () => {
    try {
      /* 1) Verificar/carregar os favoritos armazenados no AsyncStorage.
      Usamos o getItem do AsyncStorage para analisar se existe um armazenamento com o nome indicado (@favoritosmoura). Existendo, ele é carregado para a const filmesFavoritos. Se não existir, será criado posteriormente */
      const filmesFavoritos = await AsyncStorage.getItem("@favoritosmoura");
      /* 2) Verificar/criar uma lista de filmes favoritos (dados).
      Se filmesFavoritos existir (ou seja, tem dados no storage), pegamos estes dados (strings) e convertemos em objeto (JSON.parse). Caso contrário, listaDeFilmes será um array vazio. */
      const listaDeFilmes = filmesFavoritos ? JSON.parse(filmesFavoritos) : [];
      /* 3) Verificar se já tem algum filme na lista */
      const jaTemFilme = listaDeFilmes.some((filmeNaLista) => {
        return filmeNaLista.id === filme.id; // true OU false
      });
      /* 4) Verificação, altera e registro do filme */
      /* 4.1) Se já tem filme, avisaremos ao usuário */
      if (jaTemFilme) {
        Alert.alert("Ops!", "Você já salvou este filme!");
        Vibration.vibrate();
        return;
      }
      /* 4.2) Senão, vamos colocar na lista */
      listaDeFilmes.push(filme);
      /* 5) Usamos o AsyncStorage para gravar no armazenamento offline do dispositivo */
      await AsyncStorage.setItem(
        "@favoritosmoura",
        JSON.stringify(listaDeFilmes)
      );

      Alert.alert("Favoritos", `${title} foi salvo com sucesso!`);
    } catch (error) {
      console.log("Erro: " + error);
      Alert.alert("Erro", "Ocorreu um erro ao salvar o filme...");
    }
  };
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
          <Pressable style={estilosInicio.botaoCard} onPress={salvar}>
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
