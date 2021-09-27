import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        // justifyContent: "flex-end",
        // alignItems: "center",
        marginTop: 10,
        marginBottom:0,
        backgroundColor:"white"

      },
      modalView: {
        borderTopWidth:2,
        borderRightWidth:2,
        borderLeftWidth:2,
        borderColor:"grey",
        width:"100%",
        backgroundColor:"white",
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
        
      },
      close_container: {
        width: "100%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        marginRight:20,
        marginTop:10,
        paddingBottom:20,
        alignItems:"center"
      },
      title: {
        fontSize: 20,
        textAlign:"center",
        flex:1,
      },
      calendar_container: {

          width:"100%",
          flex:1

      },

    send_btn: {
      margin: 12,
      padding: 15,
      borderRadius: 15,
      width: '90%',
      backgroundColor: '#5DB075',
      color:"white",
      alignItems:"center",
    },
    send_btn_text: {
      color:"white"
    }

})

export default styles;