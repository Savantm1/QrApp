import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems:"center",
        flexDirection: 'column',
        justifyContent: "center",
        flexGrow: 1,
        backgroundColor:"white"
      },
      text: {
        fontSize:20,
        textAlign:"center"
      },
      title:{
          fontSize:34,
          marginBottom:20
      },
      image: {
        width:200,
        height:200,
      },
      btn: {
        margin: 12,
        padding: 15,
        borderRadius: 15,
        width: '90%',
        backgroundColor: '#5DB075',
        alignItems: 'center',
      },
})

export default styles;