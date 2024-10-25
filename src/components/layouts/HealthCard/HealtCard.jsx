import { TouchableOpacity, Image, Text, View } from "react-native";

import styles from './HealthCard.module';

const HealthCard = ( {titulo, subtitulo, imagem} ) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.imgContainer}>
                <Image style={styles.image} source={imagem} resizeMethod="resize"/>
            </View>
            
            <View style={styles.textContainer}>
                <Text style={styles.title}>{titulo}</Text>
                <Text style={styles.subtitle}>{subtitulo}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default HealthCard;
