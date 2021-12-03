import { Alert, Linking, Platform } from "react-native";
import {SERVER_ADRESS, HASH_KEY,INSTALLER_ANDROID,INSTALLER_IOS} from "@env";
import { getProfileData } from "./Redux/AuthReducer";

const API = {
    async getPersonName(id) {
        try {   
            let response = await fetch(`${SERVER_ADRESS}/findname`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    uid: id,
                    verifyHash: HASH_KEY
                }),
            });
            let personName = await response.json();
            return personName.employeeName;
        } catch(error) {
            let textError = error.toString();
            if(textError.indexOf("SyntaxError: JSON Parse error: Unrecognized token '<'") > -1) { 
              textError = "Ошибка интернет-соединения. Повторите попытку."
            };
            Alert.alert("Ошибка",textError);
        }
       
    },

       async getHistoryData (data) {

        try {
            let response = await fetch(`${SERVER_ADRESS}/period`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    ...data,
                    verifyHash: HASH_KEY
                }),
            });
            let historyData = await response.json();
            return historyData;
        } catch(error) {
            let textError = error.toString();
            if(textError.indexOf("SyntaxError: JSON Parse error: Unrecognized token '<'") > -1) { 
              textError = "Ошибка интернет-соединения. Повторите попытку."
            };
            Alert.alert("Ошибка",textError);
        }
        },
       async getHistoryDayData (data) {
          
        try {
            let response = await fetch(`${SERVER_ADRESS}/forday`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    ...data,
                    verifyHash: HASH_KEY
                }),
            });
            let historyDayData = await response.json();
           
            return historyDayData;
        } catch(error) {
            let textError = error.toString();
            if(textError.indexOf("SyntaxError: JSON Parse error: Unrecognized token '<'") > -1) { 
              textError = "Ошибка интернет-соединения. Повторите попытку."
            };
            Alert.alert("Ошибка",textError);
        }
        },

        async getPersonData (data) {
            try {
                let response = await fetch(`${SERVER_ADRESS}/testverify`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify({
                        ...data,
                        verifyHash: HASH_KEY,
                        version:"1"
                    }),
                });
                let ProfileData = await response.json();
                console.log("verify",ProfileData)

                if(ProfileData.error){

                    //ANDROID
                    if(Platform.OS === "android"){
                    Alert.alert(
                        ProfileData.error.title.toString(),
                        ProfileData.error.text.toString(),
                        [
                            {
                                text: "Скачать",
                                onPress: () => Linking.openURL("https://qr.st-ing.com/public/apk/STI-QR-installer.apk"), 
                                style: "cancel",
                            },
                            {
                                text: "Закрыть",
                                style: "cancel",
                            },
                        ]
                        );
                
                
                }else{

                    //IOS
                    Alert.alert(
                        "Вышло обновление",
                        "Зайдите в приложение TestFlight и обновите 'STI QR'",
                        [
                            // {
                            //     text: "Скачать",
                            //     onPress: () => Linking.openURL("https://www.google.com"), 
                            //     style: "cancel",
                            // },
                            {
                                text: "Закрыть",
                                style: "cancel",
                            },
                        ]
                        );
                }

            }
                return ProfileData;
            } catch (error) {
                let textError = error.toString();
                if(textError.indexOf("SyntaxError: JSON Parse error: Unrecognized token '<'") > -1) { 
                  textError = "Ошибка интернет-соединения. Повторите попытку."
                };
                Alert.alert("Ошибка",textError);
            }
        },

        async getHoursPerMonth(data) {
            try {
                let response = await fetch(`${SERVER_ADRESS}/refreshprofile`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify({
                        ...data,
                        verifyHash:HASH_KEY
                    }),
                });
                let Data = await response.json();
                return Data;
            } catch (error) {
                let textError = error.toString();
                if(textError.indexOf("SyntaxError: JSON Parse error: Unrecognized token '<'") > -1) { 
                  textError = "Ошибка соединения c сервером. Повторите попытку."
                };
                Alert.alert("Ошибка",textError);
            }
        },

}

export default API;