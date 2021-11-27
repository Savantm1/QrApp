import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        marginTop: 300,
        marginBottom:0

      },
      ios_picker: {
        width:"100%"
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
      date_container: {

        width:"90%",
        flex:1
    },
    error_text: {
      fontSize:20,
      
    },
    title_day: {
      fontSize: 20,
      textAlign:"center",
    },
    item:{
        backgroundColor:"red",
        width:100,
        height:100
    }


})

export default styles;