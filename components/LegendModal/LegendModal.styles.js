import { StyleSheet } from "react-native";
import { background } from "styled-system";

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        marginTop: 40,
        marginBottom:0

      },
      modalView: {
        borderTopWidth:2,
        borderRightWidth:2,
        borderLeftWidth:2,
        borderColor:"grey",
        width:"100%",
        backgroundColor: "white",
        borderRadius: 20,
        flex:1,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button_close: {

      }
      ,close_container: {
        width: "100%",
        display:"flex",
        marginRight:20,
        marginTop:10,
        alignItems:"flex-end"
      },
      title: {
        fontSize: 20,
        textAlign:"center",
        margin:20
      },
      hours: {
          fontSize: 40,
          color:"#5DB075",
          marginBottom:20
      },
      legend_container: {

        width:"90%",
        flex:1,

    },
    error_text: {
      fontSize:20,
      color:"red"
    },
    title_day: {
      fontSize: 20,
      textAlign:"center",
    }


})

export default styles;