import React, { useState } from 'react';
import { Switch, StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text, TouchableOpacity, ScrollView, Animated } from "react-native";
import styles from './Switch.module';


const SwitchComponent = ({ titulo, enable, handleChange }) => {
    return (
        <View>
            <View style={styles.containerSwitch}>
                <Text style={styles.textSwitch}> {titulo} </Text>
                <SafeAreaView style={styles.switch}>
                    <Switch
                        trackColor={{ false: '#ececec', true: '#af153f' }}
                        thumbColor={enable ? '#ffff' : '#ffff'}
                        ios_backgroundColor="#ececec"
                        onValueChange={handleChange}
                        value={enable}
                    />
                </SafeAreaView>
            </View>
        </View>
    );
};


export default SwitchComponent;
