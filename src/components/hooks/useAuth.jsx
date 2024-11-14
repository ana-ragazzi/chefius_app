// Atualizando o AuthProvider para incluir o updateAuth

import { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

const initialAuth = {
  nome: "",
  email: "",
  senha: "",
  idade: "",
  peso: "",
  altura: "",
};

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialAuth);
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const loadAuthData = async () => {
      try {
        const savedAuth = await AsyncStorage.getItem('@user_auth');
        if (savedAuth) {
          setAuth(JSON.parse(savedAuth));
          setLogged(true);
        }
      } catch (error) {
        console.error("Erro ao carregar dados de autenticação:", error);
      }
    };
    loadAuthData();
  }, []);

  useEffect(() => {
    const saveAuthData = async () => {
      if (logged) {
        try {
          await AsyncStorage.setItem('@user_auth', JSON.stringify(auth));
        } catch (error) {
          console.error("Erro ao salvar dados de autenticação:", error);
        }
      }
    };
    saveAuthData();
  }, [auth, logged]);

  const login = async (userData) => {
    setAuth(userData);
    setLogged(true);
    try {
      await AsyncStorage.setItem('@user_auth', JSON.stringify(userData));
    } catch (error) {
      console.error("Erro ao salvar dados de autenticação:", error);
    }
  };

  const logout = () => {
    setAuth(initialAuth);
    setLogged(false);
    AsyncStorage.removeItem('@user_auth');
  };

  const updateAuth = (updatedFields) => {
    setAuth((prevAuth) => ({ ...prevAuth, ...updatedFields }));
  };

  return (
    <AuthContext.Provider value={{ auth, logged, login, logout, updateAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
