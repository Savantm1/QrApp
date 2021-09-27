import React, { useState } from 'react';
import styles from './Profile.styles.js';
import {TouchableOpacity,ScrollView, Text, View, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileData } from '../../Redux/AuthReducer.js';
import { getUniqueId } from 'react-native-device-info';

const Profile = ({navigation}) => {


    const data = useSelector(state=>state.auth.personData);

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
        </View>
    </ScrollView>
    
  );
};

export default Profile;
