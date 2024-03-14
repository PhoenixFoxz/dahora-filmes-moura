import {
  Image,
  Linking,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import SafeContainer from "../components/SafeContainer";
import { estiloFavoritos } from "../stylesheet/estilos";

export default function Favoritos() {
  return (
    <SafeContainer>
      <View style={estiloFavoritos.subContainer}>
        <View style={estiloFavoritos.viewFavoritos}>
          <Text style={estiloFavoritos.texto}>Favoritos...</Text>
        </View>
      </View>
    </SafeContainer>
  );
}
