import * as Animatable from "react-native-animatable";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Usando React Navigation
import colors from "../../../../assets/colors";
import guru from "../../../../assets/imgs/guru_cadastro.png";
import { fonts } from "../../../../assets/fonts";
import Header from "../../../layouts/Header/Header";

export default function Cadastro() {
  const navigation = useNavigation(); // Usando o hook useNavigation

  return (
    <Animatable.View style={styles.container} animation="slideInUp" duration={350}>
      <Header />
      <ScrollView>
        <View style={styles.conteudo}>
          <Text style={styles.titulo}>Vamos começar!</Text>
          <Image source={guru} />
          <Text style={styles.text1}>
            Eu sou a Guru, sua assistente do Chefius. É um prazer saber que você confia em mim, espero te ajudar no seu dia a dia.
          </Text>
          <Text style={styles.text2}>
            Para começarmos, primeiro você precisa fornecer algumas informações.
          </Text>
          <TouchableOpacity
            style={styles.btnConteiner}
            onPress={() => navigation.navigate("Etapa1")} // Navegando para a tela "Etapa1"
          >
            <Text style={styles.btnText}>Vamos lá</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.branco,
  },

  conteudo: {
    height: 680, // Mantém a altura do conteúdo original
    width: 350,
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  titulo: {
    fontSize: 32,
    fontFamily: fonts.Bold,
    color: colors.rosa,
  },

  text1: {
    fontSize: 18,
    fontFamily: fonts.Regular,
    textAlign: 'center',
  },

  text2: {
    fontFamily: fonts.SemiBold,
    fontSize: 17,
    textAlign: 'center',
    color: colors.laranja,
  },

  btnConteiner: {
    width: 240,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 17,
    backgroundColor: colors.rosa,
  },

  btnText: {
    fontSize: 18,
    color: colors.branco,
  },
});
