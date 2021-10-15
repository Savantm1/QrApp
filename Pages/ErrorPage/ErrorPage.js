import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,View,Image
} from 'react-native';
import styles from "./ErrorPage.styles";


const ErrorPage = ({navigation,route}) => {
    let message = route.params.message ? route.params.message : "Ошибка"
    let title = route.params.title ? route.params.title : ""
  return(
    <>
        <View style={styles.container}>
            <Image style={styles.image} source={require("../../assets/error.png")}/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{message}</Text>
            <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("Authentification")} 
            >
            <Text style={{color:"white"}} >Попробовать еще раз</Text>
            </TouchableOpacity>
        </View>
    </>
  )
};

export default ErrorPage;