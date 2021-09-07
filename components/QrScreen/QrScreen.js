'use strict';
import React, { Component, useState} from 'react';
import { Text } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SuccessPage from '../SuccessPage/SuccessPage';
import styles from "./QrScreen.styles"
import { useSelector } from 'react-redux';

const QrScreen = ({navigation}) => {

    const uid = useSelector(state => state.auth.uid)
    let onSuccess = async (e) => {
        try {
            let link = `${e.data}?uid=${uid}`;
            console.log("onFetch",link)
            let response = await fetch(link,{
                method: 'GET'
            })
            let personData = await response.json();
            await navigation.navigate({
                name: "SuccessPage",
                params: {
                    ...personData
                }
            });

        } catch (error) {
            console.log("error",error)
        }
    };


    return (
      <QRCodeScanner
        reactivate={true}
        reactivateTimeout={3000}
        flashMode={RNCamera.Constants.FlashMode.auto}
        onRead={onSuccess}
        topContent={
          <Text style={styles.centerText}>
              Наведите устройство на QR-код

          </Text>
        }
        // bottomContent={
        //   <TouchableOpacity style={styles.buttonTouchable}>
        //     <Text style={styles.buttonText}>Сделать снимок</Text>
        //   </TouchableOpacity>
        // }
      /> 
    );
}







  const QRStack = createNativeStackNavigator();

  function QRStackScreen() {
    return (
      <QRStack.Navigator screenOptions={{headerShown:false}} >
        <QRStack.Screen name="QrScreen" component={QrScreen} />
        <QRStack.Screen name="SuccessPage" component={SuccessPage} />
      </QRStack.Navigator>
    );
  }

export default QRStackScreen;
