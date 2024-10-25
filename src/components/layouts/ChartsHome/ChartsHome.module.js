import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 20,
        minHeight: 100,
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 12,
        color: '#868991'
    },
    chartsArea: {
        flexDirection: 'row',
        marginVertical: 10,
        rowGap: 40,
        columnGap: 15,
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    buttonAdd: {
        alignSelf: 'center',
        justifyContent: 'center',
        minWidth: '60%',
        color: '#fff',
        marginTop: 50,
        marginVertical: 10,
        flexDirection: 'row',
        padding: 16,
        backgroundColor: '#af153f',
        borderRadius: 15,
    },
    buttonText: {
        color: '#fff',
        marginLeft: 12
    },
})