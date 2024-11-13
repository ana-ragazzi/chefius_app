import { TouchableOpacity, Image, Text, View } from "react-native";
import { useNavigation, useNavigationState } from '@react-navigation/native';
import styles from './HealthCard.module';

const HealthCard = ( {titulo, subtitulo, imagem, tela} ) => {
    
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate(tela)}>
            <View style={styles.imgContainer}>
                <Image style={styles.image} source={imagem} resizeMethod="resize" resizeMode="contain" />
            </View>
            
            <View style={styles.textContainer} >
                
                <Text style={styles.title}>{titulo}</Text>
                <Text style={styles.subtitle}>{subtitulo}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default HealthCard;
