import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
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
});

