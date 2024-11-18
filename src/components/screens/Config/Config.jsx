import ButtonLayout from "../../../assets/components/ButtonLayout"; 
import { StyleSheet, Text } from "react-native";
import colors from "../../../assets/colors"; 
import { fonts } from "../../../assets/fonts"; 
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native"; 

export default function Config() {
  const navigation = useNavigation();

  return (
    <Animatable.View
      style={styles.container}
      animation="slideInLeft"
      duration={250}
      easing="linear"
    >
      <Text style={styles.titulo}>Configurações</Text>
      
      <ButtonLayout title="Informações do usuário" rota="UserInfo" />
      <ButtonLayout title="Convidar amigos" rota="ConvidarAmigos" />
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.branco,
    alignItems: "center",
  },

  titulo: {
    fontSize: 24,
    color: colors.azulEscuro,
    fontFamily: fonts.SemiBold,
    alignSelf: "center",
    marginBottom: 30,
  },

  posicao: {
    marginLeft: 15,
  },

  btnPosition: {
    marginVertical: 25,
    marginLeft: 25,
  },
});
