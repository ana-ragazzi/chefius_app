import { View, TouchableOpacity, Image, Text, Linking } from "react-native";
import styles from './Card.module';

const Card = ({ imagem, texto, titulo }) => {
    // Função para abrir o link
    const openLink = () => {
        const url = 'https://mammajamma.com.br/nossas-casas/shopping-d-pedro/';
        Linking.openURL(url).catch((err) => console.error('Erro ao abrir o link:', err));
    };

    return (
        <TouchableOpacity style={styles.container} onPress={openLink}>
            <Image style={styles.image} source={imagem} resizeMode="contain" />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{titulo}</Text>
                <Text style={styles.cidade}>Campinas</Text>
                <View style={styles.row}>
                    <Text style={styles.avaliacao}>*****</Text>
                    <Text style={styles.preco}>{texto}</Text>
                </View>
                <Text style={styles.endereco}>Av. Guilherme Campos, 500</Text>
                <Text style={styles.endereco2}>
                    Jardim Santa Genebra, Campinas - SP, 13087-901
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default Card;
