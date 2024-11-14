import * as Animatable from "react-native-animatable";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import colors from "../../../../assets/colors";
import { fonts } from "../../../../assets/fonts";
import EtapaTitle from "../../../../assets/components/EtapaTitle";
import hamburguer from "../../../../assets/imgs/hamburguer.png";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import Header from "../../../layouts/Header/Header";

export default function Etapa2() {
  const { updateAuth } = useAuth(); // Usando updateAuth para atualizar peso e altura
  const navigation = useNavigation();

  const [peso, setPesoState] = useState(""); // Inicializando com string vazia
  const [altura, setAlturaState] = useState(""); // Inicializando com string vazia

  const CalcularImc = () => {
    if (peso && altura) { // Verificando se os campos não estão vazios
      const imc = (peso / altura ** 2).toFixed(2);
      Alert.alert(`O seu IMC é: ${imc}`);

      // Salvando peso e altura no contexto usando updateAuth
      updateAuth({ peso, altura });

      navigation.navigate("Etapa3"); // Navegação para a próxima etapa
    } else {
      Alert.alert("Por favor, preencha todos os campos.");
    }
  };

  return (
    <Animatable.View style={styles.container} animation="slideInRight" duration={350}>
      <Header />
      <EtapaTitle titulo="Etapa 2:" subtitulo="Seu IMC" />
      <View style={styles.conteudo}>
        <Image source={hamburguer} style={styles.img} />
        <Text style={styles.descricao}>Preencha os campos com o formato kg e m.</Text>
        <View style={styles.infoContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputContent}
              placeholder="Peso"
              keyboardType="numeric"
              value={peso}
              onChangeText={setPesoState} // Atualizando o estado
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputContent}
              placeholder="Altura"
              keyboardType="numeric"
              value={altura}
              onChangeText={setAlturaState} // Atualizando o estado
            />
          </View>
        </View>
        <TouchableOpacity style={styles.buttonContainer} onPress={CalcularImc}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
      </View>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.branco,
  },

  conteudo: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  img: {
    marginTop: -45,
  },

  descricao: {
    width: 300,
    textAlign: "center",
    marginTop: -35,
    fontSize: 18,
    fontFamily: fonts.SemiBold,
  },

  infoContainer: {
    marginTop: -45,
    justifyContent: "space-evenly",
    width: "100%",
    flexDirection: "row",
  },

  inputContainer: {
    width: 160,
    height: 40,
    backgroundColor: colors.cinzaClaro,
    borderRadius: 16,
  },

  inputContent: {
    flex: 1,
    marginLeft: 15,
    color: colors.cinza,
    fontFamily: fonts.Regular,
  },

  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 240,
    height: 50,
    borderRadius: 20,
    backgroundColor: colors.rosa,
  },

  buttonText: {
    fontSize: 20,
    fontFamily: fonts.Regular,
    color: colors.branco,
  },
});
