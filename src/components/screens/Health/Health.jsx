import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import CardHeader from '../../layouts/CardHeader/CardHeader';
import HealthScroll from '../../layouts/HealthScroll/HealthScroll';
import HealthCard from "../../layouts/HealthCard/HealthCard";
import styles from './Health.module';
import Restaurante from '../../../assets/imgs/restaurantes.png';
import Nutri from '../../../assets/imgs/gurulaptop.png';
import yoga from '../../../assets/imgs/yogaguru.png';

const Health = () => {


    return (
        <ScrollView vertical showsVerticalScrollIndicator={false}
            style={styles.messageContainer}
            contentContainerStyle={styles.contentContainer}
            keyboardShouldPersistTaps='handled'
        >
            <>
                <CardHeader
                    titulo="Saúde e bem estar"
                    subtitulo="Aqui você encontrará sugestões de artigos, restaurantes e nutricionistas."
                    minititulo="Sugestões abaixo"
                    imagem={yoga}
                />
                <HealthScroll scrollTitulo="Artigos" />
                <View style={styles.containerRest}>
                    <Text style={styles.titulo}>Recomendações</Text>
                    <View style={styles.containerCard}>
                        <HealthCard 
                            titulo='Restaurantes'
                            subtitulo="Ver mais"
                            imagem={Restaurante}
                            tela='Restaurantes'
                        />
                        <HealthCard 
                            titulo='Nutricionistas'
                            subtitulo="Ver mais"
                            imagem={Nutri}
                        />                     
                    </View>
                </View>

            </>

        </ScrollView>

    )
}

export default Health;