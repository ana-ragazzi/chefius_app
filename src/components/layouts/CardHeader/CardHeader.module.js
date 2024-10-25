import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
const statusBarHeight = getStatusBarHeight();

export default styles = StyleSheet.create({
     container: {
        minHeight: 200,
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#ececec',
        padding: 2,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        marginBottom: 25,
        overflow: 'hidden',  
    },
    image: {
        width: 140,  
        height: 140, 
        marginLeft: 15,  

    },
    textContainer: {
        maxWidth: 200,
        padding: 20,
        flexDirection: 'column',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#021036'
    },
    subtitle: {
        fontSize: 14,
        color: '#737373',
        marginTop: 5,
    },
    miniTitle: {
        fontSize: 12,
        color: '#af153f',
        marginTop: 5,
        alignSelf: 'flex-end'
    },
});
