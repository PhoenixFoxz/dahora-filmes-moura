import { View } from "react-native";
import { estiloSeparador } from "../stylesheet/estilos";
import { Octicons } from "@expo/vector-icons";

export default function Separador() {
  return (
    <View style={estiloSeparador.viewSeparador}>
      <Octicons name="horizontal-rule" size={15} color="#5451a6" />
    </View>
  );
}
