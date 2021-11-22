import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: "100%",
        display: "flex",
        alignItems: "center"
    },
    text: {
        fontSize: 20,
        textAlign: "center",
    },
    title: {
        marginTop: 30,
        fontSize: 30,
        textAlign: "center",
        marginBottom: 20
    },
    subtitle: {
        fontSize: 20,
        textAlign: "center",
        marginBottom: 20
    },
    link: {

        borderRadius: 30,
        color:"white",
        backgroundColor:"#5db075",
        borderWidth: 1,
        borderColor:"#5DB075",
        overflow: "hidden",
        padding:12,
        marginBottom: 20,
        width: "90%"
    },
    link_text: {
        color:"white",
        fontSize:20,
        textAlign:"center"
    }
})
export default styles;