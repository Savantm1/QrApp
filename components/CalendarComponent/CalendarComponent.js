import React, { useState } from 'react'
import { View,Modal,Pressable, Text, Button, TouchableOpacity } from 'react-native';
import styles from './CalendarComponent.styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Calendar from "react-native-calendar-range-picker";
import { useDispatch, useSelector } from 'react-redux';
import { getHistory } from '../../Redux/HistoryReducer';

const CalendarComponent = (props) => {

    const CUSTOM_LOCALE = {
        monthNames: [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
        ],
        dayNames: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        today: 'Сегодня',
        year: '', // letter behind year number -> 2020{year}
      }

    const dispatch = useDispatch();
    const uid = useSelector(state=> state.auth.personData.uid)



    const monthData = {
        unique: uid,
        start_date:"" ,
        end_date: ""
    }

    const sendSelectedDates = () => {
        props.setModalVisible(!props.modalVisible);
        dispatch(getHistory(monthData)); 
    }
     
    return (

        <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          // Alert.alert("Modal has been closed.");
          props.setModalVisible(!props.modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.close_container}>
              <Text style={styles.title}> Выберите период</Text>
              <Pressable style={styles.button_close}
                onPress={() => props.setModalVisible(!props.modalVisible)}
              >
                <MaterialCommunityIcons name="close" size={30} />
              </Pressable>
            </View>
            <View style={styles.calendar_container}>
            <Calendar
                locale={CUSTOM_LOCALE}
                initialNumToRender={2}
                onChange={({ startDate, endDate }) =>{ monthData.start_date = startDate;monthData.end_date = endDate;}}
                style={{
                selectedBetweenDayBackgroundTextColor: '#b8cfbe' ,
                selectedDayBackgroundColor:"#5DB075"
                }}
            />
            </View>
        <TouchableOpacity style={styles.send_btn} onPress={()=>sendSelectedDates()}>
            <Text style={styles.send_btn_text}>Выбрать</Text>
        </TouchableOpacity>
          </View>
        </View>
      </Modal>


    )
}


export default CalendarComponent