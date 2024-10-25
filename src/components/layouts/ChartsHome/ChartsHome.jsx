import { View, Text, TouchableOpacity } from "react-native";
import styles from './ChartsHome.module';
import Faether from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ProgressCharts from "../ProgressChart/ProgressCharts";
import { useNavigation } from '@react-navigation/native';
import { usePref } from '../../../components/hooks/usePref'

const ChartsHome = () => {
    const navigation = useNavigation();
    const { prefs } = usePref();

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <View style={styles.titleHeader}>
                    <Text style={styles.title}>Consumo de hoje</Text>
                    <Text style={styles.subtitle}>Baseado nas suas refeições</Text>
                </View>
                <TouchableOpacity style={styles.group} onPress={() => navigation.navigate('PrefAcompanhamento')}>
                    <Faether name="edit-2" size={20} />
                </TouchableOpacity>
            </View>
            <View style={styles.chartsArea}>
                {Object.entries(prefs).map(([key, { active, color, value }]) =>
                    active ? (
                        <ProgressCharts key={key} color={color} text={key} value={value} />
                    ) : null
                )}
            </View>
            <TouchableOpacity style={styles.buttonAdd}>
                <AntDesign name="pluscircle" size={20} style={{ color: '#fff' }} />
                <Text style={styles.buttonText}>Adicionar refeição</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ChartsHome;
