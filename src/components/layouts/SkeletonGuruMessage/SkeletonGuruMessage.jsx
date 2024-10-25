import { Image, Text, View } from "react-native";
import guruchat from '../../../assets/imgs/guruchat.jpeg';
import styles from './SkeletonGuruMessage.module'

const SkeletonGuruMessage = () => {
    return (
        <View style={styles.messageContainer}>
            <Image style={styles.perfilImage} source={guruchat}/>
            <Text style={styles.textMessage}>...</Text>
        </View>
    )
};

export default SkeletonGuruMessage;