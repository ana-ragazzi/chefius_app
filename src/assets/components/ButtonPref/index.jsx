import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../../colors"; // Caminho ajustado
import { fonts } from "../../fonts"; // Caminho ajustado
import { useNavigation } from "@react-navigation/native"; // Importando React Navigation
import SwitchComponent from "../../../components/layouts/SwitchAcompanhamento/Switch";
import { View } from "react-native-animatable";

export default function ButtonPref({ titulo, rota }) {
  const navigation = useNavigation(); // Hook para navegação

  return (
    <View
      style={styles.container}

    >
      <Text style={styles.title}>{titulo}</Text>
      <SwitchComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 50,
    backgroundColor: colors.branco,
    borderColor: colors.cinzaMedio,
    borderRadius: 15,
    marginBottom: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 5,
  },

  title: {
    fontSize: 16,
    fontFamily: fonts.Regular,
    marginLeft: 15,
  },
});
