import { View,Text,TouchableOpacity,BackHandler, Alert} from 'react-native';
import React,{useEffect} from 'react';
import styles from "./SuccessPage.styles";
import { useDispatch } from 'react-redux';
import { ChangeLoading } from '../../Redux/QRScreenReducer';

const SuccessPage = (props) => {
    const dispatch = useDispatch();

    //Обработчик на жест назад
    const backAction = () => {
        props.scanner.reactivate();
        props.navigation.navigate("QrScreen");
        return true;
    };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  
    return (
        <View style={styles.container}>
            <View style={styles.block}>
                <Text style={styles.title}>{props.route.params.title}</Text>
                <Text style={styles.text}>Объект:</Text>
                <Text style={styles.text}>{props.route.params.objectName}</Text>
                <Text style={styles.text}>Время отметки:</Text>
                <Text style={styles.text}>{props.route.params.datetime}</Text>
                <Text style={styles.text}>ФИО:</Text>
                <Text style={styles.text}>{props.route.params.employeeName}</Text>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        dispatch(ChangeLoading(false));
                        props.scanner.reactivate();
                        props.navigation.navigate("QrScreen");
                    }
                }
                >
                    <Text style={{color:"white"}}  >Закрыть</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SuccessPage
