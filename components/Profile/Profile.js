import React, { useState } from 'react';
import styles from './Profile.styles.js';
import {TouchableOpacity,ScrollView, Text, View, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileData } from '../../Redux/AuthReducer.js';
import { getUniqueId } from 'react-native-device-info';

const Profile = ({navigation}) => {

    // let DeviceUniqueId = getUniqueId();
    // const uid = useSelector(state => state.auth.personData.uid)
    // let uniqueObject = {
    //   uid: uid,
    //   phoneCode: DeviceUniqueId
    // }

    // const dispatch = useDispatch();
    // dispatch(getProfileData(uniqueObject));
    const data = useSelector(state=>state.auth.personData);
    console.log("profile", data)
  return (
      <ScrollView>
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={{
                uri: "https://cdn0.iconfinder.com/data/icons/different-characters/1200/Untitled-1-17-512.png"
                }}
            />
            <Text style={styles.title}>{data.employeeName}</Text>
            {/* <Text style={styles.subtitle}>Должность: Рабочий</Text> */}
                <View style={styles.info_block}>
                    <View style={styles.row}>
                        <Text style={styles.row_title}>Объект:</Text>
                        <Text style={styles.row_description}>{data.objectName}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.row_title}>UID:</Text>
                        <Text style={styles.row_description}>#{data.uid}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.row_title}>Бригадир:</Text>
                        <Text style={styles.row_description}>{data.foremanName}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.row_title}>Отработано в этом месяце:</Text>
                        <Text style={styles.row_description}>{data.totalTime}</Text>
                    </View>
                </View>
            
            {/* <TouchableOpacity
                style={styles.btn}
                onPress={()=> console.log(data)}
                >
                <Text style={{color:"white"}} >get data</Text>
            </TouchableOpacity> */}
            {/* <TouchableOpacity
                style={styles.btn}
                >
                <Text style={{color:"white"}} >Сменить бригадира</Text>
            </TouchableOpacity> */}
            </View>
      </ScrollView>
    
  );
};

export default Profile;
