import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container:{
        minHeight: 180,
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#ececec',
        padding: 2,
        borderRadius: 25,
        marginBottom: 25,
    },
    image:{
        width: 150,
        height: 150
    },
    content: {
        maxWidth: '50%',
        gap: 15,
        justifyContent: 'center',
        textAlign: 'center', 
        padding: 5,
    },
    buttonAdd: {
        width: 160,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff',
        padding: 8,
        backgroundColor: '#65C694',
        borderRadius: 12,
    },
    buttonText: {
        color: '#fff',
        alignSelf: 'center'
    },
    title: {
        color: '#af153f',
        fontWeight: 'bold',
        fontSize: 20,
        justifyContent: 'center'
    }
})