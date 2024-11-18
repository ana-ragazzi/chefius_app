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
        width: '30%',  
        height: 140, 
        marginLeft: 0,  

    },
    textContainer: {
        alignSelf: 'flex-start',
        maxWidth: '70%',
        padding: 20,
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between',
        maxHeight: 180
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
