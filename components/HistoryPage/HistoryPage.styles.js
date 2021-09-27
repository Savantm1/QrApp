import { StyleSheet } from "react-native";

 const styles = StyleSheet.create ({
    container: {
        paddingTop:30,
        alignItems:"center",
        flexDirection: 'column',
        flexGrow: 1,
    },
    title: {
        fontSize: 20,
        textAlign:"center",
        margin:20,
        color: '#777'
    },
    hours: {
        fontSize: 40,
        color:"#5DB075",
        marginBottom:20
    },
    calendar_btn: {
        backgroundColor:"#ddd",
        width :"90%",
        display:'flex',
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        padding:10,
        paddingRight:20,
        borderRadius:20,
    },
    calendar_btn__text: {
        color: '#777',
        fontSize:20,
        flex:1,
        textAlign:"center",
    },
    calendar_btn__icon: {
        color: '#777',
    },
    date_container: {
        width:"90%",
        flex:1
    },
    statistic_container: {
        display:"flex",
        flexDirection:"row",
        width: "100%",
        alignItems:"center",
        justifyContent:"center"
    }  



    
});
export default styles;