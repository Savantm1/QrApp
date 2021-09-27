import React from 'react'
import styles from "./LegendModal.styles"
import {Modal,View,Text,Pressable, TouchableOpacity, FlatList,StyleSheet,StatusBar } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import LegendList from './LegendList/LegendList';

const LegendModal = (props) => {

    return (
        <Modal
        animationType="slide"
        visible={props.modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
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
                <Text style={styles.title}>Легенда </Text>
                <View style={styles.legend_container}>
                  <LegendList/>
                </View>
          </View>
        </View>
      </Modal>
    )
}

export default LegendModal
