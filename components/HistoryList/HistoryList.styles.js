import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    date_container:{  
        width:"100%",
        flex:1
    },
    item: {
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        padding: 10,
        borderTopWidth:2,
        borderColor:"#777",
    },
    text :{
        fontSize:16,
        color:"#777"  
    },
    icon:{
        minWidth:50,
        color:"#777"  
    },
    time : {
        minWidth:50,
        textAlign:"center",
        fontSize: 16,
        color:"#777" 

    },
    title: {
        fontSize: 20,
        textAlign:"center",
        margin:20,
        color:"#777"  
      },
})

export default styles