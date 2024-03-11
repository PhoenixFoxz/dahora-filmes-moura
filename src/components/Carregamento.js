import { ActivityIndicator, View } from "react-native";
import { estilosLoading } from "../stylesheet/estilos";

export default function Carregamento() {
  return (
    <View style={estilosLoading.viewLoading}>
      <ActivityIndicator size="large" color="#5a51a6" />
    </View>
  );
}
