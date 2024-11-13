import React, { useRef } from "react";
import { View, Text, TouchableOpacity, ScrollView, Animated } from "react-native";
import styles from './HealthScroll.module';
import HealthCard from "../HealthCard/HealthCard";
import Bowl from '../../../assets/imgs/bowl.png'
import Boy from '../../../assets/imgs/boy.png'
import Brain from '../../../assets/imgs/mente.png'

const HealthScroll = ({ scrollTitulo }) => {
    const scrollX = useRef(new Animated.Value(0)).current;



    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <View style={styles.titleHeader}>
                    <Text style={styles.title}> {scrollTitulo} </Text>
                </View>
                <Animated.View style={[styles.suggestionsContainer, { transform: [{ translateY: scrollX }] }]}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                        <HealthCard
                            titulo="Alimetação equilibrada"
                            subtitulo="Ver mais"
                            imagem={Bowl}
                        />
                        <HealthCard
                            titulo="Mente & Alimentação"
                            subtitulo="Ver mais"
                            imagem={Brain}
                        />
                        <HealthCard
                            titulo="Cozinha consciente"
                            subtitulo="Ver mais"
                            imagem={Boy}

                        />

                    </ScrollView>
                </Animated.View>
            </View>
        </View>
    );
};

export default HealthScroll;
