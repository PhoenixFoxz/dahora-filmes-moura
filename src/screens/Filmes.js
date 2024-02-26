import { TextInput, Text, View, Button, Alert } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import SafeContainer from "../components/SafeContainer";
import { estilosInicio } from "../stylesheet/estilos";

export default function Filmes() {
  const [text, setText] = useState("");

  const pesquisar = () => {
    if (text === "") {
      Alert.alert("Você não pesquisou nada");
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
        <View style={estilosInicio.iconFilmes}>
          <Ionicons name="film" size={45} color="#5351a6" />
          <TextInput
            style={estilosInicio.formFilmes}
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
