import moment from 'moment';
import 'moment/locale/ru';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useState, useCallback } from 'react';
import { View, Modal, Pressable } from 'react-native';
import styles from './MonthSelector.style';
import {Picker as SelectPicker} from '@react-native-picker/picker';
import { useRef } from 'react';


const MonthSelector = (props) => {

    const pickerRef = useRef();

    return(

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
                <Pressable style={styles.button_close}
                    onPress={() => props.setModalVisible(!props.modalVisible)}
                >
                    <MaterialCommunityIcons name="close" size={30} />
                </Pressable>
                </View>
                <SelectPicker
                    ref={pickerRef}
                    selectedValue={props.selectedMonth}
                    style={styles.select_container}
                    dropdownIcon={false}
                    onValueChange={(itemValue,itemIndex)=>props.ChangeValueMonth(itemValue,itemIndex)}
                >
                    <SelectPicker.Item style={styles.item} label="Январь" value="Январь" />
                    <SelectPicker.Item label="Февраль" value="Февраль" />
                    <SelectPicker.Item label="Март" value="Март" />
                    <SelectPicker.Item label="Апрель" value="Апрель" />
                    <SelectPicker.Item label="Май" value="Май" />
                    <SelectPicker.Item label="Июнь" value="Июнь" />
                    <SelectPicker.Item label="Июль" value="Июль" />
                    <SelectPicker.Item label="Август" value="Август" />
                    <SelectPicker.Item label="Сентябрь" value="Сентябрь" />
                    <SelectPicker.Item label="Октябрь" value="Октябрь" />
                    <SelectPicker.Item label="Ноябрь" value="Ноябрь" />
                    <SelectPicker.Item label="Декабрь" value="Декабрь" />
                </SelectPicker>
            </View>
            </View>
        </Modal>
    )



}

export default MonthSelector;

