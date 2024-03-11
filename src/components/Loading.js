import { ActivityIndicator, View } from "react-native";
import React from "react";
import { estilosLoading } from "../stylesheet/estilos";

export default function Loading() {
  return (
    <View style={estilosLoading.viewLoading}>
      <ActivityIndicator size="large" color="#5a51a6" />
    </View>
  );
}
