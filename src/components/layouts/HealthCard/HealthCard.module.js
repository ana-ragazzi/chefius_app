import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        width: 140,
        marginTop: 15,
        marginRight: 20,
        backgroundColor: '#ececec',
        flexDirection: 'column',
        borderRadius: 20,
        alignItems: 'center',
    },
    imgContainer:{
        maxWidth: 100,
        height: 100,
        justifyContent: 'center',
        marginTop: 10,
    },
    image: {
        maxHeight: 100
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
