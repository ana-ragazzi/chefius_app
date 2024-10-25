import { Image, Text, View } from "react-native";
import userchat from '../../../assets/imgs/userchat.jpeg';
import styles from './Message.module'

const Message = ({type, text}) => {
    return (
        <View style={styles.messageContainer}>
            <Text style={styles.textMessage}>{text}</Text>
            <Image style={styles.perfilImage} source={userchat}/>
        </View>
    )
};

export default Message;