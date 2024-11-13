import { View, TouchableOpacity, Image, Text } from "react-native";
import yoga from '../../../assets/imgs/yogaguru.png';
import styles from './CardRecomendacoes';
import { useNavigation, useNavigationState } from '@react-navigation/native';

const ButtonComponent = () => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Health')}>
            <Image style={styles.image} source={yoga} resizeMode="contain" />
            <View style={styles.content}>
                <Text style={styles.title}>Saúde e bem estar</Text>
                <Text style={styles.subtitle}>Cuidar da saúde e fundamental para uma vida mais leve.</Text>
                <TouchableOpacity style={styles.buttonAdd}>
                    <Text style={styles.buttonText}>Saiba mais</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

export default ButtonComponent;
