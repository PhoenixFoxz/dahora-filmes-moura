import { Text, View } from "react-native";
import { estilosInicio } from "../stylesheet/estilos";

export default function Separador() {
  return (
    <View style={estilosInicio.viewSeparador}>
      <Text>Separador</Text>
    </View>
  );
}

