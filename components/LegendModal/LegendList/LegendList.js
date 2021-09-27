import React from 'react'
import { View,Text,TouchableOpacity, FlatList,StyleSheet,StatusBar } from 'react-native';
import styles from './LegendList.styles';
import { useDispatch, useSelector } from 'react-redux';


const LegendList = (props) => {
    
    const legend = useSelector(state => state.auth.legend)

    const Item = ({ value,description}) => (
        <View style={styles.item} >
 
            <Text style={styles.value}>{value} </Text>
            <Text style={styles.description}> - {description}</Text>
        </View>         
    );

    const renderItem = ({ item }) => {       
        return (
          <Item
            value={item.value}
            description={item.description}
          />
        );
    }

    return (
        <View style={styles.date_container}>
            <FlatList
                data={legend}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default LegendList;
