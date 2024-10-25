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
    contentContainer: {
        justifyContent: 'flex-end', 
        flexGrow: 1,              
    },
    formContainer: {
        height: 70, 
        backgroundColor: 'rgba(0, 0, 0, 0)',
        padding: 1,
    },
    inputContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        height: '100%', 
    },
    textInput: {
        flex: 1, 
        backgroundColor: '#ececec',
        borderRadius: 10,
        padding: 10,
        marginRight: 1, 
    },
    buttonStyle: {
        padding: 10,
        borderRadius: 1000
    }
});
