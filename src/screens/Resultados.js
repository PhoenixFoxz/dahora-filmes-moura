import { ActivityIndicator, FlatList, Text, View } from "react-native";
import CardFilme from "../components/CardFilme";
import SafeContainer from "../components/SafeContainer";
import { estilosInicio } from "../stylesheet/estilos";
import { api, apiKey } from "../services/api-moviedb";
import { useEffect, useState } from "react";
import Separador from "../components/Separador";
import Vazio from "../components/Vazio";

/* Prop route
Prop especial e definida pelo React Navigation.
Através dela que é possível acessar valores passados
por meio de navegação entre telas. */
export default function Resultados({ route }) {
  /* State para gerenciar os resultados da busca na API */
  const [resultados, setResultados] = useState([]);

  /* State para gerenciar o loading (mostrar/esconder) */
  const [loading, setLoading] = useState(true);
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

        setLoading(false);
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

        {loading && <ActivityIndicator size="large" color="#5a51a6" />}

        {!loading && (
          <View style={estilosInicio.viewFilmes}>
            <FlatList
              data={resultados}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return <CardFilme filme={item} />;
              }}
              ListEmptyComponent={<Vazio pesquisado={filme} />}
              ItemSeparatorComponent={Separador}
            />
          </View>
        )}
      </View>
    </SafeContainer>
  );
}
