'use strict';
import React, { Component, useState} from 'react';
import { ActivityIndicator, Alert, Text, View, Linking, Platform } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SuccessPage from '../SuccessPage/SuccessPage';
import styles from "./QrScreen.styles"
import { useDispatch, useSelector } from 'react-redux';
import { ChangeLoading } from '../../Redux/QRScreenReducer';


const QrScreen = (props) => {
  const uid = useSelector(state => state.auth.personData.uid);
  const EmployeeName = useSelector(state => state.auth.personData.employeeName);
  let dispatch = useDispatch();

  let onSuccess = async (e) => {
        try {
           dispatch(ChangeLoading(true));
            let link = `${e.data}&uid=${uid}&version=1`;
            let response = await fetch(link,{
                method: 'GET'
            })
            let personData = await response.json();
            console.log(personData);
            if(personData.status ==="success"){
              dispatch(ChangeLoading(false));
              props.navigation.navigate({
                name: "SuccessPage",
                params: {
                  ...personData
                }
              });
            } 
            else if(personData.status ==="version"){

              dispatch(ChangeLoading(false));
              if(Platform.OS === "android"){

                //ANDROID
                Alert.alert(
                  personData.title,
                  personData.text,
                  [
                      {
                          text: "Скачать",
                          onPress: () =>{
                            props.scanner.reactivate();
                            Linking.openURL("https://qr.st-ing.com/public/apk/STI-QR-installer.apk");
                          } , 
                          style: "cancel",
                      },
                  ]
                  )
              } else {

                // APPLE
                 Alert.alert(
                  "Вышло обновление",
                  "Зайдите в приложение TestFlight и обновите 'STI QR'",
                  [
                      {
                          text: "Закрыть",
                          onPress: () =>{
                            props.scanner.reactivate();
                            // Linking.openURL("https://qr.st-ing.com/public/apk/STI-QR-installer.apk");
                          } , 
                          style: "cancel",
                      },
                  ]
                  )
              }
            } else {
              dispatch(ChangeLoading(false));
              Alert.alert(personData.title, personData.text,
              [{text:"Закрыть",
                onPress:() => {props.scanner.reactivate()},
                style: "cancel",
            }]);
            }

        } catch (error) {
            dispatch(ChangeLoading(false));
            let textError = error.toString();
            console.log(error);
            if(textError.indexOf("SyntaxError: JSON Parse error: Unrecognized token '<'") > -1) { 
              textError = "Ошибка соединения c сервером. Повторите попытку."
            };
            Alert.alert("Ошибка", textError,
            [{text:"OK",
              onPress:() => {props.scanner.reactivate()}
          }]);
        }
    };
    const loading = useSelector(state => state.qrscreen.loading);



    return (
      <QRCodeScanner
        cameraStyle={styles.camera}
        containerStyle={styles.container}
        topViewStyle={styles.topViewStyle}
        bottomViewStyle={styles.bottomViewStyle}
        cameraContainerStyle={styles.camera_container}
        fadeIn={false}
        ref={(node) => { props.setScanner(node) }}
        flashMode={RNCamera.Constants.FlashMode.auto}
        onRead={onSuccess}
        topContent={
          <>
            <Text style={styles.text}>
              {EmployeeName}
            </Text>
          </>
        }
        bottomContent={
          loading === false  ?
            (<Text style={styles.text}>
              Наведите устройство на QR-код
            </Text>) :
            (<View style={{display:"flex",alignItems:"center",justifyContent:"center",flex:1}}>
            <ActivityIndicator size="large" color="#5DB075" />
            <Text style={styles.text}>
              Отправляем данные...
            </Text>
            </View>)
        }
      /> 
    );
}

  const QRStack = createNativeStackNavigator();
  function QRStackScreen() {
    const [scanner, setScanner] = useState();
      return (
        <QRStack.Navigator screenOptions={{headerShown:false}} >
          <QRStack.Screen name="QrScreen">
            {props => <QrScreen {...props} scanner = {scanner} setScanner={setScanner} />}
          </QRStack.Screen>
          <QRStack.Screen name="SuccessPage" options={{tabBarStyle: { display: 'none' }}} >
            {props => <SuccessPage {...props} scanner = {scanner} setScanner={setScanner}  />}
          </QRStack.Screen>
        </QRStack.Navigator>
      );
  }

export default QRStackScreen;
