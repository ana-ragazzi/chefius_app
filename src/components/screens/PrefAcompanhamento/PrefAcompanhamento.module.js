import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,  // Garante que o SafeAreaView ocupe toda a tela
        backgroundColor: '#fff',
    },
    containerTitulo: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
        marginTop: 5,
        marginBottom: 20,
    },
    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#021036',
    },
    subtitulo: {
        fontSize: 15,
        color: '#868991',
    },
    scrollView: {
        flex: 1, // Garante que o ScrollView ocupe o restante da tela
    },
    contentContainer: {
        paddingBottom: 20,  // Dá um espaçamento ao final do conteúdo
    },
});
