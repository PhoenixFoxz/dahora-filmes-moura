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

  // Log no state
  console.log(listaFavoritos);

  return (
    <SafeContainer>
      <View style={estiloFavoritos.subContainer}>
        <View style={estiloFavoritos.viewFavoritos}>
          <Text style={estiloFavoritos.texto}>
            Quantidade: {listaFavoritos.length}
          </Text>
          <Pressable style={estiloFavoritos.botao}>
            <Text
              style={[
                estiloFavoritos.textoBotao,
                estiloFavoritos.botaoExcluirFavoritos,
              ]}
            >
              <Ionicons name="trash" size={16} /> Excluir favoritos
            </Text>
          </Pressable>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {listaFavoritos.map((filme) => {
            return (
              <View key={filme.id} style={estiloFavoritos.item}>
                <Pressable style={estiloFavoritos.botaoFilme}>
                  <Text style={estiloFavoritos.titulo}>{filme.title}</Text>
                </Pressable>
                <Pressable style={estiloFavoritos.botaoExcluir}>
                  <Ionicons name="trash" size={16} />
                </Pressable>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeContainer>
  );
}
