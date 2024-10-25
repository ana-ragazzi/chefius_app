import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 5,
        minHeight: 100,
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
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
    suggestionTitle: {
        color: '#af153f',
        fontSize: 14,
        paddingLeft: 3,
        fontWeight: 'Bold',
        marginTop: 15,
      },
    
      suggestionsContainer: {
        padding: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
      },
    
      suggestionButton: {
        backgroundColor: '#fff',
        padding: 8,
        borderRadius: 8,
        marginHorizontal: 4,
        marginVertical: 6,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
      },
    
      suggestionText: {
        fontSize: 12,
        color: '#AF153F',
      },
})