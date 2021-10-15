'use strict';
import React, { Component, useState} from 'react';
import { Alert, Text } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SuccessPage from '../SuccessPage/SuccessPage';
import styles from "./QrScreen.styles"
import { useSelector } from 'react-redux';

const QrScreen = ({navigation}) => {

    const uid = useSelector(state => state.auth.personData.uid);
    const EmployeeName = useSelector(state => state.auth.personData.employeeName);
    let onSuccess = async (e) => {
        try {
            let link = `${e.data}?uid=${uid}`;
            let response = await fetch(link,{
                method: 'GET'
            })
            let personData = await response.json();
            await navigation.navigate({
                name: "SuccessPage",
                params: {
                    ...personData,
                }
            });

        } catch (error) {
            Alert.alert("Ошибка", error.toString());
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
              {EmployeeName}
          </Text>
        }
        bottomContent={
            <Text style={styles.bottomText}>
                Наведите устройство на QR-код
            </Text>
        }
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
