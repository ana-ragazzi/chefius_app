import styles from './Restaurantes.module'
import {View, Text, ScrollView} from 'react-native';
import CardHeader from '../../layouts/CardHeader/CardHeader';
import Restaurantestela from '../../../assets/imgs/restaurantestela.png';
import Mamma from '../../../assets/imgs/mamma.png';
import Card from '../../layouts/CardNutrieRest/Card';


const Restaurantes = () => {
    return (
        <ScrollView vertical showsVerticalScrollIndicator={false}
            style={styles.messageContainer}
            contentContainerStyle={styles.contentContainer}
            keyboardShouldPersistTaps='handled'
        >
            <>
                <CardHeader
                    titulo="Restaurantes"
                    subtitulo="Nós separamos uma lista de restaurantes da sua região que pode te interessar com base nas suas receitas favoritas."
                    minititulo="Sugestões abaixo"
                    imagem={Restaurantestela}
                />

                <Card
                    titulo='Mamma Jamma'
                    imagem={Mamma}
                    texto='$$$'
                />

            </>

        </ScrollView>

    )
}

export default Restaurantes;