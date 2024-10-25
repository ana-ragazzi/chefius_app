import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        width: 140,
        minHeight: 140,
        marginTop: 15,
        marginRight: 20,
        backgroundColor: '#ececec',
        flexDirection: 'column',
        borderRadius: 20,
        overflow: 'hidden', // Certifica que a imagem siga o borderRadius sem extravasar
    },
    image: {
        width: 140,
        height: 140,
        resizeMode: 'cover', // A imagem preenche o topo do card
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    textContainer: {
        padding: 10,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
    },
    subtitle: {
        fontSize: 12,
        color: '#737373',
    }
});
