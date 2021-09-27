import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,View,Image
} from 'react-native';
import styles from "./LoadingPage.styles";


const LoadingPage = ({navigation}) => {
  return(
    <>
    <View style={styles.container}>
        <Image style={styles.gif}source={require('./../../assets/PreloadGif.gif')}/>
        <Text>Загружаем данные...</Text>
    </View>
    </>
  )
};

export default LoadingPage;