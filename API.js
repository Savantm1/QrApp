import { Alert } from "react-native";
import {SERVER_ADRESS, HASH_KEY} from "@env"
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
        } catch(e) {
            Alert.alert(Ошибка,e.toString());
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
        } catch(e) {
            Alert.alert("Ошибка",error.toString());
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
        } catch(e) {
            Alert.alert("Ошибка",error.toString());
        }
        },

        async getPersonData (data) {
            try {
                let response = await fetch(`${SERVER_ADRESS}/verify`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify({
                        ...data,
                        verifyHash: HASH_KEY
                    }),
                });
                let ProfileData = await response.json();
                return ProfileData;
            } catch (error) {
                Alert.alert("Ошибка",error.toString());
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
                Alert.alert(Ошибка,error.toString());
            }
        },

}

export default API;