import React, { useState } from 'react';
import styles from './Authentification.styles.js';
import {TouchableOpacity, Text, View, TextInput, Alert} from 'react-native';
import { useDispatch } from 'react-redux';
import { Authorization, getProfileData } from '../../Redux/AuthReducer'
import API from '../../API.js';
import { getUniqueId } from 'react-native-device-info';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ErrorPage from '../ErrorPage/ErrorPage.js';


const Authentification = ({navigation}) => {

  const [userId,setUserId] = React.useState();
  const [repeatUserId,setRepeatUserId] = React.useState();
  const [personName,setPersonName] = React.useState("");
  const dispatch = useDispatch();

  const clearInputs =  () => {
     setUserId("");
     setRepeatUserId("");
     setPersonName("");
  }

  const getName = async (value) => {
    let stringVal = value.toString()
    if(stringVal.length === 5) {
      let  name =  await API.getPersonName(value);

      setPersonName(name);
    }
  }
  
  const SendData = async() => {
    if(userId === repeatUserId){
      const DeviceUniqueId =  getUniqueId();
      let uniqueObject = {
        uid: userId,
        phoneCode: DeviceUniqueId
      }
      let result = await API.getPersonData(uniqueObject);
      dispatch(getProfileData(uniqueObject));
      if(result.message){
        clearInputs();
        navigation.navigate({
          name:"Error",
          params: {
            message:result.message,
            title:result.title
          }
        })

      } else {
        dispatch(Authorization({result,userId}));
      }
    }else {
      clearInputs();
      Alert.alert("Некорректный ввод","Ввёденные данные не совпадают. Повторите еще раз.")
    }
  };




  return (
    <View style={styles.container}>
      <Text style={styles.title}>Вход</Text>
      <Text style={styles.personName} >{personName}</Text>
      <TextInput
        style={styles.input}
        placeholder="UID"
        placeholderTextColor="#777"
        keyboardType="numeric"
        maxLength={5}
        onChangeText={(evt)=>{ setUserId(evt);getName(evt)}}
        value={userId}
      />
      <TextInput
        style={styles.input}
        placeholder="Повторите UID"
        placeholderTextColor="#777"
        keyboardType="numeric"
        maxLength={5}
        onChangeText={(evt)=> {setRepeatUserId(evt)}}
        value={repeatUserId}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => SendData()} 
        >
        <Text style={{color:"white"}} >Авторизоваться</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={styles.btn}
        onPress={() => console.log("state",state)} 
        >
        <Text style={{color:"white"}} >Get data</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const AuthentificationStack = createNativeStackNavigator();

function AuthentificationStackScreen () {
  return (
    <AuthentificationStack.Navigator screenOptions={{headerShown:false}}>
      <AuthentificationStack.Screen name = "Authentification" component={Authentification}/>
      <AuthentificationStack.Screen name = "Error" component={ErrorPage}/>
    </AuthentificationStack.Navigator>
  )
}

export default AuthentificationStackScreen;
