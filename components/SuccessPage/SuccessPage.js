import { View,Text,TouchableOpacity } from 'react-native';
import React from 'react';
import styles from "./SuccessPage.styles";

const SuccessPage = ({navigation,route}) => {

    return (
        <View style={styles.container}>
            <View style={styles.block}>
                <Text style={styles.title}>{route.params.title}</Text>
                <Text style={styles.text}>Объект:</Text>
                <Text style={styles.text}>{route.params.objectName}</Text>
                <Text style={styles.text}>Время отметки:</Text>
                <Text style={styles.text}>{route.params.datetime}</Text>
                <Text style={styles.text}>ФИО:</Text>
                <Text style={styles.text}>{route.params.employeeName}</Text>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {navigation.navigate("QrScreen") }}
                >
                    <Text style={{color:"white"}}  >Закрыть</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SuccessPage
