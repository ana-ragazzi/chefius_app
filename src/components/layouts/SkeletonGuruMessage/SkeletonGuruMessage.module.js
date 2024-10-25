import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  messageContainer: {
    marginVertical: 1,
    padding: 7,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
  },
  textMessage: {
    padding: 8,
    maxWidth: '80%',
    color: '#fff',
    backgroundColor: "#c4c4c4",
    borderRadius: 5,
  },
  perfilImage: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 20,
  },
});
