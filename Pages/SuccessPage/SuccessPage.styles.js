import { StyleSheet } from "react-native";
import { textAlign } from "styled-system";

const styles = StyleSheet.create({

    container: {
        backgroundColor: "#5DB075",
        flex: 1,
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    block: {
        backgroundColor:"white",
        borderRadius:10,
        width:"90%",
        padding:15,
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    },
    title : {
        fontSize:25,
        fontWeight:"600",
        marginBottom:10,
        textAlign:"center"
    },
    text: {
        fontSize:20,
        textAlign:"center"
    },
    btn: {
        margin: 12,
        padding: 15,
        borderRadius: 15,
        width: '90%',
        backgroundColor: '#5DB075',
        alignItems: 'center',
      }
})

export default styles;