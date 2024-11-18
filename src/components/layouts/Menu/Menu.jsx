import { View, TouchableOpacity, Text } from "react-native"
import styles from './Menu.module';
import Octicons from 'react-native-vector-icons/Octicons';
import Faether from 'react-native-vector-icons/Feather';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, useNavigationState } from '@react-navigation/native';

const Menu = () => {
    const navigation = useNavigation();
    const currentRoute = useNavigationState((state) => {
        
        if (state && state.routes && state.routes.length > 0) {
          return state.routes[state.index].name;
        }
        return null;
      });

    const isCurrentRoute = (routeName) => currentRoute === routeName;

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.group} onPress={() => navigation.navigate('Home')}>
                <Octicons name="home" color={isCurrentRoute('Home') ? '#af153f' : '#000'} size={25}/>
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.group} onPress={() => navigation.navigate('Receitas')}>
                <Material name="pot-steam-outline" color={isCurrentRoute('Receitas') ? '#af153f' : '#000'} size={25}/>
                <Text>Receitas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.group} onPress={() => navigation.navigate('Chat')}>
                <Material name="chef-hat" color={isCurrentRoute('Chat') ? '#af153f' : '#000'} size={25}/>
                <Text>Guru</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.group} onPress={() => navigation.navigate('Perfil')}>
                <Faether name="user" color={isCurrentRoute('Perfil') ? '#af153f' : '#000'} size={25}/>
                <Text>Perfil</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Menu;