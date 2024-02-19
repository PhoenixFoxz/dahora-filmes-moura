import {
  Image,
  Linking,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import movieDB from "../../assets/images/logo-tmdb.png";
import React from "react";
import SafeContainer from "../components/SafeContainer";
import { estilosInicio } from "../stylesheet/estilos";

export default function Sobre() {
  return (
    <SafeContainer>
      <View style={estilosInicio.subContainer}>
        <ScrollView>
          <Text style={estilosInicio.subtitulo}>
            Sobre o app Dá Hora Filmes
          </Text>
          <Text style={estilosInicio.textoSobre}>
            O <Text style={estilosInicio.nomeApp}>Dá Hora Filmes</Text> é um
            aplicativo com a finalidade de permitir a busca por informações
            sobre filmes existentes na base de dados pública disponibilizada
            pelo site The Movie Database (TMDb).
          </Text>
          <View style={estilosInicio.viewMovieDB}>
            <Pressable
              onPress={() => Linking.openURL("https://www.themoviedb.org/")}
            >
              <Image source={movieDB} style={estilosInicio.logoMovieDB} />
            </Pressable>
          </View>
          <Text style={estilosInicio.textoSobre}>
            Ao localizar um filme, o usuário pode visualizar informações como
            título, data de lançamento, nota média de avaliação e uma breve
            descrição sobre o filme e, caso queira, salvar estas informações em
            uma lista no próprio aplicativo para visualização posterior.
          </Text>
          <Text style={estilosInicio.textoSobre}>
            O aplicativo poderá receber novos recursos conforme o feedback e
            demanda dos usuários.
          </Text>
          <Text style={estilosInicio.textoAutoral}>
            Dá Hora Filmes &copy; 2024
          </Text>
        </ScrollView>
      </View>
    </SafeContainer>
  );
}
