import React, { useState } from 'react';
import { StyleSheet, Text, View } from "react-native";
import SwitchComponent from "../../layouts/SwitchAcompanhamento/Switch"; // Caminho ajustado
import colors from "../../../assets/colors"; // Caminho ajustado
import { fonts } from "../../../assets/fonts"; // Caminho ajustado

const Preferencias = () => {
  // Estado para gerenciar os switches
  const [switches, setSwitches] = useState({
    aprenderCozinhar: false,
    melhorarAlimentacao: false,
    acompanharAlimentacao: false,
    tirarDuvidasGuru: false,
    assistenteCotidiana: false,
    receberRecomendacoes: false,
    envioNotificacoes: false,
  });

  // Função para alterar o estado dos switches
  const handleChange = (key, value) => {
    setSwitches((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Preferências e Funcionalidades</Text>
      <SwitchComponent
        titulo="Aprender a cozinhar"
        enable={switches.aprenderCozinhar}
        handleChange={(value) => handleChange("aprenderCozinhar", value)}
      />
      <SwitchComponent
        titulo="Melhorar a alimentação"
        enable={switches.melhorarAlimentacao}
        handleChange={(value) => handleChange("melhorarAlimentacao", value)}
      />
      <SwitchComponent
        titulo="Acompanhar a alimentação"
        enable={switches.acompanharAlimentacao}
        handleChange={(value) => handleChange("acompanharAlimentacao", value)}
      />
      <SwitchComponent
        titulo="Tirar dúvidas com a Guru"
        enable={switches.tirarDuvidasGuru}
        handleChange={(value) => handleChange("tirarDuvidasGuru", value)}
      />
      <SwitchComponent
        titulo="Ter uma assistente cotidiana"
        enable={switches.assistenteCotidiana}
        handleChange={(value) => handleChange("assistenteCotidiana", value)}
      />
      <SwitchComponent
        titulo="Receber recomendações"
        enable={switches.receberRecomendacoes}
        handleChange={(value) => handleChange("receberRecomendacoes", value)}
      />
      <SwitchComponent
        titulo="Envio de notificações"
        enable={switches.envioNotificacoes}
        handleChange={(value) => handleChange("envioNotificacoes", value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.branco,
    alignItems: "center",
  },

  title: {
    fontSize: 25,
    marginVertical: 20,
    fontFamily: fonts.SemiBold,
    color: colors.azulEscuro,
    textAlign: "center",
  },
});

export default Preferencias;
