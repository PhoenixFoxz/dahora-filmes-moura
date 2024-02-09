import { StyleSheet } from "react-native";

const estilosInicio = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
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
    color: "#fff",
  },

  titulo: {
    fontFamily: "Monoton-Regular",
    fontSize: 36,
    color: "#5a51a6",
  },

  viewRodape: {
    flex: 0.15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "red",
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export { estilosInicio };
