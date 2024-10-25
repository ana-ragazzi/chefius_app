import ButtonComponent from '../../layouts/ButtonComponent/ButtonComponent';
import ChartsHome from '../../layouts/ChartsHome/ChartsHome';
import SugestoesScroll from '../../layouts/SugestoesScroll/SugestoesScroll';
import styles from './Home.module';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView vertical showsVerticalScrollIndicator={false}
            style={styles.messageContainer}
            contentContainerStyle={styles.contentContainer}
            keyboardShouldPersistTaps='handled'
        >
            <ChartsHome/>
            <ButtonComponent/>
            <SugestoesScroll scrollTitulo="Sugestões do dia:" />
        </ScrollView  >
        </SafeAreaView>
    )
}

export default Home;