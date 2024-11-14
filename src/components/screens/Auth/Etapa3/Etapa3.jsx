import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../../../assets/colors';
import { fonts } from '../../../../assets/fonts';
import EtapaTitle from '../../../../assets/components/EtapaTitle';
import { useNavigation } from '@react-navigation/native'; // Usando o hook useNavigation
import { useAuth } from '../../../hooks/useAuth';  // Importando o hook do AuthContext
import Header from '../../../layouts/Header/Header';

export default function Etapa3() {
  const navigation = useNavigation(); // Usando o hook useNavigation para navegação
  const [selectedOption, setSelectedOption] = useState(null);
  const { updateAuth } = useAuth(); // Acessando a função para atualizar as preferências no contexto

  const handleOptionPress = (option) => {
    setSelectedOption(option);
    updateAuth({ preferencia: option }); // Atualizando a preferência no contexto
  };

  return (
    <View style={styles.container}>
      <Header/>
      <EtapaTitle titulo="Etapa 3:" subtitulo="Preferências" />
      <View style={styles.conteudo}>
        <Text style={styles.descricao}>
          Isso não bloqueará as outras funções do aplicativo, mas vai proporcionar uma experiência personalizada.
        </Text>

        <View style={styles.optionsContainer}>
          {['cozinhar', 'alimentação', 'acompanhamento', 'duvidas'].map((option) => (
            <TouchableOpacity
              key={option}
              style={[styles.optionButton, selectedOption === option && styles.selectedOptionButton]}
              onPress={() => handleOptionPress(option)}
            >
              <Text style={styles.optionText}>
                {option === 'cozinhar' ? 'Aprender a cozinhar' : 
                 option === 'alimentação' ? 'Melhorar a alimentação' : 
                 option === 'acompanhamento' ? 'Acompanhar minha alimentação' : 
                 'Tirar dúvidas com a Guru'}
              </Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity 
            style={styles.nextButton}
            onPress={() => {
              console.log("Opção selecionada:", selectedOption);
              navigation.navigate('Etapa4'); // Navegando para a tela "Etapa4"
            }}
          >
            <Text style={styles.nextButtonText}>próximo →</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.branco,
  },
  conteudo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  descricao: {
    fontSize: 14,
    color: colors.preto,
    fontFamily: fonts.SemiBold,
    textAlign: 'center',
    marginTop: -155,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 400,
    height: 300,
    justifyContent: 'space-evenly',
  },
  optionButton: {
    width: 180,
    height: 50,
    borderRadius: 18,
    backgroundColor: colors.laranjaClaro,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 55,
  },
  selectedOptionButton: {
    backgroundColor: colors.laranja,
  },
  optionText: {
    textAlign: 'center',
    fontSize: 14,
    color: colors.branco,
    fontFamily: fonts.Regular,
  },
  nextButton: {
    width: 240,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.rosa,
    borderRadius: 15,
    marginTop: 80,
  },
  nextButtonText: {
    fontSize: 16,
    color: colors.branco,
  },
});
