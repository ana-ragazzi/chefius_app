import { Text, TextInput, View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import Header from '../../layouts/Header/Header';
import styles from './Layout.module';
import Menu from '../Menu/Menu';

const Layout = ({children}) => {
        return (
        <SafeAreaView style={styles.container}>
            <Header user='Ana' />
            <View
                style={styles.messageContainer}
                contentContainerStyle={styles.contentContainer}
            >
                {children}
            </View>
            <Menu />
        </SafeAreaView>
    );
};

export default Layout;
