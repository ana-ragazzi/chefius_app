import { Image, Text, View } from "react-native";
import guruchat from '../../../assets/imgs/guruchat.jpeg';
import styles from './GuruMessage.module'

const GuruMessage = ({ text }) => {
    return (
        <View style={styles.messageContainer}>
            <Image style={styles.perfilImage} source={guruchat} />
            <Text style={styles.textMessage}>{text}</Text>
        </View>
    )
};

export default GuruMessage;