import React from 'react'
import { View,Text,TouchableOpacity, FlatList,StyleSheet,StatusBar } from 'react-native';
import styles from './HistoryList.styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { getDayHistory } from '../../Redux/HistoryReducer';
import { useDispatch, useSelector } from 'react-redux';


const HistoryList = (props) => {
    
    const dispatch = useDispatch();
    const uid = useSelector(state => state.auth.personData.uid)
    const  openModalDay = async (date,uid,time) => {
        const sendObj = {
            date:date,
            value:time,
            unique:uid
        }
        await dispatch(getDayHistory(sendObj));
        props.setModalVisible(!props.ModalVisible);
    }

    const Item = ({ date,time,date_format}) => (
        <TouchableOpacity style={styles.item} date_format={date_format} onPress={()=>{openModalDay(date_format,uid,time) } }>
            <MaterialCommunityIcons name="circle" style={styles.icon} size={10}  />
            <Text style={styles.text}>{date}</Text>
            <Text style={styles.time}>{time}</Text>
        </TouchableOpacity>         
    );

    const renderItem = ({ item }) => {       
        return (
          <Item
            time={item.time}
            date={item.date}
            date_format={item.date_format}
          />
        );
    }

    return (
        <View style={styles.date_container}>
            <FlatList
                data={props.data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default HistoryList;
