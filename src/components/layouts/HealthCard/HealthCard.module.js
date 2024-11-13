import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        width: 140,
        marginTop: 10,
        marginRight: 20,
        marginBottom: 10,
        backgroundColor: '#ececec',
        flexDirection: 'column',
        borderRadius: 20,
        alignItems: 'center',
    },
    imgContainer: {
        maxWidth: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center', // Centraliza a imagem horizontalmente
        marginTop: 10,
    },
    image: {
        maxHeight: 100,
        maxWidth: 100, // Limita a largura da imagem ao tamanho do container
        resizeMode: 'contain',
    },
    
    textContainer: {
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 12,
        color: '#737373',
    }
});
