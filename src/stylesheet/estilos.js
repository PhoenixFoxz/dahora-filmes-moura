import { StyleSheet } from "react-native";

const estilosInicio = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  viewLogo: {
    flex: 0.7,
    alignItems: "center",
    justifyContent: "flex-end",
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  logo: {
    width: 170,
    height: 170,
  },
  viewBotoes: {
    flex: 0.4,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  botao: {
    padding: 16,
    backgroundColor: "#4d4491",
    borderRadius: 15,
  },
  textoBotao: {
    fontFamily: "NotoSans",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  titulo: {
    fontFamily: "Monoton-Regular",
    fontSize: 35,
    color: "#5a51a6",
    textAlign: "center",
  },

  viewRodape: {
    flex: 0.15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#5a51a6",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  botaoRodape: {
    padding: 17,
  },
  subContainer: {
    flex: 1,
    padding: 16,
    width: "100%",
  },
  subtitulo: {
    fontFamily: "NotoSans",
    fontWeight: "bold",
    marginVertical: 8,
    fontSize: 18,
  },
  texto: {
    marginVertical: 8,
  },
  nomeApp: {
    fontWeight: "bold",
    color: "#5351a6",
  },
  textoAutoral: {
    marginVertical: 50,
    textAlign: "center",
  },
  viewMovieDB: {
    alignItems: "center",
    marginVertical: 30,
  },
  logoMovieDB: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  procuraFilmes: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  espacamentoFilmes: {
    margin: 10,
    flex: 1,
    padding: 16,
  },
  campo: {
    margin: 10,
    flex: 0.95,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#5351a6",
    padding: 8,
  },
  viewForm: {
    flexDirection: "row",
    alignItems: "center",
  },
  viewFilmes: {
    marginVertical: 8,
  },
  card: {
    marginVertical: 4,
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#5451a6",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    height: 150,
    width: 100,
    flex: 1,
  },
  corpo: {
    flex: 2,
  },
  filmeTitulo: {
    backgroundColor: "#5451a6",
    color: "white",
    textAlign: "center",
    paddingVertical: 8,
    fontSize: 16,
  },
  botoesCard: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 8,
  },
  botaoCard: {
    borderColor: "#5451a6",
    borderWidth: 1,
    padding: 8,
  },
  textoBotaoCard: {
    color: "#5451a6",
    fontSize: 12,
    textTransform: "uppercase",
  },
});
const estiloSeparador = StyleSheet.create({
  viewSeparador: {
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
const estilosLoading = StyleSheet.create({
  viewLoading: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
const estiloDetalhes = StyleSheet.create({
  subContainer: {
    flex: 1,
    width: "100%",
  },
  imagemFundo: {
    height: 200,
    justifyContent: "center",
  },
  titulo: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    color: "white",
    fontFamily: "NotoSans",
    textAlign: "center",
    padding: 16,
    fontSize: 16,
    fontWeight: "bold",
  },
  conteudo: {
    padding: 16,
    flex: 1 /* Apenas para garantir a ocupação do espaço em caso de texto muito grande */,
  },
  texto: {
    paddingVertical: 6,
    fontSize: 16,
  },
  avaliacao: {
    color: "white",
    fontSize: 40,
    backgroundColor: "#5451a6",
    borderRadius: 100,
    padding: 5,
  },
  formatacao: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  lancamento: { color: "#5451a6" },
  descricao: { color: "#5451a6" },
  semDescricao: {
    fontStyle: "italic",
    fontSize: 20,
  },
});
const estiloFavoritos = StyleSheet.create({
  subContainer: {
    flex: 1,
    padding: 16,
    width: "100%",
  },
  texto: {
    marginVertical: 8,
  },
});

export {
  estilosInicio,
  estilosLoading,
  estiloSeparador,
  estiloDetalhes,
  estiloFavoritos,
};
