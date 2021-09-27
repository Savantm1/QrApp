import { StyleSheet } from "react-native";
import { borderWidth, lineHeight } from "styled-system";

const styles = StyleSheet.create({
    item : {
        display:"flex",
        flexDirection:"row",
        alignItems:"flex-start",
        marginBottom:20,
        // borderWidth:2
        backgroundColor:"#eee",
        borderRadius:10,
        padding: 10
        
    },
    value: {
        fontSize:26,
        // backgroundColor:"red",
        marginBottom:0,
        lineHeight:26,
        textAlign:"center",
        // borderWidth:1

    },
    description: {
        fontSize: 16,
        // marginTop:5,
        // borderWidth:1
    },
})
export default styles;