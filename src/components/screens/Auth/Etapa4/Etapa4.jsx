import * as Animatable from "react-native-animatable";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";  // Usando React Navigation
import colors from "../../../../assets/colors";
import { fonts } from "../../../../assets/fonts";
import EtapaTitle from "../../../../assets/components/EtapaTitle";
import Header from "../../../layouts/Header/Header";

export default function Etapa4() {
  const navigation = useNavigation();  // Usando React Navigation para navegação

  return (
    <Animatable.View 
      style={styles.container}
      animation="slideInRight"
      duration={350}
    >
        <Header/>
      <EtapaTitle titulo="Etapa 4:" subtitulo="Cadastro" />
      <Text style={styles.texto}>
        Utilizar uma conta garante que todas as suas preferências ficarão salvas, além de proporcionar uma experiência única.
      </Text>
      <View style={styles.buttonsConteiner}>
        <TouchableOpacity 
          onPress={() => navigation.navigate("CadastroEmail")}  // Navegando com React Navigation
          style={styles.buttonEmail}
        >
          <Text style={styles.buttonEmailText}>Entrar com E-mail</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonGoogle}>
          <Text style={styles.buttonGoogleText}>Entrar com Google</Text>
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

  titulo: {
    fontSize: 36,
    fontFamily: fonts.Bold,
    textAlign: 'center',
    color: colors.rosa,
  },

  texto: {
    marginTop: 25,
    textAlign: 'center',
    alignSelf: 'center',
    width: 350,
    fontSize: 18,
    fontFamily: fonts.Regular,
  },

  buttonsConteiner: {
    height: 450,
    alignItems: 'center',
  },

  buttonEmail: {
    marginVertical: 55,
    justifyContent: 'center',
    alignItems: 'center',
    width: 240,
    height: 50,
    borderRadius: 17,
    backgroundColor: colors.rosa,
  },

  buttonEmailText: {
    fontSize: 18,
    fontFamily: fonts.Regular,
    color: colors.branco,
  },

  buttonGoogle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 240,
    height: 50,
    borderRadius: 17,
    backgroundColor: colors.cinzaMedio,
  },

  buttonGoogleText: {
    fontSize: 18,
    fontFamily: fonts.Regular,
    color: colors.cinza,
  },

  buttonFacebook: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 240,
    height: 50,
    borderRadius: 17,
    backgroundColor: colors.azul,
  },

  buttonFacebookText: {
    fontSize: 18,
    fontFamily: fonts.Regular,
    color: colors.branco,
  },
});
