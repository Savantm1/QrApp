import React from 'react'
import styles from './ModalComponent.styles.js'
import { View,Modal,Text,Pressable } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import HistoryListDay from '../HistoryListDay/HistoryListDay.js';

const ModalComponent = (props) => {
  const totalDayTime = useSelector(state => state.history.totalDayTime);
  const dayString = useSelector(state => state.history.dayString);

  let Header;
    if(totalDayTime){
       Header = totalDayTime.split("").includes(":") ?
          <>
          <Text style={styles.title_day}>{dayString}</Text>
          <Text style={styles.title}>Вы отработали:</Text>
          <Text style={styles.hours}> {totalDayTime} </Text>
          <Text style={styles.title}>Статистика </Text>
          </>
          :
          <>
            <Text style={styles.title}>{dayString}</Text>
            <Text style={styles.error_text}> {totalDayTime} </Text>
          </>

    }

    return (
<Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
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
                  {props.children}
                    {Header}
                    <HistoryListDay/>
          </View>
        </View>
      </Modal>
    )
}

export default ModalComponent;
