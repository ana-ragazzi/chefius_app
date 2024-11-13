// PrefContext.js
import { useContext, createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const PrefContext = createContext();

const initialPrefs = {
    kcal: { active: true, value: 100, color: 'rgba(175, 21, 63, 0.6)' },
    carb: { active: true, value: 50, color: 'rgba(255, 144, 26, 0.6)' },
    prot: { active: true, value: 60, color: 'rgba(2, 16, 54, 0.6)' },
    lipd: { active: true, value: 40, color: 'rgba(101, 198, 148, 0.6)' },
    agua: { active: true, value: 30, color: 'rgba(175, 21, 63, 0.6)' },
    fibr: { active: true, value: 50, color: 'rgba(255, 144, 26, 0.6)'}
        
};

const PrefProvider = ({ children }) => {
    const [prefs, setPrefs] = useState(initialPrefs);

    useEffect(() => {
        const loadPreferences = async () => {
            try {
                AsyncStorage.removeItem('@user_preferences');
                const savedPrefs = await AsyncStorage.getItem('@user_preferences');
                if (savedPrefs) setPrefs(JSON.parse(savedPrefs));
            } catch (error) {
                console.error('Erro ao carregar preferências:', error);
            }
        };

        loadPreferences();
    }, []);

    useEffect(() => {
        const savePreferences = async () => {
            try {
                await AsyncStorage.setItem('@user_preferences', JSON.stringify(prefs));
            } catch (error) {
                console.error('Erro ao salvar preferências:', error);
            }
        };

        savePreferences();
    }, [prefs]);

    const updatePrefs = (macro, value) => {
        setPrefs((prevPrefs) => ({
            ...prevPrefs,
            [macro]: {
                ...prevPrefs[macro],
                active: value
            }
        }));
    };

    return <PrefContext.Provider value={{ prefs, updatePrefs }}>
        {children}
    </PrefContext.Provider>;
};

function usePref() {
    return useContext(PrefContext);
}

export { PrefProvider, usePref };
