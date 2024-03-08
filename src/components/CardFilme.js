import { Image, Pressable, Text, View } from "react-native";
import { estilosInicio } from "../stylesheet/estilos";
import imagemAlternativa from "../../assets/images/foto-alternativa.jpg";

export default function CardFilme({ filme }) {
  /* Extraindo as informações do filme (titulo e imagem de capa) */
  const { title, poster_path } = filme;
  return (
    <View style={estilosInicio.card}>
      <Image
        resizeMode="cover"
        style={estilosInicio.image}
        source={{ uri: `https://image.tmdb.org/t/p/original/${poster_path}` }}
      />
      <View style={estilosInicio.corpo}>
        <Text style={estilosInicio.filmeTitulo}> {title} </Text>
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
