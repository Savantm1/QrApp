import React, { useState } from 'react'
import { View,Text,TouchableOpacity, ActivityIndicator} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import HistoryList from '../../components/HistoryList/HistoryList';
import LegendModal from '../../components/LegendModal/LegendModal';
import ModalComponent from '../../components/ModalComponent/ModalComponent';
import CalendarComponent from "../../components/CalendarComponent/CalendarComponent";
import styles from "./HistoryPage.styles";


 const HistoryPage = (props) => {

    const totalTime = useSelector(state=> state.history.totalTime);
    
    console.log("totalTime",totalTime)
    const [modalVisible, setModalVisible] = useState(false);
    const [modalCalendarVisible, setModalCalendarVisible] = useState(false);
    const [modalLegendVisible, setModalLegendVisible] = useState(false);

    const data = useSelector(state=>state.history.historyData);
    const loading = useSelector(state => state.history.loading);

    let content = totalTime ? 
    <>
     <Text style={styles.title}> В выбранный период Вы отработали:</Text>
     <Text style={styles.hours}> {totalTime} </Text>
    </> :
    <>
     <Text style={styles.title}> История прохода на объект</Text>
    </>
    if(loading){
        return (
        <View style={styles.container_center}>
            <ActivityIndicator size="large" color="#5DB075" />
        </View>
        )
    }else{
        return (
            <View  style={styles.container}>
                <CalendarComponent modalVisible={modalCalendarVisible} setModalVisible={setModalCalendarVisible}/>
                <ModalComponent modalVisible={modalVisible} setModalVisible={setModalVisible} />
                <LegendModal modalVisible={modalLegendVisible} setModalVisible={setModalLegendVisible} />
                {content}
                <TouchableOpacity style={styles.calendar_btn} onPress={()=>setModalCalendarVisible(!modalCalendarVisible)}>
                    <Text style={styles.calendar_btn__text}>Выбрать период</Text>
                    <MaterialCommunityIcons name="calendar" size={25} style={styles.calendar_btn__icon}/>
                        </TouchableOpacity>
                    <View style={styles.date_container}>
                        {totalTime?<View style={styles.statistic_container}> 
                            <Text style={styles.title}>Статистика </Text>
                            <TouchableOpacity onPress={()=>setModalLegendVisible(!modalLegendVisible)}>
                                <MaterialCommunityIcons name="alert-circle" style={styles.icon} size={30} color={"#5DB075"}  />
                            </TouchableOpacity>
                            </View>
                        : null}
                        <HistoryList modalVisible={modalVisible} setModalVisible={setModalVisible} data={data} />
                    </View>
            </View>
        )
    }

   
}

export default HistoryPage;

