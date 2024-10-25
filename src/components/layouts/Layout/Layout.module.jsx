import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'column',
        backgroundColor: 'transparent',
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
});
