import {
  Alert,
  Image,
  Linking,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import SafeContainer from "../components/SafeContainer";
import { estiloFavoritos } from "../stylesheet/estilos";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import imagemAlt from "../../assets/images/foto-alternativa.jpg";

export default function Favoritos() {
  /* State para registrar os dados carregados do storage */
  const [listaFavoritos, setListaFavoritos] = useState([]);

  /* useEffect será disparado assim que o usuário entrar na tela Favoritos (portante, somente uma vez) */
  useEffect(() => {
    const carregarFavoritos = async () => {
      try {
        const dados = await AsyncStorage.getItem("@favoritosmoura");
        /* Se houver dados, transformamos em objetos (JSON.parse) e atualizamos o state com a lista de favoritos */
        if (dados) {
          setListaFavoritos(JSON.parse(dados));
        }
      } catch (error) {
        console.error("Erro ao carregar os dados: " + error);
        Alert.alert("Erro", "Erro ao carregar os dados.");
      }
    };
    carregarFavoritos();
  }, []);

  const excluirTodosFavoritos = async () => {
    Alert.alert(
      "Excluir Todos?",
      "Tem certeza que deseja excluir todos os favoritos?",
      [
        {
          text: "Cancelar",
          style: "cancel", // verificar, estilo somente irá funcionar em ios
        },
        {
          text: "Sim, sem dó",
          style: "destructive", // estilo somente irá funcionar em ios
          onPress: async () => {
            /* Removemos nosso storage de favoritos  */
            await AsyncStorage.removeItem("@favoritosbarbosa");

            /* E atualizamos o state para que sejam removidos da tela */
            setListaFavoritos([]);
          },
        },
      ]
    );
  };

  const excluirUm = async (filmeId, FilmeTitulo) => {
    Alert.alert(
      "Excluir ",
      "Tem certeza que deseja excluir " + FilmeTitulo + " dos favoritos?",
      [
        {
          text: "Cancelar",
          style: "cancel", // verificar, estilo somente irá funcionar em ios
        },
        {
          text: "Sim, sem dó",
          style: "destructive", // estilo somente irá funcionar em ios
          onPress: async () => {
            try {
              /* Gerando uma nova lista de filmes EXCETO o que vai ser removido */
              const novosFav = listaFavoritos.filter(
                (filme) => filme.id !== filmeId
              );

              /* Atualizando o Storage com os dados nova lista de favoritos sem o filme excluido */
              await AsyncStorage.setItem(
                "@favoritosbarbosa",
                JSON.stringify(novosFav)
              );

              /* Atualizaar o state sem como os dados da nova lista SEM o filme ser removido */
              setListaFavoritos(novosFav);

              Vibration.vibrate(300);
            } catch (error) {
              console.log("Erro ao Excluir: ", error);
            }
          },
        },
      ]
    );
  };

  // Log no state
  console.log(listaFavoritos);

  return (
    <SafeContainer>
      <View style={estiloFavoritos.subContainer}>
        <View style={estiloFavoritos.viewFavoritos}>
          <Text style={estiloFavoritos.texto}>
            Quantidade: {listaFavoritos.length}
          </Text>
          {listaFavoritos.length > 0 && (
            <Pressable
              style={estiloFavoritos.botao}
              onPress={excluirTodosFavoritos}
            >
              <Text style={estiloFavoritos.textoBotao}>
                <Ionicons name="trash" size={16} color="red" /> Excluir
                Favoritos
              </Text>
            </Pressable>
          )}
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {listaFavoritos.map((filme) => {
            return (
              <View key={filme.id} style={estiloFavoritos.item}>
                <Pressable
                  style={estiloFavoritos.filmeFavorito}
                  onPress={() => {
                    navigation.navigate("Detalhes", { filme });
                  }}
                >
                  <Image
                    resizeMode="contain"
                    style={estiloFavoritos.imagem}
                    source={
                      filme.poster_path
                        ? {
                            uri: `https://image.tmdb.org/t/p/w500/${filme.poster_path}`,
                          }
                        : imagemAlt
                    }
                  />
                  <Text style={estiloFavoritos.cardTitulo}>{filme.title}</Text>
                </Pressable>
                <Pressable
                  style={estiloFavoritos.excluir}
                  onPress={() => excluirUm(filme.id, filme.title)}
                >
                  <Ionicons name="trash" size={20} color="white" />
                  <Text style={estiloFavoritos.textoExcluir}>
                    Excluir dos favoritos
                  </Text>
                </Pressable>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeContainer>
  );
}
