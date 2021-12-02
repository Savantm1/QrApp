import React from 'react';
import { useSelector } from 'react-redux';
import {View, ActivityIndicator} from "react-native";
import NetworkVerifyStatusComponent from "../NetworkVerifyStatusComponent/NetworkVerifyStatusComponent";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";

const styles = {
    container_center:{ 
        paddingTop:30, 
        alignItems:"center", 
        flexDirection: 'column',
        height:"100%",
        justifyContent:"center",
        backgroundColor:"white"
    }
}

const PersonStatusVerifyComponent = (props) => {

    const PersonStatus = useSelector(state => state.auth.personStatus);
    const loading = useSelector(state => state.auth.loading);

    if(loading) {
        return (
            <View style={styles.container_center}
            >
                <ActivityIndicator size="large"  color="#5DB075" />
            </View>
        )
    } else {
            if(PersonStatus == true){
                return <NetworkVerifyStatusComponent/>
            } else {
                
                return <ErrorPage removeFew={props.removeFew}/>
            }
        
    }
}

export default PersonStatusVerifyComponent
