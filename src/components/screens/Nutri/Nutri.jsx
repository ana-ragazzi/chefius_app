import styles from './Nutri.module'
import {View, Text, ScrollView} from 'react-native';
import CardHeader from '../../layouts/CardHeader/CardHeader';
import Restaurantestela from '../../../assets/imgs/restaurantestela.png';
import Nutri from '../../../assets/imgs/nutri2.png';
import Ju from '../../../assets/imgs/ju.png';
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
                    titulo="Nutricionistas"
                    subtitulo="Aqui está uma lista com todos nossos nutricionistas parceiros."
                    minititulo="Sugestões abaixo"
                    imagem={Nutri}
                />

                <Card
                    titulo='Juliana Maia'
                    imagem={Ju}
                    texto='(19) 99123-4566'
                />

            </>

        </ScrollView>

    )
}

export default Restaurantes;