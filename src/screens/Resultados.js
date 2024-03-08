import { FlatList, Text, View } from "react-native";
import SafeContainer from "../components/SafeContainer";
import { estilosInicio } from "../stylesheet/estilos";
import { api, apiKey } from "../services/api-moviedb";
import { useEffect, useState } from "react";

/* Prop route
Prop especial e definida pelo React Navigation.
Através dela que é possível acessar valores passados
por meio de navegação entre telas. */
export default function Resultados({ route }) {
  /* State para gerenciar os resultados da busca na API */
  const [resultados, setResultados] = useState([]);
  // Capturando o parâmetro filme vindo de BuscarFilmes
  const { filme } = route.params;

  useEffect(() => {
    async function buscarFilmes() {
      try {
        const resposta = await api.get(`/search/movie`, {
          params: {
            include_adults: true,
            language: "pt-BR",
            query: filme,
            api_key: apiKey,
          },
        });
        /* Adicionando os resultados ao state */
        setResultados(resposta.data.results);
      } catch (error) {
        console.error("Deu ruim: " + error.message);
      }
    }
    buscarFilmes();
  }, []);

  return (
    <SafeContainer>
      <View style={estilosInicio.subContainer}>
        <Text style={estilosInicio.texto}>
          Você buscou por: <Text style={estilosInicio.nomeApp}>{filme}</Text>
        </Text>
        <View style={estilosInicio.viewFilmes}>
          <FlatList
            // Prop data apontando para o state contendo os dados para a FlatList
            data={resultados}
            // Extraindo a chave/key de cada registro/item/filme único
            keyExtractor={(item) => item.id}
            // Prop que irá renderizar cada item/filme em um componente
            renderItem={({ item }) => {
              return <Text>{item.title}</Text>;
            }}
          />
        </View>
      </View>
    </SafeContainer>
  );
}
