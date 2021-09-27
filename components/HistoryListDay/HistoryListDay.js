import React from 'react'
import { View,Text,TouchableOpacity, FlatList,StyleSheet,StatusBar } from 'react-native';
import styles from './HistoryListDay.styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { getDayHistory } from '../../Redux/HistoryReducer';

const HistoryListDay = (props) => {

    const data = useSelector(state => state.history.historyDayData);

    const Item = ({ type,time,}) => (
        <View style={styles.item}  >
            <MaterialCommunityIcons name="circle" style={styles.icon} size={10}  />
            <Text style={styles.text}>{type}</Text>
            <Text style={styles.time}>{time}</Text>
        </View>         
    );

    const renderItem = ({ item }) => {       
        return (
          <Item
            time={item.time}
            type={item.type}
          />
        );
    }

    return (
        <View style={styles.date_container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default HistoryListDay
