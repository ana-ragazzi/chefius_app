import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center", // Centraliza verticalmente o conteúdo no container
      width: "100%",
      backgroundColor: "#ececec",
      padding: 10,
      borderRadius: 10,
      marginBottom: 20,
      height: 150, // Define uma altura fixa para o container
    },
    image: {
      width: "50%", // Ocupa 50% da largura do container
      height: "90%", // Ocupa quase toda a altura do container, com margem
      resizeMode: "cover", // Ajusta a imagem para preencher o espaço
      borderRadius: 8, // Arredonda os cantos da imagem
      marginVertical: "5%", // Adiciona uma margem para centralizar verticalmente
    },
    textContainer: {
      width: "50%", // O texto ocupa os outros 50% da largura
      paddingLeft: 10, // Espaço entre a imagem e o texto
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center", // Centraliza horizontalmente
    },
    title: {
      fontSize: 22,
      fontWeight: "bold",
      color: "#021036",
      textAlign: "center", // Garante que o texto seja alinhado ao centro
    },
    cidade: {
      fontSize: 14,
      color: "#737373",
      marginVertical: 5,
      textAlign: "center",
    },
    row: {
      flexDirection: "row",
      justifyContent: "center", // Centraliza horizontalmente as estrelas e cifrões
      alignItems: "center", // Centraliza verticalmente
      gap: 25, // Reduz o espaço entre as estrelas e os cifrões
    },
    avaliacao: {
      fontSize: 14,
      color: "#f1c40f",
    },
    preco: {
      fontSize: 14,
      color: "#af153f",
    },
    endereco: {
      fontSize: 12,
      color: "#737373",
      flexWrap: "wrap",
      textAlign: "center", // Centraliza as linhas de texto
    },
    endereco2: {
      fontSize: 12,
      color: "#737373",
      flexWrap: "wrap",
      textAlign: "center", // Centraliza as linhas de texto
    },
  });
  