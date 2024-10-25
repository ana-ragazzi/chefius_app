import { TouchableOpacity, Image, Text, View } from "react-native";
import Avocado from '../../../assets/imgs/avocado.jpg';
import styles from './MiniRecipe.module';

const MiniRecipe = ( {titulo, subtitulo} ) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image style={styles.image} source={Avocado} />
            <View style={styles.textContainer}>
                <Text style={styles.title}> {titulo} </Text>
                <Text style={styles.subtitle}> {subtitulo} </Text>
            </View>
        </TouchableOpacity>
    );
};

export default MiniRecipe;
