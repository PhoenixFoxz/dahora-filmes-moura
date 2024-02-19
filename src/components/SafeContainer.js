// rnfs
import { SafeAreaView } from "react-native";
import { estilosInicio } from "../stylesheet/estilos";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function SafeContainer({ children }) {
  const [fontsLoaded, fontError] = useFonts({
    "Monoton-Regular": require("../../assets/fonts/Monoton-Regular.ttf"),
    NotoSans: require("../../assets/fonts/NotoSans-VariableFont.ttf"),
  });
  const aoAtualizarLayout = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <SafeAreaView onLayout={aoAtualizarLayout} style={estilosInicio.container}>
      {children}
    </SafeAreaView>
  );
}
