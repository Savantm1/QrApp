import React, { useRef, useState } from 'react';
import styles from './Profile.styles.js';
import { TouchableOpacity, ScrollView, Text, View, Image, ActivityIndicator, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getHoursPerMonth, getProfileData } from '../../Redux/AuthReducer.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MonthSelector from '../../components/MonthSelector/MonthSelector.js';
import { Picker as SelectPicker } from '@react-native-picker/picker';
import moment from 'moment';
import 'moment/locale/ru';



const Profile = ({ navigation }) => {

    const dispatch = useDispatch();
    // относится к селекту
    let currentMonth = moment(new Date()).format("MMMM");
    const [selectedMonth, setSelectedMonth] = useState(currentMonth);

    // IOS
    const [modalVisible, setModalVisible] = useState(false);

    const pickerRef = useRef();
    function open() { 
        if(Platform.OS ==='android'){
            pickerRef.current.focus();
        } else {
            setModalVisible(!modalVisible);
        }
    }

    function close() {
        pickerRef.current.blur();
    }

    let ChangeValueMonth = async(itemValue, itemIndex) => {
            await setSelectedMonth(itemValue);
            sendObj.month = itemValue;
            dispatch(getHoursPerMonth(sendObj));
    }
    // ======================
    const data = useSelector(state => state.auth.personData);
    let sendObj = {
        month: selectedMonth,
        value: data.totalTime,
        uid: data.uid
    }


    const loading = useSelector(state => state.auth.loading);

    if(loading) {
        return (
            <View style={styles.container_center}>
                <ActivityIndicator size="large" color="#5DB075" />
            </View>
        )
    } else {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.refresh_container}>
                        <TouchableOpacity onPress={() => dispatch(getHoursPerMonth(sendObj))}>
                            <MaterialCommunityIcons name="refresh" color={"#5DB075"} size={40} />
                        </TouchableOpacity>
                    </View>
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
                        <TouchableOpacity onPress={() => open()}>
                            <View style={styles.row}>
                                <View style={styles.row_selector}>
                                    <Text style={styles.row_title}>Отработано за </Text>
                                    <View style={styles.select}>
                                        <Text style={styles.select_text} >{selectedMonth}
                                        </Text>
                                        <View style={styles.select_container}>
                                            <SelectPicker
                                                ref={pickerRef}
                                                selectedValue={selectedMonth}
                                                style={styles.select_container}
                                                dropdownIcon={false}
                                                onValueChange={(itemValue, itemIndex)=>ChangeValueMonth(itemValue, itemIndex)}
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
                                    <Text style={styles.row_title}>:</Text>
                                </View>

                                <Text style={styles.row_description}>{data.totalTime}</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.row} >
                            <Text style={styles.row_title}>Статус:</Text>
                            <Text style={styles.row_description}>{data.status}</Text>
                        </View>
                    </View>
                    {/* селект с месяцами */}
                    <MonthSelector 
                        selectedMonth={selectedMonth} 
                        modalVisible={modalVisible}
                        setModalVisible={setModalVisible}
                        ChangeValueMonth={ChangeValueMonth}
                    />
                </View>
            </ScrollView>
        );
    }
};

export default Profile;


