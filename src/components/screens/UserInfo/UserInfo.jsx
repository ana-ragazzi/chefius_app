import * as Animatable from "react-native-animatable";
import ButtonLayout from "../../../assets/components/ButtonLayout";
import { useAuth } from "../../hooks/useAuth";
import { View, StyleSheet, Text } from "react-native";
import colors from "../../../assets/colors";
import { AntDesign } from "@expo/vector-icons";
import { fonts } from "../../../assets/fonts";

export default function UserInfo() {
  const { auth } = useAuth(); // Pega os dados do usuário a partir do contexto

  return (
    <Animatable.View
      style={styles.container}
      animation="slideInUp"
      duration={350}
      easing="ease-in-out"
    >
      <Text style={styles.titulo}>Informações do usuário</Text>
      <View style={styles.fotoPerfilContainer}>
        <AntDesign name="user" style={styles.fotoPerfil} />
      </View>
      <Text style={styles.username}>{auth.nome || "Usuário"}</Text>
      <View style={styles.userInfo}>
        <Text style={styles.infoTitle}>E-mail</Text>
        <Text style={styles.info}>{auth.email || "Não informado"}</Text>
        <Text style={styles.infoTitle}>Senha</Text>
        <View style={styles.altConteiner}>
          <Text style={styles.info}>
            {auth.senha ? "********" : "Não definida"}
          </Text>
          <Text style={styles.infoAlt}>Alterar Senha</Text>
        </View>
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
    marginVertical: 18,
    textAlign: "center",
    fontSize: 26,
    color: colors.azulEscuro,
    fontFamily: fonts.SemiBold,
  },

  fotoPerfilContainer: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 120,
    borderWidth: 5,
    borderColor: colors.rosa,
    width: 120,
    height: 120,
    borderRadius: 80,
    marginVertical: 15,
  },

  fotoPerfil: {
    fontSize: 56,
    color: colors.rosa,
  },

  username: {
    fontSize: 18,
    color: colors.rosa,
    fontFamily: fonts.SemiBold,
    alignSelf: "center",
  },

  userInfo: {
    alignSelf: "center",
    marginTop: 25,
  },

  infoTitle: {
    marginTop: 25,
    alignSelf: "center",
    fontSize: 16,
    color: colors.rosa,
    fontFamily: fonts.Regular,
  },

  altConteiner: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
  },

  info: {
    alignSelf: "center",
    fontSize: 18,
    fontFamily: fonts.Regular,
  },

  infoAlt: {
    color: colors.rosa,
    textDecorationLine: "underline",
    marginLeft: 10,
  },
});
