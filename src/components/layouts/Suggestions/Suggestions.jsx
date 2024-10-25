import React, { useRef } from 'react';
import { ScrollView, Text, TouchableOpacity, View, Animated } from 'react-native';
import styles from './suggestions.module';

const SuggestionsScroll = ({ onSuggestionPress }) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const suggestions = [
    'Receita com itens da geladeira/dispensa',
    'Refeição focada em atingir minha necessidade',
    'Café da manhã proteico e low carb',
    'Sugestão para um jantar romântico',
    'Pratos leves e saudáveis'
  ];

  return (
    <>
      <Text style={styles.suggestionTitle}>Sugestões</Text>
      <Animated.View style={[styles.suggestionsContainer, { transform: [{ translateY: scrollX }] }]}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {suggestions.map((suggestion, index) => (
            <TouchableOpacity 
              key={index}
              style={styles.suggestionButton} 
              onPress={() => onSuggestionPress(suggestion)}>
              <Text style={[styles.suggestionText, {color: getSuggestionColor(index)}]}>
                {suggestion}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Animated.View>
    </>
  );
};

const getSuggestionColor = (index) => {
  switch (index) {
    case 0: return '#021036'; // Cor para "Receita com itens da geladeira/dispensa"
    case 1: return '#FF901A'; // Cor para "Refeição focada em atingir minha necessidade"
    case 2: return '#af153f'; // Cor para "Café da manhã proteico e low carb"
    default: return '#000';    // Cor padrão
  }
};

export default SuggestionsScroll;
