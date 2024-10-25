// PrefAcompanhamento.js
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import styles from './PrefAcompanhamento.module';
import SwitchComponent from "../../layouts/SwitchAcompanhamento/Switch";
import { usePref } from '../../hooks/usePref'

const PrefAcompanhamento = () => {
    const { prefs, updatePrefs } = usePref();

    const handleChange = (macro, value) => {
        updatePrefs(macro, value);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerTitulo}>
                <Text style={styles.titulo}>Preferências</Text>
                <Text style={styles.subtitulo}>Acompanhamento</Text>
            </View>

            <ScrollView
                vertical
                showsVerticalScrollIndicator={false}
                style={styles.scrollView}
                contentContainerStyle={styles.contentContainer}
                keyboardShouldPersistTaps="handled"
            >
                <View>
                    <SwitchComponent
                        titulo="Calorias"
                        enable={prefs.kcal?.active}
                        handleChange={(value) => handleChange('kcal', value)}
                    />
                    <SwitchComponent
                        titulo="Carboidratos"
                        enable={prefs.carb?.active}
                        handleChange={(value) => handleChange('carb', value)}
                    />
                    <SwitchComponent
                        titulo="Lipídios"
                        enable={prefs.lipd?.active}
                        handleChange={(value) => handleChange('lipd', value)}
                    />
                    <SwitchComponent
                        titulo="Água"
                        enable={prefs.agua?.active}
                        handleChange={(value) => handleChange('agua', value)}
                    />
                    <SwitchComponent
                        titulo="Fibras"
                        enable={prefs.fibr?.active}
                        handleChange={(value) => handleChange('fibr', value)}
                    />
                    <SwitchComponent
                        titulo="Proteínas"
                        enable={prefs.prot?.active}
                        handleChange={(value) => handleChange('prot', value)}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default PrefAcompanhamento;
