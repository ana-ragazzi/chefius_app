import chapeu from "../../../assets/imgs/chapeu_menu.png";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import ButtonLayout from "../../../assets/components/ButtonLayout";
import colors from "../../../assets/colors";
import { fonts } from "../../../assets/fonts";
import { useAuth } from "../../hooks/useAuth"; // Importando o hook personalizado
import { useNavigation } from "@react-navigation/native"; // Usando React Navigation
import fotoPerfil from "../../../assets/imgs/foto-perfil.jpeg";

export default function Perfil() {
  const { auth, logout } = useAuth(); // Pegando informações do contexto
  const navigation = useNavigation(); // Para navegação

  const handleLogout = () => {
    logout(); // Chamando função de logout do contexto
    navigation.navigate("Initial"); // Navegando para a tela inicial
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Image source={fotoPerfil} style={styles.fotoPerfil} />
      <Text style={styles.username}>{auth.nome || "Usuário"}</Text>
      <ButtonLayout title="Preferências" rota="Preferencias" />
      <ButtonLayout title="Informações pessoais" rota="UserInfo" />
      <ButtonLayout style={styles.posic} title="Receitas salvas" rota="ReceitasSalvas" />
      <ButtonLayout style={styles.posic} title="Configurações" rota="Config" />
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // Garante que o conteúdo ocupe todo o espaço disponível
    backgroundColor: colors.branco,
    alignItems: "center",
    paddingVertical: 20, // Adiciona espaçamento vertical
  },

  fotoPerfil: {
    width: 150,
    height: 150,
    borderRadius: 500,
    fontSize: 56,
    marginBottom: 20, // Espaçamento entre foto e próximo item
  },

  username: {
    fontSize: 22,
    fontFamily: fonts.Regular,
    alignSelf: "center",
    marginBottom: 25,
  },

  posic: {
    alignSelf: "center",
  },

  button: {
    width: 150,
    height: 40,
    backgroundColor: colors.rosa,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 15,
    marginTop: 15,
    marginBottom: 20, // Adiciona espaçamento no final
  },

  buttonText: {
    fontSize: 18,
    fontFamily: fonts.Regular,
    color: colors.branco,
  },
});
