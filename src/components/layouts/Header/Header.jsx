import React, { useState } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View, Modal, Pressable } from "react-native";
import guruchat from '../../../assets/imgs/guruchat.jpeg';
import chefhat from '../../../assets/imgs/chefhat.png';
import styles from './Header.module';
import Icon from 'react-native-vector-icons/Entypo';
import IconArt from 'react-native-vector-icons/AntDesign';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from "../../hooks/useAuth";

const Header = ({ user }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const { auth, logout } = useAuth();
    const navigation = useNavigation();

    const currentRouteIndex = useNavigationState((state) => {
        return state?.index ?? 0;
    });

    const currentRoute = useNavigationState((state) => {

        if (state && state.routes && state.routes.length > 0) {
            return state.routes[state.index].name;
        }
        return null;
    });

    const isCurrentRoute = (routeName) => currentRoute === routeName;

    const handleBackPress = () => {
        if (currentRouteIndex > 0) {
            navigation.goBack();
        }
    };

    const handleClearStorage = async () => {
        try {
            await AsyncStorage.removeItem('messages');
            setModalVisible(false);
            console.log('Mensagens excluídas do AsyncStorage');
        } catch (error) {
            console.error('Erro ao limpar o AsyncStorage:', error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            {currentRouteIndex > 0 ? (
                <TouchableOpacity style={styles.maisText} onPress={handleBackPress}>
                    <IconArt name="left" size={30} color="#af153f" />
                </TouchableOpacity>
            ) : (
                <View style={{ width: 30 }} />
            )}

            <View style={styles.textArea}>
                {
                    isCurrentRoute('Chat') ? (
                        <>
                            <Image style={styles.perfilImage} source={guruchat} />
                            <Text style={styles.perfilText}>Guru</Text>
                        </>
                    ) : isCurrentRoute('Home') ?
                        (
                            <>
                                <Image style={styles.perfilImage} source={chefhat} />
                                <Text style={styles.perfilUserText}>Olá, {auth.nome}</Text>
                            </>
                        ) : (
                            <>
                                <Image style={styles.perfilImage} source={chefhat} />
                            </>
                        )
                }


            </View>
            {
                isCurrentRoute('Chat') ? (
                    <TouchableOpacity style={styles.maisText} onPress={() => setModalVisible(true)}>
                        <Icon name="dots-three-vertical" size={25} color="#af153f" />
                    </TouchableOpacity>
                ) :
                    (
                        <View>
                            
                        </View>
                    ) 
            }
            <Modal
                transparent={true}
                visible={modalVisible}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Opções</Text>

                        <Pressable
                            style={styles.modalButton}
                            onPress={handleClearStorage}
                        >
                            <Text style={styles.modalButtonText}>Excluir Mensagens</Text>
                        </Pressable>

                        <Pressable
                            style={styles.modalCancelButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.modalCancelText}>Cancelar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

export default Header;
