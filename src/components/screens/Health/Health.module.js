import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'column',
    },
    messageContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        padding: 10,
    },
    containerRest:{
        marginTop: 30,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    titulo:{
            fontWeight: 'bold'
    },
    containerCard:{
        padding: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
    }
})