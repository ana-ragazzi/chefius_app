import { AntDesign } from "@expo/vector-icons";
import colors from "../../colors";
import { fonts } from "../../fonts";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Importando useNavigation

export default function ButtonLayout({ title, rota }) {
  const navigation = useNavigation(); // Inicializando useNavigation

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(rota)} // Navegando para a rota recebida como prop
    >
      <Text style={styles.title}>{title}</Text>
      <AntDesign name="right" style={styles.seta} />
    </TouchableOpacity>
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

  seta: {
    fontSize: 20,
    marginRight: 15,
  },
});
