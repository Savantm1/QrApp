import React from 'react'
import { Image, Text, View } from 'react-native';
import { styles } from './DisconnectPage.styles';

const DisconnectPage = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('./../../assets/free-icon-offline.png')}/>
            <Text style={styles.text}>Пожалуйста, проверьте интернет соединение</Text>
        </View>
    )
}

export default DisconnectPage;
