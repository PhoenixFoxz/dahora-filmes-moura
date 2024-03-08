import { Image, Pressable, Text, View } from "react-native";
import { estilosInicio } from "../stylesheet/estilos";
import imagemAlternativa from "../../assets/images/foto-alternativa.jpg";

export default function CardFilme() {
  return (
    <View style={estilosInicio.card}>
      <Image style={estilosInicio.image} source={imagemAlternativa} />
      <View style={estilosInicio.corpo}>
        <Text style={estilosInicio.filmeTitulo}> Nome do filme... </Text>
        <View style={estilosInicio.botoesCard}>
          <Pressable style={estilosInicio.botaoCard}>
            <Text style={estilosInicio.textoBotaoCard}>Leia mais</Text>
          </Pressable>
          <Pressable style={estilosInicio.botaoCard}>
            <Text style={estilosInicio.textoBotaoCard}>Salvar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
