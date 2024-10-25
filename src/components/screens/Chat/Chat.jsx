import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Text, TextInput, View, ScrollView, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './Chat.module';
import Message from '../../layouts/Message/Message';
import GuruMessage from '../../layouts/GuruMessage/GuruMessage';
import SkeletonGuruMessage from '../../layouts/SkeletonGuruMessage/SkeletonGuruMessage';
import SuggestionsScroll from '../../layouts/Suggestions/Suggestions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../../utils/gptapi';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const scrollViewRef = useRef(null); // Referência para o ScrollView

    const loadMessages = async () => {
        try {
            const savedMessages = await AsyncStorage.getItem('messages');
            if (savedMessages) {
                setMessages(JSON.parse(savedMessages));
            }
        } catch (error) {
            console.error('Erro ao carregar mensagens:', error);
        }
    };

    const saveMessages = async (messagesToSave) => {
        try {
            await AsyncStorage.setItem('messages', JSON.stringify(messagesToSave));
        } catch (error) {
            console.error('Erro ao salvar mensagens:', error);
        }
    };

    useEffect(() => {
        loadMessages();
    }, []);

    useEffect(() => {
        saveMessages(messages);
    }, [messages]);

    // Adicionar useEffect para rolar o scroll para o final quando as mensagens mudarem
    useEffect(() => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollToEnd({ animated: true });
        }
    }, [messages]);

    const handleOnChange = (newMessage) => {
        setCurrentMessage(newMessage);
    };

    const handleSubmit = async () => {
        if (currentMessage.trim()) {
            const userMessage = { type: 'user', text: currentMessage };
            setMessages(prevMessages => [...prevMessages, userMessage]);
            setCurrentMessage('');

            const skeletonMessage = { type: 'skeleton' };
            setMessages(prevMessages => [...prevMessages, skeletonMessage]);

            setLoading(true);

            try {
                const response = await api.post('/chat/completions', {
                    model: 'gpt-3.5-turbo',
                    messages: [{ role: 'user', content: `Você é a Guru, uma assistente virtual que fornece receitas com base nas necessidades nutricionais de cada usuário. Você tambem responde questões sobre saude alimentar e gastronomia, nada além disso. Pergunta: ${userMessage.text}` }],
                });

                const guruMessage = response.data.choices[0].message.content;
                setMessages(prevMessages => [
                    ...prevMessages.slice(0, -1), // Remove o skeleton
                    { type: 'guru', text: guruMessage }
                ]);
            } catch (error) {
                console.error('Erro ao chamar a API:', error);
            } finally {
                setLoading(false);
            }
        }
    };

    const handleSuggestionPress = (suggestion) => {
        setCurrentMessage(suggestion);
        handleSubmit();
    };

    const renderedMessages = useMemo(() => (
        messages.map((message, index) => (
            message.type === 'user' ? (
                <Message key={index} text={message.text} />
            ) : message.type === 'skeleton' ? (
                <SkeletonGuruMessage key={index} />
            ) : (
                <GuruMessage key={index} text={message.text} />
            )
        ))
    ), [messages]);

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{flex: 1}}
            keyboardVerticalOffset={150}            
            >
            <ScrollView vertical showsVerticalScrollIndicator={false}
                ref={scrollViewRef} // Referência ao ScrollView
                style={styles.messageContainer}
                contentContainerStyle={styles.contentContainer}
                keyboardShouldPersistTaps='handled'
                onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })} // Garantir que o scroll vá para o final
            >
                {renderedMessages}
            </ScrollView>

            <SuggestionsScroll onSuggestionPress={handleSuggestionPress} />
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Faça a sua pergunta:'
                        value={currentMessage}
                        onChangeText={handleOnChange} 
                    />
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={handleSubmit}
                    >
                        <Icon name='send' size={24} color="#af153f" />
                    </TouchableOpacity>
                </View>
            </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default Chat;
