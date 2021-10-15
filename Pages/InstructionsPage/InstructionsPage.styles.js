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
        backgroundColor: "red",
        borderRadius: 30,
        overflow: "hidden",
        marginBottom: 20,
        width: "90%"
    }
})
export default styles;