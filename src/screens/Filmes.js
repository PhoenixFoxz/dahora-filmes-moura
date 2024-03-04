import { TextInput, Text, View, Button, Alert, Vibration } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import SafeContainer from "../components/SafeContainer";
import { estilosInicio } from "../stylesheet/estilos";

export default function Filmes() {
  const [text, setText] = useState("");

  const pesquisar = () => {
    if (text === "") {
      Alert.alert("Ops!", `Você não pesquisou nada`);
      Vibration.vibrate(500);
    } else {
      Alert.alert("Você pesquisou: ", `${text}`);
    }
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
          <Ionicons name="film" size={45} color="#5351a6" />
          <TextInput
            style={estilosInicio.campo}
            placeholder="Digite o filme"
            onChangeText={(newText) => setText(newText)}
            defaultValue={text}
          />
        </View>
        <Button title="Procurar" color="#4d4491" onPress={pesquisar} />
      </View>
    </SafeContainer>
  );
}
