import { TextInput, Text, View, Button, Alert, Vibration } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import SafeContainer from "../components/SafeContainer";
import { estilosInicio } from "../stylesheet/estilos";

export default function Filmes() {
  const [filme, setFilme] = useState("");

  // Capturando e registrando em state o filme que o usuário deseja pesquisar
  const filmeDigitado = (valorDigitado) => {
    // valorDigitado (nome pode ser qualquer um)
    // é um parâmetro automático vindo do evento onChargeText
    setFilme(valorDigitado);
  };

  // const pesquisar = () => {
  //   if (filme === "") {
  //     Alert.alert("Ops!", `Você não pesquisou nada`);
  //     Vibration.vibrate(500);
  //   } else {
  //     Alert.alert("Você pesquisou: ", `${filme}`);
  //   }
  // };

  const buscarFilmes = () => {
    if (!filme) {
      Vibration.vibrate(500);
      return Alert.alert("Ops!", "Você deve digitar um filme!");
    }

    Alert.alert("Você procurou por:", filme);
  };

  return (
    <SafeContainer>
      <View style={estilosInicio.espacamentoFilmes}>
        <Text style={estilosInicio.textoFilmes}>
          Star Trek? O Podesoro Chefão? A trilogia Senhor dos Anéis?
        </Text>
        <Text style={estilosInicio.textoFilmes}>
          Localize um filme que você viu ou gostaria de ver!
        </Text>
        <View style={estilosInicio.viewForm}>
          <Ionicons name="film" size={45} color="#4d4491" />
          <TextInput
            style={estilosInicio.campo}
            placeholder="Digite o filme"
            placeholderTextColor="#4d4491"
            maxLength={40}
            autoFocus
            enterKeyHint="search"
            onSubmitEditing={buscarFilmes}
            onChangeText={filmeDigitado}
          />
        </View>
        <Button title="Procurar" color="#4d4491" onPress={buscarFilmes} />
      </View>
    </SafeContainer>
  );
}
