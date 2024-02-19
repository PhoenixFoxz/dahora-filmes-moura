import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SafeContainer from "../components/SafeContainer";
import { estilosInicio } from "../stylesheet/estilos";

export default function Sobre() {
  return (
    <SafeContainer>
      <View style={estilosInicio.subContainer}>
        <Text style={estilosInicio.subtitulo}>Sobre o app Dá Hora Filmes</Text>
        <Text style={estilosInicio.textoSobre}>
          O <Text style={estilosInicio.nomeApp}>Dá Hora Filmes</Text> é um
          aplicativo com a finalidade de permitir a busca por informações sobre
          filmes existentes na base de dados pública disponibilizada pelo site
          The Movie Database (TMDb).
        </Text>
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
        <Text style={estilosInicio.textoSobre}>Dá Hora Filmes &copy; 2024</Text>
      </View>
    </SafeContainer>
  );
}
