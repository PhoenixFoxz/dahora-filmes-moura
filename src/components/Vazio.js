import { Image, Text, View } from "react-native";
import React from "react";
import JohnTravolta from "../../assets/images/JohnTravolta.gif";
import { estilosInicio } from "../stylesheet/estilos";

export default function Vazio({ pesquisado }) {
  return (
    <View>
      <Text>
        Nenhum filme foi encontrado com o nome de{" "}
        <Text style={estilosInicio.nomeApp}>{pesquisado}</Text>
      </Text>
      <Image source={JohnTravolta} />
    </View>
  );
}
