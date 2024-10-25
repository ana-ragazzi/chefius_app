import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
const statusBarHeight = getStatusBarHeight();

console.log(
  "O tamanho da barra de notificações do dispositivo é: " + statusBarHeight
);

export default styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 80,
    paddingTop: statusBarHeight + 5,
    paddingHorizontal: 12,
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  textArea: {
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  perfilText: {
    color: "#af153f",
    fontSize: 30,
    fontWeight: "bold",
  },
  perfilUserText: {
    color: "#af153f",
    fontSize: 30,
    fontWeight: "bold",
  },
  perfilText: {
    color: "#af153f",
    fontSize: 30,
    fontWeight: "bold",
  },
  maisText: {
    color: "#fff",
    fontSize: 13,
  },
  perfilImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 550,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.0)"
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },  
    shadowOpacity: 0.25,                    
    shadowRadius: 3.84,                     

    elevation: 5,    
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  modalButton: {
    padding: 15,
    backgroundColor: "#af153f",
    borderRadius: 5,
    marginBottom: 10,
    width: "100%",
    alignItems: "center",
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  modalCancelButton: {
    padding: 15,
    backgroundColor: "#ccc",
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  modalCancelText: {
    color: "#333",
    fontSize: 16,
  },
});
