import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,View,Image
} from 'react-native';
import styles from "./ErrorPage.styles";
import RNRestart from 'react-native-restart'; 


const ErrorPage = (props) => {
  let ErrorContent;
      let errorTitle = useSelector(state => state.auth.errorTitle);
      let errorMessage = useSelector(state => state.auth.errorMessage);
  // if(route){
  //   let message = route.params.message ? route.params.message : "Ошибка"
  //   let title = route.params.title ? route.params.title : ""
  if(errorTitle !=="Доступ запрещен."){

    ErrorContent = () =>{
      return(
            <>
              <Text style={styles.title}>{errorTitle}</Text>
              <Image style={styles.image} source={require("../../assets/error.png")}/>
              <Text style={styles.text}>{errorMessage}</Text>
              <TouchableOpacity
              style={styles.btn}
              onPress={() => { props.removeFew()
                               RNRestart.Restart()
                              }
              } 
              >
              <Text style={{color:"white"}} >Попробовать еще раз</Text>
              </TouchableOpacity>
            </>
      )
    }


  }else {

    ErrorContent = () => {
      return(
        <>
              <Text style={styles.title}>{errorTitle}</Text>
              <Image style={styles.image} source={require("../../assets/error.png")}/>
              <Text style={styles.text}> {errorMessage}</Text>
        </>
      )
    }
  }

    return(
      <>
          <View style={styles.container}>
            {ErrorContent()}
          </View>
      </>
    )
};

export default ErrorPage;