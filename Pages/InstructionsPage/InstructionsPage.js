import { View, SafeAreaView, Text, TouchableOpacity, Linking, Alert, Button, } from 'react-native';
import React, { useCallback } from "react";
import styles from '../../Pages/InstructionsPage/InstructionsPage.styles';
import {SERVER_ADRESS} from "@env";
const InstructionsPage = (props) => {

  const RU = `${SERVER_ADRESS}/public/instructions/%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20-%20%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BF%D0%BE%20%D0%BA%D0%BE%D0%BD%D1%82%D1%80%D0%BE%D0%BB%D1%8E%20%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B5%D0%B3%D0%BE%20%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%B8(%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9).pdf`;
  const UZ = `${SERVER_ADRESS}/public/instructions/Ko'rsatma%20-%20ish%20vaqtini%20nazorat%20qilish%20uchun%20ariza%20(o'zbek)%20.pdf`;
  const TZ = `${SERVER_ADRESS}/public/instructions/%D0%94%D0%B0%D1%81%D1%82%D1%83%D1%80%D0%B0%D0%BC%D0%B0%D0%BB%20-%20%D0%B4%D0%B0%D1%80%D1%85%D0%BE%D1%81%D1%82%20%D0%B1%D0%B0%D1%80%D0%BE%D0%B8%20%D0%BD%D0%B0%D0%B7%D0%BE%D1%80%D0%B0%D1%82%D0%B8%20%D1%81%D0%BE%D0%B0%D1%82%D0%B8%20%D0%BA%D0%BE%D1%80%D3%A3%20(%D1%82%D0%BE%D2%B7%D0%B8%D0%BA%D3%A3).pdf`;

  const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);

    return (
      <View style={styles.link}>
        <TouchableOpacity  onPress={handlePress}>
          <Text style={styles.link_text}>{children}</Text>
          </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Информация</Text>
      <Text style={styles.subtitle}>В случае возниковения вопросов, связанных с работой приложения, пожалуйста, прочтите инструкцию.</Text>
      <OpenURLButton url={RU}>Инструкция</OpenURLButton>
      <OpenURLButton url={UZ}>Ko'rsatma</OpenURLButton>
      <OpenURLButton url={TZ}>Дастурамал</OpenURLButton>
    </View>
  )
}

export default InstructionsPage;