import React, { useRef } from "react";
import { View, Text, TouchableOpacity, ScrollView, Animated } from "react-native";
import styles from './Sugestoes.module';
import MiniRecipe from "../SugestionMiniRecipe/MiniRecipe";

const SugestoesScroll = ( {scrollTitulo} ) => {
    const scrollX = useRef(new Animated.Value(0)).current;



    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <View style={styles.titleHeader}>
                    <Text style={styles.title}> {scrollTitulo} </Text>
                </View>
                <Animated.View style={[styles.suggestionsContainer, { transform: [{ translateY: scrollX }] }]}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
  
                            <MiniRecipe 
                            titulo="Avocado"
                            subtitulo="200kcal"
                            />
                            
                            <MiniRecipe 
                            titulo="Avocado"
                            subtitulo="200kcal"
                            />
                            
                            <MiniRecipe 
                            titulo="Avocado"
                            subtitulo="200kcal"
                            />
                            
                            <MiniRecipe 
                            titulo="Avocado"
                            subtitulo="200kcal"
                            />
                        
                    </ScrollView>
                </Animated.View>
            </View>
        </View>
    );
};

export default SugestoesScroll;
