import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  messageContainer: {
    marginVertical: 1,
    padding: 7,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    borderRadius: 5,
  },
  textMessage: {
    padding: 8,
    maxWidth: '80%',
    backgroundColor: "#ececec",
    borderRadius: 10
  },
  perfilImage: {
    width: 40,
    height: 40,
    marginLeft: 10,
    borderRadius: 20,
  },
});
