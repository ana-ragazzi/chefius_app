import styles from './Receitas.module';
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import CardHeader from '../../layouts/CardHeader/CardHeader';
import HealthScroll from '../../layouts/HealthScroll/HealthScroll';
import HealthCard from "../../layouts/HealthCard/HealthCard";
import Restaurante from '../../../assets/imgs/restaurantes.png';
import Nutri from '../../../assets/imgs/gurulaptop.png';
import Barista from '../../../assets/imgs/barista.png';

const Receitas = () => {
    return (
        <ScrollView vertical showsVerticalScrollIndicator={false}
        style={styles.messageContainer}
        contentContainerStyle={styles.contentContainer}
        keyboardShouldPersistTaps='handled'
    >
        <>
            <CardHeader
                titulo="Nós queremos te ajudar!"
                subtitulo="Entender o que você consome é fundamental para uma vida mais saudável e equilibrada. Por isso, sugestões são disponibilizadas diariamente."
                minititulo="Sugestões abaixo"
                imagem={Barista}
            />
   
            <View style={styles.containerRest}>
                <Text style={styles.titulo}>Café da manhã</Text>
                <View style={styles.containerCard}>
                    <HealthCard 
                        titulo='Panquecas'
                        subtitulo="Ver mais"
                        imagem={Restaurante}

                    />                    
                </View>
                <Text style={styles.titulo}>Almoço</Text>
                <View style={styles.containerCard}>
                    <HealthCard 
                        titulo='Macarrão a bolonhesa'
                        subtitulo="Ver mais"
                        imagem={Restaurante}

                    />                    
                </View>
                <Text style={styles.titulo}>Café da tarde</Text>
                <View style={styles.containerCard}>
                    <HealthCard 
                        titulo='Cereal com frutas'
                        subtitulo="Ver mais"
                        imagem={Restaurante}

                    />                    
                </View>
                <Text style={styles.titulo}>Jantar</Text>
                <View style={styles.containerCard}>
                    <HealthCard 
                        titulo='Peixe com legumes'
                        subtitulo="Ver mais"
                        imagem={Restaurante}

                    />                    
                </View>
            </View>

        </>

    </ScrollView>

    )
}

export default Receitas;