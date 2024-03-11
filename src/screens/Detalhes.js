import { ImageBackground, ScrollView, Text, View } from "react-native";
import { estiloDetalhes } from "../stylesheet/estilos";
import SafeContainer from "../components/SafeContainer";
import ptBR from "date-fns/locale/pt-BR";
import imagemAlternativa from "../../assets/images/foto-alternativa.jpg";
import { format } from "date-fns";

export default function Detalhes({ route }) {
  const { filme } = route.params;
  const { title, backdrop_path, overview, release_date, vote_average } = filme;
  const dataFormatada = format(new Date(release_date), "dd/MM/yyyy", {
    locale: ptBR,
  });
  const avaliacaoFormatada = vote_average.toFixed(1);
  return (
    <SafeContainer>
      <View style={estiloDetalhes.subContainer}>
        <ImageBackground
          style={estiloDetalhes.imagemFundo}
          source={
            backdrop_path
              ? {
                  uri: `https://image.tmdb.org/t/p/original/${backdrop_path}`,
                }
              : imagemAlternativa
          }
        >
          <Text style={estiloDetalhes.titulo}>{title}</Text>
        </ImageBackground>
        <View style={estiloDetalhes.conteudo}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={estiloDetalhes.formatacao}>
              <Text style={[estiloDetalhes.texto, estiloDetalhes.avaliacao]}>
                {avaliacaoFormatada}
              </Text>
              <Text style={[estiloDetalhes.texto, estiloDetalhes.lancamento]}>
                {dataFormatada}
              </Text>
              <Text style={[estiloDetalhes.texto, estiloDetalhes.descricao]}>
                {overview}
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeContainer>
  );
}
