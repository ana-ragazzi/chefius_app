import styles from './Config.module';
import { View, Text, TouchableOpacity } from 'react-native';
import { useAuth } from '../../hooks/useAuth';

const Config = () => {
    const { logout } = useAuth(); // Usa a função logout do contexto de autenticação

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Configurações</Text>

            <TouchableOpacity style={styles.logoutButton} onPress={logout}>
                <Text style={styles.logoutButtonText}>Sair</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Config;
