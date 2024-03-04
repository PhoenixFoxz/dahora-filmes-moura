import { Text, View } from "react-native";
import SafeContainer from "../components/SafeContainer";
import { estilosInicio } from "../stylesheet/estilos";

/* Prop route
Prop especial e definida pelo React Navigation.
Através dela que é possível acessar valores passados
por meio de navegação entre telas. */
export default function Resultados({ route }) {
  // Capturando o parâmetro filme vindo de BuscarFilmes
  const { filme } = route.params;
  return (
    <SafeContainer>
      <View style={estilosInicio.subContainer}>
        <Text style={estilosInicio.texto}>Você buscou por: {filme}</Text>
      </View>
    </SafeContainer>
  );
}
