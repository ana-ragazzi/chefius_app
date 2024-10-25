import { View, Image, Text } from "react-native";
import yoga from '../../../assets/imgs/yogaguru.png';
import styles from './CardHeader.module';
import { useNavigation } from '@react-navigation/native';

const CardHeader = ({titulo, subtitulo, minititulo}) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{titulo}</Text>
                <Text style={styles.subtitle}>{subtitulo}</Text>
                <Text style={styles.miniTitle}>{minititulo}</Text>
            </View>
            <Image style={styles.image} source={yoga} resizeMode="contain" />
        </View>

    );
};

export default CardHeader;
