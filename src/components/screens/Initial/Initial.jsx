import { useNavigation } from "@react-navigation/native";
import { useFonts, Montserrat_400Regular, Montserrat_700Bold, Montserrat_600SemiBold } from "@expo-google-fonts/montserrat"
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico"
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, ActivityIndicator } from "react-native";
import colors from "../../../assets/colors";
import chapeu from "../../../assets/imgs/chapeu_menu.png";
import guruBemVindo from "../../../assets/imgs/guru_bemvindo.png";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";


import { fonts } from "../../../assets/fonts"; 

export default function Initial() {
  const navigation = useNavigation();  

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
    Pacifico_400Regular,
    Montserrat_600SemiBold,
   })
   if(!fontsLoaded){
    return null
   }
  
  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />; // Exibe um indicador enquanto as fontes carregam
  }

  return (
    <Animatable.View style={{ flex: 1 }}>
      <StatusBar hidden />
      <LinearGradient
        colors={[colors.laranjaClaro, colors.branco]}
        style={styles.container}
      >
        <Image source={chapeu} />
        <Image source={guruBemVindo} />
        <Text style={styles.titulo}>Seja bem-vindo</Text>
        <Text style={styles.subtitulo}>Faça parte!</Text>
        <Text style={styles.texto}>Uma vida melhor começa com uma alimentação melhor</Text>
        <View style={styles.buttonConteiner}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}  // Navegação para a tela Login
            style={styles.btnLoginConteiner}
          >
            <Text style={styles.btnLoginText}>Já tenho uma conta</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Cadastro")}  // Navegação para a tela Cadastro
            style={styles.btnCadastroConteiner}
          >
            <Text style={styles.btnCadastroText}>Começar agora</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonConteiner: {
    height: 200,
    justifyContent: 'space-evenly',
  },

  titulo: {
    width: 200,
    fontSize: 42,
    color: colors.rosa,
    fontFamily: fonts.Pacifico, // Fonte carregada
    textAlign: 'center',
  },

  subtitulo: {
    fontFamily: fonts.Bold, // Fonte carregada
    fontSize: 24,
    color: colors.laranja,
  },

  texto: {
    width: 300,
    fontSize: 18,
    fontFamily: fonts.Regular, // Fonte carregada
    textAlign: 'center',
  },

  btnCadastroConteiner: {
    width: 240,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 17,
    backgroundColor: colors.rosa,
  },

  btnCadastroText: {
    fontSize: 18,
    fontFamily: fonts.Regular, // Fonte carregada
    color: colors.branco,
  },

  btnLoginConteiner: {
    width: 240,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 17,
    borderWidth: 2,
    borderColor: colors.rosa,
    backgroundColor: 'transparent',
  },

  btnLoginText: {
    fontSize: 18,
    fontFamily: fonts.Regular, 
    color: colors.rosa,
  },
});
