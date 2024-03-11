import { ImageBackground, ScrollView, Text, View } from "react-native";
import { estiloDetalhes } from "../stylesheet/estilos";
import SafeContainer from "../components/SafeContainer";
import imagemAlternativa from "../../assets/images/foto-alternativa.jpg";
import React from "react";

export default function Detalhes() {
  return (
    <SafeContainer>
      <View style={estiloDetalhes.subContainer}>
        <ImageBackground
          style={estiloDetalhes.imagemFundo}
          source={imagemAlternativa}
        >
          <Text style={estiloDetalhes.titulo}>Título do filme...</Text>
        </ImageBackground>
        <View style={estiloDetalhes.conteudo}>
          <ScrollView>
            <Text style={[estiloDetalhes.texto, estiloDetalhes.avaliacao]}>
              Avaliação...
            </Text>
            <Text style={[estiloDetalhes.texto, estiloDetalhes.lancamento]}>
              Lançamento...
            </Text>
            <Text style={[estiloDetalhes.texto, estiloDetalhes.descricao]}>
              Descrição...
            </Text>
          </ScrollView>
        </View>
      </View>
    </SafeContainer>
  );
}
